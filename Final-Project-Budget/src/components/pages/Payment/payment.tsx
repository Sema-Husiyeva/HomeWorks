import { useState } from 'react';
import { useNavigate } from 'react-router';
import Banner from '../../common/Banner/banner';
import Button from '../../UI/Button/button';
import bannerImg from '../../../assets/images/payment.png';
import CVCImg from '../../../assets/svg/cvc.svg';
import './payment.scss';
import { useSelector } from 'react-redux';

const Payment = () => {
  const navigate = useNavigate();
  const subscriptionPlan = useSelector((state: any) => state.auth.subscriptionPlan);
  const amount = subscriptionPlan?.amount || "0";
  const planType = subscriptionPlan?.planType || "Unknown";

  const numberAmount = parseFloat(amount.replace('$', ''));
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(numberAmount);
  const [promocodeError, setPromocodeError] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCVC] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvcError, setCvcError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');

  const handlePayment = () => {
  let valid = true;

  if (!/^[A-Za-z\s]+$/.test(cardName)) {
    setCardNameError('Card name cannot contain numbers');
    valid = false;
  } else {
    setCardNameError('');
  }

  if (!/^\d{16}$/.test(cardNumber)) {
    setCardNumberError('Card number must be exactly 16 digits');
    valid = false;
  } else {
    setCardNumberError('');
  }

  if (!(+month >= 1 && +month <= 12)) {
  setMonthError('Month must be between 01 and 12');
  valid = false;
  } else {
  setMonthError('');
  }

  if (!(+year >= 25)) {
   setYearError('Year must be 25 or greater');
   valid = false;
  } else {
   setYearError('');
  }

  if (!/^\d{3}$/.test(cvc)) {
    setCvcError('CVC must be exactly 3 digits');
    valid = false;
  } else {
    setCvcError('');
  }

  if (valid) {
    navigate('./successfulPayment');
  }
 };

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome20') {
      const discountAmount = numberAmount * 0.2;
      setDiscount(discountAmount);
      setTotalAmount(numberAmount - discountAmount);
      setPromocodeError('');
    } else {
      setDiscount(0);
      setTotalAmount(numberAmount);
      setPromocodeError('Invalid promo code!');
    }
    setPromoCode('');
  }
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
          <input value={cardName} onChange={(e) => setCardName(e.target.value)} type="text" />
          {cardNameError && <p className="payment-section-left-error">{cardNameError}</p>}
         </div>
         <div className='payment-section-left-input'>
          <label htmlFor="number">Card Number</label>
          <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} type="number" />
          {cardNumberError && <p className="payment-section-left-error">{cardNumberError}</p>}
         </div>

         <div>
          <div className='payment-section-left-label'>
            <p>Expiration</p>
            <div className='payment-section-left-label-cvc'>
              <p>CVC</p> 
              <img src={CVCImg} alt="cvc" />
            </div>
           </div>
          <div className='payment-section-left-expiration'>
            <input value={month} onChange={(e) => setMonth(e.target.value)} type="number" />
            <span>/</span>
            <input value={year} onChange={(e) => setYear(e.target.value)} type="number" />
            <input value={cvc} onChange={(e) => setCVC(e.target.value)} type="number" />
          </div>
          <div>
            {monthError && <p className="payment-section-left-error">{monthError}</p>}
            {yearError && <p className="payment-section-left-error">{yearError}</p>}
            {cvcError && <p className="payment-section-left-error">{cvcError}</p>}
          </div>
         </div>
         <br />
         <div className='payment-section-left-buttons'>
          <Button text={`Pay $${totalAmount.toFixed(2)}`} onClick={handlePayment}  variant='blue'/>
         </div>
        </div>

        <div className='payment-section-right'>
          <h3 className='payment-section-right-order'>Order</h3>

          <div className='payment-section-right-order'>
            <h3>Starter</h3>
            <h3>{amount}</h3>
          </div>

          <div className='payment-section-right-order-promo'>
            <div>
              <p>Promokod</p>
              <input type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromocodeError('');
              }} 
              placeholder='Enter promo code' 
              />
            </div>
            <Button text='Apply' onClick={handlePromoCode} variant='blue'/>
          </div>
          {promocodeError && <p>{promocodeError}</p>}
          
          <div className='payment-section-right-order'>
            <p>Time</p>
            <p>{planType}</p>
          </div>

          <div className='payment-section-right-order'>
            <h3>Total</h3>
            <h3>{`$${totalAmount.toFixed(2)}`}</h3>
          </div>
        </div>

        <div className='payment-section-right-responsive'>
          <h3 className='payment-section-right-order'>Order</h3>

          <div className='payment-section-right-order'>
            <h3>Starter</h3>
            <h3>{amount}</h3>
          </div>

          <div className='payment-section-right-order-promo'>
            <div>
              <p>Promokod</p>
              <input type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromocodeError('');
              }} 
              placeholder='Enter promo code' 
              />
            </div>
            <Button text='Apply' onClick={handlePromoCode} variant='blue'/>
          </div>
          {promocodeError && <p>{promocodeError}</p>}
          
          <div className='payment-section-right-order'>
            <p>Time</p>
            <p>{planType}</p>
          </div>

          <div className='payment-section-right-order'>
            <h3>Total</h3>
            <h3>{`$${totalAmount.toFixed(2)}`}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
