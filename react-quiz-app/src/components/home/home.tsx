import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import htmlIcon from "../../assets/html.svg";
import reactlIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/nodejs.svg";
import vueIcon from "../../assets/vuejs.svg";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import "./home.scss"


const Home = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "HTML", icon: htmlIcon },
    { name: "React", icon: reactlIcon },
    { name: "NodeJs", icon: nodeIcon },
    { name: "VueJS", icon: vueIcon },
  ];

  return (
    <>
    <div className="start-menu-theme">
    <ThemeSwitch/>
    </div>
    <div className="start-menu">
      <div className="start-menu-left">
        <h1>Welcome to the</h1>
        <h1>Frontend Quiz!</h1>
        <i>Pick a subject to get started.</i>
      </div>
      <div className="start-menu-right">
      {categories.map((category) => (
        <Button
          key={category.name}
          text={category.name}
          icon={category.icon}
          onClick={() => navigate(`/quiz/${category.name}`)}
          className="start-menu-right-btn"
          variant="white"
        />
      ))}
      </div>
    </div>
    </>
  );
}

export default Home