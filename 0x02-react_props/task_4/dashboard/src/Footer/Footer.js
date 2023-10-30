import './Footer.css';
import { getFullYear } from '../utils';
import { getFooterCopy } from '../utils';
export default function Footer() {
    return (
        <>
            <div className='App-footer'>
            <p>
            Copyright {getFullYear()} - {getFooterCopy()}
            </p>
        </div>
        </>
    )
}