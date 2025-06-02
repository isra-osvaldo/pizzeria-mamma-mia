
const ButtonNavbar = ({icon, text}) => {
  return (
    <button className="btn">
      <span>{ icon }</span> 
      <span>{ text }</span>
    </button>
  )
}

export default ButtonNavbar