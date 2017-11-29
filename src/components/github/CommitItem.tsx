import * as React from "react";
import PaperUi from '../ui/Paper';
import Loader from '../ui/Loader';
class CommitItem extends React.Component {
  render() {
    const {
      dateStamp,
      timeStamp,
      message,
      apiUrl,
      url,
      username,
      reponame,
      isLoading,
    } = this.props;
    return (
      url.startsWith(`https://api.github.com/repos/${username}/${reponame}`)
      &&  <PaperUi
            depth={2}
            children={
              <div>
                <div>{message}</div>
                <div>{`${dateStamp} ${timeStamp}`}</div>
              </div>
            }
          />
    )
  }
}

export default CommitItem;
