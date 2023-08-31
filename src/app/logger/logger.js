import styles from './logger.module.css'
import { useSelector} from 'react-redux';

var lastSeed = 0;
function LoggerRender()
{
    const systemInitialized = useSelector((state) => state.systemInitialized);

    const logData = useSelector((state) => {
        return   state.logData;
    });

    if (systemInitialized)
    {
        var result = [];

        for (let i = 0; i < logData.length; i++)
        {
            result.push(<div key={i}>{logData[i]}</div>);
        }

        return result;
    }
    else
    {
        return <div>System is not initialized...</div>;
    }

}

export default function Logger() {


  return (
    <main className={styles.main}>

        {LoggerRender()}

    </main>
  )
}