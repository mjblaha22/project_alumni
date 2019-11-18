{
  this.state.status === 'success'
  &&
  <Alert className="col-6 ml-3" color="success">
  Your article was successfully added! <a href="/" className="alert-link">Check it out here</a>
  </Alert>
}
{
  this.state.status === 'failed'
  &&
  <Alert className="col-6 ml-3" color="danger">
  There was an error when submitting your article
  </Alert>
}
// let location = await fetch(`http://localhost:8000/user/events/kjghgjk/`)

// """
//     Create a new user. It's called 'UserList' because normally we'd have a get
//     method here too, for retrieving a list of all User objects.
//     """