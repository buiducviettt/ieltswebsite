import BannerText from '../../components/BannerText';
import Button from '../../components/Button';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './schedule.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Popup from '../../components/Popup';

const cx = classNames.bind(styles);

const Schedule = () => {
  const [schedules, setSchedules] = useState([]); // toàn bộ data từ BE
  const [filteredData, setFilteredData] = useState([]); // data sau khi filter
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState({
    area: '',
    branch: '',
    month: '',
  });

  // Gọi API lấy schedules
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch('http://localhost:3000/schedules');
        const data = await response.json();
        console.log('schedule', data);
        setSchedules(data); // lưu toàn bộ data
        setFilteredData(data); // mặc định hiển thị tất cả
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };
    fetchSchedule();
  }, []);

  // cập nhật filter state
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // khi click "Tìm kiếm"
  const handleSearch = () => {
    const filtered = schedules.filter((item) => {
      return (
        (filter.area ? item.area === filter.area : true) &&
        (filter.branch ? item.branch === filter.branch : true) &&
        (filter.month ? item.startMonth === filter.month : true)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <DefaultLayout>
      <BannerText title="Lịch khai giảng" />
      <main>
        <section className={cx('schedule-inner container')}>
          <div className={cx('schedule-title text-center')}>
            <h1>Lịch khai giảng các lớp IELTS</h1>
          </div>
          <div className={cx('schedule-content mt-5')}>
            <div className={cx('schedule-filter')}>
              <div className={cx('schedule-filter-inner', 'd-flex', 'gap-4')}>
                {/* Column 1 */}
                <div className={cx('schedule-filter-item', 'col')}>
                  <label htmlFor="area">Khu vực</label>
                  <select
                    onChange={handleFilterChange}
                    name="area"
                    id="area"
                    className={cx('form-select', 'form-input')}
                  >
                    <option value="">Chọn khu vực</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hochiminh">Hồ Chí Minh</option>
                    <option value="danang">Đà Nẵng</option>
                  </select>
                </div>
                {/* Column 2 */}
                <div className={cx('schedule-filter-item', 'col')}>
                  <label htmlFor="branch">Chi nhánh</label>
                  <select
                    onChange={handleFilterChange}
                    name="branch"
                    id="branch"
                    className={cx('form-select', 'form-input')}
                  >
                    <option value="">Chọn chi nhánh</option>
                    <option value="hn-branch">Chi nhánh Hà Nội</option>
                    <option value="hcm-branch">Chi nhánh Hồ Chí Minh</option>
                    <option value="dn-branch">Chi nhánh Đà Nẵng</option>
                  </select>
                </div>
                {/* Column 3 */}
                <div className={cx('schedule-filter-item', 'col')}>
                  <label htmlFor="month">Tháng</label>
                  <select
                    onChange={handleFilterChange}
                    name="month"
                    id="month"
                    className={cx('form-select', 'form-input')}
                  >
                    <option value="">Chọn tháng</option>
                    <option value="2024-01">Tháng 1</option>
                    <option value="2024-02">Tháng 2</option>
                    <option value="2024-03">Tháng 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={cx(
                'schedule-filter-btn-wrapper',
                'text-center',
                'mt-4',
              )}
            >
              <Button
                title="Tìm kiếm"
                className={cx('schedule-filter-btn', 'mt-4')}
                onClick={handleSearch}
              />
            </div>
          </div>
          {/* tableresult */}
          <div className={cx('schedule-result')}>
            <div className={cx('schedule-result-table', 'mt-5')}>
              <table>
                <thead>
                  <tr>
                    <th>KHOÁ HỌC</th>
                    <th>MÃ LỚP</th>
                    <th>LỊCH HỌC</th>
                    <th>THÁNG KHAI GIẢNG</th>
                    <th>CHI TIẾT</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData && filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.courseName}</td>
                        <td>{item.classCode}</td>
                        <td>{item.schedule}</td>
                        <td>{item.startMonth}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setIsPopupOpen(true);
                              setSelectedCourse(item);
                            }}
                            title="Đăng ký ngay"
                            className={cx('schedule-filter-btn')}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Không có kết quả phù hợp
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className={cx('popup-wrapper')}>
          <Popup
            title="Đăng ký nhận tư vấn "
            content={
              <form
                onClick={(e) => e.stopPropagation()}
                className={cx('form-register')}
              >
                <div className="info-row">
                  <div className="row">
                    <div className="col-md-6">
                      <div className={cx('form-group d-flex flex-column')}>
                        <label htmlFor="name">Họ và tên</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Nhập họ tên"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={cx('form-group d-flex flex-column')}>
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('form-group d-flex flex-column mt-4')}>
                  <label htmlFor="class">
                    Lịch khai giảng bạn đang quan tâm?
                  </label>
                  <input
                    type="text"
                    id="class"
                    name="class"
                    disabled
                    value={selectedCourse && selectedCourse.courseName}
                  />
                </div>
                <button className={cx('btn-contact', 'mt-4')} type="submit">
                  Liên hệ tư vấn ngay
                </button>
              </form>
            }
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Schedule;
