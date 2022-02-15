// import fetches, Truncheons function
// import { applicationState } from "./dataAccess.js";
import { fetchPlayers } from "./player/PlayerProvider.js";
import { fetchScores } from "./score/ScoreProvider.js";
import { gameTeamOptions } from "./team/TeamDropdown.js";
import { fetchTeams } from "./team/TeamProvider.js";

const mainContainer = document.querySelector("#container")

const renderAll = () => {
//invokes fetches
    const fetchArray = [ fetchScores(), fetchTeams(), fetchPlayers() ]
    return Promise.all(fetchArray)
            .then(() => {
                // renders html
                // test with just raw applicationState
                // mainContainer.innerHTML = JSON.stringify(applicationState)
                mainContainer.innerHTML = gameTeamOptions()
            })
}

//render html
renderAll()

// eventListener to re-render html on state change
document.addEventListener("stateChanged", event => {
    renderAllHTML()
})