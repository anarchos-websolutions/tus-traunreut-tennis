# Cloudflare Workers Setup

This document explains how to configure the Cloudflare Workers integration for the blackboard form.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Cloudflare Workers Configuration
CLOUDFLARE_WORKERS_URL=https://your-worker.your-subdomain.workers.dev
CLOUDFLARE_WORKERS_SECRET=your-secret-key-here
```

## Cloudflare Workers Function

Your Cloudflare Workers function should handle POST requests and expect the following form data:

- `title` (string): The message title
- `description` (string): The message description  
- `recipients` (string): JSON array of recipient types
- `image` (file, optional): Image file if provided

### Example Cloudflare Workers Function

```javascript
export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const formData = await request.formData();
      
      const title = formData.get('title');
      const description = formData.get('description');
      const recipients = JSON.parse(formData.get('recipients'));
      const image = formData.get('image');
      
      // Process the data here
      // For example, send emails, store in database, etc.
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Message processed successfully'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({
        success: false,
        error: error.message
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  },
};
```

## CORS Configuration

Make sure your Cloudflare Workers function includes proper CORS headers to allow requests from your Nuxt application domain.

## Testing

1. Set up your Cloudflare Workers function
2. Update the `CLOUDFLARE_WORKERS_URL` in your `.env` file
3. Test the form submission on the blackboard page
