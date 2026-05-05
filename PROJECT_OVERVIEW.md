# Project Overview

## Summary

`hassan-portfolio` is a personal portfolio web application built to present Hassan Olanrewaju Abdulrahman's work, skills, resume, projects, blog content, and contact information in a polished, modern interface.

The project is more than a static portfolio. It includes an authenticated admin panel that allows important site content to be managed from inside the application instead of editing page content manually in many different files.

## Core Purpose

The project is designed to:

- present professional identity and technical strengths
- showcase projects and experience
- provide a central contact and resume destination
- support ongoing content updates through an admin interface
- offer a production-ready portfolio structure with SEO support

## Tech Stack

The application is primarily built with:

- `TypeScript`
- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Framer Motion`
- `Lucide React`

## Main Features

- multi-page portfolio site
- homepage with structured sections
- projects page
- resume page
- blog page
- contact page
- skills page
- protected admin panel
- managed JSON-based content system
- media upload support from the admin panel
- SEO metadata, sitemap, robots, and structured data support

## Content Management Model

The public-facing content is largely driven by the managed content file:

- `content/managed-content.json`

This file stores data for:

- site details
- navigation
- media references
- homepage sections
- projects
- resume
- blog entries

The admin panel updates this managed content source, allowing the portfolio to be maintained without directly editing every route or component.

## Admin Panel

The project includes a protected admin area under:

- `/admin`

The admin panel supports managing:

- site settings
- navigation
- homepage content
- projects
- resume
- blog content
- media uploads

Authentication is environment-variable based and protected with signed session cookies and route-level checks.

## SEO and Discoverability

The project includes a technical SEO foundation, including:

- page metadata
- canonical URLs
- Open Graph and Twitter metadata
- `robots.txt`
- `sitemap.xml`
- `manifest.webmanifest`
- structured data for search engines

## Project Structure

Important areas of the codebase:

- `src/app` for routes and page entry points
- `src/features` for feature-specific UI sections
- `src/components` for shared UI and layout components
- `src/lib` for utilities, auth, SEO, and content helpers
- `content` for managed JSON content
- `public` for static assets

## Who This Project Is For

This project is suitable for:

- personal branding
- client-facing portfolio presentation
- showcasing full-stack development work
- maintaining portfolio content through a simple internal admin workflow

## Current Direction

The project is structured to keep improving over time through:

- stronger project case studies
- richer blog content
- more complete contact and profile information
- continued admin and production hardening
