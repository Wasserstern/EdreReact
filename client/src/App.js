import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Book from './components/Book';
import storyTest1 from './data/storyTest1';

function App() {

  const [story, setStory] = useState(storyTest1)
  const [currentPage, setCurrentPage] = useState(0);
  
  if(currentPage == 0){
    // Activate map 
  }
  else{
    // Activate normal pages
  }
  
  function turnPageLeft(){
    if(currentPage > 0){
      setCurrentPage(currentPage -1);
    }
  }

  function turnPageRight(){
    if(currentPage < story.lastPage){
      setCurrentPage(currentPage +1);
    }
  }

  return (
    <div className="App">
      <div className="Background"></div>
      <Book story={story}></Book>
    </div>
  );
}

export default App;
