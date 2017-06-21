import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UsersActions from '../actions/UsersActions';
import { UserList, AddUserInput } from '../components';

const initialState = {
  users: [1, 2, 3],
  usersById: {
    1: {
      id: 1,
      name: 'Harmeet'
    },
    2: {
      id: 2,
      name: 'Mehul'
    },
    3: {
      id: 3,
      name: 'Simon'
    },
  }
};


@connect(state => ({
  userlist: state.userlist
}))

export default class UserListApp extends Component {
  static propTypes = {
    usersById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { userlist: {usersById}, dispatch } = this.props;
    const actions = bindActionCreators(UsersActions, dispatch);

    return(
      <div>
        <h1>UserList</h1>
        <AddUserInput addUser={actions.addUser} />
        <UserList users={usersById} actions={actions}/>
      </div>
    );
  }
}

