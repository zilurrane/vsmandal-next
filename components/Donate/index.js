import Payment from "./Payment"
import Reason from "./Reason"

const Donate = () => {
    return (
        <div className={`d-flex flex-lg-row flex-column justify-content-around m-5`}>
            <Reason />
            <Payment />
        </div>
    );
}

export default Donate;
