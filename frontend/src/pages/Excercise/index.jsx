import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import DefaultLayout from '../../components/Layout/Default Layout';
import Button from '../../components/Button';
import QuestionType from './QuestionType';
import './index.scss';
const Exercise = () => {
  const { productId } = useParams();

  const [timeLeft, setTimeLeft] = useState(0);
  const timeRef = useRef(null);
  const [exercise, setExercise] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const currentExercise = exercise[currentIndex];
  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAnswer,
    }));
  };
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetch(
          `https://680f31ad67c5abddd19432d4.mockapi.io/elearn/courses/${productId}`,
        );
        const data = await response.json();
        const allExercises =
          data.course?.flatMap((chapter) => chapter.exercises || []) || [];
        setExercise(allExercises);
        console.log(
          ' Tổng số bài tập có trong khóa học là: ',
          allExercises.length,
        );
      } catch (error) {
        console.error('Error fetching exercise:', error);
      }
    };
    fetchExercise();
  }, [productId]);
  // khởi tạo bộ đếm thời gian
  // useEffect(() => {
  //   if (!currentExercise) return;
  //   const time = currentExercise.time || 500; // Giả sử thời gian được lưu trong currentExercise
  //   setTimeLeft(time);
  //   if (timeRef.current) {
  //     clearInterval(timeRef.current);
  //   }
  //   timeRef.current = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       if (prevTime <= 1) {
  //         clearInterval(timeRef.current);
  //         if (currentIndex < exercise.length - 1) {
  //           setCurrentIndex((prevIndex) => prevIndex + 1);
  //         }

  //         return 0;
  //       }
  //       return prevTime - 1;
  //     });
  //   }, 1000);
  //   return () => {
  //     if (timeRef.current) {
  //       clearInterval(timeRef.current);
  //     }
  //   };
  // }, [currentExercise]);
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };
  const handleNext = () => {
    console.log('Current Index:', currentIndex);
    if (currentIndex < exercise.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    console.log('Current Index:', currentIndex);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleSubmit = () => {
    let correct = 0;
    exercise.forEach((ex, idx) => {
      if (userAnswers[idx] === ex.answer) {
        correct += 1;
      }
    });
    setResult({
      correct,
      total: exercise.length,
    });
  };
  return (
    <DefaultLayout>
      <div
        className="exercise_page"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '4rem',
        }}
      >
        <h1>BÀI KIỂM TRA</h1>
        {/* <p>Thời gian còn lại :{formatTime(timeLeft)} </p> */}
        <div className="exercise_content">
          {currentExercise ? (
            <div className="exercise_content_inside">
              <p>
                Câu hỏi : {currentIndex + 1} / {exercise.length}
              </p>
              <h2>
                Question {currentIndex + 1}: {currentExercise.title}
              </h2>

              <QuestionType
                onAnswerChange={handleAnswerChange}
                questionData={currentExercise}
                index={currentIndex}
              />
            </div>
          ) : (
            <p>No exercises available.</p>
          )}
        </div>
        {currentIndex === exercise.length - 1 ? (
          <Button
            className="exercise_btn"
            title="Submit"
            onClick={handleSubmit}
          />
        ) : (
          <div className="exercise_button">
            {currentIndex === 0 ? null : (
              <Button
                onClick={handlePrev}
                title="Trước đó"
                className="exercise_btn"
              />
            )}
            <Button
              onClick={handleNext}
              title="Tiếp theo"
              className="exercise_btn"
            />
          </div>
        )}
        {result && (
          <div
            style={{
              marginTop: '2rem',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '800px',
              background: '#f9f9f9',
            }}
          >
            <h2>
              Kết quả: {result.correct} / {result.total} câu đúng
            </h2>
            <h3>Chi tiết:</h3>
            {exercise.map((ex, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrect = userAnswer === ex.answer;

              return (
                <div
                  key={idx}
                  style={{
                    marginBottom: '1rem',
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    backgroundColor: isCorrect ? '#e0ffe0' : '#ffe0e0',
                  }}
                >
                  <p>
                    <strong>
                      Câu {idx + 1}: {ex.question}
                    </strong>
                  </p>
                  <p>
                    ✅ Đáp án đúng: <strong>{ex.answer}</strong>
                  </p>
                  <p>
                    🧑 Câu trả lời của bạn:{' '}
                    <strong>{userAnswer || 'Chưa chọn'}</strong>{' '}
                    {isCorrect ? '✅' : '❌'}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
export default Exercise;
