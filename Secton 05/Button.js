const Button = ({text, color, onClick}) => {
   
    const x= false

    return (
      <button style={x? {backgroundColor:color}:{}} 
      onClick = {onClick}>
        {text}
      </button>
    )
  }
  
  export default Button