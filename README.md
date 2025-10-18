# Portfolio 2 - Interactive 3D with Spline

A modern portfolio project built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui, featuring interactive 3D scenes powered by Spline.

## Features

- 🎨 **shadcn/ui Components** - Beautiful, accessible UI components
- 🎭 **Interactive 3D Scenes** - Powered by Spline for immersive experiences
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ⚡ **TypeScript** - Type-safe development
- 🎯 **Framer Motion** - Smooth animations and interactions
- ✨ **Spotlight Effects** - Interactive hover effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # shadcn/ui components
│       ├── card.tsx      # Card component
│       ├── demo.tsx      # Demo component showcasing Spline
│       ├── spline.tsx    # Spline scene wrapper
│       └── spotlight.tsx # Interactive spotlight effect
├── lib/                  # Utility functions
│   └── utils.ts         # cn utility for class merging
└── package.json         # Dependencies and scripts
```

## Components

### SplineScene
A wrapper component for Spline 3D scenes with loading fallback.

### SplineSceneBasic
Demo component showcasing an interactive 3D scene with spotlight effects.

### Spotlight
Interactive spotlight effect that follows mouse movement.

### Card
shadcn/ui card component for consistent styling.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Spline** - 3D scene rendering
- **Framer Motion** - Animations

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT


