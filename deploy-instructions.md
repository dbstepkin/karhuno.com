# 🚀 Деплой на Digital Ocean

## Шаг 1: Подключение к серверу
```bash
ssh root@161.35.144.72
```

## Шаг 2: Обновление кода
```bash
# Переходим в директорию приложения
cd /var/www/karhuno.com

# Останавливаем текущее приложение
pm2 stop karhuno-web

# Делаем backup текущей версии
cp -r /var/www/karhuno.com /var/www/karhuno.com.backup.$(date +%Y%m%d_%H%M%S)

# Обновляем код с GitHub
git pull origin main

# Устанавливаем зависимости
npm ci

# Собираем production версию
npm run build
```

## Шаг 3: Перезапуск приложения
```bash
# Запускаем приложение через PM2
pm2 start ecosystem.config.js --env production

# Проверяем статус
pm2 status

# Сохраняем конфигурацию PM2
pm2 save
```

## Шаг 4: Проверка
Откройте браузер и перейдите на:
- https://karhuno.com
- Проверьте что title в закладке показывает "Karhuno AI"
- Проверьте работу формы early-access

## Возможные проблемы:
- Если PM2 не установлен: `npm install -g pm2`
- Если нет git: `git clone https://github.com/Karhuno-AI/karhuno.com.git /var/www/karhuno.com`
- Если ошибки с правами: `chown -R www-data:www-data /var/www/karhuno.com`

## Логи для диагностики:
```bash
# Логи PM2
pm2 logs karhuno-web

# Логи Nginx
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
``` 