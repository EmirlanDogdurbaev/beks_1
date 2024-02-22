import React, { useState } from "react";
import classes from "./Stage.module.scss";

const Stage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsRotated(!isRotated);
  };

  return (
    <div className={classes.Stage}>
      <button className={classes.Stage_button} onClick={handleClick}>
        <h6 className={classes.Stage_button_h6}>Как устроены маркетплейсы</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`${classes.Stage_icon} ${
            isRotated ? classes.rotated : ""
          }`}
        >
          <line x1="0" y1="0" x2="24" y2="24" stroke="black" strokeWidth="2" />
          <line x1="24" y1="0" x2="0" y2="24" stroke="black" strokeWidth="2" />
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
                  Сколько можно заработать с продажи конкретного товара с учётом
                  всех тарифов и скидок
                </li>
                <li>Какой бюджет запланировать на первую поставку</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stage;
