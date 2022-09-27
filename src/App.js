
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card';
import Navigation from './component/Navigation';
import Footer from './component/Contact';

function App() {
  return (
    <div className="App">
    <Navigation/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
