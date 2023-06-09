import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Book from './components/Book';
import storyTest1 from './data/storyTest1';
import {useCookies} from 'react-cookie'

function App() {

  const [story, setStory] = useState(storyTest1)
  const [currentPage, setCurrentPage] = useState(0);
  const [cookies, setCookie] = useCookies(['unlockedChapters'])


  let showMap = false;
  
  if(currentPage == 0){
    // Activate map 
    showMap = true;
  }
  else{
    // Activate normal pages
    showMap = false;
  }


  
  
  function turnPageLeft(){
    console.log("Trying page turn left");
    if(currentPage > 0){
      setCurrentPage(currentPage -1);
    }
  }

  function turnPageRight(){
    console.log("Trying page turn right");
    if(currentPage < story.maxPage){
      setCurrentPage(currentPage +1);
    }
  }

  function setUnlockedChapters(index, isUnlocked){
    let currentChapters = cookies.unlockedChapters;
    currentChapters[index] = isUnlocked;
    setCookie('unlockedChapters', currentChapters, {path: '/'} );
  }

  return (
    <div className="App">
      <div className="Background"></div>
      <div className="ButtonContainer">
        <div onClick={turnPageLeft} id="ButtonTurnLeft" className="ButtonAbsolute"></div>
        <div className="Filler"></div>
        <div onClick={turnPageRight} id="ButtonTurnRight" className="ButtonAbsolute"></div>
      </div>

      <Book story={story} currentPage={currentPage} showMap={showMap}></Book>
    </div>
  );
} 

export default App;
