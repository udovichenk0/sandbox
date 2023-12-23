import { createEvent, sample } from 'effector'
import { isStrictEqual } from './is-strict-equal'
import { createJsonQuery, type Contract, createHeadlessQuery } from '@farfetched/core'

function memo<P extends number | string | object | Record<string, unknown>, R>
  (func: (params: P) => R){
  let memoizedParams = null as null | P
  let memoizedResult = null as null | R
	return (params: P) => {
    if(memoizedParams && isStrictEqual(memoizedParams, params)){
      return memoizedResult
    }
    memoizedParams = params
    memoizedResult = func(params)
    return memoizedResult
  }
}
const event = createEvent<{params: number}>()
sample({
	clock: event,
  fn: memo((payload) => ({
    result: payload
  })),
})

event({params: 1})
event({params: 1})

const numberContract: Contract<
  unknown, // it takes some unknown data
  number // and returns number if it is valid
> = {
  // it is valid if data is a number
  isData: (data): data is number => typeof data === 'number',
  // if data is not a number,
  // we return an array with description of reasons why data is invalid
  getErrorMessages: (data) => {
    return [`Expected number, got ${typeof data}`];
  },
};
const fetch = createJsonQuery({
  request: {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
  },
  response: {
    mapData: (data: any) => {
      return data
    },
    contract: numberContract,
  }
})

