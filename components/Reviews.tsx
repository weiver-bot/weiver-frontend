import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import { GetReviewPart, Review } from "@/api/review/get";
import ReviewCard from "./Reviews/ReviewCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { DoLoadReview, IsReviewLoading } from "./Reviews/Load";

export default function Profile() {
    var loaded = 0;
    var [reviews, setReviews] = useState<Review[]>();

    const load = useRecoilValue(DoLoadReview);
    const [_, setIsLoading] = useRecoilState(IsReviewLoading);

    useEffect(() => {
        setIsLoading(true);
        GetReviewPart(loaded).then(res=>{
            if (reviews == undefined) {
                setReviews(res);
            } else {
                setReviews([...reviews, ...res])
            }
            loaded += res.length;
        }).catch(()=>{})
        setIsLoading(false);
      }, [load]);

    return (
        <>
        <Wrapper>
            <Title>REVIEWS</Title>
            <Container> 
            {reviews?.map((v) => (
                <ReviewCard data={v} />
            ))}
            </Container>
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 90%;
    
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;

    padding: 30px 0;
    @media screen and (max-width: 500px) {
        padding: calc(30 * 100vw / 500) 0;
    }
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.div`
    color: #FFFFFF;
    font-family: DM Sans;
    white-space: nowrap;
    
    font-size: 20pt;
    font-style: normal;
    font-weight: 600;
    
    @media screen and (max-width: 500px) {
        font-size: calc(20 * 100vw / 375);
    }
`