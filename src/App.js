import './App.css';
import Todoapp from './components/Todoapp';

function App() {
  return (
    <div className="App">
        

        <Todoapp/>
        
        
        
        
        <footer class="info">
			    <p>Double-click to edit a todo</p>
			    <p>Written by <a href="http://twitter.com/lukeed05">Luke Edwards</a></p>
			    <p>Refactored by <a href="https://github.com/xorgy">Aaron Muir Hamilton</a></p>
			    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		    </footer>



    </div>
  );
}

export default App;
