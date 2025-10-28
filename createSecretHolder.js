// Can you keep a secret?

function createSecretHolder(secret) {
  const secretObj = {};
  secretObj.getSecret = function () {
    return secret;
  };
  secretObj.setSecret = function (newSecret) {
    secret = newSecret;
  };
  return secretObj;
}
