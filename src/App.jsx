import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (title) => {
    // console.log(title);
    setBookmarks([...bookmarks, title]);
    if (bookmarks.includes(title)) {
      const remaining = bookmarks.filter((bookmark) => bookmark !== title);
      setBookmarks(remaining);
    }
  };
  console.log(bookmarks);
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] my-6 sm:my-12 font-exo">
      <Header></Header>
      <main className="flex gap-6 flex-col-reverse md:flex-row my-8">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
