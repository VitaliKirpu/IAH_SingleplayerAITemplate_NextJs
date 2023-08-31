import {addLog, updatePlayerState, UpdatePlayerState} from "@/app/actions";
import { getPlayerState } from "./../service";


function aIRunner(dispatch) {
    const intervalId = setInterval(async function() {

        dispatch(addLog("AI Is Running..."));

        const result = await getPlayerState();
        dispatch(updatePlayerState(result.state));



    }, 2000);

    return intervalId;
}

export default aIRunner;