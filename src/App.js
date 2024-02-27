import './App.css';
import Chart from './components/Blogs';
import Navbar from './components/Navbar';
import Profile from './components/Services';
import Data from './components/Contact';
import Home from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div className='flex flex-col '>
      <div className=' '>
        <Navbar />
      </div>
      <div id='Home' className=' '>
        <Home />
      </div>
      <div id='Services' className=' '>
        <Profile />
      </div>
      <div id='Blogs' className=''>
        <Chart />
      </div>
      <div id='Contact' className=''>
        <Data />
      </div>
      <Footer />
    </div>

  );
}

export default App;
