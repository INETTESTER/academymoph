import http from 'k6/http';

export function Landingpage() {
    const url = "https://pentest-academymoph.one.th/";
    const res = http.get(url);
    //console.log(res.body);
    return res
}
