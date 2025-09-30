import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use('*', cors());

app.get('/api/hello', (c) => {
  return c.json({ message: ' hi for Hono API!' });
});

const port = Number(process.env.PORT) || 3001;

serve({
  fetch: app.fetch,
  port,
});

console.log(`Server running on port ${port}`);