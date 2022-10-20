const fetchapi = async (query, hostname) => {
    const url = hostname ? `${hostname}/api/${query}` : `/api/${query}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default fetchapi;