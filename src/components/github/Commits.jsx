import React, { Component } from 'react';

class Commit extends Component {
  render() {
    const { dateStamp, timeStamp, message, apiUrl, url, username, reponame } = this.props;
    return (
      url.startsWith(`https://api.github.com/repos/${username}/${reponame}`)
      &&  <div>
            <div>{message}</div>
            <div>{`${dateStamp} ${timeStamp}`}</div>
          </div>
    )
  }
}


const Commits = ({ response, apiUrl, username, reponame }) => (
  response.map((commit, i) => (
    <PaperExampleRounded
      children={
        <Commit
          key={i}
          {...commit}
          apiUrl={apiUrl}
          username={username}
          reponame={reponame}
        />
      }
    />


  ))
);

export default Commits;



import { MuiThemeProvider, Paper } from 'material-ui';

const style = {
  height: 'inherit',
  width: 'inherit',
  margin: 20,
  fontFamily: 'Roboto',
  // textAlign: 'center',
  // display: 'inline-block',
};

const PaperExampleRounded = ({ children }) => (
  <MuiThemeProvider>
    <Paper style={style} zDepth={1} rounded={false}
      children={children}
    />

    {/* <Paper style={style} zDepth={2} rounded={false} />
    <Paper style={style} zDepth={3} rounded={false} />
    <Paper style={style} zDepth={4} rounded={false} />
    <Paper style={style} zDepth={5} rounded={false} /> */}
  </MuiThemeProvider>
);

// export default PaperExampleRounded;
