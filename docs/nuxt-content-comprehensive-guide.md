# Nuxt Content v3 - Comprehensive LLM-Optimized Documentation

## Table of Contents
1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Core Concepts](#core-concepts)
4. [Content Collections](#content-collections)
5. [File Types & Formats](#file-types--formats)
6. [Querying & Data Access](#querying--data-access)
7. [Components & Rendering](#components--rendering)
8. [Configuration](#configuration)
9. [Deployment](#deployment)
10. [Advanced Features](#advanced-features)
11. [Migration from v2](#migration-from-v2)
12. [Best Practices](#best-practices)
13. [Troubleshooting](#troubleshooting)

## Overview

**Nuxt Content v3** is a powerful Git-based CMS designed specifically for Nuxt developers. It provides a simple way to manage content for your application by allowing developers to write content in Markdown, YAML, CSV, or JSON files and then query and display it in their application.

### Key Features
- **File-based CMS**: Write content in Markdown, YAML, CSV, or JSON
- **Query Builder**: MongoDB-like API for content queries
- **SQLite-powered**: Enhanced performance with SQL-based storage
- **Markdown with Vue**: Use Vue components in Markdown files (MDC syntax)
- **Code highlighting**: Beautiful code blocks with Shiki integration
- **Visual Editor**: Nuxt Studio integration for non-technical users
- **Navigation Generation**: Automatic navigation from content structure
- **Prose Components**: Customizable HTML typography tags
- **Universal Deployment**: Works on static, server, serverless & edge

### What's New in v3
- **Content Collections**: Organized data structure with type safety
- **Improved Performance**: SQL-based storage for better scalability
- **TypeScript Integration**: Automatic type generation
- **Nuxt Studio Integration**: Enhanced visual editing experience

## Installation & Setup

### 1. Install the Package

```bash
# Using pnpm (recommended)
pnpm add @nuxt/content

# Using npm
npm install @nuxt/content

# Using yarn
yarn add @nuxt/content

# Using bun
bun add @nuxt/content
```

### 2. Register the Module

Add to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

### 3. Automatic Setup with CLI

When creating a new Nuxt project:

```bash
npx create nuxt <project-name>
# Select @nuxt/content from the interactive module selector
```

### 4. Create Your First Collection

Create `content.config.ts` in your project root:

```typescript
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
```

### 5. Create Your First Content File

Create `content/index.md`:

```markdown
# My First Page

Here is some content.
```

### 6. Display Your Content

Create `pages/index.vue`:

```vue
<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/').first()
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
```

## Core Concepts

### Content Collections

Collections organize related items within your Nuxt Content project. They provide:

- **Logical Grouping**: Group similar content together
- **Shared Configuration**: Apply common settings and validations
- **Improved Querying**: Fetch and filter related content efficiently
- **Automatic Type Inference**: Get type safety and autocompletion
- **Flexible Structure**: Organize by content type, category, or logical grouping

### Collection Types

#### Page Type
Use for content with 1-to-1 relationship between files and pages:

```typescript
defineCollection({
  type: 'page',
  source: '**/*.md'
})
```

**Built-in fields for page type:**
- `path`: Generated route path
- `title`: Page title
- `description`: Page description
- `seo`: SEO metadata
- `body`: Page content parsed as AST
- `navigation`: Page navigation configuration

#### Data Type
Use for structured data that doesn't correspond to webpages:

```typescript
defineCollection({
  type: 'data',
  source: 'authors/**.yml'
})
```

### Database Architecture

Nuxt Content v3 uses SQLite for storage with three key steps:

1. **Generating Database Dump**: Content is parsed and stored in SQL tables
2. **Restoring Dump on Cold Start**: Database is restored during runtime
3. **WASM SQLite in Browser**: Client-side navigation uses local SQLite

## Content Collections

### Defining Collections

Create `content.config.ts`:

```typescript
import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()),
        image: z.string()
      })
    }),
    authors: defineCollection({
      type: 'data',
      source: 'authors/**.yml',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string()
      })
    })
  }
})
```

### Collection Sources

#### Local Files
```typescript
defineCollection({
  source: '**/*.md'  // All markdown files
})

defineCollection({
  source: {
    include: 'blog/**/*.md',
    exclude: ['blog/drafts/**'],
    prefix: '/blog'
  }
})
```

#### External Repository
```typescript
defineCollection({
  source: {
    repository: 'https://github.com/nuxt/content',
    include: 'docs/content/**',
    authToken: process.env.GITHUB_TOKEN
  }
})
```

### Schema Validation

#### Using Zod v3
```typescript
import { z } from 'zod'

schema: z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
  image: z.object({
    src: z.string(),
    alt: z.string()
  })
})
```

#### Using Valibot
```typescript
import { object, string, boolean, array, date, optional } from 'valibot'

schema: object({
  title: string(),
  description: optional(string()),
  date: date(),
  draft: optional(boolean()),
  tags: optional(array(string()))
})
```

## File Types & Formats

### Markdown Files

#### Basic Structure
```markdown
---
title: 'My Blog Post'
description: 'A great blog post'
date: 2024-01-15
tags: ['vue', 'nuxt']
---

# My Blog Post

This is the content of my blog post.
```

#### MDC Syntax (Markdown Components)

**Block Components:**
```markdown
::card
This is a card component.
::
```

**Named Slots:**
```markdown
::hero
#title
My Page Title
#description
This is the description.
::
```

**Props (Inline):**
```markdown
::alert{type="warning"}
This is a warning alert.
::
```

**Props (YAML):**
```markdown
::icon-card
---
icon: IconNuxt
title: Nuxt Architecture
description: Harness the full power of Nuxt
---
::
```

**Attributes:**
```markdown
Hello [World]{style="color: green;" .custom-class #custom-id}!
```

**Data Binding:**
```markdown
# Hello {{ $doc.name || 'World' }}
```

### YAML Files

```yaml
# content/authors/john.yml
name: John Doe
avatar: https://example.com/avatar.jpg
url: https://github.com/johndoe
```

### JSON Files

```json
{
  "name": "Jane Smith",
  "avatar": "https://example.com/avatar.jpg",
  "url": "https://github.com/janesmith"
}
```

### CSV Files

```csv
id,name,email
1,John Doe,john@example.com
2,Jane Smith,jane@example.com
```

## Querying & Data Access

### Basic Queries

#### Fetch All Items
```typescript
const { data: posts } = await useAsyncData('blog', () => 
  queryCollection('blog').all()
)
```

#### Fetch Single Item
```typescript
const { data: post } = await useAsyncData('post', () => 
  queryCollection('blog').path('/blog/my-post').first()
)
```

#### Filtering
```typescript
const { data: publishedPosts } = await useAsyncData('published', () => 
  queryCollection('blog')
    .where('draft', '=', false)
    .where('date', '>', '2024-01-01')
    .all()
)
```

### Advanced Querying

#### Complex Filters
```typescript
const { data: posts } = await useAsyncData('complex', () => 
  queryCollection('blog')
    .where('published', '=', true)
    .andWhere(query => 
      query.where('date', '>', '2024-01-01')
           .where('category', '=', 'news')
    )
    .orWhere(query => 
      query.where('featured', '=', true)
           .where('priority', '>', 5)
    )
    .all()
)
```

#### Sorting and Pagination
```typescript
const { data: posts } = await useAsyncData('paginated', () => 
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(10)
    .skip(20)
    .all()
)
```

#### Field Selection
```typescript
const { data: posts } = await useAsyncData('minimal', () => 
  queryCollection('blog')
    .select('title', 'date', 'path')
    .all()
)
```

### Navigation Queries

#### Generate Navigation Tree
```typescript
const { data: navigation } = await useAsyncData('nav', () => 
  queryCollectionNavigation('docs')
)
```

#### Find Surrounding Items
```typescript
const { data: surround } = await useAsyncData('surround', () => 
  queryCollectionItemSurroundings('docs', '/current-page', {
    before: 1,
    after: 1,
    fields: ['title', 'description']
  })
)
```

#### Search Sections
```typescript
const { data: searchSections } = await useAsyncData('search', () => 
  queryCollectionSearchSections('docs', {
    ignoredTags: ['code']
  })
)
```

## Components & Rendering

### ContentRenderer Component

```vue
<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Page not found</div>
</template>

<script setup>
const { data: page } = await useAsyncData('page', () => 
  queryCollection('content').path('/about').first()
)
</script>
```

### Slot Component

```vue
<!-- components/content/Callout.vue -->
<template>
  <div class="callout">
    <h2 v-if="$slots.title">
      <slot name="title" mdc-unwrap="p" />
    </h2>
    <slot />
  </div>
</template>
```

Usage in Markdown:
```markdown
::callout
#title
Please be careful!
#default
Using MDC & Vue components is addictive.
::
```

### Prose Components

Override prose components by creating them in `components/content/`:

```vue
<!-- components/content/ProseH1.vue -->
<template>
  <h1 class="text-4xl font-bold text-primary">
    <slot />
  </h1>
</template>
```

Available prose components:
- `ProseA`, `ProseBlockquote`, `ProsePre`, `ProseCode`
- `ProseH1` through `ProseH6`, `ProseHr`, `ProseImg`
- `ProseUl`, `ProseLi`, `ProseOl`, `ProseP`
- `ProseStrong`, `ProseEm`, `ProseTable` and related components

## Configuration

### Basic Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  content: {
    // Configuration options
  }
})
```

### Database Configuration

#### SQLite (Default)
```typescript
content: {
  database: {
    type: 'sqlite',
    filename: 'contents.sqlite'
  }
}
```

#### PostgreSQL
```typescript
content: {
  database: {
    type: 'postgres',
    url: process.env.POSTGRES_URL
  }
}
```

#### Cloudflare D1
```typescript
content: {
  database: {
    type: 'd1',
    bindingName: 'DB'
  }
}
```

#### LibSQL (Turso)
```typescript
content: {
  database: {
    type: 'libsql',
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  }
}
```

### Markdown Configuration

```typescript
content: {
  build: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 2
      },
      highlight: {
        theme: 'github-light',
        langs: ['javascript', 'typescript', 'vue']
      },
      remarkPlugins: {
        'remark-emoji': {
          options: { emoticon: true }
        }
      },
      rehypePlugins: {
        'rehype-figure': {}
      }
    }
  }
}
```

### Renderer Configuration

```typescript
content: {
  renderer: {
    anchorLinks: { h2: true, h3: true, h4: true },
    alias: {
      p: 'MyCustomParagraph'
    }
  }
}
```

### Preview API (Studio Integration)

```typescript
content: {
  preview: {
    api: 'https://api.nuxt.studio'
  }
}
```

## Deployment

### Static Hosting

```bash
npx nuxi generate
```

### Server Hosting

```bash
npx nuxi build
node .output/server/index.mjs
```

### Serverless Platforms

#### Vercel
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  }
})
```

#### Netlify
```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
  }
})
```

#### Cloudflare Pages
```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare_pages'
  },
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    }
  }
})
```

#### NuxtHub
```bash
npx nuxi module add hub
npx nuxthub deploy
```

### Docker Deployment

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm i
COPY . ./
RUN pnpm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.output/ ./
ENV PORT=80
EXPOSE 80
CMD ["node", "/app/server/index.mjs"]
```

## Advanced Features

### Transformers

Create custom transformers to modify content:

```typescript
// transformers/title-suffix.ts
import { defineTransformer } from '@nuxt/content'

export default defineTransformer({
  name: 'title-suffix',
  extensions: ['.md'],
  transform(file) {
    return {
      ...file,
      title: file.title + ' (suffix)'
    }
  }
})
```

Register in `nuxt.config.ts`:
```typescript
content: {
  build: {
    transformers: ['~/transformers/title-suffix']
  }
}
```

### Hooks

Use build-time hooks to modify content:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  hooks: {
    'content:file:beforeParse'(ctx) {
      if (ctx.file.id.endsWith('.md')) {
        ctx.file.body = ctx.file.body.replace(/react/gi, 'Vue')
      }
    },
    'content:file:afterParse'(ctx) {
      const wordCount = ctx.file.body.split(/\s+/).length
      ctx.content.readingTime = Math.ceil(wordCount / 180)
    }
  }
})
```

### Custom Sources

Define custom data sources:

```typescript
// sources/hackernews.ts
import { defineCollectionSource } from '@nuxt/content'

export const hackernewsSource = defineCollectionSource({
  getKeys: () => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(data => data.map((key: string) => `${key}.json`))
  },
  getItem: (key: string) => {
    const id = key.split('.')[0]
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.json())
  }
})
```

### Full-Text Search

#### Using Nuxt UI
```vue
<script setup>
const { data: files } = await useAsyncData('search', () => 
  queryCollectionSearchSections('docs')
)
</script>

<template>
  <UContentSearch
    v-model:search-term="searchTerm"
    :files="files"
    :navigation="navigation"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

#### Using Fuse.js
```vue
<script setup>
import Fuse from 'fuse.js'

const query = ref('')
const { data } = await useAsyncData('search-data', () => 
  queryCollectionSearchSections('docs')
)

const fuse = new Fuse(data.value, {
  keys: ['title', 'description']
})

const result = computed(() => 
  fuse.search(toValue(query)).slice(0, 10)
)
</script>
```

### Raw Content Access

Enable raw content in production:

```typescript
// content.config.ts
schema: z.object({
  rawbody: z.string()  // This field enables raw content
})
```

```vue
<template>
  <pre>{{ data.rawbody }}</pre>
</template>
```

## Migration from v2

### Key Changes

1. **API Changes**:
   - `queryContent()` → `queryCollection()`
   - `fetchContentNavigation()` → `queryCollectionNavigation()`
   - `queryContent().findSurround()` → `queryCollectionItemSurroundings()`

2. **Component Changes**:
   - `<ContentDoc>`, `<ContentList>`, `<ContentNavigation>`, `<ContentQuery>` → `<ContentRenderer>`
   - `<ContentSlot>`, `<MDCSlot>` → `<slot>` with `mdc-unwrap` attribute

3. **Configuration Changes**:
   - `_dir.yml` → `.navigation.yml`
   - Document driven mode removed (create pages manually)
   - Module options restructured

### Migration Steps

1. **Update Package**:
   ```bash
   pnpm add @nuxt/content@^3
   ```

2. **Create content.config.ts**:
   ```typescript
   import { defineContentConfig, defineCollection } from '@nuxt/content'
   
   export default defineContentConfig({
     collections: {
       content: defineCollection({
         type: 'page',
         source: '**'
       })
     }
   })
   ```

3. **Update Queries**:
   ```typescript
   // v2
   const page = await queryContent(route.path).findOne()
   
   // v3
   const page = await queryCollection('content').path(route.path).first()
   ```

4. **Update Components**:
   ```vue
   <!-- v2 -->
   <ContentDoc />
   
   <!-- v3 -->
   <ContentRenderer :value="page" />
   ```

5. **Implement Document Driven Mode**:
   ```vue
   <!-- pages/[...slug].vue -->
   <script setup>
   const route = useRoute()
   const { data: page } = await useAsyncData(route.path, () => 
     queryCollection('content').path(route.path).first()
   )
   </script>
   
   <template>
     <ContentRenderer v-if="page" :value="page" />
   </template>
   ```

## Best Practices

### Content Organization

1. **Use Collections**: Organize content by type and purpose
2. **Consistent Naming**: Use descriptive file and folder names
3. **Schema Validation**: Define schemas for type safety
4. **Ordering**: Use numeric prefixes for content ordering

### Performance Optimization

1. **Selective Queries**: Use `.select()` to fetch only needed fields
2. **Pagination**: Implement pagination for large datasets
3. **Caching**: Use `useAsyncData` for proper caching
4. **Pre-rendering**: Pre-render static content when possible

### Development Workflow

1. **Type Safety**: Leverage TypeScript integration
2. **Validation**: Use schema validation for data consistency
3. **Testing**: Test content queries and rendering
4. **Documentation**: Document your content structure

### Content Management

1. **Frontmatter**: Use consistent frontmatter structure
2. **Images**: Optimize images and use proper alt text
3. **SEO**: Implement proper meta tags and structured data
4. **Accessibility**: Ensure content is accessible

## Troubleshooting

### Common Issues

#### Content Not Showing
1. Check if database exists (`.data/content/contents.sqlite`)
2. Run cleanup and restart:
   ```bash
   npx nuxi cleanup && npx nuxi dev
   ```
3. Verify content is in the database

#### Database Issues
1. **Reset Database**:
   ```bash
   rm -rf .data/content/contents.sqlite
   npx nuxi cleanup
   npx nuxi dev
   ```

2. **Debug with SQLite Extension**:
   - Install SQLite VS Code extension
   - Open `.data/content/contents.sqlite`
   - Inspect tables and data

#### Build Errors
1. **Schema Validation**: Check collection schemas
2. **File Permissions**: Ensure proper file permissions
3. **Dependencies**: Verify all dependencies are installed

#### Serverless Deployment Issues
1. **Database Configuration**: Ensure proper database setup
2. **Environment Variables**: Check environment variables
3. **Build Commands**: Verify build commands and presets

### Debugging Tools

1. **SQLite VS Code Extension**: Visual database inspection
2. **DB Browser for SQLite**: Alternative database tool
3. **SQLite Command Line**: `sqlite3 contents.sqlite`
4. **Nuxt DevTools**: Built-in debugging capabilities

### Performance Issues

1. **Large Datasets**: Implement pagination and filtering
2. **Slow Queries**: Optimize query patterns
3. **Bundle Size**: Use selective imports
4. **Memory Usage**: Monitor memory consumption

---

## Additional Resources

- [Official Documentation](https://content.nuxt.com/)
- [Nuxt Studio](https://nuxt.studio/)
- [GitHub Repository](https://github.com/nuxt/content)
- [Community Discord](https://discord.gg/sBXDm6e8SP)
- [Examples Repository](https://github.com/nuxt/content/tree/main/examples)

This comprehensive guide covers all aspects of Nuxt Content v3, from basic setup to advanced features. Use it as a reference for implementing content management in your Nuxt applications.






