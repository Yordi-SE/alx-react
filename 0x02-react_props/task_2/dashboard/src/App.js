
import './App.css'
import { Notifications } from './Notifications';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Login } from './Login/Login';
function App() {
  return (
    <>
        <Notifications />
        <div className='App-body'>
        <Header />
        <Login />
        <Footer />
        </div>
    </>
  )
}
export default App;
