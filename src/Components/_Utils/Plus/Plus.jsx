import React from "react";
import Check from "../../../img/check-arrow.jpg";
import classNames from "classnames";
import styles from "./Plus.module.css";

const Plus = ({ deg45, check }) => {
  return (
    <div>
      {check ? (
        <img className={styles.img} src={Check} alt="check" />
      ) : (
        <div className={styles.closeWrap}>
          <span
            className={classNames(styles.close, { [styles.deg45]: deg45 })}
          />
        </div>
      )}
    </div>
  );
};

export default Plus;
