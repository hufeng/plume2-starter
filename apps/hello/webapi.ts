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
  return new Promise((resolve) => {
    //mock
    setTimeout(() => {
      resolve({
        res: { id: 1, name: 'plume2' },
        err: null
      })
    }, 100)
  })
}