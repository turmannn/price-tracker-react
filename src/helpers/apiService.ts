import axios from "axios";

interface props {
    url: string;
    method?: string;
    data?: any
}
export async function apiService({method='GET', ...props}: props) {

    let params = !['PUT', 'POST', 'DELETE', 'PATCH'].includes(method) ? props.data : null;

    const res = await axios.request({
        url: props.url,
        method: method,
        // headers: {'X-Requested-With': 'XMLHttpRequest'},
        headers: {'Content-Type': 'application/json'},
        ...( params ? {params} : {data: props.data} ),
        timeout: 0,

    })

    return res;
}
