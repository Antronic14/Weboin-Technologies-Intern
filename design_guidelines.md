# Digital Marketing Agency Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern digital marketing agency aesthetic inspired by professional agency sites with emphasis on conversion-focused design, clean layouts, and professional credibility.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary Blue: #3B82F6 (212 91% 61%)
- Gradient Accent: Blue to Purple (linear gradient from #3B82F6 to purple variants)

**Light Mode:**
- Background: White and light gray backgrounds
- Text: Dark gray/black for readability

**Dark Mode:**
- Background: Dark surfaces (slate/gray-900 range)
- Text: White/light gray
- Maintain consistent component visibility and contrast

### B. Typography
**Font Families:**
- **Headings**: Inter (Google Fonts) - Modern, professional, tech-forward
- **Body Text**: Open Sans (Google Fonts) - Readable, friendly, versatile

**Hierarchy:**
- Hero headlines: Large, bold Inter
- Section titles: Medium-large Inter, semibold
- Body content: Open Sans, regular weight
- Card titles: Inter, medium weight

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Section padding: py-16 to py-24
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-8

**Responsive Grid:**
- Mobile: Single column, stacked layouts
- Tablet: 2-column grids
- Desktop: 3-4 column grids for cards/features

### D. Component Library

**Navigation:**
- Fixed navbar with logo left, navigation links center/right
- Dark mode toggle integrated into navbar
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Gradient background (blue to purple)
- Large headline: "Transform Your Digital Presence"
- Supporting subtext about agency value proposition
- Primary CTA button with strong contrast
- Full viewport height consideration for impact

**Service Cards (4 cards):**
- Icon placement: Top or left-aligned
- Services: SEO Optimization, Paid Advertising, Social Media Marketing, Brand Strategy
- Each card: Icon + Title + Description
- Hover effects: Scale transform + elevated shadow
- Use shadcn/ui Card component

**Portfolio Grid:**
- 3 project cards in responsive grid
- Each card: Project image + Title + Description
- Image aspect ratio: 16:9 or similar
- Hover: Subtle overlay or scale effect

**Testimonials Slider:**
- 3 client reviews in carousel/slider format
- Each testimonial: Avatar + Name + Company + Quote
- Use shadcn/ui Avatar component
- Navigation dots or arrows for slider control

**Team Grid (About Page):**
- 6 team member cards
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card: Photo + Name + Role + Brief bio
- Consistent card styling with hover states

**Stats Section (About Page):**
- 4 key metrics displayed prominently
- "20+ Happy Clients", "50+ Projects Completed", "5+ Years Experience", "10+ Team Members"
- Animated counting numbers on scroll/load
- Large number display with descriptive labels

**Footer:**
- Multi-column layout: Agency info + Quick links + Social media
- Dark background for contrast
- Social media icons with hover effects
- Consistent branding elements

### E. Interactions & Animations

**Hover Effects:**
- Buttons: Scale (1.05) + shadow elevation
- Cards: Scale (1.02-1.05) + enhanced shadow
- Links: Color shift + underline animation
- All transitions: 200-300ms ease-in-out

**Loading States:**
- Skeleton loaders for service cards
- Skeleton loaders for testimonials
- Use shadcn/ui Skeleton component
- Subtle pulse animation

**Dark Mode Toggle:**
- Smooth transition between themes (300ms)
- Icon switch (sun/moon) in navbar
- Persistent state across page navigation
- All components adapt to theme

## Images & Media

**Hero Section:**
- Background: Gradient overlay (no large hero image needed, gradient provides visual impact)
- Optional: Subtle pattern or texture overlay on gradient

**Portfolio Projects:**
- 3 project images, professional quality
- Consistent aspect ratios across all images
- Modern, tech-focused project visuals

**Team Members:**
- 6 professional headshot photos
- Consistent dimensions and cropping
- Clean, professional backgrounds

**Service Icons:**
- Use icon library (Lucide React or similar)
- Consistent size across all service cards
- Single color or subtle gradients

## Accessibility & Quality Standards

- WCAG 2.1 AA compliance for color contrast
- Focus states visible on all interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Dark mode maintains readability and contrast
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Page-Specific Requirements

**Home Page Flow:**
Navbar → Hero → Services → Portfolio → Testimonials → Footer

**About Page Flow:**
Navbar → Agency Intro → Team Grid → Stats → CTA → Footer

**Consistency:**
- Identical navbar and footer across both pages
- Consistent card styling and spacing
- Unified color scheme and typography
- Smooth page transitions