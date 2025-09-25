# Tennis Club Design System Guide

*A comprehensive design system for the TUS Traunreut Tennis Club website*

## Overview

This design system provides a complete set of design tokens, components, and guidelines for building consistent, professional interfaces for the tennis club website. It's built on a foundation of **Professional Green** and **Sophisticated Gray** colors, creating a modern and trustworthy brand experience.

## Table of Contents

1. [Color System](#color-system)
2. [Typography Scale](#typography-scale)
3. [Spacing System](#spacing-system)
4. [Component Library](#component-library)
5. [Usage Guidelines](#usage-guidelines)
6. [Examples](#examples)

---

## Color System

### Primary Color Scale (Professional Green)

The primary green represents nature, growth, and the tennis court environment.

```css
--color-primary-50: #f0f9f4    /* Lightest green tint */
--color-primary-100: #dcf2e4   /* Very light green */
--color-primary-200: #bce5cd   /* Light green */
--color-primary-300: #8dd4a8   /* Medium light green */
--color-primary-400: #5bb87d   /* Medium green */
--color-primary-500: #2d7a4f   /* Main brand green ⭐ */
--color-primary-600: #1a5f3f   /* Darker green ⭐ */
--color-primary-700: #164d32   /* Dark green */
--color-primary-800: #133d28   /* Very dark green */
--color-primary-900: #0f3220   /* Darkest green */
--color-primary-950: #081c12   /* Deepest green */
```

### Secondary Color Scale (Professional Gray)

The secondary gray provides neutral balance and professional sophistication.

```css
--color-secondary-50: #f9fafb    /* Lightest gray */
--color-secondary-100: #f3f4f6   /* Very light gray */
--color-secondary-200: #e5e7eb   /* Light gray */
--color-secondary-300: #d1d5db   /* Medium light gray */
--color-secondary-400: #9ca3af   /* Medium gray */
--color-secondary-500: #6b7280   /* Text gray */
--color-secondary-600: #4b5563   /* Dark text gray */
--color-secondary-700: #374151   /* Darker gray */
--color-secondary-800: #1f2937   /* Very dark gray */
--color-secondary-900: #111827   /* Main secondary color ⭐ */
--color-secondary-950: #030712   /* Deepest gray */
```

### Semantic Colors

```css
--color-success: var(--color-primary-600)  /* Success states */
--color-warning: #f59e0b                   /* Warning states */
--color-error: #ef4444                     /* Error states */
--color-info: #3b82f6                      /* Information states */
```

### Surface & Text Colors

```css
/* Surfaces */
--color-background: #ffffff           /* Page background */
--color-surface: #f9fafb             /* Card backgrounds */
--color-surface-elevated: #ffffff    /* Elevated surfaces */

/* Text Colors */
--color-text-primary: var(--color-secondary-900)    /* Primary text */
--color-text-secondary: var(--color-secondary-600)  /* Secondary text */
--color-text-muted: var(--color-secondary-500)      /* Muted text */
--color-text-inverse: #ffffff                       /* Text on dark backgrounds */

/* Border Colors */
--color-border-primary: var(--color-secondary-200)    /* Default borders */
--color-border-secondary: var(--color-secondary-100)  /* Subtle borders */
--color-border-focus: var(--color-primary-500)        /* Focus borders */
```

### Usage Examples

```html
<!-- Primary brand color -->
<div class="bg-[var(--color-primary-500)] text-white">Brand element</div>

<!-- Secondary color -->
<div class="bg-[var(--color-secondary-900)] text-white">Secondary element</div>

<!-- Text colors -->
<h1 class="text-primary">Primary heading</h1>
<p class="text-secondary">Secondary text</p>
<small class="text-muted">Muted information</small>
```

---

## Typography Scale

### Display Typography (Hero Sections)

For major headings and hero sections that need maximum impact.

| Class | Size | Usage |
|-------|------|-------|
| `.display-2xl` | 4xl → 6xl → 7xl | Main hero titles |
| `.display-xl` | 3xl → 5xl → 6xl | Secondary hero titles |
| `.display-lg` | 2xl → 4xl → 5xl | Section hero titles |

```html
<h1 class="display-2xl">TENNIS IM TUS TRAUNREUT</h1>
<h2 class="display-xl">Professional Tennis Training</h2>
```

### Heading Typography (Section Headings)

For organizing content with clear hierarchy.

| Class | Size | Usage |
|-------|------|-------|
| `.heading-xl` | 2xl → 3xl | Page titles |
| `.heading-lg` | xl → 2xl | Major section headings |
| `.heading-md` | lg → xl | Subsection headings |
| `.heading-sm` | base → lg | Card titles |
| `.heading-xs` | sm → base | Small headings |

```html
<h2 class="heading-xl">Trainingsangebot</h2>
<h3 class="heading-lg">Jugendtraining</h3>
<h4 class="heading-md">Leistungsgruppen</h4>
```

### Body Typography (Content Text)

For readable content with proper hierarchy.

| Class | Size | Usage |
|-------|------|-------|
| `.body-xl` | xl | Large body text, intros |
| `.body-lg` | lg | Emphasized body text |
| `.body-md` | base | Standard body text |
| `.body-sm` | sm | Small body text |
| `.body-xs` | xs | Fine print |

```html
<p class="body-lg">Introduction paragraph with emphasis</p>
<p class="body-md">Standard paragraph text for content</p>
<p class="body-sm">Additional details or captions</p>
```

### Caption Typography (Labels & Metadata)

For small text, labels, and metadata.

| Class | Size | Usage |
|-------|------|-------|
| `.caption-lg` | sm + medium | Form labels, important captions |
| `.caption-md` | xs + medium | Badges, tags |
| `.caption-sm` | xs | Timestamps, metadata |

```html
<label class="caption-lg">Email Address</label>
<span class="caption-md">NEW</span>
<time class="caption-sm">March 11, 2021</time>
```

### Dark Background Variants

All typography classes have `-dark` variants for use on colored backgrounds:

```html
<!-- On dark/colored backgrounds -->
<div class="bg-[var(--color-primary-500)] p-8">
  <h2 class="display-lg-dark">Title on Dark Background</h2>
  <p class="body-lg-dark">Body text that maintains readability</p>
  <span class="caption-lg-dark">Caption text for dark backgrounds</span>
</div>
```

---

## Spacing System

### Spacing Scale

Consistent spacing tokens for layouts and components.

```css
--space-xs: 0.25rem     /* 4px */
--space-sm: 0.5rem      /* 8px */
--space-md: 0.75rem     /* 12px */
--space-lg: 1rem        /* 16px */
--space-xl: 1.25rem     /* 20px */
--space-2xl: 1.5rem     /* 24px */
--space-3xl: 2rem       /* 32px */
--space-4xl: 2.5rem     /* 40px */
--space-5xl: 3rem       /* 48px */
--space-6xl: 4rem       /* 64px */
--space-7xl: 5rem       /* 80px */
--space-8xl: 6rem       /* 96px */
```

### Component Spacing

```css
--space-component-xs: 8px    /* Small component padding */
--space-component-sm: 16px   /* Standard component padding */
--space-component-md: 24px   /* Medium component padding */
--space-component-lg: 40px   /* Large component padding */
--space-component-xl: 64px   /* Extra large component padding */
```

### Layout Spacing

```css
--space-layout-xs: 32px   /* Small section spacing */
--space-layout-sm: 48px   /* Standard section spacing */
--space-layout-md: 64px   /* Medium section spacing */
--space-layout-lg: 80px   /* Large section spacing */
--space-layout-xl: 96px   /* Extra large section spacing */
```

### Usage Examples

```html
<!-- Component spacing -->
<div class="p-[var(--space-component-md)]">Card content</div>

<!-- Layout spacing -->
<section class="py-[var(--space-layout-md)]">Section content</section>

<!-- Custom spacing with CSS variables -->
<div style="margin-bottom: var(--space-3xl)">Custom spaced element</div>
```

---

## Component Library

### Buttons

#### Base Button Class

```html
<button class="btn">Base Button</button>
```

#### Button Sizes

```html
<button class="btn btn-xs">Extra Small</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-md">Medium (Default)</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-xl">Extra Large</button>
```

#### Button Variants

```html
<!-- Primary (Green) -->
<button class="btn btn-md btn-primary">Primary Action</button>

<!-- Secondary (Gray) -->
<button class="btn btn-md btn-secondary">Secondary Action</button>

<!-- Outline -->
<button class="btn btn-md btn-outline">Outline Button</button>

<!-- Ghost -->
<button class="btn btn-md btn-ghost">Ghost Button</button>
```

#### Button States

```html
<!-- Disabled -->
<button class="btn btn-primary" disabled>Disabled Button</button>

<!-- With icon -->
<button class="btn btn-primary">
  <Icon name="heroicons:plus" class="w-4 h-4 mr-2" />
  Add Item
</button>
```

### Cards

#### Basic Card

```html
<div class="card">
  <div class="card-header">
    <h3 class="heading-sm">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="body-md">Card content goes here...</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-sm btn-primary">Action</button>
  </div>
</div>
```

#### Simple Card

```html
<div class="card">
  <div class="card-body">
    <h3 class="heading-sm mb-2">Simple Card</h3>
    <p class="body-md">Content without header or footer</p>
  </div>
</div>
```

### Form Elements

#### Input Fields

```html
<!-- Standard input -->
<input type="text" class="input" placeholder="Enter text...">

<!-- Small input -->
<input type="text" class="input input-sm" placeholder="Small input">

<!-- Large input -->
<input type="text" class="input input-lg" placeholder="Large input">

<!-- Disabled input -->
<input type="text" class="input" placeholder="Disabled" disabled>
```

#### Form Layout

```html
<form class="space-y-4">
  <div>
    <label class="caption-lg block mb-1">Email Address</label>
    <input type="email" class="input" required>
  </div>
  
  <div>
    <label class="caption-lg block mb-1">Message</label>
    <textarea class="input" rows="4" placeholder="Your message..."></textarea>
  </div>
  
  <div class="flex gap-2">
    <button type="submit" class="btn btn-primary">Send Message</button>
    <button type="button" class="btn btn-outline">Cancel</button>
  </div>
</form>
```

### Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

### Alerts

```html
<div class="alert alert-success">
  <p>Success! Your changes have been saved.</p>
</div>

<div class="alert alert-warning">
  <p>Warning: Please review your information.</p>
</div>

<div class="alert alert-error">
  <p>Error: Something went wrong.</p>
</div>

<div class="alert alert-info">
  <p>Info: New features are available.</p>
</div>
```

### Layout Containers

```html
<!-- Container sizes -->
<div class="container-xs">Extra small container (28rem)</div>
<div class="container-sm">Small container (36rem)</div>
<div class="container-md">Medium container (48rem)</div>
<div class="container-lg">Large container (64rem)</div>
<div class="container-xl">Extra large container (80rem)</div>

<!-- Section spacing -->
<section class="section">Standard section spacing</section>
<section class="section-sm">Small section spacing</section>
<section class="section-lg">Large section spacing</section>
<section class="section-xl">Extra large section spacing</section>
```

---

## Usage Guidelines

### Do's ✅

**Color Usage:**
- Use primary green for main actions and brand elements
- Use secondary gray for supporting actions and text
- Maintain proper contrast ratios for accessibility
- Use semantic colors for their intended purposes

**Typography:**
- Choose the appropriate typography scale for content hierarchy
- Use dark variants on colored backgrounds
- Maintain consistent line heights and spacing
- Combine typography classes with semantic meaning

**Spacing:**
- Use design system tokens for consistent spacing
- Apply component spacing for internal padding
- Use layout spacing for section separation
- Maintain visual rhythm with consistent spacing

**Components:**
- Use design system components for consistency
- Combine base classes with modifiers (size, variant)
- Follow established patterns for common UI elements
- Maintain component integrity across the application

### Don'ts ❌

**Color Usage:**
- Don't use arbitrary colors outside the system
- Don't mix light and dark variants inconsistently
- Don't use green or gray for error/warning states
- Don't ignore accessibility contrast requirements

**Typography:**
- Don't use arbitrary font sizes
- Don't mix different typography scales randomly
- Don't use display typography for body content
- Don't ignore responsive typography behavior

**Spacing:**
- Don't use arbitrary spacing values
- Don't mix different spacing systems
- Don't ignore consistent spacing patterns
- Don't create visual inconsistencies with spacing

**Components:**
- Don't create custom components without following patterns
- Don't ignore component states (hover, focus, disabled)
- Don't break component composition rules
- Don't override core component styles arbitrarily

---

## Examples

### Professional Card Component

```html
<div class="card max-w-md">
  <div class="card-header">
    <div class="flex items-center justify-between">
      <h3 class="heading-sm">Tennis Training</h3>
      <span class="badge badge-success">Available</span>
    </div>
  </div>
  <div class="card-body">
    <p class="body-md mb-4">
      Professional tennis training for all skill levels. 
      Improve your technique with certified instructors.
    </p>
    <div class="flex items-center justify-between text-muted">
      <span class="caption-md">Duration: 1 hour</span>
      <span class="caption-md">€45 per session</span>
    </div>
  </div>
  <div class="card-footer">
    <div class="flex gap-2">
      <button class="btn btn-sm btn-primary flex-1">Book Now</button>
      <button class="btn btn-sm btn-outline">Learn More</button>
    </div>
  </div>
</div>
```

### Hero Section

```html
<section class="section-xl bg-[var(--color-primary-500)] text-white">
  <div class="container-lg text-center">
    <h1 class="display-2xl-dark mb-6">
      TENNIS IM TUS TRAUNREUT
    </h1>
    <div class="w-32 h-1 bg-white mx-auto mb-6"></div>
    <p class="body-xl-dark mb-8 max-w-2xl mx-auto">
      der Turn- und Sportverein im Herzen des Chiemgaus
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="btn btn-lg btn-secondary">Jetzt buchen</button>
      <button class="btn btn-lg bg-white/20 hover:bg-white/30 text-white border border-white/30">
        Tennishalle
      </button>
    </div>
  </div>
</section>
```

### Information Grid

```html
<section class="section bg-[var(--color-surface)]">
  <div class="container-lg">
    <div class="text-center mb-12">
      <h2 class="heading-xl text-[var(--color-primary-600)] mb-4">
        Unsere Services
      </h2>
      <div class="w-24 h-1 bg-[var(--color-secondary-900)] mx-auto"></div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="card text-center">
        <div class="card-body">
          <Icon name="heroicons:calendar-days" class="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-500)]" />
          <h3 class="heading-md mb-2">Termine</h3>
          <p class="body-md mb-4">Alle Termine anzeigen...</p>
          <p class="text-[var(--color-secondary-900)] font-medium">Keine Termine gefunden</p>
        </div>
      </div>
      
      <div class="card text-center">
        <div class="card-body">
          <Icon name="heroicons:trophy" class="w-12 h-12 mx-auto mb-4 text-[var(--color-secondary-900)]" />
          <h3 class="heading-md mb-2">Tennisabteilung</h3>
          <p class="body-md mb-4">Die TuS-Tennisabteilung wünscht viel Glück und ein gesundes Jahr 2025.</p>
          <button class="btn btn-sm btn-ghost text-[var(--color-primary-600)]">
            Mehr erfahren →
          </button>
        </div>
      </div>
      
      <div class="card text-center">
        <div class="card-body">
          <Icon name="heroicons:building-storefront" class="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-500)]" />
          <h3 class="heading-md mb-2">Tennisplätze</h3>
          <p class="body-md mb-4">Zwei Outdoor Tennisplätze sowie eine Tennishalle mit drei Spielfeldern.</p>
          <button class="btn btn-sm btn-ghost text-[var(--color-primary-600)]">
            Anlagen ansehen →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Integration with Nuxt.js

### Using Design System Classes

```vue
<template>
  <div>
    <!-- Hero Section -->
    <section class="section-xl tennis-gradient text-white">
      <UContainer>
        <div class="text-center">
          <h1 class="display-2xl-dark mb-6">Page Title</h1>
          <p class="body-lg-dark">Page description</p>
        </div>
      </UContainer>
    </section>
    
    <!-- Content Section -->
    <section class="section">
      <div class="container-lg">
        <h2 class="heading-xl mb-8">Section Title</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card">
            <div class="card-body">
              <h3 class="heading-md mb-4">Card Title</h3>
              <p class="body-md">Card content...</p>
              <button class="btn btn-primary mt-4">Action</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic
</script>
```

### CSS Variable Usage

```vue
<template>
  <div class="custom-component">
    <h2 class="custom-title">Custom Styled Element</h2>
    <p class="custom-text">Using design system variables</p>
  </div>
</template>

<style scoped>
.custom-component {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-component-md);
}

.custom-title {
  color: var(--color-primary-600);
  font-size: var(--text-xl);
  margin-bottom: var(--space-md);
}

.custom-text {
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
```

---

*This design system provides a solid foundation for building consistent, professional interfaces for the tennis club website. All components and tokens work together to create a cohesive brand experience that reflects the professional and trustworthy nature of the TUS Traunreut Tennis Club.*
