import { useEffect, useState } from "react";

function App() {

  const [ listatarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "" , status: "" } );

  function AddTarefa()
  {
    if( tarefa.texto !== "" ) {
      setListaTarefas([...listatarefas, tarefa ]);
    }
  }
  
  function excluirTarefa( id )
  {
    const novaLista = listatarefas.filter( ( tarefa ) => tarefa.id !== id );
    setListaTarefas( novaLista );
  }

  function statusTarefa( id, status )
  {
    const index = listatarefas.findIndex( ( tarefa ) => tarefa.id === id );
    listatarefas[index].status = !status;
    setListaTarefas( [...listatarefas ] );
  }

  useEffect( () => {
    setTarefa( { id: "" , texto: "" , status: "" } );
  }, [ listatarefas ] )

  return (
    <>
      <header>
          <h1>React DO</h1>
      </header>
      <div>
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false } ) }/>
          <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listatarefas.map( (item, index ) => (
            <li key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluída' : 'Não Concluída' }</button><button onClick={ () => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;