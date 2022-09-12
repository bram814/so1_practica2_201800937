/* URL - Backend*/
const url_api = "http://localhost:5000";


/* ENDPOINT */
const url_getProcess    = url_api + "/proceso";
const url_getRam        = url_api + "/ram";

export async function getProcess(){
    return fetch(url_getProcess, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}


export async function getRam(){
    return fetch(url_getRam, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}
