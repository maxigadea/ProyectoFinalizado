import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel';
import styled from 'styled-components';


function App() {
  return (
    <Main>
      <Navbar />
      <Carrousel />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background: #fffff;
  font-family: 'Noto Sans Display', sans-serif;
`; 