import { useEffect, useState } from 'react';
import Select from 'react-select';
import styles from '../contactform/contact.module.scss';
import Button from '../Button';
import Images from '../../assets/image/Images';

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [email, setEmail] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [targetLevel, setTargetLevel] = useState('');
  const [question, setQuestion] = useState('');

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Lấy country code từ API restcountries
  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const codes = data
          .filter((c) => c.idd?.root)
          .map((country) => ({
            name: country.name.common,
            label:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ''),
            value:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ''),
            flag: country.flags.png,
          }));
        setCountryCode(codes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountryCode();
  }, []);

  const handleSubmit = async () => {
    if (
      !fullName ||
      !birthYear ||
      !email ||
      !phonenumber ||
      !currentLevel ||
      !targetLevel
    ) {
      setMessage({ type: 'error', text: 'Vui lòng nhập đầy đủ thông tin' });
      return;
    }

    const formData = {
      fullName,
      birthYear: parseInt(birthYear),
      phone: selectedDialCode + ' ' + phonenumber,
      email,
      currentLevel,
      targetLevel,
      question,
    };

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/footer-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({ type: 'success', text: 'Gửi form thành công!' });
        // reset input
        setFullName('');
        setBirthYear('');
        setPhoneNumber('');
        setEmail('');
        setCurrentLevel('');
        setTargetLevel('');
        setQuestion('');
        setSelectedDialCode('');
      } else {
        setMessage({
          type: 'error',
          text: data.errors?.join(', ') || data.message,
        });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Lỗi kết nối server' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactFormWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>
                  KHÁM PHÁ LỘ TRÌNH{' '}
                  <span className={styles.blueText}>TỐI ƯU CHO RIÊNG BẠN</span>
                </h1>
                <p>
                  Hãy cho Tactics biết bạn đang ở trình độ nào hay mong muốn gì,
                  chúng tôi sẽ lên kế hoạch đạt mục tiêu nhanh nhất nhé!
                </p>
              </div>

              {/* Form */}
              <div className={styles.contactForm}>
                <div className={styles.inner}>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Họ tên</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Họ tên của bạn!"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Năm sinh</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="2001"
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Số điện thoại</label>
                      <div className={styles.inputPhone}>
                        <Select
                          options={countryCode}
                          isSearchable
                          onChange={(opt) => setSelectedDialCode(opt.value)}
                          className={styles.select}
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="818 920 3612"
                          value={phonenumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Trình độ hiện tại</label>
                      <select
                        className="form-select"
                        value={currentLevel}
                        onChange={(e) => setCurrentLevel(e.target.value)}
                      >
                        <option value="">-- Chọn --</option>
                        <option value="4.5-5.5">4.5-5.5</option>
                        <option value="5.5-6.5">5.5-6.5</option>
                        <option value="6.5-7.5">6.5-7.5</option>
                        <option value="7.5-8.5">7.5-8.5</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>Mục tiêu đầu ra</label>
                      <select
                        className="form-select"
                        value={targetLevel}
                        onChange={(e) => setTargetLevel(e.target.value)}
                      >
                        <option value="">-- Chọn --</option>
                        <option value="4.5-5.5">4.5-5.5</option>
                        <option value="5.5-6.5">5.5-6.5</option>
                        <option value="6.5-7.5">6.5-7.5</option>
                        <option value="7.5-8.5">7.5-8.5</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <label>Nội dung câu hỏi</label>
                    <textarea
                      className="form-control"
                      style={{ height: '120px' }}
                      placeholder="Bạn muốn hỏi điều gì?"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </div>

                  <Button
                    title={loading ? 'Đang gửi...' : 'Liên hệ ngay'}
                    className={styles.btn}
                    onClick={handleSubmit}
                    disabled={loading}
                  />

                  {message && (
                    <p
                      style={{
                        marginTop: '10px',
                        color: message.type === 'error' ? 'red' : 'green',
                      }}
                    >
                      {message.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={styles.imgWrapper}>
              <img src={Images.Ant} alt="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
