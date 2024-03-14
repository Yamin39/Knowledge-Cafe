import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
// react toast (Custom Alert)
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [countTime, setCountTime] = useState(0);
  const [readBtn, setReadBtn] = useState([]);

  // react toast (Custom Alert)
  const notify = () =>
    toast.warn("This blog is already marked as read", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleBookmark = (title) => {
    // console.log(title);
    setBookmarks([...bookmarks, title]);
    if (bookmarks.includes(title)) {
      const remaining = bookmarks.filter((bookmark) => bookmark !== title);
      setBookmarks(remaining);
    }
  };

  const handleCountTime = (readTime) => {
    if (readBtn.includes(readTime) === false) {
      setReadBtn([...readBtn, readTime]);
      setCountTime(countTime + readTime);
    } else {
      // alert("This blog is already marked as read");
      notify();
    }
  };

  // console.log(countTime);
  // console.log(readBtn);
  // console.log(bookmarks);
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] my-6 sm:my-12 font-exo">
      <Header></Header>
      <main className="flex gap-6 flex-col-reverse md:flex-row my-8">
        <Blogs handleBookmark={handleBookmark} handleCountTime={handleCountTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} countTime={countTime}></Bookmarks>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
