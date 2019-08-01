import jwtDecode from 'jwt-decode';

class Helpers {
  static stringReplace(find, replace, string) {
    return `${string}`.split(find).join(replace);
  }
  static persianNumber(string) {
    const numbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return string.replace(/[0-9]/g, word => numbers[+word]);
  }
  static englishNumber(string) {
    return string
      .replace(/[\u0660-\u0669]/g, c => c.charCodeAt(0) - 0x0660)
      .replace(/[\u06f0-\u06f9]/g, c => c.charCodeAt(0) - 0x06f0);
  }
  static generateKey() {
    const timeStamp = Math.round(new Date().getTime() / 1000);
    const rand = Math.floor(Math.random() * 10000 + 1);
    return `${timeStamp}${rand}`;
  }

  /* eslint-disable no-useless-escape */
  static getQueryString(url, parameter) {
    const myParameter = parameter.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${myParameter}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  static getCookie(key) {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let index = 0; index < cookies.length; index += 1) {
      let cookie = cookies[index];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  }
  static bulkStringReplace(replacements, string) {
    let modifiedString = string;
    Object.keys(replacements).forEach(key => {
      modifiedString = this.stringReplace(
        key,
        replacements[key],
        modifiedString,
      );
    });
    return modifiedString;
  }
  static localStorageGetItem(key, item) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (item) {
        return data[item].split('"').join('');
      }
      return null;
    } catch (error) {
      return null;
    }
  }
  static isTokenExpired(token) {
    const { exp: expire } = jwtDecode(token);
    const now = new Date().getUnixTime(Date.now());
    return now >= expire;
  }
  static getExtension(fileName) {
    const splitedFileName = fileName.split('.');
    return splitedFileName[splitedFileName.length - 1].toLowerCase();
  }
  static toFormData(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (!Array.isArray(data[key])) {
        formData.append(key, data[key]);
      }
      if (Array.isArray(data[key])) {
        data[key].forEach(value => formData.append(`${key}[]`, value));
      }
    });
    return formData;
  }
}
export default Helpers;
