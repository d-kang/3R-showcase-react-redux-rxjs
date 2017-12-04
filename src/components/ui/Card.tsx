import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MyCard = ({ title, subtitle, img, description, setToPlay, action1 }) => (
  <MuiThemeProvider>
    <Card style={{
      display: 'block',
      width: '30vw',
      transitionDuration: '0.3s',
      height: '45vw'
    }}>
      <CardHeader
        title={title}
        subtitle={subtitle}
        avatar={img}
      />
      <CardMedia
        overlay={<CardTitle title={title} subtitle={subtitle} />}
      >
        <img src={img} alt="" />
      </CardMedia>
      <CardTitle title={title} subtitle={subtitle} />
      <CardText>
        {description}
      </CardText>
      <CardActions>
        <FlatButton label={action1}onClick={setToPlay} />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </MuiThemeProvider>
);

export default MyCard;
