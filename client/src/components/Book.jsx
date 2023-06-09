
import {useState, useEffect} from "react"
import './Book.css';
import Page from "./Page";

function Book({story, currentPage, showMap}){

    let chapter = story.chapters;
    console.log(showMap)

    return(
        
        <div className="Book">
            <Page text={chapter[0].text} pageNumber={currentPage} showMap={showMap}></Page>
            <Page text={chapter[0].text} pageNumber={currentPage +1} showMap={showMap}></Page>      
        </div>

    )
}

export default Book;