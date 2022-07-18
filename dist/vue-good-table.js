/**
 * vue-good-table v2.21.11
 * (c) 2018-present xaksis <shay@crayonbits.com>
 * https://github.com/xaksis/vue-good-table
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['vue-good-table'] = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var DEFAULT_SORT_TYPE = 'asc';
  var SORT_TYPES = {
    Ascending: 'asc',
    Descending: 'desc',
    None: 'none'
  };
  var PAGINATION_MODES = {
    Pages: 'pages',
    Records: 'records'
  };
  var DEFAULT_ROWS_PER_PAGE_DROPDOWN = [10, 20, 30, 40, 50];

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var lodash_isequal = createCommonjsModule(function (module, exports) {
  /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice,
      symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object);

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);

    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;

    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = isEqual;
  });

  // all diacritics
  var diacritics = {
    a: ["a", "à", "á", "â", "ã", "ä", "å", "æ", "ā", "ă", "ą", "ǎ", "ǟ", "ǡ", "ǻ", "ȁ", "ȃ", "ȧ", "ɐ", "ɑ", "ɒ", "ͣ", "а", "ӑ", "ӓ", "ᵃ", "ᵄ", "ᶏ", "ḁ", "ẚ", "ạ", "ả", "ấ", "ầ", "ẩ", "ẫ", "ậ", "ắ", "ằ", "ẳ", "ẵ", "ặ", "ₐ", "ⱥ", "ａ"],
    b: ["b", "ƀ", "ƃ", "ɓ", "ᖯ", "ᵇ", "ᵬ", "ᶀ", "ḃ", "ḅ", "ḇ", "ｂ"],
    c: ["c", "ç", "ć", "ĉ", "ċ", "č", "ƈ", "ȼ", "ɕ", "ͨ", "ᴄ", "ᶜ", "ḉ", "ↄ", "ｃ"],
    d: ["d", "ď", "đ", "Ƌ", "ƌ", "ȡ", "ɖ", "ɗ", "ͩ", "ᵈ", "ᵭ", "ᶁ", "ᶑ", "ḋ", "ḍ", "ḏ", "ḑ", "ḓ", "ｄ"],
    e: ["e", "è", "é", "ê", "ë", "ē", "ĕ", "ė", "ę", "ě", "ǝ", "ȅ", "ȇ", "ȩ", "ɇ", "ɘ", "ͤ", "ᵉ", "ᶒ", "ḕ", "ḗ", "ḙ", "ḛ", "ḝ", "ẹ", "ẻ", "ẽ", "ế", "ề", "ể", "ễ", "ệ", "ₑ", "ｅ"],
    f: ["f", "ƒ", "ᵮ", "ᶂ", "ᶠ", "ḟ", "ｆ"],
    g: ["g", "ĝ", "ğ", "ġ", "ģ", "ǥ", "ǧ", "ǵ", "ɠ", "ɡ", "ᵍ", "ᵷ", "ᵹ", "ᶃ", "ᶢ", "ḡ", "ｇ"],
    h: ["h", "ĥ", "ħ", "ƕ", "ȟ", "ɥ", "ɦ", "ʮ", "ʯ", "ʰ", "ʱ", "ͪ", "Һ", "һ", "ᑋ", "ᶣ", "ḣ", "ḥ", "ḧ", "ḩ", "ḫ", "ⱨ", "ｈ"],
    i: ["i", "ì", "í", "î", "ï", "ĩ", "ī", "ĭ", "į", "ǐ", "ȉ", "ȋ", "ɨ", "ͥ", "ᴉ", "ᵎ", "ᵢ", "ᶖ", "ᶤ", "ḭ", "ḯ", "ỉ", "ị", "ｉ"],
    j: ["j", "ĵ", "ǰ", "ɉ", "ʝ", "ʲ", "ᶡ", "ᶨ", "ｊ"],
    k: ["k", "ķ", "ƙ", "ǩ", "ʞ", "ᵏ", "ᶄ", "ḱ", "ḳ", "ḵ", "ⱪ", "ｋ"],
    l: ["l", "ĺ", "ļ", "ľ", "ŀ", "ł", "ƚ", "ȴ", "ɫ", "ɬ", "ɭ", "ˡ", "ᶅ", "ᶩ", "ᶪ", "ḷ", "ḹ", "ḻ", "ḽ", "ℓ", "ⱡ"],
    m: ["m", "ɯ", "ɰ", "ɱ", "ͫ", "ᴟ", "ᵐ", "ᵚ", "ᵯ", "ᶆ", "ᶬ", "ᶭ", "ḿ", "ṁ", "ṃ", "㎡", "㎥", "ｍ"],
    n: ["n", "ñ", "ń", "ņ", "ň", "ŉ", "ƞ", "ǹ", "ȵ", "ɲ", "ɳ", "ᵰ", "ᶇ", "ᶮ", "ᶯ", "ṅ", "ṇ", "ṉ", "ṋ", "ⁿ", "ｎ"],
    o: ["o", "ò", "ó", "ô", "õ", "ö", "ø", "ō", "ŏ", "ő", "ơ", "ǒ", "ǫ", "ǭ", "ǿ", "ȍ", "ȏ", "ȫ", "ȭ", "ȯ", "ȱ", "ɵ", "ͦ", "о", "ӧ", "ө", "ᴏ", "ᴑ", "ᴓ", "ᴼ", "ᵒ", "ᶱ", "ṍ", "ṏ", "ṑ", "ṓ", "ọ", "ỏ", "ố", "ồ", "ổ", "ỗ", "ộ", "ớ", "ờ", "ở", "ỡ", "ợ", "ₒ", "ｏ", "𐐬"],
    p: ["p", "ᵖ", "ᵱ", "ᵽ", "ᶈ", "ṕ", "ṗ", "ｐ"],
    q: ["q", "ɋ", "ʠ", "ᛩ", "ｑ"],
    r: ["r", "ŕ", "ŗ", "ř", "ȑ", "ȓ", "ɍ", "ɹ", "ɻ", "ʳ", "ʴ", "ʵ", "ͬ", "ᵣ", "ᵲ", "ᶉ", "ṙ", "ṛ", "ṝ", "ṟ"],
    s: ["s", "ś", "ŝ", "ş", "š", "ș", "ʂ", "ᔆ", "ᶊ", "ṡ", "ṣ", "ṥ", "ṧ", "ṩ", "ｓ"],
    t: ["t", "ţ", "ť", "ŧ", "ƫ", "ƭ", "ț", "ʇ", "ͭ", "ᵀ", "ᵗ", "ᵵ", "ᶵ", "ṫ", "ṭ", "ṯ", "ṱ", "ẗ", "ｔ"],
    u: ["u", "ù", "ú", "û", "ü", "ũ", "ū", "ŭ", "ů", "ű", "ų", "ư", "ǔ", "ǖ", "ǘ", "ǚ", "ǜ", "ȕ", "ȗ", "ͧ", "ߎ", "ᵘ", "ᵤ", "ṳ", "ṵ", "ṷ", "ṹ", "ṻ", "ụ", "ủ", "ứ", "ừ", "ử", "ữ", "ự", "ｕ"],
    v: ["v", "ʋ", "ͮ", "ᵛ", "ᵥ", "ᶹ", "ṽ", "ṿ", "ⱱ", "ｖ", "ⱴ"],
    w: ["w", "ŵ", "ʷ", "ᵂ", "ẁ", "ẃ", "ẅ", "ẇ", "ẉ", "ẘ", "ⱳ", "ｗ"],
    x: ["x", "̽", "͓", "ᶍ", "ͯ", "ẋ", "ẍ", "ₓ", "ｘ"],
    y: ["y", "ý", "ÿ", "ŷ", "ȳ", "ɏ", "ʸ", "ẏ", "ỳ", "ỵ", "ỷ", "ỹ", "ｙ"],
    z: ["z", "ź", "ż", "ž", "ƶ", "ȥ", "ɀ", "ʐ", "ʑ", "ᙆ", "ᙇ", "ᶻ", "ᶼ", "ᶽ", "ẑ", "ẓ", "ẕ", "ⱬ", "ｚ"]
  }; // Precompiled Object with { key = Diacritic, value = real-Character }

  var compiledDiactitics = function () {
    var x = {};

    for (var key in diacritics) {
      var ok = diacritics[key];

      for (var rval in ok) {
        var val = ok[rval]; // Do not replace the char with itself

        if (val !== key) {
          x[val] = key;
        }
      }
    }

    return x;
  }(); // Regex for detecting non-ASCII-Characters in String


  var regexNonASCII = /[^a-z0-9\s,.-]/;
  /*
   * Main function of the module which removes all diacritics from the received text
   */

  var diacriticless = function diacriticless(text) {
    // When there are only ascii-Characters in the string, skip processing and return text right away
    if (text.search(regexNonASCII) === -1) {
      return text;
    }

    var result = "";
    var len = text.length;

    for (var i = 0; i < len; i++) {
      var searchChar = text.charAt(i); // If applicable replace the diacritic character with the real one or use the original value

      result += searchChar in compiledDiactitics ? compiledDiactitics[searchChar] : searchChar;
    }

    return result;
  };

  var escapeRegExp = function escapeRegExp(str) {
    return str.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var defaultType = {
    format: function format(x) {
      return x;
    },
    filterPredicate: function filterPredicate(rowval, filter) {
      var skipDiacritics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var fromDropdown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      // take care of nulls
      if (typeof rowval === 'undefined' || rowval === null) {
        return false;
      } // row value


      var rowValue = skipDiacritics ? String(rowval).toLowerCase() : diacriticless(escapeRegExp(String(rowval)).toLowerCase()); // search term

      var searchTerm = skipDiacritics ? filter.toLowerCase() : diacriticless(escapeRegExp(filter).toLowerCase()); // comparison

      return fromDropdown ? rowValue === searchTerm : rowValue.indexOf(searchTerm) > -1;
    },
    compare: function compare(x, y) {
      function cook(d) {
        if (typeof d === 'undefined' || d === null) return '';
        return diacriticless(String(d).toLowerCase());
      }

      x = cook(x);
      y = cook(y);
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    }
  };

  //
  var script = {
    name: 'VgtPaginationPageInfo',
    props: {
      currentPage: {
        "default": 1
      },
      lastPage: {
        "default": 1
      },
      totalRecords: {
        "default": 0
      },
      ofText: {
        "default": 'of',
        type: String
      },
      pageText: {
        "default": 'page',
        type: String
      },
      currentPerPage: {},
      mode: {
        "default": PAGINATION_MODES.Records
      },
      infoFn: {
        "default": null
      }
    },
    data: function data() {
      return {
        id: this.getId()
      };
    },
    computed: {
      pageInfo: function pageInfo() {
        return "".concat(this.ofText, " ").concat(this.lastPage);
      },
      firstRecordOnPage: function firstRecordOnPage() {
        return (this.currentPage - 1) * this.currentPerPage + 1;
      },
      lastRecordOnPage: function lastRecordOnPage() {
        // if the setting is set to 'all'
        if (this.currentPerPage === -1) {
          return this.totalRecords;
        }

        return Math.min(this.totalRecords, this.currentPage * this.currentPerPage);
      },
      recordInfo: function recordInfo() {
        var first = this.firstRecordOnPage;
        var last = this.lastRecordOnPage;

        if (last === 0) {
          first = 0;
        }

        return "".concat(first, " - ").concat(last, " ").concat(this.ofText, " ").concat(this.totalRecords);
      },
      infoParams: function infoParams() {
        var first = this.firstRecordOnPage;
        var last = this.lastRecordOnPage;

        if (last === 0) {
          first = 0;
        }

        return {
          firstRecordOnPage: first,
          lastRecordOnPage: last,
          totalRecords: this.totalRecords,
          currentPage: this.currentPage,
          totalPage: this.lastPage
        };
      }
    },
    methods: {
      getId: function getId() {
        return "vgt-page-input-".concat(Math.floor(Math.random() * Date.now()));
      },
      changePage: function changePage(event) {
        var value = parseInt(event.target.value, 10); //! invalid number

        if (Number.isNaN(value) || value > this.lastPage || value < 1) {
          event.target.value = this.currentPage;
          return false;
        } //* valid number


        event.target.value = value;
        this.$emit('page-changed', value);
      }
    },
    mounted: function mounted() {},
    components: {}
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "footer__navigation__page-info"
    }, [_vm.infoFn ? _c('div', [_vm._v("\r\n    " + _vm._s(_vm.infoFn(_vm.infoParams)) + "\r\n  ")]) : _vm.mode === 'pages' ? _c('form', {
      on: {
        "submit": function submit($event) {
          $event.preventDefault();
        }
      }
    }, [_c('label', {
      staticClass: "page-info__label",
      attrs: {
        "for": _vm.id
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.pageText))]), _vm._v(" "), _c('input', {
      staticClass: "footer__navigation__page-info__current-entry",
      attrs: {
        "id": _vm.id,
        "aria-describedby": "change-page-hint",
        "aria-controls": "vgb-table",
        "type": "text"
      },
      domProps: {
        "value": _vm.currentPage
      },
      on: {
        "keyup": function keyup($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }

          $event.stopPropagation();
          return _vm.changePage($event);
        }
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.pageInfo))])]), _vm._v(" "), _c('span', {
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "id": "change-page-hint"
      }
    }, [_vm._v("\r\n      Type a page number and press Enter to change the page.\r\n    ")])]) : _c('div', [_vm._v("\r\n    " + _vm._s(_vm.recordInfo) + "\r\n  ")])]);
  };

  var __vue_staticRenderFns__ = [];
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = "data-v-25f32d10";
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  //
  var script$1 = {
    name: 'VgtPagination',
    props: {
      styleClass: {
        "default": 'table table-bordered'
      },
      total: {
        "default": null
      },
      perPage: {},
      rtl: {
        "default": false
      },
      perPageDropdownEnabled: {
        "default": true
      },
      customRowsPerPageDropdown: {
        "default": function _default() {
          return [];
        }
      },
      paginateDropdownAllowAll: {
        "default": true
      },
      mode: {
        "default": PAGINATION_MODES.Records
      },
      jumpFirstOrLast: {
        "default": false
      },
      // text options
      firstText: {
        "default": "First"
      },
      lastText: {
        "default": "Last"
      },
      nextText: {
        "default": 'Next'
      },
      prevText: {
        "default": 'Prev'
      },
      rowsPerPageText: {
        "default": 'Rows per page:'
      },
      ofText: {
        "default": 'of'
      },
      pageText: {
        "default": 'page'
      },
      allText: {
        "default": 'All'
      },
      infoFn: {
        "default": null
      }
    },
    data: function data() {
      return {
        id: this.getId(),
        currentPage: 1,
        prevPage: 0,
        currentPerPage: 10,
        rowsPerPageOptions: []
      };
    },
    watch: {
      perPage: {
        handler: function handler(newValue, oldValue) {
          this.handlePerPage();
          this.perPageChanged(oldValue);
        },
        immediate: true
      },
      customRowsPerPageDropdown: function customRowsPerPageDropdown() {
        this.handlePerPage();
      },
      total: {
        handler: function handler(newValue, oldValue) {
          if (this.rowsPerPageOptions.indexOf(this.currentPerPage) === -1) {
            this.currentPerPage = newValue;
          }
        }
      }
    },
    computed: {
      // Number of pages
      pagesCount: function pagesCount() {
        // if the setting is set to 'all'
        if (this.currentPerPage === -1) {
          return 1;
        }

        var quotient = Math.floor(this.total / this.currentPerPage);
        var remainder = this.total % this.currentPerPage;
        return remainder === 0 ? quotient : quotient + 1;
      },
      // Can go to first page
      firstIsPossible: function firstIsPossible() {
        return this.currentPage > 1;
      },
      // Can go to last page
      lastIsPossible: function lastIsPossible() {
        return this.currentPage < Math.ceil(this.total / this.currentPerPage);
      },
      // Can go to next page
      nextIsPossible: function nextIsPossible() {
        return this.currentPage < this.pagesCount;
      },
      // Can go to previous page
      prevIsPossible: function prevIsPossible() {
        return this.currentPage > 1;
      }
    },
    methods: {
      getId: function getId() {
        return "vgt-select-rpp-".concat(Math.floor(Math.random() * Date.now()));
      },
      // Change current page
      changePage: function changePage(pageNumber) {
        var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (pageNumber > 0 && this.total > this.currentPerPage * (pageNumber - 1)) {
          this.prevPage = this.currentPage;
          this.currentPage = pageNumber;
          this.pageChanged(emit);
        }
      },
      // Go to first page
      firstPage: function firstPage() {
        if (this.firstIsPossible) {
          this.currentPage = 1;
          this.prevPage = 0;
          this.pageChanged();
        }
      },
      // Go to last page
      lastPage: function lastPage() {
        if (this.lastIsPossible) {
          this.currentPage = this.pagesCount;
          this.prev = this.currentPage - 1;
          this.pageChanged();
        }
      },
      // Go to next page
      nextPage: function nextPage() {
        if (this.nextIsPossible) {
          this.prevPage = this.currentPage;
          ++this.currentPage;
          this.pageChanged();
        }
      },
      // Go to previous page
      previousPage: function previousPage() {
        if (this.prevIsPossible) {
          this.prevPage = this.currentPage;
          --this.currentPage;
          this.pageChanged();
        }
      },
      // Indicate page changing
      pageChanged: function pageChanged() {
        var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var payload = {
          currentPage: this.currentPage,
          prevPage: this.prevPage
        };
        if (!emit) payload.noEmit = true;
        this.$emit('page-changed', payload);
      },
      // Indicate per page changing
      perPageChanged: function perPageChanged(oldValue) {
        // go back to first page
        if (oldValue) {
          //* only emit if this isn't first initialization
          this.$emit('per-page-changed', {
            currentPerPage: this.currentPerPage
          });
        }

        this.changePage(1, false);
      },
      // Handle per page changing
      handlePerPage: function handlePerPage() {
        //* if there's a custom dropdown then we use that
        if (this.customRowsPerPageDropdown !== null && Array.isArray(this.customRowsPerPageDropdown) && this.customRowsPerPageDropdown.length !== 0) {
          this.rowsPerPageOptions = JSON.parse(JSON.stringify(this.customRowsPerPageDropdown));
        } else {
          //* otherwise we use the default rows per page dropdown
          this.rowsPerPageOptions = JSON.parse(JSON.stringify(DEFAULT_ROWS_PER_PAGE_DROPDOWN));
        }

        if (this.perPage) {
          this.currentPerPage = this.perPage; // if perPage doesn't already exist, we add it

          var found = false;

          for (var i = 0; i < this.rowsPerPageOptions.length; i++) {
            if (this.rowsPerPageOptions[i] === this.perPage) {
              found = true;
            }
          }

          if (!found && this.perPage !== -1) {
            this.rowsPerPageOptions.unshift(this.perPage);
          }
        } else {
          // reset to default
          this.currentPerPage = 10;
        }
      }
    },
    mounted: function mounted() {},
    components: {
      'pagination-page-info': __vue_component__
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "vgt-wrap__footer vgt-clearfix"
    }, [_vm.perPageDropdownEnabled ? _c('div', {
      staticClass: "footer__row-count vgt-pull-left"
    }, [_c('form', [_c('label', {
      staticClass: "footer__row-count__label",
      attrs: {
        "for": _vm.id
      }
    }, [_vm._v(_vm._s(_vm.rowsPerPageText) + ":")]), _vm._v(" "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.currentPerPage,
        expression: "currentPerPage"
      }],
      staticClass: "footer__row-count__select",
      attrs: {
        "id": _vm.id,
        "autocomplete": "off",
        "name": "perPageSelect",
        "aria-controls": "vgt-table"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.currentPerPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }, _vm.perPageChanged]
      }
    }, [_vm._l(_vm.rowsPerPageOptions, function (option, idx) {
      return _c('option', {
        key: idx,
        domProps: {
          "value": option
        }
      }, [_vm._v("\n          " + _vm._s(option) + "\n        ")]);
    }), _vm._v(" "), _vm.paginateDropdownAllowAll ? _c('option', {
      domProps: {
        "value": -1
      }
    }, [_vm._v(_vm._s(_vm.allText))]) : _vm._e()], 2)])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "footer__navigation vgt-pull-right"
    }, [_c('pagination-page-info', {
      attrs: {
        "total-records": _vm.total,
        "last-page": _vm.pagesCount,
        "current-page": _vm.currentPage,
        "current-per-page": _vm.currentPerPage,
        "of-text": _vm.ofText,
        "page-text": _vm.pageText,
        "info-fn": _vm.infoFn,
        "mode": _vm.mode
      },
      on: {
        "page-changed": _vm.changePage
      }
    }), _vm._v(" "), _vm.jumpFirstOrLast ? _c('button', {
      staticClass: "footer__navigation__page-btn",
      "class": {
        disabled: !_vm.firstIsPossible
      },
      attrs: {
        "type": "button",
        "aria-controls": "vgt-table"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.firstPage($event);
        }
      }
    }, [_c('span', {
      staticClass: "chevron",
      "class": {
        left: !_vm.rtl,
        right: _vm.rtl
      },
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.firstText))])]) : _vm._e(), _vm._v(" "), _c('button', {
      staticClass: "footer__navigation__page-btn",
      "class": {
        disabled: !_vm.prevIsPossible
      },
      attrs: {
        "type": "button",
        "aria-controls": "vgt-table"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.previousPage($event);
        }
      }
    }, [_c('span', {
      staticClass: "chevron",
      "class": {
        'left': !_vm.rtl,
        'right': _vm.rtl
      },
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.prevText))])]), _vm._v(" "), _c('button', {
      staticClass: "footer__navigation__page-btn",
      "class": {
        disabled: !_vm.nextIsPossible
      },
      attrs: {
        "type": "button",
        "aria-controls": "vgt-table"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.nextPage($event);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.nextText))]), _vm._v(" "), _c('span', {
      staticClass: "chevron",
      "class": {
        'right': !_vm.rtl,
        'left': _vm.rtl
      },
      attrs: {
        "aria-hidden": "true"
      }
    })]), _vm._v(" "), _vm.jumpFirstOrLast ? _c('button', {
      staticClass: "footer__navigation__page-btn",
      "class": {
        disabled: !_vm.lastIsPossible
      },
      attrs: {
        "type": "button",
        "aria-controls": "vgt-table"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.lastPage($event);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.lastText))]), _vm._v(" "), _c('span', {
      staticClass: "chevron",
      "class": {
        right: !_vm.rtl,
        left: _vm.rtl
      },
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e()], 1)]);
  };

  var __vue_staticRenderFns__$1 = [];
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$2 = {
    name: 'VgtGlobalSearch',
    props: ['value', 'searchEnabled', 'globalSearchPlaceholder'],
    data: function data() {
      return {
        globalSearchTerm: null,
        id: this.getId()
      };
    },
    computed: {
      showControlBar: function showControlBar() {
        if (this.searchEnabled) return true;
        if (this.$slots && this.$slots['internal-table-actions']) return true;
        return false;
      }
    },
    methods: {
      updateValue: function updateValue(value) {
        this.$emit('input', value);
        this.$emit('on-keyup', value);
      },
      entered: function entered(value) {
        this.$emit('on-enter', value);
      },
      getId: function getId() {
        return "vgt-search-".concat(Math.floor(Math.random() * Date.now()));
      }
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.showControlBar ? _c('div', {
      staticClass: "vgt-global-search vgt-clearfix"
    }, [_c('div', {
      staticClass: "vgt-global-search__input vgt-pull-left"
    }, [_vm.searchEnabled ? _c('form', {
      attrs: {
        "role": "search"
      },
      on: {
        "submit": function submit($event) {
          $event.preventDefault();
        }
      }
    }, [_c('label', {
      attrs: {
        "for": _vm.id
      }
    }, [_vm._m(0), _vm._v(" "), _c('span', {
      staticClass: "sr-only"
    }, [_vm._v("Search")])]), _vm._v(" "), _c('input', {
      staticClass: "vgt-input vgt-pull-left",
      attrs: {
        "id": _vm.id,
        "type": "text",
        "placeholder": _vm.globalSearchPlaceholder
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          return _vm.updateValue($event.target.value);
        },
        "keyup": function keyup($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }

          return _vm.entered($event.target.value);
        }
      }
    })]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "vgt-global-search__actions vgt-pull-right"
    }, [_vm._t("internal-table-actions")], 2)]) : _vm._e();
  };

  var __vue_staticRenderFns__$2 = [function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      staticClass: "input__icon",
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('div', {
      staticClass: "magnifying-glass"
    })]);
  }];
  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$3 = {
    name: 'VgtFilterRow',
    props: ['lineNumbers', 'columns', 'typedColumns', 'globalSearchEnabled', 'selectable', 'mode'],
    watch: {
      columns: {
        handler: function handler(newValue, oldValue) {
          this.populateInitialFilters();
        },
        deep: true,
        immediate: true
      }
    },
    data: function data() {
      return {
        columnFilters: {},
        timer: null
      };
    },
    computed: {
      // to create a filter row, we need to
      // make sure that there is atleast 1 column
      // that requires filtering
      hasFilterRow: function hasFilterRow() {
        // if (this.mode === 'remote' || !this.globalSearchEnabled) {
        for (var i = 0; i < this.columns.length; i++) {
          var col = this.columns[i];

          if (col.filterOptions && col.filterOptions.enabled) {
            return true;
          }
        } // }


        return false;
      }
    },
    methods: {
      fieldKey: function fieldKey(field) {
        if (typeof field === 'function' && field.name) {
          return field.name;
        }

        return field;
      },
      reset: function reset() {
        var emitEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.columnFilters = {};

        if (emitEvent) {
          this.$emit('filter-changed', this.columnFilters);
        }
      },
      isFilterable: function isFilterable(column) {
        return column.filterOptions && column.filterOptions.enabled;
      },
      isDropdown: function isDropdown(column) {
        return this.isFilterable(column) && column.filterOptions.filterDropdownItems && column.filterOptions.filterDropdownItems.length;
      },
      isDropdownObjects: function isDropdownObjects(column) {
        return this.isDropdown(column) && _typeof(column.filterOptions.filterDropdownItems[0]) === 'object';
      },
      isDropdownArray: function isDropdownArray(column) {
        return this.isDropdown(column) && _typeof(column.filterOptions.filterDropdownItems[0]) !== 'object';
      },
      getClasses: function getClasses(column) {
        var firstClass = 'filter-th';
        return column.filterOptions && column.filterOptions.styleClass ? [firstClass].concat(_toConsumableArray(column.filterOptions.styleClass.split(' '))).join(' ') : firstClass;
      },
      // get column's defined placeholder or default one
      getPlaceholder: function getPlaceholder(column) {
        var placeholder = this.isFilterable(column) && column.filterOptions.placeholder || "Filter ".concat(column.label);
        return placeholder;
      },
      getName: function getName(column) {
        return "vgt-".concat(this.fieldKey(column.field));
      },
      updateFiltersOnEnter: function updateFiltersOnEnter(column, value) {
        if (this.timer) clearTimeout(this.timer);
        this.updateFiltersImmediately(column.field, value);
      },
      updateFiltersOnKeyup: function updateFiltersOnKeyup(column, value) {
        // if the trigger is enter, we don't filter on keyup
        if (column.filterOptions.trigger === 'enter') return;
        this.updateFilters(column, value);
      },
      updateSlotFilter: function updateSlotFilter(column, value) {
        var fieldToFilter = column.filterOptions.slotFilterField || column.field;

        if (typeof column.filterOptions.formatValue === 'function') {
          value = column.filterOptions.formatValue(value);
        }

        this.updateFiltersImmediately(fieldToFilter, value);
      },
      // since vue doesn't detect property addition and deletion, we
      // need to create helper function to set property etc
      updateFilters: function updateFilters(column, value) {
        var _this = this;

        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this.updateFiltersImmediately(column.field, value);
        }, 400);
      },
      updateFiltersImmediately: function updateFiltersImmediately(field, value) {
        this.$set(this.columnFilters, this.fieldKey(field), value);
        this.$emit('filter-changed', this.columnFilters);
      },
      populateInitialFilters: function populateInitialFilters() {
        for (var i = 0; i < this.columns.length; i++) {
          var col = this.columns[i]; // lets see if there are initial
          // filters supplied by user

          if (this.isFilterable(col) && typeof col.filterOptions.filterValue !== 'undefined' && col.filterOptions.filterValue !== null) {
            this.$set(this.columnFilters, this.fieldKey(col.field), col.filterOptions.filterValue); // this.updateFilters(col, col.filterOptions.filterValue);
            // this.$set(col.filterOptions, 'filterValue', undefined);
          }
        } //* lets emit event once all filters are set


        this.$emit('filter-changed', this.columnFilters);
      }
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.hasFilterRow ? _c('tr', [_vm.lineNumbers ? _c('th') : _vm._e(), _vm._v(" "), _vm.selectable ? _c('th') : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, index) {
      return !column.hidden ? _c('th', {
        key: index,
        "class": _vm.getClasses(column)
      }, [_vm._t("column-filter", [_vm.isFilterable(column) ? _c('div', [!_vm.isDropdown(column) ? _c('input', {
        staticClass: "vgt-input",
        attrs: {
          "name": _vm.getName(column),
          "type": "text",
          "placeholder": _vm.getPlaceholder(column)
        },
        domProps: {
          "value": _vm.columnFilters[_vm.fieldKey(column.field)]
        },
        on: {
          "keyup": function keyup($event) {
            if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
              return null;
            }

            return _vm.updateFiltersOnEnter(column, $event.target.value);
          },
          "input": function input($event) {
            return _vm.updateFiltersOnKeyup(column, $event.target.value);
          }
        }
      }) : _vm._e(), _vm._v(" "), _vm.isDropdownArray(column) ? _c('select', {
        staticClass: "vgt-select",
        attrs: {
          "name": _vm.getName(column)
        },
        domProps: {
          "value": _vm.columnFilters[_vm.fieldKey(column.field)]
        },
        on: {
          "change": function change($event) {
            return _vm.updateFiltersImmediately(column.field, $event.target.value);
          }
        }
      }, [_c('option', {
        key: "-1",
        attrs: {
          "value": ""
        }
      }, [_vm._v(_vm._s(_vm.getPlaceholder(column)))]), _vm._v(" "), _vm._l(column.filterOptions.filterDropdownItems, function (option, i) {
        return _c('option', {
          key: i,
          domProps: {
            "value": option
          }
        }, [_vm._v("\r\n              " + _vm._s(option) + "\r\n            ")]);
      })], 2) : _vm._e(), _vm._v(" "), _vm.isDropdownObjects(column) ? _c('select', {
        staticClass: "vgt-select",
        attrs: {
          "name": _vm.getName(column)
        },
        domProps: {
          "value": _vm.columnFilters[_vm.fieldKey(column.field)]
        },
        on: {
          "change": function change($event) {
            return _vm.updateFiltersImmediately(column.field, $event.target.value);
          }
        }
      }, [_c('option', {
        key: "-1",
        attrs: {
          "value": ""
        }
      }, [_vm._v(_vm._s(_vm.getPlaceholder(column)))]), _vm._v(" "), _vm._l(column.filterOptions.filterDropdownItems, function (option, i) {
        return _c('option', {
          key: i,
          domProps: {
            "value": option.value
          }
        }, [_vm._v(_vm._s(option.text))]);
      })], 2) : _vm._e()]) : _vm._e()], {
        "column": column,
        "updateFilters": _vm.updateSlotFilter
      })], 2) : _vm._e();
    })], 2) : _vm._e();
  };

  var __vue_staticRenderFns__$3 = [];
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = "data-v-bab6bcb0";
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  function getColumnFirstSortType(column) {
    return column.firstSortType || DEFAULT_SORT_TYPE;
  }

  function getCurrentPrimarySort(sortArray, column) {
    return sortArray.length === 1 && sortArray[0].field === column.field ? sortArray[0].type : undefined;
  }

  function getNextSort(currentSort, column) {
    if (SORT_TYPES.Descending === getColumnFirstSortType(column) && currentSort === SORT_TYPES.Ascending) {
      return SORT_TYPES.None;
    } else if (currentSort === SORT_TYPES.Ascending) {
      return SORT_TYPES.Descending;
    }

    if (SORT_TYPES.Descending === getColumnFirstSortType(column) && currentSort === SORT_TYPES.Descending) {
      return SORT_TYPES.Ascending;
    } else if (currentSort === SORT_TYPES.Descending) {
      return SORT_TYPES.None;
    }

    if (SORT_TYPES.Descending === getColumnFirstSortType(column) && currentSort === SORT_TYPES.None) {
      return SORT_TYPES.Descending;
    } else {
      return SORT_TYPES.Ascending;
    }
  }

  function getIndex(sortArray, column) {
    for (var i = 0; i < sortArray.length; i++) {
      if (column.field === sortArray[i].field) return i;
    }

    return -1;
  }

  var primarySort = function primarySort(sortArray, column) {
    var currentPrimarySort = getCurrentPrimarySort(sortArray, column);
    var nextPrimarySort = getNextSort(currentPrimarySort, column);
    return [{
      field: column.field,
      type: currentPrimarySort ? nextPrimarySort : getColumnFirstSortType(column)
    }];
  };

  var secondarySort = function secondarySort(sortArray, column) {
    var index = getIndex(sortArray, column);

    if (index === -1) {
      sortArray.push({
        field: column.field,
        type: getColumnFirstSortType(column)
      });
    } else {
      sortArray[index].type = getNextSort(sortArray[index].type, column);
    }

    return sortArray;
  };

  //
  var script$4 = {
    name: 'VgtTableHeader',
    props: {
      lineNumbers: {
        "default": false,
        type: Boolean
      },
      selectable: {
        "default": false,
        type: Boolean
      },
      allSelected: {
        "default": false,
        type: Boolean
      },
      allSelectedIndeterminate: {
        "default": false,
        type: Boolean
      },
      columns: {
        type: Array
      },
      mode: {
        type: String
      },
      typedColumns: {},
      //* Sort related
      sortable: {
        type: Boolean
      },
      multipleColumnSort: {
        type: Boolean,
        "default": true
      },
      getClasses: {
        type: Function
      },
      //* search related
      searchEnabled: {
        type: Boolean
      },
      tableRef: {},
      paginated: {}
    },
    watch: {
      columns: {
        handler: function handler() {
          this.setColumnStyles();
        },
        immediate: true
      },
      tableRef: {
        handler: function handler() {
          this.setColumnStyles();
        },
        immediate: true
      },
      paginated: {
        handler: function handler() {
          if (this.tableRef) {
            this.setColumnStyles();
          }
        },
        deep: true
      }
    },
    data: function data() {
      return {
        checkBoxThStyle: {},
        lineNumberThStyle: {},
        columnStyles: [],
        sorts: [],
        ro: null
      };
    },
    computed: {},
    methods: {
      reset: function reset() {
        this.$refs['filter-row'].reset(true);
      },
      toggleSelectAll: function toggleSelectAll() {
        this.$emit('on-toggle-select-all');
      },
      isSortableColumn: function isSortableColumn(column) {
        var sortable = column.sortable;
        var isSortable = typeof sortable === 'boolean' ? sortable : this.sortable;
        return isSortable;
      },
      sort: function sort(e, column) {
        //* if column is not sortable, return right here
        if (!this.isSortableColumn(column)) return;

        if (e.shiftKey && this.multipleColumnSort) {
          this.sorts = secondarySort(this.sorts, column);
        } else {
          this.sorts = primarySort(this.sorts, column);
        }

        this.$emit('on-sort-change', this.sorts);
      },
      setInitialSort: function setInitialSort(sorts) {
        this.sorts = sorts;
        this.$emit('on-sort-change', this.sorts);
      },
      getColumnSort: function getColumnSort(column) {
        for (var i = 0; i < this.sorts.length; i += 1) {
          if (this.sorts[i].field === column.field) {
            return this.sorts[i].type || 'asc';
          }
        }

        return null;
      },
      getColumnSortLong: function getColumnSortLong(column) {
        return this.getColumnSort(column) === 'asc' ? 'ascending' : 'descending';
      },
      getHeaderClasses: function getHeaderClasses(column, index) {
        var classes = Object.assign({}, this.getClasses(index, 'th'), {
          sortable: this.isSortableColumn(column),
          'sorting sorting-desc': this.getColumnSort(column) === 'desc',
          'sorting sorting-asc': this.getColumnSort(column) === 'asc'
        });
        return classes;
      },
      filterRows: function filterRows(columnFilters) {
        this.$emit('filter-changed', columnFilters);
      },
      getWidthStyle: function getWidthStyle(dom) {
        if (window && window.getComputedStyle && dom) {
          var cellStyle = window.getComputedStyle(dom, null);
          return {
            width: cellStyle.width
          };
        }

        return {
          width: 'auto'
        };
      },
      setColumnStyles: function setColumnStyles() {
        var colStyles = [];

        for (var i = 0; i < this.columns.length; i++) {
          if (this.tableRef) {
            var skip = 0;
            if (this.selectable) skip++;
            if (this.lineNumbers) skip++;
            var cell = this.tableRef.rows[0].cells[i + skip];
            colStyles.push(this.getWidthStyle(cell));
          } else {
            colStyles.push({
              minWidth: this.columns[i].width ? this.columns[i].width : 'auto',
              maxWidth: this.columns[i].width ? this.columns[i].width : 'auto',
              width: this.columns[i].width ? this.columns[i].width : 'auto'
            });
          }
        }

        this.columnStyles = colStyles;
      },
      getColumnStyle: function getColumnStyle(column, index) {
        var styleObject = {
          minWidth: column.width ? column.width : 'auto',
          maxWidth: column.width ? column.width : 'auto',
          width: column.width ? column.width : 'auto'
        }; //* if fixed header we need to get width from original table

        if (this.tableRef) {
          if (this.selectable) index++;
          if (this.lineNumbers) index++;
          var cell = this.tableRef.rows[0].cells[index];
          var cellStyle = window.getComputedStyle(cell, null);
          styleObject.width = cellStyle.width;
        }

        return styleObject;
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.$nextTick(function () {
        // We're going to watch the parent element for resize events, and calculate column widths if it changes
        if ('ResizeObserver' in window) {
          _this.ro = new ResizeObserver(function () {
            _this.setColumnStyles();
          });

          _this.ro.observe(_this.$parent.$el); // If this is a fixed-header table, we want to observe each column header from the non-fixed header.
          // You can imagine two columns swapping widths, which wouldn't cause the above to trigger.
          // This gets the first tr element of the primary table header, and iterates through its children (the th elements)


          if (_this.tableRef) {
            Array.from(_this.$parent.$refs['table-header-primary'].$el.children[0].children).forEach(function (header) {
              _this.ro.observe(header);
            });
          }
        }
      });
    },
    beforeDestroy: function beforeDestroy() {
      if (this.ro) {
        this.ro.disconnect();
      }
    },
    components: {
      'vgt-filter-row': __vue_component__$3
    }
  };

  /* script */
  var __vue_script__$4 = script$4;
  /* template */

  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('thead', [_c('tr', [_vm.lineNumbers ? _c('th', {
      staticClass: "line-numbers",
      attrs: {
        "scope": "col"
      }
    }) : _vm._e(), _vm._v(" "), _vm.selectable ? _c('th', {
      staticClass: "vgt-checkbox-col",
      attrs: {
        "scope": "col"
      }
    }, [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.allSelected,
        "indeterminate": _vm.allSelectedIndeterminate
      },
      on: {
        "change": _vm.toggleSelectAll
      }
    })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, index) {
      return !column.hidden ? _c('th', {
        key: index,
        "class": _vm.getHeaderClasses(column, index),
        style: _vm.columnStyles[index],
        attrs: {
          "scope": "col",
          "title": column.tooltip,
          "aria-sort": _vm.getColumnSortLong(column),
          "aria-controls": "col-" + index
        }
      }, [_vm._t("table-column", [_vm._v("\r\n        " + _vm._s(column.label) + "\r\n      ")], {
        "column": column
      }), _vm._v(" "), _vm.isSortableColumn(column) ? _c('button', {
        on: {
          "click": function click($event) {
            return _vm.sort($event, column);
          }
        }
      }, [_c('span', {
        staticClass: "sr-only"
      }, [_vm._v("\r\n          Sort table by " + _vm._s(column.label) + " in " + _vm._s(_vm.getColumnSortLong(column)) + " order\r\n          ")])]) : _vm._e()], 2) : _vm._e();
    })], 2), _vm._v(" "), _c("vgt-filter-row", {
      ref: "filter-row",
      tag: "tr",
      attrs: {
        "global-search-enabled": _vm.searchEnabled,
        "line-numbers": _vm.lineNumbers,
        "selectable": _vm.selectable,
        "columns": _vm.columns,
        "mode": _vm.mode,
        "typed-columns": _vm.typedColumns
      },
      on: {
        "filter-changed": _vm.filterRows
      },
      scopedSlots: _vm._u([{
        key: "column-filter",
        fn: function fn(props) {
          return [_vm._t("column-filter", null, {
            "column": props.column,
            "updateFilters": props.updateFilters
          })];
        }
      }], null, true)
    })], 1);
  };

  var __vue_staticRenderFns__$4 = [];
  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$5 = {
    name: 'VgtHeaderRow',
    props: {
      headerRow: {
        type: Object
      },
      columns: {
        type: Array
      },
      lineNumbers: {
        type: Boolean
      },
      selectable: {
        type: Boolean
      },
      selectAllByGroup: {
        type: Boolean
      },
      collapsable: {
        type: [Boolean, Number],
        "default": false
      },
      collectFormatted: {
        type: Function
      },
      formattedRow: {
        type: Function
      },
      getClasses: {
        type: Function
      },
      fullColspan: {
        type: Number
      },
      groupIndex: {
        type: Number
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      allSelected: function allSelected() {
        var headerRow = this.headerRow,
            groupChildObject = this.groupChildObject;
        return headerRow.children.filter(function (row) {
          return row.vgtSelected;
        }).length === headerRow.children.length;
      }
    },
    methods: {
      columnCollapsable: function columnCollapsable(currentIndex) {
        if (this.collapsable === true) {
          return currentIndex === 0;
        }

        return currentIndex === this.collapsable;
      },
      toggleSelectGroup: function toggleSelectGroup(event) {
        this.$emit('on-select-group-change', {
          groupIndex: this.groupIndex,
          checked: event.target.checked
        });
      }
    },
    mounted: function mounted() {},
    components: {}
  };

  /* script */
  var __vue_script__$5 = script$5;
  /* template */

  var __vue_render__$5 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('tr', [_vm.headerRow.mode === 'span' ? _c('th', {
      staticClass: "vgt-left-align vgt-row-header",
      attrs: {
        "colspan": _vm.fullColspan
      }
    }, [_vm.selectAllByGroup ? [_vm._t("table-header-group-select", [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.allSelected
      },
      on: {
        "change": function change($event) {
          return _vm.toggleSelectGroup($event);
        }
      }
    })], {
      "columns": _vm.columns,
      "row": _vm.headerRow
    })] : _vm._e(), _vm._v(" "), _c('span', {
      on: {
        "click": function click($event) {
          _vm.collapsable ? _vm.$emit('vgtExpand', !_vm.headerRow.vgtIsExpanded) : function () {};
        }
      }
    }, [_vm.collapsable ? _c('span', {
      staticClass: "triangle",
      "class": {
        'expand': _vm.headerRow.vgtIsExpanded
      }
    }) : _vm._e(), _vm._v(" "), _vm._t("table-header-row", [_vm.headerRow.html ? _c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.headerRow.label)
      }
    }) : _c('span', [_vm._v("\r\n          " + _vm._s(_vm.headerRow.label) + "\r\n        ")])], {
      "row": _vm.headerRow
    })], 2)], 2) : _vm._e(), _vm._v(" "), _vm.headerRow.mode !== 'span' && _vm.lineNumbers ? _c('th', {
      staticClass: "vgt-row-header"
    }) : _vm._e(), _vm._v(" "), _vm.headerRow.mode !== 'span' && _vm.selectable ? _c('th', {
      staticClass: "vgt-row-header"
    }, [_vm.selectAllByGroup ? [_vm._t("table-header-group-select", [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.allSelected
      },
      on: {
        "change": function change($event) {
          return _vm.toggleSelectGroup($event);
        }
      }
    })], {
      "columns": _vm.columns,
      "row": _vm.headerRow
    })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, i) {
      return _vm.headerRow.mode !== 'span' && !column.hidden ? _c('th', {
        key: i,
        staticClass: "vgt-row-header",
        "class": _vm.getClasses(i, 'td'),
        on: {
          "click": function click($event) {
            _vm.columnCollapsable(i) ? _vm.$emit('vgtExpand', !_vm.headerRow.vgtIsExpanded) : function () {};
          }
        }
      }, [_vm.columnCollapsable(i) ? _c('span', {
        staticClass: "triangle",
        "class": {
          'expand': _vm.headerRow.vgtIsExpanded
        }
      }) : _vm._e(), _vm._v(" "), _vm._t("table-header-row", [!column.html ? _c('span', [_vm._v("\r\n        " + _vm._s(_vm.collectFormatted(_vm.headerRow, column, true)) + "\r\n      ")]) : _vm._e(), _vm._v(" "), column.html ? _c('span', {
        domProps: {
          "innerHTML": _vm._s(_vm.collectFormatted(_vm.headerRow, column, true))
        }
      }) : _vm._e()], {
        "row": _vm.headerRow,
        "column": column,
        "formattedRow": _vm.formattedRow(_vm.headerRow, true)
      })], 2) : _vm._e();
    })], 2);
  };

  var __vue_staticRenderFns__$5 = [];
  /* style */

  var __vue_inject_styles__$5 = undefined;
  /* scoped */

  var __vue_scope_id__$5 = undefined;
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
  }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }

    var number = Number(dirtyNumber);

    if (isNaN(number)) {
      return number;
    }

    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name addMilliseconds
   * @category Millisecond Helpers
   * @summary Add the specified number of milliseconds to the given date.
   *
   * @description
   * Add the specified number of milliseconds to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
   * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:30.750
   */

  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }

  var MILLISECONDS_IN_MINUTE = 60000;

  function getDateMillisecondsPart(date) {
    return date.getTime() % MILLISECONDS_IN_MINUTE;
  }
  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */


  function getTimezoneOffsetInMilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime());
    var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
    date.setSeconds(0, 0);
    var hasNegativeUTCOffset = baseTimezoneOffset > 0;
    var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
  }

  /**
   * @name compareAsc
   * @category Common Helpers
   * @summary Compare the two dates and return -1, 0 or 1.
   *
   * @description
   * Compare the two dates and return 1 if the first date is after the second,
   * -1 if the first date is before the second or 0 if dates are equal.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the first date to compare
   * @param {Date|Number} dateRight - the second date to compare
   * @returns {Number} the result of the comparison
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Compare 11 February 1987 and 10 July 1989:
   * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
   * //=> -1
   *
   * @example
   * // Sort the array of dates:
   * const result = [
   *   new Date(1995, 6, 2),
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * ].sort(compareAsc)
   * //=> [
   * //   Wed Feb 11 1987 00:00:00,
   * //   Mon Jul 10 1989 00:00:00,
   * //   Sun Jul 02 1995 00:00:00
   * // ]
   */

  function compareAsc(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();

    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
      return diff;
    }
  }

  /**
   * @name isValid
   * @category Common Helpers
   * @summary Is the given date valid?
   *
   * @description
   * Returns false if argument is Invalid Date and true otherwise.
   * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
   * Invalid Date is a Date, whose time value is NaN.
   *
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - Now `isValid` doesn't throw an exception
   *   if the first argument is not an instance of Date.
   *   Instead, argument is converted beforehand using `toDate`.
   *
   *   Examples:
   *
   *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
   *   |---------------------------|---------------|---------------|
   *   | `new Date()`              | `true`        | `true`        |
   *   | `new Date('2016-01-01')`  | `true`        | `true`        |
   *   | `new Date('')`            | `false`       | `false`       |
   *   | `new Date(1488370835081)` | `true`        | `true`        |
   *   | `new Date(NaN)`           | `false`       | `false`       |
   *   | `'2016-01-01'`            | `TypeError`   | `false`       |
   *   | `''`                      | `TypeError`   | `false`       |
   *   | `1488370835081`           | `TypeError`   | `true`        |
   *   | `NaN`                     | `TypeError`   | `false`       |
   *
   *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
   *   that try to coerce arguments to the expected type
   *   (which is also the case with other *date-fns* functions).
   *
   * @param {*} date - the date to check
   * @returns {Boolean} the date is valid
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // For the valid date:
   * var result = isValid(new Date(2014, 1, 31))
   * //=> true
   *
   * @example
   * // For the value, convertable into a date:
   * var result = isValid(1393804800000)
   * //=> true
   *
   * @example
   * // For the invalid date:
   * var result = isValid(new Date(''))
   * //=> false
   */

  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return !isNaN(date);
  }

  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },
    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },
    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },
    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },
    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },
    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },
    aboutXWeeks: {
      one: 'about 1 week',
      other: 'about {{count}} weeks'
    },
    xWeeks: {
      one: '1 week',
      other: '{{count}} weeks'
    },
    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },
    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },
    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },
    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },
    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },
    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  };
  function formatDistance(token, count, options) {
    options = options || {};
    var result;

    if (typeof formatDistanceLocale[token] === 'string') {
      result = formatDistanceLocale[token];
    } else if (count === 1) {
      result = formatDistanceLocale[token].one;
    } else {
      result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  }

  function buildFormatLongFn(args) {
    return function (dirtyOptions) {
      var options = dirtyOptions || {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
  };
  var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: 'full'
    })
  };

  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
  };
  function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  }

  function buildLocalizeFn(args) {
    return function (dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : 'standalone';
      var valuesArray;

      if (context === 'formatting' && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;

        var _width = options.width ? String(options.width) : args.defaultWidth;

        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }

      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }

  var eraValues = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini']
  };
  var quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.

  };
  var monthValues = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  var dayValues = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  var dayPeriodValues = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    }
  };

  function ordinalNumber(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`:
    //
    //   var options = dirtyOptions || {}
    //   var unit = String(options.unit)
    //
    // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'

    var rem100 = number % 100;

    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + 'st';

        case 2:
          return number + 'nd';

        case 3:
          return number + 'rd';
      }
    }

    return number + 'th';
  }

  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: 'wide',
      argumentCallback: function (quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: 'wide',
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: 'wide'
    })
  };

  function buildMatchPatternFn(args) {
    return function (dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var matchResult = string.match(args.matchPattern);

      if (!matchResult) {
        return null;
      }

      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);

      if (!parseResult) {
        return null;
      }

      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value: value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  function buildMatchFn(args) {
    return function (dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);

      if (!matchResult) {
        return null;
      }

      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var value;

      if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
        value = findIndex(parsePatterns, function (pattern) {
          return pattern.test(matchedString);
        });
      } else {
        value = findKey(parsePatterns, function (pattern) {
          return pattern.test(matchedString);
        });
      }

      value = args.valueCallback ? args.valueCallback(value) : value;
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value: value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
  }

  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
  }

  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function (value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: 'any',
      valueCallback: function (index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: 'any'
    })
  };

  /**
   * @type {Locale}
   * @category Locales
   * @summary English locale (United States).
   * @language English
   * @iso-639-2 eng
   * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
   * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
   */

  var locale = {
    code: 'en-US',
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
      weekStartsOn: 0
      /* Sunday */
      ,
      firstWeekContainsDate: 1
    }
  };

  /**
   * @name subMilliseconds
   * @category Millisecond Helpers
   * @summary Subtract the specified number of milliseconds from the given date.
   *
   * @description
   * Subtract the specified number of milliseconds from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
   * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:29.250
   */

  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }

  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();

    while (output.length < targetLength) {
      output = '0' + output;
    }

    return sign + output;
  }

  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* |                                |
   * |  d  | Day of month                   |  D  |                                |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  m  | Minute                         |  M  | Month                          |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  y  | Year (abs)                     |  Y  |                                |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   */

  var formatters = {
    // Year
    y: function (date, token) {
      // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
      // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
      // |----------|-------|----|-------|-------|-------|
      // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
      // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
      // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
      // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
      // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function (date, token) {
      var month = date.getUTCMonth();
      return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function (date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function (date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

      switch (token) {
        case 'a':
        case 'aa':
          return dayPeriodEnumValue.toUpperCase();

        case 'aaa':
          return dayPeriodEnumValue;

        case 'aaaaa':
          return dayPeriodEnumValue[0];

        case 'aaaa':
        default:
          return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    // Hour [1-12]
    h: function (date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function (date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function (date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function (date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function (date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };

  var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }

  var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
  }

  var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }

  var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
    /*
     * |     | Unit                           |     | Unit                           |
     * |-----|--------------------------------|-----|--------------------------------|
     * |  a  | AM, PM                         |  A* | Milliseconds in day            |
     * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
     * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
     * |  d  | Day of month                   |  D  | Day of year                    |
     * |  e  | Local day of week              |  E  | Day of week                    |
     * |  f  |                                |  F* | Day of week in month           |
     * |  g* | Modified Julian day            |  G  | Era                            |
     * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
     * |  i! | ISO day of week                |  I! | ISO week of year               |
     * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
     * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
     * |  l* | (deprecated)                   |  L  | Stand-alone month              |
     * |  m  | Minute                         |  M  | Month                          |
     * |  n  |                                |  N  |                                |
     * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
     * |  p! | Long localized time            |  P! | Long localized date            |
     * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
     * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
     * |  s  | Second                         |  S  | Fraction of second             |
     * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
     * |  u  | Extended year                  |  U* | Cyclic year                    |
     * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
     * |  w  | Local week of year             |  W* | Week of month                  |
     * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
     * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
     * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
     *
     * Letters marked by * are not implemented but reserved by Unicode standard.
     *
     * Letters marked by ! are non-standard, but implemented by date-fns:
     * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
     * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
     *   i.e. 7 for Sunday, 1 for Monday, etc.
     * - `I` is ISO week of year, as opposed to `w` which is local week of year.
     * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
     *   `R` is supposed to be used in conjunction with `I` and `i`
     *   for universal ISO week-numbering date, whereas
     *   `Y` is supposed to be used in conjunction with `w` and `e`
     *   for week-numbering date specific to the locale.
     * - `P` is long localized date format
     * - `p` is long localized time format
     */

  };
  var formatters$1 = {
    // Era
    G: function (date, token, localize) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;

      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return localize.era(era, {
            width: 'abbreviated'
          });
        // A, B

        case 'GGGGG':
          return localize.era(era, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return localize.era(era, {
            width: 'wide'
          });
      }
    },
    // Year
    y: function (date, token, localize) {
      // Ordinal number
      if (token === 'yo') {
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize.ordinalNumber(year, {
          unit: 'year'
        });
      }

      return formatters.y(date, token);
    },
    // Local week-numbering year
    Y: function (date, token, localize, options) {
      var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

      if (token === 'YY') {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      } // Ordinal number


      if (token === 'Yo') {
        return localize.ordinalNumber(weekYear, {
          unit: 'year'
        });
      } // Padding


      return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function (date, token) {
      var isoWeekYear = getUTCISOWeekYear(date); // Padding

      return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function (date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function (date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
          return String(quarter);
        // 01, 02, 03, 04

        case 'QQ':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone quarter
    q: function (date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

      switch (token) {
        // 1, 2, 3, 4
        case 'q':
          return String(quarter);
        // 01, 02, 03, 04

        case 'qq':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Month
    M: function (date, token, localize) {
      var month = date.getUTCMonth();

      switch (token) {
        case 'M':
        case 'MM':
          return formatters.M(date, token);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return localize.month(month, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone month
    L: function (date, token, localize) {
      var month = date.getUTCMonth();

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return String(month + 1);
        // 01, 02, ..., 12

        case 'LL':
          return addLeadingZeros(month + 1, 2);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return localize.month(month, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Local week of year
    w: function (date, token, localize, options) {
      var week = getUTCWeek(date, options);

      if (token === 'wo') {
        return localize.ordinalNumber(week, {
          unit: 'week'
        });
      }

      return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function (date, token, localize) {
      var isoWeek = getUTCISOWeek(date);

      if (token === 'Io') {
        return localize.ordinalNumber(isoWeek, {
          unit: 'week'
        });
      }

      return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function (date, token, localize) {
      if (token === 'do') {
        return localize.ordinalNumber(date.getUTCDate(), {
          unit: 'date'
        });
      }

      return formatters.d(date, token);
    },
    // Day of year
    D: function (date, token, localize) {
      var dayOfYear = getUTCDayOfYear(date);

      if (token === 'Do') {
        return localize.ordinalNumber(dayOfYear, {
          unit: 'dayOfYear'
        });
      }

      return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function (date, token, localize) {
      var dayOfWeek = date.getUTCDay();

      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Local day of week
    e: function (date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

      switch (token) {
        // Numerical value (Nth day of week with current locale or weekStartsOn)
        case 'e':
          return String(localDayOfWeek);
        // Padded numerical value

        case 'ee':
          return addLeadingZeros(localDayOfWeek, 2);
        // 1st, 2nd, ..., 7th

        case 'eo':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });

        case 'eee':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone local day of week
    c: function (date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

      switch (token) {
        // Numerical value (same as in `e`)
        case 'c':
          return String(localDayOfWeek);
        // Padded numerical value

        case 'cc':
          return addLeadingZeros(localDayOfWeek, token.length);
        // 1st, 2nd, ..., 7th

        case 'co':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });

        case 'ccc':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // ISO day of week
    i: function (date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

      switch (token) {
        // 2
        case 'i':
          return String(isoDayOfWeek);
        // 02

        case 'ii':
          return addLeadingZeros(isoDayOfWeek, token.length);
        // 2nd

        case 'io':
          return localize.ordinalNumber(isoDayOfWeek, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'iiiii':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'iiiiii':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'iiii':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM or PM
    a: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

      switch (token) {
        case 'a':
        case 'aa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'aaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();

        case 'aaaaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM, PM, midnight, noon
    b: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;

      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
      }

      switch (token) {
        case 'b':
        case 'bb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'bbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();

        case 'bbbbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;

      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }

      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'BBBBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Hour [1-12]
    h: function (date, token, localize) {
      if (token === 'ho') {
        var hours = date.getUTCHours() % 12;
        if (hours === 0) hours = 12;
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return formatters.h(date, token);
    },
    // Hour [0-23]
    H: function (date, token, localize) {
      if (token === 'Ho') {
        return localize.ordinalNumber(date.getUTCHours(), {
          unit: 'hour'
        });
      }

      return formatters.H(date, token);
    },
    // Hour [0-11]
    K: function (date, token, localize) {
      var hours = date.getUTCHours() % 12;

      if (token === 'Ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function (date, token, localize) {
      var hours = date.getUTCHours();
      if (hours === 0) hours = 24;

      if (token === 'ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function (date, token, localize) {
      if (token === 'mo') {
        return localize.ordinalNumber(date.getUTCMinutes(), {
          unit: 'minute'
        });
      }

      return formatters.m(date, token);
    },
    // Second
    s: function (date, token, localize) {
      if (token === 'so') {
        return localize.ordinalNumber(date.getUTCSeconds(), {
          unit: 'second'
        });
      }

      return formatters.s(date, token);
    },
    // Fraction of second
    S: function (date, token) {
      return formatters.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      if (timezoneOffset === 0) {
        return 'Z';
      }

      switch (token) {
        // Hours and optional minutes
        case 'X':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XX`

        case 'XXXX':
        case 'XX':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XXX`

        case 'XXXXX':
        case 'XXX': // Hours and minutes with `:` delimiter

        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Hours and optional minutes
        case 'x':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xx`

        case 'xxxx':
        case 'xx':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xxx`

        case 'xxxxx':
        case 'xxx': // Hours and minutes with `:` delimiter

        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (GMT)
    O: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Short
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long

        case 'OOOO':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (specific non-location)
    z: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Short
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long

        case 'zzzz':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Seconds timestamp
    t: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1000);
      return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };

  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;

    if (minutes === 0) {
      return sign + String(hours);
    }

    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }

  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? '-' : '+';
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }

    return formatTimezone(offset, dirtyDelimiter);
  }

  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }

  function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'P':
        return formatLong.date({
          width: 'short'
        });

      case 'PP':
        return formatLong.date({
          width: 'medium'
        });

      case 'PPP':
        return formatLong.date({
          width: 'long'
        });

      case 'PPPP':
      default:
        return formatLong.date({
          width: 'full'
        });
    }
  }

  function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'p':
        return formatLong.time({
          width: 'short'
        });

      case 'pp':
        return formatLong.time({
          width: 'medium'
        });

      case 'ppp':
        return formatLong.time({
          width: 'long'
        });

      case 'pppp':
      default:
        return formatLong.time({
          width: 'full'
        });
    }
  }

  function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];

    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }

    var dateTimeFormat;

    switch (datePattern) {
      case 'P':
        dateTimeFormat = formatLong.dateTime({
          width: 'short'
        });
        break;

      case 'PP':
        dateTimeFormat = formatLong.dateTime({
          width: 'medium'
        });
        break;

      case 'PPP':
        dateTimeFormat = formatLong.dateTime({
          width: 'long'
        });
        break;

      case 'PPPP':
      default:
        dateTimeFormat = formatLong.dateTime({
          width: 'full'
        });
        break;
    }

    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
  }

  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };

  var protectedDayOfYearTokens = ['D', 'DD'];
  var protectedWeekYearTokens = ['YY', 'YYYY'];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format, input) {
    if (token === 'YYYY') {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'YY') {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'D') {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'DD') {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }

  // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
  //   (one of the certain letters followed by `o`)
  // - (\w)\1* matches any sequences of the same letter
  // - '' matches two quote characters in a row
  // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
  //   except a single quote symbol, which ends the sequence.
  //   Two quote characters do not end the sequence.
  //   If there is no matching single quote
  //   then the sequence will continue until the end of the string.
  // - . matches any single character unmatched by previous parts of the RegExps

  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
  // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  /**
   * @name format
   * @category Common Helpers
   * @summary Format the date.
   *
   * @description
   * Return the formatted date string in the given format. The result may vary by locale.
   *
   * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
   * > See: https://git.io/fxCyr
   *
   * The characters wrapped between two single quotes characters (') are escaped.
   * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
   * (see the last example)
   *
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * with a few additions (see note 7 below the table).
   *
   * Accepted patterns:
   * | Unit                            | Pattern | Result examples                   | Notes |
   * |---------------------------------|---------|-----------------------------------|-------|
   * | Era                             | G..GGG  | AD, BC                            |       |
   * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
   * |                                 | GGGGG   | A, B                              |       |
   * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
   * |                                 | yy      | 44, 01, 00, 17                    | 5     |
   * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
   * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
   * |                                 | yyyyy   | ...                               | 3,5   |
   * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
   * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
   * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
   * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
   * |                                 | YYYYY   | ...                               | 3,5   |
   * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
   * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
   * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
   * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
   * |                                 | RRRRR   | ...                               | 3,5,7 |
   * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
   * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
   * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
   * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
   * |                                 | uuuuu   | ...                               | 3,5   |
   * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
   * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | QQ      | 01, 02, 03, 04                    |       |
   * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
   * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
   * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | qq      | 01, 02, 03, 04                    |       |
   * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
   * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
   * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | MM      | 01, 02, ..., 12                   |       |
   * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
   * |                                 | MMMM    | January, February, ..., December  | 2     |
   * |                                 | MMMMM   | J, F, ..., D                      |       |
   * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
   * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | LL      | 01, 02, ..., 12                   |       |
   * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
   * |                                 | LLLL    | January, February, ..., December  | 2     |
   * |                                 | LLLLL   | J, F, ..., D                      |       |
   * | Local week of year              | w       | 1, 2, ..., 53                     |       |
   * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | ww      | 01, 02, ..., 53                   |       |
   * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
   * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | II      | 01, 02, ..., 53                   | 7     |
   * | Day of month                    | d       | 1, 2, ..., 31                     |       |
   * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
   * |                                 | dd      | 01, 02, ..., 31                   |       |
   * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
   * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
   * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
   * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
   * |                                 | DDDD    | ...                               | 3     |
   * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
   * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
   * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
   * |                                 | ii      | 01, 02, ..., 07                   | 7     |
   * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
   * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
   * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
   * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
   * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
   * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | ee      | 02, 03, ..., 01                   |       |
   * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
   * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
   * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | cc      | 02, 03, ..., 01                   |       |
   * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
   * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | AM, PM                          | a..aa   | AM, PM                            |       |
   * |                                 | aaa     | am, pm                            |       |
   * |                                 | aaaa    | a.m., p.m.                        | 2     |
   * |                                 | aaaaa   | a, p                              |       |
   * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
   * |                                 | bbb     | am, pm, noon, midnight            |       |
   * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
   * |                                 | bbbbb   | a, p, n, mi                       |       |
   * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
   * |                                 | BBBB    | at night, in the morning, ...     | 2     |
   * |                                 | BBBBB   | at night, in the morning, ...     |       |
   * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
   * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
   * |                                 | hh      | 01, 02, ..., 11, 12               |       |
   * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
   * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
   * |                                 | HH      | 00, 01, 02, ..., 23               |       |
   * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
   * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
   * |                                 | KK      | 01, 02, ..., 11, 00               |       |
   * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
   * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
   * |                                 | kk      | 24, 01, 02, ..., 23               |       |
   * | Minute                          | m       | 0, 1, ..., 59                     |       |
   * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | mm      | 00, 01, ..., 59                   |       |
   * | Second                          | s       | 0, 1, ..., 59                     |       |
   * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | ss      | 00, 01, ..., 59                   |       |
   * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
   * |                                 | SS      | 00, 01, ..., 99                   |       |
   * |                                 | SSS     | 000, 0001, ..., 999               |       |
   * |                                 | SSSS    | ...                               | 3     |
   * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
   * |                                 | XX      | -0800, +0530, Z                   |       |
   * |                                 | XXX     | -08:00, +05:30, Z                 |       |
   * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
   * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
   * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
   * |                                 | xx      | -0800, +0530, +0000               |       |
   * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
   * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
   * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
   * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
   * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
   * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
   * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
   * | Seconds timestamp               | t       | 512969520                         | 7     |
   * |                                 | tt      | ...                               | 3,7   |
   * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
   * |                                 | TT      | ...                               | 3,7   |
   * | Long localized date             | P       | 04/29/1453                        | 7     |
   * |                                 | PP      | Apr 29, 1453                      | 7     |
   * |                                 | PPP     | April 29th, 1453                  | 7     |
   * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
   * | Long localized time             | p       | 12:00 AM                          | 7     |
   * |                                 | pp      | 12:00:00 AM                       | 7     |
   * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
   * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
   * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
   * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
   * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
   * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
   * Notes:
   * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   *    are the same as "stand-alone" units, but are different in some languages.
   *    "Formatting" units are declined according to the rules of the language
   *    in the context of a date. "Stand-alone" units are always nominative singular:
   *
   *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
   *
   *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
   *
   * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
   *    the single quote characters (see below).
   *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
   *    the output will be the same as default pattern for this unit, usually
   *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
   *    are marked with "2" in the last column of the table.
   *
   *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
   *
   * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
   *    The output will be padded with zeros to match the length of the pattern.
   *
   *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
   *
   * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   *    These tokens represent the shortest form of the quarter.
   *
   * 5. The main difference between `y` and `u` patterns are B.C. years:
   *
   *    | Year | `y` | `u` |
   *    |------|-----|-----|
   *    | AC 1 |   1 |   1 |
   *    | BC 1 |   1 |   0 |
   *    | BC 2 |   2 |  -1 |
   *
   *    Also `yy` always returns the last two digits of a year,
   *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
   *
   *    | Year | `yy` | `uu` |
   *    |------|------|------|
   *    | 1    |   01 |   01 |
   *    | 14   |   14 |   14 |
   *    | 376  |   76 |  376 |
   *    | 1453 |   53 | 1453 |
   *
   *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   *    except local week-numbering years are dependent on `options.weekStartsOn`
   *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
   *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
   *
   * 6. Specific non-location timezones are currently unavailable in `date-fns`,
   *    so right now these tokens fall back to GMT timezones.
   *
   * 7. These patterns are not in the Unicode Technical Standard #35:
   *    - `i`: ISO day of week
   *    - `I`: ISO week of year
   *    - `R`: ISO week-numbering year
   *    - `t`: seconds timestamp
   *    - `T`: milliseconds timestamp
   *    - `o`: ordinal number modifier
   *    - `P`: long localized date
   *    - `p`: long localized time
   *
   * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
   *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - The second argument is now required for the sake of explicitness.
   *
   *   ```javascript
   *   // Before v2.0.0
   *   format(new Date(2016, 0, 1))
   *
   *   // v2.0.0 onward
   *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
   *   ```
   *
   * - New format string API for `format` function
   *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
   *
   * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
   *
   * @param {Date|Number} date - the original date
   * @param {String} format - the string of tokens
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
   * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
   *   see: https://git.io/fxCyr
   * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
   *   see: https://git.io/fxCyr
   * @returns {String} the formatted date string
   * @throws {TypeError} 2 arguments required
   * @throws {RangeError} `date` must not be Invalid Date
   * @throws {RangeError} `options.locale` must contain `localize` property
   * @throws {RangeError} `options.locale` must contain `formatLong` property
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} format string contains an unescaped latin alphabet character
   *
   * @example
   * // Represent 11 February 2014 in middle-endian format:
   * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
   * //=> '02/11/2014'
   *
   * @example
   * // Represent 2 July 2014 in Esperanto:
   * import { eoLocale } from 'date-fns/locale/eo'
   * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
   *   locale: eoLocale
   * })
   * //=> '2-a de julio 2014'
   *
   * @example
   * // Escape string by single quote characters:
   * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
   * //=> "3 o'clock"
   */

  function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale$1 = options.locale || locale;
    var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    if (!locale$1.localize) {
      throw new RangeError('locale must contain localize property');
    }

    if (!locale$1.formatLong) {
      throw new RangeError('locale must contain formatLong property');
    }

    var originalDate = toDate(dirtyDate);

    if (!isValid(originalDate)) {
      throw new RangeError('Invalid time value');
    } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale$1,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
      var firstCharacter = substring[0];

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale$1.formatLong, formatterOptions);
      }

      return substring;
    }).join('').match(formattingTokensRegExp).map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }

      var firstCharacter = substring[0];

      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }

      var formatter = formatters$1[firstCharacter];

      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }

        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }

        return formatter(utcDate, substring, locale$1.localize, formatterOptions);
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      }

      return substring;
    }).join('');
    return result;
  }

  function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
  }

  function assign(target, dirtyObject) {
    if (target == null) {
      throw new TypeError('assign requires that input parameter not be null or undefined');
    }

    dirtyObject = dirtyObject || {};

    for (var property in dirtyObject) {
      if (dirtyObject.hasOwnProperty(property)) {
        target[property] = dirtyObject[property];
      }
    }

    return target;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    requiredArgs(2, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = toInteger(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCISODay(dirtyDate, dirtyDay) {
    requiredArgs(2, arguments);
    var day = toInteger(dirtyDay);

    if (day % 7 === 0) {
      day = day - 7;
    }

    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var isoWeek = toInteger(dirtyISOWeek);
    var diff = getUTCISOWeek(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCWeek(dirtyDate, dirtyWeek, options) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var week = toInteger(dirtyWeek);
    var diff = getUTCWeek(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
  }

  var MILLISECONDS_IN_HOUR = 3600000;
  var MILLISECONDS_IN_MINUTE$1 = 60000;
  var MILLISECONDS_IN_SECOND = 1000;
  var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

  };
  var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
  };

  function parseNumericPattern(pattern, string, valueCallback) {
    var matchResult = string.match(pattern);

    if (!matchResult) {
      return null;
    }

    var value = parseInt(matchResult[0], 10);
    return {
      value: valueCallback ? valueCallback(value) : value,
      rest: string.slice(matchResult[0].length)
    };
  }

  function parseTimezonePattern(pattern, string) {
    var matchResult = string.match(pattern);

    if (!matchResult) {
      return null;
    } // Input is 'Z'


    if (matchResult[0] === 'Z') {
      return {
        value: 0,
        rest: string.slice(1)
      };
    }

    var sign = matchResult[1] === '+' ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
      value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * MILLISECONDS_IN_SECOND),
      rest: string.slice(matchResult[0].length)
    };
  }

  function parseAnyDigitsSigned(string, valueCallback) {
    return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
  }

  function parseNDigits(n, string, valueCallback) {
    switch (n) {
      case 1:
        return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

      case 2:
        return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

      case 3:
        return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

      case 4:
        return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

      default:
        return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
    }
  }

  function parseNDigitsSigned(n, string, valueCallback) {
    switch (n) {
      case 1:
        return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

      case 2:
        return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

      case 3:
        return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

      case 4:
        return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

      default:
        return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
    }
  }

  function dayPeriodEnumToHours(enumValue) {
    switch (enumValue) {
      case 'morning':
        return 4;

      case 'evening':
        return 17;

      case 'pm':
      case 'noon':
      case 'afternoon':
        return 12;

      case 'am':
      case 'midnight':
      case 'night':
      default:
        return 0;
    }
  }

  function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0; // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC

    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;

    if (absCurrentYear <= 50) {
      result = twoDigitYear || 100;
    } else {
      var rangeEnd = absCurrentYear + 50;
      var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
      var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
      result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }

    return isCommonEra ? result : 1 - result;
  }

  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

  function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
   * |  p  |                                |  P  |                                |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   */


  var parsers = {
    // Era
    G: {
      priority: 140,
      parse: function (string, token, match, _options) {
        switch (token) {
          // AD, BC
          case 'G':
          case 'GG':
          case 'GGG':
            return match.era(string, {
              width: 'abbreviated'
            }) || match.era(string, {
              width: 'narrow'
            });
          // A, B

          case 'GGGGG':
            return match.era(string, {
              width: 'narrow'
            });
          // Anno Domini, Before Christ

          case 'GGGG':
          default:
            return match.era(string, {
              width: 'wide'
            }) || match.era(string, {
              width: 'abbreviated'
            }) || match.era(string, {
              width: 'narrow'
            });
        }
      },
      set: function (date, flags, value, _options) {
        flags.era = value;
        date.setUTCFullYear(value, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['R', 'u', 't', 'T']
    },
    // Year
    y: {
      // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
      // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
      // |----------|-------|----|-------|-------|-------|
      // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
      // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
      // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
      // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
      // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
      priority: 130,
      parse: function (string, token, match, _options) {
        var valueCallback = function (year) {
          return {
            year: year,
            isTwoDigitYear: token === 'yy'
          };
        };

        switch (token) {
          case 'y':
            return parseNDigits(4, string, valueCallback);

          case 'yo':
            return match.ordinalNumber(string, {
              unit: 'year',
              valueCallback: valueCallback
            });

          default:
            return parseNDigits(token.length, string, valueCallback);
        }
      },
      validate: function (_date, value, _options) {
        return value.isTwoDigitYear || value.year > 0;
      },
      set: function (date, flags, value, _options) {
        var currentYear = date.getUTCFullYear();

        if (value.isTwoDigitYear) {
          var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
          date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        }

        var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setUTCFullYear(year, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
    },
    // Local week-numbering year
    Y: {
      priority: 130,
      parse: function (string, token, match, _options) {
        var valueCallback = function (year) {
          return {
            year: year,
            isTwoDigitYear: token === 'YY'
          };
        };

        switch (token) {
          case 'Y':
            return parseNDigits(4, string, valueCallback);

          case 'Yo':
            return match.ordinalNumber(string, {
              unit: 'year',
              valueCallback: valueCallback
            });

          default:
            return parseNDigits(token.length, string, valueCallback);
        }
      },
      validate: function (_date, value, _options) {
        return value.isTwoDigitYear || value.year > 0;
      },
      set: function (date, flags, value, options) {
        var currentYear = getUTCWeekYear(date, options);

        if (value.isTwoDigitYear) {
          var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
          date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
          date.setUTCHours(0, 0, 0, 0);
          return startOfUTCWeek(date, options);
        }

        var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
    },
    // ISO week-numbering year
    R: {
      priority: 130,
      parse: function (string, token, _match, _options) {
        if (token === 'R') {
          return parseNDigitsSigned(4, string);
        }

        return parseNDigitsSigned(token.length, string);
      },
      set: function (_date, _flags, value, _options) {
        var firstWeekOfYear = new Date(0);
        firstWeekOfYear.setUTCFullYear(value, 0, 4);
        firstWeekOfYear.setUTCHours(0, 0, 0, 0);
        return startOfUTCISOWeek(firstWeekOfYear);
      },
      incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
    },
    // Extended year
    u: {
      priority: 130,
      parse: function (string, token, _match, _options) {
        if (token === 'u') {
          return parseNDigitsSigned(4, string);
        }

        return parseNDigitsSigned(token.length, string);
      },
      set: function (date, _flags, value, _options) {
        date.setUTCFullYear(value, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
    },
    // Quarter
    Q: {
      priority: 120,
      parse: function (string, token, match, _options) {
        switch (token) {
          // 1, 2, 3, 4
          case 'Q':
          case 'QQ':
            // 01, 02, 03, 04
            return parseNDigits(token.length, string);
          // 1st, 2nd, 3rd, 4th

          case 'Qo':
            return match.ordinalNumber(string, {
              unit: 'quarter'
            });
          // Q1, Q2, Q3, Q4

          case 'QQQ':
            return match.quarter(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // 1, 2, 3, 4 (narrow quarter; could be not numerical)

          case 'QQQQQ':
            return match.quarter(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // 1st quarter, 2nd quarter, ...

          case 'QQQQ':
          default:
            return match.quarter(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.quarter(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 4;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth((value - 1) * 3, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Stand-alone quarter
    q: {
      priority: 120,
      parse: function (string, token, match, _options) {
        switch (token) {
          // 1, 2, 3, 4
          case 'q':
          case 'qq':
            // 01, 02, 03, 04
            return parseNDigits(token.length, string);
          // 1st, 2nd, 3rd, 4th

          case 'qo':
            return match.ordinalNumber(string, {
              unit: 'quarter'
            });
          // Q1, Q2, Q3, Q4

          case 'qqq':
            return match.quarter(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // 1, 2, 3, 4 (narrow quarter; could be not numerical)

          case 'qqqqq':
            return match.quarter(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // 1st quarter, 2nd quarter, ...

          case 'qqqq':
          default:
            return match.quarter(string, {
              width: 'wide',
              context: 'standalone'
            }) || match.quarter(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'standalone'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 4;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth((value - 1) * 3, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Month
    M: {
      priority: 110,
      parse: function (string, token, match, _options) {
        var valueCallback = function (value) {
          return value - 1;
        };

        switch (token) {
          // 1, 2, ..., 12
          case 'M':
            return parseNumericPattern(numericPatterns.month, string, valueCallback);
          // 01, 02, ..., 12

          case 'MM':
            return parseNDigits(2, string, valueCallback);
          // 1st, 2nd, ..., 12th

          case 'Mo':
            return match.ordinalNumber(string, {
              unit: 'month',
              valueCallback: valueCallback
            });
          // Jan, Feb, ..., Dec

          case 'MMM':
            return match.month(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.month(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // J, F, ..., D

          case 'MMMMM':
            return match.month(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // January, February, ..., December

          case 'MMMM':
          default:
            return match.month(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.month(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.month(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 11;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth(value, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Stand-alone month
    L: {
      priority: 110,
      parse: function (string, token, match, _options) {
        var valueCallback = function (value) {
          return value - 1;
        };

        switch (token) {
          // 1, 2, ..., 12
          case 'L':
            return parseNumericPattern(numericPatterns.month, string, valueCallback);
          // 01, 02, ..., 12

          case 'LL':
            return parseNDigits(2, string, valueCallback);
          // 1st, 2nd, ..., 12th

          case 'Lo':
            return match.ordinalNumber(string, {
              unit: 'month',
              valueCallback: valueCallback
            });
          // Jan, Feb, ..., Dec

          case 'LLL':
            return match.month(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.month(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // J, F, ..., D

          case 'LLLLL':
            return match.month(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // January, February, ..., December

          case 'LLLL':
          default:
            return match.month(string, {
              width: 'wide',
              context: 'standalone'
            }) || match.month(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.month(string, {
              width: 'narrow',
              context: 'standalone'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 11;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth(value, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Local week of year
    w: {
      priority: 100,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'w':
            return parseNumericPattern(numericPatterns.week, string);

          case 'wo':
            return match.ordinalNumber(string, {
              unit: 'week'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 53;
      },
      set: function (date, _flags, value, options) {
        return startOfUTCWeek(setUTCWeek(date, value, options), options);
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
    },
    // ISO week of year
    I: {
      priority: 100,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'I':
            return parseNumericPattern(numericPatterns.week, string);

          case 'Io':
            return match.ordinalNumber(string, {
              unit: 'week'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 53;
      },
      set: function (date, _flags, value, options) {
        return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
    },
    // Day of the month
    d: {
      priority: 90,
      subPriority: 1,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'd':
            return parseNumericPattern(numericPatterns.date, string);

          case 'do':
            return match.ordinalNumber(string, {
              unit: 'date'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (date, value, _options) {
        var year = date.getUTCFullYear();
        var isLeapYear = isLeapYearIndex(year);
        var month = date.getUTCMonth();

        if (isLeapYear) {
          return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
        } else {
          return value >= 1 && value <= DAYS_IN_MONTH[month];
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCDate(value);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Day of year
    D: {
      priority: 90,
      subPriority: 1,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'D':
          case 'DD':
            return parseNumericPattern(numericPatterns.dayOfYear, string);

          case 'Do':
            return match.ordinalNumber(string, {
              unit: 'date'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (date, value, _options) {
        var year = date.getUTCFullYear();
        var isLeapYear = isLeapYearIndex(year);

        if (isLeapYear) {
          return value >= 1 && value <= 366;
        } else {
          return value >= 1 && value <= 365;
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth(0, value);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
    },
    // Day of week
    E: {
      priority: 90,
      parse: function (string, token, match, _options) {
        switch (token) {
          // Tue
          case 'E':
          case 'EE':
          case 'EEE':
            return match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // T

          case 'EEEEE':
            return match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'EEEEEE':
            return match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tuesday

          case 'EEEE':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 6;
      },
      set: function (date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
    },
    // Local day of week
    e: {
      priority: 90,
      parse: function (string, token, match, options) {
        var valueCallback = function (value) {
          var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
          return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };

        switch (token) {
          // 3
          case 'e':
          case 'ee':
            // 03
            return parseNDigits(token.length, string, valueCallback);
          // 3rd

          case 'eo':
            return match.ordinalNumber(string, {
              unit: 'day',
              valueCallback: valueCallback
            });
          // Tue

          case 'eee':
            return match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // T

          case 'eeeee':
            return match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'eeeeee':
            return match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tuesday

          case 'eeee':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 6;
      },
      set: function (date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
    },
    // Stand-alone local day of week
    c: {
      priority: 90,
      parse: function (string, token, match, options) {
        var valueCallback = function (value) {
          var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
          return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };

        switch (token) {
          // 3
          case 'c':
          case 'cc':
            // 03
            return parseNDigits(token.length, string, valueCallback);
          // 3rd

          case 'co':
            return match.ordinalNumber(string, {
              unit: 'day',
              valueCallback: valueCallback
            });
          // Tue

          case 'ccc':
            return match.day(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.day(string, {
              width: 'short',
              context: 'standalone'
            }) || match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // T

          case 'ccccc':
            return match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // Tu

          case 'cccccc':
            return match.day(string, {
              width: 'short',
              context: 'standalone'
            }) || match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // Tuesday

          case 'cccc':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'standalone'
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.day(string, {
              width: 'short',
              context: 'standalone'
            }) || match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 6;
      },
      set: function (date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
    },
    // ISO day of week
    i: {
      priority: 90,
      parse: function (string, token, match, _options) {
        var valueCallback = function (value) {
          if (value === 0) {
            return 7;
          }

          return value;
        };

        switch (token) {
          // 2
          case 'i':
          case 'ii':
            // 02
            return parseNDigits(token.length, string);
          // 2nd

          case 'io':
            return match.ordinalNumber(string, {
              unit: 'day'
            });
          // Tue

          case 'iii':
            return match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
          // T

          case 'iiiii':
            return match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
          // Tu

          case 'iiiiii':
            return match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
          // Tuesday

          case 'iiii':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 7;
      },
      set: function (date, _flags, value, options) {
        date = setUTCISODay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
    },
    // AM or PM
    a: {
      priority: 80,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'a':
          case 'aa':
          case 'aaa':
            return match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'aaaaa':
            return match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'aaaa':
          default:
            return match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
    },
    // AM, PM, midnight
    b: {
      priority: 80,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'b':
          case 'bb':
          case 'bbb':
            return match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'bbbbb':
            return match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'bbbb':
          default:
            return match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
    },
    // in the morning, in the afternoon, in the evening, at night
    B: {
      priority: 80,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'B':
          case 'BB':
          case 'BBB':
            return match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'BBBBB':
            return match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'BBBB':
          default:
            return match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'b', 't', 'T']
    },
    // Hour [1-12]
    h: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'h':
            return parseNumericPattern(numericPatterns.hour12h, string);

          case 'ho':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 12;
      },
      set: function (date, _flags, value, _options) {
        var isPM = date.getUTCHours() >= 12;

        if (isPM && value < 12) {
          date.setUTCHours(value + 12, 0, 0, 0);
        } else if (!isPM && value === 12) {
          date.setUTCHours(0, 0, 0, 0);
        } else {
          date.setUTCHours(value, 0, 0, 0);
        }

        return date;
      },
      incompatibleTokens: ['H', 'K', 'k', 't', 'T']
    },
    // Hour [0-23]
    H: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'H':
            return parseNumericPattern(numericPatterns.hour23h, string);

          case 'Ho':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 23;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(value, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
    },
    // Hour [0-11]
    K: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'K':
            return parseNumericPattern(numericPatterns.hour11h, string);

          case 'Ko':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 11;
      },
      set: function (date, _flags, value, _options) {
        var isPM = date.getUTCHours() >= 12;

        if (isPM && value < 12) {
          date.setUTCHours(value + 12, 0, 0, 0);
        } else {
          date.setUTCHours(value, 0, 0, 0);
        }

        return date;
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
    },
    // Hour [1-24]
    k: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'k':
            return parseNumericPattern(numericPatterns.hour24h, string);

          case 'ko':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 24;
      },
      set: function (date, _flags, value, _options) {
        var hours = value <= 24 ? value % 24 : value;
        date.setUTCHours(hours, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
    },
    // Minute
    m: {
      priority: 60,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'm':
            return parseNumericPattern(numericPatterns.minute, string);

          case 'mo':
            return match.ordinalNumber(string, {
              unit: 'minute'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 59;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMinutes(value, 0, 0);
        return date;
      },
      incompatibleTokens: ['t', 'T']
    },
    // Second
    s: {
      priority: 50,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 's':
            return parseNumericPattern(numericPatterns.second, string);

          case 'so':
            return match.ordinalNumber(string, {
              unit: 'second'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 59;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCSeconds(value, 0);
        return date;
      },
      incompatibleTokens: ['t', 'T']
    },
    // Fraction of second
    S: {
      priority: 30,
      parse: function (string, token, _match, _options) {
        var valueCallback = function (value) {
          return Math.floor(value * Math.pow(10, -token.length + 3));
        };

        return parseNDigits(token.length, string, valueCallback);
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMilliseconds(value);
        return date;
      },
      incompatibleTokens: ['t', 'T']
    },
    // Timezone (ISO-8601. +00:00 is `'Z'`)
    X: {
      priority: 10,
      parse: function (string, token, _match, _options) {
        switch (token) {
          case 'X':
            return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

          case 'XX':
            return parseTimezonePattern(timezonePatterns.basic, string);

          case 'XXXX':
            return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

          case 'XXXXX':
            return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

          case 'XXX':
          default:
            return parseTimezonePattern(timezonePatterns.extended, string);
        }
      },
      set: function (date, flags, value, _options) {
        if (flags.timestampIsSet) {
          return date;
        }

        return new Date(date.getTime() - value);
      },
      incompatibleTokens: ['t', 'T', 'x']
    },
    // Timezone (ISO-8601)
    x: {
      priority: 10,
      parse: function (string, token, _match, _options) {
        switch (token) {
          case 'x':
            return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

          case 'xx':
            return parseTimezonePattern(timezonePatterns.basic, string);

          case 'xxxx':
            return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

          case 'xxxxx':
            return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

          case 'xxx':
          default:
            return parseTimezonePattern(timezonePatterns.extended, string);
        }
      },
      set: function (date, flags, value, _options) {
        if (flags.timestampIsSet) {
          return date;
        }

        return new Date(date.getTime() - value);
      },
      incompatibleTokens: ['t', 'T', 'X']
    },
    // Seconds timestamp
    t: {
      priority: 40,
      parse: function (string, _token, _match, _options) {
        return parseAnyDigitsSigned(string);
      },
      set: function (_date, _flags, value, _options) {
        return [new Date(value * 1000), {
          timestampIsSet: true
        }];
      },
      incompatibleTokens: '*'
    },
    // Milliseconds timestamp
    T: {
      priority: 20,
      parse: function (string, _token, _match, _options) {
        return parseAnyDigitsSigned(string);
      },
      set: function (_date, _flags, value, _options) {
        return [new Date(value), {
          timestampIsSet: true
        }];
      },
      incompatibleTokens: '*'
    }
  };

  var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
  // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
  //   (one of the certain letters followed by `o`)
  // - (\w)\1* matches any sequences of the same letter
  // - '' matches two quote characters in a row
  // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
  //   except a single quote symbol, which ends the sequence.
  //   Two quote characters do not end the sequence.
  //   If there is no matching single quote
  //   then the sequence will continue until the end of the string.
  // - . matches any single character unmatched by previous parts of the RegExps

  var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
  // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

  var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp$1 = /^'([^]*?)'?$/;
  var doubleQuoteRegExp$1 = /''/g;
  var notWhitespaceRegExp = /\S/;
  var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
  /**
   * @name parse
   * @category Common Helpers
   * @summary Parse the date.
   *
   * @description
   * Return the date parsed from string using the given format string.
   *
   * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
   * > See: https://git.io/fxCyr
   *
   * The characters in the format string wrapped between two single quotes characters (') are escaped.
   * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
   *
   * Format of the format string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * with a few additions (see note 5 below the table).
   *
   * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
   * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
   *
   * ```javascript
   * parse('23 AM', 'HH a', new Date())
   * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
   * ```
   *
   * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
   *
   * Accepted format string patterns:
   * | Unit                            |Prior| Pattern | Result examples                   | Notes |
   * |---------------------------------|-----|---------|-----------------------------------|-------|
   * | Era                             | 140 | G..GGG  | AD, BC                            |       |
   * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
   * |                                 |     | GGGGG   | A, B                              |       |
   * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
   * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
   * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
   * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
   * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
   * |                                 |     | yyyyy   | ...                               | 2,4   |
   * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
   * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
   * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
   * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
   * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
   * |                                 |     | YYYYY   | ...                               | 2,4   |
   * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
   * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
   * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
   * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
   * |                                 |     | RRRRR   | ...                               | 2,4,5 |
   * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
   * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
   * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
   * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
   * |                                 |     | uuuuu   | ...                               | 2,4   |
   * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
   * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
   * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
   * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
   * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
   * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
   * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
   * |                                 |     | qq      | 01, 02, 03, 04                    |       |
   * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
   * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
   * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
   * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
   * |                                 |     | MM      | 01, 02, ..., 12                   |       |
   * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
   * |                                 |     | MMMM    | January, February, ..., December  | 2     |
   * |                                 |     | MMMMM   | J, F, ..., D                      |       |
   * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
   * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
   * |                                 |     | LL      | 01, 02, ..., 12                   |       |
   * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
   * |                                 |     | LLLL    | January, February, ..., December  | 2     |
   * |                                 |     | LLLLL   | J, F, ..., D                      |       |
   * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
   * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
   * |                                 |     | ww      | 01, 02, ..., 53                   |       |
   * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
   * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
   * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
   * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
   * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
   * |                                 |     | dd      | 01, 02, ..., 31                   |       |
   * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
   * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
   * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
   * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
   * |                                 |     | DDDD    | ...                               | 2     |
   * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
   * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
   * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
   * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
   * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
   * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
   * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
   * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
   * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
   * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
   * |                                 |     | ee      | 02, 03, ..., 01                   |       |
   * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
   * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
   * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
   * |                                 |     | cc      | 02, 03, ..., 01                   |       |
   * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
   * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
   * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
   * |                                 |     | aaaaa   | a, p                              |       |
   * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
   * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
   * |                                 |     | bbbbb   | a, p, n, mi                       |       |
   * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
   * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
   * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
   * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
   * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
   * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
   * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
   * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
   * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
   * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
   * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
   * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
   * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
   * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
   * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
   * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
   * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
   * |                                 |     | mm      | 00, 01, ..., 59                   |       |
   * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
   * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
   * |                                 |     | ss      | 00, 01, ..., 59                   |       |
   * | Seconds timestamp               |  40 | t       | 512969520                         |       |
   * |                                 |     | tt      | ...                               | 2     |
   * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
   * |                                 |     | SS      | 00, 01, ..., 99                   |       |
   * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
   * |                                 |     | SSSS    | ...                               | 2     |
   * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
   * |                                 |     | TT      | ...                               | 2     |
   * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
   * |                                 |     | XX      | -0800, +0530, Z                   |       |
   * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
   * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
   * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
   * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
   * |                                 |     | xx      | -0800, +0530, +0000               |       |
   * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
   * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
   * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
   * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
   * |                                 |     | PP      | May 29, 1453                      |       |
   * |                                 |     | PPP     | May 29th, 1453                    |       |
   * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
   * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
   * |                                 |     | pp      | 12:00:00 AM                       |       |
   * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
   * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
   * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
   * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
   * Notes:
   * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   *    are the same as "stand-alone" units, but are different in some languages.
   *    "Formatting" units are declined according to the rules of the language
   *    in the context of a date. "Stand-alone" units are always nominative singular.
   *    In `format` function, they will produce different result:
   *
   *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
   *
   *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
   *
   *    `parse` will try to match both formatting and stand-alone units interchangably.
   *
   * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
   *    the single quote characters (see below).
   *    If the sequence is longer than listed in table:
   *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
   *      as wide as the sequence
   *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
   *      These variations are marked with "2" in the last column of the table.
   *
   * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   *    These tokens represent the shortest form of the quarter.
   *
   * 4. The main difference between `y` and `u` patterns are B.C. years:
   *
   *    | Year | `y` | `u` |
   *    |------|-----|-----|
   *    | AC 1 |   1 |   1 |
   *    | BC 1 |   1 |   0 |
   *    | BC 2 |   2 |  -1 |
   *
   *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
   *
   *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
   *
   *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
   *
   *    while `uu` will just assign the year as is:
   *
   *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
   *
   *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
   *
   *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   *    except local week-numbering years are dependent on `options.weekStartsOn`
   *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
   *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
   *
   * 5. These patterns are not in the Unicode Technical Standard #35:
   *    - `i`: ISO day of week
   *    - `I`: ISO week of year
   *    - `R`: ISO week-numbering year
   *    - `o`: ordinal number modifier
   *    - `P`: long localized date
   *    - `p`: long localized time
   *
   * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
   *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
   *    on the given locale.
   *
   *    using `en-US` locale: `P` => `MM/dd/yyyy`
   *    using `en-US` locale: `p` => `hh:mm a`
   *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
   *    using `pt-BR` locale: `p` => `HH:mm`
   *
   * Values will be assigned to the date in the descending order of its unit's priority.
   * Units of an equal priority overwrite each other in the order of appearance.
   *
   * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
   * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
   *
   * `referenceDate` must be passed for correct work of the function.
   * If you're not sure which `referenceDate` to supply, create a new instance of Date:
   * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
   * In this case parsing will be done in the context of the current date.
   * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
   * then `Invalid Date` will be returned.
   *
   * The result may vary by locale.
   *
   * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
   *
   * If parsing failed, `Invalid Date` will be returned.
   * Invalid Date is a Date, whose time value is NaN.
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - Old `parse` was renamed to `toDate`.
   *   Now `parse` is a new function which parses a string using a provided format.
   *
   *   ```javascript
   *   // Before v2.0.0
   *   parse('2016-01-01')
   *
   *   // v2.0.0 onward (toDate no longer accepts a string)
   *   toDate(1392098430000) // Unix to timestamp
   *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
   *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
   *   ```
   *
   * @param {String} dateString - the string to parse
   * @param {String} formatString - the string of tokens
   * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
   *   see: https://git.io/fxCyr
   * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
   *   see: https://git.io/fxCyr
   * @returns {Date} the parsed date
   * @throws {TypeError} 3 arguments required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   * @throws {RangeError} `options.locale` must contain `match` property
   * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} format string contains an unescaped latin alphabet character
   *
   * @example
   * // Parse 11 February 2014 from middle-endian format:
   * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
   * //=> Tue Feb 11 2014 00:00:00
   *
   * @example
   * // Parse 28th of February in Esperanto locale in the context of 2010 year:
   * import eo from 'date-fns/locale/eo'
   * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
   *   locale: eo
   * })
   * //=> Sun Feb 28 2010 00:00:00
   */

  function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
    requiredArgs(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var options = dirtyOptions || {};
    var locale$1 = options.locale || locale;

    if (!locale$1.match) {
      throw new RangeError('locale must contain match property');
    }

    var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    if (formatString === '') {
      if (dateString === '') {
        return toDate(dirtyReferenceDate);
      } else {
        return new Date(NaN);
      }
    }

    var subFnOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale$1 // If timezone isn't specified, it will be set to the system timezone

    };
    var setters = [{
      priority: TIMEZONE_UNIT_PRIORITY,
      subPriority: -1,
      set: dateToSystemTimezone,
      index: 0
    }];
    var i;
    var tokens = formatString.match(longFormattingTokensRegExp$1).map(function (substring) {
      var firstCharacter = substring[0];

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale$1.formatLong, subFnOptions);
      }

      return substring;
    }).join('').match(formattingTokensRegExp$1);
    var usedTokens = [];

    for (i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }

      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];

      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;

        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = void 0;

          for (var _i = 0; _i < usedTokens.length; _i++) {
            var usedToken = usedTokens[_i].token;

            if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
              incompatibleToken = usedTokens[_i];
              break;
            }
          }

          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }

        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

        if (!parseResult) {
          return new Date(NaN);
        }

        setters.push({
          priority: parser.priority,
          subPriority: parser.subPriority || 0,
          set: parser.set,
          validate: parser.validate,
          value: parseResult.value,
          index: setters.length
        });
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
          throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        } // Replace two single quote characters with one single quote character


        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString$1(token);
        } // Cut token from string, or, if string doesn't match the token, return Invalid Date


        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return new Date(NaN);
        }
      }
    } // Check if the remaining input contains something other than whitespace


    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
      return new Date(NaN);
    }

    var uniquePrioritySetters = setters.map(function (setter) {
      return setter.priority;
    }).sort(function (a, b) {
      return b - a;
    }).filter(function (priority, index, array) {
      return array.indexOf(priority) === index;
    }).map(function (priority) {
      return setters.filter(function (setter) {
        return setter.priority === priority;
      }).sort(function (a, b) {
        return b.subPriority - a.subPriority;
      });
    }).map(function (setterArray) {
      return setterArray[0];
    });
    var date = toDate(dirtyReferenceDate);

    if (isNaN(date)) {
      return new Date(NaN);
    } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


    var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    var flags = {};

    for (i = 0; i < uniquePrioritySetters.length; i++) {
      var setter = uniquePrioritySetters[i];

      if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
        return new Date(NaN);
      }

      var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

      if (result[0]) {
        utcDate = result[0];
        assign(flags, result[1]); // Result is date
      } else {
        utcDate = result;
      }
    }

    return utcDate;
  }

  function dateToSystemTimezone(date, flags) {
    if (flags.timestampIsSet) {
      return date;
    }

    var convertedDate = new Date(0);
    convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return convertedDate;
  }

  function cleanEscapedString$1(input) {
    return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
  }

  var hookCallback;

  function hooks () {
      return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback (callback) {
      hookCallback = callback;
  }

  function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
      var k;
      for (k in obj) {
          // even if its not own property I'd still call it non-empty
          return false;
      }
      return true;
  }

  function isUndefined(input) {
      return input === void 0;
  }

  function isNumber(input) {
      return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
      var res = [], i;
      for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
      }
      return res;
  }

  function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
      for (var i in b) {
          if (hasOwnProp(b, i)) {
              a[i] = b[i];
          }
      }

      if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
      }

      return a;
  }

  function createUTC (input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
          empty           : false,
          unusedTokens    : [],
          unusedInput     : [],
          overflow        : -2,
          charsLeftOver   : 0,
          nullInput       : false,
          invalidMonth    : null,
          invalidFormat   : false,
          userInvalidated : false,
          iso             : false,
          parsedDateParts : [],
          meridiem        : null,
          rfc2822         : false,
          weekdayMismatch : false
      };
  }

  function getParsingFlags(m) {
      if (m._pf == null) {
          m._pf = defaultParsingFlags();
      }
      return m._pf;
  }

  var some;
  if (Array.prototype.some) {
      some = Array.prototype.some;
  } else {
      some = function (fun) {
          var t = Object(this);
          var len = t.length >>> 0;

          for (var i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                  return true;
              }
          }

          return false;
      };
  }

  function isValid$1(m) {
      if (m._isValid == null) {
          var flags = getParsingFlags(m);
          var parsedParts = some.call(flags.parsedDateParts, function (i) {
              return i != null;
          });
          var isNowValid = !isNaN(m._d.getTime()) &&
              flags.overflow < 0 &&
              !flags.empty &&
              !flags.invalidMonth &&
              !flags.invalidWeekday &&
              !flags.nullInput &&
              !flags.invalidFormat &&
              !flags.userInvalidated &&
              (!flags.meridiem || (flags.meridiem && parsedParts));

          if (m._strict) {
              isNowValid = isNowValid &&
                  flags.charsLeftOver === 0 &&
                  flags.unusedTokens.length === 0 &&
                  flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
          }
          else {
              return isNowValid;
          }
      }
      return m._isValid;
  }

  function createInvalid (flags) {
      var m = createUTC(NaN);
      if (flags != null) {
          extend(getParsingFlags(m), flags);
      }
      else {
          getParsingFlags(m).userInvalidated = true;
      }

      return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
      var i, prop, val;

      if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
      }
      if (!isUndefined(from._i)) {
          to._i = from._i;
      }
      if (!isUndefined(from._f)) {
          to._f = from._f;
      }
      if (!isUndefined(from._l)) {
          to._l = from._l;
      }
      if (!isUndefined(from._strict)) {
          to._strict = from._strict;
      }
      if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
      }
      if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
      }
      if (!isUndefined(from._offset)) {
          to._offset = from._offset;
      }
      if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
      }
      if (!isUndefined(from._locale)) {
          to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from[prop];
              if (!isUndefined(val)) {
                  to[prop] = val;
              }
          }
      }

      return to;
  }

  var updateInProgress = false;

  // Moment prototype object
  function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
          this._d = new Date(NaN);
      }
      // Prevent infinite loop in case updateOffset creates new moment
      // objects.
      if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
      }
  }

  function isMoment (obj) {
      return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }

  function absFloor (number) {
      if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
      } else {
          return Math.floor(number);
      }
  }

  function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
      }

      return value;
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;
      for (i = 0; i < len; i++) {
          if ((dontConvert && array1[i] !== array2[i]) ||
              (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
              diffs++;
          }
      }
      return diffs + lengthDiff;
  }

  function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false &&
              (typeof console !==  'undefined') && console.warn) {
          console.warn('Deprecation warning: ' + msg);
      }
  }

  function deprecate(msg, fn) {
      var firstTime = true;

      return extend(function () {
          if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
              var args = [];
              var arg;
              for (var i = 0; i < arguments.length; i++) {
                  arg = '';
                  if (typeof arguments[i] === 'object') {
                      arg += '\n[' + i + '] ';
                      for (var key in arguments[0]) {
                          arg += key + ': ' + arguments[0][key] + ', ';
                      }
                      arg = arg.slice(0, -2); // Remove trailing comma and space
                  } else {
                      arg = arguments[i];
                  }
                  args.push(arg);
              }
              warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
              firstTime = false;
          }
          return fn.apply(this, arguments);
      }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
      }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set (config) {
      var prop, i;
      for (i in config) {
          prop = config[i];
          if (isFunction(prop)) {
              this[i] = prop;
          } else {
              this['_' + i] = prop;
          }
      }
      this._config = config;
      // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.
      this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              '|' + (/\d{1,2}/).source);
  }

  function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                  res[prop] = {};
                  extend(res[prop], parentConfig[prop]);
                  extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                  res[prop] = childConfig[prop];
              } else {
                  delete res[prop];
              }
          }
      }
      for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])) {
              // make sure changes to properties don't modify parent config
              res[prop] = extend({}, res[prop]);
          }
      }
      return res;
  }

  function Locale(config) {
      if (config != null) {
          this.set(config);
      }
  }

  var keys;

  if (Object.keys) {
      keys = Object.keys;
  } else {
      keys = function (obj) {
          var i, res = [];
          for (i in obj) {
              if (hasOwnProp(obj, i)) {
                  res.push(i);
              }
          }
          return res;
      };
  }

  var defaultCalendar = {
      sameDay : '[Today at] LT',
      nextDay : '[Tomorrow at] LT',
      nextWeek : 'dddd [at] LT',
      lastDay : '[Yesterday at] LT',
      lastWeek : '[Last] dddd [at] LT',
      sameElse : 'L'
  };

  function calendar (key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
      LTS  : 'h:mm:ss A',
      LT   : 'h:mm A',
      L    : 'MM/DD/YYYY',
      LL   : 'MMMM D, YYYY',
      LLL  : 'MMMM D, YYYY h:mm A',
      LLLL : 'dddd, MMMM D, YYYY h:mm A'
  };

  function longDateFormat (key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
          return format;
      }

      this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
          return val.slice(1);
      });

      return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate () {
      return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal (number) {
      return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
      future : 'in %s',
      past   : '%s ago',
      s  : 'a few seconds',
      ss : '%d seconds',
      m  : 'a minute',
      mm : '%d minutes',
      h  : 'an hour',
      hh : '%d hours',
      d  : 'a day',
      dd : '%d days',
      M  : 'a month',
      MM : '%d months',
      y  : 'a year',
      yy : '%d years'
  };

  function relativeTime (number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return (isFunction(output)) ?
          output(number, withoutSuffix, string, isFuture) :
          output.replace(/%d/i, number);
  }

  function pastFuture (diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias (unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                  normalizedInput[normalizedProp] = inputObject[prop];
              }
          }
      }

      return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
      var units = [];
      for (var u in unitsObj) {
          units.push({unit: u, priority: priorities[u]});
      }
      units.sort(function (a, b) {
          return a.priority - b.priority;
      });
      return units;
  }

  function makeGetSet (unit, keepTime) {
      return function (value) {
          if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
          } else {
              return get(this, unit);
          }
      };
  }

  function get (mom, unit) {
      return mom.isValid() ?
          mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1 (mom, unit, value) {
      if (mom.isValid()) {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
  }

  // MOMENTS

  function stringGet (units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
          return this[units]();
      }
      return this;
  }


  function stringSet (units, value) {
      if (typeof units === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units);
          for (var i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
          }
      } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
              return this[units](value);
          }
      }
      return this;
  }

  function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? (forceSign ? '+' : '') : '-') +
          Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

  var formatFunctions = {};

  var formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken (token, padded, ordinal, callback) {
      var func = callback;
      if (typeof callback === 'string') {
          func = function () {
              return this[callback]();
          };
      }
      if (token) {
          formatTokenFunctions[token] = func;
      }
      if (padded) {
          formatTokenFunctions[padded[0]] = function () {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
      }
      if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
              return this.localeData().ordinal(func.apply(this, arguments), token);
          };
      }
  }

  function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
      }
      return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
      var array = format.match(formattingTokens), i, length;

      for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
          } else {
              array[i] = removeFormattingTokens(array[i]);
          }
      }

      return function (mom) {
          var output = '', i;
          for (i = 0; i < length; i++) {
              output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }
          return output;
      };
  }

  // format date using native date object
  function formatMoment(m, format) {
      if (!m.isValid()) {
          return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

      return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
      }

      return format;
  }

  var match1         = /\d/;            //       0 - 9
  var match2         = /\d\d/;          //      00 - 99
  var match3         = /\d{3}/;         //     000 - 999
  var match4         = /\d{4}/;         //    0000 - 9999
  var match6         = /[+-]?\d{6}/;    // -999999 - 999999
  var match1to2      = /\d\d?/;         //       0 - 99
  var match3to4      = /\d\d\d\d?/;     //     999 - 9999
  var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
  var match1to3      = /\d{1,3}/;       //       0 - 999
  var match1to4      = /\d{1,4}/;       //       0 - 9999
  var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

  var matchUnsigned  = /\d+/;           //       0 - inf
  var matchSigned    = /[+-]?\d+/;      //    -inf - inf

  var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months
  var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

  var regexes = {};

  function addRegexToken (token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return (isStrict && strictRegex) ? strictRegex : regex;
      };
  }

  function getParseRegexForToken (token, config) {
      if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
      }));
  }

  function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken (token, callback) {
      var i, func = callback;
      if (typeof token === 'string') {
          token = [token];
      }
      if (isNumber(callback)) {
          func = function (input, array) {
              array[callback] = toInt(input);
          };
      }
      for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
      }
  }

  function addWeekParseToken (token, callback) {
      addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
      });
  }

  function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
      }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;

  var indexOf;

  if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
  } else {
      indexOf = function (o) {
          // I know
          var i;
          for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                  return i;
              }
          }
          return -1;
      };
  }

  function daysInMonth(year, month) {
      return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
  });

  addFormatToken('MMM', 0, 0, function (format) {
      return this.localeData().monthsShort(this, format);
  });

  addFormatToken('MMMM', 0, 0, function (format) {
      return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M',    match1to2);
  addRegexToken('MM',   match1to2, match2);
  addRegexToken('MMM',  function (isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
      return locale.monthsRegex(isStrict);
  });

  addParseToken(['M', 'MM'], function (input, array) {
      array[MONTH] = toInt(input) - 1;
  });

  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict);
      // if we didn't find a month name, mark the date as invalid.
      if (month != null) {
          array[MONTH] = month;
      } else {
          getParsingFlags(config).invalidMonth = input;
      }
  });

  // LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths (m, format) {
      if (!m) {
          return isArray(this._months) ? this._months :
              this._months['standalone'];
      }
      return isArray(this._months) ? this._months[m.month()] :
          this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort (m, format) {
      if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort :
              this._monthsShort['standalone'];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
          this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
      var i, ii, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
              mom = createUTC([2000, i]);
              this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
      }

      if (strict) {
          if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
          }
      } else {
          if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
          }
      }
  }

  function localeMonthsParse (monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
      }

      // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse
      for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
              this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }
          if (!strict && !this._monthsParse[i]) {
              regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
              this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          // test the regex
          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
              return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
              return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
          }
      }
  }

  // MOMENTS

  function setMonth (mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
          // No op
          return mom;
      }

      if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
              value = toInt(value);
          } else {
              value = mom.localeData().monthsParse(value);
              // TODO: Another silent failure?
              if (!isNumber(value)) {
                  return mom;
              }
          }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
      return mom;
  }

  function getSetMonth (value) {
      if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
      } else {
          return get(this, 'Month');
      }
  }

  function getDaysInMonth () {
      return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex (isStrict) {
      if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
          }
          if (isStrict) {
              return this._monthsShortStrictRegex;
          } else {
              return this._monthsShortRegex;
          }
      } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
              this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ?
              this._monthsShortStrictRegex : this._monthsShortRegex;
      }
  }

  var defaultMonthsRegex = matchWord;
  function monthsRegex (isStrict) {
      if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
          }
          if (isStrict) {
              return this._monthsStrictRegex;
          } else {
              return this._monthsRegex;
          }
      } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
              this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ?
              this._monthsStrictRegex : this._monthsRegex;
      }
  }

  function computeMonthsParse () {
      function cmpLenRev(a, b) {
          return b.length - a.length;
      }

      var shortPieces = [], longPieces = [], mixedPieces = [],
          i, mom;
      for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
      }
      // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
      }
      for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
  });

  addFormatToken(0, ['YY', 2], 0, function () {
      return this.year() % 100;
  });

  addFormatToken(0, ['YYYY',   4],       0, 'year');
  addFormatToken(0, ['YYYYY',  5],       0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y',      matchSigned);
  addRegexToken('YY',     match1to2, match2);
  addRegexToken('YYYY',   match1to4, match4);
  addRegexToken('YYYYY',  match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);

  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
      array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear () {
      return isLeapYear(this.year());
  }

  function createDate (y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date = new Date(y, m, d, h, M, s, ms);

      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
          date.setFullYear(y);
      }
      return date;
  }

  function createUTCDate (y) {
      var date = new Date(Date.UTC.apply(null, arguments));

      // the Date.UTC function remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
      }
      return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
          fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

      return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear, resDayOfYear;

      if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
      } else {
          resYear = year;
          resDayOfYear = dayOfYear;
      }

      return {
          year: resYear,
          dayOfYear: resDayOfYear
      };
  }

  function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek, resYear;

      if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
      } else {
          resYear = mom.year();
          resWeek = week;
      }

      return {
          week: resWeek,
          year: resYear
      };
  }

  function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w',  match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W',  match1to2);
  addRegexToken('WW', match1to2, match2);

  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
  });

  // HELPERS

  // LOCALES

  function localeWeek (mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
      dow : 0, // Sunday is the first day of the week.
      doy : 6  // The week that contains Jan 1st is the first week of the year.
  };

  function localeFirstDayOfWeek () {
      return this._week.dow;
  }

  function localeFirstDayOfYear () {
      return this._week.doy;
  }

  // MOMENTS

  function getSetWeek (input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek (input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');

  addFormatToken('dd', 0, 0, function (format) {
      return this.localeData().weekdaysMin(this, format);
  });

  addFormatToken('ddd', 0, 0, function (format) {
      return this.localeData().weekdaysShort(this, format);
  });

  addFormatToken('dddd', 0, 0, function (format) {
      return this.localeData().weekdays(this, format);
  });

  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d',    match1to2);
  addRegexToken('e',    match1to2);
  addRegexToken('E',    match1to2);
  addRegexToken('dd',   function (isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd',   function (isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd',   function (isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
  });

  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict);
      // if we didn't get a weekday name, mark the date as invalid
      if (weekday != null) {
          week.d = weekday;
      } else {
          getParsingFlags(config).invalidWeekday = input;
      }
  });

  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
      week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
          return input;
      }

      if (!isNaN(input)) {
          return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);
      if (typeof input === 'number') {
          return input;
      }

      return null;
  }

  function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
  }

  // LOCALES

  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays (m, format) {
      if (!m) {
          return isArray(this._weekdays) ? this._weekdays :
              this._weekdays['standalone'];
      }
      return isArray(this._weekdays) ? this._weekdays[m.day()] :
          this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort (m) {
      return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin (m) {
      return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
      var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
              mom = createUTC([2000, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
      }

      if (strict) {
          if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          }
      } else {
          if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          }
      }
  }

  function localeWeekdaysParse (weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already

          mom = createUTC([2000, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
              this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
              this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
          }
          if (!this._weekdaysParse[i]) {
              regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
              this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          // test the regex
          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
          }
      }
  }

  // MOMENTS

  function getSetDayOfWeek (input) {
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
      } else {
          return day;
      }
  }

  function getSetLocaleDayOfWeek (input) {
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek (input) {
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }

      // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.

      if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
          return this.day() || 7;
      }
  }

  var defaultWeekdaysRegex = matchWord;
  function weekdaysRegex (isStrict) {
      if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
          }
          if (isStrict) {
              return this._weekdaysStrictRegex;
          } else {
              return this._weekdaysRegex;
          }
      } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ?
              this._weekdaysStrictRegex : this._weekdaysRegex;
      }
  }

  var defaultWeekdaysShortRegex = matchWord;
  function weekdaysShortRegex (isStrict) {
      if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
          }
          if (isStrict) {
              return this._weekdaysShortStrictRegex;
          } else {
              return this._weekdaysShortRegex;
          }
      } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ?
              this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
  }

  var defaultWeekdaysMinRegex = matchWord;
  function weekdaysMinRegex (isStrict) {
      if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
          }
          if (isStrict) {
              return this._weekdaysMinStrictRegex;
          } else {
              return this._weekdaysMinRegex;
          }
      } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ?
              this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
  }


  function computeWeekdaysParse () {
      function cmpLenRev(a, b) {
          return b.length - a.length;
      }

      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
          i, mom, minp, shortp, longp;
      for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = this.weekdaysMin(mom, '');
          shortp = this.weekdaysShort(mom, '');
          longp = this.weekdays(mom, '');
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
      }
      // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 7; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
          mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;

      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  function hFormat() {
      return this.hours() % 12 || 12;
  }

  function kFormat() {
      return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);

  addFormatToken('hmm', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });

  addFormatToken('hmmss', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
          zeroFill(this.seconds(), 2);
  });

  addFormatToken('Hmm', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
  });

  addFormatToken('Hmmss', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2) +
          zeroFill(this.seconds(), 2);
  });

  function meridiem (token, lowercase) {
      addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
  }

  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem (isStrict, locale) {
      return locale._meridiemParse;
  }

  addRegexToken('a',  matchMeridiem);
  addRegexToken('A',  matchMeridiem);
  addRegexToken('H',  match1to2);
  addRegexToken('h',  match1to2);
  addRegexToken('k',  match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);

  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);

  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM (input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return ((input + '').toLowerCase().charAt(0) === 'p');
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem (hours, minutes, isLower) {
      if (hours > 11) {
          return isLower ? 'pm' : 'PM';
      } else {
          return isLower ? 'am' : 'AM';
      }
  }


  // MOMENTS

  // Setting the hour should keep the time, because the user explicitly
  // specified which hour he wants. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  var getSetHour = makeGetSet('Hours', true);

  var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,

      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,

      week: defaultLocaleWeek,

      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,

      meridiemParse: defaultLocaleMeridiemParse
  };

  // internal storage for locale config files
  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
      var i = 0, j, next, locale, split;

      while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;
          while (j > 0) {
              locale = loadLocale(split.slice(0, j).join('-'));
              if (locale) {
                  return locale;
              }
              if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                  //the next array item is better than a shallower substring of this one
                  break;
              }
              j--;
          }
          i++;
      }
      return null;
  }

  function loadLocale(name) {
      var oldLocale = null;
      // TODO: Find a better way to register and load all the locales in Node
      if (!locales[name] && (typeof module !== 'undefined') &&
              module && module.exports) {
          try {
              oldLocale = globalLocale._abbr;
              require('./locale/' + name);
              // because defineLocale currently also sets the global locale, we
              // want to undo that for lazy loaded locales
              getSetGlobalLocale(oldLocale);
          } catch (e) { }
      }
      return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale (key, values) {
      var data;
      if (key) {
          if (isUndefined(values)) {
              data = getLocale(key);
          }
          else {
              data = defineLocale(key, values);
          }

          if (data) {
              // moment.duration._locale = moment._locale = data;
              globalLocale = data;
          }
      }

      return globalLocale._abbr;
  }

  function defineLocale (name, config) {
      if (config !== null) {
          var parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
              deprecateSimple('defineLocaleOverride',
                      'use moment.updateLocale(localeName, config) to change ' +
                      'an existing locale. moment.defineLocale(localeName, ' +
                      'config) should only be used for creating a new locale ' +
                      'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
              parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                  parentConfig = locales[config.parentLocale]._config;
              } else {
                  if (!localeFamilies[config.parentLocale]) {
                      localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                      name: name,
                      config: config
                  });
                  return null;
              }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
              localeFamilies[name].forEach(function (x) {
                  defineLocale(x.name, x.config);
              });
          }

          // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.
          getSetGlobalLocale(name);


          return locales[name];
      } else {
          // useful for testing
          delete locales[name];
          return null;
      }
  }

  function updateLocale(name, config) {
      if (config != null) {
          var locale, parentConfig = baseConfig;
          // MERGE
          if (locales[name] != null) {
              parentConfig = locales[name]._config;
          }
          config = mergeConfigs(parentConfig, config);
          locale = new Locale(config);
          locale.parentLocale = locales[name];
          locales[name] = locale;

          // backwards compat for now: also set the locale
          getSetGlobalLocale(name);
      } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                  locales[name] = locales[name].parentLocale;
              } else if (locales[name] != null) {
                  delete locales[name];
              }
          }
      }
      return locales[name];
  }

  // returns locale data
  function getLocale (key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
      }

      if (!key) {
          return globalLocale;
      }

      if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);
          if (locale) {
              return locale;
          }
          key = [key];
      }

      return chooseLocale(key);
  }

  function listLocales() {
      return keys(locales);
  }

  function checkOverflow (m) {
      var overflow;
      var a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
          overflow =
              a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
              a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
              a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
              a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
              a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
              a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
              -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
      }

      return m;
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

  var isoDates = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, false],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      // YYYYMM is NOT allowed by the standard
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, false],
      ['YYYYDDD', /\d{7}/]
  ];

  // iso time formats and regexes
  var isoTimes = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/]
  ];

  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

  // date from iso format
  function configFromISO(config) {
      var i, l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime, dateFormat, timeFormat, tzFormat;

      if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                  dateFormat = isoDates[i][0];
                  allowTime = isoDates[i][2] !== false;
                  break;
              }
          }
          if (dateFormat == null) {
              config._isValid = false;
              return;
          }
          if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                  if (isoTimes[i][1].exec(match[3])) {
                      // match[2] should be 'T' or space
                      timeFormat = (match[2] || ' ') + isoTimes[i][0];
                      break;
                  }
              }
              if (timeFormat == null) {
                  config._isValid = false;
                  return;
              }
          }
          if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
          }
          if (match[4]) {
              if (tzRegex.exec(match[4])) {
                  tzFormat = 'Z';
              } else {
                  config._isValid = false;
                  return;
              }
          }
          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
      } else {
          config._isValid = false;
      }
  }

  // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
      var string, match, dayFormat,
          dateFormat, timeFormat, tzFormat;
      var timezones = {
          ' GMT': ' +0000',
          ' EDT': ' -0400',
          ' EST': ' -0500',
          ' CDT': ' -0500',
          ' CST': ' -0600',
          ' MDT': ' -0600',
          ' MST': ' -0700',
          ' PDT': ' -0700',
          ' PST': ' -0800'
      };
      var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
      var timezone, timezoneIndex;

      string = config._i
          .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
          .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
          .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
      match = basicRfcRegex.exec(string);

      if (match) {
          dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
          dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
          timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

          // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
          if (match[1]) { // day of week given
              var momentDate = new Date(match[2]);
              var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

              if (match[1].substr(0,3) !== momentDay) {
                  getParsingFlags(config).weekdayMismatch = true;
                  config._isValid = false;
                  return;
              }
          }

          switch (match[5].length) {
              case 2: // military
                  if (timezoneIndex === 0) {
                      timezone = ' +0000';
                  } else {
                      timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                      timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                          (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                  }
                  break;
              case 4: // Zone
                  timezone = timezones[match[5]];
                  break;
              default: // UT or +/-9999
                  timezone = timezones[' GMT'];
          }
          match[5] = timezone;
          config._i = match.splice(1).join('');
          tzFormat = ' ZZ';
          config._f = dayFormat + dateFormat + timeFormat + tzFormat;
          configFromStringAndFormat(config);
          getParsingFlags(config).rfc2822 = true;
      } else {
          config._isValid = false;
      }
  }

  // date from iso format or fallback
  function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
      }

      configFromISO(config);
      if (config._isValid === false) {
          delete config._isValid;
      } else {
          return;
      }

      configFromRFC2822(config);
      if (config._isValid === false) {
          delete config._isValid;
      } else {
          return;
      }

      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate(
      'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
      'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
      'discouraged and will be removed in an upcoming major release. Please refer to ' +
      'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
      function (config) {
          config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }
  );

  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
      if (a != null) {
          return a;
      }
      if (b != null) {
          return b;
      }
      return c;
  }

  function currentDateArray(config) {
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray (config) {
      var i, date, input = [], currentDate, yearToUse;

      if (config._d) {
          return;
      }

      currentDate = currentDateArray(config);

      //compute day of the year from weeks and weekdays
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
      }

      //if the day of the year is set, figure out what it is
      if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
      }

      // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
      }

      // Zero out whatever was not defaulted, including time
      for (; i < 7; i++) {
          config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
      }

      // Check for 24:00:00.000
      if (config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.
      if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
          config._a[HOUR] = 24;
      }
  }

  function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

      w = config._w;
      if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;

          // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).
          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
          }
      } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;

          var curWeek = weekOfYear(createLocal(), dow, doy);

          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

          // Default to current week.
          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
              // weekday -- low day numbers are considered next week
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                  weekdayOverflow = true;
              }
          } else if (w.e != null) {
              // local weekday -- counting starts from begining of week
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                  weekdayOverflow = true;
              }
          } else {
              // default to begining of week
              weekday = dow;
          }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
      } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
      }
  }

  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
      }
      if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;

      // This array is used to make a Date, either with `new Date` or `Date.UTC`
      var string = '' + config._i,
          i, parsedInput, tokens, token, skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;

      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
          // console.log('token', token, 'parsedInput', parsedInput,
          //         'regex', getParseRegexForToken(token, config));
          if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                  getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
          }
          // don't parse if it's not a known token
          if (formatTokenFunctions[token]) {
              if (parsedInput) {
                  getParsingFlags(config).empty = false;
              }
              else {
                  getParsingFlags(config).unusedTokens.push(token);
              }
              addTimeToArrayFromToken(token, parsedInput, config);
          }
          else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token);
          }
      }

      // add remaining unparsed input length to the string
      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
      }

      // clear _12h flag if hour is <= 12
      if (config._a[HOUR] <= 12 &&
          getParsingFlags(config).bigHour === true &&
          config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      // handle meridiem
      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

      configFromArray(config);
      checkOverflow(config);
  }


  function meridiemFixWrap (locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
          // nothing to do
          return hour;
      }
      if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);
          if (isPm && hour < 12) {
              hour += 12;
          }
          if (!isPm && hour === 12) {
              hour = 0;
          }
          return hour;
      } else {
          // this is not supposed to happen
          return hour;
      }
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
      var tempConfig,
          bestMoment,

          scoreToBeat,
          i,
          currentScore;

      if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
      }

      for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (!isValid$1(tempConfig)) {
              continue;
          }

          // if there is any input that was not parsed add a penalty for that format
          currentScore += getParsingFlags(tempConfig).charsLeftOver;

          //or tokens
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

          getParsingFlags(tempConfig).score = currentScore;

          if (scoreToBeat == null || currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
          }
      }

      extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
      if (config._d) {
          return;
      }

      var i = normalizeObjectUnits(config._i);
      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
      });

      configFromArray(config);
  }

  function createFromConfig (config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
      }

      return res;
  }

  function prepareConfig (config) {
      var input = config._i,
          format = config._f;

      config._locale = config._locale || getLocale(config._l);

      if (input === null || (format === undefined && input === '')) {
          return createInvalid({nullInput: true});
      }

      if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
          return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
          config._d = input;
      } else if (isArray(format)) {
          configFromStringAndArray(config);
      } else if (format) {
          configFromStringAndFormat(config);
      }  else {
          configFromInput(config);
      }

      if (!isValid$1(config)) {
          config._d = null;
      }

      return config;
  }

  function configFromInput(config) {
      var input = config._i;
      if (isUndefined(input)) {
          config._d = new Date(hooks.now());
      } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
      } else if (typeof input === 'string') {
          configFromString(config);
      } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
              return parseInt(obj, 10);
          });
          configFromArray(config);
      } else if (isObject(input)) {
          configFromObject(config);
      } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
      } else {
          hooks.createFromInputFallback(config);
      }
  }

  function createLocalOrUTC (input, format, locale, strict, isUTC) {
      var c = {};

      if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
      }

      if ((isObject(input) && isObjectEmpty(input)) ||
              (isArray(input) && input.length === 0)) {
          input = undefined;
      }
      // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423
      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;

      return createFromConfig(c);
  }

  function createLocal (input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
          } else {
              return createInvalid();
          }
      }
  );

  var prototypeMax = deprecate(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
          } else {
              return createInvalid();
          }
      }
  );

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
      }
      if (!moments.length) {
          return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
          }
      }
      return res;
  }

  // TODO: Use [].sort instead?
  function min () {
      var args = [].slice.call(arguments, 0);

      return pickBy('isBefore', args);
  }

  function max () {
      var args = [].slice.call(arguments, 0);

      return pickBy('isAfter', args);
  }

  var now = function () {
      return Date.now ? Date.now() : +(new Date());
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
      for (var key in m) {
          if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
          }
      }

      var unitHasDecimal = false;
      for (var i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
              if (unitHasDecimal) {
                  return false; // only allow non-integers for smallest unit
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                  unitHasDecimal = true;
              }
          }
      }

      return true;
  }

  function isValid$2() {
      return this._isValid;
  }

  function createInvalid$1() {
      return createDuration(NaN);
  }

  function Duration (duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;

      this._isValid = isDurationValid(normalizedInput);

      // representation for dateAddRemove
      this._milliseconds = +milliseconds +
          seconds * 1e3 + // 1000
          minutes * 6e4 + // 1000 * 60
          hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately
      this._days = +days +
          weeks * 7;
      // It is impossible translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.
      this._months = +months +
          quarters * 3 +
          years * 12;

      this._data = {};

      this._locale = getLocale();

      this._bubble();
  }

  function isDuration (obj) {
      return obj instanceof Duration;
  }

  function absRound (number) {
      if (number < 0) {
          return Math.round(-1 * number) * -1;
      } else {
          return Math.round(number);
      }
  }

  // FORMATTING

  function offset (token, separator) {
      addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset();
          var sign = '+';
          if (offset < 0) {
              offset = -offset;
              sign = '-';
          }
          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
      });
  }

  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z',  matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher);

      if (matches === null) {
          return null;
      }

      var chunk   = matches[matches.length - 1] || [];
      var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);

      return minutes === 0 ?
        0 :
        parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
      var res, diff;
      if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          // Use low-level api, because this fn is low-level api.
          res._d.setTime(res._d.valueOf() + diff);
          hooks.updateOffset(res, false);
          return res;
      } else {
          return createLocal(input).local();
      }
  }

  function getDateOffset (m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset (input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
          localAdjust;
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }
      if (input != null) {
          if (typeof input === 'string') {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                  return this;
              }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
              this.add(localAdjust, 'm');
          }
          if (offset !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                  addSubtract(this, createDuration(input - offset, 'm'), 1, false);
              } else if (!this._changeInProgress) {
                  this._changeInProgress = true;
                  hooks.updateOffset(this, true);
                  this._changeInProgress = null;
              }
          }
          return this;
      } else {
          return this._isUTC ? offset : getDateOffset(this);
      }
  }

  function getSetZone (input, keepLocalTime) {
      if (input != null) {
          if (typeof input !== 'string') {
              input = -input;
          }

          this.utcOffset(input, keepLocalTime);

          return this;
      } else {
          return -this.utcOffset();
      }
  }

  function setOffsetToUTC (keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal (keepLocalTime) {
      if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
              this.subtract(getDateOffset(this), 'm');
          }
      }
      return this;
  }

  function setOffsetToParsedOffset () {
      if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
              this.utcOffset(tZone);
          }
          else {
              this.utcOffset(0, true);
          }
      }
      return this;
  }

  function hasAlignedHourOffset (input) {
      if (!this.isValid()) {
          return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;

      return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime () {
      return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
      );
  }

  function isDaylightSavingTimeShifted () {
      if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
      }

      var c = {};

      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
          var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() &&
              compareArrays(c._a, other.toArray()) > 0;
      } else {
          this._isDSTShifted = false;
      }

      return this._isDSTShifted;
  }

  function isLocal () {
      return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset () {
      return this.isValid() ? this._isUTC : false;
  }

  function isUtc () {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

  // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day
  var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

  function createDuration (input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
          match = null,
          sign,
          ret,
          diffRes;

      if (isDuration(input)) {
          duration = {
              ms : input._milliseconds,
              d  : input._days,
              M  : input._months
          };
      } else if (isNumber(input)) {
          duration = {};
          if (key) {
              duration[key] = input;
          } else {
              duration.milliseconds = input;
          }
      } else if (!!(match = aspNetRegex.exec(input))) {
          sign = (match[1] === '-') ? -1 : 1;
          duration = {
              y  : 0,
              d  : toInt(match[DATE])                         * sign,
              h  : toInt(match[HOUR])                         * sign,
              m  : toInt(match[MINUTE])                       * sign,
              s  : toInt(match[SECOND])                       * sign,
              ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
          };
      } else if (!!(match = isoRegex.exec(input))) {
          sign = (match[1] === '-') ? -1 : 1;
          duration = {
              y : parseIso(match[2], sign),
              M : parseIso(match[3], sign),
              w : parseIso(match[4], sign),
              d : parseIso(match[5], sign),
              h : parseIso(match[6], sign),
              m : parseIso(match[7], sign),
              s : parseIso(match[8], sign)
          };
      } else if (duration == null) {// checks for null or undefined
          duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
      }

      return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso (inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.'));
      // apply sign while we're at it
      return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
      var res = {milliseconds: 0, months: 0};

      res.months = other.month() - base.month() +
          (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
      }

      res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

      return res;
  }

  function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
          return {milliseconds: 0, months: 0};
      }

      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
      } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
      }

      return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
      return function (val, period) {
          var dur, tmp;
          //invert the arguments, but complain about it
          if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
              'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
              tmp = val; val = period; period = tmp;
          }

          val = typeof val === 'string' ? +val : val;
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
      };
  }

  function addSubtract (mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months);

      if (!mom.isValid()) {
          // No op
          return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }
      if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }
      if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
      }
      if (updateOffset) {
          hooks.updateOffset(mom, days || months);
      }
  }

  var add      = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6 ? 'sameElse' :
              diff < -1 ? 'lastWeek' :
              diff < 0 ? 'lastDay' :
              diff < 1 ? 'sameDay' :
              diff < 2 ? 'nextDay' :
              diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1 (time, formats) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.
      var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse';

      var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

      return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone () {
      return new Moment(this);
  }

  function isAfter (input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
          return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
      } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
  }

  function isBefore (input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
          return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
      } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
  }

  function isBetween (from, to, units, inclusivity) {
      inclusivity = inclusivity || '()';
      return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
          (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
  }

  function isSame (input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
          inputMs;
      if (!(this.isValid() && localInput.isValid())) {
          return false;
      }
      units = normalizeUnits(units || 'millisecond');
      if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
      } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
  }

  function isSameOrAfter (input, units) {
      return this.isSame(input, units) || this.isAfter(input,units);
  }

  function isSameOrBefore (input, units) {
      return this.isSame(input, units) || this.isBefore(input,units);
  }

  function diff (input, units, asFloat) {
      var that,
          zoneDelta,
          delta, output;

      if (!this.isValid()) {
          return NaN;
      }

      that = cloneWithOffset(input, this);

      if (!that.isValid()) {
          return NaN;
      }

      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

      units = normalizeUnits(units);

      if (units === 'year' || units === 'month' || units === 'quarter') {
          output = monthDiff(this, that);
          if (units === 'quarter') {
              output = output / 3;
          } else if (units === 'year') {
              output = output / 12;
          }
      } else {
          delta = this - that;
          output = units === 'second' ? delta / 1e3 : // 1000
              units === 'minute' ? delta / 6e4 : // 1000 * 60
              units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
              units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
              units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
              delta;
      }
      return asFloat ? output : absFloor(output);
  }

  function monthDiff (a, b) {
      // difference in months
      var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
          anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2, adjust;

      if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor - anchor2);
      } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor2 - anchor);
      }

      //check for negative zero, return zero if negative zero
      return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString () {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString() {
      if (!this.isValid()) {
          return null;
      }
      var m = this.clone().utc();
      if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
      if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          return this.toDate().toISOString();
      }
      return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
  }

  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */
  function inspect () {
      if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
      }
      var func = 'moment';
      var zone = '';
      if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
      }
      var prefix = '[' + func + '("]';
      var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
      var datetime = '-MM-DD[T]HH:mm:ss.SSS';
      var suffix = zone + '[")]';

      return this.format(prefix + year + datetime + suffix);
  }

  function format$1 (inputString) {
      if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
  }

  function from (time, withoutSuffix) {
      if (this.isValid() &&
              ((isMoment(time) && time.isValid()) ||
               createLocal(time).isValid())) {
          return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
      } else {
          return this.localeData().invalidDate();
      }
  }

  function fromNow (withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
  }

  function to (time, withoutSuffix) {
      if (this.isValid() &&
              ((isMoment(time) && time.isValid()) ||
               createLocal(time).isValid())) {
          return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
      } else {
          return this.localeData().invalidDate();
      }
  }

  function toNow (withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale$1 (key) {
      var newLocaleData;

      if (key === undefined) {
          return this._locale._abbr;
      } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
              this._locale = newLocaleData;
          }
          return this;
      }
  }

  var lang = deprecate(
      'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
      function (key) {
          if (key === undefined) {
              return this.localeData();
          } else {
              return this.locale(key);
          }
      }
  );

  function localeData () {
      return this._locale;
  }

  function startOf (units) {
      units = normalizeUnits(units);
      // the following switch intentionally omits break keywords
      // to utilize falling through the cases.
      switch (units) {
          case 'year':
              this.month(0);
              /* falls through */
          case 'quarter':
          case 'month':
              this.date(1);
              /* falls through */
          case 'week':
          case 'isoWeek':
          case 'day':
          case 'date':
              this.hours(0);
              /* falls through */
          case 'hour':
              this.minutes(0);
              /* falls through */
          case 'minute':
              this.seconds(0);
              /* falls through */
          case 'second':
              this.milliseconds(0);
      }

      // weeks are a special case
      if (units === 'week') {
          this.weekday(0);
      }
      if (units === 'isoWeek') {
          this.isoWeekday(1);
      }

      // quarters are also special
      if (units === 'quarter') {
          this.month(Math.floor(this.month() / 3) * 3);
      }

      return this;
  }

  function endOf (units) {
      units = normalizeUnits(units);
      if (units === undefined || units === 'millisecond') {
          return this;
      }

      // 'date' is an alias for 'day', so it should be considered as such.
      if (units === 'date') {
          units = 'day';
      }

      return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }

  function valueOf () {
      return this._d.valueOf() - ((this._offset || 0) * 60000);
  }

  function unix () {
      return Math.floor(this.valueOf() / 1000);
  }

  function toDate$1 () {
      return new Date(this.valueOf());
  }

  function toArray () {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject () {
      var m = this;
      return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
      };
  }

  function toJSON () {
      // new Date(NaN).toJSON() === null
      return this.isValid() ? this.toISOString() : null;
  }

  function isValid$3 () {
      return isValid$1(this);
  }

  function parsingFlags () {
      return extend({}, getParsingFlags(this));
  }

  function invalidAt () {
      return getParsingFlags(this).overflow;
  }

  function creationData() {
      return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
      };
  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
      return this.weekYear() % 100;
  });

  addFormatToken(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken (token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg',     'weekYear');
  addWeekYearFormatToken('ggggg',    'weekYear');
  addWeekYearFormatToken('GGGG',  'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);


  // PARSING

  addRegexToken('G',      matchSigned);
  addRegexToken('g',      matchSigned);
  addRegexToken('GG',     match1to2, match2);
  addRegexToken('gg',     match1to2, match2);
  addRegexToken('GGGG',   match1to4, match4);
  addRegexToken('gggg',   match1to4, match4);
  addRegexToken('GGGGG',  match1to6, match6);
  addRegexToken('ggggg',  match1to6, match6);

  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
  });

  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear (input) {
      return getSetWeekYearHelper.call(this,
              input,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy);
  }

  function getSetISOWeekYear (input) {
      return getSetWeekYearHelper.call(this,
              input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear () {
      return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear () {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
          return weekOfYear(this, dow, doy).year;
      } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
              week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter (input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIOROITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D',  match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict ?
        (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
        locale._dayOfMonthOrdinalParseLenient;
  });

  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD',  match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
      config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear (input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m',  match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s',  match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
  });

  addFormatToken(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10);
  });

  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1000000;
  });


  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S',    match1to3, match1);
  addRegexToken('SS',   match1to3, match2);
  addRegexToken('SSS',  match1to3, match3);

  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
  }
  // MOMENTS

  var getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z',  0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr () {
      return this._isUTC ? 'UTC' : '';
  }

  function getZoneName () {
      return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;

  proto.add               = add;
  proto.calendar          = calendar$1;
  proto.clone             = clone;
  proto.diff              = diff;
  proto.endOf             = endOf;
  proto.format            = format$1;
  proto.from              = from;
  proto.fromNow           = fromNow;
  proto.to                = to;
  proto.toNow             = toNow;
  proto.get               = stringGet;
  proto.invalidAt         = invalidAt;
  proto.isAfter           = isAfter;
  proto.isBefore          = isBefore;
  proto.isBetween         = isBetween;
  proto.isSame            = isSame;
  proto.isSameOrAfter     = isSameOrAfter;
  proto.isSameOrBefore    = isSameOrBefore;
  proto.isValid           = isValid$3;
  proto.lang              = lang;
  proto.locale            = locale$1;
  proto.localeData        = localeData;
  proto.max               = prototypeMax;
  proto.min               = prototypeMin;
  proto.parsingFlags      = parsingFlags;
  proto.set               = stringSet;
  proto.startOf           = startOf;
  proto.subtract          = subtract;
  proto.toArray           = toArray;
  proto.toObject          = toObject;
  proto.toDate            = toDate$1;
  proto.toISOString       = toISOString;
  proto.inspect           = inspect;
  proto.toJSON            = toJSON;
  proto.toString          = toString;
  proto.unix              = unix;
  proto.valueOf           = valueOf;
  proto.creationData      = creationData;
  proto.year       = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear    = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month       = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week           = proto.weeks        = getSetWeek;
  proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
  proto.weeksInYear    = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.date       = getSetDayOfMonth;
  proto.day        = proto.days             = getSetDayOfWeek;
  proto.weekday    = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear  = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset            = getSetOffset;
  proto.utc                  = setOffsetToUTC;
  proto.local                = setOffsetToLocal;
  proto.parseZone            = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST                = isDaylightSavingTime;
  proto.isLocal              = isLocal;
  proto.isUtcOffset          = isUtcOffset;
  proto.isUtc                = isUtc;
  proto.isUTC                = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix (input) {
      return createLocal(input * 1000);
  }

  function createInZone () {
      return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat (string) {
      return string;
  }

  var proto$1 = Locale.prototype;

  proto$1.calendar        = calendar;
  proto$1.longDateFormat  = longDateFormat;
  proto$1.invalidDate     = invalidDate;
  proto$1.ordinal         = ordinal;
  proto$1.preparse        = preParsePostFormat;
  proto$1.postformat      = preParsePostFormat;
  proto$1.relativeTime    = relativeTime;
  proto$1.pastFuture      = pastFuture;
  proto$1.set             = set;

  proto$1.months            =        localeMonths;
  proto$1.monthsShort       =        localeMonthsShort;
  proto$1.monthsParse       =        localeMonthsParse;
  proto$1.monthsRegex       = monthsRegex;
  proto$1.monthsShortRegex  = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;

  proto$1.weekdays       =        localeWeekdays;
  proto$1.weekdaysMin    =        localeWeekdaysMin;
  proto$1.weekdaysShort  =        localeWeekdaysShort;
  proto$1.weekdaysParse  =        localeWeekdaysParse;

  proto$1.weekdaysRegex       =        weekdaysRegex;
  proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
  proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1 (format, index, field, setter) {
      var locale = getLocale();
      var utc = createUTC().set(setter, index);
      return locale[field](utc, format);
  }

  function listMonthsImpl (format, index, field) {
      if (isNumber(format)) {
          index = format;
          format = undefined;
      }

      format = format || '';

      if (index != null) {
          return get$1(format, index, field, 'month');
      }

      var i;
      var out = [];
      for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
      }
      return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl (localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';
      } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';
      }

      var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0;

      if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
      }

      var i;
      var out = [];
      for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }
      return out;
  }

  function listMonths (format, index) {
      return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort (format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays (localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort (localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin (localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (toInt(number % 100 / 10) === 1) ? 'th' :
              (b === 1) ? 'st' :
              (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
          return number + output;
      }
  });

  // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

  var mathAbs = Math.abs;

  function abs () {
      var data           = this._data;

      this._milliseconds = mathAbs(this._milliseconds);
      this._days         = mathAbs(this._days);
      this._months       = mathAbs(this._months);

      data.milliseconds  = mathAbs(data.milliseconds);
      data.seconds       = mathAbs(data.seconds);
      data.minutes       = mathAbs(data.minutes);
      data.hours         = mathAbs(data.hours);
      data.months        = mathAbs(data.months);
      data.years         = mathAbs(data.years);

      return this;
  }

  function addSubtract$1 (duration, input, value, direction) {
      var other = createDuration(input, value);

      duration._milliseconds += direction * other._milliseconds;
      duration._days         += direction * other._days;
      duration._months       += direction * other._months;

      return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1 (input, value) {
      return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1 (input, value) {
      return addSubtract$1(this, input, value, -1);
  }

  function absCeil (number) {
      if (number < 0) {
          return Math.floor(number);
      } else {
          return Math.ceil(number);
      }
  }

  function bubble () {
      var milliseconds = this._milliseconds;
      var days         = this._days;
      var months       = this._months;
      var data         = this._data;
      var seconds, minutes, hours, years, monthsFromDays;

      // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166
      if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
              (milliseconds <= 0 && days <= 0 && months <= 0))) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
      }

      // The following code bubbles up values, see the tests for
      // examples of what that means.
      data.milliseconds = milliseconds % 1000;

      seconds           = absFloor(milliseconds / 1000);
      data.seconds      = seconds % 60;

      minutes           = absFloor(seconds / 60);
      data.minutes      = minutes % 60;

      hours             = absFloor(minutes / 60);
      data.hours        = hours % 24;

      days += absFloor(hours / 24);

      // convert days to months
      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays));

      // 12 months -> 1 year
      years = absFloor(months / 12);
      months %= 12;

      data.days   = days;
      data.months = months;
      data.years  = years;

      return this;
  }

  function daysToMonths (days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
  }

  function monthsToDays (months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
  }

  function as (units) {
      if (!this.isValid()) {
          return NaN;
      }
      var days;
      var months;
      var milliseconds = this._milliseconds;

      units = normalizeUnits(units);

      if (units === 'month' || units === 'year') {
          days   = this._days   + milliseconds / 864e5;
          months = this._months + daysToMonths(days);
          return units === 'month' ? months : months / 12;
      } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
              case 'week'   : return days / 7     + milliseconds / 6048e5;
              case 'day'    : return days         + milliseconds / 864e5;
              case 'hour'   : return days * 24    + milliseconds / 36e5;
              case 'minute' : return days * 1440  + milliseconds / 6e4;
              case 'second' : return days * 86400 + milliseconds / 1000;
              // Math.floor prevents floating point math errors here
              case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
              default: throw new Error('Unknown unit ' + units);
          }
      }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1 () {
      if (!this.isValid()) {
          return NaN;
      }
      return (
          this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          toInt(this._months / 12) * 31536e6
      );
  }

  function makeAs (alias) {
      return function () {
          return this.as(alias);
      };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds      = makeAs('s');
  var asMinutes      = makeAs('m');
  var asHours        = makeAs('h');
  var asDays         = makeAs('d');
  var asWeeks        = makeAs('w');
  var asMonths       = makeAs('M');
  var asYears        = makeAs('y');

  function get$2 (units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
      return function () {
          return this.isValid() ? this._data[name] : NaN;
      };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds      = makeGetter('seconds');
  var minutes      = makeGetter('minutes');
  var hours        = makeGetter('hours');
  var days         = makeGetter('days');
  var months       = makeGetter('months');
  var years        = makeGetter('years');

  function weeks () {
      return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
      ss: 44,         // a few seconds to seconds
      s : 45,         // seconds to minute
      m : 45,         // minutes to hour
      h : 22,         // hours to day
      d : 26,         // days to month
      M : 11          // months to year
  };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
      var duration = createDuration(posNegDuration).abs();
      var seconds  = round(duration.as('s'));
      var minutes  = round(duration.as('m'));
      var hours    = round(duration.as('h'));
      var days     = round(duration.as('d'));
      var months   = round(duration.as('M'));
      var years    = round(duration.as('y'));

      var a = seconds <= thresholds.ss && ['s', seconds]  ||
              seconds < thresholds.s   && ['ss', seconds] ||
              minutes <= 1             && ['m']           ||
              minutes < thresholds.m   && ['mm', minutes] ||
              hours   <= 1             && ['h']           ||
              hours   < thresholds.h   && ['hh', hours]   ||
              days    <= 1             && ['d']           ||
              days    < thresholds.d   && ['dd', days]    ||
              months  <= 1             && ['M']           ||
              months  < thresholds.M   && ['MM', months]  ||
              years   <= 1             && ['y']           || ['yy', years];

      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding (roundingFunction) {
      if (roundingFunction === undefined) {
          return round;
      }
      if (typeof(roundingFunction) === 'function') {
          round = roundingFunction;
          return true;
      }
      return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold (threshold, limit) {
      if (thresholds[threshold] === undefined) {
          return false;
      }
      if (limit === undefined) {
          return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === 's') {
          thresholds.ss = limit - 1;
      }
      return true;
  }

  function humanize (withSuffix) {
      if (!this.isValid()) {
          return this.localeData().invalidDate();
      }

      var locale = this.localeData();
      var output = relativeTime$1(this, !withSuffix, locale);

      if (withSuffix) {
          output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
          return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000;
      var days         = abs$1(this._days);
      var months       = abs$1(this._months);
      var minutes, hours, years;

      // 3600 seconds -> 60 minutes -> 1 hour
      minutes           = absFloor(seconds / 60);
      hours             = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60;

      // 12 months -> 1 year
      years  = absFloor(months / 12);
      months %= 12;


      // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds;
      var total = this.asSeconds();

      if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
      }

      return (total < 0 ? '-' : '') +
          'P' +
          (Y ? Y + 'Y' : '') +
          (M ? M + 'M' : '') +
          (D ? D + 'D' : '') +
          ((h || m || s) ? 'T' : '') +
          (h ? h + 'H' : '') +
          (m ? m + 'M' : '') +
          (s ? s + 'S' : '');
  }

  var proto$2 = Duration.prototype;

  proto$2.isValid        = isValid$2;
  proto$2.abs            = abs;
  proto$2.add            = add$1;
  proto$2.subtract       = subtract$1;
  proto$2.as             = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds      = asSeconds;
  proto$2.asMinutes      = asMinutes;
  proto$2.asHours        = asHours;
  proto$2.asDays         = asDays;
  proto$2.asWeeks        = asWeeks;
  proto$2.asMonths       = asMonths;
  proto$2.asYears        = asYears;
  proto$2.valueOf        = valueOf$1;
  proto$2._bubble        = bubble;
  proto$2.get            = get$2;
  proto$2.milliseconds   = milliseconds;
  proto$2.seconds        = seconds;
  proto$2.minutes        = minutes;
  proto$2.hours          = hours;
  proto$2.days           = days;
  proto$2.weeks          = weeks;
  proto$2.months         = months;
  proto$2.years          = years;
  proto$2.humanize       = humanize;
  proto$2.toISOString    = toISOString$1;
  proto$2.toString       = toISOString$1;
  proto$2.toJSON         = toISOString$1;
  proto$2.locale         = locale$1;
  proto$2.localeData     = localeData;

  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang;

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
      config._d = new Date(toInt(input));
  });

  //! moment.js

  hooks.version = '2.18.1';

  setHookCallback(createLocal);

  hooks.fn                    = proto;
  hooks.min                   = min;
  hooks.max                   = max;
  hooks.now                   = now;
  hooks.utc                   = createUTC;
  hooks.unix                  = createUnix;
  hooks.months                = listMonths;
  hooks.isDate                = isDate;
  hooks.locale                = getSetGlobalLocale;
  hooks.invalid               = createInvalid;
  hooks.duration              = createDuration;
  hooks.isMoment              = isMoment;
  hooks.weekdays              = listWeekdays;
  hooks.parseZone             = createInZone;
  hooks.localeData            = getLocale;
  hooks.isDuration            = isDuration;
  hooks.monthsShort           = listMonthsShort;
  hooks.weekdaysMin           = listWeekdaysMin;
  hooks.defineLocale          = defineLocale;
  hooks.updateLocale          = updateLocale;
  hooks.locales               = listLocales;
  hooks.weekdaysShort         = listWeekdaysShort;
  hooks.normalizeUnits        = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat        = getCalendarFormat;
  hooks.prototype             = proto;

  var date = Object.assign({}, defaultType);
  date.isRight = true;

  date.compare = function (x, y, column) {
    function cook(d) {
      if (column && column.dateInputFormat) {
        return parse("".concat(d), "".concat(column.dateInputFormat), new Date());
      }

      return d;
    }

    x = cook(x);
    y = cook(y);

    if (!isValid(x)) {
      return -1;
    }

    if (!isValid(y)) {
      return 1;
    }

    return compareAsc(x, y);
  };

  date.format = function (v, column) {
    if (v === undefined || v === null) return "";

    if (column.convertUtcToLocal) {
      var _date = parse(hooks.utc(v).local().format(column.dateInputFormat.replace("dd", "DD").replace("yyyy", "YYYY")), column.dateInputFormat, new Date());

      if (isValid(_date)) {
        return format(_date, column.dateOutputFormat);
      }
    } else {
      var _date2 = parse(v, column.dateInputFormat, new Date());

      if (isValid(_date2)) {
        return format(_date2, column.dateOutputFormat);
      } else {
        console.error("Not a valid date: \"".concat(v, "\""));
        return "Invalid date format";
      }
    }

    return null;
  };

  var date$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': date
  });

  var number = Object.assign({}, defaultType);
  number.isRight = true;

  number.filterPredicate = function (rowval, filter) {
    return number.compare(rowval, filter) === 0;
  };

  number.compare = function (x, y) {
    function cook(d) {
      // if d is null or undefined we give it the smallest
      // possible value
      if (d === undefined || d === null) return -Infinity;
      return d.indexOf('.') >= 0 ? parseFloat(d) : parseInt(d, 10);
    }

    x = typeof x === 'number' ? x : cook(x);
    y = typeof y === 'number' ? y : cook(y);
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  };

  var number$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': number
  });

  var decimal = Object.assign({}, number);

  decimal.format = function (v) {
    if (v === undefined || v === null) return '';
    return parseFloat(Math.round(v * 100) / 100).toFixed(2);
  };

  var decimal$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': decimal
  });

  var percentage = Object.assign({}, number);

  percentage.format = function (v) {
    if (v === undefined || v === null) return '';
    return "".concat(parseFloat(v * 100).toFixed(2), "%");
  };

  var percentage$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': percentage
  });

  var _boolean = Object.assign({}, defaultType);

  _boolean.isRight = true;

  _boolean.filterPredicate = function (rowval, filter) {
    return _boolean.compare(rowval, filter) === 0;
  };

  _boolean.compare = function (x, y) {
    function cook(d) {
      if (typeof d === 'boolean') return d ? 1 : 0;
      if (typeof d === 'string') return d === 'true' ? 1 : 0;
      return -Infinity;
    }

    x = cook(x);
    y = cook(y);
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  };

  var _boolean$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _boolean
  });

  var index = {
    date: date$1,
    decimal: decimal$1,
    number: number$1,
    percentage: percentage$1,
    "boolean": _boolean$1
  };

  var dataTypes = {};
  var coreDataTypes = index;
  Object.keys(coreDataTypes).forEach(function (key) {
    var compName = key.replace(/^\.\//, '').replace(/\.js/, '');
    dataTypes[compName] = coreDataTypes[key]["default"];
  });
  var script$6 = {
    name: 'vue-good-table',
    props: {
      isLoading: {
        "default": null,
        type: Boolean
      },
      maxHeight: {
        "default": null,
        type: String
      },
      fixedHeader: Boolean,
      theme: {
        "default": ''
      },
      mode: {
        "default": 'local'
      },
      // could be remote
      totalRows: {},
      // required if mode = 'remote'
      styleClass: {
        "default": 'vgt-table bordered'
      },
      columns: {},
      rows: {},
      lineNumbers: Boolean,
      responsive: {
        "default": true,
        type: Boolean
      },
      rtl: Boolean,
      rowStyleClass: {
        "default": null,
        type: [Function, String]
      },
      compactMode: Boolean,
      groupOptions: {
        "default": function _default() {
          return {
            enabled: false,
            collapsable: false,
            rowKey: null
          };
        }
      },
      selectOptions: {
        "default": function _default() {
          return {
            enabled: false,
            selectionInfoClass: '',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: false,
            selectAllByGroup: false
          };
        }
      },
      // sort
      sortOptions: {
        "default": function _default() {
          return {
            enabled: true,
            multipleColumns: true,
            initialSortBy: {}
          };
        }
      },
      // pagination
      paginationOptions: {
        "default": function _default() {
          var _ref;

          return _ref = {
            enabled: false,
            position: 'bottom',
            perPage: 10,
            perPageDropdown: null,
            perPageDropdownEnabled: true
          }, _defineProperty(_ref, "position", 'bottom'), _defineProperty(_ref, "dropdownAllowAll", true), _defineProperty(_ref, "mode", 'records'), _defineProperty(_ref, "infoFn", null), _defineProperty(_ref, "jumpFirstOrLast", false), _ref;
        }
      },
      searchOptions: {
        "default": function _default() {
          return {
            enabled: false,
            trigger: null,
            externalQuery: null,
            searchFn: null,
            placeholder: 'Search Table'
          };
        }
      }
    },
    data: function data() {
      return {
        // loading state for remote mode
        tableLoading: false,
        // text options
        firstText: "First",
        lastText: "Last",
        nextText: 'Next',
        prevText: 'Previous',
        rowsPerPageText: 'Rows per page',
        ofText: 'of',
        allText: 'All',
        pageText: 'page',
        // internal select options
        selectable: false,
        selectOnCheckboxOnly: false,
        selectAllByPage: true,
        disableSelectInfo: false,
        selectionInfoClass: '',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        // keys for rows that are currently expanded
        maintainExpanded: true,
        expandedRowKeys: new Set(),
        // internal sort options
        sortable: true,
        defaultSortBy: null,
        multipleColumnSort: true,
        // internal search options
        searchEnabled: false,
        searchTrigger: null,
        externalSearchQuery: null,
        searchFn: null,
        searchPlaceholder: 'Search Table',
        searchSkipDiacritics: false,
        // internal pagination options
        perPage: null,
        paginate: false,
        paginateOnTop: false,
        paginateOnBottom: true,
        customRowsPerPageDropdown: [],
        paginateDropdownAllowAll: true,
        paginationMode: 'records',
        paginationInfoFn: null,
        currentPage: 1,
        currentPerPage: 10,
        sorts: [],
        globalSearchTerm: '',
        filteredRows: [],
        columnFilters: {},
        forceSearch: false,
        sortChanged: false,
        dataTypes: dataTypes || {}
      };
    },
    watch: {
      rows: {
        handler: function handler() {
          this.$emit('update:isLoading', false);
          this.filterRows(this.columnFilters, false);
        },
        deep: true,
        immediate: true
      },
      selectOptions: {
        handler: function handler() {
          this.initializeSelect();
        },
        deep: true,
        immediate: true
      },
      paginationOptions: {
        handler: function handler(newValue, oldValue) {
          if (!lodash_isequal(newValue, oldValue)) {
            this.initializePagination();
          }
        },
        deep: true,
        immediate: true
      },
      searchOptions: {
        handler: function handler() {
          if (this.searchOptions.externalQuery !== undefined && this.searchOptions.externalQuery !== this.searchTerm) {
            //* we need to set searchTerm to externalQuery first.
            this.externalSearchQuery = this.searchOptions.externalQuery;
            this.handleSearch();
          }

          this.initializeSearch();
        },
        deep: true,
        immediate: true
      },
      sortOptions: {
        handler: function handler(newValue, oldValue) {
          if (!lodash_isequal(newValue, oldValue)) {
            this.initializeSort();
          }
        },
        deep: true
      },
      selectedRows: function selectedRows(newValue, oldValue) {
        if (!lodash_isequal(newValue, oldValue)) {
          this.$emit('on-selected-rows-change', {
            selectedRows: this.selectedRows
          });
        }
      }
    },
    computed: {
      tableStyles: function tableStyles() {
        if (this.compactMode) return this.tableStyleClasses + 'vgt-compact';else return this.tableStyleClasses;
      },
      hasFooterSlot: function hasFooterSlot() {
        return !!this.$slots['table-actions-bottom'];
      },
      wrapperStyles: function wrapperStyles() {
        return {
          overflow: 'scroll-y',
          maxHeight: this.maxHeight ? this.maxHeight : 'auto'
        };
      },
      rowKeyField: function rowKeyField() {
        return this.groupOptions.rowKey || 'vgt_header_id';
      },
      hasHeaderRowTemplate: function hasHeaderRowTemplate() {
        return !!this.$slots['table-header-row'] || !!this.$scopedSlots['table-header-row'];
      },
      showEmptySlot: function showEmptySlot() {
        if (!this.paginated.length) return true;

        if (this.paginated[0].label === 'no groups' && !this.paginated[0].children.length) {
          return true;
        }

        return false;
      },
      allSelected: function allSelected() {
        return this.selectedRowCount > 0 && (this.selectAllByPage && this.selectedPageRowsCount === this.totalPageRowCount || !this.selectAllByPage && this.selectedRowCount === this.totalRowCount);
      },
      allSelectedIndeterminate: function allSelectedIndeterminate() {
        return !this.allSelected && (this.selectAllByPage && this.selectedPageRowsCount > 0 || !this.selectAllByPage && this.selectedRowCount > 0);
      },
      selectionInfo: function selectionInfo() {
        return "".concat(this.selectedRowCount, " ").concat(this.selectionText);
      },
      selectedRowCount: function selectedRowCount() {
        return this.selectedRows.length;
      },
      selectedPageRowsCount: function selectedPageRowsCount() {
        return this.selectedPageRows.length;
      },
      selectedPageRows: function selectedPageRows() {
        var selectedRows = [];
        this.paginated.forEach(function (headerRow) {
          headerRow.children.forEach(function (row) {
            if (row.vgtSelected) {
              selectedRows.push(row);
            }
          });
        });
        return selectedRows;
      },
      selectedRows: function selectedRows() {
        var selectedRows = [];
        this.processedRows.forEach(function (headerRow) {
          headerRow.children.forEach(function (row) {
            if (row.vgtSelected) {
              selectedRows.push(row);
            }
          });
        });
        return selectedRows.sort(function (r1, r2) {
          return r1.originalIndex - r2.originalIndex;
        });
      },
      fullColspan: function fullColspan() {
        var fullColspan = 0;

        for (var i = 0; i < this.columns.length; i += 1) {
          if (!this.columns[i].hidden) {
            fullColspan += 1;
          }
        }

        if (this.lineNumbers) fullColspan++;
        if (this.selectable) fullColspan++;
        return fullColspan;
      },
      groupHeaderOnTop: function groupHeaderOnTop() {
        if (this.groupOptions && this.groupOptions.enabled && this.groupOptions.headerPosition && this.groupOptions.headerPosition === 'bottom') {
          return false;
        }

        if (this.groupOptions && this.groupOptions.enabled) return true; // will only get here if groupOptions is false

        return false;
      },
      groupHeaderOnBottom: function groupHeaderOnBottom() {
        if (this.groupOptions && this.groupOptions.enabled && this.groupOptions.headerPosition && this.groupOptions.headerPosition === 'bottom') {
          return true;
        }

        return false;
      },
      totalRowCount: function totalRowCount() {
        var total = this.processedRows.reduce(function (total, headerRow) {
          var childrenCount = headerRow.children ? headerRow.children.length : 0;
          return total + childrenCount;
        }, 0);
        return total;
      },
      totalPageRowCount: function totalPageRowCount() {
        var total = this.paginated.reduce(function (total, headerRow) {
          var childrenCount = headerRow.children ? headerRow.children.length : 0;
          return total + childrenCount;
        }, 0);
        return total;
      },
      wrapStyleClasses: function wrapStyleClasses() {
        var classes = 'vgt-wrap';
        if (this.rtl) classes += ' rtl';
        classes += " ".concat(this.theme);
        return classes;
      },
      tableStyleClasses: function tableStyleClasses() {
        var classes = this.styleClass;
        classes += " ".concat(this.theme);
        return classes;
      },
      searchTerm: function searchTerm() {
        return this.externalSearchQuery != null ? this.externalSearchQuery : this.globalSearchTerm;
      },
      //
      globalSearchAllowed: function globalSearchAllowed() {
        if (this.searchEnabled && !!this.globalSearchTerm && this.searchTrigger !== 'enter') {
          return true;
        }

        if (this.externalSearchQuery != null && this.searchTrigger !== 'enter') {
          return true;
        }

        if (this.forceSearch) {
          this.forceSearch = false;
          return true;
        }

        return false;
      },
      // this is done everytime sortColumn
      // or sort type changes
      //----------------------------------------
      processedRows: function processedRows() {
        var _this = this;

        // we only process rows when mode is local
        var computedRows = this.filteredRows;

        if (this.mode === 'remote') {
          return computedRows;
        } // take care of the global filter here also


        if (this.globalSearchAllowed) {
          // here also we need to de-construct and then
          // re-construct the rows.
          var allRows = [];
          this.filteredRows.forEach(function (headerRow) {
            allRows.push.apply(allRows, _toConsumableArray(headerRow.children));
          });
          var filteredRows = [];
          allRows.forEach(function (row) {
            for (var i = 0; i < _this.columns.length; i += 1) {
              var col = _this.columns[i]; // if col does not have search disabled,

              if (!col.globalSearchDisabled) {
                // if a search function is provided,
                // use that for searching, otherwise,
                // use the default search behavior
                if (_this.searchFn) {
                  var foundMatch = _this.searchFn(row, col, _this.collectFormatted(row, col), _this.searchTerm);

                  if (foundMatch) {
                    filteredRows.push(row);
                    break; // break the loop
                  }
                } else {
                  // comparison
                  var matched = defaultType.filterPredicate(_this.collectFormatted(row, col), _this.searchTerm, _this.searchSkipDiacritics);

                  if (matched) {
                    filteredRows.push(row);
                    break; // break loop
                  }
                }
              }
            }
          }); // this is where we emit on search

          this.$emit('on-search', {
            searchTerm: this.searchTerm,
            rowCount: filteredRows.length
          }); // here we need to reconstruct the nested structure
          // of rows

          computedRows = [];
          this.filteredRows.forEach(function (headerRow) {
            var i = headerRow.vgt_header_id;
            var children = filteredRows.filter(function (r) {
              return r.vgt_id === i;
            });

            if (children.length) {
              var newHeaderRow = JSON.parse(JSON.stringify(headerRow));
              newHeaderRow.children = children;
              computedRows.push(newHeaderRow);
            }
          });
        }

        if (this.sorts.length) {
          //* we need to sort
          computedRows.forEach(function (cRows) {
            cRows.children.sort(function (xRow, yRow) {
              //* we need to get column for each sort
              var sortValue;

              for (var i = 0; i < _this.sorts.length; i += 1) {
                var srt = _this.sorts[i];

                if (srt.type === SORT_TYPES.None) {
                  //* if no sort, we need to use the original index to sort.
                  sortValue = sortValue || xRow.originalIndex - yRow.originalIndex;
                } else {
                  var column = _this.getColumnForField(srt.field);

                  var xvalue = _this.collect(xRow, srt.field);

                  var yvalue = _this.collect(yRow, srt.field); //* if a custom sort function has been provided we use that


                  var sortFn = column.sortFn;

                  if (sortFn && typeof sortFn === 'function') {
                    sortValue = sortValue || sortFn(xvalue, yvalue, column, xRow, yRow) * (srt.type === SORT_TYPES.Descending ? -1 : 1);
                  } else {
                    //* else we use our own sort
                    sortValue = sortValue || column.typeDef.compare(xvalue, yvalue, column) * (srt.type === SORT_TYPES.Descending ? -1 : 1);
                  }
                }
              }

              return sortValue;
            });
          });
        } // if the filtering is event based, we need to maintain filter
        // rows


        if (this.searchTrigger === 'enter') {
          this.filteredRows = computedRows;
        }

        return computedRows;
      },
      paginated: function paginated() {
        var _this2 = this;

        if (!this.processedRows.length) return [];

        if (this.mode === 'remote') {
          return this.processedRows;
        } //* flatten the rows for paging.


        var paginatedRows = [];
        this.processedRows.forEach(function (childRows) {
          var _paginatedRows;

          //* only add headers when group options are enabled.
          if (_this2.groupOptions.enabled) {
            paginatedRows.push(childRows);
          }

          (_paginatedRows = paginatedRows).push.apply(_paginatedRows, _toConsumableArray(childRows.children));
        });

        if (this.paginate) {
          var pageStart = (this.currentPage - 1) * this.currentPerPage; // in case of filtering we might be on a page that is
          // not relevant anymore
          // also, if setting to all, current page will not be valid

          if (pageStart >= paginatedRows.length || this.currentPerPage === -1) {
            this.currentPage = 1;
            pageStart = 0;
          } // calculate page end now


          var pageEnd = paginatedRows.length + 1; // if the setting is not set to 'all'

          if (this.currentPerPage !== -1) {
            pageEnd = this.currentPage * this.currentPerPage;
          }

          paginatedRows = paginatedRows.slice(pageStart, pageEnd);
        } // reconstruct paginated rows here


        var reconstructedRows = [];
        paginatedRows.forEach(function (flatRow) {
          //* header row?
          if (flatRow.vgt_header_id !== undefined) {
            _this2.handleExpanded(flatRow);

            var newHeaderRow = JSON.parse(JSON.stringify(flatRow));
            newHeaderRow.children = [];
            reconstructedRows.push(newHeaderRow);
          } else {
            //* child row
            var hRow = reconstructedRows.find(function (r) {
              return r.vgt_header_id === flatRow.vgt_id;
            });

            if (!hRow) {
              hRow = _this2.processedRows.find(function (r) {
                return r.vgt_header_id === flatRow.vgt_id;
              });

              if (hRow) {
                hRow = JSON.parse(JSON.stringify(hRow));
                hRow.children = [];
                reconstructedRows.push(hRow);
              }
            }

            hRow.children.push(flatRow);
          }
        });
        return reconstructedRows;
      },
      originalRows: function originalRows() {
        var rows = this.rows && this.rows.length ? JSON.parse(JSON.stringify(this.rows)) : [];
        var nestedRows = [];

        if (!this.groupOptions.enabled) {
          nestedRows = this.handleGrouped([{
            label: 'no groups',
            children: rows
          }]);
        } else {
          nestedRows = this.handleGrouped(rows);
        } // we need to preserve the original index of
        // rows so lets do that


        var index = 0;
        nestedRows.forEach(function (headerRow) {
          headerRow.children.forEach(function (row) {
            row.originalIndex = index++;
          });
        });
        return nestedRows;
      },
      typedColumns: function typedColumns() {
        var columns = this.columns;

        for (var i = 0; i < this.columns.length; i++) {
          var column = columns[i];
          column.typeDef = this.dataTypes[column.type] || defaultType;
        }

        return columns;
      },
      hasRowClickListener: function hasRowClickListener() {
        return this.$listeners && this.$listeners['on-row-click'];
      }
    },
    methods: {
      //* we need to check for expanded row state here
      //* to maintain it when sorting/filtering
      handleExpanded: function handleExpanded(headerRow) {
        if (this.maintainExpanded && this.expandedRowKeys.has(headerRow[this.rowKeyField])) {
          this.$set(headerRow, 'vgtIsExpanded', true);
        } else {
          this.$set(headerRow, 'vgtIsExpanded', false);
        }
      },
      toggleExpand: function toggleExpand(id) {
        var _this3 = this;

        var headerRow = this.filteredRows.find(function (r) {
          return r[_this3.rowKeyField] === id;
        });

        if (headerRow) {
          this.$set(headerRow, 'vgtIsExpanded', !headerRow.vgtIsExpanded);
        }

        if (this.maintainExpanded && headerRow.vgtIsExpanded) {
          this.expandedRowKeys.add(headerRow[this.rowKeyField]);
        } else {
          this.expandedRowKeys["delete"](headerRow[this.rowKeyField]);
        }
      },
      expandAll: function expandAll() {
        var _this4 = this;

        this.filteredRows.forEach(function (row) {
          _this4.$set(row, 'vgtIsExpanded', true);

          if (_this4.maintainExpanded) {
            _this4.expandedRowKeys.add(row[_this4.rowKeyField]);
          }
        });
      },
      collapseAll: function collapseAll() {
        var _this5 = this;

        this.filteredRows.forEach(function (row) {
          _this5.$set(row, 'vgtIsExpanded', false);

          _this5.expandedRowKeys.clear();
        });
      },
      getColumnForField: function getColumnForField(field) {
        for (var i = 0; i < this.typedColumns.length; i += 1) {
          if (this.typedColumns[i].field === field) return this.typedColumns[i];
        }
      },
      handleSearch: function handleSearch() {
        this.resetTable(); // for remote mode, we need to emit on-search

        if (this.mode === 'remote') {
          this.$emit('on-search', {
            searchTerm: this.searchTerm
          });
        }
      },
      reset: function reset() {
        this.initializeSort();
        this.changePage(1);
        this.$refs['table-header-primary'].reset(true);

        if (this.$refs['table-header-secondary']) {
          this.$refs['table-header-secondary'].reset(true);
        }
      },
      emitSelectedRows: function emitSelectedRows() {
        this.$emit('on-select-all', {
          selected: this.selectedRowCount === this.totalRowCount,
          selectedRows: this.selectedRows
        });
      },
      unselectAllInternal: function unselectAllInternal(forceAll) {
        var _this6 = this;

        var rows = this.selectAllByPage && !forceAll ? this.paginated : this.filteredRows;
        rows.forEach(function (headerRow, i) {
          headerRow.children.forEach(function (row, j) {
            _this6.$set(row, 'vgtSelected', false);
          });
        });
        this.emitSelectedRows();
      },
      toggleSelectAll: function toggleSelectAll() {
        var _this7 = this;

        if (this.allSelected) {
          this.unselectAllInternal();
          return;
        }

        var rows = this.selectAllByPage ? this.paginated : this.filteredRows;
        rows.forEach(function (headerRow) {
          headerRow.children.forEach(function (row) {
            _this7.$set(row, 'vgtSelected', true);
          });
        });
        this.emitSelectedRows();
      },
      toggleSelectGroup: function toggleSelectGroup(event, headerRow) {
        var _this8 = this;

        headerRow.children.forEach(function (row) {
          _this8.$set(row, 'vgtSelected', event.checked);
        });
      },
      changePage: function changePage(value) {
        var enabled = this.paginate;
        var _this$$refs = this.$refs,
            paginationBottom = _this$$refs.paginationBottom,
            paginationTop = _this$$refs.paginationTop;

        if (enabled) {
          if (this.paginateOnTop && paginationTop) {
            paginationTop.currentPage = value;
          }

          if (this.paginateOnBottom && paginationBottom) {
            paginationBottom.currentPage = value;
          } // we also need to set the currentPage
          // for table.


          this.currentPage = value;
        }
      },
      pageChangedEvent: function pageChangedEvent() {
        return {
          currentPage: this.currentPage,
          currentPerPage: this.currentPerPage,
          total: Math.floor(this.totalRowCount / this.currentPerPage)
        };
      },
      pageChanged: function pageChanged(pagination) {
        this.currentPage = pagination.currentPage;

        if (!pagination.noEmit) {
          var pageChangedEvent = this.pageChangedEvent();
          pageChangedEvent.prevPage = pagination.prevPage;
          this.$emit('on-page-change', pageChangedEvent);

          if (this.mode === 'remote') {
            this.$emit('update:isLoading', true);
          }
        }
      },
      perPageChanged: function perPageChanged(pagination) {
        this.currentPerPage = pagination.currentPerPage; // ensure that both sides of pagination are in agreement
        // this fixes changes during position = 'both'

        var paginationPosition = this.paginationOptions.position;

        if (this.$refs.paginationTop && (paginationPosition === 'top' || paginationPosition === 'both')) {
          this.$refs.paginationTop.currentPerPage = this.currentPerPage;
        }

        if (this.$refs.paginationBottom && (paginationPosition === 'bottom' || paginationPosition === 'both')) {
          this.$refs.paginationBottom.currentPerPage = this.currentPerPage;
        } //* update perPage also


        var perPageChangedEvent = this.pageChangedEvent();
        this.$emit('on-per-page-change', perPageChangedEvent);

        if (this.mode === 'remote') {
          this.$emit('update:isLoading', true);
        }
      },
      changeSort: function changeSort(sorts) {
        this.sorts = sorts;
        this.$emit('on-sort-change', sorts); // every time we change sort we need to reset to page 1

        this.changePage(1); // if the mode is remote, we don't need to do anything
        // after this. just set table loading to true

        if (this.mode === 'remote') {
          this.$emit('update:isLoading', true);
          return;
        }

        this.sortChanged = true;
      },
      // checkbox click should always do the following
      onCheckboxClicked: function onCheckboxClicked(row, index, event) {
        this.$set(row, 'vgtSelected', !row.vgtSelected);
        this.$emit('on-row-click', {
          row: row,
          pageIndex: index,
          selected: !!row.vgtSelected,
          event: event
        });
      },
      onRowDoubleClicked: function onRowDoubleClicked(row, index, event) {
        this.$emit('on-row-dblclick', {
          row: row,
          pageIndex: index,
          selected: !!row.vgtSelected,
          event: event
        });
      },
      onRowClicked: function onRowClicked(row, index, event) {
        if (this.selectable && !this.selectOnCheckboxOnly) {
          this.$set(row, 'vgtSelected', !row.vgtSelected);
        }

        this.$emit('on-row-click', {
          row: row,
          pageIndex: index,
          selected: !!row.vgtSelected,
          event: event
        });
      },
      onRowAuxClicked: function onRowAuxClicked(row, index, event) {
        this.$emit('on-row-aux-click', {
          row: row,
          pageIndex: index,
          selected: !!row.vgtSelected,
          event: event
        });
      },
      onCellClicked: function onCellClicked(row, column, rowIndex, event) {
        this.$emit('on-cell-click', {
          row: row,
          column: column,
          rowIndex: rowIndex,
          event: event
        });
      },
      onMouseenter: function onMouseenter(row, index) {
        this.$emit('on-row-mouseenter', {
          row: row,
          pageIndex: index
        });
      },
      onMouseleave: function onMouseleave(row, index) {
        this.$emit('on-row-mouseleave', {
          row: row,
          pageIndex: index
        });
      },
      searchTableOnEnter: function searchTableOnEnter() {
        if (this.searchTrigger === 'enter') {
          this.handleSearch(); // we reset the filteredRows here because
          // we want to search across everything.

          this.filteredRows = JSON.parse(JSON.stringify(this.originalRows));
          this.forceSearch = true;
          this.sortChanged = true;
        }
      },
      searchTableOnKeyUp: function searchTableOnKeyUp() {
        if (this.searchTrigger !== 'enter') {
          this.handleSearch();
        }
      },
      resetTable: function resetTable() {
        this.unselectAllInternal(true); // every time we searchTable

        this.changePage(1);
      },
      // field can be:
      // 1. function (passed as a string using function.name. For example: 'bound myFunction')
      // 2. regular property - ex: 'prop'
      // 3. nested property path - ex: 'nested.prop'
      collect: function collect(obj, field) {
        // utility function to get nested property
        function dig(obj, selector) {
          var result = obj;
          var splitter = selector.split('.');

          for (var i = 0; i < splitter.length; i++) {
            if (typeof result === 'undefined' || result === null) {
              return undefined;
            }

            result = result[splitter[i]];
          }

          return result;
        }

        if (typeof field === 'function') return field(obj);
        if (typeof field === 'string') return dig(obj, field);
        return undefined;
      },
      collectFormatted: function collectFormatted(obj, column) {
        var headerRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var value;

        if (headerRow && column.headerField) {
          value = this.collect(obj, column.headerField);
        } else {
          value = this.collect(obj, column.field);
        }

        if (value === undefined) return ''; // if user has supplied custom formatter,
        // use that here

        if (column.formatFn && typeof column.formatFn === 'function') {
          return column.formatFn(value, obj);
        } // lets format the resultant data


        var type = column.typeDef; // this will only happen if we try to collect formatted
        // before types have been initialized. for example: on
        // load when external query is specified.

        if (!type) {
          type = this.dataTypes[column.type] || defaultType;
        }

        var result = type.format(value, column); // we must have some values in compact mode

        if (this.compactMode && (result == '' || result == null)) return '-';
        return result;
      },
      formattedRow: function formattedRow(row) {
        var isHeaderRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var formattedRow = {};

        for (var i = 0; i < this.typedColumns.length; i++) {
          var col = this.typedColumns[i]; // what happens if field is

          if (col.field) {
            formattedRow[col.field] = this.collectFormatted(row, col, isHeaderRow);
          }
        }

        return formattedRow;
      },
      // Get classes for the given column index & element.
      getClasses: function getClasses(index, element, row) {
        var _this$typedColumns$in = this.typedColumns[index],
            typeDef = _this$typedColumns$in.typeDef,
            custom = _this$typedColumns$in["".concat(element, "Class")];

        var isRight = typeDef.isRight;
        if (this.rtl) isRight = true;
        var classes = {
          'vgt-right-align': isRight,
          'vgt-left-align': !isRight
        }; // for td we need to check if value is
        // a function.

        if (typeof custom === 'function') {
          classes[custom(row)] = true;
        } else if (typeof custom === 'string') {
          classes[custom] = true;
        }

        return classes;
      },
      // method to filter rows
      filterRows: function filterRows(columnFilters) {
        var _this9 = this;

        var fromFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // if (!this.rows.length) return;
        // this is invoked either as a result of changing filters
        // or as a result of modifying rows.
        this.columnFilters = columnFilters;
        var computedRows = JSON.parse(JSON.stringify(this.originalRows));
        var instancesOfFiltering = false; // do we have a filter to care about?
        // if not we don't need to do anything

        if (this.columnFilters && Object.keys(this.columnFilters).length) {
          var _ret = function () {
            // every time we filter rows, we need to set current page
            // to 1
            // if the mode is remote, we only need to reset, if this is
            // being called from filter, not when rows are changing
            if (_this9.mode !== 'remote' || fromFilter) {
              _this9.changePage(1);
            } // we need to emit an event and that's that.
            // but this only needs to be invoked if filter is changing
            // not when row object is modified.


            if (fromFilter) {
              _this9.$emit('on-column-filter', {
                columnFilters: _this9.columnFilters
              });
            } // if mode is remote, we don't do any filtering here.


            if (_this9.mode === 'remote') {
              if (fromFilter) {
                _this9.$emit('update:isLoading', true);
              } else {
                // if remote filtering has already been taken care of.
                _this9.filteredRows = computedRows;
              }

              return {
                v: void 0
              };
            }

            var fieldKey = function fieldKey(field) {
              if (typeof field === 'function' && field.name) {
                return field.name;
              }

              return field;
            };

            var _loop = function _loop(i) {
              var col = _this9.typedColumns[i];

              if (_this9.columnFilters[fieldKey(col.field)]) {
                instancesOfFiltering = true;
                computedRows.forEach(function (headerRow) {
                  var newChildren = headerRow.children.filter(function (row) {
                    // If column has a custom filter, use that.
                    if (col.filterOptions && typeof col.filterOptions.filterFn === 'function') {
                      return col.filterOptions.filterFn(_this9.collect(row, col.field), _this9.columnFilters[fieldKey(col.field)]);
                    } // Otherwise Use default filters


                    var typeDef = col.typeDef;
                    return typeDef.filterPredicate(_this9.collect(row, col.field), _this9.columnFilters[fieldKey(col.field)], false, col.filterOptions && _typeof(col.filterOptions.filterDropdownItems) === 'object');
                  }); // should we remove the header?

                  headerRow.children = newChildren;
                });
              }
            };

            for (var i = 0; i < _this9.typedColumns.length; i++) {
              _loop(i);
            }
          }();

          if (_typeof(_ret) === "object") return _ret.v;
        }

        if (instancesOfFiltering) {
          this.filteredRows = computedRows.filter(function (h) {
            return h.children && h.children.length;
          });
        } else {
          this.filteredRows = computedRows;
        }
      },
      getCurrentIndex: function getCurrentIndex(rowId) {
        var index = 0;
        var found = false;

        for (var i = 0; i < this.paginated.length; i += 1) {
          var headerRow = this.paginated[i];
          var children = headerRow.children;

          if (children && children.length) {
            for (var j = 0; j < children.length; j += 1) {
              var c = children[j];

              if (c.originalIndex === rowId) {
                found = true;
                break;
              }

              index += 1;
            }
          }

          if (found) break;
        }

        return (this.currentPage - 1) * this.currentPerPage + index + 1;
      },
      getRowStyleClass: function getRowStyleClass(row) {
        var classes = '';
        if (this.hasRowClickListener) classes += 'clickable';
        var rowStyleClasses;

        if (typeof this.rowStyleClass === 'function') {
          rowStyleClasses = this.rowStyleClass(row);
        } else {
          rowStyleClasses = this.rowStyleClass;
        }

        if (rowStyleClasses) {
          classes += " ".concat(rowStyleClasses);
        }

        return classes;
      },
      handleGrouped: function handleGrouped(originalRows) {
        var _this10 = this;

        originalRows.forEach(function (headerRow, i) {
          headerRow.vgt_header_id = i;

          if (_this10.groupOptions.maintainExpanded && _this10.expandedRowKeys.has(headerRow[_this10.groupOptions.rowKey])) {
            _this10.$set(headerRow, 'vgtIsExpanded', true);
          }

          headerRow.children.forEach(function (childRow) {
            childRow.vgt_id = i;
          });
        });
        return originalRows;
      },
      initializePagination: function initializePagination() {
        var _this11 = this;

        var _this$paginationOptio = this.paginationOptions,
            enabled = _this$paginationOptio.enabled,
            perPage = _this$paginationOptio.perPage,
            position = _this$paginationOptio.position,
            perPageDropdown = _this$paginationOptio.perPageDropdown,
            perPageDropdownEnabled = _this$paginationOptio.perPageDropdownEnabled,
            dropdownAllowAll = _this$paginationOptio.dropdownAllowAll,
            firstLabel = _this$paginationOptio.firstLabel,
            lastLabel = _this$paginationOptio.lastLabel,
            nextLabel = _this$paginationOptio.nextLabel,
            prevLabel = _this$paginationOptio.prevLabel,
            rowsPerPageLabel = _this$paginationOptio.rowsPerPageLabel,
            ofLabel = _this$paginationOptio.ofLabel,
            pageLabel = _this$paginationOptio.pageLabel,
            allLabel = _this$paginationOptio.allLabel,
            setCurrentPage = _this$paginationOptio.setCurrentPage,
            mode = _this$paginationOptio.mode,
            infoFn = _this$paginationOptio.infoFn;

        if (typeof enabled === 'boolean') {
          this.paginate = enabled;
        }

        if (typeof perPage === 'number') {
          this.perPage = perPage;
        }

        if (position === 'top') {
          this.paginateOnTop = true; // default is false

          this.paginateOnBottom = false; // default is true
        } else if (position === 'both') {
          this.paginateOnTop = true;
          this.paginateOnBottom = true;
        }

        if (Array.isArray(perPageDropdown) && perPageDropdown.length) {
          this.customRowsPerPageDropdown = perPageDropdown;

          if (!this.perPage) {
            var _perPageDropdown = _slicedToArray(perPageDropdown, 1);

            this.perPage = _perPageDropdown[0];
          }
        }

        if (typeof perPageDropdownEnabled === 'boolean') {
          this.perPageDropdownEnabled = perPageDropdownEnabled;
        }

        if (typeof dropdownAllowAll === 'boolean') {
          this.paginateDropdownAllowAll = dropdownAllowAll;
        }

        if (typeof mode === 'string') {
          this.paginationMode = mode;
        }

        if (typeof firstLabel === 'string') {
          this.firstText = firstLabel;
        }

        if (typeof lastLabel === 'string') {
          this.lastText = lastLabel;
        }

        if (typeof nextLabel === 'string') {
          this.nextText = nextLabel;
        }

        if (typeof prevLabel === 'string') {
          this.prevText = prevLabel;
        }

        if (typeof rowsPerPageLabel === 'string') {
          this.rowsPerPageText = rowsPerPageLabel;
        }

        if (typeof ofLabel === 'string') {
          this.ofText = ofLabel;
        }

        if (typeof pageLabel === 'string') {
          this.pageText = pageLabel;
        }

        if (typeof allLabel === 'string') {
          this.allText = allLabel;
        }

        if (typeof setCurrentPage === 'number') {
          setTimeout(function () {
            _this11.changePage(setCurrentPage);
          }, 500);
        }

        if (typeof infoFn === 'function') {
          this.paginationInfoFn = infoFn;
        }
      },
      initializeSearch: function initializeSearch() {
        var _this$searchOptions = this.searchOptions,
            enabled = _this$searchOptions.enabled,
            trigger = _this$searchOptions.trigger,
            externalQuery = _this$searchOptions.externalQuery,
            searchFn = _this$searchOptions.searchFn,
            placeholder = _this$searchOptions.placeholder,
            skipDiacritics = _this$searchOptions.skipDiacritics;

        if (typeof enabled === 'boolean') {
          this.searchEnabled = enabled;
        }

        if (trigger === 'enter') {
          this.searchTrigger = trigger;
        }

        if (typeof externalQuery === 'string') {
          this.externalSearchQuery = externalQuery;
        }

        if (typeof searchFn === 'function') {
          this.searchFn = searchFn;
        }

        if (typeof placeholder === 'string') {
          this.searchPlaceholder = placeholder;
        }

        if (typeof skipDiacritics === 'boolean') {
          this.searchSkipDiacritics = skipDiacritics;
        }
      },
      initializeSort: function initializeSort() {
        var _this$sortOptions = this.sortOptions,
            enabled = _this$sortOptions.enabled,
            initialSortBy = _this$sortOptions.initialSortBy,
            multipleColumns = _this$sortOptions.multipleColumns;
        var initSortBy = JSON.parse(JSON.stringify(initialSortBy || {}));

        if (typeof enabled === 'boolean') {
          this.sortable = enabled;
        }

        if (typeof multipleColumns === 'boolean') {
          this.multipleColumnSort = multipleColumns;
        } //* initialSortBy can be an array or an object


        if (_typeof(initSortBy) === 'object') {
          var ref = this.fixedHeader ? this.$refs['table-header-secondary'] : this.$refs['table-header-primary'];

          if (Array.isArray(initSortBy)) {
            ref.setInitialSort(initSortBy);
          } else {
            var hasField = Object.prototype.hasOwnProperty.call(initSortBy, 'field');
            if (hasField) ref.setInitialSort([initSortBy]);
          }
        }
      },
      initializeSelect: function initializeSelect() {
        var _this$selectOptions = this.selectOptions,
            enabled = _this$selectOptions.enabled,
            selectionInfoClass = _this$selectOptions.selectionInfoClass,
            selectionText = _this$selectOptions.selectionText,
            clearSelectionText = _this$selectOptions.clearSelectionText,
            selectOnCheckboxOnly = _this$selectOptions.selectOnCheckboxOnly,
            selectAllByPage = _this$selectOptions.selectAllByPage,
            disableSelectInfo = _this$selectOptions.disableSelectInfo,
            selectAllByGroup = _this$selectOptions.selectAllByGroup;

        if (typeof enabled === 'boolean') {
          this.selectable = enabled;
        }

        if (typeof selectOnCheckboxOnly === 'boolean') {
          this.selectOnCheckboxOnly = selectOnCheckboxOnly;
        }

        if (typeof selectAllByPage === 'boolean') {
          this.selectAllByPage = selectAllByPage;
        }

        if (typeof selectAllByGroup === 'boolean') {
          this.selectAllByGroup = selectAllByGroup;
        }

        if (typeof disableSelectInfo === 'boolean') {
          this.disableSelectInfo = disableSelectInfo;
        }

        if (typeof selectionInfoClass === 'string') {
          this.selectionInfoClass = selectionInfoClass;
        }

        if (typeof selectionText === 'string') {
          this.selectionText = selectionText;
        }

        if (typeof clearSelectionText === 'string') {
          this.clearSelectionText = clearSelectionText;
        }
      }
    },
    mounted: function mounted() {
      if (this.perPage) {
        this.currentPerPage = this.perPage;
      }

      this.initializeSort();
    },
    components: {
      'vgt-pagination': __vue_component__$1,
      'vgt-global-search': __vue_component__$2,
      'vgt-header-row': __vue_component__$5,
      'vgt-table-header': __vue_component__$4
    }
  };

  /* script */
  var __vue_script__$6 = script$6;
  /* template */

  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      "class": _vm.wrapStyleClasses
    }, [_vm.isLoading ? _c('div', {
      staticClass: "vgt-loading vgt-center-align"
    }, [_vm._t("loadingContent", [_c('span', {
      staticClass: "vgt-loading__content"
    }, [_vm._v("\n        Loading...\n      ")])])], 2) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "vgt-inner-wrap",
      "class": {
        'is-loading': _vm.isLoading
      }
    }, [_vm.paginate && _vm.paginateOnTop ? _vm._t("pagination-top", [_c('vgt-pagination', {
      ref: "paginationTop",
      attrs: {
        "perPage": _vm.perPage,
        "rtl": _vm.rtl,
        "total": _vm.totalRows || _vm.totalRowCount,
        "mode": _vm.paginationMode,
        "jumpFirstOrLast": _vm.paginationOptions.jumpFirstOrLast,
        "firstText": _vm.firstText,
        "lastText": _vm.lastText,
        "nextText": _vm.nextText,
        "prevText": _vm.prevText,
        "rowsPerPageText": _vm.rowsPerPageText,
        "perPageDropdownEnabled": _vm.paginationOptions.perPageDropdownEnabled,
        "customRowsPerPageDropdown": _vm.customRowsPerPageDropdown,
        "paginateDropdownAllowAll": _vm.paginateDropdownAllowAll,
        "ofText": _vm.ofText,
        "pageText": _vm.pageText,
        "allText": _vm.allText,
        "info-fn": _vm.paginationInfoFn
      },
      on: {
        "page-changed": _vm.pageChanged,
        "per-page-changed": _vm.perPageChanged
      }
    })], {
      "pageChanged": _vm.pageChanged,
      "perPageChanged": _vm.perPageChanged,
      "total": _vm.totalRows || _vm.totalRowCount
    }) : _vm._e(), _vm._v(" "), _c('vgt-global-search', {
      attrs: {
        "search-enabled": _vm.searchEnabled && _vm.externalSearchQuery == null,
        "global-search-placeholder": _vm.searchPlaceholder
      },
      on: {
        "on-keyup": _vm.searchTableOnKeyUp,
        "on-enter": _vm.searchTableOnEnter
      },
      model: {
        value: _vm.globalSearchTerm,
        callback: function callback($$v) {
          _vm.globalSearchTerm = $$v;
        },
        expression: "globalSearchTerm"
      }
    }, [_c('template', {
      slot: "internal-table-actions"
    }, [_vm._t("table-actions")], 2)], 2), _vm._v(" "), _vm.selectedRowCount && !_vm.disableSelectInfo ? _c('div', {
      staticClass: "vgt-selection-info-row clearfix",
      "class": _vm.selectionInfoClass
    }, [_vm._v("\n      " + _vm._s(_vm.selectionInfo) + "\n      "), _c('a', {
      attrs: {
        "href": ""
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.unselectAllInternal(true);
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.clearSelectionText) + "\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "vgt-selection-info-row__actions vgt-pull-right"
    }, [_vm._t("selected-row-actions")], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "vgt-fixed-header"
    }, [_vm.fixedHeader ? _c('table', {
      "class": _vm.tableStyleClasses,
      attrs: {
        "id": "vgt-table"
      }
    }, [_c('colgroup', _vm._l(_vm.columns, function (column, index) {
      return _c('col', {
        key: index,
        attrs: {
          "id": "col-" + index
        }
      });
    }), 0), _vm._v(" "), _c("vgt-table-header", {
      ref: "table-header-secondary",
      tag: "thead",
      attrs: {
        "columns": _vm.columns,
        "line-numbers": _vm.lineNumbers,
        "selectable": _vm.selectable,
        "all-selected": _vm.allSelected,
        "all-selected-indeterminate": _vm.allSelectedIndeterminate,
        "mode": _vm.mode,
        "sortable": _vm.sortable,
        "multiple-column-sort": _vm.multipleColumnSort,
        "typed-columns": _vm.typedColumns,
        "getClasses": _vm.getClasses,
        "searchEnabled": _vm.searchEnabled,
        "paginated": _vm.paginated,
        "table-ref": _vm.$refs.table
      },
      on: {
        "on-toggle-select-all": _vm.toggleSelectAll,
        "on-sort-change": _vm.changeSort,
        "filter-changed": _vm.filterRows
      },
      scopedSlots: _vm._u([{
        key: "table-column",
        fn: function fn(props) {
          return [_vm._t("table-column", [_c('span', [_vm._v(_vm._s(props.column.label))])], {
            "column": props.column
          })];
        }
      }, {
        key: "column-filter",
        fn: function fn(props) {
          return [_vm._t("column-filter", null, {
            "column": props.column,
            "updateFilters": props.updateFilters
          })];
        }
      }], null, true)
    })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
      "class": {
        'vgt-responsive': _vm.responsive
      },
      style: _vm.wrapperStyles
    }, [_c('table', {
      ref: "table",
      "class": _vm.tableStyles,
      attrs: {
        "id": "vgt-table"
      }
    }, [_c('colgroup', _vm._l(_vm.columns, function (column, index) {
      return _c('col', {
        key: index,
        attrs: {
          "id": "col-" + index
        }
      });
    }), 0), _vm._v(" "), _c("vgt-table-header", {
      ref: "table-header-primary",
      tag: "thead",
      attrs: {
        "columns": _vm.columns,
        "line-numbers": _vm.lineNumbers,
        "selectable": _vm.selectable,
        "all-selected": _vm.allSelected,
        "all-selected-indeterminate": _vm.allSelectedIndeterminate,
        "mode": _vm.mode,
        "sortable": _vm.sortable,
        "multiple-column-sort": _vm.multipleColumnSort,
        "typed-columns": _vm.typedColumns,
        "getClasses": _vm.getClasses,
        "searchEnabled": _vm.searchEnabled
      },
      on: {
        "on-toggle-select-all": _vm.toggleSelectAll,
        "on-sort-change": _vm.changeSort,
        "filter-changed": _vm.filterRows
      },
      scopedSlots: _vm._u([{
        key: "table-column",
        fn: function fn(props) {
          return [_vm._t("table-column", [_c('span', [_vm._v(_vm._s(props.column.label))])], {
            "column": props.column
          })];
        }
      }, {
        key: "column-filter",
        fn: function fn(props) {
          return [_vm._t("column-filter", null, {
            "column": props.column,
            "updateFilters": props.updateFilters
          })];
        }
      }], null, true)
    }), _vm._v(" "), _vm._l(_vm.paginated, function (headerRow, hIndex) {
      return _c('tbody', {
        key: hIndex
      }, [_vm.groupHeaderOnTop ? _c('vgt-header-row', {
        "class": _vm.getRowStyleClass(headerRow),
        attrs: {
          "header-row": headerRow,
          "columns": _vm.columns,
          "line-numbers": _vm.lineNumbers,
          "selectable": _vm.selectable,
          "select-all-by-group": _vm.selectAllByGroup,
          "collapsable": _vm.groupOptions.collapsable,
          "collect-formatted": _vm.collectFormatted,
          "formatted-row": _vm.formattedRow,
          "get-classes": _vm.getClasses,
          "full-colspan": _vm.fullColspan,
          "groupIndex": hIndex
        },
        on: {
          "vgtExpand": function vgtExpand($event) {
            return _vm.toggleExpand(headerRow[_vm.rowKeyField]);
          },
          "on-select-group-change": function onSelectGroupChange($event) {
            return _vm.toggleSelectGroup($event, headerRow);
          }
        },
        scopedSlots: _vm._u([{
          key: "table-header-row",
          fn: function fn(props) {
            return _vm.hasHeaderRowTemplate ? [_vm._t("table-header-row", null, {
              "column": props.column,
              "formattedRow": props.formattedRow,
              "row": props.row
            })] : undefined;
          }
        }], null, true)
      }) : _vm._e(), _vm._v(" "), _vm._l(headerRow.children, function (row, index) {
        return (_vm.groupOptions.collapsable ? headerRow.vgtIsExpanded : true) ? _c('tr', {
          key: row.originalIndex,
          "class": _vm.getRowStyleClass(row),
          on: {
            "mouseenter": function mouseenter($event) {
              return _vm.onMouseenter(row, index);
            },
            "mouseleave": function mouseleave($event) {
              return _vm.onMouseleave(row, index);
            },
            "dblclick": function dblclick($event) {
              return _vm.onRowDoubleClicked(row, index, $event);
            },
            "click": function click($event) {
              return _vm.onRowClicked(row, index, $event);
            },
            "auxclick": function auxclick($event) {
              return _vm.onRowAuxClicked(row, index, $event);
            }
          }
        }, [_vm.lineNumbers ? _c('th', {
          staticClass: "line-numbers"
        }, [_vm._v("\n              " + _vm._s(_vm.getCurrentIndex(row.originalIndex)) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.selectable ? _c('th', {
          staticClass: "vgt-checkbox-col",
          on: {
            "click": function click($event) {
              $event.stopPropagation();
              return _vm.onCheckboxClicked(row, index, $event);
            }
          }
        }, [_c('input', {
          attrs: {
            "type": "checkbox",
            "disabled": row.vgtDisabled
          },
          domProps: {
            "checked": row.vgtSelected
          }
        })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column, i) {
          return !column.hidden && column.field ? _c('td', {
            key: i,
            "class": _vm.getClasses(i, 'td', row),
            attrs: {
              "data-label": _vm.compactMode ? column.label : undefined
            },
            on: {
              "click": function click($event) {
                return _vm.onCellClicked(row, column, index, $event);
              }
            }
          }, [_vm._t("table-row", [!column.html ? _c('span', [_vm._v("\n                  " + _vm._s(_vm.collectFormatted(row, column)) + "\n                ")]) : _c('span', {
            domProps: {
              "innerHTML": _vm._s(_vm.collect(row, column.field))
            }
          })], {
            "row": row,
            "column": column,
            "formattedRow": _vm.formattedRow(row),
            "index": index
          })], 2) : _vm._e();
        })], 2) : _vm._e();
      }), _vm._v(" "), _vm.groupHeaderOnBottom ? _c('vgt-header-row', {
        attrs: {
          "header-row": headerRow,
          "columns": _vm.columns,
          "line-numbers": _vm.lineNumbers,
          "selectable": _vm.selectable,
          "select-all-by-group": _vm.selectAllByGroup,
          "collect-formatted": _vm.collectFormatted,
          "formatted-row": _vm.formattedRow,
          "get-classes": _vm.getClasses,
          "full-colspan": _vm.fullColspan,
          "groupIndex": _vm.index
        },
        on: {
          "on-select-group-change": function onSelectGroupChange($event) {
            return _vm.toggleSelectGroup($event, headerRow);
          }
        },
        scopedSlots: _vm._u([{
          key: "table-header-row",
          fn: function fn(props) {
            return _vm.hasHeaderRowTemplate ? [_vm._t("table-header-row", null, {
              "column": props.column,
              "formattedRow": props.formattedRow,
              "row": props.row
            })] : undefined;
          }
        }], null, true)
      }) : _vm._e()], 2);
    }), _vm._v(" "), _vm.showEmptySlot ? _c('tbody', [_c('tr', [_c('td', {
      attrs: {
        "colspan": _vm.fullColspan
      }
    }, [_vm._t("emptystate", [_c('div', {
      staticClass: "vgt-center-align vgt-text-disabled"
    }, [_vm._v("\n                  No data for table\n                ")])])], 2)])]) : _vm._e()], 2)]), _vm._v(" "), _vm.hasFooterSlot ? _c('div', {
      staticClass: "vgt-wrap__actions-footer"
    }, [_vm._t("table-actions-bottom")], 2) : _vm._e(), _vm._v(" "), _vm.paginate && _vm.paginateOnBottom ? _vm._t("pagination-bottom", [_c('vgt-pagination', {
      ref: "paginationBottom",
      attrs: {
        "perPage": _vm.perPage,
        "rtl": _vm.rtl,
        "total": _vm.totalRows || _vm.totalRowCount,
        "mode": _vm.paginationMode,
        "jumpFirstOrLast": _vm.paginationOptions.jumpFirstOrLast,
        "firstText": _vm.firstText,
        "lastText": _vm.lastText,
        "nextText": _vm.nextText,
        "prevText": _vm.prevText,
        "rowsPerPageText": _vm.rowsPerPageText,
        "perPageDropdownEnabled": _vm.paginationOptions.perPageDropdownEnabled,
        "customRowsPerPageDropdown": _vm.customRowsPerPageDropdown,
        "paginateDropdownAllowAll": _vm.paginateDropdownAllowAll,
        "ofText": _vm.ofText,
        "pageText": _vm.pageText,
        "allText": _vm.allText,
        "info-fn": _vm.paginationInfoFn
      },
      on: {
        "page-changed": _vm.pageChanged,
        "per-page-changed": _vm.perPageChanged
      }
    })], {
      "pageChanged": _vm.pageChanged,
      "perPageChanged": _vm.perPageChanged,
      "total": _vm.totalRows || _vm.totalRowCount
    }) : _vm._e()], 2)]);
  };

  var __vue_staticRenderFns__$6 = [];
  /* style */

  var __vue_inject_styles__$6 = undefined;
  /* scoped */

  var __vue_scope_id__$6 = undefined;
  /* module identifier */

  var __vue_module_identifier__$6 = undefined;
  /* functional template */

  var __vue_is_functional_template__$6 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
  }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

  var VueGoodTablePlugin = {
    install: function install(Vue, options) {
      Vue.component(__vue_component__$6.name, __vue_component__$6);
    }
  }; // Automatic installation if Vue has been added to the global scope.

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueGoodTablePlugin);
  }

  exports.VueGoodTable = __vue_component__$6;
  exports.default = VueGoodTablePlugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
