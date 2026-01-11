import fs from "fs";
import path from "path";

export function ensureAivenCA() {
  const ca = process.env.AIVEN_CA_CERT;

  if (!ca) {
    throw new Error("AIVEN_CA_CERT não definida");
  }

  const certPath = path.join(process.cwd(), "aiven-ca.pem");

  if (!fs.existsSync(certPath)) {
    fs.writeFileSync(certPath, ca);
  }

  return certPath;
}