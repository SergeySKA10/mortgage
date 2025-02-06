import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Spinner from '../components/ui/Spinner/Spinner';
import PageLayout from "../pages/PageLayout";
// import { useGetVideoDetailes } from "../api/youtubeApi";

const MainPage = lazy(() => import("../pages/MainPage"));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const WebinarPage = lazy(() => import('../pages/WebinarPage'));
const EbookPage = lazy(() => import('../pages/EbookPage'));
const SecondEbookPage = lazy(() => import('../pages/SecondEbookPage'));
const VideoPage = lazy(() => import('../pages/VideoPage'));
const ErrorPage = lazy(() => import('../pages/404'));

function App() {
  // const {data} = useGetVideoDetailes('https://www.youtube.com/watch?v=JPR6TEYp5tg');
  
  // useEffect(() => {
  //   if (data) {
  //     console.log(data.items[0].contentDetails.duration);
  //   }
  // }, data)
  
  return (
    <>
      <Router>
        <Suspense fallback={<Spinner/>}>
          <main>
            <Routes>
              <Route element={<PageLayout/>}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/webinar" element={<WebinarPage/>}/>
                <Route path="/ebook" element={<EbookPage/>}/>
                <Route path="/secondebook" element={<SecondEbookPage/>}/>
              </Route>
              <Route path="/video/:videoid" element={<VideoPage/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </main>
        </Suspense>
      </Router>
    </>
  )
}

export default App;
