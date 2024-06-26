import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ImgMediaCard = () => {
  return (
    <Card sx={{ maxWidth: 330, ml: '10px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={"https://kmcmaggroup.com/ImageGen.ashx?image=/media/2071/the-differences-between-grade-a-and-grade-b-buildings.jpg&Compression=70"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
export const ImgMediaCard1 = () => {
  return (
    <Card sx={{ maxWidth: 330, ml: '10px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={"https://kmcmaggroup.com/ImageGen.ashx?image=/media/2071/the-differences-between-grade-a-and-grade-b-buildings.jpg&Compression=70"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}

export const ImgMediaCard2 = () => {
  return (
    <Card sx={{ maxWidth: 330, ml: '10px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={"https://kmcmaggroup.com/ImageGen.ashx?image=/media/2071/the-differences-between-grade-a-and-grade-b-buildings.jpg&Compression=70"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}