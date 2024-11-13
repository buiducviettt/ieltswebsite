import styles from '../contactform/contact.module.scss';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Images from '../../assets/image/Images';
import Button from '../Button';

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const codes = data.map((country) => ({
          name: country.name.common,
          label:
            country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : ''), // Tên quốc gia + mã quốc gia
          value:
            country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : ''), // Mã quốc gia
          flag: country.flags.png,
        }));
        setCountryCode(codes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountryCode();
  }, []);

  const handleChange = (selectedCountry) => {
    setSelectedDialCode(selectedCountry.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      name,
      dob,
      phone: selectedDialCode + ' ' + phonenumber,
      email,
      level,
      goal,
      question,
    };
    // Reset các input sau khi submit
    setName('');
    setDob('');
    setPhoneNumber('');
    setEmail('');
    setLevel('');
    setGoal('');
    setQuestion('');
    setSelectedDialCode('');
    console.log(formData); // Log dữ liệu ra console
  };

  return (
    <div className={styles.contactFormWrapper}>
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>
                  KHÁM PHÁ LỘ TRÌNH{' '}
                  <span className={styles.blueText}>TỐI ƯU CHO RIÊNG BẠN</span>{' '}
                </h1>
                <p>
                  Hãy cho Tactics biết bạn đang ở trình độ nào hay mong muốn gì,
                  chúng tôi sẽ lên kế hoạch đạt mục tiêu nhanh nhất nhé!
                </p>
              </div>
              <div className={styles.contactForm}>
                <div className={styles.inner}>
                  <div className="row">
                    <div className="col col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor={styles.name}>Họ tên</label>
                        <input
                          type="text"
                          placeholder="Họ tên của bạn!"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor={styles.name}>Năm sinh</label>
                        <input
                          type="text"
                          placeholder="Năm sinh của bạn!"
                          className="form-control"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="">Số điện thoại</label>
                        <div className={styles.inputPhone}>
                          <Select
                            options={countryCode} // Sử dụng đúng options từ state
                            classNamePrefix="react-select" // Tùy chỉnh class nếu cần
                            isSearchable
                            onChange={handleChange}
                            className={styles.select}
                          />
                          <input
                            className="form-control"
                            type="text"
                            placeholder="818 920 3612"
                            onChange={handlePhoneChange}
                            value={phonenumber}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email của bạn"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="">Trình độ hiện tại</label>
                        <select
                          name=""
                          id=""
                          className="form-select"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                        >
                          <option value="4.5">4.5-5.5</option>
                          <option value="5.5">5.5-6.5</option>
                          <option value="6.5">6.5-7.5</option>
                          <option value="7.5">7.5-8.5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="">Mục tiêu đầu ra</label>
                        <select
                          name=""
                          id=""
                          className="form-select"
                          value={goal}
                          onChange={(e) => setGoal(e.target.value)}
                        >
                          <option value="4.5">4.5-5.5</option>
                          <option value="5.5">5.5-6.5</option>
                          <option value="6.5">6.5-7.5</option>
                          <option value="7.5">7.5-8.5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={styles.formGroup}>
                      <label htmlFor="">Nội dung câu hỏi</label>
                      <textarea
                        name=""
                        id=""
                        style={{ width: '100%', height: '150px' }}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    title="Liên hệ ngay"
                    className={styles.btn}
                    onClick={handleSubmit} // Gọi hàm xử lý submit khi click
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className={styles.imgWrapper}>
              <img src={Images.Ant} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
