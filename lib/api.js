const fetchapi = async (query) => {
    const res = await fetch(`/api/${query}`);
    const data = await res.json();
    return data;
}

export default fetchapi;