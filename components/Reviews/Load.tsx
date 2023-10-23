import { styled } from "styled-components";
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from "react";

export const DoLoadReview = atom({
    key: 'LoadReview',
    default: 1, 
});

export const IsReviewLoading = atom({
    key: 'ReviewLoading',
    default: false, 
});

export default function LoadReview() {
    const [load, doLoad] = useRecoilState(DoLoadReview);
    const isLoading = useRecoilValue(IsReviewLoading);

    useEffect(() => {
      function handleScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        if (scrollY + viewportHeight >= documentHeight && !isLoading) {
            doLoad(load + 1);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
        </>
    )
}
