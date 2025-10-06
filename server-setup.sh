#!/bin/bash

# Server setup script for Digital Ocean Ubuntu 20.04/22.04
echo "🔧 Setting up server for Karhuno AI..."

# Update system
apt update && apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
apt install -y nginx

# Install Certbot for SSL
apt install -y certbot python3-certbot-nginx

# Create application directory
mkdir -p /var/www/karhuno.com
chown -R www-data:www-data /var/www/karhuno.com

# Configure Nginx
cat > /etc/nginx/sites-available/karhuno.com << 'EOF'
server {
    listen 80;
    server_name karhuno.com www.karhuno.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable the site
ln -s /etc/nginx/sites-available/karhuno.com /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

# Configure PM2 startup
pm2 startup systemd -u root --hp /root

# Configure firewall
ufw allow ssh
ufw allow 'Nginx Full'
ufw --force enable

# Install SSL certificate (run after DNS is pointed to server)
echo "🔐 To install SSL certificate, run:"
echo "certbot --nginx -d karhuno.com -d www.karhuno.com"

echo "✅ Server setup completed!"
echo "📍 Next steps:"
echo "1. Point your domain DNS to this server IP"
echo "2. Run SSL certificate installation"
echo "3. Deploy your application" 