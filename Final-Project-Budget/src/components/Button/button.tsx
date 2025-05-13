import classNames from 'classnames'
import type  { FC } from 'react'
import './button.scss'

interface IButton {
    text: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
    isActive?: boolean;
    variant?: string;
    className?: string;
}

const Button: FC<IButton> = ({text='',type='button', onClick, isActive=false, variant='white', className = ''}) => {
  return (
      <button 
      onClick={onClick} 
      type={type} 
      disabled={isActive} 
      className={classNames('btn', className, {
        'btn-white': variant === 'white',
        'btn-green': variant === 'green',
      })}>
      {text}
      </button>
  )
}

export default Button