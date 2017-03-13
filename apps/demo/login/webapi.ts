
import 'whatwg-fetch'

async function getTopics() {
  const res = await fetch('https://cnodejs.org/api/v1/topics')
  const json = await res.json();
  return json;
}


export default class WebApi {
  static init() {
    console.log("webapi init");
    getTopics().then(d => console.log("data=>", d))
  }

}

