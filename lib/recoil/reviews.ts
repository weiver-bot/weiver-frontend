import { atom } from "recoil";

export interface Review {
    id: number;
    title: string;
    score: number;
    content: string;
    likes: number;
    timestamp: Date;
    URL: string;
}

export const Reviews = atom<Review[]>({
  key: 'Reviews',
  default: []
})

