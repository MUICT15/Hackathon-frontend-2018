import cookie from 'js-cookie';

const expires = 365;

export default {
  getItem(key) {
    if (process.SERVER_BUILD) return;
    cookie.get(key);
  },
  setItem(key, value) {
    if (process.SERVER_BUILD) return;
    cookie.set(key, value, {expires});
  },
  removeItem(key) {
    if (process.SERVER_BUILD) return;
    cookie.remove(key);
  },
};