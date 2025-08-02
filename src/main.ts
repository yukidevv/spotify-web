import { getApi } from "./getApi";
import { getAccessToken } from "./getAccessToken";
import { formatDate } from "./utilDate";

(async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const secret = import.meta.env.VITE_CLIENT_SECRET;
  const ul = document.getElementById("albums");

  const token = await getAccessToken(clientId, secret);
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.textContent = `~Spotify New Release~(${formatDate()})`;
  }

  if (token) {
    const result: any = await getApi(
      //NewReleaseを取得してみる
      "https://api.spotify.com/v1/browse/new-releases?country=JP&limit=50",
      token
    );
    if (result) {
      console.log(result);
      result.albums.items.forEach((element: any) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <strong>${element.name}</strong>(${element.artists[0].name}):<a href="${element.external_urls.spotify}" target="_blank" >リンク</a>
        `;
        ul?.appendChild(li);
      });
    }
  }
})();
