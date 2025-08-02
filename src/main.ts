import { getApi } from "./getApi";
import { getAccessToken } from "./getAccessToken";

(async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const secret = import.meta.env.VITE_CLIENT_SECRET;

  const token = await getAccessToken(clientId, secret);
  if (token) {
    const result = await getApi(
      //NewReleaseを取得してみる
      "https://api.spotify.com/v1/browse/new-releases?country=JP&limit=10",
      token
    );
    console.log(result);
  }
})();
