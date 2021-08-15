import styles from "./Reason.module.scss";

const Reason = () => {
  return (
    <div className={`${styles["donation-reason"]} shadow rounded`}>
      <p>Add some reason for donations like</p>
      <p>Make a difference right now</p>
      <p>Transform a life for as little as 1000 rupees</p>
    </div>
  );
};

export default Reason;
