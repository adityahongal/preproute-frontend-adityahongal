 import styles from './Button.module.css'
  
  function Button({ children, variant = 'primary', type = 'button', onClick, disabled }) {
    const className = `${styles.button} ${styles[variant]}`

    return (
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }

  export default Button