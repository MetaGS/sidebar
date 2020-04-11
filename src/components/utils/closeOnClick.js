export function matchClassName(className, callBack) {
    return function(event) {
        if(event.target.className.includes(className)) {
            callBack(event);
        }
    } 
}

