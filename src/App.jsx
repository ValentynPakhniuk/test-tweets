import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Loyout';
import { NotFound } from './components/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/Home'));
const TweetsPage = lazy(() => import('./pages/Tweets'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  );
};
