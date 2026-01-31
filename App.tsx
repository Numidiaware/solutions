import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Folder Comments Pages
import FolderCommentsLayout from './pages/product/FolderComments/Layout';
import Documentation from './pages/product/FolderComments/Documentation';
import Download from './pages/product/FolderComments/Download';
import ReleaseHistory from './pages/product/FolderComments/ReleaseHistory';
import Support from './pages/product/FolderComments/Support';
import License from './pages/product/FolderComments/License';

// Main Layout Component
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const normalizedRoute = route.startsWith('/') ? route : '/' + route;

  let pageContent;

  if (normalizedRoute === '/' || normalizedRoute === '') {
    pageContent = <Home />;
  } else if (normalizedRoute === '/about') {
    pageContent = <About />;
  } else if (normalizedRoute === '/contact') {
    pageContent = <Contact />;
  } else if (normalizedRoute.startsWith('/products/folder-comments')) {
    // Nested routing for Folder Comments
    const subRoute = normalizedRoute.replace('/products/folder-comments', '');
    let subComponent;
    
    // Check for specific sub-routes. Order matters to avoid partial matching if we used includes too broadly,
    // but here we check segments.
    if (subRoute.includes('/docs')) {
      subComponent = <Documentation />;
    } else if (subRoute.includes('/download')) {
      subComponent = <Download />;
    } else if (subRoute.includes('/history')) {
      subComponent = <ReleaseHistory />;
    } else if (subRoute.includes('/support')) {
      subComponent = <Support />;
    } else if (subRoute.includes('/license')) {
      subComponent = <License />;
    } else {
      // Default or redirect to docs
      subComponent = <Documentation />;
    }
    
    pageContent = <FolderCommentsLayout>{subComponent}</FolderCommentsLayout>;
  } else {
    // 404 Fallback
    pageContent = <Home />;
  }

  return (
    <MainLayout>
      {pageContent}
    </MainLayout>
  );
};

export default App;