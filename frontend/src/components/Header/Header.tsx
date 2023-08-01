// import styled from 'styled-components'

// const Paragraph = styled.p`
//   color: red;
//   margin-top: -200px;
// `
import './Header.scss';
import logo from '../../assets/pomodor_logo.png'
import userIcon from '../../assets/icons/user_icon.svg'

export const Header = () => {

  return (
    <header className="Header App__header">
      <a href="#" className="Header__logo">
        <img src={logo} className="Header__image" alt="Pomodor" />
      </a>

      <button
        type="button"
        className="btn"
      >
        <img src={userIcon} alt="Log in- icon" className="btn__icon" />
        Log in
      </button>
    </header>
  )
}
