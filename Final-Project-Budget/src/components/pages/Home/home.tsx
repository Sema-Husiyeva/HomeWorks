import Banner from '../../common/Banner/banner';
import bannerImg from '../../../assets/images/slogan.png';
import './home.scss';

const Home = () => {
  return (
    <>
      <Banner title='Slogan' description='Take control of your finances with ease. Track your spending, set smart goals, and save more every day. Budgeting has never been this simple.' image={bannerImg}/>
    </>
  )
}

export default Home
