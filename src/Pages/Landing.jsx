import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import styles from "../styles/app.module.scss";
import { IllustrationOne } from "../Assets/Index";

const Landing = () => {
    const [isPending, setIsPending] = useState(true);
    let navigate = useNavigate();
    const routeChange = () => {
      navigate("/Onboard");
    };
    useEffect(() => {
      setTimeout(() => {
        setIsPending(false);
      }, 5000);
    }, []);
    return ( 
        <div>
            {isPending && (
                <div className={styles["Loader"]}>
                    <Loader />
                </div>
             )}
             <div className={styles["Landing-Container"]}>
                <div className={styles["Image-Container"]}>
                  <img src={IllustrationOne} alt="" className={styles["Image"]}/>
                </div>
                <div className={styles["Main-Container"]}>
                  <div className={styles["Primary-Text"]}>Find your Comfort Food here</div>
                  <div className={styles["Secondry-Text"]}>Here You Can find a chef or dish for every taste and color. Enjoy!</div>
                  <div className={styles["Button-Container"]}>
                    <button className={styles["Next"]} onClick={routeChange}>Next</button>
                  </div>
                </div>
             </div>
        </div>
     );
}
 
export default Landing;