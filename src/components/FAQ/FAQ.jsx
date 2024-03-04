import React, { useState } from "react";
import classes from "./FAQ.module.scss";
const FAQ = () => {
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

  return (
    <div className={classes.FAQ}>
      <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ </h2>
      {/* sdasd */}

      <section className={classes.path}>
        <div className={classes.next}>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick1}>
              <h6 className={classes.Stage_button_h6}>
                СКОЛЬКО Я СМОГУ ЗАРАБАТЫВАТЬ КАК МЕНЕДЖЕР МАРКЕТПЛЕЙСОВ?
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
                  <article className={classes.article}>
                    <strong className={classes.strong}>
                      Потолка в заработке нет.
                    </strong>
                    Очень многое зависит от вашего настроя и времени, которое вы
                    можете уделить работе. Начинающие менеджеры сразу после
                    курса берут в среднем за ведение 1 аккаунта ~15.000
                    руб./месяц.
                  </article>

                  <article className={classes.article}>
                    Каждому поставщику нужно уделять время, поэтому для старта
                    можно взять 2-3 человек. Итого: 45.000 руб. в месяц.
                  </article>

                  <article className={classes.article}>
                    Но чем больше вы практикуетесь и применяете все знания на
                    практике, тем больше сможете предоставлять услуг. Тем самым
                    стоимость вашей работы будет больше. Плюс вы сможете брать
                    больше 1 клиента в месяц. И в дополнение к этому, часто
                    менеджеры выбирают формат оплаты: оклад + % от продаж.
                  </article>

                  <article className={classes.article}>
                    Так можно достигнуть ежемесячного дохода 70.000 - 150.000
                    руб. и выше.
                  </article>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick2}>
              <h6 className={classes.Stage_button_h6}>
                СКОЛЬКО ВРЕМЕНИ ТРАТИТЬ В ДЕНЬ НА ОБУЧЕНИЕ?
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
                  <article className={classes.article}>
                    У всех студентов на обучение уходит разное время, потому что
                    все приходят с разным уровнем знаний и восприятия
                    информации. У кого-то это занимает 1-1,5 часа в день, у
                    кого-то больше
                  </article>
                  <article className={classes.article}>
                    <strong className={classes.strong}>
                      В среднем, достаточно уделять 1,5 часа в день для
                      успешного прохождения занятий.
                    </strong>
                  </article>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick3}>
              <h6 className={classes.Stage_button_h6}>
                СКОЛЬКО ВРЕМЕНИ В ДЕНЬ НУЖНО УДЕЛЯТЬ НА РАБОТУ С КЛИЕНТАМИ?
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
                  ? `${classes.Stage_div} ${classes.expanded3}`
                  : classes.Stage_div
              }
            >
              {isActive3 && (
                <div className={classes.inner_cont}>
                  <article className={classes.article}>
                    Все зависит от вас и вашей договоренности с клиентом. В
                    самом начале запуска магазина, несомненно, времени уходит
                    больше. Но как только вы выстроите все рабочие процессы, это
                    будет требовать гораздо меньше времени.
                  </article>
                  <article className={classes.article}>
                    <strong className={classes.strong}>
                      В среднем на ведение 1 клиента уходит от 2-х часов в день.
                    </strong>
                  </article>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick4}>
              <h6 className={classes.Stage_button_h6}>
                КАКОЕ ОБОРУДОВАНИЕ НУЖНО ДЛЯ РАБОТЫ?
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
                  ? `${classes.Stage_div} ${classes.expanded4}`
                  : classes.Stage_div
              }
            >
              {isActive4 && (
                <div className={classes.inner_cont}>
                  <article className={classes.article}>
                    Вам будет достаточно ноутбука с доступом в интернет.
                  </article>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick5}>
              <h6 className={classes.Stage_button_h6}>
                ПОЛУЧИТСЯ ЛИ У МЕНЯ, ЕСЛИ Я ВООБЩЕ НИЧЕГО НЕ ПОНИМАЮ В
                КОМПЬЮТЕРАХ?
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
                  ? `${classes.Stage_div} ${classes.expanded5}`
                  : classes.Stage_div
              }
            >
              {isActive5 && (
                <div className={classes.inner_cont}>
                  <article className={classes.article}>
                    Никаких сложных программ для работы Вам не потребуется.
                    Максимум - это таблицы Excel . Плюс
                    подробные инструкции как работать в таких программах и
                    сайтах уже есть в курсе.
                  </article>
                </div>
              )}
            </div>
          </div>
         
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick7}>
              <h6 className={classes.Stage_button_h6}>
                НАЙДУ ЛИ Я РАБОТУ МЕНЕДЖЕРОМ МАРКЕТПЛЕЙСОВ? ЕСТЬ ЛИ СПРОС НА
                РЫНКЕ ТРУДА?
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
                  <article className={classes.article}>
                    На текущее время, спрос на специалиста, владеющего навыками
                    работы с маркетплейсами, перекрывает кол-во предложений.
                    Достаточно зайти на самый популярный сайт поиска работы
                    hh.ru и убедиться, что по запросу “менеджер маркетплейсов”
                    система выдаёт более 1500+ актуальных вакансий.
                  </article>
                </div>
              )}
            </div>
          </div>
          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick8}>
              <h6 className={classes.Stage_button_h6}>
                КАКОЕ КОЛ-ВО КЛИЕНТОВ МОЖЕТ ВЗЯТЬ НА СОПРОВОЖДЕНИЕ МЕНЕДЖЕР
                МАРКЕТПЛЕЙСОВ
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
                  ? `${classes.Stage_div} ${classes.expanded8}`
                  : classes.Stage_div
              }
            >
              {isActive8 && (
                <div className={classes.inner_cont}>
                  <article className={classes.article}>
                    В зависимости от того, сколько усилий и времени человек
                    готов посвящать работе. В среднем, успешные менеджеры
                    маркетплейсов, с доходом от 100 тыс. руб, ведут более 3
                    поставщиков. Юлия Шанжер, в самом начале развития карьеры
                    на маркетплейсах, работала с 10 поставщиками.
                  </article>
                </div>
              )}
            </div>
          </div>

          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick9}>
              <h6 className={classes.Stage_button_h6}>
                МОГУ ЛИ Я, МАМА В ДЕКРЕТЕ, ОСВОИТЬ УСПЕШНО ПРОФЕССИЮ МЕНЕДЖЕРА
                МАРКЕТПЛЕЙСОВ?
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
                isActive9
                  ? `${classes.Stage_div} ${classes.expanded9}`
                  : classes.Stage_div
              }
            >
              {isActive9 && (
                <div className={classes.inner_cont}>
                  <article className={classes.article}>
                    Конечно, наши студенты мамы в декрете, очень успешно
                    реализуются в этой профессии, уделяя достаточное кол-во
                    времени домашним делам, обучению и работе.
                  </article>
                </div>
              )}
            </div>
          </div>

          <div className={classes.Stage}>
            <button className={classes.Stage_button} onClick={handleClick10}>
              <h6 className={classes.Stage_button_h6}>
                СМОГУ ЛИ Я ПОТОМ СОЗДАТЬ СОБСТВЕННЫЙ МАГАЗИН?
              </h6>
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
                  <article className={classes.article}>
                    Конечно, часть наших учеников создают собственные магазины.
                    Всё потому, что менеджер маркетплейсов знает, как подобрать
                    актуальный товар, где его заказать по выгодной цене, как
                    продвинуть этот товар и, тем самым, выстроить очередь из
                    клиентов.
                  </article>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
