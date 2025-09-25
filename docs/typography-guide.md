# Custom Typography Guide

This document outlines the custom Tailwind typography classes created for the TUS Traunreut Tennis website to ensure consistent and professional styling throughout all pages.

## Typography Classes

### Title Classes (Light Backgrounds)

Default title classes for use on white or light backgrounds using professional dark grey colors.

#### `.title`
- **Usage**: Standard section titles, card titles on light backgrounds
- **Size**: `text-2xl md:text-3xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-slate-800` (professional dark grey)
- **Line Height**: `leading-tight`

#### `.title-lg`
- **Usage**: Large section headings, page subsections on light backgrounds
- **Size**: `text-3xl md:text-4xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-slate-800`
- **Line Height**: `leading-tight`

#### `.title-xl`
- **Usage**: Major page headings, featured sections on light backgrounds
- **Size**: `text-4xl md:text-5xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-slate-800`
- **Line Height**: `leading-tight`

#### `.title-hero`
- **Usage**: Hero section main titles (special case with white text)
- **Size**: `text-5xl md:text-6xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-white` (for colored backgrounds)
- **Line Height**: `leading-tight`

### Title Classes (Dark Backgrounds)

Dark variant title classes for use on dark, colored, or gradient backgrounds.

#### `.title-dark`
- **Usage**: Standard section titles on dark/colored backgrounds
- **Size**: `text-2xl md:text-3xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-white`
- **Line Height**: `leading-tight`

#### `.title-lg-dark`
- **Usage**: Large section headings on dark/colored backgrounds
- **Size**: `text-3xl md:text-4xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-white`
- **Line Height**: `leading-tight`

#### `.title-xl-dark`
- **Usage**: Major page headings on dark/colored backgrounds
- **Size**: `text-4xl md:text-5xl` (responsive)
- **Weight**: `font-bold`
- **Color**: `text-white`
- **Line Height**: `leading-tight`

### Text Body Classes (Light Backgrounds)

Body text classes for use on white or light backgrounds using professional grey colors.

#### `.text-body`
- **Usage**: Standard paragraph text, descriptions on light backgrounds
- **Size**: `text-base` (16px)
- **Color**: `text-slate-600` (readable medium grey)
- **Line Height**: `leading-relaxed`

#### `.text-body-lg`
- **Usage**: Larger body text, introductions on light backgrounds
- **Size**: `text-lg` (18px)
- **Color**: `text-slate-600`
- **Line Height**: `leading-relaxed`

#### `.text-body-sm`
- **Usage**: Small body text, captions on light backgrounds
- **Size**: `text-sm` (14px)
- **Color**: `text-slate-600`
- **Line Height**: `leading-relaxed`

#### `.text-muted`
- **Usage**: Dates, timestamps, less important information on light backgrounds
- **Size**: `text-sm` (14px)
- **Color**: `text-slate-500` (lighter grey for subtle text)

#### `.text-accent`
- **Usage**: Emphasized text that needs more weight on light backgrounds
- **Size**: Inherits from parent
- **Color**: `text-slate-700` (darker grey)
- **Weight**: `font-medium`

### Text Body Classes (Dark Backgrounds)

Body text classes for use on dark, colored, or gradient backgrounds.

#### `.text-body-dark`
- **Usage**: Standard paragraph text on dark/colored backgrounds
- **Size**: `text-base` (16px)
- **Color**: `text-slate-200` (light readable grey)
- **Line Height**: `leading-relaxed`

#### `.text-body-lg-dark`
- **Usage**: Larger body text, introductions on dark/colored backgrounds
- **Size**: `text-lg` (18px)
- **Color**: `text-slate-200`
- **Line Height**: `leading-relaxed`

#### `.text-body-sm-dark`
- **Usage**: Small body text, captions on dark/colored backgrounds
- **Size**: `text-sm` (14px)
- **Color**: `text-slate-200`
- **Line Height**: `leading-relaxed`

#### `.text-muted-dark`
- **Usage**: Dates, timestamps, less important information on dark backgrounds
- **Size**: `text-sm` (14px)
- **Color**: `text-slate-300` (muted but readable on dark)

