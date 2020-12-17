
import './App.css';
import {Header} from "./components/Header"
import {Balance} from "./components/Balance"
import {IncomeExpenses} from "./components/IncomeExpenses"
import {TransactionList} from "./components/TransactionList.jsx"
import {AddTransaction} from "./components/AddTransaction"
import {GlobalProvider} from "./context/GlobalState"
function App() {
  console.log("APP js");
  return (
    <GlobalProvider >
      <Header/>
      <div className="main-container">
      
      <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <AddTransaction/>
        </div>
        <TransactionList/>
      </div>
    </GlobalProvider>
  );
}

export default App;
