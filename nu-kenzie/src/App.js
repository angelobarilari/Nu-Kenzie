import './App.css';
import  {useState} from "react";
import Form from './Components/Form';
import List from './Components/List';
import Filters from './Components/Filter';
import TotalMoney from './Components/TotalMoney';

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário - Mês dezembro", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -100 },
    { description: "Conta de luz", type: "saída", value: -100 }
  ])

  return (
      <div id="main-content">
        <header className="app-header">
          <div>
            <span id="logoNu">Nu</span>
            <span id="logoKenzie"> Kenzie</span>
          </div> 
          <button>
            Início
          </button>
        </header>

        <div className="app-body">
            <div id="formArea">
              <Form listTransactions={listTransactions}
                    setListTransactions={setListTransactions} />
              <TotalMoney listTransactions={listTransactions}/>
            </div>

            <div id="transactionsArea">
              <Filters />
              <List listTransactions={listTransactions} />
            </div>
        </div>
      </div>
  );
}

export default App;
