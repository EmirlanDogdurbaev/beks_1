import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.inner_cont}>
        <section className={classes.cont_left}>
          <aside>
            <div>
              <h6>online aschool</h6>
              <h4>market clever</h4>
            </div>
            <h4>практический онлайн-курс</h4>
          </aside>
          <div className={classes.text_cont}>
            <h2>
              <span>pro</span> менеджер маркетплейсов
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eum neque sint tenetur! Dignissimos quaerat perspiciatis molestias
            nostrum in aliquam accusamus sunt debitis natus laboriosam tenetur
            neque esse, ratione corrupti?
          </p>
        </section>
      </div>
    </div>
  );
};

export default Header;
