import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import { GetReviewOnPage, GetReviewsCount, Review, ReviewOnPage } from "@/api/review/get";
import ReviewCard from "./Reviews/ReviewCard";
import PageSelector from "./Reviews/PageSelector";
import { NextRouter, useRouter } from "next/router";
import Loading from "./Reviews/Loading";

interface PathData {
    page: number;
    order?: string;
}


export default function Reviews(prop: {
    router: NextRouter;
}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [path, setPath] = useState<null|PathData>(null);
    const [limit, setLimit] = useState(1);

    const router = prop.router;
    useEffect(()=>{
        if (!router || !router.isReady) return;
        var data: PathData = { page: 1 }
        switch (router.query["order"]) {
            case "time":
                data.order = "Time_Stamp desc";
        }
        var p = Number(router.query["page"]);
        data.page = p ? p : 1;
        setPath(data);
    }, [router.isReady])

    useEffect(()=>{
        setReviews([]);
        if (path == null) return;

        GetReviewsCount().then(async res=>{
            var limit = Math.ceil(res.count / ReviewOnPage);
            setLimit(limit);
            if (path.page < 1 || limit < path.page) return setPath({ page:1 });

            var reviews = await GetReviewOnPage(path.page, path.order).catch(()=>{});
            if (!reviews) return setPath({ page:1 });

            setReviews(reviews);
        }).catch(()=>{
            setLimit(1)
        });
        
        var order = router.query["order"];
        if (!router.query["page"] && !router.query["order"] && path.page == 1) router.push(`/`);
        else router.push(`/?${order ? `order=${order}&`:""}page=${path.page}`);
    }, [path])

    const handler = (e: number) => {
        setPath({
            page: e,
            order: path?.order
        });
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