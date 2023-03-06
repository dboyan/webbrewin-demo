"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["index_js"],{

/***/ "../pkg/expr_interpreter_v1_bg.js":
/*!****************************************!*\
  !*** ../pkg/expr_interpreter_v1_bg.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrewinInterpreter\": () => (/* binding */ BrewinInterpreter),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expr_interpreter_v1_bg.wasm */ \"../pkg/expr_interpreter_v1_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nclass BrewinInterpreter {\n\n    static __wrap(ptr) {\n        const obj = Object.create(BrewinInterpreter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_brewininterpreter_free(ptr);\n    }\n    /**\n    * @returns {BrewinInterpreter}\n    */\n    static new() {\n        const ret = _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.brewininterpreter_new();\n        return BrewinInterpreter.__wrap(ret);\n    }\n    /**\n    * @param {string} program\n    * @returns {string}\n    */\n    run(program) {\n        try {\n            const retptr = _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);\n            const ptr0 = passStringToWasm0(program, _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n            const len0 = WASM_VECTOR_LEN;\n            _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.brewininterpreter_run(retptr, this.ptr, ptr0, len0);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);\n            _expr_interpreter_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1);\n        }\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/../pkg/expr_interpreter_v1_bg.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var expr_interpreter_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! expr-interpreter-v1 */ \"../pkg/expr_interpreter_v1_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([expr_interpreter_v1__WEBPACK_IMPORTED_MODULE_0__]);\nexpr_interpreter_v1__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\nconst interpreter = expr_interpreter_v1__WEBPACK_IMPORTED_MODULE_0__.BrewinInterpreter[\"new\"]();\r\nconst prog = `func main\r\n  funccall print 123\r\n  #assign str1 \"string test with space\"\r\n  #assign str2 \"test with # in string\"\r\n  funccall print \"abc\" # comment test\r\n  funccall print True\r\nendfunc`;\r\n\r\nconst pre = document.getElementById(\"interp-result\");\r\nconst src = document.getElementById(\"brewin-src\");\r\n\r\nsrc.textContent = prog;\r\n\r\ndocument.getElementById(\"brewin-eval\").addEventListener(\"click\", (event) => {\r\n  const program = src.value;\r\n  console.log(\"Program: \" + program);\r\n  const interpreter = expr_interpreter_v1__WEBPACK_IMPORTED_MODULE_0__.BrewinInterpreter[\"new\"]();\r\n  const result = interpreter.run(program);\r\n  console.log(\"Result: \" + result);\r\n  pre.textContent = result;\r\n})\r\n\r\n\r\nconst result = interpreter.run(prog);\r\npre.textContent = result;\r\nconsole.log(result);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/./index.js?");

/***/ }),

/***/ "../pkg/expr_interpreter_v1_bg.wasm":
/*!******************************************!*\
  !*** ../pkg/expr_interpreter_v1_bg.wasm ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"49a9f3365edff5ab3c2f\", {\n\t\t\"./expr_interpreter_v1_bg.js\": {\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./expr_interpreter_v1_bg.js */ \"../pkg/expr_interpreter_v1_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"49a9f3365edff5ab3c2f\", {\n\t\t\"./expr_interpreter_v1_bg.js\": {\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://create-wasm-app/../pkg/expr_interpreter_v1_bg.wasm?");

/***/ })

}]);