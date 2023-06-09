import {useState, useEffect} from "react"
import './Page.css';


function Page({text, pageNumber, showMap}){

    let pageId = "NONE"
    if(showMap){
        pageId="PageMap"
    }

    return(
        <div id={pageId} className="Page">
            <p className="TextBox">{showMap ? "MAP HERE" :text}</p>
            <div className="Footer">{pageNumber}</div>
        </div>
    )
}

export default Page;