import axios from "axios";

export interface URLForm {
    invite: string;
    community: string;
}

export default async function GetURL() {
    const res = await axios.get<URLForm>(process.env.API_URL + "/url")
    return res.data
}