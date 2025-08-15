import http from 'k6/http';

export function digital_health() {
    const url = 'https://pentest-academymoph.one.th/api/v1/courses/digital-health';

    const res = http.get(url);

    //console.log(res.body); // Log response body

    return res; // Return response
}
