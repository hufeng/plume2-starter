import 'whatwg-fetch'
import { Response } from '../plume-utils'

export async function getTopicsDetail(id: string) {
  const res = await fetch('https://cnodejs.org/api/v1/topic/' + id)
  const json: Response = await res.json();
  return json;
}

