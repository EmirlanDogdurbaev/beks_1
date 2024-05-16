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
                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Гульназ
                            </h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Девочки! Не могу не поделиться!!Представляете мне предложили работу на WB,да конечно
                                    пока я
                                    буду разгребать старые карточки,но это сразу практика. Когдая селлеру обяснила ,что
                                    именно мы
                                    проходим и, в каком формате нам дает информацию Юля. Он сказал "я беру тебя" .
                                    Короче я в шоке.
                                    На испытательном сроке предложил 25К. Юля, спасибо вам огромное с нетерпением , жду
                                    каждый день
                                    учебы и новую информацию, это бесценно!
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4> Fedorova Madina
                            </h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    До обучения: Не может найти достойную работу с плавающим графиком, чтобы больше
                                    видеться с
                                    дочкой
                                    Во время обучения: Начала работать пару часов в день и вышла на доход в 50.000 руб
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>

                    {/*    туц */}
                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Александр</h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Весь материал изложен очень понятно и доступно. Как оказалось, для выполнения
                                    практических заданий помимо технических и аналитических навыков требуется творческий
                                    подход. Это было очень интересно. Курс полностью оправдал все ожидания. Благодарю.
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Дмитрий</h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Курс превзошёл все ожидания! Материал был очень интересным и понятным, а подача —
                                    просто отличной. Спасибо!
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Мария</h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Всё нравится! Объём информации, содержание и подача — всё понятно. Плюс есть
                                    дополнительные материалы.
                                </p>
                            </aside>
                        </article>
                    </SwiperSlide>


                    <SwiperSlide style={{height: '500px'}}>
                        <article style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'
                        }}>
                            <h4>Анастасия</h4>

                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Я рада, что пошла на этот курс. Получила большое количество знаний, а максимальное
                                    понимание приходило, когда я выполняла практические работы. В нашем Telegram-чате
                                    всегда можно задать любой вопрос и решить сложности, которые появляются на пути.
                                    <br/>

                                    Сейчас я читаю сообщения новичков курса и вспоминаю себя в сентябре, когда я была в
                                    шоке
                                    от количества информации. Теперь всё уже не кажется таким сложным и непонятным

                                    Спасибо за всё!
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