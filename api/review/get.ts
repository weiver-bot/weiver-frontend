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

export async function GetReviewReview() {
    const res = await axios.get<Review[]>(process.env.API_URL + "/reviews");
    return res.data;
}

export async function GetReviewPart(from: number) {
    const res = await axios.get<Review[]>(process.env.API_URL + `/reviews?from=${from}`);
    return res.data;
}