import classes from "./Tools.module.scss";

const Tools = () => {
  return (
    <div className={classes.Tools}>
      <div className={classes.left}>
        <h2>
          НА КУРСЕ ВЫ ПОЛУЧИТЕ ИНСТРУМЕНТЫ ДЛЯ УСКОРЕНИЯ РАБОТЫ В НЕСКОЛЬКО РАЗ
        </h2>
        <p className={classes.t}>
          Мы дадим вам готовые таблицы для анализа конкурентов, <br />
          расчета стоимости товара и другие.
        </p>

        <article>
          <p>
            Раньше я делала подобные расчеты на калькуляторе, записывала всё на
            листочки, которые постоянно терялись, тратила на это уйму времени.
          </p>
          <p>
            <strong>
              {" "}
              Вам же надо будет просто забивать цифры в таблицу и получать
              готовый расчет за 10 минут!
            </strong>
          </p>
          <p>
            Также у вас будут специальные боты. Например «Бот упаковка» – ему
            всего лишь надо отослать название вашего товара, а он за пару секунд
            пришлет вам ответ, как надо упаковать товар.
          </p>
          <p>
            Эти инструменты помогут вам ускорить работу в несколько раз, а также
            повысят ваш профессионализм в глазах клиентов!
          </p>
        </article>
      </div>

      <div className={classes.right}>
        <div className={classes.first}>
          <img
            src="https://optim.tildacdn.com/tild6335-6365-4132-b264-323939343335/-/resize/836x/-/format/webp/iMac_Silver.png"
            alt=""
            width={420}
          />
        </div>
        <div className={classes.second}>
          <img
            src="https://optim.tildacdn.com/tild6163-3533-4037-a665-393065323539/-/resize/774x/-/format/webp/photo.png"
            alt=""
            width={387}
          />
        </div>
        <div className={classes.third}>
          <img
            src="https://optim.tildacdn.com/tild3430-6238-4531-a632-663739323438/-/resize/636x/-/format/webp/photo.png"
            alt=""
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
