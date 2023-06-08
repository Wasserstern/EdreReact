import {useState, useEffect} from "react"
import './Page.css';


function Page({text}){
    return(
        <div className="Page">{text}</div>
    )
}

export default Page;