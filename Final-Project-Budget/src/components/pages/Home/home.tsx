import { useNavigate } from 'react-router';
import { useState } from 'react';
import Banner from '../../common/Banner/banner';
import Button from '../../UI/Button/button';
import Slider from '../../UI/Slider/slider';
import bannerImg from '../../../assets/images/slogan.png';
import startActivityIcon from '../../../assets/svg/home-start-activity.svg';
import startWalletIcon from '../../../assets/svg/home-start-wallet.svg';
import startPaperIcon from '../../../assets/svg/home-start-paper.svg';
import startLineIcon from '../../../assets/svg/home-start-line.svg';
import budgetVideo from '../../../assets/videos/budget-video.mp4';
import './home.scss';


const Home = () => {
   const navigate = useNavigate();
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
      setIsMonthly(!isMonthly);
    };
  return (
    <section className='home-section'>
      <Banner title='Slogan' description='Take control of your finances with ease. Track your spending, set smart goals, and save more every day. Budgeting has never been this simple.' image={bannerImg}/>

      <div className='home-section-start'>
        <h1 className='home-section-start-title'>How to start</h1>
        <div className='home-section-start-icons'>
          <div><img src={startActivityIcon} alt="start-activity-icon" /></div>
          <img src={startLineIcon} alt="start-line-icon" />
          <div><img src={startWalletIcon} alt="start-wallet-icon" /></div>
          <img src={startLineIcon} alt="start-line-icon" />
          <div><img src={startPaperIcon} alt="start-paper-icon" /></div>
        </div>
        <div className='home-section-start-text'>
          <p>Register with email or phone number.</p>
          <p>He creates his initial account to record his transactions.</p>
          <p>You can add transactions and track your account.</p>
        </div>

       <div className='home-section-start-video'>
        <video src={budgetVideo} controls autoPlay muted loop />
       </div>

        <Slider/>
      </div>

      <section className='home-section-subscription'>
        <h1 className='home-section-subscription-title'>Subscription Plans</h1>
        <p className='home-section-subscription-text'>Choose the best plan for your business.</p>

        <div className='home-section-subscription-switch'>
          <p className='home-section-subscription-switch-name'>Yearly</p>
          <label>
           <input type="checkbox" checked={isMonthly} onChange={handleToggle} />
             <span className='slider'></span>
           </label>
           <p className='home-section-subscription-switch-name'>Monthly</p>
        </div>

        <div className='home-section-subscription-cards'>
            <div className='home-section-subscription-card left'>
              <h2>Basic plan</h2>
              <h1>{isMonthly ? "$3/Month" : "$30/Year"}</h1>
              <p>Access to basic features</p>
              <p>Monthly budget tracking</p>
              <p>Cancel anytime</p>
              <Button text="Get Started" onClick={() => navigate('/payment') } className='subscription-banner-section-card-btn' variant="blue"/>
            </div>    

            <div className='home-section-subscription-card right'>
              <h2>Premium plan</h2>
              <h1>{isMonthly ? "$25/Month" : "$250/Year"}</h1>
              <p>Advanced analytics & insights</p>
              <p>Team collaboration tools</p>
              <p>Customizable budgeting tools</p>
            <Button text="Get Started" onClick={() => navigate('/payment')} className='subscription-banner-section-card-btn' variant="white"/>
        </div>    
        </div>
      </section>
    </section>
  );
};

export default Home
