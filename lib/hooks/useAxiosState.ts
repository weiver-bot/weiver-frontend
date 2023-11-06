import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { State } from "@/lib/recoil/bot";

export default function useReviewState() {
    const [state, setState] = useRecoilState(State);

    useEffect(()=>{
        axios.get("/reviews/state").then(res=>{
            setState({
                avg: res.data.avg,
                count: res.data.count
            })
        }).catch(()=>{})
    }, [])

    return state
}