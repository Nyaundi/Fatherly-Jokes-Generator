const btnEl = document.getElementById("btn");

const apiKey = "JOuDcgTg6a38ViSO2A6tYg==nUXIbkoW8FbMfgMG";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = await response.json();

    console.log(data);
}


btnEl.addEventListener('click', getJoke)