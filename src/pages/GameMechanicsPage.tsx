import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Box, 
  Tabs, 
  Tab, 
  Divider, 
  Card, 
  CardContent, 
  CardMedia,
  styled,
  useTheme
} from '@mui/material';
import mechanicsData, { ExtendedMechanic } from '../data/db/mechanicsData';

// Styled components
const MechanicsContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundImage: 'url(/assets/images/backgrounds/mechanics_bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 'calc(100vh - 64px)',
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

const MechanicCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mechanic-tabpanel-${index}`}
      aria-labelledby={`mechanic-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const GameMechanicsPage: React.FC = () => {
  const theme = useTheme();
  const [selectedMechanic, setSelectedMechanic] = useState<string | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [mechanics, setMechanics] = useState<ExtendedMechanic[]>([]);

  useEffect(() => {
    setMechanics(mechanicsData);
    if (mechanicsData.length > 0) {
      setSelectedMechanic(mechanicsData[0].id);
    }
  }, []);

  const handleMechanicSelect = (mechanicId: string) => {
    setSelectedMechanic(mechanicId);
    setTabValue(0); // Reset to first tab when selecting a new mechanic
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const selectedMechanicData = mechanics.find(mechanic => mechanic.id === selectedMechanic);

  return (
    <MechanicsContainer>
      <ContentContainer maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Game Mechanics
        </Typography>
        
        <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 6 }}>
          Learn about the different gameplay mechanics in Warcraft Rumble and how they can give you an edge in battle.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Left side - Mechanics list */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Combat Mechanics
              </Typography>
              
              <Grid container spacing={2}>
                {mechanics.map((mechanic) => (
                  <Grid item xs={6} key={mechanic.id}>
                    <MechanicCard 
                      onClick={() => handleMechanicSelect(mechanic.id)}
                      sx={{ 
                        cursor: 'pointer',
                        border: selectedMechanic === mechanic.id ? `2px solid ${theme.palette.primary.main}` : 'none',
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="100"
                        image={mechanic.image}
                        alt={mechanic.name}
                        sx={{ objectFit: 'contain', p: 1 }}
                      />
                      <CardContent sx={{ p: 1 }}>
                        <Typography variant="h6" align="center">
                          {mechanic.name}
                        </Typography>
                      </CardContent>
                    </MechanicCard>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          
          {/* Right side - Mechanic details */}
          {selectedMechanicData && (
            <Grid item xs={12} md={8}>
              <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        mr: 3, 
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        padding: 1,
                        borderRadius: 1
                      }}
                      image={selectedMechanicData.image}
                      alt={selectedMechanicData.name}
                    />
                    <Box>
                      <Typography variant="h4" component="h2" gutterBottom>
                        {selectedMechanicData.name}
                      </Typography>
                      <Typography variant="body1">
                        {selectedMechanicData.description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider sx={{ mb: 2 }} />
                  
                  <Typography variant="body1" paragraph>
                    {selectedMechanicData.details}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )}
        </Grid>
      </ContentContainer>
    </MechanicsContainer>
  );
};

export default GameMechanicsPage;