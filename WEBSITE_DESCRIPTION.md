# TYMPAS Restaurant Website - Complete Description & Prompt

## Overview
A sophisticated, luxury fine dining restaurant website for "Tympas" featuring elegant design, smooth animations, and premium user experience. The site showcases a high-end restaurant with full-screen hero sections, interactive menus, reservation system, and immersive visual storytelling.

---

## Design System & Visual Identity

### Color Palette
- **Primary Dark Background**: `#0a0a0a` (Deep black)
- **Teal Background**: `#1a3a3a` (Rich teal-green)
- **Gold Accent**: `#d4af37` (Elegant gold)
- **Light Gold**: `#f5e6c8` (Warm beige-gold)
- **White**: `#ffffff`
- **Light Gray**: `#e5e5e5`

### Typography
- **Primary Serif**: 'Cormorant Garamond' (300, 400, 600, 700) - Used for headings, titles, elegant text
- **Primary Sans-Serif**: 'Montserrat' (300, 400, 500, 600) - Used for body text, navigation, buttons
- **Decorative**: 'Allura' (400) - Used for taglines and decorative text

### Design Principles
- **Luxury & Elegance**: Sophisticated color scheme with gold accents
- **Minimalism**: Clean layouts with generous white space
- **Visual Hierarchy**: Large serif headings, subtle body text
- **Premium Feel**: Glassmorphism effects, smooth animations, high-quality imagery

---

## Layout Structure & Sections

### 1. Fixed Header/Navigation
**Position**: Fixed at top, always visible
**Features**:
- Glassmorphism effect with backdrop blur (20px blur, 180% saturation)
- Transparent initially, becomes more opaque on scroll
- Logo: Circular icon with star (★) + "TYMPAS" text in gold
- Navigation menu: Home, Menu, About, Events, Gallery, Contact
- "BOOK A TABLE" button with gold border
- Hamburger menu for mobile (slides in from right)
- Smooth scroll behavior for anchor links
- Header padding reduces on scroll (25px → 20px)

**Mobile Behavior**:
- Hamburger menu replaces navigation
- Mobile menu slides in from right with blur backdrop
- Full navigation accessible in mobile menu

---

### 2. Hero Section
**Layout**: Full viewport height (100vh)
**Background**: 
- Teal background with 40px border inset
- 4-image slideshow with 5-second intervals
- Images fade in/out with sequential text animation
- Images filtered to 50% brightness for text readability

**Content**:
- 4 rotating text slides synchronized with images:
  1. "GOOD TIMES" / "GREAT TASTES" - "EXPERIENCE CULINARY EXCELLENCE"
  2. "FINE DINING" / "REDEFINED" - "WHERE PASSION MEETS PERFECTION"
  3. "EXQUISITE" / "FLAVORS" - "A JOURNEY FOR YOUR SENSES"
  4. "UNFORGETTABLE" / "MOMENTS" - "CRAFTED WITH LOVE & PRECISION"

**Typography**:
- Hero titles: 80px, Cormorant Garamond, 300 weight, 15px letter-spacing
- Hero description: 14px, uppercase, 4px letter-spacing

**Interactive Elements**:
- **Location Info** (bottom-left): Address and phone number, fades in after 1s
- **Reserve Circle** (bottom-right): 180px circular button with rotating animation, "RESERVE YOUR TABLE" text, links to reservation section

**Animation Sequence**:
1. Text fades out (700ms)
2. Background image changes
3. New text fades in (300ms delay)
4. Total cycle: 5 seconds

---

### 3. Intro Section
**Layout**: Centered text with decorative elements
**Content**:
- SVG icon (circle with curved line - decorative fork/spoon)
- Main title: "Tympas is for everyone who collects beautiful moments"
- Tagline: "For the best memories" (in Allura font, gold color)

**Visual Elements**:
- Two vertical lines at 33.333% and 66.666% positions
- Animated beams that move with scroll position
- Beams have gradient glow effect (gold with transparency)

---

