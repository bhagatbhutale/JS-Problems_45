// Q. 6 : Generate Random AlphaNumeric Captcha Create ?

function generateRandom() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let strLength = 7;

  let result = " ";

  for (i = 0; i < strLength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);

    result += chars.substring(randNum, randNum + 1);
  }

  document.getElementById("randomChar").innerHTML = result;
}
