import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Card = ({ title, img, description }) => (
  <MuiThemeProvider>
    <Card >
      <CardHeader
        title={title}
        subtitle="Subtitle"
        avatar={img}
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src={img} alt="" />
      </CardMedia>
      <CardTitle title={title} subtitle="Card subtitle" />
      <CardText>
        {description}
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </MuiThemeProvider>
);

export default Card;
