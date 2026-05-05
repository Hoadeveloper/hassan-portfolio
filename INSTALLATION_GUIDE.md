# Installation Guide

## Requirements

Before running the project, make sure you have:

- `Node.js` installed
- `npm` available

A recent Node.js LTS version is recommended.

## 1. Open the Project

Open a terminal in the project folder:

```powershell
cd c:\Users\olaiw\OneDrive\Desktop\hassan-portfolio
```

## 2. Install Dependencies

Install the required packages:

```powershell
npm install
```

## 3. Configure Environment Variables

Create or update the `.env.local` file in the project root.

Required variables:

```env
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-admin-password
ADMIN_SESSION_SECRET=your-long-random-session-secret
```

Notes:

- use a strong `ADMIN_SESSION_SECRET`
- the session secret should be long and hard to guess
- avoid placeholder secrets in production

## 4. Start the Development Server

Run:

```powershell
npm run dev
```

The app should start locally at:

```text
http://localhost:3000
```

## 5. Open the Admin Panel

To access the admin area, open:

```text
http://localhost:3000/admin
```

If not signed in, you will be redirected to:

```text
http://localhost:3000/admin/login
```

## 6. Production Build

To create a production build:

```powershell
npm run build
```

To start the production server:

```powershell
npm run start
```

## Useful Commands

Start development server:

```powershell
npm run dev
```

Run linting:

```powershell
npm run lint
```

Build for production:

```powershell
npm run build
```

Start production server:

```powershell
npm run start
```

## Content Management

Managed site content is stored in:

- `content/managed-content.json`

Static assets are stored in:

- `public`

Most editable content can be updated through the admin panel after signing in.

## Troubleshooting

If the app does not start:

- make sure dependencies are installed
- confirm `.env.local` exists
- verify the admin environment variables are set correctly
- make sure another process is not already using port `3000`

If the admin panel does not work:

- verify `ADMIN_USERNAME`
- verify `ADMIN_PASSWORD`
- verify `ADMIN_SESSION_SECRET`

If build files or logs are locked on Windows:

- stop the running dev server
- retry the command
