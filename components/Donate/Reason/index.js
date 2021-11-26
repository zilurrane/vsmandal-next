import styles from "./Reason.module.scss";

const Reason = ({ currentPage, switchPageTo }) => {
  return (
    <div className={`${styles["donation-reason"]} shadow rounded`}>
      {currentPage === 0 && (
        <>
          <p>Add some reason for donations like</p>
          <p>Make a difference right now</p>
          <p>Transform a life for as little as 1000 rupees</p>
        </>
      )}

      {currentPage === 1 && (
        <>
          <button
            className={`btn btn-primary mx-5`}
            onClick={() => switchPageTo(false)}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default Reason;
