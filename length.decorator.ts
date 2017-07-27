function length(min: number, max: number){
    const validate = (value: string): boolean => {
        return value.length >= min && value.length <= max;
    };
    return function (target: Object, key: string) {
        let value = target[key];
        const setter = function (newVal) {
            if (validate(newVal)) {
                value = newVal;
            } else {
                throw new Error(`Field validation ko for '${newVal}, min length is ${min} and max length is ${max}' value = newVal`);
            }
        };
        Object.defineProperty(target, key, {
            set: setter
        });
    };
}

export {length as Length};