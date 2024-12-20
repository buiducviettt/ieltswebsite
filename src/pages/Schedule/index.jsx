import BannerText from '../../components/BannerText';
import Button from '../../components/Button';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './schedule.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Popup from '../../components/Popup';

const cx = classNames.bind(styles);

const Schedule = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const mockData = [
    {
      course: 'TOEIC Nói – Viết',
      classCode: 'T4813',
      schedule: 'Ca 1 (3 - 5 -7)',
      time: '17h45 - 19h30',
      month: '2024-01',
      area: 'hanoi',
      branch: 'hn-branch',
    },
    {
      course: 'IELTS Intensive',
      classCode: 'I5123',
      schedule: 'Ca 2 (2 - 4 - 6)',
      time: '18h00 - 20h00',
      month: '2024-02',
      area: 'hochiminh',
      branch: 'hcm-branch',
    },
    {
      course: 'IELTS Foundation',
      classCode: 'F2311',
      schedule: 'Ca 3 (3 - 5 - 7)',
      time: '19h00 - 21h00',
      month: '2024-03',
      area: 'danang',
      branch: 'dn-branch',
    },
  ];

  const [filter, setFilter] = useState({
    area: '',
    branch: '',
    month: '',
  });

  const [filteredData, setFilteredData] = useState(mockData);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filtered = mockData.filter((item) => {
      return (
        (filter.area ? item.area === filter.area : true) &&
        (filter.branch ? item.branch === filter.branch : true) &&
        (filter.month ? item.month === filter.month : true)
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
                onClick={handleSearch}
                title="Tìm kiếm"
                className={cx('schedule-filter-btn', 'mt-4')}
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
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.course}</td>
                        <td>{item.classCode}</td>
                        <td>
                          {item.schedule}
                          <br />
                          {item.time}
                        </td>
                        <td>{item.month}</td>
                        <td>
                          <Button
                            onClick={() => setIsPopupOpen(true)}
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
            title="Đăng ký khóa học"
            content="hello world"
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Schedule;
