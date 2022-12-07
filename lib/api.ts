const fetchapi = async (query: String, hostname?: String) => {
    const url = hostname ? `${hostname.includes('localhost') ? 'http': 'https'}://${hostname}/api/${query}` : `/api/${query}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default fetchapi;