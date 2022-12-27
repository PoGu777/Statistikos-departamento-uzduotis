
import './App.css';
import Info from './components/Info_box.js'
import Meet_info from './components/Meet_info';
import Refer from './components/Refer';
import Plan from './components/Plan';
import Header from './components/Header';
import Foto from './components/Foto';

function App() {
  return (
    <div className="App">
      <div className='header-position'>
        <Header />
      </div>
      <div className='info_position'>
        <div className='info-background'></div>
        <Info />
      </div>
      <div className='body'>
        <div className='meet_info_position'>
          <Meet_info />
        </div>
        <div className='refer_position'>
          <Refer />
        </div>
      </div>
      <div className='plan_position'>
        <Plan />
      </div>
      <div className='foto-place'>
        <Foto />
      </div>
    </div>
  );
}

export default App;
