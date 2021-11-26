import useHandlePayment from "./Logic/useHandlePayment";
import Address from "./Section/Address";
import PaymentDetails from "./Section/PaymentDetails";
import PaymentTabs from "./Section/PaymentTabs";
import PersonalDetails from "./Section/PersonalDetails";

const Payment = ({ currentPage, switchPageTo }) => {
  const {
    activeTab,
    switchTab,
    handleChange,
    handleBlur,
    submitForm,
    data,
    error,
    isDataSubmitted,
    locationObj,
  } = useHandlePayment();

  return (
    <div className={`shadow rounded`}>
      <div className={`card text-center`}>
        <div className={`card-header`}>Donate</div>
        <div className={`card-body`}>
          <h5 className={`card-title`}>Special title treatment</h5>

          <p className={`card-text`}>
            With supporting text below as a natural lead-in to additional
            content.
          </p>

          <form
            className={`w-100 text-left ${
              isDataSubmitted ? "was-validated" : ""
            }`}
          >
            {currentPage === 0 && (
              <>
                <PersonalDetails
                  handleChange={handleChange}
                  value={data}
                  err={error}
                />
                <Address
                  handleChange={handleChange}
                  value={data}
                  err={error}
                  locationObj={locationObj}
                />
                <PaymentDetails
                  tabs={[activeTab, switchTab]}
                  handleChange={handleChange}
                  value={data}
                  err={error}
                />
              </>
            )}
            {currentPage === 1 && (
              <PaymentTabs
                tabs={[activeTab, switchTab]}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={data}
                err={error}
              />
            )}

            <div className={`text-center mt-3`}>
              <button
                type="button"
                className={`btn btn-primary`}
                onClick={(e) => {
                  const isSubmiited = submitForm(e);
                  console.log(isSubmiited);
                  if (isSubmiited) switchPageTo(true);
                }}
              >
                Donate
              </button>
            </div>
          </form>
        </div>

        <div className={`card-footer text-muted`}>Footer</div>
      </div>
    </div>
  );
};

export default Payment;
