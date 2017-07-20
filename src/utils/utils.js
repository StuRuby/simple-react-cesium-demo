export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    const akeys = Object.keys(objA);
    const bkeys = Object.keys(objB);
    const len = akeys.length;
    if (bkeys.length !== len) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        const key = akeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}

export const noop = () => { };

export function isUndefined(value) {
    return value === undefined;
}


