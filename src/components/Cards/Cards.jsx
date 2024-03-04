import classes from "./Cards.module.scss";

const Cards = () => {
  return (
    <>
      <article className={classes.Card}>
        <h5>200</h5>
        <p>Учеников уже зарабатывают</p>
      </article>
      <article className={classes.Card}>
        <h5> 80/20</h5>
        <p>80% практики и 20% теории</p>
      </article>
      <article className={classes.Card}>
        <h5>98%</h5>
        <p>Учеников проходят курс до конца</p>
      </article>{" "}
      <article className={classes.Card}>
        <h5> 1,5 часа</h5>
        <p>Длительность уроков</p>
      </article>
    </>
  );
};

export default Cards;
