import './App.css';
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import Provider from './Components/Context'


function App() {
  return (
    <div className="App"> 
    <Provider>
    
        <Header/>
        <AddTodo/>
        <Todos/>
    
    </Provider>
    </div>
  );
}

export default App;
