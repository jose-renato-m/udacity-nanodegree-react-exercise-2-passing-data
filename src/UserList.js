import React, {Component} from "react";

class UserList extends Component {
  render() {
   const {users, usersWhoLikedMovie} = this.props;
    
   if (!usersWhoLikedMovie || usersWhoLikedMovie.lenght === 0) {
     return <p>None of the current users liked this movie.</p>;
   }
  }
}