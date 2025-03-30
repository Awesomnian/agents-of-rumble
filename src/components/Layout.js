import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1>Agents of Rumble</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/minis">Minis</a></li>
              <li><a href="/army-builder">Army Builder</a></li>
              <li><a href="/mechanics">Mechanics</a></li>
              <li><a href="/currency">Currency</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>Agents of Rumble - A Warcraft Rumble Resource</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
