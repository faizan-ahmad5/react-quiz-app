import { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      number : "1)",
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Central Programming Unit", "Central Performance Unit", "Central Power Unit"],
      answer: "Central Processing Unit"
    },
    {
      number : "2)",
      question: "Which of the following is an example of an operating system?",
      options: ["Microsoft Windows", "Google Chrome", "Microsoft Office", "Adobe Photoshop"],
      answer: "Microsoft Windows"
    },
    {
      number : "3)",
      question: "What is the primary function of RAM in a computer?",
      options: ["To store data permanently", "To process graphics", "To store data temporarily", "To power the computer"],
      answer: "To store data temporarily"
    },
    {
      number : "4)",
      question: "Which company developed the Java programming language?",
      options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
      answer: "Sun Microsystems"
    },
    {
      number : "5)",
      question: "What does GPU stand for?",
      options: ["General Processing Unit", "Graphics Processing Unit", "Graphics Performance Unit", "General Performance Unit"],
      answer: "Graphics Processing Unit"
    },
    {
      number : "6)",
      question: "Which of the following is a type of non-volatile memory?",
      options: ["RAM", "ROM", "Cache", "Register"],
      answer: "ROM"
    },
    {
      number : "7)",
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperText Makeup Language", "HyperTool Markup Language", "HyperTool Makeup Language"],
      answer: "HyperText Markup Language"
    },
    {
      number : "8)",
      question: "Which programming language is primarily used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      number : "9)",
      question: "What is the main purpose of a firewall in a computer network?",
      options: ["To store data", "To manage network traffic", "To prevent unauthorized access", "To enhance graphics performance"],
      answer: "To prevent unauthorized access"
    },
    {
      number : "10)",
      question: "Which protocol is used for secure communication over the internet?",
      options: ["HTTP", "FTP", "SMTP", "HTTPS"],
      answer: "HTTPS"
    }
  ];

  function handleOptionClick(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="container">
      
      {showScore ? (
        <>
        <h1>Result</h1>
        <h3>Your score is {score} out of {questions.length}</h3>
        <p>Thanks for participating!</p>
        </>
      ) : (
        <>
        <h1>Quiz Application</h1>
          <h3>{questions[currentQuestion].number} {questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>

          ))}
        </>
      )}
    </div>
  );
}

export default App;
