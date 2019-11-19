import React, { Component } from 'react';
import ProfileList from '../components/ProfileList.js'
import Api from '../Api/UserAPI.js'

class ProfilePageTwo extends Component {

  state = {
    profile: null
  }

  async componentDidMount() {
    let profiles = await Api.fetchAllAlumni()
    this.setState({
        profile: profiles
      })
  }

  render() {
    console.log(this.state.profile)
    return (
      <div>
        <ProfileList profiles={this.state.profile} />
      </div>
    );
  }
}

export default ProfilePageTwo