import 'whatwg-fetch'

/**
 * 定义异步返回结果
 */
interface AsyncResult<T> {
  res: T;
  err: Error;
}

/**
 * 封装业务fetch
 * @param input 输入url等
 * @param init 初始化http header信息等
 */
export default function Fetch<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<AsyncResult<T>> {
  return new Promise((resolve) => {
    fetch(input, init)
      .then(res => res.json())
      .then(data => resolve({
        res: data,
        err: null
      }))
      .catch(err => {
        //trace error
        if (process.env.NODE_ENV != 'production') {
          console.trace(err)
        }

        //错误处理,全局消息提示
        resolve({
          res: null,
          err: err
        })
      })
  })
}