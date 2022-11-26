const fetchapi = async (query: String, hostname?: String) => {
    const url = hostname ? `http://${hostname}/api/${query}` : `/api/${query}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default fetchapi;