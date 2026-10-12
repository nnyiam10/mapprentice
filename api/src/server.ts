import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({
    logger: true,
});

await app.register(cors, {
    origin: "http://localhost:5173",
});

app.get("/health", async () => {
  return { status: "ok" };
});

try {
  await app.listen({
    port: 3000,
    host: "127.0.0.1",
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}