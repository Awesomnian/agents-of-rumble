import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Paper,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { patchNotesData } from '../data/db/patchNotesData';
import { PatchNote } from '../types';

// Custom Grid components to avoid TypeScript issues
const GridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: theme.spacing(-2),
}));

const GridItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

const GridItemFull = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
}));

// Styled components
const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4, 0),
  position: 'relative',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

const HeroImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: theme.spacing(0, 2),
}));

const SectionCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.4)',
  },
}));

// Extended PatchNote interface for HomePage
interface HomePagePatchNote extends PatchNote {
  title: string;
  version: string;
  description: string;
  majorChanges: {
    title: string;
    description: string;
    image: string;
  }[];
  balanceChanges: {
    unit: string;
    changes: string[];
  }[];
  bugFixes: string[];
}

const HomePage = () => {
  const theme = useTheme();
  const [latestPatchNotes, setLatestPatchNotes] = useState<HomePagePatchNote | null>(null);

  useEffect(() => {
    if (patchNotesData && patchNotesData.length > 0) {
      const sortedNotes = [...patchNotesData].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setLatestPatchNotes(sortedNotes[0] as unknown as HomePagePatchNote);
    }
  }, []);

  // Featured sections data
  const featuredSections = [
    {
      title: 'Knowledge Base',
      description: 'Explore our comprehensive database of minis, including stats, abilities, and talent pick rates.',
      image: '/assets/images/sections/knowledge_base.jpg',
      link: '/knowledge-base',
    },
    {
      title: 'Gameplay Mechanics',
      description: 'Learn about poison, burn, frost, and other gameplay mechanics that can give you an edge in battle.',
      image: '/assets/images/sections/gameplay_mechanics.jpg',
      link: '/game-mechanics',
    },
    {
      title: 'Currency & Levels',
      description: 'Understand the different currencies in Warcraft Rumble and how to progress efficiently.',
      image: '/assets/images/sections/currency_levels.jpg',
      link: '/currency-levels',
    },
    {
      title: 'Army Builder',
      description: 'Create and share your perfect army composition with our interactive army builder tool.',
      image: '/assets/images/sections/army_builder.jpg',
      link: '/army-builder',
    },
  ];

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src="/assets/images/hero_bg.jpg" alt="Warcraft Rumble" />
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom color="white">
            Agents of Rumble
          </Typography>
          
          <Typography variant="h5" component="h2" gutterBottom color="white">
            The definitive resource for Warcraft Rumble players
          </Typography>
          
          <Box sx={{ mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              component={RouterLink} 
              to="/knowledge-base"
              sx={{ mr: 2 }}
            >
              Explore Minis
            </Button>
            
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              component={RouterLink} 
              to="/army-builder"
              sx={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
              }}
            >
              Build Your Army
            </Button>
          </Box>
        </HeroContent>
      </HeroSection>
      
      <Container maxWidth="lg">
        {/* Disclaimer */}
        <Paper 
          sx={{ 
            p: 2, 
            mb: 6, 
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="body2" align="center">
            Agents of Rumble is a fan-made website and is not affiliated with or endorsed by Blizzard Entertainment. 
            All game content, images, and trademarks are property of Blizzard Entertainment.
          </Typography>
        </Paper>
        
        {/* Featured Sections */}
        <Typography variant="h4" gutterBottom>
          Explore Warcraft Rumble
        </Typography>
        
        <GridContainer>
          {featuredSections.map((section, index) => (
            <GridItem key={index}>
              <SectionCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={section.image}
                  alt={section.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {section.title}
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    {section.description}
                  </Typography>
                  
                  <Button 
                    variant="contained" 
                    color="primary"
                    component={RouterLink}
                    to={section.link}
                  >
                    Explore
                  </Button>
                </CardContent>
              </SectionCard>
            </GridItem>
          ))}
        </GridContainer>
        
        {/* Latest Updates */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Latest Updates
        </Typography>
        
        <Paper sx={{ p: 3, backgroundColor: theme.palette.background.paper }}>
          {latestPatchNotes ? (
            <>
              <Typography variant="h5" gutterBottom>
                {latestPatchNotes.title} - v{latestPatchNotes.version}
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>
                Released: {new Date(latestPatchNotes.date).toLocaleDateString()}
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                {latestPatchNotes.description}
              </Typography>
              
              {latestPatchNotes.majorChanges && latestPatchNotes.majorChanges.length > 0 && (
                <>
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Major Changes
                  </Typography>
                  
                  <GridContainer>
                    {latestPatchNotes.majorChanges.map((change, index) => (
                      <GridItem key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          {change.image && (
                            <Box 
                              component="img"
                              src={change.image}
                              alt={change.title}
                              sx={{ 
                                width: 80, 
                                height: 80, 
                                mr: 2,
                                objectFit: 'contain',
                                backgroundColor: '#1a1a1a',
                                borderRadius: 1,
                                p: 1
                              }}
                            />
                          )}
                          <Box>
                            <Typography variant="subtitle1" gutterBottom>
                              {change.title}
                            </Typography>
                            <Typography variant="body2">
                              {change.description}
                            </Typography>
                          </Box>
                        </Box>
                      </GridItem>
                    ))}
                  </GridContainer>
                </>
              )}
              
              {latestPatchNotes.balanceChanges && latestPatchNotes.balanceChanges.length > 0 && (
                <>
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Balance Changes
                  </Typography>
                  
                  {latestPatchNotes.balanceChanges.map((change, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {change.unit}
                      </Typography>
                      <ul>
                        {change.changes.map((text, i) => (
                          <li key={i}>
                            <Typography variant="body2">
                              {text}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  ))}
                </>
              )}
              
              {latestPatchNotes.bugFixes && latestPatchNotes.bugFixes.length > 0 && (
                <>
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Bug Fixes
                  </Typography>
                  
                  <ul>
                    {latestPatchNotes.bugFixes.map((fix, index) => (
                      <li key={index}>
                        <Typography variant="body2">
                          {fix}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              <Box sx={{ mt: 3 }}>
                <Button 
                  variant="outlined" 
                  component={RouterLink}
                  to="/patch-notes"
                >
                  View All Patch Notes
                </Button>
              </Box>
            </>
          ) : (
            <Typography variant="body1">
              No patch notes available at this time.
            </Typography>
          )}
        </Paper>
      </Container>
    </HomeContainer>
  );
};

export default HomePage;
