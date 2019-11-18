const proxy = 'https://cors-anywhere.herokuapp.com/'
const api_key = 'AIzaSyCaDPBcfpJigzgP8MfVvqheXApsyyge1_A'

const fetchProfile = async (userid) => {
  let profile = await fetch(`http://localhost:8000/user/user/${userid}/`)
  .then(res => res.json())
  .then(data => data)
  return profile
}

const fetchEvent = async () => {
  let eventlist = await fetch(`http://localhost:8000/user/events/`)
  .then(res => res.json())
  .then(data => data)
  return eventlist
}

const fetchBusiness = async () => {
  let businesslist = await fetch(`http://localhost:8000/user/businesses/`)
  .then(res => res.json())
  .then(data => data)
  return businesslist
}

const fetchLocation = async (map) => {
  let name = map.location_name.replace(' ', '+')
  console.log(name)
  let address = map.street_address.replace(' ', '+')
  console.log(address)
  let city = map.city.replace(' ', '+')
  console.log(city)
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

// const addTable = (tableObject, token) => {
//   return fetch(`${url}/tables`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': token
//     },
//     method: "POST",
//     body: JSON.stringify(tableObject)
//   })   
// }
// const addWine = (wineObject) => {
//   return fetch('https://cors-anywhere.herokuapp.com/https://powerful-ridge-27961.herokuapp.com/wines/', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(wineObject)
//   })
// }
export default {
  fetchProfile: fetchProfile,
  fetchEvent: fetchEvent,
  fetchLocation: fetchLocation,
  fetchBusiness: fetchBusiness,
  fetchMessage: fetchMessage
}