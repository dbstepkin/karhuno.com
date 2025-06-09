# 🚀 Деплой Karhuno AI на Digital Ocean

## Предварительные требования

- Digital Ocean Droplet (Ubuntu 20.04/22.04, минимум 2GB RAM)
- Домен karhuno.com настроен на DNS провайдере
- SSH доступ к серверу

## 📋 Подготовка проекта

### 1. Убедитесь что все изменения закоммичены

```bash
git add .
git commit -m "Production ready"
git push origin main
```

### 2. Проверьте production.env файл

Убедитесь что все переменные окружения заполнены:
- `RESEND_API_KEY` - для отправки email
- `NEXT_PUBLIC_APP_URL` - https://karhuno.com
- `JWT_SECRET` - секретный ключ

## 🔧 Настройка сервера (один раз)

### 1. Подключитесь к серверу

```bash
ssh root@161.35.144.72
```

### 2. Запустите настройку сервера

```bash
# Скачайте и запустите скрипт настройки
curl -O https://raw.githubusercontent.com/your-repo/karhuno.com/main/server-setup.sh
chmod +x server-setup.sh
./server-setup.sh
```

Или вручную выполните команды из `server-setup.sh`.

### 3. Настройте DNS

Направьте ваш домен на IP сервера:
- `A запись`: karhuno.com → 161.35.144.72
- `A запись`: www.karhuno.com → 161.35.144.72

### 4. Установите SSL сертификат

После настройки DNS (может занять до 24 часов):

```bash
certbot --nginx -d karhuno.com -d www.karhuno.com
```

## 🚀 Деплой приложения

### Автоматический деплой (рекомендуется)

1. Сделайте скрипт исполняемым:
```bash
chmod +x deploy.sh
```

2. Запустите деплой:
```bash
./deploy.sh
```

### Ручной деплой

1. Соберите проект:
```bash
npm run build
```

2. Создайте архив:
```bash
tar -czf karhuno-deploy.tar.gz --exclude=node_modules --exclude=.git --exclude=.next .
```

3. Загрузите на сервер:
```bash
scp karhuno-deploy.tar.gz root@161.35.144.72:/tmp/
```

4. Разверните на сервере:
```bash
ssh root@161.35.144.72
cd /var/www/karhuno.com
tar -xzf /tmp/karhuno-deploy.tar.gz
npm ci --production
npm run build
cp production.env .env.local
pm2 restart karhuno-web
```

## 📊 Мониторинг

### Проверка статуса PM2
```bash
ssh root@161.35.144.72 'pm2 status'
```

### Просмотр логов
```bash
ssh root@161.35.144.72 'pm2 logs karhuno-web'
```

### Перезапуск приложения
```bash
ssh root@161.35.144.72 'pm2 restart karhuno-web'
```

### Проверка Nginx
```bash
ssh root@161.35.144.72 'nginx -t && systemctl status nginx'
```

## 🔍 Проблемы и решения

### Сайт не загружается
1. Проверьте PM2: `pm2 status`
2. Проверьте Nginx: `systemctl status nginx`
3. Проверьте логи: `pm2 logs karhuno-web`

### SSL не работает
1. Проверьте DNS настройки
2. Убедитесь что домен направлен на правильный IP
3. Повторите: `certbot --nginx -d karhuno.com -d www.karhuno.com`

### Ошибки сборки
1. Проверьте версию Node.js: `node -v` (должно быть 18+)
2. Очистите кэш: `npm cache clean --force`
3. Переустановите зависимости: `rm -rf node_modules && npm install`

## 📁 Структура на сервере

```
/var/www/karhuno.com/          # Основная папка приложения
├── .next/                     # Собранное приложение
├── public/                    # Статические файлы
├── node_modules/              # Зависимости
├── logs/                      # Логи PM2
├── .env.local                 # Переменные окружения
├── ecosystem.config.js        # Конфигурация PM2
└── package.json              # Зависимости проекта
```

## 🔄 Обновление приложения

Для обновления просто запустите:
```bash
./deploy.sh
```

Скрипт автоматически:
- Остановит старую версию
- Создаст backup
- Развернет новую версию
- Запустит приложение

## 🛡️ Безопасность

- Firewall настроен (только SSH и HTTP/HTTPS)
- SSL сертификаты автоматически обновляются
- Заголовки безопасности настроены в Next.js
- PM2 перезапускает приложение при сбоях

## 📞 Поддержка

При проблемах с деплоем проверьте:
1. Логи PM2: `pm2 logs karhuno-web`
2. Статус Nginx: `systemctl status nginx`
3. Доступность порта 3000: `netstat -tlnp | grep 3000` 