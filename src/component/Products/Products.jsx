import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom"

import "./Products.css"

export const ProductsItem = ({producto} ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={producto.img}
        alt={producto.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.name}
        </Typography>
        <Typography  variant="h5" color="text.primary">
          {producto.price}
        </Typography>
        <Link to={`/categorias/${producto.category}`}>
          <Typography variant="body1" color="text.primary" paddingTop= "20px">
          Volver a {producto.category}
        </Typography>
        </Link>
       </CardContent>
    </CardActionArea>
  </Card>
);
}

export default ProductsItem 