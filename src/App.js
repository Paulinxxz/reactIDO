import { useEffect, useState } from "react";
import Style from "./App.module.css"
import ImgConfig from "./Captura de tela 2023-08-30 103727.png"
import ImgClipe from "./Captura de tela 2023-08-30 114049.png"

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
      <input className={Style.inputdata} type="date"></input>
      <img className={Style.config} src={ImgConfig}/>
    </header>
      <h2>Checklist</h2>
    <div className={Style.divvazia}></div>
    <div className={Style.divconteudo}></div>
    <img className={Style.clipe} src={ImgClipe}/>
    <div>
        <input className={Style.inputadicionar} type="text" name="tarefa" placeholder="Digite sua Tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false } ) }/>
        <button className={Style.adicionar} onClick={AddTarefa}>+</button>
    </div>
    <div className={Style.divlista}>
        <ul>{listatarefas.map( (item, index ) => (
        <li key={index}>{item.texto} <button className={Style.concluido} onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? <i class="fa-solid fa-square-check fa-xl"></i> : <i class="fa-regular fa-square fa-xl"></i> }</button><button className={Style.lixo} onClick={ () => excluirTarefa(item.id) }><i class="fa-sharp fa-solid fa-trash fa-xl"></i></button></li> ))}
        </ul>
    </div>
    <footer className={Style.footer}></footer>
    </>
  );
}

export default App;


