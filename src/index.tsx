import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { renderToString } from "https://deno.land/x/jsx@v0.1.5/mod.ts";
import { HelloWorld } from "./HelloWorld.tsx";

function App(): JSX.Element {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>

      <body>
        <HelloWorld />
      </body>
    </html>
  );
}

async function handler(req: Request): Promise<Response> {
  const html = await renderToString(<App />);

  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler, { port: 8080 });
