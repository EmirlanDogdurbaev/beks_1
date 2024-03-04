import classes from "./Book.module.scss";

const Book = () => {
  return (
    <div className={classes.Book}>
      <h3>
        ЗАПИШИТЕСЬ НА КУРС ДО КОНЦА ДНЯ <br /> И ПОЛУЧИТЕ
        <span>БОНУСЫ НА 36 000 руб. </span> <br/> 2 живых урока по OZON
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

     
    </div>
  );
};

export default Book;
