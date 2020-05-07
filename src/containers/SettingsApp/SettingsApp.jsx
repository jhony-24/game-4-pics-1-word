import React, { Component, Fragment } from 'react';
import RowSoundActive from './subcontainers/RowSoundActive';
import RowRename from './subcontainers/RowRename';
import { connect } from 'react-redux';
import { userSelectors, userActions } from 'src/ducks/user';
import HeaderSettings from './subcomponents/HeaderSettings';
import RowSettingSheet from './subcomponents/RowSettingSheet';

class SettingsApp extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUser());
  }

  render() {
    const { username } = this.props;

    return (
      <Fragment>
        <HeaderSettings
          title={username || ""}
          details={"10 publicaciones"}
          avatar="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg" />
        <RowSoundActive />
        <RowRename defaultUsername={username} />
        <RowSettingSheet title="username" detail="hello world to others" />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  username: userSelectors.getUsername(state)
})
export default connect(mapStateToProps)(SettingsApp);
