import { useState } from 'react';
import './App.css'
import Blogs from './components/Header/Blogs/Blogs';
import Bookmarks from './components/Header/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setbookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log("boook M. Add ShadowRoot.");
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App
