import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Default caching (no R2 bindings configured). See:
  // https://opennext.js.org/cloudflare/caching
  // To enable edge caching of ISR/SSR responses, add R2 + the following:
  // incrementalCache: r2IncrementalCache,
});
