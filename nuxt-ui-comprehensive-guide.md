# Nuxt UI v4 - Comprehensive LLM Guide

This document provides comprehensive information about Nuxt UI v4, optimized for Large Language Model consumption and development assistance.

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Getting Started](#getting-started)
4. [Architecture & Theming](#architecture--theming)
5. [Form Components](#form-components)
6. [UI Components](#ui-components)
7. [Layout Components](#layout-components)
8. [Feedback Components](#feedback-components)
9. [Navigation Components](#navigation-components)
10. [Composables](#composables)
11. [Best Practices](#best-practices)
12. [Migration & Troubleshooting](#migration--troubleshooting)

## Overview

**Nuxt UI v4** is a modern UI library built on top of Nuxt 3 and Vue 3, providing a comprehensive set of components with:

- **Tailwind CSS** integration for styling
- **Headless UI** patterns with full customization
- **Accessibility** first approach
- **TypeScript** support out of the box
- **Auto-import** capabilities
- **Dark mode** support
- **Icon** integration with multiple icon sets

### Key Features

- 50+ components with consistent API
- Theme-based customization system
- Built-in form validation
- Responsive design patterns
- Server-side rendering support
- Zero-config setup with Nuxt

## Installation & Setup

### Basic Installation

```bash
# Install Nuxt UI
npm install @nuxt/ui

# Install required peer dependencies
npm install @nuxtjs/tailwindcss @nuxtjs/color-mode
```

### Nuxt Configuration

Add to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css']
})
```

### CSS Setup

Create `assets/css/main.css`:

```css
@import "tailwindcss";
@import "@nuxt/ui";

/* Custom global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### App Component Setup

Wrap your app with `UApp` in `app.vue`:

```vue
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

### Icon Configuration

Enable icons in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  icon: {
    provider: 'iconify',
    serverBundle: {
      collections: ['lucide', 'heroicons', 'mdi']
    }
  }
})
```

## Getting Started

### Component Auto-Import

All Nuxt UI components are auto-imported with the `U` prefix:

```vue
<template>
  <div>
    <UButton>Click me</UButton>
    <UCard>
      <UAlert title="Success!" />
    </UCard>
  </div>
</template>
```

### Basic Component Usage

```vue
<script setup>
// Components are auto-imported, no explicit imports needed
const isOpen = ref(false)
const formData = reactive({
  name: '',
  email: ''
})
</script>

<template>
  <UContainer>
    <UButton @click="isOpen = true">
      Open Modal
    </UButton>
    
    <UModal v-model="isOpen">
      <UForm :state="formData">
        <UFormField label="Name" name="name">
          <UInput v-model="formData.name" />
        </UFormField>
      </UForm>
    </UModal>
  </UContainer>
</template>
```

## Architecture & Theming

### Theme System

Nuxt UI uses a powerful theme system based on **slots** and **variants**:

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'font-medium rounded-md focus:outline-none',
        // ... other slots
      },
      variants: {
        color: {
          primary: 'bg-primary text-white',
          secondary: 'bg-secondary text-white'
        },
        size: {
          sm: 'px-2 py-1 text-sm',
          md: 'px-3 py-2 text-base',
          lg: 'px-4 py-3 text-lg'
        }
      },
      defaultVariants: {
        color: 'primary',
        size: 'md'
      }
    }
  }
})
```

### Color System

Standard color palette:
- `primary` - Main brand color
- `secondary` - Secondary brand color
- `success` - Green tones
- `info` - Blue tones
- `warning` - Yellow/orange tones
- `error` - Red tones
- `neutral` - Gray tones

### Customization Patterns

#### Component-level customization:
```vue
<UButton 
  :ui="{ base: 'rounded-full' }" 
  class="shadow-lg"
>
  Custom Button
</UButton>
```

#### Global customization:
```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'rounded-full shadow-lg'
      }
    }
  }
})
```

## Form Components

### UForm - Advanced Form Handling

**Core Features:**
- Schema validation (Zod, Valibot, Yup, Joi, Superstruct)
- Automatic error handling
- Nested form support
- Custom validation functions

**Basic Usage:**
```vue
<script setup>
import * as z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

const state = reactive({
  email: '',
  password: ''
})

async function onSubmit(event) {
  console.log('Form submitted:', event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" type="email" />
    </UFormField>
    
    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>
    
    <UButton type="submit">Submit</UButton>
  </UForm>
</template>
```

**Advanced Features:**

*Custom Validation:*
```vue
<script setup>
const validate = (state) => {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}
</script>

<template>
  <UForm :validate="validate" :state="state" @submit="onSubmit">
    <!-- form fields -->
  </UForm>
</template>
```

*Nested Forms:*
```vue
<template>
  <UForm :schema="parentSchema" :state="state">
    <UFormField label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormField>
    
    <UForm v-if="showAddress" :schema="addressSchema" nested>
      <UFormField label="Street" name="address.street">
        <UInput v-model="state.address.street" />
      </UFormField>
    </UForm>
  </UForm>
</template>
```

### UInput - Text Input

**Props:**
- `modelValue` - Input value
- `type` - Input type (text, email, password, etc.)
- `placeholder` - Placeholder text
- `disabled` - Disable input
- `size` - Size variant (xs, sm, md, lg, xl)
- `color` - Color theme
- `variant` - Style variant (outline, soft, subtle, ghost, none)
- `icon` - Leading/trailing icon
- `loading` - Show loading state

**Examples:**
```vue
<!-- Basic input -->
<UInput v-model="value" placeholder="Enter text" />

<!-- With icon -->
<UInput 
  v-model="email" 
  icon="i-lucide-mail" 
  placeholder="Email"
  type="email"
/>

<!-- Loading state -->
<UInput v-model="search" loading placeholder="Searching..." />

<!-- Different sizes -->
<UInput size="sm" placeholder="Small" />
<UInput size="lg" placeholder="Large" />
```

### USelect - Selection Input

**Key Features:**
- Single and multiple selection
- Searchable options
- Custom item rendering
- Async loading support

**Basic Usage:**
```vue
<script setup>
const items = ['Option 1', 'Option 2', 'Option 3']
const selected = ref('Option 1')

// Object-based items
const objectItems = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' }
]
</script>

<template>
  <!-- Simple select -->
  <USelect v-model="selected" :items="items" />
  
  <!-- Multiple selection -->
  <USelect v-model="multiSelected" :items="items" multiple />
  
  <!-- With custom value key -->
  <USelect 
    v-model="selected" 
    :items="objectItems" 
    value-key="value"
  />
</template>
```

**Advanced Examples:**
```vue
<!-- With icons and avatars -->
<USelect 
  v-model="selected"
  :items="[
    { label: 'User', value: 'user', icon: 'i-lucide-user' },
    { label: 'Admin', value: 'admin', icon: 'i-lucide-shield' }
  ]"
/>

<!-- Async loading -->
<USelect 
  v-model="user"
  :items="users"
  :loading="loading"
  placeholder="Select user"
/>
```

### UTextarea - Multi-line Input

**Features:**
- Auto-resize capability
- Row configuration
- Icon support
- Loading states

**Usage:**
```vue
<script setup>
const content = ref('')
</script>

<template>
  <!-- Basic textarea -->
  <UTextarea v-model="content" placeholder="Enter description" />
  
  <!-- Auto-resize with max rows -->
  <UTextarea 
    v-model="content" 
    autoresize 
    :maxrows="10"
    placeholder="This will grow as you type"
  />
  
  <!-- With icon -->
  <UTextarea 
    v-model="content"
    icon="i-lucide-message-square"
    placeholder="Your message"
  />
</template>
```

### UCheckbox - Checkbox Input

**Features:**
- Indeterminate state support
- Custom icons
- Label and description
- Card variant for enhanced UI

**Usage:**
```vue
<script setup>
const checked = ref(false)
const indeterminate = ref('indeterminate')
</script>

<template>
  <!-- Basic checkbox -->
  <UCheckbox v-model="checked" label="Accept terms" />
  
  <!-- Indeterminate state -->
  <UCheckbox v-model="indeterminate" label="Partial selection" />
  
  <!-- Card variant -->
  <UCheckbox 
    v-model="checked"
    variant="card"
    label="Premium Plan"
    description="Advanced features included"
  />
  
  <!-- Custom icon -->
  <UCheckbox 
    v-model="checked"
    icon="i-lucide-heart"
    label="Favorite"
  />
</template>
```

## UI Components

### UButton - Button Component

**Comprehensive API:**
- `label` - Button text
- `color` - Theme color (primary, secondary, success, info, warning, error, neutral)
- `variant` - Style variant (solid, outline, soft, subtle, ghost, link)
- `size` - Size (xs, sm, md, lg, xl)
- `icon` - Icon name
- `loading` - Loading state
- `disabled` - Disabled state
- `to` - Navigation target (makes it a link)

**Examples:**
```vue
<!-- Basic buttons -->
<UButton>Default</UButton>
<UButton color="success" variant="outline">Success</UButton>
<UButton size="lg" icon="i-lucide-plus">Add Item</UButton>

<!-- Loading and disabled states -->
<UButton loading>Processing...</UButton>
<UButton disabled>Disabled</UButton>

<!-- Navigation button -->
<UButton to="/dashboard" icon="i-lucide-arrow-right">
  Go to Dashboard
</UButton>

<!-- Icon-only button -->
<UButton icon="i-lucide-settings" square />
```

### UCard - Card Container

**Features:**
- Header, body, footer sections
- Customizable padding and spacing
- Shadow and border variants

**Usage:**
```vue
<template>
  <!-- Basic card -->
  <UCard>
    <template #header>
      <h3>Card Title</h3>
    </template>
    
    <p>Card content goes here.</p>
    
    <template #footer>
      <UButton>Action</UButton>
    </template>
  </UCard>
  
  <!-- Custom styling -->
  <UCard 
    :ui="{ 
      body: { padding: 'p-6' },
      shadow: 'shadow-xl'
    }"
  >
    Custom styled card
  </UCard>
</template>
```

### UModal - Modal Dialog

**Features:**
- Overlay and backdrop
- Size variants
- Prevent close options
- Transition animations

**Usage:**
```vue
<script setup>
const isOpen = ref(false)
</script>

<template>
  <UButton @click="isOpen = true">Open Modal</UButton>
  
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <h3>Modal Title</h3>
      </template>
      
      <p>Modal content</p>
      
      <template #footer>
        <div class="flex justify-end gap-2">
          <UButton color="neutral" variant="outline" @click="isOpen = false">
            Cancel
          </UButton>
          <UButton @click="handleSave">
            Save
          </UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>
```

### UTable - Data Table

**Features:**
- Sortable columns
- Selectable rows
- Loading states
- Empty states
- Pagination integration

**Usage:**
```vue
<script setup>
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'actions', label: 'Actions' }
]

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
]

const selectedRows = ref([])
</script>

<template>
  <UTable 
    :columns="columns" 
    :rows="rows"
    v-model="selectedRows"
  >
    <template #actions-data="{ row }">
      <UDropdownMenu :items="[
        [{ label: 'Edit', icon: 'i-lucide-edit' }],
        [{ label: 'Delete', icon: 'i-lucide-trash', color: 'error' }]
      ]">
        <UButton icon="i-lucide-more-horizontal" variant="ghost" />
      </UDropdownMenu>
    </template>
  </UTable>
</template>
```

### UAvatar - User Avatar

**Features:**
- Image with fallback
- Size variants
- Chip indicators
- Group support

**Usage:**
```vue
<template>
  <!-- Basic avatar -->
  <UAvatar src="https://github.com/nuxt.png" alt="User" />
  
  <!-- With fallback text -->
  <UAvatar :src="null" alt="John Doe" />
  
  <!-- Different sizes -->
  <UAvatar size="xs" src="user.jpg" />
  <UAvatar size="xl" src="user.jpg" />
  
  <!-- With chip indicator -->
  <UAvatar 
    src="user.jpg" 
    :chip="{ color: 'success', position: 'bottom-right' }"
  />
</template>
```

### UBadge - Status Badge

**Usage:**
```vue
<template>
  <!-- Basic badges -->
  <UBadge>Default</UBadge>
  <UBadge color="success">Success</UBadge>
  <UBadge color="warning" variant="outline">Warning</UBadge>
  
  <!-- With icon -->
  <UBadge icon="i-lucide-star" color="info">Featured</UBadge>
  
  <!-- Different sizes -->
  <UBadge size="sm">Small</UBadge>
  <UBadge size="lg">Large</UBadge>
</template>
```

## Layout Components

### UContainer - Layout Container

**Features:**
- Responsive max-width
- Padding control
- Center alignment

**Usage:**
```vue
<template>
  <UContainer>
    <h1>Page Content</h1>
    <p>This content is contained and centered.</p>
  </UContainer>
  
  <!-- Custom max width -->
  <UContainer :ui="{ maxWidth: 'max-w-4xl' }">
    <p>Custom container width</p>
  </UContainer>
</template>
```

### UDivider - Section Divider

**Usage:**
```vue
<template>
  <div>
    <p>Section 1</p>
    <UDivider />
    <p>Section 2</p>
    
    <!-- With label -->
    <UDivider label="OR" />
    
    <!-- Vertical divider -->
    <div class="flex">
      <span>Left</span>
      <UDivider orientation="vertical" />
      <span>Right</span>
    </div>
  </div>
</template>
```

## Feedback Components

### UAlert - Alert Messages

**Features:**
- Multiple color themes
- Icon support
- Dismissible
- Action buttons

**Usage:**
```vue
<template>
  <!-- Basic alert -->
  <UAlert 
    title="Success!" 
    description="Your changes have been saved."
    color="success"
  />
  
  <!-- With icon -->
  <UAlert 
    icon="i-lucide-info"
    title="Information"
    description="Please review the details."
    color="info"
  />
  
  <!-- Dismissible with actions -->
  <UAlert 
    title="Warning"
    description="This action cannot be undone."
    color="warning"
    close
    :actions="[
      { label: 'Undo', color: 'warning' },
      { label: 'Continue', variant: 'outline' }
    ]"
  />
</template>
```

### UToast - Toast Notifications

**Features:**
- Multiple positions
- Auto-dismiss
- Action buttons
- Progress indicator

**Usage with Composable:**
```vue
<script setup>
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success!',
    description: 'Operation completed successfully.',
    icon: 'i-lucide-check',
    color: 'success',
    timeout: 5000
  })
}

function showActionToast() {
  toast.add({
    title: 'File uploaded',
    description: 'Your file has been uploaded successfully.',
    actions: [{
      label: 'View',
      click: () => console.log('View clicked')
    }]
  })
}
</script>

<template>
  <UButton @click="showToast">Show Toast</UButton>
  <UButton @click="showActionToast">Show Action Toast</UButton>
</template>
```

**Global Configuration:**
```vue
<!-- app.vue -->
<template>
  <UApp :toaster="{ position: 'bottom-right', duration: 5000 }">
    <NuxtPage />
  </UApp>
</template>
```

## Navigation Components

### UBreadcrumb - Navigation Breadcrumbs

**Usage:**
```vue
<script setup>
const items = [
  { label: 'Home', to: '/', icon: 'i-lucide-home' },
  { label: 'Products', to: '/products' },
  { label: 'Category', to: '/products/category' },
  { label: 'Current Page' } // No 'to' prop makes it non-clickable
]
</script>

<template>
  <UBreadcrumb :items="items" />
  
  <!-- Custom separator -->
  <UBreadcrumb :items="items" separator-icon="i-lucide-arrow-right" />
  
  <!-- Custom separator slot -->
  <UBreadcrumb :items="items">
    <template #separator>
      <span class="text-gray-400">/</span>
    </template>
  </UBreadcrumb>
</template>
```

### UTabs - Tab Navigation

**Features:**
- Horizontal and vertical orientation
- Icon and badge support
- Custom content slots
- Controlled and uncontrolled modes

**Usage:**
```vue
<script setup>
const items = [
  { 
    label: 'Account', 
    icon: 'i-lucide-user',
    slot: 'account'
  },
  { 
    label: 'Settings', 
    icon: 'i-lucide-settings',
    slot: 'settings'
  },
  {
    label: 'Notifications',
    icon: 'i-lucide-bell',
    badge: '3',
    slot: 'notifications'
  }
]

const activeTab = ref('account')
</script>

<template>
  <UTabs :items="items" v-model="activeTab">
    <template #account>
      <div>Account settings content</div>
    </template>
    
    <template #settings>
      <div>General settings content</div>
    </template>
    
    <template #notifications>
      <div>Notification preferences</div>
    </template>
  </UTabs>
  
  <!-- Vertical orientation -->
  <UTabs :items="items" orientation="vertical" />
  
  <!-- Different variants -->
  <UTabs :items="items" variant="link" />
</template>
```

## Composables

### useToast()

**Methods:**
- `add(toast)` - Add a new toast
- `remove(id)` - Remove specific toast
- `clear()` - Clear all toasts

**Toast Object Properties:**
```typescript
interface Toast {
  id?: string
  title?: string
  description?: string
  icon?: string
  avatar?: AvatarProps
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  timeout?: number
  actions?: ToastAction[]
  close?: boolean | ButtonProps
  progress?: boolean | ProgressProps
}
```

### useFormField()

Used for creating custom form components that integrate with UForm:

```vue
<script setup>
// Custom input component
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const { id, name, size, color, required, help, error } = useFormField()

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div>
    <input 
      :id="id"
      :name="name"
      v-model="value"
      :required="required"
      :class="[
        'form-input',
        error ? 'border-red-500' : 'border-gray-300'
      ]"
    />
    <p v-if="help" class="text-sm text-gray-600">{{ help }}</p>
    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
  </div>
</template>
```

## Best Practices

### Component Organization

**File Structure:**
```
app/
├── components/
│   ├── ui/           # Custom UI components
│   ├── forms/        # Form-specific components
│   └── layout/       # Layout components
├── composables/      # Custom composables
├── assets/
│   └── css/
│       └── main.css  # Global styles
└── app.config.ts     # UI configuration
```

### Theme Customization Strategy

1. **Start with app.config.ts** for global changes
2. **Use component ui prop** for specific instances
3. **Create custom variants** for repeated patterns
4. **Leverage CSS variables** for dynamic theming

**Example Custom Theme:**
```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    // Global color overrides
    primary: 'blue',
    
    // Component-specific customization
    button: {
      slots: {
        base: 'font-semibold transition-all duration-200'
      },
      variants: {
        variant: {
          gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
        }
      }
    },
    
    // Custom card styling
    card: {
      slots: {
        base: 'overflow-hidden',
        header: 'border-b border-gray-100 dark:border-gray-800'
      }
    }
  }
})
```

### Form Validation Patterns

**Schema-First Approach:**
```vue
<script setup>
import * as z from 'zod'

// Define schema with custom error messages
const userSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  age: z.number()
    .min(18, 'Must be 18 or older')
    .max(120, 'Please enter a valid age'),
  preferences: z.object({
    newsletter: z.boolean(),
    notifications: z.boolean()
  })
})

const state = reactive({
  name: '',
  email: '',
  age: null,
  preferences: {
    newsletter: false,
    notifications: true
  }
})

async function handleSubmit(event) {
  try {
    // Data is already validated by the schema
    const validatedData = event.data
    await submitUser(validatedData)
    
    // Show success message
    const toast = useToast()
    toast.add({
      title: 'Success!',
      description: 'User created successfully.',
      color: 'success'
    })
  } catch (error) {
    console.error('Submission error:', error)
  }
}
</script>

<template>
  <UForm 
    :schema="userSchema" 
    :state="state" 
    @submit="handleSubmit"
    class="space-y-4"
  >
    <UFormField label="Full Name" name="name" required>
      <UInput v-model="state.name" placeholder="Enter your name" />
    </UFormField>
    
    <UFormField label="Email" name="email" required>
      <UInput 
        v-model="state.email" 
        type="email" 
        placeholder="Enter your email" 
      />
    </UFormField>
    
    <UFormField label="Age" name="age" required>
      <UInput 
        v-model.number="state.age" 
        type="number" 
        placeholder="Enter your age" 
      />
    </UFormField>
    
    <!-- Nested form fields -->
    <fieldset class="border rounded-lg p-4">
      <legend class="font-medium">Preferences</legend>
      
      <UFormField name="preferences.newsletter">
        <UCheckbox 
          v-model="state.preferences.newsletter"
          label="Subscribe to newsletter"
        />
      </UFormField>
      
      <UFormField name="preferences.notifications">
        <UCheckbox 
          v-model="state.preferences.notifications"
          label="Enable notifications"
        />
      </UFormField>
    </fieldset>
    
    <UButton type="submit" size="lg" class="w-full">
      Create Account
    </UButton>
  </UForm>
</template>
```

### Performance Optimization

**Lazy Loading Components:**
```vue
<script setup>
// Lazy load heavy components
const UTable = defineAsyncComponent(() => import('@nuxt/ui/components/UTable'))
const UChart = defineAsyncComponent(() => import('~/components/UChart.vue'))
</script>
```

**Optimized Reactivity:**
```vue
<script setup>
// Use shallowRef for large datasets
const tableData = shallowRef([])

// Debounce search inputs
const searchQuery = ref('')
const debouncedSearch = debounce(searchQuery, 300)

// Computed with proper dependencies
const filteredData = computed(() => {
  if (!debouncedSearch.value) return tableData.value
  return tableData.value.filter(item => 
    item.name.toLowerCase().includes(debouncedSearch.value.toLowerCase())
  )
})
</script>
```

### Accessibility Guidelines

1. **Always provide labels** for form fields
2. **Use semantic HTML** elements where possible
3. **Ensure keyboard navigation** works properly
4. **Provide alternative text** for images and icons
5. **Use proper color contrast** ratios
6. **Test with screen readers**

**Example Accessible Form:**
```vue
<template>
  <UForm :schema="schema" :state="state">
    <UFormField 
      label="Email Address" 
      name="email" 
      required
      help="We'll never share your email with anyone else"
    >
      <UInput 
        v-model="state.email"
        type="email"
        placeholder="Enter your email"
        aria-describedby="email-help"
      />
    </UFormField>
    
    <UFormField label="Password" name="password" required>
      <UInput 
        v-model="state.password"
        type="password"
        placeholder="Enter your password"
        aria-describedby="password-requirements"
      />
      <template #help>
        <div id="password-requirements">
          Password must be at least 8 characters long and contain:
          <ul class="list-disc list-inside mt-1">
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one number</li>
          </ul>
        </div>
      </template>
    </UFormField>
  </UForm>
</template>
```

## Migration & Troubleshooting

### Common Issues and Solutions

**1. Components not auto-importing:**
```typescript
// nuxt.config.ts - Ensure proper module configuration
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  // Explicit component configuration if needed
  components: [
    { path: '~/components', pathPrefix: false }
  ]
})
```

**2. Styles not loading:**
```css
/* assets/css/main.css - Correct import order */
@import "tailwindcss";
@import "@nuxt/ui";

/* Your custom styles after imports */
```

**3. Icons not displaying:**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  icon: {
    provider: 'iconify',
    serverBundle: {
      collections: ['lucide'] // Ensure icon collection is included
    }
  }
})
```

**4. TypeScript errors:**
```typescript
// Add to your types if needed
declare module '@nuxt/ui' {
  // Custom type extensions
}
```

### Performance Troubleshooting

**Bundle Size Analysis:**
```bash
# Analyze bundle size
npx nuxi analyze

# Check which components are being imported
npx nuxi build --analyze
```

**Runtime Performance:**
- Use Vue DevTools to identify performance bottlenecks
- Implement virtual scrolling for large lists
- Use `v-show` instead of `v-if` for frequently toggled elements
- Optimize computed properties and watchers

### Development Tips

1. **Use TypeScript** for better development experience
2. **Leverage Vue DevTools** for debugging
3. **Test components in isolation** using Storybook or similar
4. **Use ESLint and Prettier** for code consistency
5. **Implement proper error boundaries** for production apps

**Example Development Setup:**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  css: ['~/assets/css/main.css'],
  
  // Development optimizations
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  }
})
```

This comprehensive guide covers the essential aspects of Nuxt UI v4, providing both basic usage patterns and advanced implementation strategies for building modern, accessible, and performant user interfaces.
