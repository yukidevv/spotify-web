/**
 * fetchでAPIをGETで叩きます
 * @param url エンドポイント
 * @param token トークン
 * @returns 取得結果
 */

export async function getApi<T>(url: string, token: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const message = `API request failed: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
