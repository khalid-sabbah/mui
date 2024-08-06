import React from 'react';
import { Box, Card, CardMedia, Typography, Grid, Tabs, Tab , IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const productsDetails = [
  { name: 'Mini 3D Glass', price: 220.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/40-150x150.png' },
  { name: 'Kotion Headset', price: 29.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/49-150x150.png' },
  { name: 'Core i7 Laptop', price: 125.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/04/01.png' },
  { name: 'Bluetooth Gamepad', price: 199.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/45-150x150.png' },
  { name: 'Waterproof Camera', price: 520.00, originalPrice: 560.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/06-150x150.png' },
  { name: 'Stereo Headset', price: 16.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-150x150.jpg' },
  { name: 'Apple iPhone 6s', price: 299.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/21-150x150.png' },
  { name: 'Moving Camera', price: 230.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/07-150x150.png' },
  { name: 'Golden Bluetooth', price: 12.00, originalPrice: 23.00, imgSrc: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/04/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-150x150.jpg' },
];

const products = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ padding: 2, marginX: 20 }}>
      <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>Best Deals</Typography>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="On Sell" />
        <Tab label="Hot Sell" />
        <Tab label="Trend" />
        <Tab label="Best Sell" />
      </Tabs>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {productsDetails.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                marginX: 1,
                width: 350,
                height: 150,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                transition: 'box-shadow 0.2s',
                '&:hover': {
                  cursor:"pointer",
                  boxShadow: '0 2px 20px 0 rgba(144,144,144,.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={product.imgSrc}
                alt={product.name}
                sx={{ height: 100, width: 100, objectFit: 'contain', padding: 2 }}
              />
              <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#1976d2',
                    },
                  }}
                >
                  {product.name}
                </Typography>
                {product.originalPrice && (
                  <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                    ${product.originalPrice.toFixed(2)}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: 'green' }}>
                  ${product.price.toFixed(2)}
                </Typography>
              </Box>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  color: 'grey',
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default products;
