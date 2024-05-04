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
                <h4>Отзывы</h4>
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
                            <h4>Алена</h4>
                            <aside style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'
                            }}>
                                <p>
                                    Я очень рада, что выбрала это направление. Вам спасибо за знания. Юнитки сделаю у
                                    меня
                                    местами
                                    сегодня работал.
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