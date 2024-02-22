import classes from "./Tarif.module.scss";

const Tarif = () => {
  return (
    <div className={classes.Tarif}>
      <div className={classes.img_cont}>
        <img
          src="https://optim.tildacdn.com/tild3433-3164-4537-a335-323165333134/-/format/webp/certificate_1.jpg"
          alt=""
        />
      </div>
      <div className={classes.right_text}>
        <h3>ПО ЗАВЕРШЕНИи КУРСА ВЫ ПОЛУЧИТЕ ИМЕННОЙ СЕРТИФИКАТ</h3>
      </div>
    </div>
  );
};

export default Tarif;
