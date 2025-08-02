/**
 *
 * @param clientId spotifyのクライアントID
 * @param clientSecret spotifyのシークレット
 * @returns トークン生成結果
 */

export async function getAccessToken(
  clientId: string,
  clientSecret: string
): Promise<string> {
  const base64 = btoa(`${clientId}:${clientSecret}`);

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return data.access_token;
}
