//------------------------------------------------------------------------
function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
    const key = (Object.keys(obj) as Array<U>).find(k => obj[k] === value)
    return key || null
}

const man = {
    name: 'Max'
}

const key = getKey(man, 'Max')
console.log(key);

//-------------------------------------------------------------------------

function getValue<T extends object, U extends keyof T>(obj: T, key1: U) {
    return obj[key1]
}

const value = getValue(man, 'name')
console.log(value);