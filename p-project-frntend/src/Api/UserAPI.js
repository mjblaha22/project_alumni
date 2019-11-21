// const proxy = 'https://alumni-anywhere.herokuapp.com/'
{/* <script src="https://code.responsivevoice.org/responsivevoice.js?key=IE4XUNg5"></script> */}
const voiceurl = 'http://api.voicerss.org/?key=<API key>&hl=en-us&src=Hello, world!'
const voicekey = '9736c363b2ec443da1023a9af4b1934a'
const url = `http://localhost:8000/alumni/user/`
const api_two = 'AIzaSyCQNsn0rFbQvmf5ug7_xna1_iP6kMReNUI'
const api_key = 'AIzaSyCaDPBcfpJigzgP8MfVvqheXApsyyge1_A'

const fetchProfile = async (userid) => {
  let profile = await fetch(`http://localhost:8000/alumni/user/${userid}/`) 
  .then(res => res.json())
  .then(data => data)
  return profile
}

const fetchAllAlumni = async () => {
  let users = await fetch(`http://localhost:8000/alumni/user/`)
  .then(res => res.json())
  .then(data => data)
  return users
}

const fetchEvent = async () => {
  let eventlist = await fetch(`http://localhost:8000/alumni/events/`)
  .then(res => res.json())
  .then(data => data)
  return eventlist
}
const addEvent = (newEventObject) => {
  return fetch('http://localhost:8000/alumni/events/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newEventObject)
  })
}

const fetchLocation = async (map) => {
  let name = map.event_place.replace(' ', '+')
  let address = map.street_address.replace(' ', '+')
  let city = map.city.replace(' ', '+')
  let state = map.state.replace(' ', '+')
  let location = `https://www.google.com/maps/embed/v1/search?q=+${name},+${address},+${city},+${state},+USA&key=${api_key}`
  return location
}

const fetchMessage = async () => {
  let message = await fetch(`http://localhost:8000/user/messages/`)
  .then(res => res.json())
  .then(data => data)
  return message
}
const fetchSearch = (search) => {
  let alumni = fetch(`${url}?filter={"where":{"title":{"ilike":"${search}"}}}`)
  .then(res => res.json())
  .then(data => data)
  return alumni
}

export default {
  addEvent: addEvent,
  fetchProfile: fetchProfile,
  fetchEvent: fetchEvent,
  fetchLocation: fetchLocation,
  fetchAllAlumni: fetchAllAlumni
}