### 4. Chef's Section (About)
**Layout**: Two-column grid (text left, image right)
**Text Column**:
- Large background text: "CHEF'S" (180px, 5% opacity, decorative)
- Title: "ONLY THE FINEST FOOD & GREAT SERVICE" (38px, uppercase, Montserrat)
- Description paragraph
- "READ MORE" button with gold border

**Image Column**:
- Main circular image (650px max-width, aspect-ratio 1:1)
- Floating secondary image (240x320px) positioned bottom-left
- Floating image has smooth float animation (6s infinite)
- Images appear with fade-in on scroll

**Reverse Layout Variant**:
- Second instance with reversed layout (image left, text right)
- Title: "OUR GOALS & HISTORY"
- Label: "cuisine" (lowercase, gold)

---

### 5. Featured Carousel Section
**Layout**: Full-width, 70vh height
**Background**: 
- Full-screen background images with Ken Burns effect (zoom + pan)
- Images at 35% brightness
- Smooth fade transitions between slides

**Content Structure**:
- Three slides: Cocktails, Menu, Wine List
- Each slide has:
  - Large side text (60px, 12% opacity): "WINE", "MENU", "COCKTAILS"
  - Center content with animated lines
  - Main title (65px, uppercase, Cormorant Garamond)
  - Subtitle (12px, lowercase)
  - "VIEW" button

**Animation**:
- Text slides in from right (1.2s cubic-bezier)
- Horizontal lines expand from center (0.8s with 0.4s delay)
- Ken Burns effect: 15s zoom from 100% to 112%
- Auto-advance every 6 seconds
- Manual navigation via indicators or keyboard arrows

**Controls**:
- Bottom indicators (3 dots, active state with border)
- Top-right "BOOK A TABLE" button
- Keyboard navigation (left/right arrows)

---

### 6. Menu Section
**Layout**: Three-column grid (image | menu | image)
**Tabs** (above menu):
- Three category tabs with icons
- Tab switching functionality (not fully implemented in current version)

**Menu Structure**:
- Left column: Elliptical image (500px max-width, animated clip-path)
- Center column: Menu items organized by category
  - Category titles (20px, gold, uppercase)
  - Menu items with prices (14px, justified layout)
  - Prices in gold color
- Right column: Elliptical image (mirror of left)

**Menu Categories Displayed**:
- Homemade Spreads (3 items, €8-9)
- From the Sea (4 items, €15-18)
- Appetisers (2 items, €9-12)

**Visual Effects**:
- Vertical beam animations on column dividers
- Beams move down as user scrolls through section
- Images animate with clip-path expansion on scroll
- "VIEW ENTIRE MENU" button at bottom

**Animation Details**:
- Menu images start as ellipse (50% 45%), expand to (50% 50%)
- Images scale from 1.15 to 1.0 on scroll
- Beam opacity and position tied to scroll progress

---

