import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import cookie from './cookie';
const socket = io('http://api.localhost/')

export const feather = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({
    storage: cookie
  }))
export const userService = feather.service('users');
export const consumerProductService  = feather.service('consumer-product');
