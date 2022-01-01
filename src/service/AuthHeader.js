export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      let tk = user.accessToken; 
      return { Authorization: 'Bearer ' + tk };
    } else {
      return {};
    }
  }