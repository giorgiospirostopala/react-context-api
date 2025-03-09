import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsList from './pages/PostsList';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import SinglePost from './pages/SinglePost';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/chi-siamo" Component={AboutUs} />
              <Route path="/lista-dei-post" Component={PostsList} />
              <Route path="/lista-dei-post/:id" Component={SinglePost} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
