import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * In Next.js dev mode, modules can be re-evaluated on every hot reload /
 * every API request. Without caching, that would open a fresh MongoDB
 * connection each time. We cache the connection (and the in-flight promise)
 * on the global object so it's reused across requests.
 */
let cached = global._mongooseConn;

if (!cached) {
  cached = global._mongooseConn = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (see .env.example)."
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}