import fs from "node:fs";
import path from "node:path";

const CA_PATH = "/tmp/aiven-ca.pem";

export function ensureAivenCA() {
  if (fs.existsSync(CA_PATH)) {
    return CA_PATH;
  }

  const ca = process.env.AIVEN_CA_PEM;

  if (!ca) {
    throw new Error("AIVEN_CA_PEM env var not set");
  }

  fs.writeFileSync(CA_PATH, ca, { encoding: "utf-8" });

  return CA_PATH;
}