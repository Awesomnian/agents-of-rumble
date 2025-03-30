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
  Chip,
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
                
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={tabValue} onChange={handleTabChange} aria-label="mechanic details tabs">
                    <Tab label="How It Works" />
                    <Tab label="Units" />
                    <Tab label="Strategy" />
                  </Tabs>
                </Box>
                
                <TabPanel value={tabValue} index={0}>
                  <Typography variant="h6" gutterBottom>
                    Mechanics
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {selectedMechanicData.mechanics.map((mechanic, index) => (
                      <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                        • {mechanic}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Typography variant="h6" gutterBottom>
                    Examples
                  </Typography>
                  <Box>
                    {selectedMechanicData.examples.map((example, index) => (
                      <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                        • {example}
                      </Typography>
                    ))}
                  </Box>
                </TabPanel>
                
                <TabPanel value={tabValue} index={1}>
                  <Typography variant="h6" gutterBottom>
                    Units with {selectedMechanicData.name}
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {selectedMechanicData.units.map((unit) => (
                      <Grid item xs={12} sm={6} key={unit.id}>
                        <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <CardMedia
                              component="img"
                              sx={{ 
                                width: 40, 
                                height: 40, 
                                mr: 2, 
                                borderRadius: '50%',
                                backgroundColor: theme.palette.primary.dark
                              }}
                              image={`/assets/images/minis/${unit.icon}`}
                              alt={unit.name}
                            />
                            <Typography variant="subtitle1" fontWeight="bold">
                              {unit.name}
                            </Typography>
                          </Box>
                          <Typography variant="body2" paragraph>
                            {unit[`${selectedMechanicData.id.toLowerCase()}Ability` as keyof typeof unit] as string}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                
                <TabPanel value={tabValue} index={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" gutterBottom>
                        Synergies
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {selectedMechanicData.synergies.map((synergy, index) => (
                          <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                            • {synergy}
                          </Typography>
                        ))}
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" gutterBottom>
                        Counters
                      </Typography>
                      <Box>
                        {selectedMechanicData.counters.map((counter, index) => (
                          <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                            • {counter}
                          </Typography>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Divider sx={{ my: 3 }} />
                  
                  <Typography variant="h6" gutterBottom>
                    Tips for Using {selectedMechanicData.name}
                  </Typography>
                  <Box>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      • Combine with other control effects for maximum impact
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      • Use against appropriate targets (high health units for percentage damage, etc.)
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      • Time your abilities to maximize their effectiveness
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      • Consider enemy resistances when building your army
                    </Typography>
                  </Box>
                </TabPanel>
              </Paper>
            </Grid>
          )}
        </Grid>
        
        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Other Game Systems
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h5" gutterBottom>
                Targeting Priority
              </Typography>
              
              <Typography variant="body1" paragraph>
                Units in Warcraft Rumble follow specific targeting priorities that determine which enemy they attack first.
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Default Priority Order:
                </Typography>
                <ol>
                  <li>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Closest enemy unit within range
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Enemy buildings or objectives
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Enemy leader
                    </Typography>
                  </li>
                </ol>
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                Special Targeting:
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  • Some units have "Preferred Target" abilities that override default targeting
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  • Flying units can bypass ground units to attack backline targets
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  • Certain abilities can taunt enemies to force them to attack specific units
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h5" gutterBottom>
                Damage Types
              </Typography>
              
              <Typography variant="body1" paragraph>
                Different units deal different types of damage, which can be more or less effective against certain enemies.
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)', height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Physical Damage
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Dealt by melee and ranged attackers
                    </Typography>
                    <Typography variant="body2">
                      • Reduced by armor
                    </Typography>
                    <Typography variant="body2">
                      • Effective against unarmored units
                    </Typography>
                    <Typography variant="body2">
                      • Can be dodged or parried
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)', height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Magical Damage
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Dealt by spellcasters and abilities
                    </Typography>
                    <Typography variant="body2">
                      • Ignores armor
                    </Typography>
                    <Typography variant="body2">
                      • Reduced by magic resistance
                    </Typography>
                    <Typography variant="body2">
                      • Cannot be dodged or parried
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      True Damage
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Rare type of damage that ignores all defenses
       
(Content truncated due to size limit. Use line ranges to read in chunks)