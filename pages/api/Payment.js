function sha512(str) {
  const SALT = "dcearf32cawe332";

  return crypto.subtle
    .digest("SHA-512", new TextEncoder("utf-8").encode(str + SALT))
    .then((buf) => {
      return Array.prototype.map
        .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
        .join("");
    });
}

export default async function getCardDetai(firstSixDigits) {
  const MERCHANT_KEY = "rniQuX";
  const COMMAND = "check_isDomestic";
  const HASH = await sha512(MERCHANT_KEY, COMMAND, firstSixDigits);

  const header = new Headers();
  header.append("accept", "application/json");
  header.append("Access-Control-Allow-Origin", "*");
  header.append("Origin", "https://api-playground.payu.in");
  header.append("Content-Type", "application/x-www-form-urlencoded");
  header.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  header.append(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  //   const cardDetails = await fetch(
  //     "https://test.payu.in/merchant/postservice?form=2",
  //     {
  //       method: "POST",
  //       headers: header,
  //       body: {
  //         keys: MERCHANT_KEY,
  //         command: COMMAND,
  //         var1: firstSixDigits,
  //         hash: HASH,
  //       },
  //     }
  //   ).catch((err) => console.log(err));

  //   console.log(cardDetails);
}
