# Hassan Portfolio

Modern portfolio website and admin-managed content system for Hassan Olanrewaju Abdulrahman.

## Overview

This project is a `Next.js` and `TypeScript` portfolio application built to showcase projects, resume content, skills, blog entries, and contact information in a polished multi-page experience.

It also includes a protected admin panel for managing core site content without manually rewriting every page section.

## Stack

- `TypeScript`
- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Framer Motion`
- `Lucide React`

## Features

- modern multi-page portfolio
- homepage sections driven by managed content
- projects, resume, blog, contact, and skills pages
- authenticated admin panel
- JSON-based managed content source
- media upload support
- SEO-ready metadata and crawl files

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Admin panel:

```text
http://localhost:3000/admin
```

## Environment Variables

Create a `.env.local` file with:

```env
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-admin-password
ADMIN_SESSION_SECRET=your-long-random-session-secret
```

## Project Files

- [Project Overview](./PROJECT_OVERVIEW.md)
- [Installation Guide](./INSTALLATION_GUIDE.md)

## Scripts

Development:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

Production start:

```bash
npm run start
```

## Content Source

Managed site content is stored in:

```text
content/managed-content.json
```

## Notes

- public content is driven by managed JSON data
- the admin panel updates the managed content source
- SEO support includes metadata, sitemap, robots, and structured data
