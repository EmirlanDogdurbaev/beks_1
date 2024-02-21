import classes from "./Cards.module.scss";

const Cards = () => {
  return (
    <>
      <article className={classes.Card}>
        <h5> 3600</h5>
        <p>Учеников обучила профессии</p>
      </article>
      <article className={classes.Card}>
        <h5> 80/20</h5>
        <p>80% практики и 20% теории</p>
      </article>
      <article className={classes.Card}>
        <h5>90%</h5>
        <p>Учеников проходят курс до конца</p>
      </article>{" "}
      <article className={classes.Card}>
        <h5> 15-20 минут</h5>
        <p>Длительность уроков</p>
      </article>
    </>
  );
};

export default Cards;
