import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingProvider } from './context/LoadingContext';
import { ContentProvider } from './context/ContentContext';

// Lazy-loaded components for pages
const Home = React.lazy(() => import('./pages/Home'));
const Minis = React.lazy(() => import('./pages/Minis'));
const MiniDetail = React.lazy(() => import('./pages/MiniDetail'));
const ArmyBuilder = React.lazy(() => import('./pages/ArmyBuilder'));
const Mechanics = React.lazy(() => import('./pages/Mechanics'));
const Currency = React.lazy(() => import('./pages/Currency'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <ContentProvider>
          <Router>
            <Layout>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/minis" element={<Minis />} />
                  <Route path="/minis/:miniId" element={<MiniDetail />} />
                  <Route path="/army-builder" element={<ArmyBuilder />} />
                  <Route path="/mechanics" element={<Mechanics />} />
                  <Route path="/currency" element={<Currency />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </React.Suspense>
            </Layout>
          </Router>
        </ContentProvider>
      </LoadingProvider>
    </ErrorBoundary>
  );
}

export default App;
