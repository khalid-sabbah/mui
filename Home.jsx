import React from 'react';
import { Grid, Card, Typography, Box, Tabs, Tab, CardMedia, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const products = [
  { name: 'Portable Speaker', originalPrice: 15, salePrice: 12, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-300x300.jpg' },
  { name: 'LED Projector', originalPrice: 25, salePrice: 20, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/Bluetooth-Smart-Projector.jpg' },
  { name: 'LED Television', originalPrice: 670, salePrice: 569, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/26-300x300.png' },
  { name: 'VR Headset', originalPrice: 50, salePrice: 45, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-300x300.jpg' },
  { name: 'Headphones', originalPrice: 25, salePrice: 20, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-300x300.jpg' },
  { name: 'Laptop', originalPrice: 1000, salePrice: 800, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/laptop2-scaled-e1594811938278.jpg' }
];

const Home = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginX: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            <img src="https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/04/feature_banner.png" alt="Electronics" style={{ width: '100%', height: '90%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="On Sell" />
            <Tab label="Hot Sell" />
            <Tab label="Trend" />
            <Tab label="Best Sell" />
          </Tabs>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ padding:"35px" ,position: 'relative' , '&:hover .hover-content': { display: 'flex' }, '&:hover': {cursor: "pointer", boxShadow: 6, transition: 'transform 0.3s' } }}>
                  <Box sx={{ display: 'none', flexDirection: 'row', alignItems: 'space-between', justifyContent: 'center', position: 'absolute', top: -265, right: 0, left: 0, bottom: 0,  color: '#fcb900', zIndex: 2 }} className="hover-content">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon />
                    </Box>
                    <IconButton sx={{ color: '#83b735' }}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Box>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.imgSrc}
                    alt={product.name}
                  />
                  <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ textDecoration: 'line-through', marginRight: 1 }}>
                        ${product.originalPrice.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'green' }}>
                        ${product.salePrice.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
