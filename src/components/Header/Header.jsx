import classes from "./Header.module.scss";
import img from "../../assets/b.png"
const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.inner_cont}>
        <section className={classes.cont_left}>
          <aside>
            <div>
              <h6>авторский онлайн курс </h6>
              <h4>Юлии Шандер</h4>
            </div>
            <h4>практический онлайн-курс</h4>
          </aside>
          <div className={classes.text_cont}>
            <h2>
              <span>profi</span> менеджер маркетплейсов
            </h2>
            <h4>
              Начните получать
              <span>
                стабильно 70-150 тысяч руб./мес., освоив с нуля востребованную
                удаленную профессию
              </span>
              менеджер маркетплейсов
            </h4>
            <h5>
              Лучших студентов берем к себе в команду или трудоустраиваем у
              других поставщиков!
            </h5>
          </div>
        </section>
        <section>
        <img src={img} alt="" width={350}/>
        </section>
      </div>
    </div>
  );
};

export default Header;
