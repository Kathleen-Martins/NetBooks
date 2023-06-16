import { useState } from 'react'
import JardimSecreto from './paginas/JardimSecreto'
import Princesinha from './paginas/Princesinha'
import GlobalStyle from './GlobalStyled'
import BookList from './paginas/Livros'


function App() {


  return (
    <>

      <GlobalStyle />
      <BookList />
      <JardimSecreto />
      <Princesinha />
    </>
  )
}

export default App
