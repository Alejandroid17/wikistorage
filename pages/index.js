
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import firebaseClient from "../clients/firebase";
import Footer from "../components/Footer/MainFooter/MainFooter";
import Head from '../components/Head/Head';
import MainHeader from '../components/Header/MainHeader/MainHeader';
import BaseMain from '../components/Main/BaseMain/BaseMain';
import WikiLibrary from "../components/WikiLibrary/WikiLibrary";
import { globalStyles } from './../styles/globalStyles';


export default function Home() {

    let client = null;
    const [wikiList, setWikiList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (isLoading) {
            client = new firebaseClient('wiki');
            client.fetchWikis((wikiList) => {
                setWikiList(wikiList);
                setIsLoading(false);
            });
        }
    }, [wikiList]);

    const onSearch = (event) => {
        setSearchValue(event.target.value);
    }

    const search = () => {
        return (searchValue.length > 2) ? wikiList.filter(item => item['hashtags'].find(hashtag => hashtag.includes(searchValue))) : wikiList;
    }

    const list = search();
    return (
        <>
            <Head />
            <MainHeader onSearch={onSearch} />
            <BaseMain>
                <WikiLibrary wikiList={list} isLoading={isLoading} />
            </BaseMain>
            <Footer />
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
