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

The frontend will be available at `http://localhost:3005` and the backend at `http://localhost:5000`.

## CircleCI Status

[![CircleCI](https://circleci.com/gh/<your-username>/CircleCI_updated_new.svg?style=svg)](https://circleci.com/gh/<your-username>/CircleCI_updated_new)

Last updated: [Current Timestamp]