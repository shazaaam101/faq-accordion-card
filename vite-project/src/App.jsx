import "./App.css";
import Question from "./components/Question";

function App() {
  const listQuestions = [
    {
      question: "How many team members can I invite?",
      answer: "You can invite 5 members",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: "Ask ChatGPT.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Of course, you can do it whenever you want to do.",
    },
    {
      question: "Do you provide additional support?",
      answer: "Yes, I do",
    },
  ];
  return (
    <div className="App">
      <div className="container">
        <div className="overflow">
          <div className="image overlap"></div>
        </div>
        <div className="box"></div>
        <div className="questions">
          <h1 className="title">FAQ</h1>
          {listQuestions.map((q, idx) => (
            <Question question={q.question} answer={q.answer} id={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
