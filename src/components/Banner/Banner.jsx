import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={classes.Banner}>
      <div className={classes.hight_cont}>
        <div className={classes.hight_title}>
          <img src="https://optim.tildacdn.com/tild3635-6665-4730-b038-333664323565/-/resize/218x/-/format/webp/1-min_1.png" alt="00" className={classes.noneimg}/>
          <h4>Беспроцентная рассрочка</h4>
          <p>от 6 249 руб. / месяц</p>
        </div>
        <div className={classes.hight_left}>
          <ul>
            <li>Это не кредитная карта</li>
            <li>Оформление онлайн</li>
          </ul>
          <img
            src="https://optim.tildacdn.com/tild6166-3763-4436-b336-653766376136/-/resize/200x/-/format/webp/2-min_2.png"
            alt="o%"
            width={126}
            height={139}
            className={classes.O}
          />
        </div>
      </div>

      <div className={classes.middle_cont}>
        <span>
          <p>На 4/6/10/12 месяцев от банка-партнера</p>
          <img
            src="https://optim.tildacdn.com/tild3236-3963-4463-a430-366531623364/-/resize/384x/-/format/webp/1d2d8a12-049a-478a-9.png"
            alt="logo"
            width={260}
            height={68}
          />
        </span>
        <button className={classes.middle_btn}>
          Оставть заявку{" "}
          <img
            src="https://static.tildacdn.com/tild3336-3464-4963-b133-346462326665/photo.svg"
            alt=""
            width={44}
            height={46}
          />
        </button>
      </div>

      <div className={classes.low_cont}>
        <p>Первый платеж только через месяц!</p>
        <img
          src="https://optim.tildacdn.com/tild3635-6665-4730-b038-333664323565/-/resize/218x/-/format/webp/1-min_1.png"
          alt=""
          width={138}
          height={151}
          className={classes.o2}
        />
        <p className={classes.t}>
          Подробнее ознакомиться с правилами оформления рассрочки можно{" "}
          <a href="#">ЗДЕСЬ</a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
