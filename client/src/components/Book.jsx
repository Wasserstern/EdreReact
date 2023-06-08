
import {useState, useEffect} from "react"
import './Book.css';
import Page from "./Page";

function Book({story}){

    let chapter = story.chapters;

    return(
        <div className="Book">
            <Page text={chapter[0].text}></Page>
            <Page text={chapter[0].text}></Page>
        </div>
    )
}

export default Book;