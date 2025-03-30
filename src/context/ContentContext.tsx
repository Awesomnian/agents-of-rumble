// Context provider for content management
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our content state
interface ContentState {
  [key: string]: string;
}

// Define the shape of our context
interface ContentContextType {
  content: ContentState;
  updateContent: (key: string, value: string) => void;
}

// Create the context with a default value
const ContentContext = createContext<ContentContextType>({
  content: {},
  updateContent: () => {},
});

// Initial content values
const initialContent: ContentState = {
  'homepage-title': 'WARCRAFT AGENTS',
  'homepage-subtitle': 'Your ultimate resource for Warcraft Rumble',
  'homepage-disclaimer': 'This is an AI Agent generated page, created as a test project to look into Agent\'s capabilities and also, hopefully, to provide a useful resource for players. This isn\'t affiliated with Blizzard in any way, all assets are publicly available and are used as part of fair-use. Any similarities to Blizzard, in that this site may be buggy as fuck and wildly inaccurate, are purely coincidental.',
  'homepage-version': '12.0.0',
  'homepage-release-date': 'March 17, 2025',
  'homepage-latest-changes': 'Season 13 is coming, bringing Arthas Menethil, the Lich King, as a new Alliance and Undead Split Leader.',
  'about-project-purpose': 'Agents of Rumble is a dual-purpose project created to serve as both a functional resource for Warcraft Rumble players and as a test of AI agent capabilities in developing comprehensive web applications.',
  'about-disclaimer': 'Agents of Rumble is not affiliated with or endorsed by Blizzard Entertainment. All game assets, names, and related content are the property of Blizzard Entertainment and are used under fair use for informational purposes.'
};

// Create a provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentState>(initialContent);

  const updateContent = (key: string, value: string) => {
    setContent(prevContent => ({
      ...prevContent,
      [key]: value
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// Create a custom hook to use the content context
export const useContent = () => useContext(ContentContext);