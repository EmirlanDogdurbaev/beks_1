import Cards from "../../Cards/Cards";
import Header from "../../Header/Header";
import Tarif from "../../Tarif/Tarif";
import TarifCards from "../../TarifCards/TarifCards";
import Tools from "../../Tools/Tools";
import classes from "./Layout.module.scss";
import React, { useState } from "react";
const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isRotated1, setIsRotated1] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);
  const [isRotated3, setIsRotated3] = useState(false);
  const [isRotated4, setIsRotated4] = useState(false);
  const [isRotated5, setIsRotated5] = useState(false);
  const [isRotated6, setIsRotated6] = useState(false);
  const [isRotated7, setIsRotated7] = useState(false);
  const [isRotated8, setIsRotated8] = useState(false);
  const [isRotated9, setIsRotated9] = useState(false);
  const [isRotated10, setIsRotated10] = useState(false);
  const [isRotated11, setIsRotated11] = useState(false);

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);
  const [isActive9, setIsActive9] = useState(false);
  const [isActive10, setIsActive10] = useState(false);
  const [isActive11, setIsActive11] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsRotated(!isRotated);
  };
  const handleClick1 = () => {
    setIsRotated1(!isRotated1);
    setIsActive1(!isActive1);
  };
  const handleClick2 = () => {
    setIsRotated2(!isRotated2);
    setIsActive2(!isActive2);
  };
  const handleClick3 = () => {
    setIsRotated3(!isRotated3);
    setIsActive3(!isActive3);
  };
  const handleClick4 = () => {
    setIsRotated4(!isRotated4);
    setIsActive4(!isActive4);
  };
  const handleClick5 = () => {
    setIsRotated5(!isRotated5);
    setIsActive5(!isActive5);
  };
  const handleClick6 = () => {
    setIsRotated6(!isRotated6);
    setIsActive6(!isActive6);
  };
  const handleClick7 = () => {
    setIsRotated7(!isRotated7);
    setIsActive7(!isActive7);
  };
  const handleClick8 = () => {
    setIsRotated8(!isRotated8);
    setIsActive8(!isActive8);
  };
  const handleClick9 = () => {
    setIsRotated9(!isRotated9);
    setIsActive9(!isActive9);
  };
  const handleClick10 = () => {
    setIsRotated10(!isRotated10);
    setIsActive10(!isActive10);
  };
  const handleClick11 = () => {
    setIsRotated11(!isRotated11);
    setIsActive11(!isActive11);
  };

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

      <section className={classes.path}>
        <div className={classes.header_path}>
          <h3>
            Ваш путь на обучении в <span>3 этапа</span>
          </h3>
          <h5>
            <span>ЭТАП № 1:</span> Разберётесь как устроены маркетплейсы
          </h5>
        </div>
        <div className={classes.Stage}>
          <button className={classes.Stage_button} onClick={handleClick}>
            <h6 className={classes.Stage_button_h6}>
              Как устроены маркетплейсы
            </h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`${classes.Stage_icon} ${
                isRotated ? classes.rotated : ""
              }`}
            >
              <line
                x1="0"
                y1="0"
                x2="24"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="24"
                y1="0"
                x2="0"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <div
            className={
              isActive
                ? `${classes.Stage_div} ${classes.expanded}`
                : classes.Stage_div
            }
          >
            {isActive && (
              <div className={classes.inner_cont}>
                <ul>
                  <li>что нужно для первой поставки</li>
                  <li>какие модели продаж товаров существуют</li>
                  <li>3 основных расхода при продаже товаров на WB</li>
                  <li>какое вознаграждение берёт WB с поставщиков</li>
                  <li>как давать скидки и всё равно зарабатывать</li>
                  <li>ценообразование на WB</li>
                </ul>
                <p>
                  <strong>Практика: </strong>работа с таблицей юнит-экономика
                </p>
                <div className={classes.bottom_text}>
                  <h6>Научитесь рассчитывать:</h6>
                  <ul>
                    <li>
                      Сколько можно заработать с продажи конкретного товара с
                      учётом всех тарифов и скидок
                    </li>
                    <li>Какой бюджет запланировать на первую поставку</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={classes.next}>
          <h4>
            После этого этапа вы сможете зарабатывать на консультациях от 2 500
            руб. за час
          </h4>
          <div className={classes.header_path}>
            <h3>
              <span> ЭТАП № 2:</span>Работа в кабинете WB
            </h3>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick1}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>1 шаг:</span> Регистрация
                поставщика
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated1 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive1
                  ? `${classes.Stage_div} ${classes.expanded2}`
                  : classes.Stage_div
              }
            >
              {isActive1 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Как зарегистрировать нового поставщика на ВБ</li>
                    <li>Как получить доступ к кабинету поставщика</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick2}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>2 шаг:</span> Знакомство с
                кабинетом WB
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated2 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive2
                  ? `${classes.Stage_div} ${classes.expanded3}`
                  : classes.Stage_div
              }
            >
              {isActive2 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Разделы кабинета</li>
                    <li>Как связаться с поддержкой WB</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick3}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>3 шаг:</span> Путь товара до
                клиента
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated3 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive3
                  ? `${classes.Stage_div} ${classes.expanded4}`
                  : classes.Stage_div
              }
            >
              {isActive3 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Что такое фулфилмент и как он упрощает работу</li>
                    <li>Этапы отгрузки в кабинете WB</li>
                    <li>Штрихкод и баркод</li>
                    <li>Маркировка и упаковка</li>
                    <li>Как понять какой склад выбрать и на что это влияет</li>
                    <li>Процесс отгрузки и приёмки на складе</li>
                    <li>Как создать поставку в кабинете WB. Скринкаст.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick4}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>4 шаг:</span>Создание карточки
                товара
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated4 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive4
                  ? `${classes.Stage_div} ${classes.expanded5}`
                  : classes.Stage_div
              }
            >
              {isActive4 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Пошаговый скринкаст создания карточки товара</li>
                    <li>
                      Лайфхак - как получить бесплатный трафик через карточку
                      товара
                    </li>
                    <li>Как создать понятный для поставщика артикул</li>
                    <li>Работа с ключами и категориями</li>
                    <li>Работа с SEO</li>
                    <li>Секреты продающего контента</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick5}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>5 шаг:</span> Работа со
                скидками, акциями и рекомендациями
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated5 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive5
                  ? `${classes.Stage_div} ${classes.expanded6}`
                  : classes.Stage_div
              }
            >
              {isActive5 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Куда загружать скидку на портале WB</li>
                    <li>Как не сделать фатальных ошибок</li>
                    <li>
                      Рекомендации, как инструмент бесплатного продвижения{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick6}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>6 шаг:</span>Работа с отзывами
                и вопросами
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated6 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive6
                  ? `${classes.Stage_div} ${classes.expanded6}`
                  : classes.Stage_div
              }
            >
              {isActive6 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Интерфейс ответов на отзывы</li>
                    <li>Удаление отзывов</li>
                    <li>Как закрыть возражения покупателей</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick7}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>7 шаг:</span> Работа с отчётами
                в кабинете WB
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated7 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive7
                  ? `${classes.Stage_div} ${classes.expanded7}`
                  : classes.Stage_div
              }
            >
              {isActive7 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>Самые важные отчёты на WB</li>
                    <li>Как упростить работу с данными</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick8}>
              <h6 className={classes.Stage_button_h6}>
                <span className={classes.violet}>8 шаг:</span>Возврат товара
                поставщику и работа с браком
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${classes.Stage_icon} ${
                  isRotated8 ? classes.rotated : ""
                }`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className={
                isActive8
                  ? `${classes.Stage_div} ${classes.expanded6}`
                  : classes.Stage_div
              }
            >
              {isActive8 && (
                <div className={classes.inner_cont}>
                  <ul>
                    <li>
                      Как отозвать товары со склада по инициативе поставщика
                    </li>
                    <li>
                      Как изъять из оборота испорченный или бракованный товар
                    </li>
                    <li>Как работать с заявками на возврат от покупателей</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={classes.after}>
          <h6>после этого этапа вы сможете:</h6>
          <ul>
            <li>Выводить поставщиков на WB - разовая услуга от 5 000 руб.</li>
            <li>
              вести кабинет поставщика и зарабатывать на старте ЗП от 20 000
              руб./мес.
            </li>
            <li>Можете вести 2-4 поставщика </li>
          </ul>
        </div>
      </section>

      <section className={classes.path3}>
        <div className={classes.header_path3}>
          <h3>
            <span>ЭТАП №3: </span>навыки продвинутого менеджера
          </h3>
        </div>
        <div className={classes.Stage}>
          <button className={classes.Stage_button} onClick={handleClick9}>
            <h6 className={classes.Stage_button_h6}>Реклама и продвижение</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`${classes.Stage_icon} ${
                isRotated9 ? classes.rotated : ""
              }`}
            >
              <line
                x1="0"
                y1="0"
                x2="24"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="24"
                y1="0"
                x2="0"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <div
            className={
              isActive9
                ? `${classes.Stage_div} ${classes.expanded9}`
                : classes.Stage_div
            }
          >
            {isActive9 && (
              <div className={classes.inner_cont}>
                <ul>
                  <li>Тренды и способы продвижения</li>
                  <li>Как повлиять на решение клиента о покупке</li>
                  <li>Продвижение через выкупы</li>
                  <li>Закупка рекламы в пабликах и блогах</li>
                  <li>Внешняя и внутренняя реклама</li>
                  <li>Оценка эффективности рекламы</li>
                </ul>
                <div className={classes.bottom}>
                  <p>
                    На этом навыке сможете зарабатывать от 30-40 тыс в месяц с
                    одного кабинета
                  </p>
                  <p>Можно продвигать 2-3 кабинета </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={classes.Stage}>
          <button className={classes.Stage_button} onClick={handleClick10}>
            <h6 className={classes.Stage_button_h6}>Выбор ниши и товара</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`${classes.Stage_icon} ${
                isRotated10 ? classes.rotated : ""
              }`}
            >
              <line
                x1="0"
                y1="0"
                x2="24"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="24"
                y1="0"
                x2="0"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <div
            className={
              isActive10
                ? `${classes.Stage_div} ${classes.expanded10}`
                : classes.Stage_div
            }
          >
            {isActive10 && (
              <div className={classes.inner_cont}>
                <ul>
                  <li>Анализ ниши</li>
                  <li>Анализ товаров</li>
                  <li>Поиск поставщика</li>
                </ul>
                <div className={classes.bottom}>
                  <p>
                    Благодаря этому навыку вы увеличите ЗП минимум на 10 000
                    руб. в месяц
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={classes.Stage}>
          <button className={classes.Stage_button} onClick={handleClick11}>
            <h6 className={classes.Stage_button_h6}>
              Анализ и разработка стратегии развития магазина на WB
            </h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`${classes.Stage_icon} ${
                isRotated11 ? classes.rotated : ""
              }`}
            >
              <line
                x1="0"
                y1="0"
                x2="24"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="24"
                y1="0"
                x2="0"
                y2="24"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <div
            className={
              isActive11
                ? `${classes.Stage_div} ${classes.expanded11}`
                : classes.Stage_div
            }
          >
            {isActive11 && (
              <div className={classes.inner_cont}>
                <ul>
                  <li>Анализ продаж товара</li>
                  <li>Финансовые отчеты</li>
                  <li>Отслеживание точек роста в бизнесе</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={classes.text}>
        <p>
          после этого этапа вы увеличите стоимость своей работы будете получать
          от 50 000 в месяц <br />+ на каждом навыке сможете зарабатывать
          отдельно
        </p>
      </section>

      <section className={classes.tools_cont}>
        <Tools />
      </section>

      <section className={classes.tarif_cont}>
        <Tarif />
      </section>

      <section className={classes.tarif_cards_cont}>
        <TarifCards/>
      </section>
    </main>
  );
};

export default Layout;
