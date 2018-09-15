import { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Shelter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter : props.shelter
    };
  }
  render() {
    const data = {
      freeBeds : this.props.shelter.FreeBeds || 0,
      numberOfBeds : this.props.shelter.TotalBeds || 0,
      name : this.props.shelter.Name || "[Name Not Found]",
      website : "example.com",
      address : this.props.shelter.Address || "[Address Not Found]",
      phone : this.props.shelter.Phone || "[Phone Not Found]",
    };
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {data.name}
            </Typography>
            <Typography component="p">
              Available Beds: {data.freeBeds} of {data.numberOfBeds}
            </Typography>
            <Typography component="p">
              {data.address}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" href={data.website} color="primary">{data.website}</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Shelter;