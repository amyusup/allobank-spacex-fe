# SpaceX Rocket Explorer - Technical Test Project

## Project Overview

This project is a technical test implementation showcasing SpaceX rocket data with a modern Next.js interface. It fulfills all specified functional and non-functional requirements.

## Key Features

### Functional Requirements

✅ **Rocket List View**

- Displays rocket images, names, and descriptions
- Responsive grid layout

✅ **Search Functionality**

- Real-time rocket search by name
- Instant results filtering

✅ **Add Rocket Feature**

- Form to add new rockets
- Client-side validation

✅ **Rocket Details**

- Comprehensive view with:
  - High-quality images
  - Technical specifications
  - Cost per launch
  - Country of origin
  - First flight date

### Technical Implementation

🔧 **API Integration**

- Uses official [SpaceX API](https://github.com/r-spacex/SpaceX-API)
- Optimized data fetching

⚛️ **State Management**

- Context API for global state
- Local state for UI interactions

🔄 **Lifecycle Handling**

- Proper component mounting/unmounting
- Memory leak prevention

🖥️ **UI States**

- Loading indicators
- Error handling with retry
- Success states

## Detailed Project Structure

```
project/
├── public/          # Static assets
├── src/
│   ├── app/         # Page routes
│   │   └── rockets/ # Rocket features
│   ├── components/
│   │   ├── element/ # Atomic UI components
│   │   ├── fragment/ # Composite components
│   │   └── svg/     # Custom SVG components
│   ├── containers/  # Complete page implementations
│   ├── helper/      # Utility functions
│   └── styles/      # Global CSS
```

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `dev`: Development mode
- `build`: Production build
- `start`: Production server
- `lint`: Code quality check

## Deployment

Ready for Vercel deployment with optimized builds.

## Technical Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Custom SVG components (located in src/components/svg)
- SpaceX REST API
