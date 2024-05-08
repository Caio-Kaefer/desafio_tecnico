import services from './Services.js';

export function getServiceById(id) {
  return services.find(service => service.id === parseInt(id));
}
