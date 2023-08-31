'use client'

import styles from './page.module.css'
import Logger from './logger/logger'
import Initializer from './initializer/initializer'
import StateRenderer from './staterenderer/staterenderer'
import coreState from './core/state';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const coreStateStore = createStore(coreState);

export default function Main() {

    return (
    <main className={styles.main}>

        <h1>IAH: INTERNET WAR NEXT.JS/REACT AI</h1>

        <Provider  store={coreStateStore}>
                <Initializer/>
                <StateRenderer/>
                <Logger/>
        </Provider>

    </main>
  )
}
