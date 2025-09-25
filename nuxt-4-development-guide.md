# Nuxt 4 Development Guide - Complete Reference

*This comprehensive guide covers all aspects of Nuxt 4 development, optimized for LLM usage and quick reference.*

## Table of Contents

1. [Introduction](#introduction)
2. [Directory Structure](#directory-structure)
3. [Core Concepts](#core-concepts)
4. [Configuration](#configuration)
5. [Development Features](#development-features)
6. [Advanced Topics](#advanced-topics)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

## Introduction

Nuxt 4 is a powerful, full-stack Vue.js framework that provides:
- **Universal rendering** (SSR/SSG/SPA)
- **File-based routing** with automatic code splitting
- **Auto-imports** for components, composables, and utilities
- **TypeScript support** with zero configuration
- **Server engine** powered by Nitro
- **Module ecosystem** for extensibility

### Key Features
- Built on Vue 3 with Composition API
- Vite-powered development with HMR
- Hybrid rendering with route rules
- Edge-side rendering support
- Native ES modules
- Component islands for server components

## Directory Structure

### Root Level Files
```
project/
├── .env                    # Environment variables (build/dev time)
├── .gitignore             # Git ignore patterns
├── .nuxt/                 # Auto-generated development files
├── .nuxtignore            # Files to ignore during build
├── .nuxtrc                # Nuxt configuration (flat syntax)
├── .output/               # Production build output
├── nuxt.config.ts         # Main configuration file
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

### App Directory Structure
```
app/
├── app.vue                # Main application component
├── app.config.ts          # Reactive app configuration
├── error.vue              # Global error page
├── assets/                # Build-processed assets
├── components/            # Vue components (auto-imported)
├── composables/           # Vue composables (auto-imported)
├── layouts/               # Layout components
├── middleware/            # Route middleware
├── pages/                 # File-based routing
├── plugins/               # Nuxt plugins
└── utils/                 # Utility functions (auto-imported)
```

### Server Directory
```
server/
├── api/                   # API routes (/api prefix)
├── routes/                # Server routes (no prefix)
├── middleware/            # Server middleware
├── plugins/               # Nitro plugins
└── utils/                 # Server utilities (auto-imported)
```

### Additional Directories
```
content/                   # Content management (with @nuxt/content)
modules/                   # Local modules (auto-registered)
node_modules/              # Package dependencies
public/                    # Static assets (served at root)
shared/                    # Shared utilities (app + server)
```

## Core Concepts

### Auto-imports

Nuxt automatically imports:
- **Vue APIs**: `ref`, `computed`, `watch`, lifecycle hooks
- **Nuxt composables**: `useFetch`, `useRoute`, `useRuntimeConfig`
- **Components** from `~/components/`
- **Composables** from `~/composables/`
- **Utilities** from `~/utils/`

```vue
<script setup>
// All auto-imported, no explicit imports needed
const count = ref(0)
const route = useRoute()
const { data } = await useFetch('/api/users')
</script>
```

### File-based Routing

Pages are automatically created from files in `~/pages/`:

```
pages/
├── index.vue              # → /
├── about.vue              # → /about
├── users/
│   ├── index.vue          # → /users
│   ├── [id].vue           # → /users/:id
│   └── [...slug].vue      # → /users/:slug(.*)
└── blog/
    └── [slug].vue         # → /blog/:slug
```

#### Dynamic Routes
- `[id].vue` - Single parameter
- `[...slug].vue` - Catch-all route
- `[[slug]].vue` - Optional parameter

### Rendering Modes

#### Universal Rendering (Default)
- Server-side rendering with client hydration
- SEO-friendly with fast initial load
- Full interactivity after hydration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true // default
})
```

#### Client-side Rendering (SPA)
- Renders entirely in the browser
- Faster development, smaller server requirements

```ts
export default defineNuxtConfig({
  ssr: false
})
```

#### Hybrid Rendering
- Different rendering strategies per route
- Combines SSR, SSG, and SPA benefits

```ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },           # Static generation
    '/products/**': { swr: 3600 },      # Stale-while-revalidate
    '/admin/**': { ssr: false },        # Client-side only
    '/api/**': { cors: true }           # API with CORS
  }
})
```

### Component System

#### Auto-imported Components
Components in `~/components/` are automatically available:

```vue
<!-- components/AppHeader.vue -->
<template>
  <header>My Header</header>
</template>

<!-- pages/index.vue -->
<template>
  <div>
    <AppHeader /> <!-- Auto-imported -->
  </div>
</template>
```

#### Nested Component Names
```
components/
├── base/
│   └── Button.vue         # → <BaseButton>
└── form/
    └── Input.vue          # → <FormInput>
```

#### Lazy Components
Add `Lazy` prefix for code splitting:
```vue
<template>
  <div>
    <LazyMountainsList v-if="show" />
  </div>
</template>
```

#### Client/Server Components
- `.client.vue` - Renders only on client
- `.server.vue` - Renders only on server (component islands)

### Layouts

Create reusable page layouts:

```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <AppHeader />
    <slot /> <!-- Page content -->
    <AppFooter />
  </div>
</template>

<!-- layouts/admin.vue -->
<template>
  <div class="admin-layout">
    <AdminSidebar />
    <slot />
  </div>
</template>
```

Usage in pages:
```vue
<script setup>
definePageMeta({
  layout: 'admin'
})
</script>
```

### Middleware

#### Route Middleware Types
1. **Anonymous** - Inline in page
2. **Named** - Files in `~/middleware/`
3. **Global** - Files with `.global.ts` suffix

```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (!user.value) {
    return navigateTo('/login')
  }
})

// Usage in page
definePageMeta({
  middleware: ['auth']
})
```

#### Server Middleware
```ts
// server/middleware/log.ts
export default defineEventHandler((event) => {
  console.log('Request:', getRequestURL(event))
})
```

## Configuration

### Main Configuration (nuxt.config.ts)

```ts
export default defineNuxtConfig({
  // App configuration
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // Development configuration
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Rendering configuration
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  // Runtime configuration
  runtimeConfig: {
    // Private keys (server-only)
    apiSecret: process.env.API_SECRET,
    // Public keys (client + server)
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@pinia/nuxt'
  ],

  // TypeScript configuration
  typescript: {
    typeCheck: true
  },

  // Build configuration
  build: {
    transpile: ['some-package']
  }
})
```

### App Configuration (app.config.ts)

```ts
export default defineAppConfig({
  theme: {
    primaryColor: '#00dc82',
    darkMode: true
  },
  // Reactive configuration accessible via useAppConfig()
})
```

### Environment Variables

```bash
# .env
NUXT_API_SECRET=secret_key
NUXT_PUBLIC_API_BASE=https://api.example.com
```

Access in runtime:
```ts
const config = useRuntimeConfig()
console.log(config.apiSecret) // server-only
console.log(config.public.apiBase) // client + server
```

## Development Features

### Data Fetching

#### useFetch
```ts
// Auto-refreshes on route changes, handles SSR
const { data, pending, error, refresh } = await useFetch('/api/users')

// With options
const { data } = await useFetch('/api/users', {
  key: 'users',
  default: () => [],
  transform: (data) => data.users,
  watch: [searchQuery]
})
```

#### useAsyncData
```ts
// More control over data fetching
const { data, pending } = await useAsyncData('users', () => {
  return $fetch('/api/users')
})
```

#### $fetch
```ts
// Direct API calls (auto-imported)
const users = await $fetch('/api/users')

// In components/composables
const login = async (credentials) => {
  return await $fetch('/api/auth/login', {
    method: 'POST',
    body: credentials
  })
}
```

### State Management

#### useState
```ts
// Reactive state shared across components
const counter = useState('counter', () => 0)

// In components
const increment = () => counter.value++
```

#### Pinia Integration
```ts
// stores/user.ts
export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  
  const login = async (credentials) => {
    user.value = await $fetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
  }
  
  return { user, login }
})
```

### Server API Routes

#### Basic API Route
```ts
// server/api/hello.ts
export default defineEventHandler((event) => {
  return { message: 'Hello World' }
})
```

#### Dynamic Routes
```ts
// server/api/users/[id].get.ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return await getUserById(id)
})
```

#### HTTP Methods
```ts
// server/api/users.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return await createUser(body)
})
```

#### Error Handling
```ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required'
    })
  }
  
  const user = await findUser(id)
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }
  
  return user
})
```

### Plugins

#### Client/Server/Universal Plugins
```ts
// plugins/api.client.ts (client-only)
export default defineNuxtPlugin(() => {
  // Client-side initialization
})

// plugins/database.server.ts (server-only)
export default defineNuxtPlugin(() => {
  // Server-side initialization
})

// plugins/global.ts (universal)
export default defineNuxtPlugin(() => {
  // Runs on both client and server
})
```

#### Providing Helpers
```ts
// plugins/api.ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: {
        users: {
          list: () => $fetch('/api/users'),
          get: (id) => $fetch(`/api/users/${id}`)
        }
      }
    }
  }
})

// Usage in components
const { $api } = useNuxtApp()
const users = await $api.users.list()
```

### Composables

#### Custom Composables
```ts
// composables/useAuth.ts
export const useAuth = () => {
  const user = useState('auth.user', () => null)
  
  const login = async (credentials) => {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
    user.value = data.user
  }
  
  const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' })
    user.value = null
    await navigateTo('/login')
  }
  
  return {
    user: readonly(user),
    login,
    logout
  }
}
```

#### Using in Components
```vue
<script setup>
const { user, login, logout } = useAuth()

const handleLogin = async (form) => {
  try {
    await login(form)
    await navigateTo('/dashboard')
  } catch (error) {
    // Handle error
  }
}
</script>
```

## Advanced Topics

### Experimental Features

Enable cutting-edge features:
```ts
export default defineNuxtConfig({
  experimental: {
    // Component islands for server components
    componentIslands: true,
    
    // Typed router with better type safety
    typedPages: true,
    
    // Async context for composables
    asyncContext: true,
    
    // View transitions API
    viewTransition: true,
    
    // Lazy hydration strategies
    lazyHydration: true
  }
})
```

### Module Development

#### Basic Module Structure
```ts
// modules/my-module/index.ts
import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {},
  setup(options, nuxt) {
    // Add components
    addComponent({
      name: 'MyComponent',
      filePath: resolve('./runtime/components/MyComponent.vue')
    })
    
    // Add composables
    addImports({
      name: 'useMyFeature',
      from: resolve('./runtime/composables/useMyFeature.ts')
    })
  }
})
```

### Server Engine (Nitro)

#### Server Configuration
```ts
export default defineNuxtConfig({
  nitro: {
    // Deployment preset
    preset: 'vercel',
    
    // Server storage
    storage: {
      redis: {
        driver: 'redis',
        host: '127.0.0.1',
        port: 6379
      }
    },
    
    // Route rules
    routeRules: {
      '/api/**': { cors: true }
    }
  }
})
```

#### Server Utilities
```ts
// server/utils/database.ts
export const connectDB = async () => {
  // Database connection logic
}

// Auto-imported in server routes
// server/api/users.get.ts
export default defineEventHandler(async (event) => {
  await connectDB()
  return await getUsers()
})
```

### TypeScript Integration

#### Type Augmentation
```ts
// types/index.ts
declare module '#app' {
  interface NuxtApp {
    $myPlugin: MyPluginType
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $myPlugin: MyPluginType
  }
}

export {}
```

#### Runtime Config Types
```ts
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
  }
  interface PublicRuntimeConfig {
    apiBase: string
  }
}
```

### Performance Optimization

#### Lazy Hydration
```vue
<template>
  <div>
    <!-- Hydrate when visible -->
    <LazyMyComponent hydrate-on-visible />
    
    <!-- Hydrate when idle -->
    <LazyMyComponent hydrate-on-idle />
    
    <!-- Hydrate on interaction -->
    <LazyMyComponent hydrate-on-interaction="click" />
    
    <!-- Never hydrate (static content) -->
    <LazyMyComponent hydrate-never />
  </div>
</template>
```

#### Code Splitting
```ts
// Dynamic imports for code splitting
const MyComponent = defineAsyncComponent(() => import('~/components/MyComponent.vue'))

// Route-level splitting (automatic with pages)
// Lazy component imports
const LazyModal = () => import('~/components/Modal.vue')
```

### Deployment

#### Static Generation
```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/feed.xml']
    }
  }
})
```

#### Server Deployment
```bash
# Build for production
npm run build

# Start production server
npm run start

# Or use the generated output
node .output/server/index.mjs
```

#### Edge Deployment
```ts
// For Vercel Edge
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge'
  }
})

// For Cloudflare Workers
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  }
})
```

## Best Practices

### Project Structure
1. **Organize by feature** rather than file type
2. **Use composables** for reusable logic
3. **Leverage auto-imports** to reduce boilerplate
4. **Separate concerns** between client and server
5. **Use TypeScript** for better development experience

### Performance
1. **Use lazy components** for non-critical content
2. **Implement proper caching** with route rules
3. **Optimize images** with @nuxt/image
4. **Minimize bundle size** with tree-shaking
5. **Use server-side rendering** for SEO-critical pages

### Security
1. **Never expose secrets** in public runtime config
2. **Validate user input** in API routes
3. **Use HTTPS** in production
4. **Implement proper authentication** and authorization
5. **Sanitize data** before rendering

### SEO
1. **Use `useSeoMeta`** for meta tags
2. **Implement structured data** with JSON-LD
3. **Generate sitemaps** and robots.txt
4. **Optimize Core Web Vitals** with proper loading strategies
5. **Use semantic HTML** and proper heading hierarchy

### Development Workflow
1. **Enable TypeScript checking** in development
2. **Use ESLint** with @nuxt/eslint
3. **Set up proper debugging** configuration
4. **Write tests** for critical functionality
5. **Use Nuxt DevTools** for debugging and optimization

## Troubleshooting

### Common Issues

#### Hydration Mismatches
```ts
// ❌ Problematic
const randomId = Math.random()

// ✅ Solution
const randomId = useState('randomId', () => Math.random())
```

#### Auto-import Issues
```ts
// ❌ If auto-import fails
import { ref } from 'vue'

// ✅ Explicit import from #imports
import { ref } from '#imports'

// ✅ Check nuxt.config.ts
export default defineNuxtConfig({
  imports: {
    autoImport: true // default
  }
})
```

#### Server/Client Context Issues
```ts
// ❌ Problematic
const config = useRuntimeConfig() // Outside composable context

// ✅ Solution
export const useMyComposable = () => {
  const config = useRuntimeConfig() // Inside composable
  return config
}
```

#### Module Resolution Issues
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  alias: {
    'problematic-package': 'problematic-package/dist/index.cjs'
  },
  build: {
    transpile: ['problematic-package']
  }
})
```

### Debugging

#### Enable Source Maps
```ts
export default defineNuxtConfig({
  sourcemap: {
    server: true,
    client: true
  }
})
```

#### Node Inspector
```bash
# Start with debugger
nuxt dev --inspect

# Then open Chrome DevTools
```

#### VS Code Configuration
```json
// .vscode/launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Nuxt Server",
  "program": "${workspaceFolder}/node_modules/nuxt/bin/nuxt.mjs",
  "args": ["dev"]
}
```

### Performance Monitoring

#### Built-in DevTools
```ts
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  }
})
```

#### Bundle Analysis
```bash
# Analyze bundle size
npx nuxi analyze

# Build with bundle analyzer
ANALYZE=true npm run build
```

This comprehensive guide covers the essential aspects of Nuxt 4 development. For the most up-to-date information, always refer to the official [Nuxt documentation](https://nuxt.com/docs).
