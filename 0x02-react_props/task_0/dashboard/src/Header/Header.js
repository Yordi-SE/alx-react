import './Header.css'
import logo from './logo_hbnb.jpg'
export default function Header() {
    return (
        <>
            <div className='App-header'>
            <img src={logo} style={{ width: 200, height: 200} } alt=''/>
            <h1>School dashboard</h1>
            </div>
        </>
    )
}
