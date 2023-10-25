import logo from './logo_hbnb.jpg'
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} style={{ width: 200, height: 200} } alt=''/>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' />
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' />
        <button>Ok</button>
      </div>
      <div className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>

  )
}
export default App;
