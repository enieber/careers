import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Product extends React.PureComponent {
  render() {
    const {
      img,
      title,
      value,
      description,
      buy,
    } = this.props;

    return (
      <Card
        style={{
          width: '30vw',
          margin: '5vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent
          style={{
            padding: '2vw',
          }}
        >
          <Typography gutterBottom variant="headline" component="h3">
            {title}
          </Typography>
          <Typography gutterBottom variant="headline" component="h4">
            {value}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
          <Button
            id="button"
            variant="contained"
            color="primary"
            type="button"
            onClick={buy}
          >
           Comprar
          </Button>
        </CardContent>
      </Card>
    );
  }
}

Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buy: PropTypes.func.isRequired,
};

export default Product;
