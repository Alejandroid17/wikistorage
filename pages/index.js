import Head from 'next/head';

import {globalStyles} from './../styles/globalStyles'

import MainNavigation from "../components/MainNavigation";
import WikiLibrary from "../components/WikiLibrary";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import firebaseClient from "../clients/firebase";

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
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <title>WikiStorage</title>
            </Head>
            <MainNavigation onSearch={onSearch}/>
            <main>
                <WikiLibrary wikiList={list} isLoading={isLoading}/>
            </main>
            <Footer/>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
