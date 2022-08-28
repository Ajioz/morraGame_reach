import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const ConnectAccount = () => {
    const { connectAccount } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <div className={ useClasses() }>
                <span className={ useClasses(styles.littleText) }>We are working hard to get you into the chain. Dont panic even if this doesn't work we'd fix it.</span>
            </div>
            <div className={ useClasses() }>
                <button className={ useClasses(styles.actionButton) } onClick={ connectAccount }>
                    Connect Wallet
                </button>
            </div>
        </div>
    );
};

export default ConnectAccount;