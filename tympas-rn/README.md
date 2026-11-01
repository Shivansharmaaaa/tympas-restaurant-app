# Tympas Restaurant - React Native App

A beautiful fine dining restaurant mobile app built with React Native and Expo.

## Features

- Hero section with image carousel
- Menu display with categories
- Reservation booking form
- Events showcase
- Gallery with scrolling images
- Testimonials slider
- Responsive design for mobile and tablet

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Fix macOS File Limit Issue

If you encounter "EMFILE: too many open files" error on macOS, run this command in your terminal:

```bash
ulimit -n 10240
```

To make this permanent, add this to your `~/.zshrc` or `~/.bash_profile`:
```bash
ulimit -n 10240
```

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
# Option 1: Use the startup script (recommended)
./start.sh

# Option 2: Manual start with increased file limit
ulimit -n 10240 && npx expo start

# Option 3: Start for web
npx expo start --web
```

3. Run on your preferred platform:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser
- Scan QR code with Expo Go app on your device

## Project Structure

```
tympas-rn/
├── components/          # Reusable components
│   └── Header.js
├── sections/           # Page sections
│   ├── HeroSection.js
│   ├── IntroSection.js
│   ├── ChefsSection.js
│   ├── FeaturedCarouselSection.js
│   ├── MenuSection.js
│   ├── ReservationSection.js
│   ├── EventsSection.js
│   ├── TestimonialsSection.js
│   ├── GallerySection.js
│   └── Footer.js
├── constants/          # Theme and constants
│   └── theme.js
├── App.js              # Main app component
├── package.json
└── app.json
```

## Customization

Edit `constants/theme.js` to customize colors, fonts, and spacing.

## Troubleshooting

### File Limit Error (macOS)
If you see "EMFILE: too many open files", increase the limit:
```bash
ulimit -n 10240
```

### Metro Bundler Issues
Clear cache and restart:
```bash
npx expo start --clear
```

## License

© 2025 TYMPAS RESTAURANT, ALL RIGHTS RESERVED
