/* URL - Backend*/
const url_api = "http://localhost:5000";


/* ENDPOINT */
const url_getRam    = url_api + "/ram";

export async function getRam(){
    return fetch(url_getRam, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}
