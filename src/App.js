import './App.css';
import Todo from './todo/Todo';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Todo />
      </ThemeProvider>
    </div>
  );
}

export default App;
