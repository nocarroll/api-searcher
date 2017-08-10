import axios from 'axios'
const endpoint = 'https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json'

export default {
  getData () {
    return axios.get(endpoint)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
