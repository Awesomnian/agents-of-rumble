import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Box, 
  Divider, 
  Card, 
  CardContent, 
  CardMedia,
  Chip,
  styled,
  useTheme
} from '@mui/material';
import currencyData, { ExtendedCurrency } from '../data/db/currencyData';

// Styled components
const CurrencyContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundImage: 'url(/assets/images/backgrounds/currency_bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 'calc(100vh - 64px)',
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

const CurrencyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const CurrencyLevelsPage: React.FC = () => {
  const theme = useTheme();
  const [currencies, setCurrencies] = useState<ExtendedCurrency[]>([]);

  useEffect(() => {
    setCurrencies(currencyData);
  }, []);

  return (
    <CurrencyContainer>
      <ContentContainer maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Currency & Levels
        </Typography>
        
        <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 6 }}>
          Learn about the different currencies in Warcraft Rumble and how to efficiently progress through the game.
        </Typography>
        
        <Grid container spacing={4}>
          {currencies.map((currency) => (
            <Grid item xs={12} md={6} key={currency.id}>
              <CurrencyCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        mr: 2, 
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        padding: 1,
                        borderRadius: '50%'
                      }}
                      image={`/assets/images/currency/${currency.icon}`}
                      alt={currency.name}
                    />
                    <Typography variant="h4" component="h2">
                      {currency.name}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {currency.description}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="h6" gutterBottom>
                    Uses
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {currency.usages.map((use, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                        • {use}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Typography variant="h6" gutterBottom>
                    How to Obtain
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {currency.obtainMethods.map((method, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                        • {method}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2">
                      Max Amount:
                    </Typography>
                    <Typography variant="subtitle2">
                      {currency.maxAmount.toLocaleString()}
                    </Typography>
                  </Box>
                  
                  {currency.conversionRate && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2">
                        Conversion Rate:
                      </Typography>
                      <Typography variant="subtitle2">
                        1 {currency.name} = {currency.conversionRate.rate} {currency.conversionRate.currency}
                      </Typography>
                    </Box>
                  )}
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="h6" gutterBottom>
                    Pro Tips
                  </Typography>
                  <Box>
                    {currency.tips.map((tip, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                        • {tip}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    <Chip 
                      label={currency.rarity} 
                      sx={{ 
                        backgroundColor: 
                          currency.rarity === 'Common' ? '#6c757d' :
                          currency.rarity === 'Rare' ? '#0d6efd' :
                          currency.rarity === 'Epic' ? '#6f42c1' :
                          '#ffc107', // Legendary
                        color: 'white'
                      }} 
                    />
                    <Chip 
                      label={`${currency.category} Currency`} 
                      color="primary"
                    />
                  </Box>
                </CardContent>
              </CurrencyCard>
            </Grid>
          ))}
        </Grid>
        
        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Player Progression
        </Typography>
        
        <Paper sx={{ p: 3, backgroundColor: 'rgba(0, 0, 0, 0.5)', mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Account Level
          </Typography>
          
          <Typography variant="body1" paragraph>
            Your account level determines what features and content you can access in the game. Each level unlocks new areas, game modes, or features.
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Levels 1-10
                </Typography>
                <Typography variant="body2">
                  • Tutorial completion
                  • Basic campaign missions
                  • First leader unlocked
                  • Daily quests introduced
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Levels 11-20
                </Typography>
                <Typography variant="body2">
                  • PvP unlocked
                  • Guild system access
                  • Advanced campaign missions
                  • Talent system unlocked
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Levels 21-30
                </Typography>
                <Typography variant="body2">
                  • Raid bosses unlocked
                  • Special events access
                  • Advanced talents
                  • Weekly challenges
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="h6" align="center" gutterBottom>
                  Levels 31+
                </Typography>
                <Typography variant="body2">
                  • Ranked PvP
                  • Legendary quests
                  • Special cosmetics
                  • Endgame content
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          
          <Typography variant="h5" gutterBottom>
            Mini Levels
          </Typography>
          
          <Typography variant="body1" paragraph>
            Each mini can be upgraded using currency to increase their stats and effectiveness in battle.
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Level Up Costs
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <Typography variant="body2" align="center">
                    Level 1-5: 100-500 Gold
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <Typography variant="body2" align="center">
                    Level 6-10: 600-1500 Gold
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <Typography variant="body2" align="center">
                    Level 11-15: 2000-5000 Gold
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <Typography variant="body2" align="center">
                    Level 16+: 6000+ Gold
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          <Typography variant="subtitle1" gutterBottom>
            Stat Growth Per Level
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="body2" align="center">
                  Health: +8-12% per level
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="body2" align="center">
                  Damage: +5-10% per level
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Box sx={{ p: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="body2" align="center">
                  Special abilities: +3-8% per level
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </ContentContainer>
    </CurrencyContainer>
  );
};

export default CurrencyLevelsPage;
