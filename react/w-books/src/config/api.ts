import { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

const deserializer = new CamelcaseSerializer();
const serializer = new SnakecaseSerializer();
const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = create({
  baseURL,
  timeout: 60000
});
api.addResponseTransform(response => {
  if (response.data) {
    response.data = deserializer.serialize(response.data);
  }
});
api.addRequestTransform(request => {
  if (request.data) {
    request.data = serializer.serialize(request.data);
  }
});
export default api;
