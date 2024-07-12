import RightArrowLogo from './Assets/RightArrowLogo.png'
import iconOne from './Assets/LAIconOne.png';

function button(props) {
  const { children, style, onClick, logo } = props;

  const defaultStyle = {
    backgroundColor: '#292967',
    border: '2px solid #292967',
    color: '#ffff',
    width: '185.49px',
    height: '54.16px',
    borderRadius: '50px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginLeft:'',
    marginBottom:''
  };
  const combinedStyle = style ? { ...defaultStyle, ...style } : defaultStyle;

  return (
    <button style={combinedStyle} onClick={onClick}> 
       {children}{logo && <img src={RightArrowLogo} alt="logo" style={{ marginLeft: '23px', height: '27px',width:'27px' }} />} </button>
  )
}

export default button