#### `.text-accent-dark`
- **Usage**: Emphasized text that needs more weight on dark backgrounds
- **Size**: Inherits from parent
- **Color**: `text-slate-100` (bright white for emphasis)
- **Weight**: `font-medium`

## Usage Guidelines

### Background Context Selection

**Light Backgrounds (white, light grey, etc.):**
- Use standard classes: `.title`, `.title-lg`, `.title-xl`, `.text-body`, `.text-body-lg`, `.text-body-sm`, `.text-muted`, `.text-accent`

**Dark Backgrounds (colored, gradients, dark themes):**
- Use dark variants: `.title-dark`, `.title-lg-dark`, `.title-xl-dark`, `.text-body-dark`, `.text-body-lg-dark`, `.text-body-sm-dark`, `.text-muted-dark`, `.text-accent-dark`

### DO:
- **Choose the right variant** based on background color/contrast
- Use `.title` classes for all headings and titles
- Use `.text-body` classes for all paragraph content
- Keep green and orange colors for accent elements (buttons, icons, highlights)
- Use `.text-muted` / `.text-muted-dark` for secondary information like dates and captions
- Use `.text-accent` / `.text-accent-dark` for emphasized text that needs attention without color

### DON'T:
- Use green or orange colors for body text or titles
- Mix light and dark variants inconsistently
- Use custom colors for text - stick to the defined classes
- Use light variants on dark backgrounds or vice versa
- Use the tennis theme colors for readability-critical text

## Examples

### Light Background Usage
```html
<!-- Page Header on White Background -->
<div class="bg-white py-16">
  <h1 class="title-xl mb-4" style="color: var(--tennis-green-dark)">
    Page <span style="color: var(--tennis-orange)">Title</span>
  </h1>
  
  <!-- Section Title -->
  <h2 class="title mb-6">Section Title</h2>
  
  <!-- Body Content -->
  <p class="text-body mb-4">
    This is standard body text that maintains readability with professional grey coloring.
  </p>
  
  <!-- Meta Information -->
  <p class="text-muted">Published on March 11, 2021</p>
  
  <!-- Emphasized Text -->
  <p class="text-accent">Important information that needs emphasis</p>
</div>
```

### Dark Background Usage
```html
<!-- Dark Section with Green Gradient -->
<section class="tennis-gradient py-16">
  <h2 class="title-lg-dark mb-4">Section on Dark Background</h2>
  
  <p class="text-body-lg-dark mb-6">
    This text uses the dark variant to ensure readability on colored backgrounds.
  </p>
  
  <p class="text-muted-dark">Secondary information that's still readable</p>
  
  <p class="text-accent-dark">Emphasized text for dark backgrounds</p>
</section>

<!-- Another Dark Background Example -->
<div class="bg-slate-800 p-8">
  <h3 class="title-dark mb-3">Title on Dark Background</h3>
  <p class="text-body-dark">Body text that contrasts well with dark backgrounds.</p>
</div>
```

## Color Palette Reference

### Light Background Colors
- **Title Text**: `text-slate-800` (#1e293b) - Professional dark grey
- **Body Text**: `text-slate-600` (#475569) - Readable medium grey  
- **Muted Text**: `text-slate-500` (#64748b) - Subtle light grey
- **Accent Text**: `text-slate-700` (#334155) - Emphasized dark grey

### Dark Background Colors
- **Title Text Dark**: `text-white` (#ffffff) - Pure white for maximum contrast
- **Body Text Dark**: `text-slate-200` (#e2e8f0) - Light grey for readability
- **Muted Text Dark**: `text-slate-300` (#cbd5e1) - Muted but readable on dark
- **Accent Text Dark**: `text-slate-100` (#f1f5f9) - Bright white for emphasis
- **Hero Text**: `text-white` (#ffffff) - For colored/gradient backgrounds

## Implementation Notes

- All classes use Tailwind's `@apply` directive for maintainability
- Responsive design is built into title classes with `md:` breakpoints
- Line heights are optimized for readability (`leading-tight` for titles, `leading-relaxed` for body)
- Colors avoid the tennis theme colors to maintain professionalism and readability
