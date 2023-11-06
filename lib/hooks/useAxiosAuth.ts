import { useRecoilValue } from "recoil";
import useRefreshToken from "./useAxiosRefreshToken";
import { AccessToken } from "../recoil/auth";
import { useEffect } from "react";
import { axiosAuth } from "../axios";

export const useAxiosAuth = () => {
    const refreshToken = useRefreshToken();
    const accessToken = useRecoilValue(AccessToken);
  
    useEffect(() => {
      const requestIntercept = axiosAuth.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
          return config;
        },
        (error) => Promise.reject(error)
      );
  
      const responseIntercept = axiosAuth.interceptors.response.use(
        (response) => {
          return response;
        },
        async (error) => {
          const prevRequest = error?.config;
          if (error?.response?.status === 401 && !prevRequest?.sent) {
            prevRequest.sent = true;
            await refreshToken();
            prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
            return axiosAuth(prevRequest);
          }
          return Promise.reject(error);
        }
      );
  
      return () => {
        axiosAuth.interceptors.request.eject(requestIntercept);
        axiosAuth.interceptors.response.eject(responseIntercept);
      };
    }, [accessToken, refreshToken]);
  
    return axiosAuth;
  };