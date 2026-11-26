import './Button.css'

function Button({ className = '', type = 'button', ...props }) {
  return <button type={type} className={`button ${className}`} {...props} />
}

export default Button
