import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import { GetReviewOnPage, GetReviewsCount, Review, ReviewOnPage } from "@/api/review/get";
import ReviewCard from "./Reviews/ReviewCard";
import PageSelector from "./Reviews/PageSelector";
import { NextRouter, useRouter } from "next/router";

export default function Reviews(prop: {
    router: NextRouter;
}) {
    const [reviews, setReviews] = useState<Review[]>();
    const [page, setPage] = useState<null|number>(null);
    const [limit, setLimit] = useState(1);

    const router = prop.router;
    useEffect(()=>{
        if (!router || !router.isReady) return;
        var p = Number(router.query["page"]);
        setPage(p ? p : 1);
    }, [router])

    useEffect(()=>{
        setReviews([]);
        if (page == null) return;
        GetReviewsCount().then(async res=>{
            var limit = Math.ceil(res.count / ReviewOnPage);
            setLimit(limit);
            if (page < 1 || limit < page) return setPage(1);

            var reviews = await GetReviewOnPage(page).catch(()=>{});
            if (!reviews) return setPage(1);

            setReviews(reviews);
        }).catch(()=>{
            setLimit(1)
        });
        if (!router.query["page"] && page == 1) router.push(`/`);
        else router.push(`/?page=${page}`);
    }, [page])

    return (
        <>
        <Wrapper>
            <Title>REVIEWS</Title>
            <Container> 
            {reviews?.map((v) => (
                <ReviewCard key={`${v.id}#${v.timestamp}`} data={v} />
            ))}
            </Container>
            {page ? <PageSelector page={page} limit={limit} handler={setPage}/>:""}
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