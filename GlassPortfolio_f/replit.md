# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. The portfolio features a clean design with glass morphism effects, dark/light theme toggle, smooth animations, and responsive navigation. It's designed to showcase a developer's skills, projects, and experience in an elegant and professional manner.

## Recent Changes (July 24, 2025)

✓ Enhanced SEO with proper meta tags and structured data
✓ Added animated typing effects using Typed.js
✓ Integrated AOS library for smooth scroll animations
✓ Fixed favicon implementation with SVG fallback
✓ Added Open Graph meta tags for social media sharing
✓ Implemented comprehensive glassmorphism design system
✓ Created responsive navigation with mobile hamburger menu
✓ Added animated skill progress bars with intersection observer
✓ Built contact form with validation and error handling
✓ Included particle background animation (performance optimized)
✓ Added accessibility features and reduced motion support
✓ Personalized with Om Nayani's actual resume details
✓ Updated projects to reflect real work: Face Recognition Attendance, Leukemia Detection, Voice Assistant
✓ Modified skills to match actual expertise: Python, AI/ML, OpenCV, TensorFlow, Django
✓ Updated education timeline with MBIT College and leadership roles
✓ Added authentic contact information and social links
✓ Fixed accessibility issues: added rel="noopener noreferrer", title attributes, screen reader support
✓ Removed inline CSS styles and moved to external CSS classes
✓ Enhanced typing animation timing for better user experience
✓ Added preloader with spinning animation and smooth transitions
✓ Implemented skill card flip effects with technology logos and descriptions
✓ Added glowing hover effects for all interactive elements
✓ Enhanced visual feedback with transform animations and shadows
✓ Removed flip card animations from skills section per user request
✓ Redesigned skills section to match reference image with clean grid layout
✓ Added comprehensive tech stack with 15+ technology icons (Python, JavaScript, Java, etc.)
✓ Implemented responsive grid layout similar to reference design

## User Preferences

Preferred communication style: Simple, everyday language.
Typing animation preference: Slower, more elegant typing speeds for better visual effect.

## System Architecture

### Frontend Architecture
- **Pure Frontend Application**: Built entirely with vanilla web technologies (HTML5, CSS3, JavaScript ES6+)
- **Single Page Application (SPA)**: Uses smooth scrolling and section-based navigation without page reloads
- **Component-Based JavaScript**: Modular JavaScript classes for theme management and navigation functionality
- **Mobile-First Responsive Design**: CSS Grid and Flexbox layout with breakpoints for various screen sizes

### Design System
- **CSS Custom Properties**: Centralized theming system using CSS variables for colors, typography, spacing, and transitions
- **Dual Theme Support**: Light and dark theme variants with smooth transitions
- **Glass Morphism UI**: Modern design trend using semi-transparent backgrounds with blur effects
- **Animation Library**: AOS (Animate On Scroll) for smooth entrance animations

## Key Components

### 1. Theme Management System
- **Purpose**: Provides seamless switching between light and dark themes
- **Implementation**: JavaScript class that manages theme state, persists user preference in localStorage
- **Features**: Automatic icon switching, smooth transitions, system preference detection

### 2. Navigation System
- **Purpose**: Handles responsive navigation with smooth scrolling and active link highlighting
- **Implementation**: JavaScript class managing mobile menu toggle, scroll-based navbar styling, and section highlighting
- **Features**: Sticky navigation, mobile hamburger menu, smooth scroll to sections

### 3. Responsive Layout
- **Purpose**: Ensures optimal viewing experience across all devices
- **Implementation**: CSS Grid and Flexbox with mobile-first approach
- **Features**: Fluid typography, flexible containers, touch-friendly interactive elements

### 4. Animation Framework
- **Purpose**: Provides engaging visual feedback and smooth transitions
- **Implementation**: AOS library for scroll-triggered animations
- **Features**: Fade-in effects, slide animations, staggered reveals

## Data Flow

### Theme Management Flow
1. User clicks theme toggle button
2. ThemeManager class toggles between light/dark themes
3. CSS custom properties update instantly
4. Theme preference saved to localStorage
5. Icon updates to reflect current theme

### Navigation Flow
1. User interacts with navigation (click/scroll)
2. NavigationManager handles smooth scrolling to target section
3. Active link highlighting updates based on scroll position
4. Mobile menu closes automatically on link selection

### Animation Flow
1. User scrolls through page sections
2. AOS library detects elements entering viewport
3. CSS animations trigger based on data attributes
4. Elements animate in with specified effects and timing

## External Dependencies

### CDN Resources
- **Google Fonts**: Poppins font family for consistent typography
- **Font Awesome**: Icon library for UI elements and social links
- **AOS Library**: Scroll animation framework for enhanced user experience

### Browser APIs
- **Local Storage**: Theme preference persistence
- **Intersection Observer**: Section visibility detection for navigation
- **CSS Custom Properties**: Dynamic theming support

## Deployment Strategy

### Static Hosting Ready
- **Architecture**: Pure frontend application suitable for static hosting platforms
- **Deployment Options**: GitHub Pages, Netlify, Vercel, or any static hosting service
- **Performance**: Optimized for fast loading with external CDN dependencies
- **SEO**: Semantic HTML structure with meta tags for social sharing

### Development Workflow
- **No Build Process Required**: Direct file editing and browser testing
- **Live Reload**: Compatible with live server extensions for development
- **Version Control**: Git-friendly structure with clear file organization

### Performance Considerations
- **Lightweight**: Minimal JavaScript footprint with vanilla implementation
- **Caching Strategy**: Leverages browser caching for CSS and JavaScript files
- **CDN Dependencies**: External resources loaded from reliable CDNs for global performance