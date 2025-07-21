import { Link } from 'react-router-dom';
import '../styles/projectHead.css';

export default function ProjectHead() {
    return(
        <header>
            <div>
                <img src={`/imgs/logo.ico`} alt="logo Climb Know" />
            </div>

            <div class="grid-button">
                <Link to="/about-project">About the project</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}