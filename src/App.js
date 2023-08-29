import { useEffect, useState } from "react";

function App() {

  const [ listatarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "" } );

  function AddTarefa()
  {
    if( tarefa.texto !== "" ) {
      setListaTarefas([...listatarefas, tarefa ]);
    }
  }
  
  function excluirTarefa( id )
  {
    const novaLista = listatarefas.filter( ( tarefa ) => tarefa.id !== id);
    setListaTarefas( novaLista );
  }

  useEffect( () => {
    setTarefa( { id: "" , texto: "" } );
  }, [ listatarefas ] )

  return (
    <>
      <header>
          <h1>React DO</h1>
      </header>
      <div>
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value } ) }/>
          <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listatarefas.map( (item, index ) => (
            <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id) } >Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
