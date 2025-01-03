import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../api/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from '../components/Spinner/Spinner';
import PageLayout from "../pages/PageLayout";

const MainPage = lazy(() => import("../pages/MainPage"));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const WebinarPage = lazy(() => import('../pages/WebinarPage'));
const EbookPage = lazy(() => import('../pages/EbookPage'));
const SecondEbookPage = lazy(() => import('../pages/SecondEbookPage'));
const ErrorPage = lazy(() => import('../pages/404'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<Spinner/>}>
          <main>
            <Routes>
              <Route element={<PageLayout/>}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/webinar" element={<WebinarPage/>}/>
                <Route path="/ebook" element={<EbookPage/>}/>
                <Route path="/secondEbook" element={<SecondEbookPage/>}/>
              </Route>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </main>
        </Suspense>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
