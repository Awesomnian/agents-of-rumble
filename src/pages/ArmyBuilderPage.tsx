import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Box, 
  Button, 
  IconButton, 
  Chip, 
  CardMedia, 
  CardContent,
  Divider,
  Alert,
  styled
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import minisData from '../data/db/minisData';
import { Mini } from '../types';

// Styled components
const ArmyBuilderContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundImage: 'url(/assets/images/backgrounds/army_builder_bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 'calc(100vh - 64px)',
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

const LeaderCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: selected ? 'rgba(63, 81, 181, 0.2)' : 'rgba(0, 0, 0, 0.5)',
  border: selected ? `2px solid ${theme.palette.primary.main}` : 'none',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const ArmySlot = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<{ filled?: boolean }>(({ theme, filled }) => ({
  cursor: 'pointer',
  height: 120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: filled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)',
  border: `1px dashed ${filled ? 'transparent' : theme.palette.grey[500]}`,
  '&:hover': {
    backgroundColor: filled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.15)',
  },
}));

const FamilyChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'customcolor',
})<{ customcolor?: string }>(({ theme, customcolor }) => ({
  backgroundColor: customcolor || theme.palette.primary.main,
  color: theme.palette.common.white,
}));

// Types
interface Leader extends Mini {
  // Additional leader-specific properties
}

interface ArmyMini extends Mini {
  manaCost: number;
}

interface ArmyStats {
  totalMana: number;
  averageLevel: number;
  familyCounts: Map<string, number>;
}

