const GradientText = ({ children, className, from = 'from-primary', to = 'to-secondary' }) => {
    return (
      <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
        {children}
      </span>
    );
  };
  
  export default GradientText;