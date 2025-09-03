// src/components/Exercise/QuestionType.jsx
import { useState } from 'react';
import './index.scss';
const QuestionType = ({ questionData, index, onAnswerChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const handleChange = (option) => {
    let updatedAnswers;

    if (selectedAnswer.includes(option)) {
      updatedAnswers = selectedAnswer.filter((ans) => ans !== option); // Bỏ tick
    } else {
      updatedAnswers = [...selectedAnswer, option]; // Tick thêm
    }

    setSelectedAnswer(updatedAnswers);
    onAnswerChange(index, updatedAnswers); // Truyền về parent
  };

  switch (questionData.type) {
    case 'multiple-choice':
      return (
        <div>
          <p>
            <strong>Câu hỏi:</strong> {questionData.question}
          </p>
          <ul>
            {questionData.options?.map((opt, i) => (
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    name={`question-${index}`}
                    value={opt}
                    checked={selectedAnswer.includes(opt)}
                    onChange={() => handleChange(opt)}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'fill-in-the-blank':
      return (
        <div>
          <p>
            <strong>Câu hỏi:</strong> {questionData.question}
          </p>
          <input
            type="text"
            placeholder="Điền vào chỗ trống"
            value={selectedAnswer}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      );

    default:
      return <p>Không hỗ trợ loại câu hỏi này.</p>;
  }
};

export default QuestionType;
