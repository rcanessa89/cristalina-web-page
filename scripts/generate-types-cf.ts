import { createClient } from "contentful";
import { execSync } from "child_process";

const envFile = Bun.file(".env");
const envText = await envFile.text();
const env: Record<string, string> = {};
for (const line of envText.split("\n")) {
  const [key, ...rest] = line.split("=");
  if (key?.trim() && rest.length) env[key.trim()] = rest.join("=").trim();
}

const client = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});

const contentTypes = await client.getContentTypes();
const exportPath = "contentful-export.json";

await Bun.write(exportPath, JSON.stringify({ contentTypes: contentTypes.items }, null, 2));
console.log(`Exported ${contentTypes.items.length} content types`);

execSync(`bunx cf-content-types-generator ${exportPath} -o src/types/contentful -X -d`, {
  stdio: "inherit",
});

await Bun.file(exportPath).exists() && execSync(`rm ${exportPath}`);
console.log("Types generated in src/types/contentful/");
