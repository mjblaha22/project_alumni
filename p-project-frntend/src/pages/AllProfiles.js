import React, { Component } from 'react';
// import { Form, FormGroup, Input } from 'reactstrap';
// import images from '../config/images.json'

import ProfileList from '../components/ProfileList.js'
import Api from '../Api/UserAPI.js'
// import { element } from 'prop-types';


class AllProfiles extends Component {
  state = {
    profiles: null,
  }
  componentDidMount() {
    Api.fetchAllAlumni()
      .then(data => {
        this.setState({
          profiles: data
        })
      })
  }
  render() {
    return (
      <div>
        <h3>ALL CODE PLATOON ALUMNI</h3>
        <ProfileList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default AllProfiles;

{/* <Form>
  <FormGroup className='col-3'>
  <Input
  type="text"
  name="profile"
  id='search-profile'
  placeholder="Search Profiles..."
  onChange={this.handleSearch.bind(this)} />
  </FormGroup>
  </Form>
<hr /> */}
                      // handleSearch = async (event) => {
                      //   const textToSearchFor = event.target.value;
                      //   if (textToSearchFor !== '') {
                      //     Api.fetchAllAlumni(textToSearchFor)
                      //     .then(data => {
                      //       this.setState({
                      //         profiles: data
                      //       })
                      //     })
                      //   }
                      // }