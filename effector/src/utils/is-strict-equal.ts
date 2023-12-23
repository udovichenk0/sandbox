type Params = number | string | object | Record<string, unknown>
export function isStrictEqual(param1:Params, param2: Params){
    if(typeof param1 !== typeof param2) return false
    if(typeof param1 !== 'object') {
        return param1 === param2
    }
    if(Array.isArray(param1) && Array.isArray(param2)){
        if(param1.length !== param2.length){
            return false
        }
    }

    if(Object.keys(param1).length != Object.keys(param2).length) return false
    for(const key in param1){
        const obj1 = param1 as Record<string, unknown>
        const obj2 = param2 as Record<string, unknown>
        return isStrictEqual(obj1[key] as Record<string, unknown>, obj2[key] as Record<string, unknown>)
    }
    return true
}