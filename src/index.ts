const server = Deno.listen({ port: 8080 });

console.log("Started");

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const body = "Hello";

    requestEvent.respondWith(
      new Response(body, {
        status: 200,
      })
    );
  }
}
