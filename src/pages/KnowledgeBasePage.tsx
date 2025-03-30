import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Box, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Slider, 
  CardMedia, 
  CardContent, 
  Chip, 
  Divider, 
  Button, 
  Tab, 
  Tabs, 
  InputAdornment,
  styled,
  useTheme,
  SelectChangeEvent
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import minisData from '../data/db/minisData';
import { Mini as ImportedMini } from '../types';

// Rename the local Mini type to avoid conflicts
type LocalMini = {
  id: string;
  name: string;
  family: string;
  rarity: string;
  role: string;
  cost: number;
  stats: {
    health: number;
    damage: number;
    speed: number;
  };
  abilities: { name: string; description: string }[];
  talents: { name: string; description: string }[];
};

// Styled components
const KnowledgeBaseContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundImage: 'url(/assets/images/backgrounds/knowledge_base_bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 'calc(100vh - 64px)',
}));

const FilterContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
}));

const MiniCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const StatBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'value' && prop !== 'maxValue',
})<{ value: number; maxValue: number }>(({ theme, value, maxValue }) => ({
  height: 10,
  backgroundColor: theme.palette.grey[800],
  borderRadius: 5,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${(value / maxValue) * 100}%`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
  },
}));

const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mini-tabpanel-${index}`}
      aria-labelledby={`mini-tab-${index}`}
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

const KnowledgeBasePage: React.FC = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [familyFilter, setFamilyFilter] = useState('');
  const [rarityFilter, setRarityFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [costFilter, setCostFilter] = useState<number[]>([0, 10]);
  const [selectedMini, setSelectedMini] = useState<string | null>(null);
  const [selectedMiniData, setSelectedMiniData] = useState<LocalMini | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filteredMinis, setFilteredMinis] = useState<LocalMini[]>([]);

  // Initialize filtered minis
  useEffect(() => {
    setFilteredMinis(minisData as LocalMini[]);
  }, []);

  // Update filtered minis when filters change
  useEffect(() => {
    let filtered = minisData as LocalMini[];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(mini => 
        mini.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply family filter
    if (familyFilter) {
      filtered = filtered.filter(mini => 
        mini.family === familyFilter
      );
    }
    
    // Apply rarity filter
    if (rarityFilter) {
      filtered = filtered.filter(mini => 
        mini.rarity === rarityFilter
      );
    }
    
    // Apply role filter
    if (roleFilter) {
      filtered = filtered.filter(mini => 
        mini.role === roleFilter
      );
    }
    
    // Apply cost filter
    filtered = filtered.filter(mini => 
      mini.cost >= costFilter[0] && mini.cost <= costFilter[1]
    );
    
    setFilteredMinis(filtered);
  }, [searchTerm, familyFilter, rarityFilter, roleFilter, costFilter]);

  // Update selected mini data when selected mini changes
  useEffect(() => {
    if (selectedMini) {
      const miniData = minisData.find(mini => mini.name === selectedMini) as LocalMini;
      if (miniData) {
        setSelectedMiniData(miniData);
      }
    } else {
      setSelectedMiniData(null);
    }
  }, [selectedMini]);

  // Load favorites from local storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle family filter change
  const handleFamilyChange = (event: SelectChangeEvent<string>) => {
    setFamilyFilter(event.target.value);
  };

  // Handle rarity filter change
  const handleRarityChange = (event: SelectChangeEvent<string>) => {
    setRarityFilter(event.target.value);
  };

  // Handle role filter change
  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRoleFilter(event.target.value);
  };

  // Handle cost filter change
  const handleCostChange = (event: Event, newValue: number | number[]) => {
    setCostFilter(newValue as number[]);
  };

  // Handle mini selection
  const handleMiniSelect = (miniName: string) => {
    setSelectedMini(miniName);
    setTabValue(0); // Reset to first tab when selecting a new mini
  };

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Handle favorite toggle
  const handleFavoriteToggle = (miniName: string) => {
    let newFavorites;
    if (favorites.includes(miniName)) {
      newFavorites = favorites.filter(name => name !== miniName);
    } else {
      newFavorites = [...favorites, miniName];
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <KnowledgeBaseContainer>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Knowledge Base
        </Typography>
        
        <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 6 }}>
          Explore all minis in Warcraft Rumble, their stats, abilities, and talents.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Left side - Mini list */}
          <Grid item xs={12} md={selectedMini ? 4 : 12}>
            <FilterContainer>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search minis..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="family-filter-label">Family</InputLabel>
                    <Select
                      labelId="family-filter-label"
                      value={familyFilter}
                      onChange={handleFamilyChange}
                      label="Family"
                      startAdornment={
                        <InputAdornment position="start">
                          <FilterListIcon />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="">All Families</MenuItem>
                      <MenuItem value="Alliance">Alliance</MenuItem>
                      <MenuItem value="Horde">Horde</MenuItem>
                      <MenuItem value="Beast">Beast</MenuItem>
                      <MenuItem value="Undead">Undead</MenuItem>
                      <MenuItem value="Blackrock">Blackrock</MenuItem>
                      <MenuItem value="Night Elf">Night Elf</MenuItem>
                      <MenuItem value="Cenarion">Cenarion</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="rarity-filter-label">Rarity</InputLabel>
                    <Select
                      labelId="rarity-filter-label"
                      value={rarityFilter}
                      onChange={handleRarityChange}
                      label="Rarity"
                      startAdornment={
                        <InputAdornment position="start">
                          <FilterListIcon />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="">All Rarities</MenuItem>
                      <MenuItem value="Common">Common</MenuItem>
                      <MenuItem value="Rare">Rare</MenuItem>
                      <MenuItem value="Epic">Epic</MenuItem>
                      <MenuItem value="Legendary">Legendary</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="role-filter-label">Role</InputLabel>
                    <Select
                      labelId="role-filter-label"
                      value={roleFilter}
                      onChange={handleRoleChange}
                      label="Role"
                      startAdornment={
                        <InputAdornment position="start">
                          <FilterListIcon />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="">All Roles</MenuItem>
                      <MenuItem value="Melee">Melee</MenuItem>
                      <MenuItem value="Ranged">Ranged</MenuItem>
                      <MenuItem value="Tank">Tank</MenuItem>
                      <MenuItem value="Caster">Caster</MenuItem>
                      <MenuItem value="Flying">Flying</MenuItem>
                      <MenuItem value="Leader">Leader</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={6}>
                  <Typography id="cost-slider-label" gutterBottom>
                    Cost Range
                  </Typography>
                  <Slider
                    value={costFilter}
                    onChange={handleCostChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="cost-slider-label"
                    min={0}
                    max={10}
                    marks={[
                      { value: 0, label: '0' },
                      { value: 5, label: '5' },
                      { value: 10, label: '10' },
                    ]}
                  />
                </Grid>
              </Grid>
            </FilterContainer>
            
            <Grid container spacing={2}>
              {filteredMinis.map((mini) => (
                <Grid item xs={6} sm={4} md={selectedMini ? 6 : 3} key={mini.id}>
                  <MiniCard 
                    onClick={() => handleMiniSelect(mini.name)}
                    sx={{ 
                      cursor: 'pointer',
                      border: selectedMini === mini.name ? `2px solid ${theme.palette.primary.main}` : 'none',
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={`/assets/images/minis/${mini.id.toLowerCase()}.png`}
                        alt={mini.name}
                        sx={{ 
                          backgroundColor: 
                            mini.rarity === 'Common' ? '#6c757d' :
                            mini.rarity === 'Rare' ? '#0d6efd' :
                            mini.rarity === 'Epic' ? '#6f42c1' :
                            '#ffc107', // Legendary
                          objectFit: 'contain',
                          p: 1
                        }}
                      />
                      <Box
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteToggle(mini.name);
                        }}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          borderRadius: '50%',
                          width: 32,
                          height: 32,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {favorites.includes(mini.name) ? (
                          <FavoriteIcon color="error" />
                        ) : (
                          <FavoriteBorderIcon sx={{ color: 'white' }} />
                        )}
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography variant="h6" component="div" noWrap>
                        {mini.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label={mini.family} 
                          size="small" 
                          sx={{ mr: 1, backgroundColor: theme.palette.primary.dark }} 
                        />
                        <Chip 
                          label={mini.role} 
                          size="small" 
                          sx={{ backgroundColor: theme.palette.secondary.dark }} 
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Cost: {mini.cost} • {mini.rarity}
                      </Typography>
                    </CardContent>
                  </MiniCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Right side - Mini details */}
          {selectedMiniData && (
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3, backgroundColor: theme.palette.background.paper }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 120,
                      height: 120,
                      mr: 3,
                      backgroundColor: 
                        selectedMiniData.rarity === 'Common' ? '#6c757d' :
                        selectedMiniData.rarity === 'Rare' ? '#0d6efd' :
                        selectedMiniData.rarity === 'Epic' ? '#6f42c1' :
                        '#ffc107', // Legendary
                      objectFit: 'contain',
                      p: 1,
                      borderRadius: 1
                    }}
                    image={`/assets/images/minis/${selectedMiniData.id.toLowerCase()}.png`}
                    alt={selectedMiniData.name}
                  />
                  <Box>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {selectedMiniData.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Chip 
                        label={selectedMiniData.family} 
                        size="small" 
                        sx={{ mr: 1, backgroundColor: theme.palette.primary.dark }} 
                      />
                      <Chip 
                        label={selectedMiniData.role} 
                        size="small" 
                        sx={{ backgroundColor: theme.palette.secondary.dark }} 
                      />
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Cost: {selectedMiniData.cost} • {selectedMiniData.rarity}
                    </Typography>
                  </Box>
                </Box>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="mini details tabs"
                  textColor="primary"
                  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Stats" />
                  <Tab label="Abilities" />
                  <Tab label="Talents" />
                </Tabs>
                <CustomTabPanel value={tabValue} index={0}>
                  <Typography variant="h6" gutterBottom>
                    Stats
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {selectedMiniData?.stats && (
                    <>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Health: {selectedMiniData.stats.health}
                        </Typography>
                        <StatBar value={selectedMiniData.stats.health} maxValue={100} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Damage: {selectedMiniData.stats.damage}
                        </Typography>
                        <StatBar value={selectedMiniData.stats.damage} maxValue={100} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Speed: {selectedMiniData.stats.speed}
                        </Typography>
                        <StatBar value={selectedMiniData.stats.speed} maxValue={100} />
                      </Box>
                    </>
                  )}
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                  <Typography variant="h6" gutterBottom>
                    Abilities
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {selectedMiniData.abilities.map((ability, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {ability.name}: {ability.description}
                      </Typography>
                    </Box>
                  ))}
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
                  <Typography variant="h6" gutterBottom>
                    Talents
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {selectedMiniData.talents.map((talent, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {talent.name}: {talent.description}
                      </Typography>
                    </Box>
                  ))}
                </CustomTabPanel>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </KnowledgeBaseContainer>
  );
};

export default KnowledgeBasePage;