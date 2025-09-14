import React, { useState } from "react";
import { PlayCircle, CheckCircle } from "lucide-react";

export default function QuizComponent() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "What is climate change?",
      options: [
        "A change in weather over many years",
        "A new cartoon",
        "Playing outside",
        "None of the above",
      ],
      correct: 0,
    },
    {
      question: "Which gas makes the Earth warmer?",
      options: [
        "Oxygen",
        "Carbon Dioxide",
        "Nitrogen",
        "Hydrogen",
      ],
      correct: 1,
    },
    {
      question: "How can we help the planet?",
      options: [
        "Throw trash in rivers",
        "Plant trees and save water",
        "Waste energy",
        "Do nothing",
      ],
      correct: 1,
    },
    {
      question: "Why should we plant trees?",
      options: [
        "They make oxygen and clean air",
        "They take up space",
        "Just for decoration",
        "None of the above",
      ],
      correct: 0,
    },
    {
      question: "Which of these can save energy?",
      options: [
        "Turning off lights when not used",
        "Leaving water running",
        "Playing video games all day",
        "Wasting paper",
      ],
      correct: 0,
    },
  ];

  const handleChange = (qIndex, optionIndex) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const handleSubmitQuiz = () => {
    let newScore = 0;
    quizQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <PlayCircle className="text-green-600" /> Quiz Time!
      </h2>

      {quizQuestions.map((q, idx) => (
        <div key={idx} className="mb-4">
          <p className="font-medium">{idx + 1}. {q.question}</p>
          <div className="flex flex-col mt-2 gap-2">
            {q.options.map((opt, oIdx) => (
              <label key={oIdx} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={oIdx}
                  checked={answers[idx] === oIdx}
                  onChange={() => handleChange(idx, oIdx)}
                  className="accent-green-600"
                  disabled={submitted}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmitQuiz}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center gap-2"
        >
          <CheckCircle size={20} /> Submit Answers
        </button>
      ) : (
        <div className="mt-4 text-lg font-semibold text-green-800">
          You scored {score} out of {quizQuestions.length}!
        </div>
      )}
    </div>
  );
}
