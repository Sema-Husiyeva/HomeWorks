import classNames from 'classnames'
import type  { FC } from 'react'
import './button.scss'

interface IButton {
    text: string;
    type?: 'button' | 'submit';
    onClick: () => void;
    isActive?: boolean;
    variant?: string;
    icon?: string;
    className?: string;
    iconRight?: string;
}

const Button: FC<IButton> = ({text='',type='button', onClick, isActive=false, variant='white', icon, className = '', iconRight}) => {
  return (
      <button 
      onClick={onClick} 
      type={type} 
      disabled={isActive} 
      className={classNames('btn', className, {
        'btn-white': variant === 'white',
        'btn-purple': variant === 'purple',
      })}>
      {icon && <img src={icon} alt={text} className='category-icon'  />}
      {text}
      {iconRight && <img src={iconRight} alt="status-icon" className="status-icon" />}
      </button>
  )
}

export default Button