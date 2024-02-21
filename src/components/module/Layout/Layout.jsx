import Cards from "../../Cards/Cards";
import Header from "../../Header/Header";
import Stage from "../../Stage/Stage";
import classes from "./Layout.module.scss";
const Layout = () => {
  return (
    <main className={classes.main}>
      <section className={classes.head}>
        <Header />
      </section>
      <section className={classes.card_cont}>
        <Cards />
      </section>
      <section className={classes.about}>
        <div className={classes.title}>
          <h3>
            НАШ КУРС – <span>ЭТО ПРАКТИКУМ</span>
          </h3>
          <p>ВЫ ПОЛУЧАЕТЕ РЕЗУЛЬТАТ СРАЗУ ВО ВРЕМЯ ОБУЧЕНИЯ</p>
        </div>
        <div className={classes.list_cont}>
          <h5>ЗА 8 НЕДЕЛЬ ВЫ:</h5>
          <div>
            <img
              src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
              alt="icon"
              width={37}
              height={36}
            />
            <p>освоите востребованную профессию</p>
          </div>
          <div>
            <img
              src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
              alt="icon"
              width={37}
              height={36}
            />
            <p>
              найдете первых клиентов и начнете зарабатывать уже во время
              обучения
            </p>
          </div>
          <div>
            <img
              src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
              alt="icon"
              width={37}
              height={36}
            />
            <p>
              подготовитесь к стажировке с реальным поставщиком и оформите
              продающее резюме
            </p>
          </div>
        </div>
      </section>

      <section>
            <Stage/>
      </section>
    </main>
  );
};

export default Layout;
