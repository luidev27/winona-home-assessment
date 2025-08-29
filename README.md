# Winona Nuxt Template
## Introduction
This template is designed to kickstart projects quickly with an essential toolset.

## Installation
Just run `npm install` followed by `npm run dev`.

## Used libraries and framework
Nuxt 3 with v4 compatibility mode: https://nuxt.com/docs/getting-started/upgrade

Tailwind CSS v4: https://tailwindcss.com/docs/v4-beta

Component library: DaisyUI https://v5.daisyui.com/docs/v5-beta/

Pinia store: https://pinia.vuejs.org/

## Features

- **Homepage**
  - Lists all articles with title, published, and updated dates.
  - Articles displayed using **DaisyUI cards**.
  - SEO-friendly titles and meta descriptions.

- **Article Detail Page**
  - Shows article content using `v-html` with **DaisyUI typography** (`prose` class).
  - Includes reviewer information.
  - **Back CTA** button as a circular icon for navigation.
  - SEO-friendly per-article titles and descriptions.

- **Theme Toggle**
  - Reusable **`ThemeToggle` component** used in both header and footer.
  - Supports **light/dark mode** via DaisyUI `data-theme`.
  - Theme state is globally shared.

- **Reusable Utilities**
  - `formatDate` utility to convert API date strings to readable format.
  - TypeScript interfaces for API responses:
    - `PageSummary` for article list.
    - `PageDetail` for single article pages.

- **Responsive Layout**
  - Sticky header and footer.
  - Scrollable content area that fills the viewport.
  - Fully responsive and mobile-friendly design.
  