import RowRadioButtonsGroup from '../components/RowRadioButtonsGroup.jsx';
import '../styles/knowName.css';

export default function KnowName() {
    return(
        <div id="main" class="know">
            <div class="container-flex">
                <section>
                    <h1>choose the level:</h1>
                    {/* level selection */}
                    <div className='KnowName-grid'>
                        <RowRadioButtonsGroup />
                    </div>
                    <div class="roulette">
                        <h1>Spin to see the words you should use</h1>
                        <button>Spin</button>
                    </div>
                </section>
                <div id="drawn-image">
                    <img src="" alt="" />
                </div>
            </div>

            <input type="text" placeholder="write here..."/>

            <button class="check">Check</button>
        </div>
    )
}