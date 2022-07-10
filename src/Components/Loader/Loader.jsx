import styles from "../../styles/app.module.scss";
import {VectorImg,Logo} from "../../Assets/Index";

const Loader = () => {
    return ( 
        <div className={styles["Loader-Container"]}>
            <div className={styles["Vector-Container"]}>
                <img src={VectorImg} alt="" className={styles["VectorImg"]}/>
            </div>
            <div className={styles["Main"]}>
                <div className={styles["Logo-Container"]}>
                    <img src={Logo} alt="" className={styles["Logo"]}/>
                </div>
                <div className={styles["Brand-Name"]}>NuShopa</div>
                <div className={styles["Brand-Motto"]}>Deliver favourite food</div>
            </div>
        </div>
     );
}
 
export default Loader;