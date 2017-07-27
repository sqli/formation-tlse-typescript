define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function length(min, max) {
        var validate = function (value) {
            return value.length >= min && value.length <= max;
        };
        return function (target, key) {
            var value = target[key];
            var setter = function (newVal) {
                if (validate(newVal)) {
                    value = newVal;
                }
                else {
                    throw new Error("Field validation ko for '" + newVal + ", min length is " + min + " and max length is " + max + "' value = newVal");
                }
            };
            Object.defineProperty(target, key, {
                set: setter
            });
        };
    }
    exports.Length = length;
});
//# sourceMappingURL=length.decorator.js.map