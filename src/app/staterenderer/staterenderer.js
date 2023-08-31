import styles from './staterenderer.module.css'
import { useSelector} from 'react-redux';

var lastSeed = 0;
function LoggerRender()
{
    const playerState = useSelector((state) => state.playerState);
    const systemInitialized = useSelector((state) => state.systemInitialized);

    var renderState;
    if (systemInitialized)
        renderState = <div>Player State: <b>{ playerState }</b></div>;


    return renderState;

}

export default function Staterenderer() {


  return (
    <main className={styles.main}>

        {LoggerRender()}

    </main>
  )
}