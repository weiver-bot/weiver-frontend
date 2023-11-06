import axios from "@/lib/axios"
import { useRecoilState, useRecoilValue } from "recoil";
import { User } from "@/lib/recoil/auth";
import { Reviews, Review } from "@/lib/recoil/reviews";

export const ReviewsOnPage = (()=>{
    var r = process.env.REVIEW_ON_PAGE;
    if ( r == undefined ) {
        return 0
    }
    return +r
})()

export default function useLoadReviews() {
    const [_, setReviews] = useRecoilState(Reviews);
    
    const LoadReviews = async (
        page: number,
        orderby?: string,
    ) => {
        var url = process.env.API_URL + `/reviews/list?from=${(page - 1)*ReviewsOnPage}&count=${ReviewsOnPage}`
        if (orderby) {
            url += `&orderby=${orderby}`
        }
        const res = await axios.get<Review[]>(url);

        if (res.status === 200 && res.data) {
            setReviews(res.data);
        }
    }

    return LoadReviews
}