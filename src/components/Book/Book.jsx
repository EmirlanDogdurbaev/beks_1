import classes from "./Book.module.scss";

const Book = () => {
  return (
    <div className={classes.Book}>
      <h3>
        ЗАПИШИТЕСЬ НА КУРС ДО КОНЦА ДНЯ <br /> И ПОЛУЧИТЕ
        <span>БОНУСЫ НА 39 960 руб.</span>
      </h3>
      <section className={classes.cont}>
        <div className={classes.inner_cont_1}>
          <article className={classes.first}>
            <h6>Бонусы сгорят через:</h6>
            <aside>
              <div>
                <span>12 </span>
                <p>часов</p>
              </div>
              <h5>:</h5>
              <div>
                <span>4 </span>
                <p>минут</p>
              </div>
              <h5>:</h5>

              <div>
                <span>12</span>
                <p>секунд</p>
              </div>
            </aside>
          </article>
          <article className={classes.second}>
            <img
              src="https://optim.tildacdn.com/tild6438-6363-4163-b562-396438353638/-/resize/266x/-/format/webp/7_2.png"
              alt=""
              width={150}
              height={275}
              className={classes.img1}
            />
            <img
              src="https://optim.tildacdn.com/tild3939-3263-4938-b236-363761643838/-/resize/262x/-/format/webp/______.png"
              alt=""
              width={150}
              height={275}
              className={classes.img2}
            />
            <img
              src="https://optim.tildacdn.com/tild3733-3465-4133-b435-306166323836/-/resize/274x/-/format/webp/_______.png"
              alt=""
              width={150}
              height={275}
              className={classes.img3}
            />
            <img
              src="https://optim.tildacdn.com/tild3931-3031-4164-a632-303065366132/-/resize/262x/-/format/webp/-___.png"
              alt=""
              width={150}
              height={275}
              className={classes.img4}
            />
          </article>
        </div>
      </section>

      <section className={classes.cont2}>
        <div className={classes.list}>
          <p>
            <strong>Модуль</strong>
            по работе на Озон
          </p>
          <span className={classes.violet}>9.990₽</span>
        </div>
        <div className={classes.list}>
          <p>
            <strong>Эксклюзивный мастер-класс</strong>
            "Как создать продающее описание карточки товара за 1 минуту с
            помощью нейросети"
          </p>
          <span className={classes.violet}>9.990₽</span>
        </div>
        <div className={classes.list}>
          <p>
            <strong>Уроки по инфографике в специализированных сервисах</strong>
            “Продающие карточки товаров за несколько минут с помощью готовых
            шаблонов”
          </p>
          <span className={classes.violet}>9.990₽</span>
        </div>
        <div className={classes.list}>
          <p>
            <strong>МАСТЕР-КЛАСС ОТ ОЛЬГИ БАРСУКОВОЙ</strong>
            (ВЕДУЩИЙ АНАЛИТИК СЕРВИСА MPSTATS) “КАК ОПТИМИЗИРОВАТЬ SEO, ЧТОБЫ
            КАРТОЧКА ЛУЧШЕ ПРОДВИГАЛАСЬ”
          </p>
          <span className={classes.violet}>9.990₽</span>
        </div>
        <button className={classes.btn}>
          Записаться на курс{" "}
          <img
            src="https://static.tildacdn.com/tild3336-3464-4963-b133-346462326665/photo.svg"
            alt=""

            width={44}
            height={46}
          />
        </button>
      </section>
    </div>
  );
};

export default Book;
