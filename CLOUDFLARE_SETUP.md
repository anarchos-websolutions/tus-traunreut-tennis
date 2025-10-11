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
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    try {
      const formData = await request.formData();
      
      const title = formData.get('title');
      const description = formData.get('description');
      const image = formData.get('image');
      
      // Process the data here
      // For example, send emails, store in database, etc.
      
      console.log('Received data:', { title, description, hasImage: !!image });
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Message processed successfully'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept',
        },
      });
    } catch (error) {
      console.error('Error processing request:', error);
      
      return new Response(JSON.stringify({
        success: false,
        error: error.message
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
```

## CORS Configuration

Make sure your Cloudflare Workers function includes proper CORS headers to allow requests from your Nuxt application domain.

## Testing

1. Set up your Cloudflare Workers function with the CORS configuration above
2. Update the `CLOUDFLARE_WORKERS_URL` in your `.env` file
3. Test the form submission on the blackboard page

### Testing CORS Configuration

You can test if your Workers function has proper CORS setup by running this command in your terminal:

```bash
curl -X OPTIONS \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -v \
  https://tus-traunreut-tennis.markus-obermaier420.workers.dev/
```

You should see CORS headers in the response. If you get a CORS error, make sure your Workers function includes the OPTIONS handler shown above.

### Debugging CORS Issues

If you're still getting CORS errors:

1. **Check the Network tab** in your browser's developer tools
2. **Look for the OPTIONS preflight request** - it should return 200 status
3. **Verify the response headers** include `Access-Control-Allow-Origin: *`
4. **Check the console** for any error messages from your Workers function
