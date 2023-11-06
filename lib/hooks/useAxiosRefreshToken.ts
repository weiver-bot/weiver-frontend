import axios from "@/lib/axios";
import { useRecoilState } from "recoil";
import { AccessToken } from "@/lib/recoil/auth";

export default function useRefreshToken() {
    const [_, setAccessToken] = useRecoilState(AccessToken);

    const refreshToken = async () => {
        const res = await axios.post<{access_token: string}>("/auth/refresh", null, { withCredentials: true });
        
        if (res.status === 200 && res.data.access_token) {
          console.log(res.data.access_token);
          setAccessToken(res.data.access_token);
        }
    }

    return refreshToken;
}