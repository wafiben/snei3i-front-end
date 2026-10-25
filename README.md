# SNEI3I Front End

A React + TypeScript front-end application for managing freelancer information, authentication, and user profiles in the SNEI3I ecosystem.

## Overview

This project provides a responsive interface for:
- signing in to the platform
- viewing the list of freelancer users
- opening user details and profile pages
- creating freelancer accounts
- managing state through Redux

## Features

- User authentication screen
- Freelancer dashboard and listing view
- Detailed user information page
- Freelancer profile page
- User creation flow
- Redux-powered state management
- PrimeReact UI components for a modern interface
- Routing with React Router

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- React Router DOM
- PrimeReact
- MSW for API mocking in tests
- Jest + Testing Library

## Project Structure

```text
src/
├── api/                 # API layer and service calls
├── components/          # Reusable UI components
├── config/              # App configuration values
├── helpers/             # Utility/helper functions
├── layout/              # App shell and navigation layout
├── pages/               # Route-based views
│   ├── add-user/
│   ├── details-user/
│   ├── freelance-profile/
│   ├── freelancers/
│   └── sign-in/
├── store/               # Redux actions, reducers, and state
├── tests/               # Test setup and mocks
├── types/               # TypeScript interfaces and models
├── utils/               # Small shared helpers
├── App.tsx              # Main app routing
├── index.tsx            # App entry point
├── App.css              # Global app styling
└── index.css            # Base styling
```

## Routes

- `/` — Sign in page
- `/users` — Freelancer list
- `/users/:id` — User details
- `/profile/:id` — Freelancer profile
- `/create_freelancer_account` — Create account form

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

The app will run in development mode at:

```text
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
```

### 4. Run tests

```bash
npm test
```

## Available Scripts

- `npm start` — starts the development server
- `npm run build` — builds the optimized production bundle
- `npm test` — runs the test suite
- `npm run test:ci` — runs tests in CI mode
- `npm run eject` — ejects the Create React App configuration

## Notes

This application is built with Create React App and follows a modular front-end structure. State is centrally managed with Redux, while route-driven pages keep the app organized and easy to extend.

## License

This project does not currently include a specific license file. If needed, add one before publishing or distributing the project.
