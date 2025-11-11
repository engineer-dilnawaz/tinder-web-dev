# Tinder Web Dev

A modern, feature-rich web application built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development with a focus on component architecture, state management, and user experience.

## ✨ Features

- 🎨 **Multiple Themes** - Switch between light, dark, forest, black, and luxury themes
- 🧩 **Component-Based Architecture** - Modular, reusable components with custom hooks
- 🎯 **TypeScript** - Full type safety throughout the application
- 🚀 **Modern React** - Built with React 19 and latest features
- 💅 **Tailwind CSS v4** - Utility-first CSS with DaisyUI components
- 📱 **Responsive Design** - Mobile-first approach with DaisyUI components
- 🔄 **State Management** - Zustand for global state management
- 🌐 **Data Fetching** - TanStack Query (React Query) for server state
- 📝 **Form Handling** - React Hook Form with Zod validation
- 🧭 **Routing** - React Router for navigation

## 🛠️ Tech Stack

### Core

- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.2.2 - Build tool and dev server

### Styling

- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **DaisyUI** 5.5.0 - Component library for Tailwind
- **theme-change** 2.5.0 - Theme switching functionality

### State & Data

- **Zustand** 5.0.8 - Lightweight state management
- **TanStack Query** 5.90.7 - Server state management
- **Axios** 1.13.2 - HTTP client

### Forms & Validation

- **React Hook Form** 7.66.0 - Performant forms
- **Zod** 4.1.12 - Schema validation

### Routing

- **React Router** 7.9.5 - Client-side routing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, or **pnpm** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/engineer-dilnawaz/tinder-web-dev.git
cd tinder-web-dev
```

> **Note:** Replace the repository URL with your own if you've forked the project.

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### Development

Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Build the application for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
tinder-web-dev/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, SVGs, and other assets
│   │   └── svgs/          # SVG components
│   ├── components/        # React components
│   │   ├── Avatar/        # Avatar component
│   │   ├── Logo/          # Logo component
│   │   ├── Navbar/        # Navigation bar component
│   │   ├── ProfileDropdown/ # Profile dropdown menu
│   │   └── ThemeToggler/  # Theme switching component
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🎨 Themes

The application supports multiple themes that can be switched dynamically:

- **Light** - Default light theme
- **Dark** - Dark mode (respects system preference)
- **Forest** - Green-themed design
- **Black** - Pure black theme
- **Luxury** - Premium theme

Themes are configured in `src/index.css` and can be toggled using the ThemeToggler component in the navbar.

## 🧩 Key Components

### Navbar

The main navigation bar containing:

- Logo
- Theme toggler dropdown
- User avatar with profile dropdown

### ThemeToggler

A dropdown component that allows users to switch between available themes. The selected theme is persisted in localStorage.

### Avatar

A reusable avatar component for displaying user profile pictures.

### ProfileDropdown

A dropdown menu component for user profile actions.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS & DaisyUI

Tailwind CSS v4 is configured via `src/index.css` using the new `@import` and `@plugin` syntax. DaisyUI themes are configured in the same file.

### TypeScript

TypeScript configuration is split across:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js/Vite config

### Vite

Vite configuration is in `vite.config.ts` with React and Tailwind CSS plugins.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://zustand-demo.pmnd.rs/)

---

Built with ❤️ using modern web technologies
