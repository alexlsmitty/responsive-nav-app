# Responsive Navigation Bar Component

## Overview
A modern, responsive navigation bar built with React and TailwindCSS, featuring a collapsible menu, smooth animations, and mobile-first design. Created for my girlfriend's art website, as well as for my CPRG310 Course. 

## Design Inspirations and Ideas
My girlfriend made a few requests when I embarked on this project, primarily that the navigation menu was yellow and included her name and logo.
She also wanted the design to appear "friendly and warm," which I achieved by utilizing TailwindCSS classes to make the button links rounder, with a soft shadow effect. Despite this soft appearance though, the menu is still snappy and fast.
I made a mockup in Figma to start, and upon getting approval I moved onto making the codebase for this application.
Most of my inspiration for this specific design has been previous ones I did for her website, but I wanted to improve upon the super basic HTML and CSS I employed to make her previous design.

## Original Design:
![Screenshot 2025-01-29 002730](https://github.com/user-attachments/assets/74547e25-25fa-4a86-8495-36d27ee091d8)
Original Design Mockup made in Figma

## Features
- 🎨 Yellow-themed design with hover effects
- 📱 Responsive layout (mobile-first approach)
- 🔄 Smooth transitions and animations
- 🎯 Active page highlighting
- 🖱️ Click-outside detection for menu closure
- ♿ Accessibility features (aria-labels, semantic HTML)

## Components

### Navbar (`/components/Navbar/Navbar.jsx`)
Main navigation component that handles:
- State management for menu open/close
- Click-outside detection using refs
- Responsive layout switching
- Menu button toggle with icon changes

### LinkMenu (`/components/Navbar/LinkMenu.jsx`)
Handles the navigation links with:
- Dynamic route generation
- Material icons integration
- Active route highlighting
- Smooth hover transitions
- Mobile-optimized layout

### Logo (`/components/Navbar/Logo.jsx`)
Brand identity component featuring:
- Responsive image sizing
- Router integration for home navigation
- Flexible layout adaptation

## Technical Implementation

### State Management
```jsx
const [isLinkMenuOpen, setLinkMenuOpen] = useState(false);
```

### Click Detection for Closing Menu
```jsx
useEffect(() => {
  const handleClickOutside = (event) => {
    if (!menuRef.current?.contains(event.target)) {
      setLinkMenuOpen(false);
    }
  };
});
```

### Responsive Classes
className="flex flex-col sm:flex-row justify-between items-center"

Breakpoint-based layout to ensure responsive design on mobile and desktop.

### Setup Instructions
Install dependencies:

Start development server:

Dependencies:
- React
- React Router DOM
- TailwindCSS
- Material Icons
Browser Support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
