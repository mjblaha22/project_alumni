import ls from 'local-storage'

componentDidMount() {
  fetch(URL)
  .then(response => response.json())
  .then(json => this.setState({
    articles: json.results,
    readNow: ls.get('readNow') || [],
    readLater: ls.get('readLater') || [],
    likedSections: ls.get('likedSections') || []
  }));
  this.startInterval()
}