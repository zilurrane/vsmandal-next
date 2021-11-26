import Cards from "./PaymentMethods/Cards";
import Netbanking from "./PaymentMethods/Netbanking";
import Wallet from "./PaymentMethods/Wallet";

const PaymentTabs = ({ tabs, handleChange, handleBlur, value, err }) => {
  const [activeTab, switchTab] = tabs;
  const tabLinks = [
    { name: "Net Banking", val: "NB" },
    { name: "Debit/Credit Card", val: "CARD" },
    { name: "UPI", val: "UPI" },
    { name: "Wallet", val: "WALLET" },
  ];

  return (
    <>
      <ul className={`list-group list-group-horizontal`}>
        {tabLinks.map((tab) => (
          <li
            key={tab.val}
            className={`list-group-item ${
              activeTab === tab.val && "bg-primary text-light"
            }`}
            onClick={() => switchTab(tab.val)}
            style={{ cursor: "pointer" }}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      <div className="mt-3 mx-2">
        {activeTab === tabLinks[0].val && (
          <Netbanking handleChange={handleChange} value={value} err={err} />
        )}
        {activeTab === tabLinks[1].val && (
          <Cards
            handleChange={handleChange}
            value={value}
            err={err}
            handleBlur={handleBlur}
          />
        )}
        {activeTab === tabLinks[2].val && (
          <Wallet handleChange={handleChange} value={value} err={err} />
        )}
        {activeTab === tabLinks[3].val && (
          <Wallet handleChange={handleChange} value={value} err={err} />
        )}
      </div>
    </>
  );
};

export default PaymentTabs;
