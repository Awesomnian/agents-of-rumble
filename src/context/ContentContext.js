import React, { createContext, useState, useContext } from 'react';

const ContentContext = createContext({
  content: {},
  setContent: () => {},
});

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({});

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

export default ContentContext;
