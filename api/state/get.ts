import axios from "axios";

export interface StateForm {
    name: string;
    id: string;
    state: string;
}

export default async function GetState() {
    console.log(process.env.API_URL + "/state")
    const res = await axios.get<StateForm>(process.env.API_URL + "/state");
    return res.data;
}