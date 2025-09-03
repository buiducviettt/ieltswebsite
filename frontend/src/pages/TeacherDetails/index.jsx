import BannerText from '../../components/BannerText';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './details.module.scss';
import Images from '../../assets/image/Images';
import classnames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import Facilities from '../Introduction/Slider';
const cx = classnames.bind(styles);
const TeacherDetails = () => {
  const { teacherId } = useParams();
  const teacherData = {
    1: {
      name: 'Ms. Trang Đặng',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' Cử nhân ngôn ngữ Anh ',
    },
    2: {
      name: 'Ms. Thuỳ Dương',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' Cử nhân QTKD',
    },
    3: {
      name: 'Ms. Tùng Phạm',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' 9.0 Ielts',
    },
    4: {
      name: 'Ms. Duy Phạm',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' 8.0 Ielts',
    },
    5: {
      name: 'Ms. Trang Đặng',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: 'Cử nhân ngôn ngữ Anh',
    },
  };
  const teacher = teacherData[teacherId];

  return (
    <DefaultLayout>
      <BannerText title={teacher ? teacher.name : ''} desc={teacher.title} />
      <main className="mt-5">
        <div className={cx('teacherInfo', 'container')}>
          <div className={cx('teacherInfo_box')}>
            <div className={cx('teacherInfo_box_inner')}>
              <p className={cx('teacherInfo_box_inner_title')}>
                Tiểu sử giảng viên{' '}
              </p>
              <p className={cx('teacherInfo_box_inner_desc')}>
                Hơn 3 năm kinh nghiệm giảng dạy tiếng Anh Sở hữu 2 chứng chỉ
                TESOL: Giảng dạy giao tiếp và quản lý lớp Đạt Giải nhất Cuộc thi
                tranh biện tiếng Anh AATW 2021 tại Học viện Tài chính Đạt Giải
                nhì Nghiên cứu Khoa học, sử dụng ngôn ngữ Anh tại trường Đại học
                Ngoại ngữ – Đại học Quốc gia Hà Nội
              </p>
            </div>
          </div>{' '}
          <div className={cx('teacherInfo_box')}>
            <div className={cx('teacherInfo_box_inner')}>
              <p className={cx('teacherInfo_box_inner_title')}>Giới thiệu </p>
              <p className={cx('teacherInfo_box_inner_desc')}>
                Giới thiệu Tôi là {teacher.name} - {teacher.title}, hiện tôi
                đang giảng dạy tại Trung tâm Anh Ngữ Quốc Tế PEP. Với hơn 3 năm
                kinh nghiệm trong lĩnh vực giảng dạy tiếng Anh, tôi đã chia sẻ
                rất nhiều kiến thức bổ ích và thúc đẩy niềm đam mê học ngoại ngữ
                cho các em học sinh. Hy vọng rằng, những kiến thức tôi chia sẻ
                sẽ mang lại nhiều giá trị, giúp các em tự tin trong quá trình sử
                dụng và vận dụng kỹ năng tiếng Anh.
              </p>
            </div>
          </div>
          <div className={cx('teacherInfo_box')}>
            <div className={cx('teacherInfo_box_inner')}>
              <p className={cx('teacherInfo_box_inner_title')}>
                Mục tiêu nghề nghiệp
              </p>
              <p className={cx('teacherInfo_box_inner_desc')}>
                Với sứ mệnh cung cấp những giá trị tốt nhất đến với khách hàng,
                Quốc Khánh và PEP sẽ đem lại cho các em học sinh nguồn kiến
                thức, tinh thần tự học và sự tự tin khi sử dụng tiếng Anh. Chúng
                tôi sẽ đồng hành với hàng trăm các em nhỏ của Việt Nam để các em
                sở hữu một nền tảng ngoại ngữ ổn định, bền vững và tự tin trong
                việc sử dụng Tiếng Anh.
              </p>
            </div>
          </div>{' '}
        </div>
        <section className={cx('teacherImg_wrapper', 'mt-5')}>
          <div className={cx('teacherImg_wrapper_inner')}>
            <h1 className={cx('teacherImg_wrapper_inner_title', 'text-center')}>
              Hình ảnh giáo viên với học viên
            </h1>
            <Facilities />
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};
export default TeacherDetails;
