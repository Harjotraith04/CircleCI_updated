# Full-Stack Application with CircleCI Integration

This is a full-stack application with a React frontend and Node.js backend, integrated with CircleCI for continuous integration.

## Project Structure

```
.
├── frontend/           # React frontend application
├── backend/           # Node.js backend server
└── .circleci/         # CircleCI configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm run install-all
   ```

3. Start the development servers:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## CircleCI Integration

This project is configured with CircleCI for continuous integration. The pipeline will:
1. Install dependencies
2. Run tests
3. Build the frontend application

To set up CircleCI:
1. Create an account on [CircleCI](https://circleci.com)
2. Connect your GitHub repository
3. The pipeline will automatically run on every push to the main branch

## Available Scripts

- `npm start` - Start the backend server
- `npm run dev` - Start both frontend and backend in development mode
- `npm test` - Run tests
- `npm run install-all` - Install dependencies for both frontend and backend 