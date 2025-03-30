import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingProvider } from './context/LoadingContext';
import { ContentProvider } from './context/ContentContext';

// Placeholder components for pages
const Home = () => <div>Home Page</div>;
const Minis = () => <div>Minis Page</div>;
const MiniDetail = () => <div>Mini Detail Page</div>;
const ArmyBuilder = () => <div>Army Builder Page</div>;
const Mechanics = () => <div>Mechanics Page</div>;
const Currency = () => <div>Currency Page</div>;
const NotFound = () => <div>404 Not Found</div>;

function App() {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <ContentProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minis" element={<Minis />} />
            <Route path="/minis/:miniId" element={<MiniDetail />} />
            <Route path="/army-builder" element={<ArmyBuilder />} />
            <Route path="/mechanics" element={<Mechanics />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContentProvider>
      </LoadingProvider>
    </ErrorBoundary>
  );
}

export default App;
