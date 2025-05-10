import { useLocation, useNavigate } from "react-router-dom";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import htmlIcon from "../../assets/html.svg";
import reactlIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/nodejs.svg";
import vueIcon from "../../assets/vuejs.svg";
import Button from "../button/button";
import "./score.scss"


const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score=0, total=0, subject = "" } = location.state || {};

  const categories = [
    { name: "HTML", icon: htmlIcon },
    { name: "React", icon: reactlIcon },
    { name: "NodeJs", icon: nodeIcon },
    { name: "VueJS", icon: vueIcon },
  ];
  const currentCategory = categories.find(cat => cat.name === subject);

  return (
    <>
      <div className="score-menu-header">
      {currentCategory && (
        <div className="score-menu-header-title">
          <img src={currentCategory.icon} alt={currentCategory.name} className="category-icon" />
          <h2>{currentCategory.name}</h2>
        </div>
      )}
      <ThemeSwitch/>
      </div>
      <div className="score-menu">
        <div className="score-menu-left">
         <h1>Quiz completed</h1>
         <h1>You scored...</h1>
        </div>

        <div className="score-menu-right">
        <div className="score-menu-right-result">
        {currentCategory && (
        <div className="score-menu-header-title">
          <img src={currentCategory.icon} alt={currentCategory.name} className="category-icon" />
          <h2>{currentCategory.name}</h2>
        </div>
         )}
         <h1>{score}</h1>
         <p>out of {total}</p>
        </div> 
       
        <Button 
        text="Play Again"
        onClick={() => navigate("/")}
        variant="purple"
        />
        </div>  
      </div>
    </>  
  );
}

export default Score
