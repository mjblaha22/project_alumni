// const proxy = 'https://alumni-anywhere.herokuapp.com/'
const api_key = 'AIzaSyCaDPBcfpJigzgP8MfVvqheXApsyyge1_A'

const fetchProfile = async (userid) => {
  // console.log(token)
  let profile = await fetch(`http://localhost:8000/alumni/user/${userid}`) 
  .then(res => res.json())
  .then(data => data)
  console.log(profile)
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

const fetchBusiness = async () => {
  let businesslist = await fetch(`http://localhost:8000/user/businesses/`)
  .then(res => res.json())
  .then(data => data)
  return businesslist
}

const fetchLocation = async (map) => {
  console.log(map)
  let name = map.event_place.replace(' ', '+')
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
// headers: {
//   'Content-Type': 'application/json',
//   'Authorization': token
// }
// })
// console.log(profile)
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
  fetchMessage: fetchMessage,
  fetchAllAlumni: fetchAllAlumni
}