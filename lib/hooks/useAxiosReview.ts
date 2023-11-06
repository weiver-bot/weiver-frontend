import axios from "@/lib/axios"
import { useRecoilState, useRecoilValue } from "recoil";
import { Reviews, Review } from "@/lib/recoil/reviews";
import { AccessToken } from "../recoil/auth";

export const ReviewsOnPage = (()=>{
    var r = process.env.REVIEW_ON_PAGE;
    if ( r == undefined ) {
        return 0
    }
    return +r
})()

export default function useLoadReviews() {
    const [_, setReviews] = useRecoilState(Reviews);
    const access_token = useRecoilValue(AccessToken);
    
    const LoadReviews = async (
        page: number,
        relatedMe: boolean,
        orderby?: string,
    ) => {
        var url = process.env.API_URL + `/reviews/list?from=${(page - 1)*ReviewsOnPage}&count=${ReviewsOnPage}`
        if (orderby) {
            url += `&orderby=${orderby}`
        }
        const res = await axios.get<Review[]>(url, {
            headers: (relatedMe ? {
                Authorization: `Bearer ${access_token}`
            }: undefined)
        });

        if (res.status === 200 && res.data) {
            setReviews(res.data);
        }
    }

    return LoadReviews
}