import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}> {user.username} {user.hometown}</li>)
    return (
      <div>
      {this.props.numOfUsers}
      <ul>
      Users!
          <li> {users}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users, 
    numOfUsers: state.users.length
  }
}
//add mapStateToProps here

export default connect(mapStateToProps) (Users)
