import { useDispatch , useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { toggleTheme } from '../../store/features/themeSlice';
import "./themeSwitch.css"

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <label className="theme-toggle">
      <input type="checkbox" onChange={handleToggle} checked={mode === "dark"} />
      <span className="slider">
        <span className="icon sun">☀️</span>
        <span className="icon moon">🌙</span>
      </span>
    </label>
  );
};

export default ThemeSwitch;