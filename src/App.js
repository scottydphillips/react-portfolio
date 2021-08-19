import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Homepage from "./components/homepage"
import Footer from './components/footer'
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <Container />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
