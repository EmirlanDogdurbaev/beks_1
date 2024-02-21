import React, { useState } from "react";
import classes from "./Stage.module.scss";

const Stage = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(false);


  return (
    <div className={classes.Stage}>
      <h3>
        Ваш путь на обучении в <span>3 этапа</span>
      </h3>
      <h5 onClick={() => setActiveIndex(!activeIndex)}>
        <span>ЭТАП № 1:</span> Разберётесь как устроены маркетплейсы
      </h5>

      <button
        onClick={() => {
          setActiveIndex(!activeIndex);
        }}
        className={activeIndex ? classes.expanded : ""}
      >
        <h6>Как устроены маркетплейсы</h6>
        <p>lorem</p>
      </button>

      {activeIndex && (
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis provident soluta delectus repellat perspiciatis
            architecto sed ipsa excepturi rem consequatur saepe, facilis velit
            doloremque quod tenetur necessitatibus blanditiis reiciendis
            tempore!
          </p>
        </div>
      )}

      <button
        onClick={() => {
          setActiveIndex2(!activeIndex2);
        }}
        className={activeIndex2 ? classes.expanded : ""}
      >
        <h6>Как устроены маркетплейсы</h6>
        <p>lorem</p>
      </button>

      {activeIndex2 && (
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis provident soluta delectus repellat perspiciatis
            architecto sed ipsa excepturi rem consequatur saepe, facilis velit
            doloremque quod tenetur necessitatibus blanditiis reiciendis
            tempore!
          </p>
        </div>
      )}
    </div>
  );
};

export default Stage;
