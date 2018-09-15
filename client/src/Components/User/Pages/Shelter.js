import { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Shelter extends Component {
  render() {
    let phoneURL = "tel:+1" + this.props["Phone"].match(/\d+/g).join("");
    const data = {
      freeBeds : this.props["Number of Open Beds"],
      numberOfBeds : this.props["Number of Beds"],
      name : this.props["Name of Shelter"],
      siteURL : this.props["Website"],
      address : this.props["Address"],
      phone : this.props["Phone"],
    };
    // return (
    //   <div className="shelter">
    //     <div className="beds">Available Beds: {data.freeBeds} of {data.numberOfBeds}</div>
    //     <div className="name">{data.name}</div>
    //     <div className="site"><a href={data.siteURL}>{data.siteURL}</a></div>
    //     <div className="address">{data.address}</div>
    //     <div className="phone">{data.phone}</div>
    //   </div>
    // );
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
          <Button size="small" href={data.siteURL} color="primary">{data.siteURL}</Button>
          <Button size="small" href={phoneURL} color="primary">{data.phone}</Button>
        </CardActions>
      </Card>
    );
  }
}

Shelter.defaultProps = {
  freeBeds : 0,
  numberOfBeds : 0,
  name : "Default Name",
  siteURL : "example.com",
  address : "123 Fake St., City, ST 12345",
  phone : "(123) 456-7890",
};