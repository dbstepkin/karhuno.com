# Настройка проекта Karhuno AI

## Описание проекта

Karhuno AI - это лендинг для B2B платформы поиска сигналов продаж. Основная цель - захват лидов через:
- Форму Early Access на главной странице и отдельной странице `/early-access`
- Детальную форму с информацией о компании и ICP (Ideal Customer Profile)
- Интеграцию с email сервисами для автоматических уведомлений

## Технический стек

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** TailwindCSS, Framer Motion для анимаций
- **Email:** Resend API для отправки email
- **База данных:** File-based storage для early access emails (возможна интеграция с PostgreSQL/Neon)
- **Webhook:** Интеграция с n8n для аналитики

## Локальный запуск

### 1. Установка зависимостей

```bash
# Если у вас есть Bun
bun install

# Или с помощью npm (с legacy режимом для решения конфликтов)
npm install --legacy-peer-deps
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# Email Service Configuration (обязательно для работы email)
RESEND_API_KEY=re_your_actual_resend_api_key_here

# Database Configuration (опционально, сейчас используется file storage)
DATABASE_URL=postgresql://username:password@host:port/database

# Environment
NODE_ENV=development

# Domain configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Webhook configuration (опционально)
SEND_TO_EXTERNAL=true
NEXT_PUBLIC_SEND_WEBHOOKS=true

# JWT для auth (если планируется)
JWT_SECRET=your_jwt_secret_here
```

### 3. Настройка Resend API

1. Зарегистрируйтесь на [resend.com](https://resend.com)
2. Создайте API ключ
3. Добавьте домен `karhuno.com` и подтвердите его
4. Обновите переменную `RESEND_API_KEY` в `.env.local`

### 4. Запуск проекта

```bash
npm run dev
```

Проект будет доступен на http://localhost:3000

## Функциональность email

### Early Access форма
- **API:** `/api/early-access`
- **Хранение:** `data/early-access-emails.json`
- **Email шаблон:** `emails/early-access.tsx`
- **Уведомления:** 
  - Пользователю: приветственное письмо
  - Админу: уведомление о новой регистрации на `dstepkin@gmail.com`

### Детальная форма (ICP)
- **API:** `/api/mail`
- **Email шаблоны:** 
  - `emails/index.tsx` - для пользователя
  - `emails/getData.tsx` - для админа
- **Webhook:** интеграция с n8n для аналитики

## Формы захвата лидов

### 1. Главная страница (`/`)
- Поисковая строка с анимированными плейсхолдерами
- Кнопки "Try for free" и "Find" открывают модальные окна
- Сбор данных: ICP, имя, компания, email, дополнительные детали

### 2. Early Access страница (`/early-access`)
- Простая форма с email
- Красивая анимация и success состояние
- Промис 1000 бесплатных кредитов

### 3. FAQ секция
- Контактная форма в нижней части
- Пока только console.log (можно подключить к API)

## Структура данных

### Early Access Email
```json
{
  "email": "user@example.com",
  "timestamp": "2025-06-04T10:00:00.000Z"
}
```

### ICP Form Data
```json
{
  "to": "user@example.com",
  "ICP": "European energy companies working with startups",
  "moreDetails": "Additional details about target market",
  "company": "User Company Name",
  "name": "User Name"
}
```

## Email шаблоны

Все email шаблоны находятся в папке `/emails/` и используют React Email:
- `early-access.tsx` - приветственное письмо для early access
- `index.tsx` - благодарственное письмо пользователю
- `getData.tsx` - уведомление админу с данными лида

## Вебхуки и аналитика

- **URL:** `https://n8n.karhuno.info/webhook/05a5f9e4-8be4-4d6a-b53c-12705aaa24a8`
- **Прокси API:** `/api/webhook`
- **Данные:** все действия пользователей отправляются для аналитики

## Проблемы и решения

### Google Fonts не загружается
Это известная проблема при разработке без интернета или с блокировкой. Не влияет на функциональность, используются fallback шрифты.

### Конфликт React 19 с cmdk
Решается установкой с флагом `--legacy-peer-deps`.

## Следующие шаги для деплоя

1. ✅ Локальный запуск настроен
2. 🔜 Настройка переменных окружения на сервере
3. 🔜 Проверка домена для Resend
4. 🔜 Тестирование email отправки
5. 🔜 Настройка CI/CD для деплоя 