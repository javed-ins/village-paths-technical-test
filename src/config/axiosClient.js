import axios from 'axios';
import constants from './utils/constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = constants.HOST_URL;

axiosClient.defaults.headers = constants.headers;

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;

export function getRequest(URL) {
  return axiosClient.get(`${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}
export async function fetchOrg() {
  try {
    const response = await getRequest(
      'https://sprout-tech-assets.s3.amazonaws.com/village-paths-test-data/data.json',
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}