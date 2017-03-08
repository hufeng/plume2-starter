
import { Response } from '../plume-utils'

export default async function getTopics() {

  const res = await fetch('http://cnodejs.org/api/v1/topics')
  const json: Response = await res.json();
  return json;

}

