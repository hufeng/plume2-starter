/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 *
 * webapi 页面中需要调用的外部api 都放入webapi.js文件中定义
 */



import 'whatwg-fetch'

async function getTopics() {
  const res = await fetch('https://cnodejs.org/api/v1/topics');
  const json = await res.json();
  return json;
}


export default class WebApi {
  /**
   * 演示login页面的init 没有实际作用
   */
  static init() {
    console.log("webapi init");
    getTopics().then(d => {
      setTimeout(function () {
        console.log("data=>", d);
      }, 2000);

    })
  }

}

