import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import RecipeCards from './components/RecipeCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipeCards></RecipeCards>
        <Form className="flex-form"></Form>
      </header>
    </div>
  );
}

export default App;
