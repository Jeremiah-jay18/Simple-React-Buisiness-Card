import './App.css';
import About from './Components/About';
import Info from './Components/Info';
import Interests from './Components/Interests';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="wrapper">
      <div className="card">
    <Info/>
    <About/>
    <Interests/>
    <Footer/>
    </div>
    </div>
  );
}


export default App;
