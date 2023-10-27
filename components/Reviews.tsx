import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import { GetReviewOnPage, GetReviewsCount, Review, ReviewOnPage } from "@/api/review/get";
import ReviewCard from "./Reviews/ReviewCard";
import PageSelector from "./Reviews/PageSelector";
import { NextRouter } from "next/router";
import Loading from "./Loading";

interface ReviewData {
    page: number;
    query?: string;
}

export default function Reviews(prop: {
    router: NextRouter;
}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [path, setPath] = useState<null|ReviewData>(null);
    const [limit, setLimit] = useState(1);

    const router = prop.router;
    useEffect(()=>{
        if (!router || !router.isReady) return;

        var page = Number(router.query["page"]), query = undefined;
        switch (router.query["sort"]) {
            case "time":
                query = "Time_Stamp desc";
                break;
            case undefined:
                break;
            default:
                router.replace(`/review?page=${page ? page : 1}`);
        }

        setPath({ page: page ? page : 1, query: query });
    }, [router.query])

    useEffect(()=>{
        setReviews([]);
        if (path == null) return;
        
        GetReviewsCount().then(async res=>{
            var limit = Math.ceil(res.count / ReviewOnPage);
            setLimit(limit);
            if (path.page < 1 || limit < path.page) return router.push('/review?page=1');

            var reviews = await GetReviewOnPage(path.page, path.query).catch(()=>{});
            if (!reviews) return router.push('/review?page=1');

            setReviews(reviews);
        }).catch(()=>{
            setLimit(1)
        });
    }, [path])

    const handler = (e: number) => {
        var sort = router.query["sort"];
        router.push(`/review?${sort ? `sort=${sort}&`:``}page=${e}`);
    }
    return (
        <>
        <Wrapper>
            <Title>REVIEWS</Title>
            <Container> 
            {reviews.length ? "" : <Loading/>}
            {reviews?.map((v) => (
                <ReviewCard key={`${v.id}#${v.timestamp}`} data={v} />
            ))}
            </Container>
            {path ? <PageSelector page={path.page} limit={limit} handler={handler}/>:""}
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 90%;
    
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;

    padding: 5px 0;
    @media screen and (max-width: 500px) {
        padding: calc(5 * 100vw / 500) 0;
    }
    position: relative;
    animation: move 1s 1, fadeIn 1s 1;
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