
const apiKey = "<yourKey>";

export async function getPlayerState() {
    return await get("/v1/playerstate");
}



export async function get(requestName)
{
    try {
        const response = await fetch(requestName, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error in Get request:", error);
        throw error;
    }
}

export async function Post(requestName, payload) {
    return await fetch( requestName, {
        method: "POST",
        body: JSON.stringify({
            payload,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).catch((e) => console.log(e)).then((response) => {
        response.json().then(result => {
            return result;
        })});
}