import {addLog, updatePlayerState, UpdatePlayerState} from "@/app/actions";
import { GetPlayerState } from "./../service";


function AIRunner(dispatch) {
    const intervalId = setInterval(async function() {

        dispatch(addLog("AI Is Running..."));

        const result = await GetPlayerState();
        dispatch(updatePlayerState(result.state));



    }, 2000);

    return intervalId;
}

export default AIRunner;