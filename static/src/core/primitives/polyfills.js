/**
 POLYFILLS
 Extend basic functions.
 */
"use strict";

/**
 * ----------------------------------------------------------------------------
 * Number, Math
 * ----------------------------------------------------------------------------
 */

/**
 * Extends epsilon
 */
if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}

/**
 * Polyfills isInteger
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
if (Number.isInteger === undefined) {
    Number.isInteger = function ($value) {
        return typeof $value === 'number' && isFinite($value) && Math.floor($value) === $value;
    };
}

/**
 * Sign
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 */
if (Math.sign === undefined) {
    Math.sign = function ($x) {
        /* eslint no-implicit-coercion:"off" */
        /* eslint no-nested-ternary:"off" */
        return ($x < 0) ? -1 : ($x > 0) ? 1 : +$x;
    };
}


/**
 * ----------------------------------------------------------------------------
 * Object
 * ----------------------------------------------------------------------------
 */

/**
 * Name prototype
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
 */
// noinspection PointlessBooleanExpressionJS
if ('name' in Function.prototype === false) {
    /* eslint no-extend-native:"off" */
    Object.defineProperty(Function.prototype, 'name', {
        get: function () {
            return this.toString().match(/^\s*function\s*([^(\s]*)/)[1];
        },
    });
}

/**
 * Assign
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (Object.assign === undefined) {
    (function () {
        /* eslint prefer-rest-params:"off" */
        Object.assign = function ($target) {
            if ($target === undefined || $target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            let $output = Object($target);
            for (let $index = 1; $index < arguments.length; $index += 1) {
                let $source = arguments[$index];
                if ($source !== undefined && $source !== null) {
                    for (let $nextKey in $source) {
                        if (Object.prototype.hasOwnProperty.call($source, $nextKey)) {
                            $output[$nextKey] = $source[$nextKey];
                        }
                    }
                }
            }
            return $output;
        };
    })();
}