import { useRouter } from "next/router";

const fetchapi = async (query) => {
    const res = await fetch(`${'http://localhost:3000'}/api/${query}`);
    // const res = await fetch(`/api/${query}`);
    const data = await res.json();
    return data;
}

export default fetchapi;