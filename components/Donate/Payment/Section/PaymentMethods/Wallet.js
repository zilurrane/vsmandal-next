// PayTM	PAYTM
// Freecharge	FREC
// Amazon Pay	AMZPAY
// Airtel Money	AMON
// Oxigen	OXYCASH
// Ola Money	OLAM
// Jio Money	JIOM
// ItzCash	ITZC
// HDFC PayZapp	PAYZ
// Yes Bank	YESW
export default function Address({ handleChange, value, err }) {
  const walletList = [
    { name: "PayTM", code: "PAYTM" },
    { name: "Freecharge", code: "FREC" },
    { name: "Amazon Pay", code: "AMZPAY" },
    { name: "Airtel Money", code: "AMON" },
    { name: "Oxigen", code: "OXYCASH" },
    { name: "Ola Money", code: "OLAM" },
    { name: "Jio Money", code: "JIOM" },
    { name: "ItzCash", code: "ITZC" },
    { name: "HDFC PayZapp", code: "PAYZ" },
    { name: "Yes Bank", code: "YESW" },
  ];
  return (
    <div className={`form-row`}>
      <div className={`form-group col-md-6`}>
        <label htmlFor="wallet-code">
          Wallet
          <span className={`text-danger`}>*</span>
        </label>
        <select
          id="wallet-code"
          name="walletCode"
          onChange={handleChange}
          className={`form-control form-control-sm`}
        >
          {walletList.map((wallet) => (
            <option key={wallet.code} value={wallet.code}>
              {wallet.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
