#!/bin/bash

# Deployment script for Karhuno AI
echo "🚀 Starting deployment to Digital Ocean..."

# Variables
SERVER_IP="161.35.144.72"
SERVER_USER="root"
APP_DIR="/var/www/karhuno.com"
DOMAIN="karhuno.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if server is reachable
print_status "Checking server connectivity..."
if ! ping -c 1 $SERVER_IP &> /dev/null; then
    print_error "Cannot reach server $SERVER_IP"
    exit 1
fi

print_status "Building production version..."
npm run build

print_status "Creating deployment package..."
tar -czf karhuno-deploy.tar.gz \
    --exclude=node_modules \
    --exclude=.git \
    --exclude=.next \
    --exclude=logs \
    .

print_status "Uploading files to server..."
scp karhuno-deploy.tar.gz $SERVER_USER@$SERVER_IP:/tmp/

print_status "Deploying on server..."
ssh $SERVER_USER@$SERVER_IP << 'ENDSSH'
    # Stop the application
    pm2 stop karhuno-web || true
    
    # Backup current version
    if [ -d "/var/www/karhuno.com" ]; then
        mv /var/www/karhuno.com /var/www/karhuno.com.backup.$(date +%Y%m%d_%H%M%S)
    fi
    
    # Create app directory
    mkdir -p /var/www/karhuno.com
    cd /var/www/karhuno.com
    
    # Extract new files
    tar -xzf /tmp/karhuno-deploy.tar.gz
    
    # Install dependencies
    npm ci --production
    
    # Build the application
    npm run build
    
    # Create logs directory
    mkdir -p logs
    
    # Copy production environment
    cp production.env .env.local
    
    # Start the application
    pm2 start ecosystem.config.js --env production
    
    # Save PM2 configuration
    pm2 save
    
    # Cleanup
    rm /tmp/karhuno-deploy.tar.gz
ENDSSH

# Cleanup local files
rm karhuno-deploy.tar.gz

print_status "Deployment completed!"
print_status "Application should be running at https://$DOMAIN"
print_warning "Don't forget to check PM2 status: ssh $SERVER_USER@$SERVER_IP 'pm2 status'" 