import styles from './initializer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {initSystem, addLog} from './../actions';
import aiRunner from "@/app/core/ai/runner";


export default function Initializer() {

    const systemInitialized = useSelector((state) => state.systemInitialized);

    const dispatch = useDispatch();
    const initializeClick = () =>
    {
        dispatch(initSystem());
        dispatch(addLog("Initializing..."));

        setTimeout(()=> {

            dispatch(addLog("Starting AI..."));

            const intervalId = aiRunner(dispatch);

            return () => clearInterval(intervalId);

        },2000)
    };

    function InitializeButton() {
      return  <button onClick={initializeClick} className={ !systemInitialized ? "" : styles.hidden } type="submit" >Initialize System</button>
    }

    return (
    <main className={ styles.main} >

        {InitializeButton()}

    </main>
  )
}