import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div id="main" class="home">
            
            <h1>Choose the activity you want to do</h1>

            <Link to="/build-sentence" class="card">
                <h2>Build the Sentence!</h2>
                <div class="linha"></div>
                <p>You must randomly select the words and write a sentence using all of them. Once you're done, click the verification button: the sentence will be sent to the assistant AI, which will check if it is correct or not.</p>
                <div class="overlay">
                    <img src={`${import.meta.env.BASE_URL}imgs/carbon--play-filled.svg`} alt="start play" />
                </div>
            </Link>

            <Link to="/know-the-name" class="card">
                <h2>Do You Know the Name?</h2>
                <div class="linha"></div>
                <p>You must randomly select the images and write what they show. Once you're done, click the verification button.</p>
                <div class="overlay">
                    <img src={`${import.meta.env.BASE_URL}imgs/carbon--play-filled.svg`} alt="start play" />
                </div>
            </Link>
        </div>
    )
}