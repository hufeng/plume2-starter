import 'whatwg-fetch';

/**
 * 定义异步返回结果的类型
 */
interface AsyncResult<T> {
  res: T;
  err: Error;
}

/**
 * 定义返回的用户类型
 */
interface User {
  id: number;
  name: string;
}

/**
 * 获取用户信息
 */
export const fetchUser = (): Promise<AsyncResult<User>> => {
  return new Promise(resolve => {
    //mock
    setTimeout(() => {
      resolve({
        res: { id: 1, name: 'plume2' },
        err: null
      });
    }, 100);
  });
};

/**
 * 使用async await 字节增加7kb
 */
// async function getTopics() {
//   const res = await fetch('https://cnodejs.org/api/v1/topics');
//   const json = await res.json();
//   return json;
// }

export default class WebApi {
  /**
   * 演示fetch 没有用到async await 页面的init 没有实际作用
   * 字节数减少
   */
  static init() {
    console.log('webapi init');
    return new Promise(resolve => {
      //resolve(getTopics());

      fetch('https://cnodejs.org/api/v1/topics').then(val => {
        console.log(val);
        setTimeout(() => {
          resolve({
            res: { id: 1, name: 'plume2' },
            err: null
          });
        }, 100);
      });
    });
  }
}
