import axios from "@/lib/axios";
import { useEffect } from "react";
import { Info } from "@/lib/recoil/bot";
import { useRecoilState } from "recoil";


export default function useInfo() {
    const [info, setInfo] = useRecoilState(Info);
    
    useEffect(()=>{
        axios.get("/info").then(res=>{
            setInfo({
                name: res.data.name,
                id: `${res.data.name}#${res.data.discriminator}`,
                URL: res.data.URL,
            })
        }).catch(()=>{})
    }, [])

    return info
}