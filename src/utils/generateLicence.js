import * as jose from "jose";

/**
 * Generating licence
 * @param {int} keyId
 * @param {string} product_name
 * @param {int} product_id
 * @returns {object}
 */
const generateLicence = async (
  keyId,
  product_name,
  product_id,
  expirationTime
) => {
  if (!keyId || !product_name || !product_id) {
    throw new Error(
      "keyId, product_name, and product_id parameters are required"
    );
  }

  const { publicKey, privateKey } = await jose.generateKeyPair("RS256");
  const publicJwk = await jose.exportJWK(publicKey);
  let jwt = "";
  if (expirationTime) {
    jwt = await new jose.SignJWT({
      product_id: product_id,
    })
      .setProtectedHeader({ alg: "RS256", kid: keyId })
      .setIssuedAt()
      .setIssuer("SySafarila")
      .setSubject(product_name)
      .setExpirationTime(expirationTime)
      .sign(privateKey);
  } else {
    jwt = await new jose.SignJWT({
      product_id: product_id,
    })
      .setProtectedHeader({ alg: "RS256", kid: keyId })
      .setIssuedAt()
      .setIssuer("SySafarila")
      .setSubject(product_name)
      .sign(privateKey);
  }

  publicJwk["kid"] = keyId;
  publicJwk["use"] = "sig";
  publicJwk["alg"] = "RS256";

  return { jwk: publicJwk, jwt };
};

export default generateLicence;
