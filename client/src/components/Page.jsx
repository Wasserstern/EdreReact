import {useState, useEffect} from "react"
import './Page.css';


function Page({text}){
    return(
        <div className="Page">
            <p className="TextBox">{text}</p>
        </div>
    )
}

export default Page;