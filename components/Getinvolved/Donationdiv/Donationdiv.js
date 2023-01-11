import React from "react";

import styles from "../GetInvolved.module.scss"

const DonationDiv = () => {
  return (
    <div className={`container ${styles["banner"]}`}>
    <div className={`row`}>
      <div className={`col-md-8`}>
          <h2>Donate</h2>
          <p>Mandal is serving underprivileged sections like tribal and neighborhood kids as well as providing subsidized facilities for young urban students. All its charitable projects are sustained on the basis of funds donated by generous people. The organisation has a prudent culture in spending the funds on the social and charitable projects.
          <br></br>
          The voluntary nature of its office bearers not only make it financially independent but office bearers, member volunteers and alumni of VSM regularly donate for its causes, improving participation and transparency. You are welcome to join the group of VSM donors and support such causes by:
          <li>Donating in cash (for Nalanda, Zep, Khodade Agricultural Improvement, Diwali Sneh Bhoj, Runamochan)</li>
          <li>Donating in Kind (books, furniture, IT Hardware for library, study centre, Nalanda, Zep etc)</li></p>
      </div>
      <div className={`col-md-4`}>

      </div>
    </div>
    </div>

    
  );
};


export default DonationDiv;
