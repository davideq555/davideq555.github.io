# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Vue 3, TypeScript, and Vite. The project uses Tailwind CSS for styling and Vue i18n for internationalization (Spanish/English).

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript checking first)
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- Vue 3 with Composition API and `<script setup>` syntax
- TypeScript for type safety
- Vite for build tooling and development server
- Tailwind CSS for styling
- Vue i18n for internationalization
- Heroicons for icons

### Project Structure
- `src/components/` - All Vue components for different sections (Header, Hero, About, Skills, Projects, Contact)
- `src/composables/` - Reusable composition functions (useLanguage, useTheme)
- `src/locales/` - Translation files (es.json, en.json)
- `src/App.vue` - Main app component with snap scrolling layout
- `src/main.ts` - App entry point with i18n setup

### Key Features
- **Internationalization**: Built-in Spanish/English support with browser language detection and localStorage persistence
- **Snap Scrolling**: Full-screen sections with snap-to behavior
- **Dark Mode**: Theme switching capability (useTheme composable)
- **Responsive Design**: Tailwind CSS responsive utilities

### Development Patterns
- Use Composition API with `<script setup>` syntax for all components
- Composables for shared logic (language switching, theme management)
- TypeScript throughout with proper type definitions
- Tailwind classes for all styling
- Translation keys in locales files for all user-facing text

### Key Composables
- `useLanguage()` - Language switching and translation utilities
- `useTheme()` - Theme management (dark/light mode)