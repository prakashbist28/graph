
import './App.css';
import Chart from './components/Chart';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Data from './components/Data';

function App() {

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className=' w-[5%]'>
        <Navbar />
      </div>
      <div className='w-[24%] '>
        <Profile />
      </div>
      <div className='w-[45%]'>
        <Chart />
      </div>
      <div className='w-[24%]'>
        <Data />
      </div>
    </div>

  );
}

export default App;
