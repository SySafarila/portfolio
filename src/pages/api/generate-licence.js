import axios from "axios";
import generateLicence from "@/utils/generateLicence";

const getJwksFromGithub = async () => {
  const bearerToken = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
  const getJwks = await axios.get(
    "https://api.github.com/repos/SySafarila/jwks/contents/jwks.json",
    {
      headers: {
        Accept: "application/json",
        Authorization: bearerToken,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return getJwks;
};

export default async function handler(req, res) {
  const { password, keyId, product_id, product_name } = req.body;

  if (!password || password !== process.env.JWK_STORE_PASSWORD) {
    res.status(401).json({
      message: "Unauthenticated",
    });
    return;
  }

  try {
    const bearerToken = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
    const { jwk, jwt } = await generateLicence(keyId, product_name, product_id);

    const { sha, content } = (await getJwksFromGithub()).data;
    const contentDecode = atob(content);
    const contentParsed = JSON.parse(contentDecode);
    const keys = contentParsed.keys;

    keys.push(jwk);

    const newContent = {
      keys: keys,
    };
    const newContentBase64 = btoa(JSON.stringify(newContent));

    await axios.put(
      "https://api.github.com/repos/SySafarila/jwks/contents/jwks.json",
      {
        message: "A commit from sysafarila.my.id by 🤖",
        content: newContentBase64,
        sha: sha,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: bearerToken,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    res.status(200).json(jwt);
    return;
  } catch (error) {
    res.status(400).json({ message: error.message ?? "error" });
  }
}
