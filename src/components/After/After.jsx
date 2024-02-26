import classes from "./After.module.scss";

const After = () => {
  return (
    <div className={classes.After}>
      <div className={classes.left}>
        <h1>
          ПОСЛЕ КУРСА ВЫ СТАНЕТЕ ЧАСТЬЮ ЗАКРЫТОГО КЛУБА ЕДИНОМЫШЛЕННИКОВ
          MarketClever Family
        </h1>
        <p>
          Вне зависимости от выбранного тарифа, когда успешно пройдёте курс и
          получите опыт с первым клиентом, вы сможете попасть в закрытый клуб
          «только для своих».
        </p>
        <span>Закрытый клуб MarketClever Family – это:</span>
        <ul>
          <li>Актуальные новости маркетплейсов</li>
          <li>Онлайн-встречи с приглашёнными экспертами</li>
          <li>Сообщество единомышленников</li>
        </ul>

        <h6>
          Подробные условия участия в клубе <br /> дополнительно расскажем.
        </h6>
      </div>

      <div className={classes.right}>
        <img
          src="https://optim.tildacdn.com/tild6539-6539-4065-b637-666238313861/-/cover/600x914/center/center/-/format/webp/-1.jpg"
          alt=""
          height={420}
          width={305}

          className={classes.first_img}
        />
        <img
          src="https://optim.tildacdn.com/tild6630-6366-4261-b735-326165653134/-/cover/470x704/center/center/-/format/webp/-2.jpg"
          alt=""
          width={205}
          height={350}

          className={classes.second_img}

        />
      </div>
    </div>
  );
};

export default After;
