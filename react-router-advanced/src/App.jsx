import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
// import ProfileDetails from './pages/ProfileDetails ';
// import ProfileSettings from './pages/ProfileSettings';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            {/* <Link to="/about">About</Link>  */}
            <Link to="/Profile">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <Routes>
            {/* Blog listing page */}
            <Route path="/blog" element={<Blog />} />

            {/* Dynamic blog post route */}
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* <Route path="/" element ={<Home />} />
            <Route path="/about" element={<About />} /> */}
            <Route path="/profile/*" element={<Profile />} />
            {/* <Route path= "details" element={<ProfileDetails />} />
            <Route path= "settings" element={<ProfileSettings  />} /> */}
            {/* <Route path= "*" element={<NotFound />} /> */}
          </Routes>
        </Router>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