### 7. Reservation Section
**Layout**: Two-column grid (form left, image right)
**Form Column**:
- Background: Teal (#1a3a3a)
- Label: "reserve" (gold, 16px, 8px letter-spacing)
- Title: "book a table" (48px, Cormorant Garamond)
- Subtitle: "*reservations recommended"
- Form fields:
  - Party size dropdown (1-6 people)
  - Date picker
  - Time dropdown (11am-9pm)
  - "BOOK NOW" button (gold background, dark text)
- Footer note: "*Powered by OpenTable"

**Image Column**:
- Main image (600px height)
- Floating image overlay (right side)
- "Book private dining & banquet rooms" overlay at bottom

**Form Styling**:
- Inputs: Dark background (30% opacity), gold border (30% opacity)
- Focus state: Full gold border
- Button hover: Light gold background, slight lift

---

### 8. Events Section
**Layout**: Header + 3-column grid
**Header**:
- Title: "upcoming events"
- Description text

**Event Cards**:
- Image (300px height)
- Title (28px, Cormorant Garamond)
- Date (gold, 13px)
- Time (gray, 13px)
- Hover effect: Card lifts up 10px

**Events Displayed**:
1. Cocktails Night - Friday, 21 Nov
2. Wine Wednesday - Wednesday, 10 Sep
3. Sea Food & Wine - Friday, 18 Jul

---

### 9. Testimonials Section
**Layout**: Centered slider
**Content**:
- Header: "Our guests say about us" / "they say" label
- Testimonial text (18px, italic, 1.8 line-height)
- Author attribution (16px, gold, Cormorant Garamond)
- Dot indicators (3 dots, active state in gold)

**Current Testimonial**:
- Text: Lorem ipsum placeholder
- Author: "By Dora Johns"

---

### 10. Gallery Section
**Layout**: Infinite horizontal scroll
**Header**: "connect with us"

**Gallery Features**:
- Continuous horizontal scroll animation (40s linear infinite)
- 8 circular images (350x350px) duplicated for seamless loop
- Images scale on hover (1.1x)
- Animation pauses on hover
- Hashtag footer: "Inspired by you, always_#restaurante"

**Images**: Food photography from Unsplash

---

### 11. Footer
**Layout**: Three-column grid + bottom section
**Columns**:
1. Contact Us: Phone, Email
2. Address: Piazza Della Signoria, 12, Firenze, Italy
3. Opening Hours: Everyday 12:30-23:00, Kitchen closes 22:00

**Bottom Section**:
- Logo: "TYMPAS" (32px, gold, 4px letter-spacing)
- Social links: PINTEREST, FACEBOOK, INSTAGRAM
- Copyright: "© 2025 TYMPAS RESTAURANT, ALL RIGHTS RESERVED"

---

## Advanced Animations & Interactions

### Scroll-Based Animations

1. **Fade-In Elements**:
   - Elements fade in from 30px below when entering viewport
   - Uses Intersection Observer API
   - Threshold: 0.1, rootMargin: -50px

2. **Floating Images**:
   - Secondary images float with 6s infinite animation
   - Reverse parallax effect: Images move up as user scrolls down
   - Maximum movement: ±200px
   - Smooth easing with requestAnimationFrame

3. **Menu Column Beams**:
   - Vertical gold beams on menu column dividers
   - Beam position tied to scroll progress through menu section
   - Beam height: 30% of column height
   - Travels from -30% to 150% (full exit animation)

4. **Section Line Beams**:
   - Decorative beams on vertical lines (33.333% and 66.666% positions)
   - Beam height: 100px
   - Position updates based on scroll position within lines-container
   - Smooth movement matching scroll velocity

5. **Image Container Animations**:
   - Main images scale slightly (1.03x) when visible
   - Floating images fade in with delay
   - Menu images use clip-path animation (ellipse expansion)

### Interactive Elements

1. **Smooth Scrolling**:
   - All anchor links use smooth scroll behavior
   - Header offset: 80px for proper positioning

2. **Carousel Controls**:
   - Auto-advance: 6 seconds
   - Manual navigation: Click indicators or keyboard arrows
   - Transition protection: Prevents rapid clicking during transitions

3. **Form Interactions**:
   - Input focus states with gold borders
   - Button hover effects
   - Form submission alert (placeholder functionality)

4. **Mobile Menu**:
   - Slide-in animation from right (300px width)
   - Backdrop blur effect
   - Closes on link click or outside click

---

## Responsive Design

### Breakpoints
- **Desktop**: Default (968px+)
- **Tablet**: 968px and below
- **Mobile**: 768px and below

### Mobile Adaptations

**Header**:
- Padding: 20px 30px
- Logo: 24px (from 28px)
- Hamburger menu replaces navigation

**Hero**:
- Padding: 20px (from 40px)
- Title: 40px (from 80px)
- Letter-spacing: 8px (from 15px)
- Location info and reserve circle stack vertically

**Sections**:
- Grid layouts convert to single column
- Padding reduces (120px → 60px)
- Font sizes scale down proportionally
- Images maintain aspect ratios

**Menu**:
- Three-column becomes single column
- Images stack above/below menu content
- Padding: 60px 40px (from 100px 80px)

**Carousel**:
- Height: 60vh (from 70vh)
- Side text hidden
- Main title: 40px (from 65px)
- Lines: 50px width (from 150px)

---

## Technical Implementation

### Performance Optimizations
- `will-change` properties for animated elements
- `requestAnimationFrame` for scroll-based animations
- Throttled scroll event handlers
- Passive event listeners for scroll
- CSS transitions over JavaScript animations where possible

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- Backdrop-filter with webkit prefix
- Intersection Observer API
- CSS Custom Properties (CSS Variables)

### Image Sources
- All images from Unsplash CDN
- Responsive image URLs with width/height parameters
- Lazy loading potential (not currently implemented)

### JavaScript Features
- Vanilla JavaScript (no dependencies)
- Intersection Observer for scroll animations
- Event delegation for dynamic elements
- Smooth scroll polyfill-ready
- Form validation ready (currently shows alert)

---

## Content Strategy

### Brand Voice
- **Elegant & Sophisticated**: Formal language, premium positioning
- **Warm & Inviting**: "For everyone who collects beautiful moments"
- **Professional**: Clear information, easy navigation

### Key Messages
1. Culinary excellence and fine dining
2. Beautiful moments and memories
3. Premium service and quality
4. Community and events
5. Easy reservation process

### Call-to-Actions
- Primary: "BOOK A TABLE" (appears 3 times)
- Secondary: "VIEW" (carousel), "READ MORE" (sections)
- Tertiary: Social media links, contact information

---

## Accessibility Considerations

### Current Implementation
- Semantic HTML structure
- Alt text on images (placeholder)
- Keyboard navigation (carousel arrows)
- Focus states on interactive elements

### Potential Improvements
- ARIA labels for carousel controls
- Skip navigation link
- Screen reader announcements for slide changes
- High contrast mode support
- Reduced motion preferences

---

## SEO & Meta Information

### Current Meta Tags
- Title: "Tympas - Fine Dining Restaurant"
- Viewport: Responsive
- Language: English

### Potential Additions
- Meta description
- Open Graph tags
- Schema.org structured data (Restaurant schema)
- Canonical URL
- Favicon

---

## Future Enhancement Opportunities

1. **Menu System**:
   - Full menu with all categories
   - Filter/search functionality
   - Dietary information (vegetarian, gluten-free, etc.)
   - Menu item detail modals

2. **Reservation System**:
   - Integration with OpenTable or custom booking system
   - Calendar view for availability
   - Email confirmations
   - Reservation management

3. **Content Management**:
   - Dynamic content loading
   - Blog/news section
   - Chef profiles
   - Seasonal menu updates

4. **Interactive Features**:
   - Virtual tour
   - 360° image viewer
   - Video backgrounds
   - Social media feed integration

5. **Performance**:
   - Image optimization and lazy loading
   - Code splitting
   - Service worker for offline support
   - CDN integration

---

## Code Architecture

### Structure
- Single HTML file with embedded CSS and JavaScript
- Inline styles (2848 lines total)
- Vanilla JavaScript (no frameworks)
- CSS custom properties for theming
- Modular CSS organization by section

### Organization Pattern
1. CSS Variables (root)
2. Base styles
3. Component styles (Header, Hero, Sections)
4. Animation keyframes
5. Responsive media queries
6. JavaScript at bottom (DOM ready)

### Best Practices Used
- CSS Grid and Flexbox for layouts
- BEM-like naming conventions
- Semantic HTML5 elements
- Progressive enhancement approach
- Mobile-first responsive design

---

## Summary

This is a **premium, luxury restaurant website** featuring:
- **Sophisticated design** with gold accents and dark teal backgrounds
- **Smooth, elegant animations** tied to scroll position
- **Full-screen hero** with synchronized image/text slideshow
- **Interactive menu** with animated beams and image effects
- **Reservation system** with form interface
- **Event showcase** with card-based layout
- **Infinite gallery** scroll
- **Fully responsive** mobile experience
- **Performance optimized** with modern web techniques

The site successfully conveys a **high-end dining experience** through its visual design, typography choices, and smooth user interactions, positioning Tympas as a premium destination for fine dining.

