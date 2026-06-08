import { Log } from "./logger";

async function test() {
  await Log(
    "info",
    "service",
    "Logging middleware initialized"
  );

  await Log(
    "debug",
    "db",
    "Database connection attempt"
  );

  await Log(
    "warn",
    "repository",
    "Cache miss detected"
  );
}

test();