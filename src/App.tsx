import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import ErrorPage, { ERROR_KIND } from './pages/ErrorPage';
import TestPage from './pages/TestPage';
import { getCookie } from './utils/Cookie';
import SignInPage from './pages/SignInPage';
import { LayOut } from './components/common/LayOut';
import ProfilePage from './pages/ProfilePage'; // TODO: HOME 접속햿는지 안했는지 체크 => 어떻게 해야 좋을까?

// TODO: HOME 접속햿는지 안했는지 체크 => 어떻게 해야 좋을까?
const CheckEnterHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie('enterHome')) {
      navigate('/home');
    }
  }, [navigate]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <CheckEnterHome />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route element={<LayOut />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<ErrorPage errorType={ERROR_KIND.NOT_FOUND} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
