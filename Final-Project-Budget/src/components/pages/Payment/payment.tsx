import { useLocation } from 'react-router';
import bannerImg from '../../../assets/images/payment.png';
import Banner from '../../common/Banner/banner';
import Button from '../../UI/Button/button';

const Payment = () => {
  const location = useLocation();
  const { amount, planType } = location.state || { amount: '$0', planType: 'No Plan Selected' };
  return (
    <section>
      <Banner title='Payment page' description='Secure your access to premium features with a quick and easy payment. Choose the plan that fits your needs and take control of your finances today. Your journey to smarter budgeting starts here.' image={bannerImg}/>

      <div className='payment-section'>
        <div className='payment-section-left'>
         <div className='payment-section-left-input'>
            <label htmlFor="type">Payment Details</label>
            <select name="type" id='type'>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
            </select>
         </div>
         <div className='payment-section-left-input'>
          <label htmlFor="name">Card Name</label>
          <input type="text" />
         </div>
         <div className='payment-section-left-input'>
          <label htmlFor="number">Card Number</label>
          <input type="text" />
         </div>

         <div>
          <div className='payment-section-left-label'>
            <p>Expiration</p>
            <p>CVC</p>
          </div>
          <div className='payment-section-left-expiration'>
            <input type="text" />
            <span>/</span>
            <input type="text" />
            <input type="text" />
          </div>
         </div>

         <div className='payment-section-left-buttons'>
          <Button text='Cancel order'  variant='white'/>
          <Button text={`Pay ${amount}`}  variant='blue'/>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
