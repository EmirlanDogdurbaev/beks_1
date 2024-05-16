import classes from "./Book.module.scss";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const Book = ({initialHours, initialMinutes, initialSeconds}) => {

    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        setHours(initialHours);
                        setMinutes(initialMinutes);
                        setSeconds(initialSeconds);
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [hours, minutes, seconds, initialHours, initialMinutes, initialSeconds]);

    return (
        <div className={classes.Book}>
            <h3>
                ЗАПИШИТЕСЬ НА КУРС ДО КОНЦА ДНЯ <br/> И ПОЛУЧИТЕ
                <span>БОНУСЫ НА 36 000 руб. </span> <br/> 2 живых урока по OZON
            </h3>
            <section className={classes.cont}>
                <div className={classes.inner_cont_1}>
                    <article className={classes.first}>
                        <h6>Бонусы сгорят через:</h6>
                        <aside>
                            <div>
                                <span> {String(hours).padStart(2, '0')}: </span>
                                <p>часов</p>
                            </div>
                            <h5>:</h5>
                            <div>
                                <span>  {String(minutes).padStart(2, '0')}: </span>
                                <p>минут</p>
                            </div>
                            <h5>:</h5>

                            <div>
                                <span>      {String(seconds).padStart(2, '0')}</span>
                                <p>секунд</p>
                            </div>
                        </aside>
                    </article>
                    <article className={classes.second}>
                        <img
                            src="https://optim.tildacdn.com/tild6438-6363-4163-b562-396438353638/-/resize/266x/-/format/webp/7_2.png"
                            alt=""
                            width={150}
                            height={275}
                            className={classes.img1}
                        />
                        <img
                            src="https://optim.tildacdn.com/tild3939-3263-4938-b236-363761643838/-/resize/262x/-/format/webp/______.png"
                            alt=""
                            width={150}
                            height={275}
                            className={classes.img2}
                        />
                        <img
                            src="https://optim.tildacdn.com/tild3733-3465-4133-b435-306166323836/-/resize/274x/-/format/webp/_______.png"
                            alt=""
                            width={150}
                            height={275}
                            className={classes.img3}
                        />
                        <img
                            src="https://optim.tildacdn.com/tild3931-3031-4164-a632-303065366132/-/resize/262x/-/format/webp/-___.png"
                            alt=""
                            width={150}
                            height={275}
                            className={classes.img4}
                        />
                    </article>
                </div>
            </section>


        </div>
    );
};

export default Book;
