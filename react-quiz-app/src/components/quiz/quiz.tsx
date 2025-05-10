import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../api/quizApi";
import type { Question } from "../../types/Question";
import Button from "../button/button";
import falseIcon from "../../assets/error.svg";
import trueIcon from "../../assets/true.svg";
import htmlIcon from "../../assets/html.svg";
import reactlIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/nodejs.svg";
import vueIcon from "../../assets/vuejs.svg";
import aIcon from "../../assets/A.svg";
import bIcon from "../../assets/B.svg";
import cIcon from "../../assets/C.svg";
import dIcon from "../../assets/D.svg";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import './quiz.scss';

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [score, setScore] = useState(0);


  useEffect(() => {
    fetchQuestions(subject || "HTML").then((res) => {
      const validQuestions = res.data
        .filter((question: any) => question.correct_answers)
        .map((question: any) => {
          const correctKey = Object.entries(question.correct_answers).find(
            ([_, value]) => value === "true"
          )?.[0];
  
          const answerKey = correctKey?.split("_correct")[0];
  
          return {
            ...question,
            correct_answer: answerKey || null,
          };
        });
  
      setQuestions(validQuestions);
    });
  }, [subject]);

  if (!questions.length) return <p className="question-menu-loading">Loading...</p>;

  const question = questions[current];
  const answers = Object.entries(question.answers)
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => ({ key, value }));


    const handleAnswer = (key: string) => {
      if (submitted) return; 

      setSelected(key);
    };

      const submit = () => {
        if (!selected) {
          setError("Please select an answer");
          return;
        }
      
        setError('');
        setSubmitted(true);
      };
      
      const next = () => {
        const isLast = current === questions.length - 1;
      
        const isCorrect = selected && question.correct_answer && selected === question.correct_answer;
      
        const finalScore = isCorrect ? score + 1 : score;
      
        if (isLast) {
          navigate("/result", {
            state: {
              score: finalScore,
              total: questions.length,
              subject: subject,
            },
          });
        } else {
          setScore(finalScore);
          setCurrent((prev) => prev + 1);
          setSelected(null);
          setSubmitted(false);
        }
      };

      const variantIcons =[aIcon, bIcon, cIcon, dIcon] ;
      const categories = [
        { name: "HTML", icon: htmlIcon },
        { name: "React", icon: reactlIcon },
        { name: "NodeJs", icon: nodeIcon },
        { name: "VueJS", icon: vueIcon },
      ];
      const currentCategory = categories.find(cat => cat.name === subject);

  return (
    <>
    <div className="question-menu-header">
    {currentCategory && (
        <div className="question-menu-header-title">
          <img src={currentCategory.icon} alt={currentCategory.name} className="category-icon" />
          <h2>{currentCategory.name}</h2>
        </div>
    )}
    <ThemeSwitch/>
    </div>
    <div className="question-menu">
     <div className="question-menu-left"> 
      <i>Question {current + 1} of {questions.length}</i>
      <h3>{question.question}</h3>
     </div> 
     <div className="question-menu-right">
        {answers.map((ans, index) => (
          <Button
          key={ans.key}
          text={ans.value || ''}
          icon={variantIcons[index]}
          variant="white"
          onClick={() => handleAnswer(ans.key)}
          className={`${
            submitted
              ? ans.key === question.correct_answer
                ? "question-menu-right-correct"
                : ans.key === selected
                ? "question-menu-right-incorrect"
                : "question-menu-right-focus"
              : selected === ans.key
              ? "question-menu-right-selected"
              : "question-menu-right-focus"
          }`}
          iconRight={
            submitted
              ? ans.key === question.correct_answer
                ? trueIcon
                : ans.key === selected
                ? falseIcon
                : undefined
              : undefined
          }
        />
            
        ))}

          <Button
            onClick={submitted ? next : submit}
            text={submitted ? "Next Question" : "Submit Answer"}
            variant="purple"
          />
          
       {error && (
         <div className="question-menu-right-error">
           <img src={falseIcon} alt="error-icon" />
           <p>{error}</p>
         </div>
       )}
      </div>
    </div>
    </>
  );
}

export default Quiz