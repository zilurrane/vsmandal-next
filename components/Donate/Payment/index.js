import Card from "./Card";
import useHandlePayment from "./Logic/useHandlePayment";
import styles from "./Payment.module.scss";

const Payment = () => {
  const { activeTab, switchTab } = useHandlePayment();

  return (
    <div classNameName={`shadow rounded`}>
      <div classNameName={`card text-center`}>
        <div classNameName={`card-header`}>
          <ul className={`nav nav-tabs card-header-tabs`}>
            <li className={`nav-item`}>
              <span
                className={`nav-link ${activeTab !== 2 ? "active" : ""}`}
                onClick={switchTab}
              >
                Give Once
              </span>
            </li>
            <li className={`nav-item`}>
              <span
                className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                onClick={switchTab}
              >
                Monthly
              </span>
            </li>
          </ul>
        </div>
        {activeTab !== 2 ? (
          <Card title={`Choose a amount`} link={`Go to Next Step`}>
            form or tags to donate amount
          </Card>
        ) : (
          <Card title={`Choose a monthly amount`} link={`Go to Next Step`}>
            form or tags to donate amount
          </Card>
        )}
      </div>
    </div>
  );
};

export default Payment;
