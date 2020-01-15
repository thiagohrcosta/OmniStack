import React, { useState } from 'react';

// Componente
    /* O componente é alguma função que retorna conteúdo 
    *  html. O App() abaixo é um componente. Ou seja, é um
    *  bloco isolado de HTML, CSS e JS, o qual não interfere no 
    *  restante da aplicação
    */
// Estado
    /*  É basicamente
    */
  
// Propriedade
    /* Sempre que se usa HTML se usa propriedades, que são os atributos
    *  tais como <Header title="Dashboard" />
    *  São desta forma, informações que um componente "PAI" passa para o 
    *  componente filho.
    */


function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);

  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
