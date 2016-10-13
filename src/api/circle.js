/**
 * Created by Administrator on 2016/10/11.
 */
import "whatwg-fetch"
const _get = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
    });
};

/**
 * Mocking client-server processing
 */
export default {
  getBanner () {
    return _get('http://192.168.1.92:8986/app/circle/indexTop');
  },
  getGroup(){
    return _get('http://192.168.1.92:8986/app/circle/indexList');
  }
}
