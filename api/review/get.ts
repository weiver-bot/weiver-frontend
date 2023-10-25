import axios from "axios";

export interface Review {
    id: number;
    title: string;
    score: string;
    content: string;
    like: number;
    timestamp: string;
    url: string;
}

export async function GetReviewsCount() {
    const res = await axios.get<{ count: number }>(process.env.API_URL + `/reviews/count`);
    return res.data;
}

export async function GetReview(from: number, count: number, orderby: string = "") {
    const res = await axios.get<Review[]>(process.env.API_URL + `/reviews/list?from=${from}&count=${count}` + (orderby ? `&order=${orderby}` : ""));
    return res.data;
}

export const ReviewOnPage = (()=>{
    var r = process.env.REVIEW_ON_PAGE;
    if ( r == undefined ) {
        return 0
    }
    return +r
})()

export async function GetReviewOnPage(page: number, orderby: string = "") {
    return await GetReview(ReviewOnPage * (page - 1), ReviewOnPage, orderby);
}