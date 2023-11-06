import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import ReviewCard from "./Reviews/ReviewCard";
import PageSelector from "./Reviews/PageSelector";
import { NextRouter } from "next/router";
import Loading from "./Loading";
import OptionSelector from "./Reviews/OptionSelector";
import useLoadReviews, { ReviewsOnPage } from "@/lib/hooks/useAxiosReview";
import { useRecoilState, useRecoilValue } from "recoil";
import { Reviews } from "@/lib/recoil/reviews";
import { User } from "@/lib/recoil/auth";
import useReviewCount from "@/lib/hooks/useAxiosCount";

interface ReviewData {
    page: number;
    query?: string;
}

export default function ReviewList(prop: {
    router: NextRouter;
}) {
    const LoadReviews = useLoadReviews();
    const [reviews, setReviews] = useRecoilState(Reviews);
    const user = useRecoilValue(User);
    const [count, loadCount] = useReviewCount();

    const [path, setPath] = useState<null|ReviewData>(null);

    const [limit, setLimit] = useState(1);
    const [sortType, setSortType] = useState(0);
    const [filterType, setFilterType] = useState(-1);

    const router = prop.router;

    useEffect(()=>{
        loadCount(filterType==0);
    }, [filterType])

    useEffect(()=>{
        if (!router || !router.isReady) return;

        var page = Number(router.query["page"]), query = undefined;
        switch (router.query["sort"]) {
            case undefined:
                setSortType(0);
                break;
            case "time":
                query = "Time_Stamp desc";
                setSortType(1);
                break;
            default:
                router.replace(`/review?page=${page ? page : 1}`);
        }

        setPath({ page: page ? page : 1, query: query });
    }, [router.query])

    useEffect(()=>{
        setReviews([]);
        if (path == null) return;
        
        if (!count) {
            setLimit(1);
            return;
        }

        var limit = Math.ceil(count / ReviewsOnPage);
        setLimit(limit);
        (async () =>{
            if (path.page < 1 || limit < path.page) {
                return router.push('/review?page=1');
            }
           LoadReviews(path.page, !filterType, path.query);
        })()
    }, [path, count])

    const PageSelectorHandle = (e: number) => {
        var sort = router.query["sort"];
        router.push(`/review?${sort ? `sort=${sort}&`:``}page=${e}`);
    }
    const OptionSelectorHandle = (url: string, e: number) => {
        router.push(url);
        setSortType(e);
    }
    return (
        <>
        <Wrapper>
            <Top>
                <Title>REVIEWS</Title>
                <OptionSelector router={router}>
                    {[
                        sortType, [
                            ["Sort by likes", e=>OptionSelectorHandle("/review", e)],
                            ["Sort by creation time", e=>OptionSelectorHandle("/review?sort=time", e)]
                        ]
                    ]}
                    {user && [
                        filterType, [
                            ["Related to me", ()=>{
                                setFilterType(filterType ? 0 : -1);
                                PageSelectorHandle(sortType);
                            }],
                        ]
                    ]}
                </OptionSelector>
            </Top>
            <Container> 
            {!reviews.length && <Loading/>}
            {reviews?.map((v) => (
                <ReviewCard key={`${v.id}#${v.timestamp}`} data={v}/>
            ))}
            </Container>
            {path && <PageSelector page={path.page} limit={limit} handler={PageSelectorHandle}/>}
        </Wrapper>
        </>
    );
}


const Wrapper = styled.div`
    width: 100%;
    --padding: 40px;
    padding: 0 var(--padding) var(--padding) var(--padding);
    
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;

    @media screen and (max-width: 500px) {
        --padding: calc(40 * 100vw / 500);
    }
    position: relative;
    animation: move 1s 1, fadeIn 1s 1;
`

const Top = styled.div`
    width: 100%;
    display: flex;
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

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`