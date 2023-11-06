import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AccessToken } from "../recoil/auth";

export default function useReviewCount(): [number, (relatedMe: boolean)=>void] {
    const [count, setCount] = useState(0);
    const access_token = useRecoilValue(AccessToken);

    const loadCount = (relatedMe: boolean) => {
        axios.get("/reviews/state/count", {
            headers: (relatedMe ? {
                Authorization: `Bearer ${access_token}`
            }: undefined)
        }).then(res=>{
            setCount(res.data.count);
        }).catch(()=>{})
    }

    return [count, loadCount];
}