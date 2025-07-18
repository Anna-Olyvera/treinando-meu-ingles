import RowRadioButtonsGroup from '../components/RowRadioButtonsGroup.jsx';
import '../styles/buildSentence.css';

export default function BuildSentence() {
    return(
        <div id="main" class="build">
            <h1>choose the level:</h1>

            {/* level selection */}
            <div class="BuildSentence-flex">
                <RowRadioButtonsGroup />
            </div>

            <div class="roulette">
                <h1>Spin to see the words you should use</h1>
                <button>Spin</button>
            </div>

            <div id="keywords"></div>

            <input type="text" placeholder="write here..."/>
            
            <button class="check">Check</button>
        </div>
    )
}