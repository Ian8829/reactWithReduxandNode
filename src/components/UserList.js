import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';
import UserListItem from './UsersListItem';

export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    return(
      <div className="media">
        {
          mapValues(this.props.users, users => {
            return (<UserListItem
              id={users.id}
              name={users.name}
              src={users.src}
              {...this.props.actions}
            />);
          })
        }
      </div>
    );
  }
}