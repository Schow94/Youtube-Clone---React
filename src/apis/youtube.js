import axios from 'axios';

const KEY = "AIzaSyDclRZ1kGnw5SxEblUzZYcVsGNO94tCetQ";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY
  }
});