interface Notification {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

const ArmyBuilderPage: React.FC = () => {
  const theme = useTheme();
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [army, setArmy] = useState<(ArmyMini | null)[]>(Array(6).fill(null));
  const [availableMinis, setAvailableMinis] = useState<ArmyMini[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [armyStats, setArmyStats] = useState<ArmyStats>({
    totalMana: 0,
    averageLevel: 0,
    familyCounts: new Map(),
  });
  const [notification, setNotification] = useState<Notification>({
    show: false,
    message: '',
    type: 'info',
  });

  // Initialize data
  useEffect(() => {
    // Filter leaders from minis data
    const leaderMinis = minisData.filter(mini => mini.role === 'Leader') as Leader[];
    setLeaders(leaderMinis);
    
    // Set available minis (non-leaders)
    const nonLeaderMinis = minisData.filter(mini => mini.role !== 'Leader').map(mini => ({
      ...mini,
      manaCost: mini.cost,
    })) as ArmyMini[];
    setAvailableMinis(nonLeaderMinis);
  }, []);

  // Update army stats whenever army changes
  useEffect(() => {
    const stats: ArmyStats = {
      totalMana: 0,
      averageLevel: 0,
      familyCounts: new Map<string, number>(),
    };
    
    let totalLevel = 0;
    let miniCount = 0;
    
    // Include leader in stats if selected
    if (selectedLeader) {
      stats.totalMana += selectedLeader.cost;
      totalLevel += 1; // Assuming leader is level 1 by default
      miniCount += 1;
      
      const currentCount = stats.familyCounts.get(selectedLeader.family) || 0;
      stats.familyCounts.set(selectedLeader.family, currentCount + 1);
    }
    
    // Add stats for all minis in army
    army.forEach(mini => {
      if (mini) {
        stats.totalMana += mini.manaCost;
        totalLevel += 1; // Assuming all minis are level 1 by default
        miniCount += 1;
        
        const currentCount = stats.familyCounts.get(mini.family) || 0;
        stats.familyCounts.set(mini.family, currentCount + 1);
      }
    });
    
    stats.averageLevel = miniCount > 0 ? Math.round((totalLevel / miniCount) * 10) / 10 : 0;
    
    setArmyStats(stats);
  }, [army, selectedLeader]);

  // Handle leader selection
  const handleLeaderSelect = (leader: Leader) => {
    setSelectedLeader(leader);
    showNotification(`${leader.name} selected as leader`, 'success');
  };

  // Handle army slot click
  const handleSlotClick = (index: number) => {
    setSelectedSlot(index);
    // Here you would typically open a modal or drawer to select a mini
    // For now, let's just add a random mini for demonstration
    if (army[index] === null && availableMinis.length > 0) {
      const randomMini = availableMinis[Math.floor(Math.random() * availableMinis.length)];
      const newArmy = [...army];
      newArmy[index] = randomMini;
      setArmy(newArmy);
      showNotification(`${randomMini.name} added to your army`, 'success');
    }
  };

  // Handle removing a mini from the army
  const handleRemoveMini = (index: number) => {
    const miniName = army[index]?.name || 'Mini';
    const newArmy = [...army];
    newArmy[index] = null;
    setArmy(newArmy);
    showNotification(`${miniName} removed from your army`, 'info');
  };

  // Handle sharing army
  const handleShareArmy = () => {
    // Generate a shareable link or code
    showNotification('Army share link copied to clipboard!', 'success');
  };

  // Handle saving army
  const handleSaveArmy = () => {
    // Save army to local storage or database
    showNotification('Army saved successfully!', 'success');
  };

  // Handle clearing army
  const handleClearArmy = () => {
    setArmy(Array(6).fill(null));
    showNotification('Army cleared', 'info');
  };

  // Show notification
  const showNotification = (message: string, type: 'success' | 'error' | 'info' | 'warning') => {
    setNotification({
      show: true,
      message,
      type,
    });
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  // Get color for family chip
  const getFamilyColor = (family: string): string => {
    const familyColors: Record<string, string> = {
      alliance: '#0074e0',
      horde: '#b30000',
      undead: '#9c27b0',
      blackrock: '#ff5722',
      beast: '#8BC34A',
      cenarion: '#00bcd4',
    };
    
    return familyColors[family.toLowerCase()] || theme.palette.primary.main;
  };

  return (
    <ArmyBuilderContainer>
      <ContentContainer maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom color="primary" 
          sx={{ textAlign: 'center', mt: 2, fontWeight: 'bold', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
          Army Builder
        </Typography>
        
        {notification.show && (
          <Alert 
            severity={notification.type} 
            sx={{ mb: 2 }}
            onClose={() => setNotification({ ...notification, show: false })}
          >
            {notification.message}
          </Alert>
        )}
        
        <Grid container spacing={3}>
          {/* Leader Selection */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, mb: 3, backgroundColor: 'rgba(0,0,0,0.7)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Select Your Leader
              </Typography>
              <Grid container spacing={2}>
                {leaders.map((leader) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={leader.id}>
                    <LeaderCard 
                      selected={selectedLeader && selectedLeader.id === leader.id ? true : false}
                      onClick={() => handleLeaderSelect(leader)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={`/assets/images/minis/${leader.image}`}
                        alt={leader.name}
                        sx={{ objectFit: 'contain', p: 1 }}
                      />
                      <CardContent sx={{ p: 1 }}>
                        <Typography variant="subtitle2" align="center">
                          {leader.name}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                          <FamilyChip 
                            label={leader.family.charAt(0).toUpperCase() + leader.family.slice(1)} 
                            size="small"
                            customcolor={getFamilyColor(leader.family)}
                          />
                        </Box>
                      </CardContent>
                    </LeaderCard>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          
          {/* Army Slots */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.7)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Your Army
              </Typography>
              <Grid container spacing={2}>
                {army.map((mini, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <ArmySlot filled={mini !== null} onClick={() => handleSlotClick(index)}>
                      {mini ? (
                        <Box sx={{ position: 'relative', width: '100%', height: '100%', p: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70%' }}>
                            <img 
                              src={`/assets/images/minis/${mini.image}`} 
                              alt={mini.name}
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                              {mini.name}
                            </Typography>
                            <Chip 
                              label={mini.manaCost} 
                              size="small" 
                              color="primary"
                              sx={{ height: 20, minWidth: 20 }}
                            />
                          </Box>
                          <IconButton 
                            size="small" 
                            sx={{ position: 'absolute', top: 0, right: 0 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveMini(index);
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          Click to add mini
                        </Typography>
                      )}
                    </ArmySlot>
                  </Grid>
                ))}
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<ShareIcon />}
                  onClick={handleShareArmy}
                >
                  Share Army
                </Button>
                <Box>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<SaveIcon />}
                    onClick={handleSaveArmy}
                    sx={{ mr: 1 }}
                  >
                    Save
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="error" 
                    startIcon={<DeleteIcon />}
                    onClick={handleClearArmy}
                  >
                    Clear
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
          {/* Army Stats */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.7)' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Army Stats
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  Total Mana Cost: {armyStats.totalMana}
                </Typography>
                <Typography variant="subtitle1">
                  Average Level: {armyStats.averageLevel}
                </Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom color="primary">
                Family Bonuses
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                {Array.from(armyStats.familyCounts).map(([family, count]) => (
                  <Box key={family} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FamilyChip 
                      label={family.charAt(0).toUpperCase() + family.slice(1)} 
                      customcolor={getFamilyColor(family)}
                    />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {count} {count === 1 ? 'unit' : 'units'}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom color="primary">
                Army Strengths
              </Typography>
              
              <Box>
                <Typography variant="body2">
                  • Strong against melee units
                </Typography>
                <Typography variant="body2">
                  • Good area damage
                </Typography>
                <Typography variant="body2">
                  • Balanced mana curve
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </ContentContainer>
    </ArmyBuilderContainer>
  );
};

export default ArmyBuilderPage;
