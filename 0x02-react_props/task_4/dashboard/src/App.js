
import './App.css'
import { Notifications } from './Notifications';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Login } from './Login/Login';
import CourseList from './CourseList/CourseList';
function App() {
  let isLoggedIn = true;
  let decide = () => {
    if (isLoggedIn) {
      return <CourseList />
    }
    else {
      return <Login />
    }
  }
  return (
    <>
        <Notifications />
        <div className='App-body'>
        <Header />
        {decide()}
        <Footer />
        </div>
    </>
  )
}
export default App;
