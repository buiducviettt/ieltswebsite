import TeacherItem from "./TeacherItem"
import Images from "../../assets/image/Images"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
const TeacherList = ()=>{
    return (
        <div>
            <Swiper
             modules={[Navigation]}
            slidesPerView={4}
            navigation
            pagination={{clickable:true}}
            >
        <SwiperSlide>
        <TeacherItem
        images={Images.teacher}
        name="Ms. Trang Đặng"
        desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.'/>
        </SwiperSlide>
        <SwiperSlide>
        <TeacherItem
        images={Images.teacher}
        name="Ms. Trang Đặng"
        desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.'/>
        </SwiperSlide>
        <SwiperSlide>
        <TeacherItem
        images={Images.teacher}
        name="Ms. Thuỳ Dương"
        desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.'/>
        </SwiperSlide>
        <SwiperSlide>
        <TeacherItem
        images={Images.teacher}
        name="Ms. Tùng Phạm"
        desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.'/>
        </SwiperSlide>
        <SwiperSlide>
        <TeacherItem
        images={Images.teacher}
        name="Ms. Duy Phạm"
        desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.'/>
        </SwiperSlide>
        <SwiperSlide>
        <TeacherItem
        images={Images.teacher}
        name="Ms. Trang Đặng"
        desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.'/>
        </SwiperSlide>
        </Swiper>
        </div>
    )
}
export default TeacherList