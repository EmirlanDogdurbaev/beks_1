import classes from "./Reviews.module.scss";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css"

import {Pagination} from 'swiper/modules';

const Reviews = () => {
    return (
        <>
            <div className={classes.reviews}>
                <h4>Кейсы</h4>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{height: '500px'}}>
                        <article className={classes.card} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Ольга Никулина</h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Спасибо Юлия! Уже посмотрела урок полностью. Все доступно и обясняете !
                                    Вы - Супер Учитель!!! Прям Ваше это! Домашку досканально! Да,пример нужен , чтобы не
                                    метаться
                                    долго,а взять его и усовершенствовать как мы и видим.
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>

                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Дмитрий @Kmv111 </h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    До обучения: Не знает, как продавать свой товар на маркетплейсах
                                    Во время обучения: Начал зарабатывать от 100.000 рублей
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>

                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4 style={{textAlign: "center"}}>Оксана @OksanaF10 </h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Во время обучения: Заработала 60.000 рублей
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    )
}

export default Reviews;