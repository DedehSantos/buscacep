import {FiSearch} from 'react-icons/fi';
import './style.css';


function App() {
  return (
     <div className='container'>

      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
        <input type="text"
        placeholder = "Digite seu CEP"
        
        />

        <button className="buttonSearch">
         <FiSearch size={25} color='#fff'/>
        </button>
      </div>
   
   <main className='main'>
    <h2>CEP: 55258452</h2>

    <span> Rua teste algum  </span>
    <span> Complemento: Alguns completo  </span>
    <span> Vila Rosa</span>
    <span> Campina Gramde - PB</span>

   </main>



     </div>

   
  );
}

export default App;
