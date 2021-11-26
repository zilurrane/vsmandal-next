import useHandleMultiPage from "./Logic/useHandleMultiPage";
import Payment from "./Payment";
import Reason from "./Reason";

const Donate = () => {
  const { currentPage, switchPageTo } = useHandleMultiPage();

  return (
    <div
      className={`d-flex flex-lg-row flex-column justify-content-center m-5`}
    >
      <Reason currentPage={currentPage} switchPageTo={switchPageTo} />
      <Payment currentPage={currentPage} switchPageTo={switchPageTo} />
    </div>
  );
};

export default Donate;
