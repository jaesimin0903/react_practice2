import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Contents from './components/Contents'
import Introduction from './components/Introduction'
import Project from './components/Project'

function App() {
  return (
    <div className="App">
      <div className="container py-4">
        <Header />
        <Contents />
        <Introduction />
        <Project />
      </div>
    </div>
  );
}

export default App;
