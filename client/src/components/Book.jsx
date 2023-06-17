
import {useState, useEffect, useRef} from "react"
import './Book.css';
import Page from "./Page";
import OverflowCheckPage from "./OverflowCheckPage";

function Book({story, currentPage, currentChapter, showMap}){



    return(

        <div className="Book">
            <div className="Container">
                <Page text={story.chapters[currentChapter].text} pageNumber={currentPage} showMap={showMap}></Page>
                <Page text={story.chapters[currentChapter].text} pageNumber={currentPage +1} showMap={showMap}></Page>  
            </div>
        </div>

    )
}

export default Book;