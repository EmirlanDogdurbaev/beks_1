import classes from "./TarifCards.module.scss";
import {Link} from "react-router-dom";

const TarifCards = () => {
    // const [showFormModal, setShowFormModal] = useState(false);

    // Функция для отображения/скрытия формы


    return (
        <div className={classes.TarifCards}>
            <h3 id="Tarif">ВЫБЕРИТЕ ТАРИФ ДЛЯ УЧАСТИЯ</h3>
            <section className={classes.inner_cards}>
                {/* <article className={classes.card}>
          <h5>всё сам</h5>
          <p>стать менеджером маркетплейсов самостоятельно</p>
          <span>
            <small className={classes.price}> Цена сегодня</small>
            <h4>
              6 249 <p>руб./месяц</p>
            </h4>
            <small>в рассрочку на 12 мес.</small>
          </span>
          <div className={classes.price2}>
            <strong>74 990 руб.</strong>
            <strike>94 990 руб.</strike>
          </div>
          <hr />

          
          <ul className={classes.cards_list}>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> 8 недель обучения</span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span>
                <strong>8 модулей</strong> для работы с Wildberries
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> Доступ к урокам на 6 месяцев </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span>
                <strong>Сертификат</strong>о происхождении курса
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> Авторские таблицы, чек-листы, шаблоны документов </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}> Поддержка кураторов </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                {" "}
                Общий чат с участниками курса{" "}
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> Домашние задания без проверки </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                {" "}
                Ответы на вопросы в чатах и на обучающей платформе{" "}
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                6 групповых мастер-майндов с наставниками
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                {" "}
                2 онлайн-встречи с нашими экспертами{" "}
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span>Модуль «Как искать» клиентов» </span>
            </li>

            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                Бесплатный доступ на 30 дней к сервису аналитики MPSTATS
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                Практика с реальным поставщиком 2 недели
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                Публикация резюме на канале вакансий школы
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                Даём до 5 поставщиков для возможности большого трудоустройства
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild6562-3130-4532-b662-343232313630/photo.svg"
                alt="minus"
                width={22}
                height={23}
              />
              <span className={classes.minus}>
                Доступ на 3 месяца сообщество MarketClever Family
              </span>
            </li>
          </ul>
          <div className={classes.bonus}>
            <strong>+БОНУСЫ</strong>
          </div>
          <div className={classes.btn_cont}>
            <h6>Осталось мест: ထ</h6>
            <Link className={classes.book_btn} to={"/form"}>
              Забронировать место
            </Link>
            <Link className={classes.btn_make} to={"/form"}>
              Оформить рассрочку
            </Link>
          </div>

          {showFormModal && <Form onClose={toggleFormModal} />}
        </article> */}
                {/* second card */}
                <article className={classes.card}>
                    <h5>профессионал</h5>
                    <p>стать менеджером маркетплейсов в сопровождении</p>
                    <span>
            <small className={classes.price}> Цена сегодня</small>
            <h4> от
              6900<p>руб./месяц</p>
            </h4>
            <small>в рассрочку на 10 мес.</small>
          </span>
                    <div className={classes.price2}>
                        <strong>69000</strong>
                        <strike>109 990 руб.</strike>
                    </div>
                    <hr/>

                    <ul className={classes.cards_list}>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={21}
                                height={20}
                            />
                            <span> 8 недель обучения</span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={21}
                                height={20}
                            />
                            <span>
                <strong>8 модулей</strong> для работы с Wildberries
              </span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={21}
                                height={20}
                            />
                            <span> Доступ к урокам на 6 месяцев </span>
                        </li>

                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={21}
                                height={20}
                            />
                            <span> Авторские таблицы, чек-листы, шаблоны документов </span>
                        </li>

                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span>Общий чат с участниками курса </span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span> Поддержка кураторов </span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={21}
                                height={20}
                            />
                            <span> Домашние задания с проверкой </span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span> Ответы на вопросы в чатах  </span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span>1 час созвона с автором курса</span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span>3 онлайн-встречи с приглашенными экспертами </span>
                        </li>
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={21}
                                height={20}
                            />
                            <span>Модуль «Как искать» клиентов» </span>
                        </li>

                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span>
                Бесплатный доступ на 30 дней к сервису аналитики MPSTATS
              </span>
                        </li>
                        {/*<li>*/}
                        {/*  <img*/}
                        {/*    src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"*/}
                        {/*    alt="icon"*/}
                        {/*    width={22}*/}
                        {/*    height={23}*/}
                        {/*  />*/}
                        {/*  <span>Практика с реальным поставщиком 2 недели</span>*/}
                        {/*</li>*/}
                        <li>
                            <img
                                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                                alt="icon"
                                width={22}
                                height={23}
                            />
                            <span>доступ к тестовому кабинету для практики</span>
                        </li>

                    </ul>
                    <div className={classes.bonus}>
                        <strong>+БОНУСЫ</strong>
                    </div>
                    <div className={classes.btn_cont}>
                        <h6>Осталось мест: 2</h6>
                        <Link className={classes.book_btn} to={"/form"} style={{textAlign: "center"}}>
                            Забронировать место
                        </Link>
                        {/*<Link className={classes.btn_make} to={"/form"}>*/}
                        {/*  Оформить рассрочку*/}
                        {/*</Link>*/}
                    </div>
                </article>

                {/* <article className={classes.card}>
          <h5>всё сам</h5>
          <p>стать менеджером маркетплейсов самостоятельно</p>
          <span>
            <small className={classes.price}> Цена сегодня</small>
            <h4>
              6 249 <p>руб./месяц</p>
            </h4>
            <small>в рассрочку на 12 мес.</small>
          </span>
          <div className={classes.price2}>
            <strong>74 990 руб.</strong>
            <strike>94 990 руб.</strike>
          </div>
          <hr />

          <ul className={classes.cards_list}>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> 8 недель обучения</span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span>
                <strong>8 модулей</strong> для работы с Wildberries
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> Доступ к урокам на 6 месяцев </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span>
                <strong>Сертификат</strong>о происхождении курса
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> Авторские таблицы, чек-листы, шаблоны документов </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span> Поддержка кураторов </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span> Общий чат с участниками курса </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span> Домашние задания без проверки </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span>Ответы на вопросы в чатах и на обучающей платформе </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icons"
                width={22}
                height={23}
              />
              <span>6 групповых мастер-майндов с наставниками</span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icons"
                width={22}
                height={23}
              />
              <span>2 онлайн-встречи с нашими экспертами </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={21}
                height={20}
              />
              <span>Модуль «Как искать» клиентов» </span>
            </li>

            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span>
                Бесплатный доступ на 30 дней к сервису аналитики MPSTATS
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span>Практика с реальным поставщиком 2 недели</span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span>Публикация резюме на канале вакансий школы</span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icons"
                width={22}
                height={23}
              />
              <span>
                Даём до 5 поставщиков для возможности большого трудоустройства
              </span>
            </li>
            <li>
              <img
                src="https://static.tildacdn.com/tild3939-6535-4537-b863-643838396139/noun_Check_Mark_2.svg"
                alt="icon"
                width={22}
                height={23}
              />
              <span>Доступ на 3 месяца сообщество MarketClever Family</span>
            </li>
          </ul>
          <div className={classes.bonus}>
            <strong>+БОНУСЫ</strong>
          </div>
          <div className={classes.btn_cont}>
            <h6>Осталось мест: 1</h6>
            <Link className={classes.book_btn} to={"/form"}>
              Забронировать место
            </Link>
            <Link className={classes.btn_make} to={"/form"}>
              Оформить рассрочку
            </Link>
          </div>
        </article> */}
            </section>
        </div>
    );
};

export default TarifCards;
