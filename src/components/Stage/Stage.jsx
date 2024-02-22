import React, { useState } from "react";
import classes from "./Stage.module.scss";

const Stage = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <div className={classes.Stage}>
      <h3>
        Ваш путь на обучении в <span>3 этапа</span>
      </h3>
      <h5>
        <span>ЭТАП № 1:</span> Разберётесь как устроены маркетплейсы
      </h5>

      <button onClick={() => setActiveIndex(!activeIndex)}>
        <h6>Как устроены маркетплейсы</h6>
        <p>lorem</p>
      </button>

      <div className={activeIndex ? classes.expanded : classes.btn}>
        {activeIndex && (
          <div className={activeIndex ? classes.expanded : classes.def}>
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
    </div>
  );
};

export default Stage;
