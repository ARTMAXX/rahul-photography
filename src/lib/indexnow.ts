/**
 * IndexNow submission helper.
 *
 * Submits a list of URLs to the IndexNow API.
 * https://www.indexnow.org/documentation
 */
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

interface SubmitResult {
  ok: boolean;
  status: number;
  body?: string;
}

export async function submitToIndexNow(
  host: string,
  key: string,
  urls: string[],
): Promise<SubmitResult> {
  if (!key) {
    return { ok: false, status: 0, body: "INDEXNOW_KEY not configured" };
  }
  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: urls,
      }),
    });
    const body = await res.text();
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      body: err instanceof Error ? err.message : String(err),
    };
  }
}
