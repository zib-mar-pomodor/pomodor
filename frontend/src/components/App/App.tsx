// import styled from 'styled-components'

// const Paragraph = styled.p`
//   color: red;
//   margin-top: -200px;
// `
import { Counter } from '../Counter/Counter';
import { Header } from '../Header/Header';
import './App.scss';

export const App = () => {

  return (
    <main className="App">
      <Header />
      <Counter />
    </main>
  )
}
