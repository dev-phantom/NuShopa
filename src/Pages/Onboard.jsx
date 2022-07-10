import { useNavigate } from "react-router-dom";
import styles from "../styles/app.module.scss";
import { IllustrationTwo } from "../Assets/Index";
const Onboard = () => {
    let navigate = useNavigate();
    const routeChange = () => {
      navigate("/Login");
    };
    return ( 
        <div className={styles["Landing-Container"]}>
        <div className={styles["Image-Container"]}>
          <img src={IllustrationTwo} alt="" className={styles["Image"]}/>
        </div>
        <div className={styles["Main-Container"]}>
          <div className={styles["Primary-Text"]}>Food Ninja is Where Your Comfort Food Lives</div>
          <div className={styles["Secondry-Text"]}>Enjoy a fast and smooth food delivery at your doorstep</div>
          <div className={styles["Button-Container"]}>
            <button className={styles["Next"]} onClick={routeChange}>Next</button>
          </div>
        </div>
     </div>
     );
}
 
export default Onboard;