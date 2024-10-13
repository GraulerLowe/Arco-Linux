(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[715],{

/***/ 18288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.loader {
    cursor: not-allowed;
}

    .loader__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loader__container {
        background-color: var(--fills-backgrounds-page-background-default);
        height: 88px;
        min-width: 243px;
        border-radius: 8px;
    }

    .loader__content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 32px;
    }

    .loader__text {
        font-size: 16px;
        line-height: 24px;
        color: var(--text-description-description-default);
        padding-left: 16px;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 79749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.checkbox {
    position: relative;
    height: 100%;
}

    .checkbox__in {
        position: absolute;
        right: 14px;
        top: -3px;
        height: 20px;
        width: 40px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
    }

    .checkbox__in.focus-visible + .checkbox__label:after {
            outline: 2px solid var(--stroke-icons-gray-icons-default);
        }

    .checkbox__in:focus-visible + .checkbox__label:after {
            outline: 2px solid var(--stroke-icons-gray-icons-default);
        }

    .checkbox__in:checked + .checkbox__label:after {
                background-color: var(--stroke-icons-product-icon-default);
            }

    .checkbox__in:checked + .checkbox__label:before {
                transform: translate(22px, 2px);
            }

    @media (min-width: 640px) {

    .checkbox__in:checked + .checkbox__label:before {
                    transform: translate(38px, 18px)
            }
                }

    .checkbox__label {
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        position: relative;
        width: 40px;
        height: 20px;
        font-size: 0;
        border-radius: 8px;
        transition: 0.3s ease background-color;
    }

    @media (min-width: 640px) {

    .checkbox__label {
            width: 72px;
            height: 100%;
            padding: 0 16px
    }
        }

    .checkbox__label:hover {
            background-color: var(--gray100);
        }

    @media (color-index: 48) {

    .checkbox__label:hover {
                background-color: var(--gray900)
        }
            }

    @media (color: 48842621) {

    .checkbox__label:hover {
                background-color: var(--gray900)
        }
            }

    @media (prefers-color-scheme: dark) {

    .checkbox__label:hover {
                background-color: var(--gray900)
        }
            }

    .checkbox__label--actions:hover {
                background-color: transparent !important;
            }

    .checkbox__label:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(2px, 2px);
            z-index: 1;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: var(--gray-0);
            transition: var(--t3) transform;
        }

    @media (min-width: 640px) {

    .checkbox__label:before {
                top: -16px;
                transform: translate(18px, 18px)
        }
            }

    .checkbox__label:after {
            content: "";
            font-size: 0;
            display: block;
            width: 40px;
            height: 20px;
            border-radius: 10px;
            background-color: var(--gray700);
            cursor: pointer;
        }

    @media (color-index: 48) {

    .checkbox__label:after {
                background-color: var(--gray700)
        }
            }

    @media (color: 48842621) {

    .checkbox__label:after {
                background-color: var(--gray700)
        }
            }

    @media (prefers-color-scheme: dark) {

    .checkbox__label:after {
                background-color: var(--gray700)
        }
            }

.light-mode .checkbox__label:hover {
                background-color: var(--gray100);
            }


.dark-mode .checkbox__label:hover {
                background-color: var(--gray900);
            }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 70165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.popover {
    display: inline-block;
}

    .popover--coming-soon {
        cursor: help;
        display: flex;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 53621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tooltip {
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    padding: 8px 16px;
    color: var(--text-main-text-main-default);
    background-color: var(--fills-menus-dropdown-menu-background-default);
    font-size: 12px;
    line-height: 130%;
    box-shadow: 4px 4px 8px 0px var(--shadow-0-1);
    border-radius: 4px;
}

    .tooltip--fixed-width {
        white-space: break-spaces;
        width: -moz-max-content;
        width: max-content;
        max-width: 188px;
    }

    .tooltip--on {
        visibility: visible;
        opacity: 1;
    }

    .tooltip--off {
        visibility: hidden;
        opacity: 0;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    border: 0;
    background-color: transparent;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

    .button--l {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        padding: 16px;
        border-radius: 8px;
        max-height: 56px;
    }

    @media (max-width: 640px) {

    .button--l {
            max-width: 100%
    }
        }

    .button:disabled {
        opacity: 0.5;
        cursor: default;
        /*
         * Do not add "pointer-events: none;" to disabled buttons,
         * otherwise button title will not be displayed on hover
         * if button text is too long
         */
    }

    .button--green-bg {
        color: var(--text-buttons-primary-default);
        background-color: var(--fills-buttons-main-button-default);
        transition: 0.3s ease background-color;
    }

    .button--green-bg:hover {
            background-color: var(--fills-buttons-main-button-hovered);
        }

    .button--green-bg:hover:disabled {
                background-color: var(--fills-buttons-main-button-default);
            }

    .button--red-bg {
        color: var(--text-buttons-primary-default);
        background-color: var(--fills-buttons-danger-button-default);
        transition: 0.3s ease background-color;
    }

    .button--red-bg:hover {
            background-color: var(--fills-buttons-danger-button-hovered);
        }

    .button--transparent {
        box-shadow: 0 0 0 1px var(--stroke-buttons-secondary-default);
        color: var(--text-main-text-main-default);
        background-color: transparent;
        transition: var(--t3) box-shadow, var(--t3) color;
    }

    .button--transparent:hover {
            box-shadow: 0 0 0 1px var(--gray-50);
            color: var(--gray-50);
        }

    .button--transparent:hover:disabled {
                box-shadow: 0 0 0 1px var(--stroke-buttons-secondary-default);
                color: var(--text-main-text-main-default);
            }

    .button--link {
        overflow: visible;
        font-size: inherit;
        line-height: inherit;
    }

    .button--link--green {
            color: var(--text-links-link-default);
        }

    .button--link--green:hover {
                color: var(--text-links-link-hovered);
            }

    .button--link--red {
            color: var(--text-links-error-link-default);
        }

    .button--link--red:hover {
                color: var(--text-links-error-link-hovered);
            }

    .button--link--underlined {
            text-decoration: underline;
        }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 22263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto Flex';
    src: url('../../../../assets/fonts/Roboto-Flex-Regular.woff2') format('woff2 supports variations'),
       url('../../../../assets/fonts/Roboto-Flex-Regular.woff2') format('woff2-variations');
    font-weight: 100 1000;
    font-stretch: 25% 151%;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 53315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 'display' property for 'icon' class should be set in specific page style files */
    .icon--24 {
        width: 24px;
        height: 24px;
    }
    .icon--18 {
        width: 18px;
        height: 18px;
    }
    .icon--logo {
        width: 107px;
        height: 24px;
        color: var(--fills-logo-key-color-default);
    }
    .icon--select {
        width: 14px;
        height: 8px;
    }
    @media (max-width: 640px) {
    .icon--select {
            width: 10px;
            height: 6px
    }
        }
    .icon--gray-default {
        color: var(--stroke-icons-gray-icons-default);
    }
    .icon--green-default {
        color: var(--stroke-icons-product-icon-default);
    }
    .icon--red-default {
        color: var(--stroke-icons-error-icon-default);
    }
    .icon--loading {
        pointer-events: none;
        animation: loader-spin 1s infinite linear;
        animation-fill-mode: forwards;
    }
    @keyframes loader-spin {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 31587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    /*GRAYSCALE*/
    --gray100: #f3f3f3;
    --gray300: #d8d8d8;
    --gray700: #888888;
    --gray900: #4d4d4d;
    --grayDark: #2a2a2a;
    --black: #131313;
    /*BRAND*/
    --green400: #67b279;
    /*ADDITIONAL*/
    --outline: #005ecc;
    /*EDITOR*/
    --green-editor: #338033;
    --yellow-editor500: #ffff00;
    --blue-selection: rgb(181, 213, 255);
    /* - dark mode*/
    --cyan-editor: #4093d6;
    --yellow-editor: #dbdb84;
    --pink-editor: #c46cbd;
    --orange-editor: #cf8263;
    /* - light mode*/
    --blue-editor: #4141e2;
    --brown-editor: #795e26;
    --purple-editor: #9e45b4;
    --red-editor: #a31515;
    /*FILTERING-LOG*/
    --green-row: #dcffe5;
    --green-row-hover: #c3ffd1;
    --green-row-active: #a9ffbe;

    /* NEW VARS */

    /* Base colors: */

    /* Context colors: */

    /* vars that DO NOT change depand on the mode — same for light and dark mode: */
}
    /*FILTERING-LOG-DARK*/
    @media (color-index: 48) {:root {
        --green-row: #2c4332;
        --green-row-hover: #3d6246;
        --green-row-active: #457250;
        --blue-selection: #556a86;
        --outline: #99c9ff
}
    }
    @media (color: 48842621) {:root {
        --green-row: #2c4332;
        --green-row-hover: #3d6246;
        --green-row-active: #457250;
        --blue-selection: #556a86;
        --outline: #99c9ff
}
    }
    @media (prefers-color-scheme: dark) {:root {
        --green-row: #2c4332;
        --green-row-hover: #3d6246;
        --green-row-active: #457250;
        --blue-selection: #556a86;
        --outline: #99c9ff
}
    }
    :root {

    --gray05: rgba(239, 239, 239, 0.5);
    --gray-base: var(--gray900);
    --gray88: var(--gray700);
    --t3: 0.3s ease;
    --overlay-gray: rgba(137, 137, 137, 0.5);
    --light-shadow: rgba(0, 0, 0, 0.05);
    --sidebar-transition: 0.3s ease;
    --z-idx5: 5;
    --z-idx6: 6;
    --z-idx7: 7;
    --z-idx8: 8;
    --z-idx10-options-notifications: 10;

    --shadow-0-1: rgba(0, 0, 0, 0.1);

    --product-primary-0: #f7fbf8;
    --product-primary-10: #d9ecde;
    --product-primary-20: #bedfc6;
    --product-primary-30: #a2d0ad;
    --product-primary-40: #84c193;
    --product-primary-50: #67b279;
    --product-primary-60: #5b9f6b;
    --product-primary-70: #4e8c5d;
    --product-primary-80: #42794f;
    --product-primary-90: #366642;
    --product-primary-100: #22482c;
    --product-tertiary-50: #646fb8;
    --gray-0: #ffffff;
    --gray-10: #f6f6f6;
    --gray-20: #e4e4e4;
    --gray-30: #d2d2d2;
    --gray-40: #c0c0c0;
    --gray-50: #a4a4a4;
    --gray-60: #7f7f7f;
    --gray-70: #5b5b5b;
    --gray-80: #3d3d3d;
    --gray-90: #1f1f1f;
    --gray-100: #000000;
    --red-0: #fcece6;
    --red-10: #f6c2b1;
    --red-20: #f2a288;
    --red-30: #ef9071;
    --red-40: #ec7b55;
    --red-50: #e9653a;
    --red-60: #e75727;
    --red-70: #dc4918;
    --red-80: #bc3f15;
    --red-90: #a13612;
    --red-100: #77280d;
    --orange-0: #fdf9f2;
    --orange-10: #f5e2c1;
    --orange-20: #eecb92;
    --orange-30: #e5b460;
    --orange-40: #de9e33;
    --orange-50: #d58500;
    --orange-60: #c77901;
    --orange-70: #b76c01;
    --orange-80: #a85f01;
    --orange-90: #985201;
    --orange-100: #803d00;
    --fills-buttons-danger-button-default: var(--red-50);
    --fills-buttons-danger-button-hovered: var(--red-60);
    --fills-buttons-danger-button-pressed: var(--red-70);
    --fills-buttons-main-button-default: var(--product-primary-50);
    --fills-buttons-main-button-hovered: var(--product-primary-60);
    --fills-buttons-main-button-pressed: var(--product-primary-70);
    --fills-logo-white-color-default: var(--gray-0);
    --fills-snacks-mobile-snacks-default: var(--gray-100);
    --stroke-dividers-item-divider-green-default: var(--product-primary-50);
    --stroke-dividers-item-divider-orange-default: var(--orange-50);
    --stroke-buttons-secondary-green-default: var(--product-primary-50);
    --stroke-buttons-secondary-red-default: var(--red-50);
    --stroke-icons-attention-icon-default: var(--orange-50);
    --stroke-icons-black-icons-disabled: var(--gray-50);
    --stroke-icons-error-icon-default: var(--red-50);
    --stroke-icons-error-icon-hovered: var(--red-60);
    --stroke-icons-error-icon-pressed: var(--red-70);
    --stroke-icons-product-icon-default: var(--product-primary-50);
    --stroke-icons-product-icon-hovered: var(--product-primary-60);
    --stroke-icons-product-icon-pressed: var(--product-primary-70);
    --stroke-inputs-error-input-stroke-default: var(--red-50);
    --stroke-inputs-active-input-stroke-default: var(--gray-50);
    --text-buttons-primary-default: var(--gray-0);
    --text-buttons-secondary-green-default: var(--product-primary-50);
    --text-buttons-secondary-red-default: var(--red-50);
    --text-links-attention-link-default: var(--orange-50);
    --text-links-error-link-default: var(--red-50);
    --text-links-error-link-hovered: var(--red-60);
    --text-links-link-default: var(--product-primary-50);
    --text-links-link-hovered: var(--product-primary-60);
    --product-tertiary-icon-default: var(--product-tertiary-50);
    --fills-backgrounds-cards-background-default: var(--gray-0);
    --fills-backgrounds-page-background-default: var(--gray-0);
    --fills-backgrounds-page-background-hovered: var(--gray-10);
    --fills-backgrounds-page-background-pressed: var(--gray-20);
    --fills-backgrounds-page-background-additional-default: var(--gray-10);
    --fills-backgrounds-page-background-additional-hovered: var(--gray-20);
    --fills-backgrounds-recent-activity-request-allowlisted-default: var(--product-primary-10);
    --fills-backgrounds-recent-activity-request-allowlisted-hovered: var(--product-primary-20);
    --fills-backgrounds-recent-activity-request-allowlisted-pressed: var(--product-primary-30);
    --fills-backgrounds-recent-activity-request-blocked-default: var(--red-10);
    --fills-backgrounds-recent-activity-request-blocked-hovered: var(--red-20);
    --fills-backgrounds-recent-activity-request-blocked-pressed: var(--red-30);
    --fills-backgrounds-recent-activity-request-changed-default: var(--orange-10);
    --fills-backgrounds-recent-activity-request-changed-hovered: var(--orange-20);
    --fills-backgrounds-recent-activity-request-changed-pressed: var(--orange-30);
    --fills-buttons-main-button-default-inactive: var(--gray-50);
    --fills-inputs-input-background-default: var(--gray-10);
    --fills-inputs-input-background-disabled: var(--gray-10);
    --fills-loaders-background-default: var(--gray-20);
    --fills-logo-key-color-default: var(--gray-90);
    --fills-menus-dropdown-menu-background-default: var(--gray-0);
    --fills-menus-dropdown-menu-background-hovered: var(--gray-10);
    --fills-menus-dropdown-menu-background-pressed: var(--gray-20);
    --stroke-buttons-secondary-default: var(--gray-80);
    --stroke-dividers-item-divider-default: var(--gray-30);
    --stroke-icons-gray-icons-default: var(--gray-60);
    --stroke-inputs-inactive-input-stroke-disabled: var(--gray-20);
    --stroke-inputs-inactive-input-stroke-default: var(--gray-30);
    --text-description-description-default: var(--gray-60);
    --text-lables-labels-default: var(--gray-70);
    --text-main-text-main-default: var(--gray-80);
    --text-placeholder-placeholder-disabled: var(--gray-40)
}
    /* vars that change depand on the mode: */
    @media (color-index: 48) {:root {
        --fills-backgrounds-cards-background-default: var(--gray-80);
        --fills-backgrounds-page-background-default: var(--gray-90);
        --fills-backgrounds-page-background-hovered: var(--gray-80);
        --fills-backgrounds-page-background-pressed: var(--gray-70);
        --fills-backgrounds-page-background-additional-default: var(--gray-80);
        --fills-backgrounds-page-background-additional-hovered: var(--gray-70);
        --fills-backgrounds-recent-activity-request-allowlisted-default: var(--product-primary-90);
        --fills-backgrounds-recent-activity-request-allowlisted-hovered: var(--product-primary-80);
        --fills-backgrounds-recent-activity-request-allowlisted-pressed: var(--product-primary-70);
        --fills-backgrounds-recent-activity-request-blocked-default: var(--red-100);
        --fills-backgrounds-recent-activity-request-blocked-hovered: var(--red-90);
        --fills-backgrounds-recent-activity-request-blocked-pressed: var(--red-80);
        --fills-backgrounds-recent-activity-request-changed-default: var(--orange-100);
        --fills-backgrounds-recent-activity-request-changed-hovered: var(--orange-90);
        --fills-backgrounds-recent-activity-request-changed-pressed: var(--orange-80);
        --fills-buttons-main-button-default-inactive: var(--gray-60);
        --fills-inputs-input-background-default: var(--gray-80);
        --fills-inputs-input-background-disabled: var(--gray-80);
        --fills-loaders-background-default: var(--gray-70);
        --fills-logo-key-color-default: var(--gray-10);
        --fills-menus-dropdown-menu-background-default: var(--gray-80);
        --fills-menus-dropdown-menu-background-hovered: var(--gray-70);
        --fills-menus-dropdown-menu-background-pressed: var(--gray-60);
        --stroke-buttons-secondary-default: var(--gray-20);
        --stroke-dividers-item-divider-default: var(--gray-70);
        --stroke-icons-gray-icons-default: var(--gray-40);
        --stroke-inputs-inactive-input-stroke-disabled: var(--gray-80);
        --stroke-inputs-inactive-input-stroke-default: var(--gray-70);
        --text-description-description-default: var(--gray-40);
        --text-lables-labels-default: var(--gray-30);
        --text-main-text-main-default: var(--gray-20);
        --text-placeholder-placeholder-disabled: var(--gray-60)
}
    }
    @media (color: 48842621) {:root {
        --fills-backgrounds-cards-background-default: var(--gray-80);
        --fills-backgrounds-page-background-default: var(--gray-90);
        --fills-backgrounds-page-background-hovered: var(--gray-80);
        --fills-backgrounds-page-background-pressed: var(--gray-70);
        --fills-backgrounds-page-background-additional-default: var(--gray-80);
        --fills-backgrounds-page-background-additional-hovered: var(--gray-70);
        --fills-backgrounds-recent-activity-request-allowlisted-default: var(--product-primary-90);
        --fills-backgrounds-recent-activity-request-allowlisted-hovered: var(--product-primary-80);
        --fills-backgrounds-recent-activity-request-allowlisted-pressed: var(--product-primary-70);
        --fills-backgrounds-recent-activity-request-blocked-default: var(--red-100);
        --fills-backgrounds-recent-activity-request-blocked-hovered: var(--red-90);
        --fills-backgrounds-recent-activity-request-blocked-pressed: var(--red-80);
        --fills-backgrounds-recent-activity-request-changed-default: var(--orange-100);
        --fills-backgrounds-recent-activity-request-changed-hovered: var(--orange-90);
        --fills-backgrounds-recent-activity-request-changed-pressed: var(--orange-80);
        --fills-buttons-main-button-default-inactive: var(--gray-60);
        --fills-inputs-input-background-default: var(--gray-80);
        --fills-inputs-input-background-disabled: var(--gray-80);
        --fills-loaders-background-default: var(--gray-70);
        --fills-logo-key-color-default: var(--gray-10);
        --fills-menus-dropdown-menu-background-default: var(--gray-80);
        --fills-menus-dropdown-menu-background-hovered: var(--gray-70);
        --fills-menus-dropdown-menu-background-pressed: var(--gray-60);
        --stroke-buttons-secondary-default: var(--gray-20);
        --stroke-dividers-item-divider-default: var(--gray-70);
        --stroke-icons-gray-icons-default: var(--gray-40);
        --stroke-inputs-inactive-input-stroke-disabled: var(--gray-80);
        --stroke-inputs-inactive-input-stroke-default: var(--gray-70);
        --text-description-description-default: var(--gray-40);
        --text-lables-labels-default: var(--gray-30);
        --text-main-text-main-default: var(--gray-20);
        --text-placeholder-placeholder-disabled: var(--gray-60)
}
    }
    @media (prefers-color-scheme: dark) {:root {
        --fills-backgrounds-cards-background-default: var(--gray-80);
        --fills-backgrounds-page-background-default: var(--gray-90);
        --fills-backgrounds-page-background-hovered: var(--gray-80);
        --fills-backgrounds-page-background-pressed: var(--gray-70);
        --fills-backgrounds-page-background-additional-default: var(--gray-80);
        --fills-backgrounds-page-background-additional-hovered: var(--gray-70);
        --fills-backgrounds-recent-activity-request-allowlisted-default: var(--product-primary-90);
        --fills-backgrounds-recent-activity-request-allowlisted-hovered: var(--product-primary-80);
        --fills-backgrounds-recent-activity-request-allowlisted-pressed: var(--product-primary-70);
        --fills-backgrounds-recent-activity-request-blocked-default: var(--red-100);
        --fills-backgrounds-recent-activity-request-blocked-hovered: var(--red-90);
        --fills-backgrounds-recent-activity-request-blocked-pressed: var(--red-80);
        --fills-backgrounds-recent-activity-request-changed-default: var(--orange-100);
        --fills-backgrounds-recent-activity-request-changed-hovered: var(--orange-90);
        --fills-backgrounds-recent-activity-request-changed-pressed: var(--orange-80);
        --fills-buttons-main-button-default-inactive: var(--gray-60);
        --fills-inputs-input-background-default: var(--gray-80);
        --fills-inputs-input-background-disabled: var(--gray-80);
        --fills-loaders-background-default: var(--gray-70);
        --fills-logo-key-color-default: var(--gray-10);
        --fills-menus-dropdown-menu-background-default: var(--gray-80);
        --fills-menus-dropdown-menu-background-hovered: var(--gray-70);
        --fills-menus-dropdown-menu-background-pressed: var(--gray-60);
        --stroke-buttons-secondary-default: var(--gray-20);
        --stroke-dividers-item-divider-default: var(--gray-70);
        --stroke-icons-gray-icons-default: var(--gray-40);
        --stroke-inputs-inactive-input-stroke-disabled: var(--gray-80);
        --stroke-inputs-inactive-input-stroke-default: var(--gray-70);
        --text-description-description-default: var(--gray-40);
        --text-lables-labels-default: var(--gray-30);
        --text-main-text-main-default: var(--gray-20);
        --text-placeholder-placeholder-disabled: var(--gray-60)
}
    }

.dark-mode {
    --green-row: #2c4332;
    --green-row-hover: #3d6246;
    --green-row-active: #457250;
    --blue-selection: #556a86;
    --outline: #99c9ff;

    --fills-backgrounds-cards-background-default: var(--gray-80);
    --fills-backgrounds-page-background-default: var(--gray-90);
    --fills-backgrounds-page-background-hovered: var(--gray-80);
    --fills-backgrounds-page-background-pressed: var(--gray-70);
    --fills-backgrounds-page-background-additional-default: var(--gray-80);
    --fills-backgrounds-page-background-additional-hovered: var(--gray-70);
    --fills-backgrounds-recent-activity-request-allowlisted-default: var(--product-primary-90);
    --fills-backgrounds-recent-activity-request-allowlisted-hovered: var(--product-primary-80);
    --fills-backgrounds-recent-activity-request-allowlisted-pressed: var(--product-primary-70);
    --fills-backgrounds-recent-activity-request-blocked-default: var(--red-100);
    --fills-backgrounds-recent-activity-request-blocked-hovered: var(--red-90);
    --fills-backgrounds-recent-activity-request-blocked-pressed: var(--red-80);
    --fills-backgrounds-recent-activity-request-changed-default: var(--orange-100);
    --fills-backgrounds-recent-activity-request-changed-hovered: var(--orange-90);
    --fills-backgrounds-recent-activity-request-changed-pressed: var(--orange-80);
    --fills-buttons-main-button-default-inactive: var(--gray-60);
    --fills-inputs-input-background-default: var(--gray-80);
    --fills-inputs-input-background-disabled: var(--gray-80);
    --fills-loaders-background-default: var(--gray-70);
    --fills-logo-key-color-default: var(--gray-10);
    --fills-menus-dropdown-menu-background-default: var(--gray-80);
    --fills-menus-dropdown-menu-background-hovered: var(--gray-70);
    --fills-menus-dropdown-menu-background-pressed: var(--gray-60);
    --stroke-buttons-secondary-default: var(--gray-20);
    --stroke-dividers-item-divider-default: var(--gray-70);
    --stroke-icons-gray-icons-default: var(--gray-40);
    --stroke-inputs-inactive-input-stroke-disabled: var(--gray-80);
    --stroke-inputs-inactive-input-stroke-default: var(--gray-70);
    --text-description-description-default: var(--gray-40);
    --text-lables-labels-default: var(--gray-30);
    --text-main-text-main-default: var(--gray-20);
    --text-placeholder-placeholder-disabled: var(--gray-60);
}

.light-mode {
    --green-row: #dcffe5;
    --green-row-hover: #c3ffd1;
    --green-row-active: #a9ffbe;
    --blue-selection: rgb(181, 213, 255);
    --outline: #005ecc;

    --fills-backgrounds-cards-background-default: var(--gray-0);
    --fills-backgrounds-page-background-default: var(--gray-0);
    --fills-backgrounds-page-background-hovered: var(--gray-10);
    --fills-backgrounds-page-background-pressed: var(--gray-20);
    --fills-backgrounds-page-background-additional-default: var(--gray-10);
    --fills-backgrounds-page-background-additional-hovered: var(--gray-20);
    --fills-backgrounds-recent-activity-request-allowlisted-default: var(--product-primary-10);
    --fills-backgrounds-recent-activity-request-allowlisted-hovered: var(--product-primary-20);
    --fills-backgrounds-recent-activity-request-allowlisted-pressed: var(--product-primary-30);
    --fills-backgrounds-recent-activity-request-blocked-default: var(--red-10);
    --fills-backgrounds-recent-activity-request-blocked-hovered: var(--red-20);
    --fills-backgrounds-recent-activity-request-blocked-pressed: var(--red-30);
    --fills-backgrounds-recent-activity-request-changed-default: var(--orange-10);
    --fills-backgrounds-recent-activity-request-changed-hovered: var(--orange-20);
    --fills-backgrounds-recent-activity-request-changed-pressed: var(--orange-30);
    --fills-buttons-main-button-default-inactive: var(--gray-50);
    --fills-inputs-input-background-default: var(--gray-10);
    --fills-inputs-input-background-disabled: var(--gray-10);
    --fills-loaders-background-default: var(--gray-20);
    --fills-logo-key-color-default: var(--gray-90);
    --fills-menus-dropdown-menu-background-default: var(--gray-0);
    --fills-menus-dropdown-menu-background-hovered: var(--gray-10);
    --fills-menus-dropdown-menu-background-pressed: var(--gray-20);
    --stroke-buttons-secondary-default: var(--gray-80);
    --stroke-dividers-item-divider-default: var(--gray-30);
    --stroke-icons-gray-icons-default: var(--gray-60);
    --stroke-inputs-inactive-input-stroke-disabled: var(--gray-20);
    --stroke-inputs-inactive-input-stroke-default: var(--gray-30);
    --text-description-description-default: var(--gray-60);
    --text-lables-labels-default: var(--gray-70);
    --text-main-text-main-default: var(--gray-80);
    --text-placeholder-placeholder-disabled: var(--gray-40);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes notify-show {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes notify-hide {
    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(100%);
        opacity: 0;
    }
}

.notifications {
    position: fixed;
    z-index: var(--z-idx10-options-notifications);
    bottom: 72px;
    right: 16px;
}

.notification {
    padding: 8px;
    max-width: 344px;
    display: flex;
    align-items: flex-start;
    border-radius: 4px;
    background-color: var(--fills-snacks-mobile-snacks-default);
    color: var(--text-buttons-primary-default);
    animation: notify-show 0.3s ease-in;
}

.notification--error > svg {
        color: var(--stroke-icons-error-icon-default);
    }

.notification--success > svg {
        color: var(--stroke-icons-product-icon-default);
    }

.notification--close {
        animation: notify-hide 1s ease-out;
    }

.notification__content,
    .notification__content button {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
    }

.notification__content {
        padding: 0 12px;
    }

.notification__content p {
            margin: 0;
        }

.notification__content button {
            padding: 0;
            margin-top: 8px;
            color: #67B279;
            background: transparent;
            border: none;
            cursor: pointer;
        }

.notification__btn-close {
        cursor: pointer;
        padding: 0;
        background: transparent;
        outline: none;
        border: none;
    }

.notification + .notification {
    margin-top: 16px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 18787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.editor__label {
    position: absolute;
    top: -24px;
    left: 0;
    right: 0;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: 12px;
    line-height: 22px;
}

    @media (max-width: 500px) {.editor__label {
        right: 0;
        padding-left: 12px
}
    }

    .editor__label .editor__icon {
        display: none;
        position: absolute;
        right: 0;
        top: 2px;
    }

    .editor__label--saved {
        padding-right: 20px;
    }

    .editor__label--saved .editor__icon {
            display: block;
        }

.editor__open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 125px 16px;
    border-radius: 8px;
    background: var(--fills-backgrounds-page-background-additional-default);
}

.editor__open-text {
        line-height: 1.3;
    }

.editor__open-title {
        font-weight: 600;
        margin-bottom: 4px;
    }

.editor__open-subtitle {
        font-size: 14px;
        color: var(--text-description-description-default,);
    }

.editor__open .button {
        margin-top: 24px;
        padding: 16px 48px;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button--s {
        font-size: 16px;
        line-height: 22px;
        padding: 5px 28px;
        border-radius: 4px;
        max-height: 32px;
    }

    .button--m {
        font-size: 16px;
        line-height: 24px;
        padding: 12px 24px;
        border-radius: 8px;
        max-height: 56px;
    }

    .button--add-custom-filter {
        margin: 16px;
        min-width: 222px;
    }

    .button--empty-custom-filter {
        display: block;
        margin: 0 auto;
        min-width: 222px;
    }

    .button--compare {
        width: 100%;
        padding: 12px 24px;
        word-break: break-word;
    }

    .button__img {
        margin-right: 7px;
    }

    .button__label {
        line-height: 26px;
        max-height: 26px;
        overflow: hidden;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

:root {
    color-scheme: light dark;
}

html,
.root {
    height: 100%;
}

body {
    font-family: 'Roboto Flex', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Arial, sans-serif;
    font-optical-sizing: none;
    margin: 0;
    height: 100%;
    font-size: 16px;
    color: var(--text-main-text-main-default);
    background-color: var(--fills-backgrounds-page-background-default);
}

.options {
    overflow-y: scroll;
}

h2 {
    margin: 0;
    font-size: inherit;
}

a.focus-visible {
        outline: 2px solid var(--outline);
    }

a:focus-visible {
        outline: 2px solid var(--outline);
    }

button,
input,
textarea,
select {
    font-family: inherit;
}

button.focus-visible, input.focus-visible, textarea.focus-visible, select.focus-visible {
        outline: 2px solid var(--outline);
    }

button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {
        outline: 2px solid var(--outline);
    }

/* custom checkbox */
label.checkbox-label {
    cursor: pointer;
    color: var(--text-main-text-main-default);
    display: flex;
    align-items: center;
    flex-shrink: 0;
}
label.checkbox-label input[type="checkbox"] {
        display: none;
    }
label.checkbox-label input[type="checkbox"]:checked + .custom-checkbox {
                background-color: var(--stroke-icons-product-icon-default);
                border-color: var(--stroke-icons-product-icon-default);
            }
label.checkbox-label input[type="checkbox"]:checked + .custom-checkbox .icon {
                    display: block;
                }
label.checkbox-label .custom-checkbox {
        min-width: 20px;
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: 2px solid var(--stroke-icons-gray-icons-default);
        border-radius: 2px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 16px;
        line-height: 24px;
    }
label.checkbox-label .custom-checkbox .icon {
            display: none;
        }

.inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.content {
    position: relative;
    padding: 40px 16px;
    width: 100%;
    max-width: 100%;
}

@media (min-width: 640px) {

.content {
        max-width: 672px
}
    }

.content__btn {
        margin-left: 15px;
    }

.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.page {
    flex: 1 0 auto;
    display: flex;
}

.links-menu {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
}

.links-menu--section {
        margin-left: 16px;
    }

.links-menu button {
        background: none;
        border: none;
        padding: 0;
    }

.links-menu a {
        text-decoration: none;
    }

.links-menu__item {
        margin: 16px 0;
        font-size: 16px;
        line-height: 21px;
        font-weight: 600;
        cursor: pointer;
    }

.links-menu__item--wrapper {
            margin: 16px 0;
        }

.footer {
    width: 100%;
    flex: 0 0 auto;
}

.disabled {
    opacity: .5;
    pointer-events: none;
    cursor: help;
}

.title {
    color: var(--text-main-text-main-default);
    font-size: 24px;
    font-weight: 700;
    padding: 0;
    padding-right: 8px;
    margin-top: -5px;
    line-height: 30px;
}

.title__container {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 32px 16px 16px;
    }

.title__container--sub > .title__inner {
            padding-top: 0;
        }

.title__container--control {
            border-radius: 8px;
            cursor: pointer;
            transition: var(--t3) background-color;
        }

.title__container--control .checkbox__label:hover {
                background-color: transparent;
            }

@media (min-width: 1024px) {

.title__container--control:hover {
                    background-color: var(--fills-backgrounds-page-background-hovered)
            }
                }

@media (min-width: 640px) {

.title {
        padding-right: 16px
}

        .title__container {
            padding: 16px 0 16px 16px;
        }

            .title__container--small {
                padding: 16px;
            }

            .title__container--back {
                padding: 0 16px 16px 16px;
            }

                .title__container--back .title__inner {
                    padding-top: 16px;
                }
                    @media (min-width: 640px) {

                .title__container--back .checkbox__label {
                        padding: 16px
                }

                        .title__container--back .checkbox__label:before {
                            top: 0;
                        }
                    }

            .title__container--sub > .title__inner {
                padding-top: 0;
            }
                @media (min-width: 640px) {

            .title__container--about {
                    padding: 16px 0 16px 16px
            }
                }

            .title__container--custom {
              padding-bottom: 9px;
            }
    }

.title__desc {
        font-size: 14px;
        font-weight: 400;
        padding-top: 8px;
        color: var(--text-description-description-default);
    }

.title__desc--back {
            cursor: pointer;
        }

.title--back-btn {
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }

.title--sub {
        font-size: 20px;
        padding-top: 32px;
    }

.subtitle {
    padding: 0 15px;
    color: var(--text-description-description-default);
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    margin: 0 0 8px;
}

.desc {
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--gray-base);
    line-height: 22px;
    padding-left: 15px;
}

@media (color-index: 48) {

.desc {
        color: var(--gray300)
}
    }

@media (color: 48842621) {

.desc {
        color: var(--gray300)
}
    }

@media (prefers-color-scheme: dark) {

.desc {
        color: var(--gray300)
}
    }

.desc--link {
        color: var(--text-links-link-default);
    }

.settings__group--disabled {
        opacity: 0.5;
        pointer-events: none;
    }

.settings__group__links {
        display: flex;
        flex-direction: row;
        padding: 8px 16px 24px;
    }

.settings__group__links--custom {
          padding-bottom: 8px;
        }

.link_with_icon {
    margin-right: 32px;
}

.link_with_icon:last-child {
        margin-right: 0;
    }

.link_with_icon__link {
        text-decoration: none;
    }

.link_with_icon__text {
        color: var(--text-main-text-main-default);
        font-size: 14px;
        font-weight: 600;
        margin-left: 12px;
    }

.actions {
    padding: 32px 0 32px 16px;
    display: inline-block;
    align-items: center;
}

.actions--grid {
        display: grid;
        grid-gap: 16px;
    }

.actions--buttons {
        grid-template-columns: 1fr 1fr 1fr;
    }

.actions--icons {
        grid-template-columns: 1fr 1fr;
    }

.actions--allowlist {
        width: 618px;
    }

@media (max-width: 640px) {

.actions--allowlist {
            width: 100%
    }
        }

.actions--user-rules {
        grid-gap: 32px;
        grid-template-columns: 504px 64px;
    }

@media (max-width: 640px) {

.actions--user-rules {
            width: 100%;
            grid-template-columns: 6fr 1fr
    }
        }

.actions--fullscreen-user-rules {
        grid-template-columns: 6fr 6fr 1fr;
        padding: 28px 40px;
    }

@media (max-width: 640px) {

.actions--fullscreen-user-rules {
            grid-template-columns: 1fr 6fr 1fr
    }
        }

.actions__saving {
        position: relative;
    }

.actions__btn {
        position: relative;
    }

.actions__btn--icon {
            background-color: transparent;
            border: 0;
            padding: 0;
            cursor: pointer;
            width: auto;
        }

.actions__btn--icon:hover {
                background-color: var(--fills-backgrounds-page-background-hovered);
            }

.actions__btn--active .icon {
                background-color: var(--fills-backgrounds-page-background-pressed);
            }

.actions__btn--saving {
            width: 100%;
        }

.actions__input-file {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
    }

.actions__input-file:focus + .links-menu__item {
            outline: 2px solid var(--outline);
        }

.actions__label {
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        min-height: 40px;
        width: -moz-fit-content;
        width: fit-content;
    }

.actions__title {
        display: none;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin: auto 8px auto 0;
    }

@media (min-width: 640px) {

.actions__title {
            display: block
    }
        }

.actions__control {
        margin: auto 0;
    }

select:focus {
    outline: none;
}

.ReactModal__Overlay {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5)!important;
}

.ReactModal__Content--after-open {
    position: static!important;
    min-width: 300px;
    background-color: var(--fills-backgrounds-page-background-default)!important;
}

.ReactModal__Content--after-open[\\:has\\(.modal--scrollable\\)] {
        height: 100%;
    }

@media (min-height: 1090px) {

.ReactModal__Content--after-open[\\:has\\(.modal--scrollable\\)] {
            height: auto
    }
        }

.ReactModal__Content--after-open:has(.modal--scrollable) {
        height: 100%;
    }

@media (min-height: 1090px) {

.ReactModal__Content--after-open[\\:has\\(.modal--scrollable\\)] {
            height: auto
    }

.ReactModal__Content--after-open:has(.modal--scrollable) {
            height: auto
    }
        }

@media (color-index: 48) {

.ReactModal__Content--after-open {
        border: 1px solid var(--gray900)!important
}
    }

@media (color: 48842621) {

.ReactModal__Content--after-open {
        border: 1px solid var(--gray900)!important
}
    }

@media (prefers-color-scheme: dark) {

.ReactModal__Content--after-open {
        border: 1px solid var(--gray900)!important
}
    }

@media (min-width: 640px) {

.ReactModal__Content--after-open {
        width: 600px
}

        .ReactModal__Content--after-open[\\:has\\(.modal--scrollable\\)] {
            max-height: 80%;
        }

        .ReactModal__Content--after-open:has(.modal--scrollable) {
            max-height: 80%;
        }
    }

@media (color-index: 48) {

.ace_cursor {
        color: var(--gray300)!important
}
    }

@media (color: 48842621) {

.ace_cursor {
        color: var(--gray300)!important
}
    }

@media (prefers-color-scheme: dark) {

.ace_cursor {
        color: var(--gray300)!important
}
    }

.ace_content {
    color: var(--text-main-text-main-default)!important;
    background-color: var(--fills-backgrounds-page-background-default)!important;
}


.light-mode {
    color-scheme: light;
}


.light-mode .ReactModal__Content--after-open {
        border: 0!important;
    }


.light-mode .desc {
        color: var(--gray-base);
    }


.light-mode .ace_cursor {
        color: var(--black)!important;
    }

.dark-mode {
    color-scheme: dark;
}

.dark-mode .ReactModal__Content--after-open {
        border: 1px solid var(--gray700)!important;
    }

.dark-mode .desc {
        color: var(--gray300);
    }

.dark-mode .ace_cursor {
        color: var(--gray300)!important;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 91623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 100%;
    padding: 0;
    max-width: 600px;
    min-width: 330px;
    overflow-y: auto;
    background-color: var(--fills-backgrounds-page-background-default);
}

    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }

    .modal__title {
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 12px;
        width: 100%;
    }

    .modal__subtitle {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        width: 100%;
    }

    .modal__subtitle--one-line {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

    .modal__close {
        margin-top: -18px;
        margin-right: -18px;
    }

    .modal__close .icon {
            width: 24px;
            height: 24px;
            color: var(--gray700);
        }

    .modal__content {
        width: 100%;
        padding: 32px 32px 0;
        overflow-x: hidden;

        background:
            /* shadow cover bottom */
            linear-gradient(
                rgba(255, 255, 255, 0),
                var(--fills-backgrounds-page-background-default) 50%
            ) center bottom,

            /* shadow bottom */
            linear-gradient(
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0.1)
            ) center bottom;

        background-repeat: no-repeat;
        background-size: 100% 24px, 100% 16px;
        background-attachment: local, scroll;
    }

    .modal--scrollable {
        overflow-y: hidden;
    }

    /* show scrollbar only for scrollable content. AG-34984 */

    .modal--scrollable .modal__content {
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: var(--stroke-inputs-inactive-input-stroke-default) var(--fills-backgrounds-page-background-default);
        }

    .modal--scrollable .modal__subtitle {
            margin-bottom: 12px;
        }

    .modal__actions {
        width: 100%;
        padding: 24px 32px 32px;
        display: flex;
        align-items: center;
    }

    .modal__actions--centered {
            width: 100%;
            justify-content: center;
        }

    .modal__desc {
        font-size: 14px;
        line-height: 22px;
    }

    .modal__btn {
        width: 50%;
        max-width: 300px;
        margin: 0 24px 0 0;
    }

    .modal__btn--confirm {
            min-width: 100px;
        }

    .modal__btn:last-child {
            margin-right: 0;
        }

    .modal__filter {
        font-size: 16px;
        line-height: 24px;
    }

    .modal__filter--info {
            font-size: 16px;
            line-height: 24px;
            padding: 20px 0 24px;
        }

    .modal__filter--info-item {
                margin-right: 4px;
            }

    .modal__filter--info-item--url {
                    color: var(--text-main-text-main-default);
                    word-break: break-all;
                }

    .modal__filter--trusted-desc {
            color: var(--text-description-description-default);
            font-size: 14px;
            line-height: 18px;
            padding-left: 32px;
        }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.setting {
    display: flex;
    justify-content: space-between;
    align-items: initial;
    position: relative;
    padding: 16px;
    min-height: 52px;
}

    .setting.group {
        padding: 16px;
    }

    @media (min-width: 640px) {

    .setting.group {
            justify-content: flex-start;
            padding: 0 16px 0 0
    }
        }

    .setting--disabled .textarea,
        .setting--disabled .input__in {
            pointer-events: none;
            cursor: default;
            opacity: 0.5;
        }

    .setting__area {
        display: flex;
        width: 80%;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        outline: none;
        text-align: left;
        background-color: transparent;
        transition: 0.3s ease background-color;
    }

    @media (min-width: 640px) {

    .setting__area {
            padding: 15px 0 15px 16px
    }

            .setting__area_group {
                flex-grow: 1;
                border-radius: 8px;
            }
        }

    .setting__area:hover {
            background-color: var(--fills-backgrounds-page-background-hovered);
        }

    .setting__inline-control {
        margin-left: 16px;
        height: auto;
    }

    @media (min-width: 640px) {
            .setting__inline-control_group {
                margin-left: 0;
            }

                .setting__inline-control_group .checkbox__label {
                    padding: 16px;
                }

                    .setting__inline-control_group .checkbox__label:before {
                        top: 0;
                    }
        }

    .setting__container {
        display: flex;
    }

    .setting__container--vertical {
            flex-direction: column;
            width: 100%;
        }

    .setting__container--horizontal {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

    .setting__container--inline {
            display: block;
        }

    .setting__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 530px;
    }

    @media (max-width: 640px) {

    .setting__info {
            min-width: 40%
    }
        }

    .setting__title {
        font-weight: 500;
        font-size: 16px;
        color: var(--text-main-text-main-default);
        line-height: 21px;
        word-break: break-word;
    }

    .setting__title--search {
            line-height: 24px;
        }

    .setting__desc {
        line-height: 18px;
        padding: 4px 8px 0 0;
        color: var(--text-description-description-default);
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
    }

    .setting__desc a {
            color: var(--text-links-link-default);
            text-decoration: underline;
        }

    .setting__desc a.focus-visible {
                outline: none;
                box-shadow: inset 0 0 0 1px var(--outline);
            }

    .setting__desc a:focus-visible {
                outline: none;
                box-shadow: inset 0 0 0 1px var(--outline);
            }

    .setting__desc-item {
        margin-bottom: 13px;
    }

    .setting__desc-item:last-child {
            margin-bottom: 0;
        }

    .setting__tags {
        display: flex;
        font-size: 13px;
        flex-wrap: wrap;
    }

    .setting__icon {
        color: var(--stroke-icons-product-icon-default);
        margin-right: 20px;
    }

    .setting__back {
        color: var(--stroke-icons-gray-icons-default);
        position: absolute;
        padding-top: 14px;
        left: -18px;
        top: 33px;
    }

    @media (min-width: 640px) {

    .setting__back {
            top: 0
    }
        }

    .setting__alert-desc,
    .setting__alert-link {
        color: var(--text-links-error-link-default);
    }

    .setting__checkbox {
        display: none;
    }

.setting-checkbox {
    display: block;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--t3) background-color;
    width: 100%;
}

.setting-checkbox--button {
        background-color: transparent;
        border: 0;
        text-align: left;
        padding: 0;
        width: 100%;
    }

.setting-checkbox.disabled {
        opacity: .5;
        pointer-events: none;
    }

.setting-checkbox:hover {
        background-color: var(--fills-backgrounds-page-background-hovered);
    }

.setting-checkbox .checkbox__label:hover {
        background-color: transparent;
    }
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 48062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96069);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22263);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31587);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_icons_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53315);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_buttons_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2280);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3557);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_button_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5532);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_setting_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97922);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_modal_pcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91623);
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_icons_pcss__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_buttons_pcss__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_button_pcss__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_setting_pcss__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_modal_pcss__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 87695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ EMPTY_STRING),
/* harmony export */   L: () => (/* binding */ LF),
/* harmony export */   S: () => (/* binding */ SimpleRegex),
/* harmony export */   W: () => (/* binding */ WILDCARD),
/* harmony export */   _: () => (/* binding */ __assign),
/* harmony export */   a: () => (/* binding */ __spreadArray),
/* harmony export */   b: () => (/* binding */ SEPARATOR),
/* harmony export */   c: () => (/* binding */ __extends),
/* harmony export */   d: () => (/* binding */ stringArraysEquals),
/* harmony export */   e: () => (/* binding */ stringArraysHaveIntersection),
/* harmony export */   f: () => (/* binding */ fastHash),
/* harmony export */   g: () => (/* binding */ __awaiter),
/* harmony export */   h: () => (/* binding */ hasSpaces),
/* harmony export */   i: () => (/* binding */ isString),
/* harmony export */   j: () => (/* binding */ __generator),
/* harmony export */   k: () => (/* binding */ findNextLineBreakIndex),
/* harmony export */   l: () => (/* binding */ __makeTemplateObject),
/* harmony export */   o: () => (/* binding */ indexOfAny),
/* harmony export */   r: () => (/* binding */ replaceAll),
/* harmony export */   s: () => (/* binding */ splitByDelimiterWithEscapeCharacter),
/* harmony export */   u: () => (/* binding */ unescapeChar)
/* harmony export */ });
/* unused harmony exports m, n */
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ErrorStatusCodes;
(function (ErrorStatusCodes) {
    ErrorStatusCodes[ErrorStatusCodes["ComplexRegex"] = 1001] = "ComplexRegex";
    ErrorStatusCodes[ErrorStatusCodes["RuleLimit"] = 1002] = "RuleLimit";
    ErrorStatusCodes[ErrorStatusCodes["RegexpRuleLimit"] = 1003] = "RegexpRuleLimit";
    ErrorStatusCodes[ErrorStatusCodes["RemoveparamRegexpIsNotSupported"] = 1004] = "RemoveparamRegexpIsNotSupported";
    ErrorStatusCodes[ErrorStatusCodes["RemoveparamInversionIsNotSupported"] = 1005] = "RemoveparamInversionIsNotSupported";
})(ErrorStatusCodes || (ErrorStatusCodes = {}));
var EMPTY_STRING = '';
var SEPARATOR = '|';
var SPACE = ' ';
var WILDCARD = '*';
var LF = '\n';
var CR = '\r';
var FF = '\f';

/**
 * Splits the string by the delimiter, ignoring escaped delimiters
 * and without tokenizing.
 * Works for plain strings that don't include string representation of
 * complex entities, e.g $replace modifier values.
 *
 * @param string - string to split
 * @param delimiter - delimiter
 * @param escapeCharacter - escape character
 * @param preserveEmptyTokens - if true, preserve empty parts
 * @param shouldUnescape - if true, unescape characters
 * @return array of string parts
 */
function splitByDelimiterWithEscapeCharacter(string, delimiter, escapeCharacter, preserveEmptyTokens, shouldUnescape) {
    if (shouldUnescape === void 0) { shouldUnescape = true; }
    if (!string) {
        return [];
    }
    if (string.startsWith(delimiter)) {
        // eslint-disable-next-line no-param-reassign
        string = string.substring(1);
    }
    var words = [];
    if (!string.includes(escapeCharacter)) {
        words = string.split(delimiter);
        if (!preserveEmptyTokens) {
            words = words.filter(function (word) { return !!word; });
        }
        return words;
    }
    var chars = [];
    var makeWord = function () {
        var word = chars.join('');
        words.push(word);
        chars = [];
    };
    for (var i = 0; i < string.length; i += 1) {
        var char = string.charAt(i);
        var isLastChar = i === (string.length - 1);
        if (char === delimiter) {
            var isEscapedChar = i > 0 && string[i - 1] === escapeCharacter;
            if (isEscapedChar) {
                if (shouldUnescape) {
                    chars.splice(chars.length - 1, 1);
                }
                chars.push(char);
            }
            else {
                makeWord();
            }
            if (isLastChar) {
                makeWord();
            }
        }
        else if (isLastChar) {
            chars.push(char);
            makeWord();
        }
        else {
            chars.push(char);
        }
    }
    if (!preserveEmptyTokens) {
        words = words.filter(function (word) { return !!word; });
    }
    return words;
}
/**
 * Checks if the specified string starts with a substr at the specified index.
 *
 * @param str - String to check
 * @param startIndex - Index to start checking from
 * @param substr - Substring to check
 * @return boolean true if it does start
 */
function startsAtIndexWith(str, startIndex, substr) {
    if (str.length - startIndex < substr.length) {
        return false;
    }
    for (var i = 0; i < substr.length; i += 1) {
        if (str.charAt(startIndex + i) !== substr.charAt(i)) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if str has unquoted substr
 *
 * @param str
 * @param substr
 */
function hasUnquotedSubstring(str, substr) {
    var quotes = ['"', "'", '/'];
    if (!str.includes(substr)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (indexOfAny(str, quotes) === -1) {
        return true;
    }
    var stack = [];
    for (var i = 0; i < str.length; i += 1) {
        var cursor = str[i];
        if (stack.length === 0) {
            if (startsAtIndexWith(str, i, substr)) {
                return true;
            }
        }
        if (quotes.indexOf(cursor) >= 0
            && (i === 0 || str[i - 1] !== '\\')) {
            var last = stack.pop();
            if (!last) {
                stack.push(cursor);
            }
            else if (last !== cursor) {
                stack.push(last);
                stack.push(cursor);
            }
        }
    }
    return false;
}
/**
 * djb2 hash algorithm
 *
 * NOTE: This version uses some bit operands to exclude overflow MAX_SAFE_INTEGER
 * (and moreover, exclude overflow 2^32).
 *
 * @see {@link https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765}
 *
 * @param str string to get hash
 * @return {number} hash
 */
function fastHash(str) {
    if (str.length === 0) {
        return 0;
    }
    var hash = 5381;
    for (var i = 0; i < str.length; i += 1) {
        hash = hash * 33 ^ str.charCodeAt(i);
    }
    return hash >>> 0;
}
/**
 * Look for any symbol from "chars" array starting at "start" index or from the start of the string
 *
 * @param str   String to search
 * @param chars Chars to search for
 * @param start Start index (optional, inclusive)
 * @return int Index of the element found or -1 if not
 */
function indexOfAny(str, chars, start) {
    if (start === void 0) { start = 0; }
    if (str.length <= start) {
        return -1;
    }
    for (var i = start; i < str.length; i += 1) {
        var c = str.charAt(i);
        if (chars.indexOf(c) > -1) {
            return i;
        }
    }
    return -1;
}
/**
 * Replaces all occurences of find with replace in str
 *
 * @param str
 * @param find
 * @param replace
 */
function replaceAll(str, find, replace) {
    if (!str) {
        return str;
    }
    return str.split(find).join(replace);
}
/**
 * Checks if arrays are equal
 *
 * @param left array
 * @param right array
 * @return {boolean} true on equality
 */
function stringArraysEquals(left, right) {
    if (!left || !right) {
        return !left && !right;
    }
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i += 1) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if arrays have an intersection
 *
 * @param left array
 * @param right array
 * @return {boolean} true on equality
 */
function stringArraysHaveIntersection(left, right) {
    if (!left || !right) {
        return true;
    }
    for (var i = 0; i < left.length; i += 1) {
        if (right.includes(left[i])) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if string contains spaces
 *
 * @param str String to check
 * @returns `true` if string contains spaces, `false` otherwise
 */
function hasSpaces(str) {
    return str.includes(SPACE);
}
/**
 * Check if the given value is a string
 *
 * @param value Value to check
 * @returns `true` if value is a string, `false` otherwise
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * Unescapes the specified character in the string
 *
 * @param str String to escape
 * @param char Character to escape
 * @returns The string with the specified character unescaped
 */
function unescapeChar(str, char) {
    return str.replace("\\".concat(char), char);
}
/**
 * Finds the next line break index in the string starting from the specified index.
 * Supports LF, CR, FF and CRLF line breaks.
 *
 * @param str String to search in.
 * @param startIndex  Start index. Default is 0.
 * @returns A tuple with the line break index and the line break length.
 * If the line break is not found, returns the string length and 0.
 */
function findNextLineBreakIndex(str, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var length = str.length;
    var offset = startIndex;
    while (offset < length) {
        var char = str[offset];
        if (char === LF || char === FF) {
            return [offset, 1];
        }
        if (char === CR) {
            return str[offset + 1] === LF ? [offset, 2] : [offset, 1];
        }
        offset += 1;
    }
    return [length, 0];
}

// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/regexp
// should be escaped . * + ? ^ $ { } ( ) | [ ] / \
// except of * | ^
var specialCharacters = ['.', '+', '?', '$', '{', '}', '(', ')', '[', ']', '/', '\\'];
var reSpecialCharacters = new RegExp("[".concat(specialCharacters.join('\\'), "]"), 'g');
var reSpecialCharactersFull = /[.*+?^${}()|[\]\\]/g;
var reEscapedSpecialCharactersFull = /\\[.*+?^${}()|[\]\\]/g;
var protocolMarker = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["://"], [":\\/\\/"])));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings
var escapeSequence = {
    n: '\n',
    r: '\r',
    t: '\t',
    b: '\b',
    f: '\f',
    v: '\v',
};
/**
 * Class with static helper methods for working with basic filtering rules patterns.
 * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules
 */
var SimpleRegex = /** @class */ (function () {
    function SimpleRegex() {
    }
    /**
     * Extracts the shortcut from the rule's pattern.
     * Shortcut is the longest substring of the pattern that does not contain
     * any special characters.
     *
     * Please note, that the shortcut is always lower-case!
     *
     * @param pattern - network rule's pattern.
     * @returns the shortcut or the empty string if we could not extract any.
     */
    SimpleRegex.extractShortcut = function (pattern) {
        if (pattern.startsWith(this.MASK_REGEX_RULE) && pattern.endsWith(this.MASK_REGEX_RULE)) {
            return this.extractRegexpShortcut(pattern);
        }
        return this.extractBasicShortcut(pattern);
    };
    /**
     * Searches for the longest substring of the pattern that
     * does not contain any special characters: *,^,|.
     *
     * @param pattern - network rule's pattern.
     * @returns the shortcut or the empty string
     */
    SimpleRegex.extractBasicShortcut = function (pattern) {
        var longest = '';
        var parts = pattern.split(this.rePatternSpecialCharacters);
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part.length > longest.length) {
                longest = part;
            }
        }
        return (longest || '').toLowerCase();
    };
    /**
     * Searches for a shortcut inside of a regexp pattern.
     * Shortcut in this case is a longest string with no REGEX special characters.
     * Also, we discard complicated regexps right away.
     *
     * @param pattern - network rule's pattern (regexp).
     * @returns the shortcut or the empty string
     */
    SimpleRegex.extractRegexpShortcut = function (pattern) {
        var reText = pattern.substring(this.MASK_REGEX_RULE.length, pattern.length - this.MASK_REGEX_RULE.length);
        if (reText.length === 0) {
            // The rule is too short, doing nothing
            return '';
        }
        if (reText.indexOf('?') >= 0) {
            // Do not mess with complex expressions which use lookahead
            // And with those using ? special character
            // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/978
            return '';
        }
        // Remove protocol part to avoid useless shortcuts like "http"
        var protocolIndex = reText.indexOf(protocolMarker);
        if (protocolIndex > -1) {
            reText = reText.substring(protocolIndex + protocolMarker.length);
        }
        var currentLongest = '';
        var token = '';
        for (var i = 0; i < reText.length; i += 1) {
            var char = reText[i];
            if (char === '\\') {
                // Don't break token on escapes
                continue;
            }
            if (SimpleRegex.isValidRegexpShortcutChar(reText, i)) {
                token += char;
                if (i !== reText.length - 1) {
                    continue;
                }
            }
            if (token.length > currentLongest.length) {
                currentLongest = token;
            }
            token = '';
        }
        return currentLongest.toLowerCase();
    };
    /**
     * patternToRegexp is a helper method for creating regular expressions from the simple
     * wildcard-based syntax which is used in basic filters:
     * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules
     *
     * @param pattern - basic rule pattern
     * @returns regular expression
     */
    SimpleRegex.patternToRegexp = function (pattern) {
        if (pattern === this.MASK_START_URL
            || pattern === this.MASK_PIPE
            || pattern === this.MASK_ANY_CHARACTER
            || pattern === '') {
            return this.REGEX_ANY_CHARACTER;
        }
        if (pattern.startsWith(this.MASK_REGEX_RULE) && pattern.endsWith(this.MASK_REGEX_RULE)) {
            // This is a regex rule, just remove the regex markers
            return pattern.substring(this.MASK_REGEX_RULE.length, pattern.length - this.MASK_REGEX_RULE.length);
        }
        // Escape special characters except of * | ^
        var regex = pattern.replace(reSpecialCharacters, '\\$&');
        // Now escape "|" characters but avoid escaping them in the special places
        if (regex.startsWith(this.MASK_START_URL)) {
            regex = regex.substring(0, this.MASK_START_URL.length)
                + replaceAll(regex.substring(this.MASK_START_URL.length, regex.length - this.MASK_PIPE.length), this.MASK_PIPE, "\\".concat(this.MASK_PIPE))
                + regex.substring(regex.length - this.MASK_PIPE.length);
        }
        else {
            regex = regex.substring(0, this.MASK_PIPE.length)
                + replaceAll(regex.substring(this.MASK_PIPE.length, regex.length - this.MASK_PIPE.length), this.MASK_PIPE, "\\".concat(this.MASK_PIPE))
                + regex.substring(regex.length - this.MASK_PIPE.length);
        }
        // Replace special URL masks
        regex = replaceAll(regex, this.MASK_ANY_CHARACTER, this.REGEX_ANY_CHARACTER);
        regex = replaceAll(regex, this.MASK_SEPARATOR, this.REGEX_SEPARATOR);
        // Replace start URL and pipes
        if (regex.startsWith(this.MASK_START_URL)) {
            regex = this.REGEX_START_URL + regex.substring(this.MASK_START_URL.length);
        }
        else if (regex.startsWith(this.MASK_PIPE)) {
            regex = this.REGEX_START_STRING + regex.substring(this.MASK_PIPE.length);
        }
        if (regex.endsWith(this.MASK_PIPE)) {
            regex = regex.substring(0, regex.length - this.MASK_PIPE.length) + this.REGEX_END_STRING;
        }
        return regex;
    };
    /**
     * Creates RegExp object from string in '/reg_exp/gi' format
     *
     * @param str
     */
    SimpleRegex.patternFromString = function (str) {
        var parts = splitByDelimiterWithEscapeCharacter(str, '/', '\\', true);
        var modifiers = (parts[1] || '');
        if (modifiers.indexOf('g') < 0) {
            modifiers += 'g';
        }
        return new RegExp(parts[0], modifiers);
    };
    /**
     * Escapes characters with special meaning inside a regular expression.
     *
     * @param str
     * @param searchPattern - Pattern for detecting special characters. Optional.
     */
    SimpleRegex.escapeRegexSpecials = function (str, searchPattern) {
        if (searchPattern === void 0) { searchPattern = reSpecialCharactersFull; }
        return str.replace(searchPattern, '\\$&');
    };
    /**
     * Unescapes characters with special meaning inside a regular expression.
     *
     * @param str
     * @param searchPattern - Pattern for detecting special characters. Optional.
     */
    SimpleRegex.unescapeRegexSpecials = function (str, searchPattern) {
        if (searchPattern === void 0) { searchPattern = reEscapedSpecialCharactersFull; }
        return str.replace(searchPattern, function (match) { return match.substring(1); });
    };
    /**
     * Check if pattern is Regex
     */
    SimpleRegex.isRegexPattern = function (str) {
        return str.startsWith('/') && str.endsWith('/');
    };
    /**
     * Unescapes special characters in a string
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings
     */
    SimpleRegex.unescapeSpecials = function (str) {
        var keys = Object.keys(escapeSequence).join('|');
        var regex = new RegExp("\\\\(".concat(keys, ")"), 'g');
        return str.replace(regex, function (match, group) {
            return escapeSequence[group];
        });
    };
    /**
     * Matching the beginning of an address. With this character you don't
     * have to specify a particular protocol and subdomain in address mask.
     * It means, || stands for http://*., https://*., ws://*., wss://*. at once.
     */
    SimpleRegex.MASK_START_URL = '||';
    /**
     * REGEX_START_URL corresponds to MASK_START_URL
     */
    SimpleRegex.REGEX_START_URL = '^(http|https|ws|wss)://([a-z0-9-_.]+\\.)?';
    /**
     * A pointer to the beginning or the end of address. The value depends on the
     * character placement in the mask. For example, a rule swf| corresponds
     * to http://example.com/annoyingflash.swf , but not to http://example.com/swf/index.html.
     * |http://example.org corresponds to http://example.org,
     * but not to http://domain.com?url=http://example.org.
     */
    SimpleRegex.MASK_PIPE = '|';
    /**
     * REGEX_END_STRING corresponds to MASK_PIPE if it is in the end of a pattern.
     */
    SimpleRegex.REGEX_END_STRING = '$';
    /**
     * REGEX_START_STRING corresponds to MASK_PIPE if it is in the beginning of a pattern.
     */
    SimpleRegex.REGEX_START_STRING = '^';
    /**
     * Separator character mark. Separator character is any character,
     * but a letter, a digit, or one of the following: _ - .
     */
    SimpleRegex.MASK_SEPARATOR = '^';
    /**
     * REGEX_SEPARATOR corresponds to MASK_SEPARATOR
     */
    SimpleRegex.REGEX_SEPARATOR = '([^ a-zA-Z0-9.%_-]|$)';
    /**
     * This is a wildcard character. It is used to represent "any set of characters".
     * This can also be an empty string or a string of any length.
     */
    SimpleRegex.MASK_ANY_CHARACTER = '*';
    /**
     * Path separator
     */
    SimpleRegex.MASK_BACKSLASH = '/';
    /**
     * REGEX_ANY_CHARACTER corresponds to MASK_ANY_CHARACTER.
     */
    SimpleRegex.REGEX_ANY_CHARACTER = '.*';
    /**
     * Enclose regex in two backslashes to mark a regex rule:
     * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#regular-expressions-support
     */
    SimpleRegex.MASK_REGEX_RULE = '/';
    /**
     *  Regex for matching special characters in modifier regex pattern
     */
    SimpleRegex.reModifierPatternSpecialCharacters = /[[\],\\]/g;
    /**
      *  Regex for matching escaped special characters in modifier regex pattern
      */
    SimpleRegex.reModifierPatternEscapedSpecialCharacters = /\\[[\],\\]/g;
    /**
     * If string starts with exclamation mark "!" we consider it as comment
     */
    SimpleRegex.MASK_COMMENT = '!';
    /**
     * Min length of rule shortcut
     * This value has been picked as a result of performance experiments
     */
    SimpleRegex.MIN_SHORTCUT_LENGTH = 3;
    /**
     * Min length of generic rule shortcut
     */
    SimpleRegex.MIN_GENERIC_RULE_LENGTH = 4;
    /** Regex with basic matching pattern special characters */
    SimpleRegex.rePatternSpecialCharacters = new RegExp('[*^|]');
    /**
     * Checks if char is valid for regexp shortcut – is alphanumeric or escaped period or forward slash
     *
     * @param str string
     * @param i index of char
     * @returns  true if char is valid for regexp shortcut
     */
    SimpleRegex.isValidRegexpShortcutChar = function (str, i) {
        var charCode = str.charCodeAt(i);
        if (SimpleRegex.isAlphaNumericChar(charCode)) {
            return true;
        }
        // Escaped period or escaped forward slash are allowed in regexp shortcut
        if (i > 0 && str[i - 1] === '\\') {
            if (charCode === 46 || charCode === 47) {
                return true;
            }
        }
        return false;
    };
    /**
     * Checks if char is alpha-numeric
     * @param charCode - char code
     * @returns true if char is alpha-numeric
     */
    SimpleRegex.isAlphaNumericChar = function (charCode) {
        return (charCode > 47 && charCode < 58) // numeric (0-9)
            || (charCode > 64 && charCode < 91) // upper alpha (A-Z)
            || (charCode > 96 && charCode < 123); // lower alpha (a-z)
    };
    return SimpleRegex;
}());
var templateObject_1;




/***/ }),

/***/ 14371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ format)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isDate/index.js


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js


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
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isValid/index.js



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
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000;
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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
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
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

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
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
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
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const lightFormatters = (formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
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

var formatters_formatters = {
  // Era
  G: function G(date, token, localize) {
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
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);

    // Padding
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
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
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
  q: function q(date, token, localize) {
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
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return lightFormatters.M(date, token);
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
  L: function L(date, token, localize) {
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
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
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
  e: function e(date, token, localize, options) {
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
  c: function c(date, token, localize, options) {
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
  i: function i(date, token, localize) {
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
  a: function a(date, token, localize) {
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
  b: function b(date, token, localize) {
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
  B: function B(date, token, localize) {
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
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
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
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
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
  x: function x(date, token, _localize, options) {
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
  O: function O(date, token, _localize, options) {
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
  z: function z(date, token, _localize, options) {
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
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
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
/* harmony default export */ const format_formatters = (formatters_formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
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
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
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
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
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
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
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
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/protectedTokens/index.js
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
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
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
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const _lib_formatDistance = (formatDistance);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

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
/* harmony default export */ const _lib_formatLong = (formatLong);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const _lib_formatRelative = (formatRelative);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
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
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

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
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
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
/* harmony default export */ const _lib_localize = (localize);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


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
    valueCallback: function valueCallback(value) {
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
    valueCallback: function valueCallback(index) {
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
/* harmony default export */ const _lib_match = (match);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js





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
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/defaultLocale/index.js

/* harmony default export */ const defaultLocale = (en_US);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/format/index.js










 // This RegExp consists of three parts separated by `|`:
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
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
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
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
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
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
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
 * |                                 | SSS     | 000, 001, ..., 999                |       |
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
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = format_longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
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
    var formatter = format_formatters[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 52345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PA: () => (/* binding */ mobxreact_esm_observer)
});

// UNUSED EXPORTS: MobXProviderContext, Observer, PropTypes, Provider, disposeOnUnmount, enableStaticRendering, inject, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalObservable, useLocalStore, useObserver, useStaticRendering

// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(52905);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/assertEnvironment.js


if (!react.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx_esm/* makeObservable */.Gn) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(55285);
;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/observerBatching.js

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (false) {}
    }
    (0,mobx_esm/* configure */.jK)({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (false) {}
    return true;
};

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/printDebugValue.js

function printDebugValue(v) {
    return (0,mobx_esm/* getDependencyTree */.yl)(v);
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/UniversalFinalizationRegistry.js
var REGISTRY_FINALIZE_AFTER = 10000;
var REGISTRY_SWEEP_INTERVAL = 10000;
var TimerBasedFinalizationRegistry = /** @class */ (function () {
    function TimerBasedFinalizationRegistry(finalize) {
        var _this = this;
        Object.defineProperty(this, "finalize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: finalize
        });
        Object.defineProperty(this, "registrations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "sweepTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Bound so it can be used directly as setTimeout callback.
        Object.defineProperty(this, "sweep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (maxAge) {
                if (maxAge === void 0) { maxAge = REGISTRY_FINALIZE_AFTER; }
                // cancel timeout so we can force sweep anytime
                clearTimeout(_this.sweepTimeout);
                _this.sweepTimeout = undefined;
                var now = Date.now();
                _this.registrations.forEach(function (registration, token) {
                    if (now - registration.registeredAt >= maxAge) {
                        _this.finalize(registration.value);
                        _this.registrations.delete(token);
                    }
                });
                if (_this.registrations.size > 0) {
                    _this.scheduleSweep();
                }
            }
        });
        // Bound so it can be exported directly as clearTimers test utility.
        Object.defineProperty(this, "finalizeAllImmediately", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function () {
                _this.sweep(0);
            }
        });
    }
    // Token is actually required with this impl
    Object.defineProperty(TimerBasedFinalizationRegistry.prototype, "register", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target, value, token) {
            this.registrations.set(token, {
                value: value,
                registeredAt: Date.now()
            });
            this.scheduleSweep();
        }
    });
    Object.defineProperty(TimerBasedFinalizationRegistry.prototype, "unregister", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (token) {
            this.registrations.delete(token);
        }
    });
    Object.defineProperty(TimerBasedFinalizationRegistry.prototype, "scheduleSweep", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.sweepTimeout === undefined) {
                this.sweepTimeout = setTimeout(this.sweep, REGISTRY_SWEEP_INTERVAL);
            }
        }
    });
    return TimerBasedFinalizationRegistry;
}());

var UniversalFinalizationRegistry = typeof FinalizationRegistry !== "undefined"
    ? FinalizationRegistry
    : TimerBasedFinalizationRegistry;

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/observerFinalizationRegistry.js

var observerFinalizationRegistry = new UniversalFinalizationRegistry(function (adm) {
    var _a;
    (_a = adm.reaction) === null || _a === void 0 ? void 0 : _a.dispose();
    adm.reaction = null;
});

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function staticRendering_enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useObserver.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





function observerComponentNameFor(baseComponentName) {
    return "observer".concat(baseComponentName);
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function objectToBeRetainedByReactFactory() {
    return new ObjectToBeRetainedByReact();
}
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var _a = __read(react.useState(objectToBeRetainedByReactFactory), 1), objectRetainedByReact = _a[0];
    // Force update, see #2982
    var _b = __read(react.useState(), 2), setState = _b[1];
    var forceUpdate = function () { return setState([]); };
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var admRef = react.useRef(null);
    if (!admRef.current) {
        // First render
        admRef.current = {
            reaction: null,
            mounted: false,
            changedBeforeMount: false
        };
    }
    var adm = admRef.current;
    if (!adm.reaction) {
        // First render or component was not committed and reaction was disposed by registry
        adm.reaction = new mobx_esm/* Reaction */.qT(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (adm.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                adm.changedBeforeMount = true;
            }
        });
        observerFinalizationRegistry.register(objectRetainedByReact, adm, adm);
    }
    react.useDebugValue(adm.reaction, printDebugValue);
    react.useEffect(function () {
        observerFinalizationRegistry.unregister(adm);
        adm.mounted = true;
        if (adm.reaction) {
            if (adm.changedBeforeMount) {
                // Got a change before mount, force an update
                adm.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            adm.reaction = new mobx_esm/* Reaction */.qT(observerComponentNameFor(baseComponentName), function () {
                // We've definitely already been mounted at this point
                forceUpdate();
            });
            forceUpdate();
        }
        return function () {
            adm.reaction.dispose();
            adm.reaction = null;
            adm.mounted = false;
            adm.changedBeforeMount = false;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    adm.reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/observer.js



var warnObserverOptionsDeprecated = true;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
// Using react-is had some issues (and operates on elements, not on types), see #608 / #609
var ReactForwardRefSymbol = hasSymbol
    ? Symbol.for("react.forward_ref")
    : typeof react.forwardRef === "function" && (0,react.forwardRef)(function (props) { return null; })["$$typeof"];
var ReactMemoSymbol = hasSymbol
    ? Symbol.for("react.memo")
    : typeof react.memo === "function" && (0,react.memo)(function (props) { return null; })["$$typeof"];
// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, 
// TODO remove in next major
options) {
    var _a;
    if (false) {}
    if (ReactMemoSymbol && baseComponent["$$typeof"] === ReactMemoSymbol) {
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    }
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var useForwardRef = (_a = options === null || options === void 0 ? void 0 : options.forwardRef) !== null && _a !== void 0 ? _a : false;
    var render = baseComponent;
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    // If already wrapped with forwardRef, unwrap,
    // so we can patch render and apply memo
    if (ReactForwardRefSymbol && baseComponent["$$typeof"] === ReactForwardRefSymbol) {
        useForwardRef = true;
        render = baseComponent["render"];
        if (typeof render !== "function") {
            throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        }
    }
    var observerComponent = function (props, ref) {
        return useObserver(function () { return render(props, ref); }, baseComponentName);
    };
    // Don't set `displayName` for anonymous components,
    // so the `displayName` can be customized by user, see #3192.
    if (baseComponentName !== "") {
        ;
        observerComponent.displayName = baseComponentName;
    }
    // Support legacy context: `contextTypes` must be applied before `memo`
    if (baseComponent.contextTypes) {
        ;
        observerComponent.contextTypes = baseComponent.contextTypes;
    }
    if (useForwardRef) {
        // `forwardRef` must be applied prior `memo`
        // `forwardRef(observer(cmp))` throws:
        // "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))"
        observerComponent = (0,react.forwardRef)(observerComponent);
    }
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    observerComponent = (0,react.memo)(observerComponent);
    copyStaticProperties(baseComponent, observerComponent);
    if (false) {}
    return observerComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true,
    // Don't redefine `displayName`,
    // it's defined as getter-setter pair on `memo` (see #3192).
    displayName: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/ObserverComponent.js

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
if (false) {}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalObservable.js


function useLocalObservable(initializer, annotations) {
    return useState(function () { return observable(initializer(), annotations, { autoBind: true }); })[0];
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useAsObservableSource.js
var useAsObservableSource_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource_useAsObservableSource(current) {
    if (false)
        {}
    var _a = useAsObservableSource_read(useState(function () { return observable(current, {}, { deep: false }); }), 1), res = _a[0];
    runInAction(function () {
        Object.assign(res, current);
    });
    return res;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalStore.js




function useLocalStore(initializer, current) {
    if (false)
        {}
    var source = current && useAsObservableSource(current);
    return useState(function () { return observable(initializer(source), undefined, { autoBind: true }); })[0];
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/index.js
var _a;







observerBatching(react_dom.unstable_batchedUpdates);






var clearTimers = (_a = observerFinalizationRegistry["finalizeAllImmediately"]) !== null && _a !== void 0 ? _a : (function () { });
function es_useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (false) {}
    return useObserverOriginal(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (false) {}
    enableStaticRendering(enable);
}

;// CONCATENATED MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var mobxreact_esm_hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  displayName: 1,
  propTypes: 1
};
function mobxreact_esm_copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!mobxreact_esm_hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx_esm/* $mobx */.BQ || "$mobx"; // BC

var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ")\n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) {
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  }

  if (componentClass["__proto__"] !== react.PureComponent) {
    if (!target.shouldComponentUpdate) {
      target.shouldComponentUpdate = observerSCU;
    } else if (target.shouldComponentUpdate !== observerSCU) {
      // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
    }
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");

  if (componentClass.contextType) {
    makeObservableProp(target, "context");
  }

  var originalRender = target.render;

  if (typeof originalRender !== "function") {
    var _displayName = getDisplayName(target);

    throw new Error("[mobx-react] class component (" + _displayName + ") is missing `render` method." + "\n`observer` requires `render` being a function defined on prototype." + "\n`render = () => {}` or `render = function() {}` is not supported.");
  }

  target.render = function () {
    this.render = isUsingStaticRendering() ? originalRender : createReactiveRender.call(this, originalRender);
    return this.render();
  };

  patch(target, "componentDidMount", function () {
    this[mobxIsUnmounted] = false;

    if (!this.render[mobxAdminProperty]) {
      // Reaction is re-created automatically during render, but a component can re-mount and skip render #3395.
      // To re-create the reaction and re-subscribe to relevant observables we have to force an update.
      react.Component.prototype.forceUpdate.call(this);
    }
  });
  patch(target, "componentWillUnmount", function () {
    if (isUsingStaticRendering()) {
      return;
    }

    var reaction = this.render[mobxAdminProperty];

    if (reaction) {
      reaction.dispose(); // Forces reaction to be re-created on next render

      this.render[mobxAdminProperty] = null;
    } else {
      // Render may have been hot-swapped and/or overridden by a subclass.
      var _displayName2 = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName2 + ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.");
    }

    this[mobxIsUnmounted] = true;
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function createReactiveRender(originalRender) {
  var _this = this;

  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */
  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var boundOriginalRender = originalRender.bind(this);
  var isRenderingPending = false;

  var createReaction = function createReaction() {
    var reaction = new mobx_esm/* Reaction */.qT(initialName + ".render()", function () {
      if (!isRenderingPending) {
        // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.test.tsx)
        // This unidiomatic React usage but React will correctly warn about this so we continue as usual
        // See #85 / Pull #44
        isRenderingPending = true;

        if (_this[mobxIsUnmounted] !== true) {
          var hasError = true;

          try {
            setHiddenProp(_this, isForcingUpdateKey, true);

            if (!_this[skipRenderKey]) {
              react.Component.prototype.forceUpdate.call(_this);
            }

            hasError = false;
          } finally {
            setHiddenProp(_this, isForcingUpdateKey, false);

            if (hasError) {
              reaction.dispose(); // Forces reaction to be re-created on next render

              _this.render[mobxAdminProperty] = null;
            }
          }
        }
      }
    });
    reaction["reactComponent"] = _this;
    return reaction;
  };

  function reactiveRender() {
    var _reactiveRender$mobxA;

    isRenderingPending = false; // Create reaction lazily to support re-mounting #3395

    var reaction = (_reactiveRender$mobxA = reactiveRender[mobxAdminProperty]) != null ? _reactiveRender$mobxA : reactiveRender[mobxAdminProperty] = createReaction();
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        // TODO@major
        // Optimization: replace with _allowStateChangesStart/End (not available in mobx@6.0.0)
        rendering = (0,mobx_esm/* _allowStateChanges */.vx)(false, boundOriginalRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender;
}

function observerSCU(nextProps, nextState) {
  if (isUsingStaticRendering()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, (0,mobx_esm/* createAtom */.MN)("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false; // Why this check? BC?
      // @ts-expect-error

      if (mobx_esm/* _allowStateReadsStart */.f2 && mobx_esm/* _allowStateReadsEnd */.w6) {
        prevReadState = (0,mobx_esm/* _allowStateReadsStart */.f2)(true);
      }

      getAtom.call(this).reportObserved(); // Why this check? BC?
      // @ts-expect-error

      if (mobx_esm/* _allowStateReadsStart */.f2 && mobx_esm/* _allowStateReadsEnd */.w6) {
        (0,mobx_esm/* _allowStateReadsEnd */.w6)(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

/**
 * Observer function / decorator
 */

function mobxreact_esm_observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`");
  }

  if (Object.prototype.isPrototypeOf.call(react.Component, component) || Object.prototype.isPrototypeOf.call(react.PureComponent, component)) {
    // Class component
    return makeClassComponentObserver(component);
  } else {
    // Function component
    return observer(component);
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children"];
var MobXProviderContext = /*#__PURE__*/react.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, _excluded);

  var parentValue = react.useContext(MobXProviderContext);
  var mutableProviderRef = react.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (false) { var newValue; }

  return react.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = React__default.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = React__default.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return React__default.createElement(component, newProps);
  });
  if (makeReactive) Injector = mobxreact_esm_observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  mobxreact_esm_copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/(/* unused pure expression or super */ null && (newSymbol("disposeOnUnmountProto")));
var instStoreKey = /*#__PURE__*/(/* unused pure expression or super */ null && (newSymbol("disposeOnUnmountInst")));

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === React__default.Component || c === React__default.PureComponent || c2 === React__default.Component || c2 === React__default.PureComponent || c3 === React__default.Component || c3 === React__default.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return (0,mobx_esm/* untracked */.O8)(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return (0,mobx_esm/* untracked */.O8)(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx_esm/* isObservableArray */.Fq;
          break;

        case "Object":
          mobxChecker = mobx_esm/* isObservableObject */.OB;
          break;

        case "Map":
          mobxChecker = mobx_esm/* isObservableMap */.uz;
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return (0,mobx_esm/* untracked */.O8)(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react.Component) throw new Error("mobx-react requires React to be available");
if (!mobx_esm/* observable */.sH) throw new Error("mobx-react requires mobx to be available");




/***/ }),

/***/ 2212:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.38
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.38',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 500;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SHARP   = 'Sharp',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK    = 'Facebook',
        CHROMIUM_OS = 'Chromium OS',
        MAC_OS  = 'Mac OS';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    if (!regex[j]) { break; }
                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bop(?:rg)?x\/([\w\.]+)/i                                          // Opera GX
            ], [VERSION, [NAME, OPERA+' GX']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i            // Baidu
            ], [VERSION, [NAME, 'Baidu']], [
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,             // Avant/IEMobile/SlimBrowser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(heytap|ovi)browser\/([\d\.]+)/i,                                  // Heytap/Ovi
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /\bddg\/([\w\.]+)/i                                                 // DuckDuckGo
            ], [VERSION, [NAME, 'DuckDuckGo']], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /ya(?:search)?browser\/([\w\.]+)/i                                  // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /slbrowser\/([\w\.]+)/i                                             // Smart Lenovo Browser
            ], [VERSION, [NAME, 'Smart Lenovo '+BROWSER]], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 ' + BROWSER]], [
            /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 ' + BROWSER], VERSION], [                    // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
            /samsungbrowser\/([\w\.]+)/i                                        // Samsung Internet
            ], [VERSION, [NAME, SAMSUNG + ' Internet']], [
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /metasr[\/ ]?([\d\.]+)/i                                            // Sogou Explorer
            ], [VERSION, [NAME, 'Sogou Explorer']], [
            /(sogou)mo\w+\/([\d\.]+)/i                                          // Sogou Mobile
            ], [[NAME, 'Sogou Mobile'], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i                        // QQBrowser/2345 Browser
            ], [NAME, VERSION], [
            /(lbbrowser)/i,                                                     // LieBao Browser
            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /(Klarna)\/([\w\.]+)/i,                                             // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,                             // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,                                  // Naver InApp
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(alipay)client\/([\w\.]+)/i,                                       // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,                               // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i                     // Chromium/Instagram/Snapchat
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i                        // TikTok
            ], [VERSION, [NAME, 'TikTok']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i,                                             // Links
            /panasonic;(viera)/i                                                // Panasonic Viera
            ], [NAME, VERSION], [
            
            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
            ], [NAME, [VERSION, /master.|lts./, ""]]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i                          // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
            /(macintosh);/i
            ], [MODEL, [VENDOR, APPLE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,                  // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,        // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,                     // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
            /\b(opd2\d{3}a?) bui/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, TABLET]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,                             // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
                
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ], [MODEL, [VENDOR, 'Ulefone'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(kobo)\s(ereader|touch)/i,                                         // Kobo
            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w+)( bui|\))/i                                         // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i                                               // Sharp
            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
            /(bravia[\w ]+)( bui|\))/i                                              // Sony
            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
            /(mitv-\w{5}) bui/i                                                 // Xiaomi
            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
            /Hbbtv.*(technisat) (.*);/i                                         // TechniSAT
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i         // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i                              // Apple Watch
            ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( \d| pro)?)/i                                               // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [
            /(aeobc)\b/i                                                        // Echo Dot
            ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i    // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,                                      // iCab
            /\b(libweb)/i
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i             // Windows Phone
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /windows nt 6\.2; (arm)/i,                                        // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[VERSION, strMapper, windowsVersionMap], [NAME, 'Windows']], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, MAC_OS], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i                              // watchOS
            ], [VERSION, [NAME, 'watchOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i                                  // Chromium OS
            ], [[NAME, CHROMIUM_OS], VERSION],[

            // Smart TVs
            /panasonic;(viera)/i,                                               // Panasonic Viera
            /(netrange)mmh/i,                                                   // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,                                         // NetTV

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _navigator = (typeof window !== UNDEF_TYPE && window.navigator) ? window.navigator : undefined;
        var _ua = ua || ((_navigator && _navigator.userAgent) ? _navigator.userAgent : EMPTY);
        var _uach = (_navigator && _navigator.userAgentData) ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
                _browser[NAME] = 'Brave';
            }
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
                _device[TYPE] = MOBILE;
            }
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == 'Macintosh' && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = 'iPad';
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != 'Unknown') {
                _os[NAME] = _uach.platform  
                                    .replace(/chrome os/i, CHROMIUM_OS)
                                    .replace(/macos/i, MAC_OS);           // backward compatibility
            }
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__.amdO) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ 56790:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29884);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33383);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24500);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23536);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46429);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18787);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 54607:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29884);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33383);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24500);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23536);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46429);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48062);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 90496:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(55285);
// EXTERNAL MODULE: ./Extension/src/common/translators/i18n.ts
var i18n = __webpack_require__(53984);
// EXTERNAL MODULE: ./Extension/src/common/translators/translator.ts
var translator = __webpack_require__(91310);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(52345);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Loader/index.ts + 2 modules
var Loader = __webpack_require__(80896);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/index.js + 4 modules
var UserRulesEditor = __webpack_require__(4484);
// EXTERNAL MODULE: ./Extension/src/pages/options/components/Notifications/index.ts + 3 modules
var Notifications = __webpack_require__(180);
// EXTERNAL MODULE: ./Extension/src/common/constants.ts
var constants = __webpack_require__(10135);
// EXTERNAL MODULE: ./Extension/src/pages/options/stores/RootStore.ts + 1 modules
var RootStore = __webpack_require__(38026);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(90495);
// EXTERNAL MODULE: ./Extension/src/common/logger.ts
var logger = __webpack_require__(68672);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(52905);
// EXTERNAL MODULE: ./Extension/src/common/messages/index.ts
var messages = __webpack_require__(12839);
;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/stores/FullscreenUserRulesStore.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class FullscreenUserRulesStore {
    async getFullscreenUserRulesData() {
        const { settings } = await messenger/* messenger */.e.sendMessage(messages/* MessageType */.Go.GetUserRulesEditorData);
        (0,mobx_esm/* runInAction */.h5)(()=>{
            this.settings = settings;
        });
    }
    get appearanceTheme() {
        if (!this.settings) {
            return null;
        }
        return this.settings.values[this.settings.names.AppearanceTheme];
    }
    constructor(){
        _define_property(this, "settings", null);
        (0,mobx_esm/* makeObservable */.Gn)(this);
    }
}
_ts_decorate([
    mobx_esm/* observable */.sH
], FullscreenUserRulesStore.prototype, "settings", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], FullscreenUserRulesStore.prototype, "getFullscreenUserRulesData", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], FullscreenUserRulesStore.prototype, "appearanceTheme", null);
const fullscreenUserRulesStore = /*#__PURE__*/ (0,react.createContext)(new FullscreenUserRulesStore());

// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useAppearanceTheme.js
var useAppearanceTheme = __webpack_require__(46342);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icons.tsx + 1 modules
var Icons = __webpack_require__(17941);
// EXTERNAL MODULE: ./Extension/src/pages/options/styles/styles.pcss
var styles = __webpack_require__(54607);
// EXTERNAL MODULE: ./Extension/src/pages/options/components/UserRules/styles.pcss
var UserRules_styles = __webpack_require__(56790);
;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/components/fullscreen-user-rules/FullscreenUserRules.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 













const FullscreenUserRules = (0,mobxreact_esm/* observer */.PA)(()=>{
    const store = (0,react.useContext)(fullscreenUserRulesStore);
    const { uiStore: { showLoader } } = (0,react.useContext)(RootStore/* rootStore */.a);
    (0,useAppearanceTheme/* useAppearanceTheme */.H)(store.appearanceTheme);
    // append message listeners
    (0,react.useEffect)(()=>{
        store.getFullscreenUserRulesData();
        let removeListenerCallback = async ()=>{};
        (async ()=>{
            const events = [
                constants/* NotifierType */.DY.SettingUpdated
            ];
            removeListenerCallback = messenger/* messenger */.e.createLongLivedConnection(constants/* FULLSCREEN_USER_RULES_EDITOR */.yF, events, async (message)=>{
                const { type } = message;
                switch(type){
                    case constants/* NotifierType */.DY.SettingUpdated:
                        {
                            await store.getFullscreenUserRulesData();
                            break;
                        }
                    default:
                        {
                            logger/* logger */.v.debug('There is no listener for type:', type);
                            break;
                        }
                }
            });
        })();
        return ()=>{
            removeListenerCallback();
        };
    }, [
        store
    ]);
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(Loader/* Loader */.a, {
        showLoader: showLoader
    }), /*#__PURE__*/ react.createElement(Icons/* Icons */.F, null), /*#__PURE__*/ react.createElement(Notifications/* Notifications */.$, null), /*#__PURE__*/ react.createElement(UserRulesEditor/* UserRulesEditor */.u, {
        fullscreen: true
    }));
});

;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/components/fullscreen-user-rules/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/index.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




const fullscreenUserRulesPage = {
    init: ()=>{
        document.title = translator/* translator */.N.getMessage('fullscreen_user_rules_title');
        document.documentElement.lang = i18n/* i18n */.R.getUILanguage();
        react_dom.render(/*#__PURE__*/ react.createElement(FullscreenUserRules, null), document.getElementById('root'));
    }
};

;// CONCATENATED MODULE: ./Extension/pages/fullscreen-user-rules/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
fullscreenUserRulesPage.init();


/***/ }),

/***/ 40334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export annoyancesConsentStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const annoyancesConsentStorageDataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number());


/***/ }),

/***/ 1022:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _annoyances_consent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40334);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Annoyances consent schema entry point
// annoyances consent validators and types



/***/ }),

/***/ 49415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ allowlistValidator)
/* harmony export */ });
/* unused harmony export AllowlistOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
var AllowlistOption;
(function(AllowlistOption) {
    AllowlistOption["Inverted"] = "inverted";
    AllowlistOption["Domains"] = "domains";
    AllowlistOption["InvertedDomains"] = "inverted-domains";
    AllowlistOption["Enabled"] = "enabled";
})(AllowlistOption || (AllowlistOption = {}));
const allowlistValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * If `AllowlistOption.Inverted` === false (the default state),
     * the extension will use this list of domains to disable ad blocking on
     * them. In other words, the extension will apply ad blocking everywhere,
     * EXCEPT the domains on this list.
     */ ["domains"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()),
    /**
     * If `AllowlistOption.Inverted` === true, the extension will use this list
     * to disable ad blocking for all sites but not these sites. In other words,
     * the extension will work ONLY on domains from this list.
     */ ["inverted-domains"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()),
    /**
     * Is allowlist list enabled or not.
     */ ["enabled"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean().optional(),
    /**
     * If this flag is true, the application will work ONLY with domains from
     * the 'domains' list, otherwise it will work everywhere EXCLUDING domains
     * from the list.
     */ ["inverted"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean().optional()
});


/***/ }),

/***/ 60809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ customFiltersConfigValidator)
/* harmony export */ });
/* unused harmony export CustomFilterOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
var CustomFilterOption;
(function(CustomFilterOption) {
    CustomFilterOption["CustomUrl"] = "customUrl";
    CustomFilterOption["Title"] = "title";
    CustomFilterOption["Trusted"] = "trusted";
    CustomFilterOption["Enabled"] = "enabled";
})(CustomFilterOption || (CustomFilterOption = {}));
const customFiltersConfigValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
         * The filter subscription URL from which the application retrieved
         * the rules when adding the filter and should retrieve the rules when
         * updating it.
         */ ["customUrl"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
         * Name of the filter.
         */ ["title"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string().optional(),
    /**
         * If this filter is not trusted - tsurlfilter will not execute JS rules
         * and will not apply header removal rules from this filter.
         * Otherwise, no restrictions.
         *
         * @see https://adguard.com/kb/general/ad-filtering/create-own-filters/#trusted-filters.
         */ ["trusted"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
         * Is filter enabled or not.
         */ ["enabled"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean()
}));


/***/ }),

/***/ 7176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ extensionSpecificSettingsConfigValidator)
/* harmony export */ });
/* unused harmony export ExtensionSpecificSettingsOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
var ExtensionSpecificSettingsOption;
(function(ExtensionSpecificSettingsOption) {
    ExtensionSpecificSettingsOption["UseOptimizedFilters"] = "use-optimized-filters";
    ExtensionSpecificSettingsOption["CollectHitsCount"] = "collect-hits-count";
    ExtensionSpecificSettingsOption["ShowContextMenu"] = "show-context-menu";
    ExtensionSpecificSettingsOption["ShowInfoAboutAdguard"] = "show-info-about-adguard";
    ExtensionSpecificSettingsOption["ShowAppUpdatedInfo"] = "show-app-updated-info";
    ExtensionSpecificSettingsOption["HideRateAdguard"] = "hide-rate-adguard";
    ExtensionSpecificSettingsOption["UserRulesEditorWrap"] = "user-rules-editor-wrap";
})(ExtensionSpecificSettingsOption || (ExtensionSpecificSettingsOption = {}));
const extensionSpecificSettingsConfigValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * If the flag is set to true, the application uses the optimized versions
     * of filter lists — the lists which contain needed and popular rules.
     *
     * @see https://adguard.com/kb/general/ad-filtering/create-own-filters/#not_optimized-hint for details.
     */ ["use-optimized-filters"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * If the flag is set to true, the application will send anonymous
     * statistics about the use of ad filters, which will help us to improve and
     * optimize them: for example, to remove obsolete rules in order to reduce
     * the time it takes to apply the rules.
     *
     * @see https://adguard.com/kb/general/ad-filtering/tracking-filter-statistics/ for clarification.
     */ ["collect-hits-count"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Whether or not to add filtering options (add domain to allowlist,
     * enable or disable filtering) to the context menu (available by
     * right-clicking) in the browser.
     */ ["show-context-menu"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * If set to true - a banner will be displayed in the extensions
     * settings with information about AdGuard's system ad blocking app.
     */ ["show-info-about-adguard"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * If set to true - the extension will show app update notifications.
     */ ["show-app-updated-info"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * If set to true - the extension will hide the block about requesting
     * feedback with rating in the extension settings.
     */ ["hide-rate-adguard"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * If set to true - the extension will enable word wrap in the user rules
     * editor to display a window without horizontal scroll bars.
     */ ["user-rules-editor-wrap"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean()
});


/***/ }),

/***/ 37613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ filtersConfigValidator)
/* harmony export */ });
/* unused harmony export FiltersOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14476);
/* harmony import */ var _custom_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60809);
/* harmony import */ var _user_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81814);
/* harmony import */ var _allowlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49415);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 



var FiltersOption;
(function(FiltersOption) {
    FiltersOption["EnabledGroups"] = "enabled-groups";
    FiltersOption["EnabledFilters"] = "enabled-filters";
    FiltersOption["CustomFilters"] = "custom-filters";
    FiltersOption["UserFilter"] = "user-filter";
    FiltersOption["Allowlist"] = "allowlist";
})(FiltersOption || (FiltersOption = {}));
const filtersConfigValidator = zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].object */ .Ay.object({
    /**
     * List of IDs of enabled filter groups.
     */ ["enabled-groups"]: zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].number */ .Ay.number().int()),
    /**
     * List of IDs of enabled filters.
     */ ["enabled-filters"]: zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].number */ .Ay.number().int()),
    /**
     * List of objects with information about custom filters.
     */ ["custom-filters"]: _custom_filters__WEBPACK_IMPORTED_MODULE_0__/* .customFiltersConfigValidator */ .J,
    /**
     * An object with concatenated user rules and their status - enabled or not.
     */ ["user-filter"]: _user_filter__WEBPACK_IMPORTED_MODULE_1__/* .userFilterValidator */ .A,
    /**
     * Object with the allowlist domains, the inverted allowlist domains and
     * which one applies.
     */ ["allowlist"]: _allowlist__WEBPACK_IMPORTED_MODULE_2__/* .allowlistValidator */ .s
});


/***/ }),

/***/ 63774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ generalSettingsConfigValidator)
/* harmony export */ });
/* unused harmony export GeneralSettingsOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14476);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10135);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54253);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


var GeneralSettingsOption;
(function(GeneralSettingsOption) {
    GeneralSettingsOption["AppLanguage"] = "app-language";
    GeneralSettingsOption["AllowAcceptableAds"] = "allow-acceptable-ads";
    GeneralSettingsOption["ShowBlockedAdsCount"] = "show-blocked-ads-count";
    GeneralSettingsOption["AutodetectFilters"] = "autodetect-filters";
    GeneralSettingsOption["SafebrowsingEnabled"] = "safebrowsing-enabled";
    GeneralSettingsOption["FiltersUpdatePeriod"] = "filters-update-period";
    GeneralSettingsOption["AppearanceTheme"] = "appearance-theme";
})(GeneralSettingsOption || (GeneralSettingsOption = {}));
const generalSettingsConfigValidator = zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].object */ .Ay.object({
    /**
     * The two-letter code of the application language that is used to display
     * the translations in the user interface.
     */ ["app-language"]: zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].string */ .Ay.string().optional(),
    /**
     * This option allows for "Search advertising and self-promotion":
     * advertising that the user sees among search results when using online
     * search engines, as well as a kind of "first-party" advertising on sites
     * that promote that particular site or closely related sites, social
     * networks, and so on.
     *
     * @see https://adguard.com/kb/general/ad-filtering/search-ads/
     */ ["allow-acceptable-ads"]: zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Whether or not to show the number of blocked ads on the extension icon.
     */ ["show-blocked-ads-count"]: zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Should the extension automatically enable a language filter that matches
     * the top-level domain.
     */ ["autodetect-filters"]: zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * This setting enables module that protects against malicious and phishing
     * sites by checking the url hash in a database of malicious or phishing
     * sites.
     *
     * @see https://adguard.com/kb/general/browsing-security/
     */ ["safebrowsing-enabled"]: zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Time interval between filter updates.
     */ ["filters-update-period"]: zod__WEBPACK_IMPORTED_MODULE_2__/* ["default"].nativeEnum */ .Ay.nativeEnum(_common_constants__WEBPACK_IMPORTED_MODULE_0__/* .FiltersUpdateTime */ .GE),
    // TODO: Should be not optional?
    /**
     * Appearance theme of the application.
     */ ["appearance-theme"]: _settings__WEBPACK_IMPORTED_MODULE_1__/* .appearanceValidator */ .Tk.optional()
});


/***/ }),

/***/ 96050:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57801);
/* harmony import */ var _general_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63774);
/* harmony import */ var _extension_specific_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7176);
/* harmony import */ var _custom_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60809);
/* harmony import */ var _user_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81814);
/* harmony import */ var _allowlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49415);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37613);
/* harmony import */ var _stealth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28893);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 









/***/ }),

/***/ 57801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports PROTOCOL_VERSION, RootOption, configValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14476);
/* harmony import */ var _general_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63774);
/* harmony import */ var _extension_specific_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7176);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37613);
/* harmony import */ var _stealth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28893);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




// Root configuration
const PROTOCOL_VERSION = '2.0';
var RootOption;
(function(RootOption) {
    RootOption["ProtocolVersion"] = "protocol-version";
    RootOption["GeneralSettings"] = "general-settings";
    RootOption["ExtensionSpecificSettings"] = "extension-specific-settings";
    RootOption["Filters"] = "filters";
    RootOption["Stealth"] = "stealth";
})(RootOption || (RootOption = {}));
const configValidator = zod__WEBPACK_IMPORTED_MODULE_4__/* ["default"].object */ .Ay.object({
    /**
     * Describes the current version of the object. This is necessary to check
     * if we need to migrate from the old settings.
     */ ["protocol-version"]: zod__WEBPACK_IMPORTED_MODULE_4__/* ["default"].literal */ .Ay.literal(PROTOCOL_VERSION),
    /**
     * Contains general application settings: appearance theme, language, time
     * to check for updates to filters and some filtering options.
     */ ["general-settings"]: _general_settings__WEBPACK_IMPORTED_MODULE_0__/* .generalSettingsConfigValidator */ .o,
    /**
     * Contains some additional extension settings and UI settings.
     */ ["extension-specific-settings"]: _extension_specific_settings__WEBPACK_IMPORTED_MODULE_1__/* .extensionSpecificSettingsConfigValidator */ .B,
    /**
     * Contains all information about filters: regular, custom, user filter and
     * allowlist.
     */ ["filters"]: _filters__WEBPACK_IMPORTED_MODULE_2__/* .filtersConfigValidator */ .w,
    /**
     * Contains various secure browsing settings: cookie deletion time, privacy
     * headers, referrer hiding, and the ability to enable additional filters.
     */ ["stealth"]: _stealth__WEBPACK_IMPORTED_MODULE_3__/* .stealthConfigValidator */ .E.optional()
});


/***/ }),

/***/ 28893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ stealthConfigValidator)
/* harmony export */ });
/* unused harmony export StealthOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
var StealthOption;
(function(StealthOption) {
    StealthOption["DisableStealthMode"] = "stealth-disable-stealth-mode";
    StealthOption["HideReferrer"] = "stealth-hide-referrer";
    StealthOption["HideSearchQueries"] = "stealth-hide-search-queries";
    StealthOption["SendDoNotTrack"] = "stealth-send-do-not-track";
    StealthOption["BlockWebRTC"] = "stealth-block-webrtc";
    StealthOption["RemoveXClientData"] = "stealth-remove-x-client";
    StealthOption["SelfDestructThirdPartyCookies"] = "stealth-block-third-party-cookies";
    StealthOption["SelfDestructThirdPartyCookiesTime"] = "stealth-block-third-party-cookies-time";
    StealthOption["SelfDestructFirstPartyCookies"] = "stealth-block-first-party-cookies";
    StealthOption["SelfDestructFirstPartyCookiesTime"] = "stealth-block-first-party-cookies-time";
    StealthOption["BlockKnownTrackers"] = "block-known-trackers";
    StealthOption["StripTrackingParams"] = "strip-tracking-parameters";
})(StealthOption || (StealthOption = {}));
const stealthConfigValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Whether Tracking protection (formerly Stealth mode) is disabled or not.
     */ ["stealth-disable-stealth-mode"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Should the application hide the origin referrer in third-party requests
     * by replacing the referrer url with the url from the requested url.
     */ ["stealth-hide-referrer"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Should the application hide the original referrer from the search page
     * containing the search query in third-party queries, replacing
     * the referrer url with the url from the requested url.
     */ ["stealth-hide-search-queries"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Includes HTTP headers 'DNT' and 'Sec-GPC' in all requests.
     *
     * @see https://www.wikiwand.com/en/Do_Not_Track
     * @see https://globalprivacycontrol.org
     */ ["stealth-send-do-not-track"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Blocks the possibility of leaking your IP address through WebRTC, even if
     * you use a proxy server or VPN.
     */ ["stealth-block-webrtc"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * For Google Chrome, it removes the 'X-Client-Data' header from
     * the requests, which contains information about the browser version
     * and modifications.
     */ ["stealth-remove-x-client"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Whether or not the application should set a fixed lifetime from
     * `StealthOption.SelfDestructThirdPartyCookiesTime` for third-party
     * cookies.
     */ ["stealth-block-third-party-cookies"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Time in milliseconds to delete third-party cookies.
     */ ["stealth-block-third-party-cookies-time"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * Whether or not the application should set a fixed lifetime from
     * `StealthOption.SelfDestructFirstPartyCookiesTime` for first-party
     * cookies.
     */ ["stealth-block-first-party-cookies"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Time in milliseconds to delete first-party cookies.
     */ ["stealth-block-first-party-cookies-time"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * If true application will enable AdGuard Tracking Protection filter
     * {@link AntiBannerFiltersId.TrackingFilterId}.
     */ ["block-known-trackers"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean().optional(),
    /**
     * If true application will enable AdGuard URL Tracking filter
     * {@link AntiBannerFiltersId.UrlTrackingFilterId}.
     */ ["strip-tracking-parameters"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean()
});


/***/ }),

/***/ 81814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ userFilterValidator)
/* harmony export */ });
/* unused harmony export UserFilterOption */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
var UserFilterOption;
(function(UserFilterOption) {
    UserFilterOption["Rules"] = "rules";
    UserFilterOption["DisabledRules"] = "disabled-rules";
    UserFilterOption["Enabled"] = "enabled";
})(UserFilterOption || (UserFilterOption = {}));
const userFilterValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * User rules concatenated with '\n'.
     */ ["rules"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * In previous versions, rules could be marked as disabled.
     * Currently not in use.
     *
     * @deprecated
     */ ["disabled-rules"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Is enabled user rules or not.
     */ ["enabled"]: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean().optional()
});


/***/ }),

/***/ 90786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports customFilterMetadataValidator, customFilterMetadataStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14476);
/* harmony import */ var _metadata_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11803);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

const customFilterMetadataValidator = _metadata_filter__WEBPACK_IMPORTED_MODULE_0__/* .baseMetadataValidator */ .r.merge(zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].object */ .Ay.object({
    /**
         * The filter subscription URL from which the application retrieved
         * the rules when adding the filter and should retrieve the rules when
         * updating it.
         */ customUrl: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string(),
    /**
         * If this filter is not trusted - tsurlfilter will not execute JS rules
         * and will not apply header removal rules from this filter.
         * Otherwise, no restrictions.
         */ trusted: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean(),
    /**
         * When the filter was last updated in milliseconds since the start of
         * the UNIX epoch.
         */ timeUpdated: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    /**
         * Contains MD5 checksum for the filter content.
         */ checksum: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().or(zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["null"] */ .Ay["null"]())
}));
const customFilterMetadataStorageDataValidator = customFilterMetadataValidator.array();


/***/ }),

/***/ 84718:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _custom_filter_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90786);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Custom filter metadata schema entry point
// Custom filter metadata validators and types



/***/ }),

/***/ 83822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports filterStateDataValidator, filterStateStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14476);
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1308);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * Runtime validator for persistent filter state data.
 */ const filterStateDataValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].object */ .Ay.object({
    /**
     * Is filter enabled or not.
     */ enabled: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Is filter rules loaded into browser storage or not.
     *
     * TODO: Check if it can be deleted, because we add all filters to
     * the browser storage and this field is always true.
     */ installed: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Is filter loaded.
     *
     * TODO: Check if it can be deleted.
     */ loaded: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean()
});
/**
 * Runtime validator for persistent key value storage of filter state data.
 *
 * Key is filter metadata id.
 * Value is {@link FilterStateData}.
 */ const filterStateStorageDataValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].record */ .Ay.record(_preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator, filterStateDataValidator);


/***/ }),

/***/ 53718:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _filter_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83822);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Filter state schema entry point
// Filter state validators and types



/***/ }),

/***/ 25976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports filterVersionDataValidator, filterVersionStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14476);
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1308);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * Runtime validator for persistent filter version data.
 */ const filterVersionDataValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].object */ .Ay.object({
    /**
     * Version of filter. Usually consists of 4 parts: 1.2.3.4.
     */ version: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string(),
    /**
     * The time in millisecond of the last forced update: if the user clicks
     * the forced update check from the user interface or if the user enabled
     * the filter or group.
     */ lastCheckTime: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    /**
     * The time in millisecond of the last check by the scheduler: every
     * {@link FilterUpdateService.CHECK_PERIOD_MS period} the time of the last
     * check will be overwritten by the scheduler.
     */ lastScheduledCheckTime: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    /**
     * The time in millisecond of the last update filter from remote resources.
     */ lastUpdateTime: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    /**
     * The time in seconds during which the filter content remains fresh
     * and does not need to be updated. Used to auto-renew filters if the user
     * has not selected a custom update period for filters.
     */ expires: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    /**
     * Diff-Path - Path to the patches if exists.
     *
     * @see {@link https://github.com/ameshkov/diffupdates/tree/b81243c50d23e0a8be0fe95a80d55abd00b08981?tab=readme-ov-file#-diff-path | Specs}.
     */ diffPath: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    /**
     * Flag that indicates that the filter could not be updated by patches
     * and should wait for the full update.
     *
     * @see {@link https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2717}
     */ shouldWaitFullUpdate: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean().optional()
});
/**
 * Runtime validator for persistent key value storage of filter version data.
 *
 * Key is filter metadata id.
 * Value is {@link FilterVersionData}.
 */ const filterVersionStorageDataValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].record */ .Ay.record(_preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator, filterVersionDataValidator);


/***/ }),

/***/ 12107:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _filter_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25976);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Filter version schema entry point
// Filter version validators and types



/***/ }),

/***/ 84096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports groupStateDataValidator, groupStateStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14476);
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1308);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * Runtime validator for persistent group state data.
 */ const groupStateDataValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].object */ .Ay.object({
    /**
     * Is group enabled or not.
     */ enabled: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean(),
    /**
     * Whether the group has ever been switched. Can be affected
     * programmatically, e.g. After importing settings.
     */ touched: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].boolean */ .Ay.boolean()
});
/**
 * Runtime validator for persistent key value storage of group state data.
 *
 * Key is group metadata id.
 * Value is {@link GroupStateData}.
 */ const groupStateStorageDataValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].record */ .Ay.record(_preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator, groupStateDataValidator);


/***/ }),

/***/ 24907:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _group_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84096);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Group state schema entry point
// Group state validators and types



/***/ }),

/***/ 95848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports hitStatsValidator, filtersVersionsValidator, hitStatsStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const filterRulesHitsValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
     * Index of rule.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), /**
     * The number of matches of this rule.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number());
const filterHitsValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
     * Filter's id.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), filterRulesHitsValidator.optional());
const hitStatsValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Contains an object with filter IDs as keys and their
     * {@link filterRulesHitsValidator} as values.
     */ filters: filterHitsValidator.optional()
}).strict();
const filtersVersionsValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
     * Filter's id.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), /**
     * Version of the filter.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string());
const hitStatsStorageDataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * The number of hits in relation to the hit rule.
     */ stats: hitStatsValidator.optional(),
    /**
     * Contains an object with filter IDs as keys and their versions as values.
     */ versions: filtersVersionsValidator.optional(),
    /**
     * The total number of hits with no link to the rules.
     */ totalHits: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number().optional()
}).strict();


/***/ }),

/***/ 23015:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _hit_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95848);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Hit stats schema entry point
// hit stats validators and types



/***/ }),

/***/ 69942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ regularFilterI18nMetadataValidator)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const filterInfoValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Description of the filter.
     */ description: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Name of the filter.
     */ name: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()
});
const regularFilterI18nMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
     * Locale code.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), filterInfoValidator);


/***/ }),

/***/ 485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ groupI18nMetadataValidator)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const groupName = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * The name of the filter group.
     */ name: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()
});
const groupI18nMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
     * Locale code.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), groupName);


/***/ }),

/***/ 2624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports filtersI18nRecordValidator, groupsI18nRecordValidator, tagsI18nRecordValidator, i18nMetadataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14476);
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1308);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69942);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32434);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(485);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




const filtersI18nRecordValidator = zod__WEBPACK_IMPORTED_MODULE_4__/* ["default"].record */ .Ay.record(_preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator, _filter__WEBPACK_IMPORTED_MODULE_1__/* .regularFilterI18nMetadataValidator */ .E);
const groupsI18nRecordValidator = zod__WEBPACK_IMPORTED_MODULE_4__/* ["default"].record */ .Ay.record(_preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator, _group__WEBPACK_IMPORTED_MODULE_3__/* .groupI18nMetadataValidator */ .p);
const tagsI18nRecordValidator = zod__WEBPACK_IMPORTED_MODULE_4__/* ["default"].record */ .Ay.record(_preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator, _tag__WEBPACK_IMPORTED_MODULE_2__/* .tagI18nMetadataValidator */ .Y);
const i18nMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_4__/* ["default"].object */ .Ay.object({
    /**
     * Item of {@link FiltersI18n}.
     */ filters: filtersI18nRecordValidator,
    /**
     * Item of {@link GroupsI18n}.
     */ groups: groupsI18nRecordValidator,
    /**
     * Item of {@link TagsI18n}.
     */ tags: tagsI18nRecordValidator
});


/***/ }),

/***/ 71402:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _i18n_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2624);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69942);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32434);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(485);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 





/***/ }),

/***/ 32434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ tagI18nMetadataValidator)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const tagInfoValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Description of the tag.
     */ description: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Name of the tag.
     */ name: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()
});
const tagI18nMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
     * Locale code.
     */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), tagInfoValidator);


/***/ }),

/***/ 21479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GZ: () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_1__.GZ)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96050);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54253);
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1308);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53709);
/* harmony import */ var _i18n_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71402);
/* harmony import */ var _filter_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12107);
/* harmony import */ var _filter_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53718);
/* harmony import */ var _group_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24907);
/* harmony import */ var _trusted_domains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85847);
/* harmony import */ var _page_stats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5501);
/* harmony import */ var _hit_stats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23015);
/* harmony import */ var _custom_filter_metadata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84718);
/* harmony import */ var _local_script_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99407);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33391);
/* harmony import */ var _safebrowsing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44232);
/* harmony import */ var _annoyances_consent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1022);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

















/***/ }),

/***/ 99407:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _local_script_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7432);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 7432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export localScriptRulesValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const localScriptRulesValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Contains a comment describing the purpose of the local script rules file.
     */ comment: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * JS rules from all of our filters are pre-assembled into this object to be
     * checked in Firefox AMO to see if they can be executed.
     */ rules: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(/**
         * Key is the cosmetic rule body.
         */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), /**
         * Value is the array of cosmetic rule scope (on which domains it should be applied).
         * If multiple rules are using the same body, their scopes are pushed to this array,
         * if they are not already there.
         */ zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
        /**
             * The array of domains on which the rule can be executed.
             */ permittedDomains: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()),
        /**
             * The array of domains on which the rule cannot be executed.
             */ restrictedDomains: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].array */ .Ay.array(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string())
    }).array())
}).strict();


/***/ }),

/***/ 11803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ regularFilterMetadataValidator),
/* harmony export */   r: () => (/* binding */ baseMetadataValidator)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const baseMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Description of the filter.
     */ description: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Display number is used to arrange the filters in the layout.
     */ displayNumber: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * The time in seconds during which the filter content remains fresh
     * and does not need to be updated. Used to auto-renew filters if the user
     * has not selected a custom update period for filters.
     */ expires: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * Id of the filter.
     */ filterId: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * Id of the filter's group.
     */ groupId: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * URL address of the filter's homepage.
     */ homepage: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Name of the filter.
     */ name: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Filter tags are used to group filters by different characteristics:
     * language, target, platform, etc.
     */ tags: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number().array(),
    /**
     * Version filter. Supports up to {@link Version.MAX_LENGTH} parts per
     * version.
     */ version: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Diff-Path - Path to the patches if exists.
     *
     * @see {@link https://github.com/ameshkov/diffupdates/tree/b81243c50d23e0a8be0fe95a80d55abd00b08981?tab=readme-ov-file#-diff-path | Specs}.
     */ diffPath: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string().optional()
});
const regularFilterMetadataValidator = baseMetadataValidator.merge(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
         * Two-letter language codes that are associated with the filter.
         */ languages: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string().array(),
    /**
         * Timestamp of adding filters in MS.
         * String format, since these values are retrieved from the backend.
         */ timeAdded: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
         * When the filter was last updated in milliseconds since the start of
         * the UNIX epoch.
         * String format, since these values are retrieved from the backend.
         */ timeUpdated: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
         * The filter subscription URL from which the application retrieved
         * the rules when adding the filter and should retrieve the rules when
         * updating it.
         */ subscriptionUrl: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()
}));


/***/ }),

/***/ 75178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ groupMetadataValidator)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const groupMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Display number is used to arrange the groups in the layout.
     */ displayNumber: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * Id of the group.
     */ groupId: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * Name of the group.
     */ groupName: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()
});


/***/ }),

/***/ 53709:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94588);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11803);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16257);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75178);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 





/***/ }),

/***/ 94588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export metadataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14476);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11803);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16257);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75178);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 



const metadataValidator = zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].object */ .Ay.object({
    /**
     * Array of {@link RegularFilterMetadata}.
     */ filters: _filter__WEBPACK_IMPORTED_MODULE_0__/* .regularFilterMetadataValidator */ .C.array(),
    /**
     * Array of {@link GroupMetadata}.
     */ groups: _group__WEBPACK_IMPORTED_MODULE_2__/* .groupMetadataValidator */ .N.array(),
    /**
     * Array of {@link TagMetadata}.
     */ tags: _tag__WEBPACK_IMPORTED_MODULE_1__/* .tagMetadataValidator */ .s.array()
});


/***/ }),

/***/ 16257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ tagMetadataValidator)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const tagMetadataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Id of the tag.
     */ tagId: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number(),
    /**
     * Tag value, e.g., `lang:en`, `recommended`.
     */ keyword: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Description of the tag.
     */ description: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string().optional(),
    /**
     * Name of the tag.
     */ name: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string().optional()
});


/***/ }),

/***/ 33391:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _notification_text_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30454);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 30454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export notificationTextRecordValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const notificationTextRecordValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Notification title.
     */ title: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Notification description.
     */ desc: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string().optional(),
    /**
     * Text for the notification button.
     */ btn: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string()
}).strict();


/***/ }),

/***/ 5501:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _page_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71992);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Page stats schema entry point
// page stats validators and types



/***/ }),

/***/ 71992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports pageStatsDataItemValidator, pageStatsDataValidator, pageStatsValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Describes the relationship between the number of blocked requests and
 * the name of the group (similar to the tag).
 */ const pageStatsDataItemValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].record */ .Ay.record(zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(), zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number());
const pageStatsDataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Blocked requests grouped by hours.
     */ hours: pageStatsDataItemValidator.array(),
    /**
     * Blocked requests grouped by days.
     */ days: pageStatsDataItemValidator.array(),
    /**
     * Blocked requests grouped by months.
     */ months: pageStatsDataItemValidator.array(),
    /**
     * The time stamp of the last update. In milliseconds.
     */ updated: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number()
});
const pageStatsValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Total blocked requests.
     */ totalBlocked: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number().optional(),
    /**
     * Blocked requests grouped by time.
     */ data: pageStatsDataValidator.optional()
});


/***/ }),

/***/ 1308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ SchemaPreprocessor)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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

/**
 * In some cases we want to preprocessing input before validation
 * For example, cast loaded filter metadata item id field from string to number before validation:
 *
 * { filterId: "1", ... } -> { filterId: 1, ... }.
 */ class SchemaPreprocessor {
    /**
     * If {@link value} is string, cast it to number, else returns original value.
     *
     * @param value Preprocessed value.
     * @returns Number value, if string passed, else returns original value.
     */ static castStringToNumber(value) {
        if (typeof value === 'string') {
            return Number(JSON.parse(value));
        }
        return value;
    }
    /**
     * If {@link value} is string, cast it to boolean, else returns original value.
     *
     * @param value Preprocessed value.
     * @returns Boolean value, if string passed, else returns original value.
     */ static castStringToBoolean(value) {
        if (typeof value === 'string') {
            try {
                return Boolean(JSON.parse(value));
            } catch (e) {
                return value;
            }
        }
        return value;
    }
}
/**
     * Runtime {@link zod} validator with {@link SchemaPreprocessor.castStringToBoolean} preprocessor.
     */ _define_property(SchemaPreprocessor, "booleanValidator", zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].preprocess */ .Ay.preprocess(SchemaPreprocessor.castStringToBoolean, zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].boolean */ .Ay.boolean()));
/**
     * Runtime {@link zod} validator with {@link SchemaPreprocessor.castStringToNumber} preprocessor.
     */ _define_property(SchemaPreprocessor, "numberValidator", zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].preprocess */ .Ay.preprocess(SchemaPreprocessor.castStringToNumber, zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number()));


/***/ }),

/***/ 44232:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _safebrowsing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13142);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 13142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports safebrowsingCacheDataValidator, safebrowsingStorageDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Safebrowsing cache data schema validator.
 */ const safebrowsingCacheDataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Name of the safebrowsing list.
     */ list: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Record expiration time in milliseconds.
     * Optional, because it is not defined for safebrowsing allowlist.
     */ expires: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number().optional()
}).strict();
/**
 * Safebrowsing persisted storage data schema validator.
 */ const safebrowsingStorageDataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * Resource url hash.
     */ key: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * Cache data.
     */ value: safebrowsingCacheDataValidator
}).strict().array();


/***/ }),

/***/ 54253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GZ: () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_0__.GZ),
/* harmony export */   Tk: () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_0__.Tk)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17300);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 17300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GZ: () => (/* binding */ SettingOption),
/* harmony export */   Tk: () => (/* binding */ appearanceValidator)
/* harmony export */ });
/* unused harmony export settingsValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14476);
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1308);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

var SettingOption;
(function(SettingOption) {
    // General settings.
    SettingOption["AppearanceTheme"] = "appearance-theme";
    SettingOption["DisableShowPageStats"] = "disable-show-page-statistic";
    SettingOption["DisableDetectFilters"] = "detect-filters-disabled";
    SettingOption["DisableSafebrowsing"] = "safebrowsing-disabled";
    SettingOption["FiltersUpdatePeriod"] = "filters-update-period";
    // Is filtering disabled or not.
    SettingOption["DisableFiltering"] = "adguard-disabled";
    // Extension specific settings.
    SettingOption["UseOptimizedFilters"] = "use-optimized-filters";
    SettingOption["DisableCollectHits"] = "hits-count-disabled";
    SettingOption["DisableShowContextMenu"] = "context-menu-disabled";
    // Flag used to show link to comparison of desktop and browser extension versions.
    SettingOption["DisableShowAdguardPromoInfo"] = "show-info-about-adguard-disabled";
    SettingOption["DisableShowAppUpdatedNotification"] = "show-app-updated-disabled";
    SettingOption["HideRateBlock"] = "hide-rate-block";
    SettingOption["UserRulesEditorWrap"] = "user-rules-editor-wrap";
    // Allowlist section.
    SettingOption["AllowlistDomains"] = "allowlist-domains";
    SettingOption["InvertedAllowlistDomains"] = "block-list-domains";
    SettingOption["AllowlistEnabled"] = "allowlist-enabled";
    SettingOption["DefaultAllowlistMode"] = "default-allowlist-mode";
    // Tracking protection (formerly Stealth mode).
    SettingOption["DisableStealthMode"] = "stealth-disable-stealth-mode";
    SettingOption["HideReferrer"] = "stealth-hide-referrer";
    SettingOption["HideSearchQueries"] = "stealth-hide-search-queries";
    SettingOption["SendDoNotTrack"] = "stealth-send-do-not-track";
    SettingOption["RemoveXClientData"] = "stealth-remove-x-client";
    SettingOption["BlockWebRTC"] = "stealth-block-webrtc";
    SettingOption["SelfDestructThirdPartyCookies"] = "stealth-block-third-party-cookies";
    SettingOption["SelfDestructThirdPartyCookiesTime"] = "stealth-block-third-party-cookies-time";
    SettingOption["SelfDestructFirstPartyCookies"] = "stealth-block-first-party-cookies";
    SettingOption["SelfDestructFirstPartyCookiesTime"] = "stealth-block-first-party-cookies-time";
    // Filters' statuses and states.
    SettingOption["FiltersState"] = "filters-state";
    SettingOption["FiltersVersion"] = "filters-version";
    SettingOption["GroupsState"] = "groups-state";
    SettingOption["UserFilterEnabled"] = "user-filter-enabled";
    // Filters metadata.
    SettingOption["Metadata"] = "filters-metadata";
    SettingOption["I18nMetadata"] = "filters-i18n-metadata";
    SettingOption["CustomFilters"] = "custom-filters";
})(SettingOption || (SettingOption = {}));
const appearanceValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["enum"] */ .Ay["enum"]([
    'system',
    'dark',
    'light'
]);
// Setting options may be stringified, use preprocessors for correct type casting
const settingsValidator = zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].object */ .Ay.object({
    // ----- General settings section -----
    /**
     * See {@link GeneralSettingsConfig[GeneralSettingsOption.AppearanceTheme]}.
     */ ["appearance-theme"]: appearanceValidator,
    /**
     * See {@link GeneralSettingsConfig[GeneralSettingsOption.ShowBlockedAdsCount]}.
     */ ["disable-show-page-statistic"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link GeneralSettingsConfig[GeneralSettingsOption.AutodetectFilters]}.
     */ ["detect-filters-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link GeneralSettingsConfig[GeneralSettingsOption.SafebrowsingEnabled]}.
     */ ["safebrowsing-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link GeneralSettingsConfig[GeneralSettingsOption.FiltersUpdatePeriod]}.
     */ ["filters-update-period"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.numberValidator,
    // ----- General settings section -----
    // ----- Extension specific settings section -----
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.UseOptimizedFilters]}.
     */ ["use-optimized-filters"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.CollectHitsCount]}.
     */ ["hits-count-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.ShowContextMenu]}.
     */ ["context-menu-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.ShowInfoAboutAdguard]}.
     */ ["show-info-about-adguard-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.ShowAppUpdatedInfo]}.
     */ ["show-app-updated-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.HideRateAdguard]}.
     */ ["hide-rate-block"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.UserRulesEditorWrap]}.
     */ ["user-rules-editor-wrap"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    // ----- Extension specific settings section -----
    // ----- Allowlist section -----
    /**
     * See {@link AllowlistConfig[AllowlistOption.Domains]}.
     */ ["allowlist-domains"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string(),
    /**
     * See {@link AllowlistConfig[AllowlistOption.InvertedDomains]}.
     */ ["block-list-domains"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string(),
    /**
     * See {@link AllowlistConfig[AllowlistOption.Enabled]}.
     */ ["allowlist-enabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link AllowlistConfig[AllowlistOption.Inverted]}.
     */ ["default-allowlist-mode"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    // ----- Allowlist section -----
    // ----- Stealth section -----
    /**
     * See {@link StealthConfig[StealthOption.DisableStealthMode]}.
     */ ["stealth-disable-stealth-mode"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.HideReferrer]}.
     */ ["stealth-hide-referrer"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.HideSearchQueries]}.
     */ ["stealth-hide-search-queries"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.SendDoNotTrack]}.
     */ ["stealth-send-do-not-track"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.BlockWebRTC]}.
     */ ["stealth-block-webrtc"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.RemoveXClientData]}.
     */ ["stealth-remove-x-client"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.SelfDestructThirdPartyCookies]}.
     */ ["stealth-block-third-party-cookies"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.SelfDestructThirdPartyCookiesTime]}.
     */ ["stealth-block-third-party-cookies-time"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    /**
     * See {@link StealthConfig[StealthOption.SelfDestructFirstPartyCookies]}.
     */ ["stealth-block-first-party-cookies"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link StealthConfig[StealthOption.SelfDestructFirstPartyCookiesTime]}.
     */ ["stealth-block-first-party-cookies-time"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].number */ .Ay.number(),
    // ----- Stealth section -----
    // ----- Statuses section -----
    /**
     * See {@link UserFilterConfig[UserFilterOption.Enabled]}.
     */ ["user-filter-enabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator,
    /**
     * See {@link FilterStateStorageData}.
     */ ["filters-state"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    /**
     * See {@link FilterVersionStorageData}.
     */ ["filters-version"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    /**
     * See {@link GroupStateStorageData}.
     */ ["groups-state"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    // ----- Statuses section -----
    // ----- Metadata section -----
    /**
     * See {@link Metadata}.
     */ ["filters-metadata"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    /**
     * See {@link I18nMetadata}.
     */ ["filters-i18n-metadata"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    /**
     * See {@link CustomFilterMetadataStorageData}.
     */ ["custom-filters"]: zod__WEBPACK_IMPORTED_MODULE_1__/* ["default"].string */ .Ay.string().optional(),
    // ----- Metadata section -----
    /**
     * Is filtering enabled or not. Is needed for fast toggling filtering
     * without reload entire extension.
     */ ["adguard-disabled"]: _preprocessor__WEBPACK_IMPORTED_MODULE_0__/* .SchemaPreprocessor */ .v.booleanValidator
});


/***/ }),

/***/ 85847:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _trusted_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69448);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 69448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export trustedDomainDataValidator */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14476);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Runtime validator for persistent trusted domains data.
 */ const trustedDomainDataValidator = zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].object */ .Ay.object({
    /**
     * String domain which was excluded from filtering.
     */ domain: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].string */ .Ay.string(),
    /**
     * For what time domain was excluded in milliseconds.
     */ expires: zod__WEBPACK_IMPORTED_MODULE_0__/* ["default"].number */ .Ay.number()
});


/***/ }),

/***/ 10135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $1: () => (/* binding */ NavigationTag),
/* harmony export */   DY: () => (/* binding */ NotifierType),
/* harmony export */   Ed: () => (/* binding */ FILTERING_LOG),
/* harmony export */   Eg: () => (/* binding */ TOTAL_BLOCKED_STATS_GROUP_ID),
/* harmony export */   FF: () => (/* binding */ BACKGROUND_TAB_ID),
/* harmony export */   Fx: () => (/* binding */ TRUSTED_TAG_KEYWORD),
/* harmony export */   GE: () => (/* binding */ FiltersUpdateTime),
/* harmony export */   JP: () => (/* binding */ NEWLINE_CHAR_UNIX),
/* harmony export */   Nq: () => (/* binding */ RECOMMENDED_TAG_ID),
/* harmony export */   WC: () => (/* binding */ NEWLINE_CHAR_REGEX),
/* harmony export */   Xu: () => (/* binding */ CUSTOM_FILTERS_START_ID),
/* harmony export */   gU: () => (/* binding */ SCROLLBAR_WIDTH),
/* harmony export */   ge: () => (/* binding */ AntibannerGroupsId),
/* harmony export */   iR: () => (/* binding */ WASTE_CHARACTERS),
/* harmony export */   j8: () => (/* binding */ AntiBannerFiltersId),
/* harmony export */   xG: () => (/* binding */ TRUSTED_TAG_ID),
/* harmony export */   yF: () => (/* binding */ FULLSCREEN_USER_RULES_EDITOR)
/* harmony export */ });
/* unused harmony exports APP_SCHEMA_VERSION, CLIENT_ID_KEY, APP_VERSION_KEY, SCHEMA_VERSION_KEY, ADGUARD_SETTINGS_KEY, PAGE_STATISTIC_KEY, TRUSTED_DOCUMENTS_CACHE_KEY, SB_LRU_CACHE_KEY, SB_SUSPENDED_CACHE_KEY, VIEWED_NOTIFICATIONS_KEY, LAST_NOTIFICATION_TIME_KEY, FILTERING_LOG_WINDOW_STATE, HIT_STATISTIC_KEY, ANNOYANCES_CONSENT_KEY, RULES_LIMITS_KEY, KEEP_ALIVE_PORT_NAME, CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER, OPTIONS_PAGE, FILTER_LIST_EXTENSION */
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * Current version of app storage data schema.
 *
 * Schema version is used on extension version update.
 *
 * Note: Do not to be confused with the protocol version of the imported config.
 */ const APP_SCHEMA_VERSION = 7;
const CLIENT_ID_KEY = 'client-id';
const APP_VERSION_KEY = 'app-version';
const SCHEMA_VERSION_KEY = 'schema-version';
const ADGUARD_SETTINGS_KEY = 'adguard-settings';
const PAGE_STATISTIC_KEY = 'page-statistic';
const TRUSTED_DOCUMENTS_CACHE_KEY = 'trusted-documents';
const SB_LRU_CACHE_KEY = 'sb-lru-cache';
const SB_SUSPENDED_CACHE_KEY = 'safebrowsing-suspended-from';
const VIEWED_NOTIFICATIONS_KEY = 'viewed-notifications';
const LAST_NOTIFICATION_TIME_KEY = 'viewed-notification-time';
const FILTERING_LOG_WINDOW_STATE = 'filtering-log-window-state';
const HIT_STATISTIC_KEY = 'filters-hit-count';
const ANNOYANCES_CONSENT_KEY = 'annoyances-consent';
const RULES_LIMITS_KEY = 'rules-limits';
var AntiBannerFiltersId;
(function(AntiBannerFiltersId) {
    AntiBannerFiltersId[AntiBannerFiltersId["StealthModeFilterId"] = -1] = "StealthModeFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["UserFilterId"] = 0] = "UserFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["EnglishFilterId"] = 2] = "EnglishFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["TrackingFilterId"] = 3] = "TrackingFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["SocialFilterId"] = 4] = "SocialFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["SearchAndSelfPromoFilterId"] = 10] = "SearchAndSelfPromoFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["AnnoyancesCombinedFilterId"] = 14] = "AnnoyancesCombinedFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["UrlTrackingFilterId"] = 17] = "UrlTrackingFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["QuickFixesFilterId"] = 24] = "QuickFixesFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["AllowlistFilterId"] = 100] = "AllowlistFilterId";
    AntiBannerFiltersId[AntiBannerFiltersId["MobileAdsFilterId"] = 11] = "MobileAdsFilterId";
})(AntiBannerFiltersId || (AntiBannerFiltersId = {}));
var AntibannerGroupsId;
(function(AntibannerGroupsId) {
    // custom filters group identifier
    AntibannerGroupsId[AntibannerGroupsId["CustomFiltersGroupId"] = 0] = "CustomFiltersGroupId";
    AntibannerGroupsId[AntibannerGroupsId["AdBlockingFiltersGroupId"] = 1] = "AdBlockingFiltersGroupId";
    AntibannerGroupsId[AntibannerGroupsId["PrivacyFiltersGroupId"] = 2] = "PrivacyFiltersGroupId";
    AntibannerGroupsId[AntibannerGroupsId["SocialFiltersGroupId"] = 3] = "SocialFiltersGroupId";
    AntibannerGroupsId[AntibannerGroupsId["AnnoyancesFiltersGroupId"] = 4] = "AnnoyancesFiltersGroupId";
    AntibannerGroupsId[AntibannerGroupsId["SecurityFiltersGroupId"] = 5] = "SecurityFiltersGroupId";
    // other filters group identifier
    AntibannerGroupsId[AntibannerGroupsId["OtherFiltersGroupId"] = 6] = "OtherFiltersGroupId";
    // language-specific group identifier
    AntibannerGroupsId[AntibannerGroupsId["LanguageFiltersGroupId"] = 7] = "LanguageFiltersGroupId";
})(AntibannerGroupsId || (AntibannerGroupsId = {}));
/**
 * Recommended filters tag ID.
 *
 * @see https://github.com/AdguardTeam/FiltersRegistry/blob/4528f7ae6b38aec90111a27efb0a7e0958d0cf37/tags/metadata.json#L40
 */ const RECOMMENDED_TAG_ID = 10;
var NotifierType;
(function(NotifierType) {
    NotifierType["RequestFilterUpdated"] = "event.request.filter.updated";
    NotifierType["UserFilterUpdated"] = "event.user.filter.updated";
    NotifierType["CustomFilterAdded"] = "event.custom.filter.added";
    NotifierType["UpdateAllowlistFilterRules"] = "event.update.allowlist.filter.rules";
    NotifierType["SettingUpdated"] = "event.update.setting.value";
    NotifierType["FiltersUpdateCheckReady"] = "event.update.filters.check";
    // Log events
    NotifierType["TabAdded"] = "log.tab.added";
    NotifierType["TabClose"] = "log.tab.close";
    NotifierType["TabUpdate"] = "log.tab.update";
    NotifierType["TabReset"] = "log.tab.reset";
    NotifierType["LogEventAdded"] = "log.event.added";
    // Sync events
    NotifierType["SettingsUpdated"] = "event.sync.finished";
    // Fullscreen user rules events
    NotifierType["FullscreenUserRulesEditorUpdated"] = "event.user.rules.editor.updated";
})(NotifierType || (NotifierType = {}));
const FULLSCREEN_USER_RULES_EDITOR = 'fullscreen_user_rules_editor';
const FILTERING_LOG = 'filtering-log';
const KEEP_ALIVE_PORT_NAME = 'keep-alive';
var NavigationTag;
(function(NavigationTag) {
    NavigationTag["Regular"] = "regular";
    NavigationTag["Party"] = "party";
})(NavigationTag || (NavigationTag = {}));
/**
 * Trusted tag for custom filters
 */ const TRUSTED_TAG_KEYWORD = 'trusted';
/**
 * Trusted tag id for custom filters.
 */ const TRUSTED_TAG_ID = 999;
/**
 * Custom filters group display number
 */ const CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER = 99;
/**
 * Custom filters identifiers starts from this number
 */ const CUSTOM_FILTERS_START_ID = 1000;
// Unnecessary characters that will be replaced
const WASTE_CHARACTERS = /[.*+?^${}()|[\]\\]/g;
// Custom scrollbar width
const SCROLLBAR_WIDTH = 12;
const BACKGROUND_TAB_ID = -1;
const TOTAL_BLOCKED_STATS_GROUP_ID = 'total';
var FiltersUpdateTime;
(function(FiltersUpdateTime) {
    FiltersUpdateTime[FiltersUpdateTime["Disabled"] = 0] = "Disabled";
    FiltersUpdateTime[FiltersUpdateTime["OneHour"] = 3600000] = "OneHour";
    FiltersUpdateTime[FiltersUpdateTime["SixHours"] = 21600000] = "SixHours";
    FiltersUpdateTime[FiltersUpdateTime["TwelveHours"] = 43200000] = "TwelveHours";
    FiltersUpdateTime[FiltersUpdateTime["TwentyFourHours"] = 86400000] = "TwentyFourHours";
    FiltersUpdateTime[FiltersUpdateTime["FortyEightHours"] = 172800000] = "FortyEightHours";
    FiltersUpdateTime[FiltersUpdateTime["Default"] = -1] = "Default";
})(FiltersUpdateTime || (FiltersUpdateTime = {}));
const NEWLINE_CHAR_UNIX = '\n';
const NEWLINE_CHAR_REGEX = /\r?\n/;
const OPTIONS_PAGE = 'pages/options.html';
const FILTER_LIST_EXTENSION = '.txt';


/***/ }),

/***/ 27116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ getErrorMessage)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63318);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Checks if error has message.
 *
 * @param error Error object.
 */ function isErrorWithMessage(error) {
    return typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string';
}
/**
 * Converts error to the error with message.
 *
 * @param maybeError Possible error.
 */ function toErrorWithMessage(maybeError) {
    if (isErrorWithMessage(maybeError)) {
        return maybeError;
    }
    try {
        return new Error(JSON.stringify(maybeError));
    } catch  {
        // fallback in case there's an error stringifying the maybeError
        // like with circular references for example.
        return new Error(String(maybeError));
    }
}
/**
 * Converts error object to error with message. This method might be helpful to handle thrown errors.
 *
 * @param error Error object.
 *
 * @returns Message of the error.
 */ function getErrorMessage(error) {
    return toErrorWithMessage(error).message;
}


/***/ }),

/***/ 43330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ MessageType),
/* harmony export */   z: () => (/* binding */ APP_MESSAGE_HANDLER_NAME)
/* harmony export */ });
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * Message types used for message passing between extension contexts
 * (popup, filtering log, content scripts, background)
 */ const APP_MESSAGE_HANDLER_NAME = 'app';
var MessageType;
(function(MessageType) {
    MessageType["CreateEventListener"] = "createEventListener";
    MessageType["RemoveListener"] = "removeListener";
    MessageType["OpenExtensionStore"] = "openExtensionStore";
    MessageType["AddAndEnableFilter"] = "addAndEnableFilter";
    MessageType["ApplySettingsJson"] = "applySettingsJson";
    MessageType["OpenFilteringLog"] = "openFilteringLog";
    MessageType["OpenFullscreenUserRules"] = "openFullscreenUserRules";
    MessageType["UpdateFullscreenUserRulesTheme"] = "updateFullscreenUserRulesTheme";
    MessageType["ResetBlockedAdsCount"] = "resetBlockedAdsCount";
    MessageType["ResetSettings"] = "resetSettings";
    MessageType["GetUserRules"] = "getUserRules";
    MessageType["SaveUserRules"] = "saveUserRules";
    MessageType["GetAllowlistDomains"] = "getAllowlistDomains";
    MessageType["SaveAllowlistDomains"] = "saveAllowlistDomains";
    MessageType["CheckFiltersUpdate"] = "checkFiltersUpdate";
    MessageType["DisableFiltersGroup"] = "disableFiltersGroup";
    MessageType["DisableFilter"] = "disableFilter";
    MessageType["LoadCustomFilterInfo"] = "loadCustomFilterInfo";
    MessageType["SubscribeToCustomFilter"] = "subscribeToCustomFilter";
    MessageType["RemoveAntiBannerFilter"] = "removeAntiBannerFilter";
    MessageType["GetIsEngineStarted"] = "getIsEngineStarted";
    MessageType["GetTabInfoForPopup"] = "getTabInfoForPopup";
    MessageType["ChangeApplicationFilteringPaused"] = "changeApplicationFilteringPaused";
    MessageType["OpenRulesLimitsTab"] = "openRulesLimitsTab";
    MessageType["OpenSettingsTab"] = "openSettingsTab";
    MessageType["OpenAssistant"] = "openAssistant";
    MessageType["OpenAbuseTab"] = "openAbuseTab";
    MessageType["OpenSiteReportTab"] = "openSiteReportTab";
    MessageType["OpenComparePage"] = "openComparePage";
    MessageType["ResetUserRulesForPage"] = "resetUserRulesForPage";
    MessageType["RemoveAllowlistDomain"] = "removeAllowlistDomainPopup";
    MessageType["AddAllowlistDomainPopup"] = "addAllowlistDomainPopup";
    MessageType["OnOpenFilteringLogPage"] = "onOpenFilteringLogPage";
    MessageType["GetFilteringLogData"] = "getFilteringLogData";
    MessageType["InitializeFrameScript"] = "initializeFrameScript";
    MessageType["OnCloseFilteringLogPage"] = "onCloseFilteringLogPage";
    MessageType["GetFilteringInfoByTabId"] = "getFilteringInfoByTabId";
    MessageType["SynchronizeOpenTabs"] = "synchronizeOpenTabs";
    MessageType["ClearEventsByTabId"] = "clearEventsByTabId";
    MessageType["RefreshPage"] = "refreshPage";
    MessageType["AddUserRule"] = "addUserRule";
    MessageType["RemoveUserRule"] = "removeUserRule";
    MessageType["EnableFiltersGroup"] = "enableFiltersGroup";
    MessageType["NotifyListeners"] = "notifyListeners";
    MessageType["AddLongLivedConnection"] = "addLongLivedConnection";
    MessageType["GetOptionsData"] = "getOptionsData";
    MessageType["ChangeUserSettings"] = "changeUserSetting";
    MessageType["CheckRequestFilterReady"] = "checkRequestFilterReady";
    MessageType["OpenThankyouPage"] = "openThankYouPage";
    MessageType["OpenSafebrowsingTrusted"] = "openSafebrowsingTrusted";
    MessageType["GetSelectorsAndScripts"] = "getSelectorsAndScripts";
    MessageType["CheckPageScriptWrapperRequest"] = "checkPageScriptWrapperRequest";
    MessageType["ProcessShouldCollapse"] = "processShouldCollapse";
    MessageType["ProcessShouldCollapseMany"] = "processShouldCollapseMany";
    MessageType["AddFilteringSubscription"] = "addFilterSubscription";
    MessageType["SetNotificationViewed"] = "setNotificationViewed";
    MessageType["SaveCssHitsStats"] = "saveCssHitStats";
    MessageType["GetCookieRules"] = "getCookieRules";
    MessageType["SaveCookieLogEvent"] = "saveCookieRuleEvent";
    MessageType["LoadSettingsJson"] = "loadSettingsJson";
    MessageType["AddUrlToTrusted"] = "addUrlToTrusted";
    MessageType["SetPreserveLogState"] = "setPreserveLogState";
    MessageType["GetUserRulesEditorData"] = "getUserRulesEditorData";
    MessageType["GetEditorStorageContent"] = "getEditorStorageContent";
    MessageType["SetEditorStorageContent"] = "setEditorStorageContent";
    MessageType["SetFilteringLogWindowState"] = "setFilteringLogWindowState";
    MessageType["AppInitialized"] = "appInitialized";
    MessageType["UpdateTotalBlocked"] = "updateTotalBlocked";
    MessageType["ScriptletCloseWindow"] = "scriptletCloseWindow";
    MessageType["ShowRuleLimitsAlert"] = "showRuleLimitsAlert";
    MessageType["ShowAlertPopup"] = "showAlertPopup";
    MessageType["ShowVersionUpdatedPopup"] = "showVersionUpdatedPopup";
    MessageType["UpdateListeners"] = "updateListeners";
    MessageType["SetConsentedFilters"] = "setConsentedFilters";
    MessageType["GetIsConsentedFilter"] = "getIsConsentedFilter";
    MessageType["GetRulesLimitsCountersMv3"] = "getRulesLimitsCountersMv3";
    MessageType["CanEnableStaticFilterMv3"] = "canEnableStaticFilterMv3";
    MessageType["CanEnableStaticGroupMv3"] = "canEnableStaticGroupMv3";
    MessageType["ClearRulesLimitsWarningMv3"] = "clearRulesLimitsWarningMv3";
    MessageType["RestoreFiltersMv3"] = "restoreFiltersMv3";
    MessageType["CurrentLimitsMv3"] = "currentLimitsMv3";
})(MessageType || (MessageType = {}));


/***/ }),

/***/ 12839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Go: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   zk: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43330);
/* harmony import */ var _send_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20583);
/* harmony import */ var _message_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17897);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




/***/ }),

/***/ 17897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export MessageHandler */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63318);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79899);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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


/**
 * API for handling Messages via {@link browser.runtime.onMessage}
 */ class MessageHandler {
    init() {
        browser.runtime.onMessage.addListener(this.handleMessage);
    }
    /**
     * Add message listener.
     * Listeners limited to 1 per message type to prevent race
     * condition while response processing.
     *
     * TODO: implement listeners priority execution strategy
     *
     * @param type - {@link MessageType}
     * @param listener - {@link MessageListener}
     * @throws error, if message listener already added
     */ addListener(type, listener) {
        if (this.listeners.has(type)) {
            throw new Error(`Message handler: ${type} listener has already been registered`);
        }
        this.listeners.set(type, listener);
    }
    /**
     * Removes message listener.
     *
     * @param type - {@link MessageType}
     */ removeListener(type) {
        this.listeners.delete(type);
    }
    /**
     * Removes all listeners
     */ removeListeners() {
        this.listeners.clear();
    }
    constructor(){
        _define_property(this, "listeners", new Map());
        this.handleMessage = this.handleMessage.bind(this);
    }
}


/***/ }),

/***/ 20583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports sendMessage, sendTabMessage */
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79899);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43330);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * {@link sendMessage} sends app message via {@link browser.runtime.sendMessage} and
 * gets response from another extension page message handler
 *
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns message handler response
 */ async function sendMessage(message) {
    try {
        return await browser.runtime.sendMessage({
            handlerName: APP_MESSAGE_HANDLER_NAME,
            ...message
        });
    } catch (e) {
    // do nothing
    }
}
/**
 * {@link sendTabMessage} sends message to specified tab via {@link browser.tabs.sendMessage} and
 * gets response from it
 *
 * @param tabId - tab id
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns tab message handler response
 */ async function sendTabMessage(tabId, message) {
    return browser.tabs.sendMessage(tabId, {
        handlerName: APP_MESSAGE_HANDLER_NAME,
        ...message
    });
}


/***/ }),

/***/ 74701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i0: () => (/* binding */ AppearanceTheme)
/* harmony export */ });
/* unused harmony exports DEFAULT_FILTERS_UPDATE_PERIOD, DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN, DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN, DEFAULT_ALLOWLIST, DEFAULT_INVERTED_ALLOWLIST, defaultSettings */
/* harmony import */ var _background_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21479);
/* harmony import */ var _user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56075);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

var AppearanceTheme;
(function(AppearanceTheme) {
    AppearanceTheme["System"] = "system";
    AppearanceTheme["Dark"] = "dark";
    AppearanceTheme["Light"] = "light";
})(AppearanceTheme || (AppearanceTheme = {}));
const DEFAULT_FILTERS_UPDATE_PERIOD = -1;
const DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN = 4320;
const DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN = 2880;
const DEFAULT_ALLOWLIST = [];
const DEFAULT_INVERTED_ALLOWLIST = [];
const defaultSettings = {
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableShowAdguardPromoInfo]: !_user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent */ .B.isWindows && !_user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent */ .B.isMacOs || _user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent */ .B.isEdge,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableSafebrowsing]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableCollectHits]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DefaultAllowlistMode]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.AllowlistEnabled]: true,
    // TODO: consider ditching optimized filters for mobile mv3 builds if (or when) they become available
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.UseOptimizedFilters]: _user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent */ .B.isAndroid,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableDetectFilters]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableShowAppUpdatedNotification]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.FiltersUpdatePeriod]: DEFAULT_FILTERS_UPDATE_PERIOD,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableStealthMode]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.HideReferrer]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.HideSearchQueries]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.SendDoNotTrack]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.RemoveXClientData]: _user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent */ .B.isChrome,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.BlockWebRTC]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.SelfDestructThirdPartyCookies]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.SelfDestructThirdPartyCookiesTime]: DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.SelfDestructFirstPartyCookies]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.SelfDestructFirstPartyCookiesTime]: DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.AppearanceTheme]: "system",
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.UserFilterEnabled]: true,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.HideRateBlock]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.UserRulesEditorWrap]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableFiltering]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableShowPageStats]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.DisableShowContextMenu]: false,
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.AllowlistDomains]: JSON.stringify(DEFAULT_ALLOWLIST),
    [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption */ .GZ.InvertedAllowlistDomains]: JSON.stringify(DEFAULT_INVERTED_ALLOWLIST)
};


/***/ }),

/***/ 78947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ reactTranslator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92400);
/* harmony import */ var _adguard_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10854);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53984);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/**
 * Retrieves localized messages by key, formats and converts into react components or string
 */ const reactTranslator = _adguard_translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .Tl.createReactTranslator(_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R, react__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 56075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ UserAgent)
/* harmony export */ });
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2212);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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

/**
 * Helper class for user agent data.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API#browser_compatibility
 */ class UserAgent {
    /**
     * Returns current browser name.
     *
     * @returns user agent browser name.
     */ static getBrowserName() {
        return UserAgent.isFirefoxMobile ? 'Firefox Mobile' : UserAgent.parser.getBrowser().name;
    }
    /**
     * Returns current OS name.
     *
     * @returns OS name as string if possible to detect, undefined otherwise.
     */ static getSystemName() {
        return UserAgent.parser.getOS().name;
    }
    /**
     * Returns current OS version.
     *
     * @returns OS version as string if possible to detect, undefined otherwise.
     */ static getSystemVersion() {
        return UserAgent.parser.getOS().version;
    }
    /**
     * Returns current platform version.
     * Uses NavigatorUAData.getHighEntropyValues() to get platform version.
     *
     * @returns Actual platform version as string if possible to detect, undefined otherwise.
     */ static async getPlatformVersion() {
        let platformVersion;
        try {
            // @ts-ignore
            const ua = await navigator.userAgentData.getHighEntropyValues([
                UserAgent.PLATFORM_VERSION
            ]);
            platformVersion = ua[UserAgent.PLATFORM_VERSION];
        } catch (e) {
        // do nothing
        }
        return platformVersion;
    }
    /**
     * Returns actual Windows version if it is parsed from user agent as Windows 10.
     *
     * @see {@link https://learn.microsoft.com/en-us/microsoft-edge/web-platform/how-to-detect-win11#sample-code-for-detecting-windows-11}.
     *
     * @returns Actual Windows version.
     */ static async getActualWindowsVersion(version) {
        let actualVersion = version;
        const platformVersion = await UserAgent.getPlatformVersion();
        if (typeof platformVersion !== 'undefined') {
            const rawMajorPlatformVersion = platformVersion.split('.')[0];
            const majorPlatformVersion = rawMajorPlatformVersion && parseInt(rawMajorPlatformVersion, 10);
            if (!majorPlatformVersion || Number.isNaN(majorPlatformVersion)) {
                return actualVersion;
            }
            if (majorPlatformVersion >= UserAgent.MIN_WINDOWS_11_PLATFORM_VERSION) {
                actualVersion = UserAgent.WINDOWS_11_OS_VERSION;
            }
        }
        return actualVersion;
    }
    /**
     * Returns actual MacOS version if it is possible to detect, otherwise returns passed `version`.
     *
     * @param version MacOS version parsed from user agent.
     *
     * @returns Actual MacOS version.
     */ static async getActualMacosVersion(version) {
        let actualVersion = version;
        const platformVersion = await UserAgent.getPlatformVersion();
        if (typeof platformVersion !== 'undefined') {
            actualVersion = platformVersion;
        }
        return actualVersion;
    }
    /**
     * Returns current system info — OS name and version.
     *
     * @returns System info as string if possible to detect, undefined otherwise.
     */ static async getSystemInfo() {
        let systemInfo = '';
        const osName = UserAgent.getSystemName();
        let osVersion = UserAgent.getSystemVersion();
        if (typeof osName !== 'undefined') {
            systemInfo += osName;
        }
        if (typeof osVersion !== 'undefined') {
            // windows 11 is parsed as windows 10 from user agent
            if (UserAgent.isWindows && osVersion === UserAgent.WINDOWS_10_OS_VERSION) {
                osVersion = await UserAgent.getActualWindowsVersion(osVersion);
            } else if (UserAgent.isMacOs) {
                // mac os version can be parsed from user agent as 10.15.7
                // so it also might be more specific version like 13.5.2
                osVersion = await UserAgent.getActualMacosVersion(osVersion);
            }
            systemInfo += ` ${osVersion}`;
        }
        if (systemInfo.length === 0) {
            return undefined;
        }
        return systemInfo;
    }
    /**
     * Check if the current browser is as given.
     *
     * @param browserName Browser Name.
     * @returns true, if current browser has specified name.
     */ static isTargetBrowser(browserName) {
        return UserAgent.parser.getBrowser().name === browserName;
    }
    /**
     * Check if current platform is as given.
     *
     * @param platformName Platform name.
     * @returns true, if current browser has specified name.
     */ static isTargetPlatform(platformName) {
        return UserAgent.getSystemName() === platformName;
    }
    /**
     * Check if current engine is as given.
     *
     * @param engineName Engine name.
     * @returns true, if current engine has specified name.
     */ static isTargetEngine(engineName) {
        return UserAgent.parser.getEngine().name === engineName;
    }
    static isTargetDeviceType(deviceType) {
        return UserAgent.parser.getDevice().type === deviceType;
    }
    /**
     * Returns a major browser version.
     *
     * @returns browser version number or undefined.
     */ static getVersion() {
        var _browser_version;
        const browser = this.parser.getBrowser();
        const versionNumber = Number((_browser_version = browser.version) === null || _browser_version === void 0 ? void 0 : _browser_version.split('.')[0]);
        return Number.isNaN(versionNumber) ? undefined : versionNumber;
    }
}
_define_property(UserAgent, "WINDOWS_10_OS_VERSION", '10');
_define_property(UserAgent, "WINDOWS_11_OS_VERSION", '11');
_define_property(UserAgent, "PLATFORM_VERSION", 'platformVersion');
_define_property(UserAgent, "MIN_WINDOWS_11_PLATFORM_VERSION", 13);
_define_property(UserAgent, "parser", new (ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default())(navigator.userAgent));
_define_property(UserAgent, "version", UserAgent.getVersion());
_define_property(UserAgent, "isChrome", UserAgent.isTargetBrowser('Chrome'));
_define_property(UserAgent, "isFirefox", UserAgent.isTargetBrowser('Firefox'));
_define_property(UserAgent, "isOpera", UserAgent.isTargetBrowser('Opera'));
_define_property(UserAgent, "isYandex", UserAgent.isTargetBrowser('Yandex'));
_define_property(UserAgent, "isEdge", UserAgent.isTargetBrowser('Edge'));
_define_property(UserAgent, "isEdgeChromium", UserAgent.isEdge && !!(UserAgent.version && UserAgent.version >= 79));
_define_property(UserAgent, "isMacOs", UserAgent.isTargetPlatform('Mac OS'));
_define_property(UserAgent, "isWindows", UserAgent.isTargetPlatform('Windows'));
_define_property(UserAgent, "isAndroid", UserAgent.isTargetPlatform('Android'));
_define_property(UserAgent, "isChromium", UserAgent.isTargetEngine('Blink'));
_define_property(UserAgent, "isMobileDevice", UserAgent.isTargetDeviceType('mobile'));
_define_property(UserAgent, "isFirefoxMobile", UserAgent.isFirefox && UserAgent.isMobileDevice);
_define_property(UserAgent, "isSupportedBrowser", UserAgent.isChrome && Number(UserAgent.version) >= 79 || UserAgent.isEdgeChromium && Number(UserAgent.version) >= 79 || UserAgent.isFirefox && Number(UserAgent.version) >= 78 || UserAgent.isFirefoxMobile && Number(UserAgent.version) >= 113 || UserAgent.isOpera && Number(UserAgent.version) >= 66);
_define_property(UserAgent, "browserName", UserAgent.getBrowserName());


/***/ }),

/***/ 42400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pM: () => (/* binding */ addMinDurationTime)
/* harmony export */ });
/* unused harmony exports sleep, sleepIfNecessary */
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * Sleeps given period of milliseconds
 *
 * @param ms - milliseconds
 */ async function sleep(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}
/**
 * Sleeps necessary period of time if minimum duration didn't pass since entry time
 *
 * @param entryTimeMs
 * @param minDurationMs
 */ async function sleepIfNecessary(entryTimeMs, minDurationMs) {
    if (Date.now() - entryTimeMs < minDurationMs) {
        await sleep(minDurationMs - (Date.now() - entryTimeMs));
    }
}
/**
 * Executes async function with at least required time
 *
 * @param fn - function to execute
 * @param minDurationMs - minimum executing time
 */ // TODO: generic types
function addMinDurationTime(fn, minDurationMs) {
    return async (...args)=>{
        const start = Date.now();
        try {
            const response = await fn(...args);
            await sleepIfNecessary(start, minDurationMs);
            return response;
        } catch (e) {
            await sleepIfNecessary(start, minDurationMs);
            throw e;
        }
    };
}


/***/ }),

/***/ 8658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* reexport */ AttachmentPortal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(55285);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/AttachmentPortal/AttachmentPortal.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

const TOOLTIP_EDGE_PADDING = 4; // px
const getCssString = (position, visible)=>{
    const { x, y } = position;
    let css = `z-index:999;position:absolute;top:${y}px;left:${x}px;`;
    if (!visible) {
        css += 'visibility:hidden;';
    }
    return css;
};
const AttachmentPortal = ({ rootId, position, children })=>{
    const parent = document.getElementById(rootId);
    const ref = (0,react.useRef)(document.createElement('div'));
    (0,react.useEffect)(()=>{
        const el = ref.current;
        el.setAttribute('style', getCssString(position, false));
        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
        const rect = el.getBoundingClientRect();
        const offsetEdge = {
            top: rect.y,
            right: window.innerWidth - rect.right,
            bottom: window.innerHeight - rect.bottom,
            left: rect.x
        };
        const nextPosition = {
            ...position
        };
        if (offsetEdge.right < TOOLTIP_EDGE_PADDING) {
            nextPosition.x = rect.x + offsetEdge.right - TOOLTIP_EDGE_PADDING;
        }
        if (offsetEdge.left < TOOLTIP_EDGE_PADDING) {
            nextPosition.x = rect.x - offsetEdge.left + TOOLTIP_EDGE_PADDING;
        }
        if (offsetEdge.top < TOOLTIP_EDGE_PADDING) {
            nextPosition.y = rect.y - offsetEdge.top + TOOLTIP_EDGE_PADDING;
        }
        if (offsetEdge.bottom < TOOLTIP_EDGE_PADDING) {
            nextPosition.y = rect.y + offsetEdge.bottom - TOOLTIP_EDGE_PADDING;
        }
        el.setAttribute('style', getCssString(nextPosition, true));
        return ()=>{
            parent === null || parent === void 0 ? void 0 : parent.removeChild(el);
        };
    }, [
        ref,
        parent,
        position
    ]);
    return /*#__PURE__*/ (0,react_dom.createPortal)(children, ref.current);
};

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 37628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ SavingFSMState),
/* harmony export */   gq: () => (/* binding */ CURSOR_POSITION_AFTER_INSERT),
/* harmony export */   s0: () => (/* binding */ createSavingService),
/* harmony export */   xo: () => (/* binding */ SavingFSMEvent)
/* harmony export */ });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54709);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8743);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41570);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68672);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

var SavingFSMState;
(function(SavingFSMState) {
    SavingFSMState["Idle"] = "idle";
    SavingFSMState["Saving"] = "saving";
    SavingFSMState["Saved"] = "saved";
})(SavingFSMState || (SavingFSMState = {}));
var SavingFSMEvent;
(function(SavingFSMEvent) {
    SavingFSMEvent["Save"] = "save";
})(SavingFSMEvent || (SavingFSMEvent = {}));
const SAVED_DISPLAY_TIMEOUT_MS = 1000;
const SAVE_DATA_ACTOR_NAME = 'saveDataActor';
// TODO: Maybe we can remove this service?
const createSavingService = ({ id, services })=>{
    const workflow = (0,xstate__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)({
        actors: {
            [SAVE_DATA_ACTOR_NAME]: (0,xstate__WEBPACK_IMPORTED_MODULE_2__/* .fromPromise */ .Sx)(async ({ input })=>{
                await services.saveData(input);
            })
        }
    }).createMachine({
        id,
        initial: "idle",
        states: {
            ["idle"]: {
                on: {
                    ["save"]: "saving"
                }
            },
            ["saving"]: {
                invoke: {
                    src: SAVE_DATA_ACTOR_NAME,
                    input: ({ event })=>({
                            event
                        }),
                    onDone: {
                        target: "saved"
                    },
                    onError: {
                        target: "saved",
                        actions: ({ event })=>{
                            const { error } = event;
                            _common_logger__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .v.error(error);
                        }
                    }
                }
            },
            ["saved"]: {
                after: {
                    [SAVED_DISPLAY_TIMEOUT_MS]: "idle"
                }
            }
        }
    });
    const actor = (0,xstate__WEBPACK_IMPORTED_MODULE_3__.A)(workflow);
    actor.subscribe((snapshot)=>{
        _common_logger__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .v.debug(id, {
            currentState: snapshot.value
        });
    });
    return actor.start();
};
/**
 * undefined, 0 - Select all
 * -1 - At the beginning
 * 1 - At the end
 * see https://ace.c9.io/api/classes/src_editor.Editor.html#setValue
 */ const CURSOR_POSITION_AFTER_INSERT = 1;


/***/ }),

/***/ 80896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./Extension/src/common/translators/translator.ts
var translator = __webpack_require__(91310);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.ts + 1 modules
var AttachmentPortal = __webpack_require__(8658);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.tsx
var Icon = __webpack_require__(3770);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(29884);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6565);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(33383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(24500);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(23536);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(46429);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/Loader/loader.pcss
var loader = __webpack_require__(18288);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/Loader/loader.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(loader/* default */.A, options);




       /* harmony default export */ const Loader_loader = (loader/* default */.A && loader/* default */.A.locals ? loader/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/Loader/Loader.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




const Loader = ({ showLoader })=>{
    const LOADER_POSITION = {
        x: 0,
        y: 0
    };
    return /*#__PURE__*/ react.createElement(react.Fragment, null, showLoader && /*#__PURE__*/ react.createElement(AttachmentPortal/* AttachmentPortal */.c, {
        rootId: "root-portal",
        position: LOADER_POSITION
    }, /*#__PURE__*/ react.createElement("div", {
        className: "loader"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "loader__background"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "loader__container"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "loader__content"
    }, /*#__PURE__*/ react.createElement(Icon/* Icon */.I, {
        id: "#loading",
        classname: "icon--24",
        animationCondition: showLoader,
        animationClassname: "icon--loading"
    }), /*#__PURE__*/ react.createElement("div", {
        className: "loader__text"
    }, translator/* translator */.N.getMessage('options_loader_applying_changes'))))))));
};

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/Loader/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 98160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* reexport */ SavingButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var node_modules_classnames = __webpack_require__(96400);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/savingFSM.ts
var savingFSM = __webpack_require__(37628);
// EXTERNAL MODULE: ./Extension/src/common/translators/translator.ts
var translators_translator = __webpack_require__(91310);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.tsx
var ui_Icon = __webpack_require__(3770);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/SavingButton/SavingButton.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




const renderSavingState = (savingRulesState)=>{
    const indicatorTextMap = {
        [SavingFSMState.Idle]: null,
        [SavingFSMState.Saved]: translator.getMessage('options_editor_indicator_saved'),
        [SavingFSMState.Saving]: translator.getMessage('options_editor_indicator_saving')
    };
    const indicatorText = indicatorTextMap[savingRulesState];
    if (!indicatorText) {
        return null;
    }
    const indicatorClassnames = classnames('editor__label', {
        'editor__label--saved': savingRulesState === SavingFSMState.Saved
    });
    return /*#__PURE__*/ React.createElement("div", {
        className: indicatorClassnames
    }, /*#__PURE__*/ React.createElement(Icon, {
        id: "#tick",
        classname: "icon--18 icon--green-default editor__icon"
    }), indicatorText);
};
const SavingButton = ({ onClick, savingState, contentChanged })=>{
    return /*#__PURE__*/ react.createElement("div", {
        className: "actions__saving"
    },  false && 0, /*#__PURE__*/ react.createElement("button", {
        type: "button",
        className: "button button--l button--green-bg actions__btn actions__btn--saving",
        onClick: onClick,
        title: translators_translator/* translator */.N.getMessage('options_editor_save'),
        disabled: !contentChanged
    }, translators_translator/* translator */.N.getMessage('options_editor_save')));
};

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/SavingButton/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 61448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ userRulesEditorStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92400);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52905);
/* harmony import */ var _services_messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90495);
/* harmony import */ var _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37628);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class UserRulesEditorStore {
    async requestSettingsData() {
        const data = await _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger */ .e.getOptionsData();
        (0,mobx__WEBPACK_IMPORTED_MODULE_3__/* .runInAction */ .h5)(()=>{
            this.settings = data.settings;
        });
    }
    async updateSetting(settingId, value) {
        if (this.settings) {
            this.settings.values[settingId] = value;
        }
        await _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger */ .e.changeUserSetting(settingId, value);
    }
    async toggleUserRulesEditorWrapMode() {
        this.userRulesEditorWrap = !this.userRulesEditorWrap;
        if (this.settings) {
            await this.updateSetting(this.settings.names.UserRulesEditorWrap, this.userRulesEditorWrap);
        }
    }
    setUserRulesEditorWrapMode(value) {
        this.userRulesEditorWrap = value;
    }
    get userRulesEditorWrapState() {
        if (this.settings) {
            this.setUserRulesEditorWrapMode(this.settings.values[this.settings.names.UserRulesEditorWrap]);
        }
        return this.userRulesEditorWrap;
    }
    get userFilterEnabledSettingId() {
        return this.settings.names.UserFilterEnabled;
    }
    get userFilterEnabled() {
        if (this.settings) {
            return this.settings.values[this.userFilterEnabledSettingId];
        }
        return false;
    }
    saveUserRules(value) {
        return new Promise((resolve, reject)=>{
            try {
                this.savingService.send({
                    type: _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .SavingFSMEvent */ .xo.Save,
                    value,
                    callback: resolve
                });
            } catch (e) {
                reject(e);
            }
        });
    }
    constructor(){
        _define_property(this, "settings", null);
        _define_property(this, "userRulesEditorContentChanged", false);
        _define_property(this, "userRulesEditorWrap", null);
        _define_property(this, "userRulesExportAvailable", false);
        _define_property(this, "userRulesEditorPrefsDropped", false);
        _define_property(this, "specificLimitWarningData", null);
        _define_property(this, "savingService", (0,_Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .createSavingService */ .s0)({
            id: 'userRules',
            services: {
                saveData: async ({ event })=>{
                    const { value, callback } = event;
                    await _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger */ .e.saveUserRules(value);
                    await callback();
                }
            }
        }));
        _define_property(this, "savingUserRulesState", this.savingService.getSnapshot().value);
        _define_property(this, "setUserRulesEditorContentChangedState", (state)=>{
            this.userRulesEditorContentChanged = state;
        });
        _define_property(this, "setUserRulesExportAvailableState", (state)=>{
            this.userRulesExportAvailable = state;
        });
        _define_property(this, "setUserRulesEditorPrefsDropped", (state)=>{
            this.userRulesEditorPrefsDropped = state;
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_3__/* .makeObservable */ .Gn)(this);
        this.updateSetting = this.updateSetting.bind(this);
        this.savingService.subscribe((state)=>{
            (0,mobx__WEBPACK_IMPORTED_MODULE_3__/* .runInAction */ .h5)(()=>{
                this.savingUserRulesState = state.value;
                if (state.value === _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .SavingFSMState */ .A3.Saving) {
                    this.userRulesEditorContentChanged = false;
                }
            });
        });
    }
}
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "settings", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "userRulesEditorContentChanged", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "userRulesEditorWrap", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "userRulesExportAvailable", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "userRulesEditorPrefsDropped", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "specificLimitWarningData", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .observable */ .sH
], UserRulesEditorStore.prototype, "savingUserRulesState", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "requestSettingsData", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "setUserRulesEditorContentChangedState", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "setUserRulesExportAvailableState", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "setUserRulesEditorPrefsDropped", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "updateSetting", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "toggleUserRulesEditorWrapMode", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .action */ .XI
], UserRulesEditorStore.prototype, "setUserRulesEditorWrapMode", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .computed */ .EW
], UserRulesEditorStore.prototype, "userRulesEditorWrapState", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .computed */ .EW
], UserRulesEditorStore.prototype, "userFilterEnabledSettingId", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_3__/* .computed */ .EW
], UserRulesEditorStore.prototype, "userFilterEnabled", null);
const userRulesEditorStore = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(new UserRulesEditorStore());


/***/ }),

/***/ 4484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* reexport */ UserRulesEditor)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(52345);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ace.js
var ace = __webpack_require__(50428);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(96400);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@adguard/tsurlfilter/dist/es/simple-regex-dfa6ed82.js
var simple_regex_dfa6ed82 = __webpack_require__(87695);
;// CONCATENATED MODULE: ./node_modules/@adguard/tsurlfilter/dist/es/simple-regex.js


// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/index.ts + 4 modules
var Editor = __webpack_require__(2805);
// EXTERNAL MODULE: ./Extension/src/common/translators/translator.ts
var translator = __webpack_require__(91310);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Popover/index.ts
var Popover = __webpack_require__(24497);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Checkbox/index.ts + 2 modules
var Checkbox = __webpack_require__(13182);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.tsx
var Icon = __webpack_require__(3770);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(90495);
// EXTERNAL MODULE: ./Extension/src/common/messages/index.ts
var messages = __webpack_require__(12839);
// EXTERNAL MODULE: ./Extension/src/common/constants.ts
var constants = __webpack_require__(10135);
// EXTERNAL MODULE: ./Extension/src/pages/helpers.ts
var helpers = __webpack_require__(51824);
// EXTERNAL MODULE: ./Extension/src/common/logger.ts
var logger = __webpack_require__(68672);
// EXTERNAL MODULE: ./Extension/src/pages/common/utils/export.js
var utils_export = __webpack_require__(88349);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/helpers.ts
var components_helpers = __webpack_require__(21077);
// EXTERNAL MODULE: ./Extension/src/pages/options/stores/RootStore.ts + 1 modules
var RootStore = __webpack_require__(38026);
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/usePreventUnload.ts
var usePreventUnload = __webpack_require__(78754);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/savingFSM.ts
var savingFSM = __webpack_require__(37628);
// EXTERNAL MODULE: ./Extension/src/pages/options/stores/UiStore.ts
var UiStore = __webpack_require__(36920);
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.ts
var reactTranslator = __webpack_require__(78947);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditorStore.js
var UserRulesEditorStore = __webpack_require__(61448);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/ToggleWrapButton.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 






/**
 * This button is extracted in the separate file
 * to stop editor re-renderings on wrap mode changes
 */ const ToggleWrapButton = (0,mobxreact_esm/* observer */.PA)(({ onClick })=>{
    const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.D);
    const lineBreakClassNames = classnames_default()('button actions__btn actions__btn--icon', {
        'actions__btn--active': store.userRulesEditorWrapState
    });
    const iconId = store.userRulesEditorWrapState ? '#line-break-on' : '#line-break-off';
    const tooltipText = store.userRulesEditorWrapState ? reactTranslator/* reactTranslator */.M.getMessage('options_userfilter_line_break_on') : reactTranslator/* reactTranslator */.M.getMessage('options_userfilter_line_break_off');
    return /*#__PURE__*/ react.createElement(Popover/* Popover */.A, {
        text: tooltipText
    }, /*#__PURE__*/ react.createElement("button", {
        type: "button",
        className: lineBreakClassNames,
        onClick: onClick,
        "aria-label": tooltipText
    }, /*#__PURE__*/ react.createElement(Icon/* Icon */.I, {
        classname: "icon--24 icon--gray-default",
        id: iconId
    })));
});

// EXTERNAL MODULE: ./Extension/src/pages/common/components/SavingButton/index.ts + 1 modules
var SavingButton = __webpack_require__(98160);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesSavingButton.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 



const UserRulesSavingButton = (0,mobxreact_esm/* observer */.PA)(({ onClick })=>{
    const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.D);
    return /*#__PURE__*/ react.createElement(SavingButton/* SavingButton */.v, {
        onClick: onClick,
        contentChanged: store.userRulesEditorContentChanged,
        savingState: store.savingUserRulesState
    });
});

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditor.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
















// TODO: Continue to remove dependency on the root store via adding loader and
// notifications to own 'user-rules-editor' store.







/**
 * This module is placed in the common directory because it is used in the options page
 * and fullscreen-user-rules page
 */ const UserRulesEditor = (0,mobxreact_esm/* observer */.PA)(({ fullscreen })=>{
    const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.D);
    const { uiStore, settingsStore } = (0,react.useContext)(RootStore/* rootStore */.a);
    const editorRef = (0,react.useRef)(null);
    const inputRef = (0,react.useRef)(null);
    let shouldResetSize = false;
    if (store.userRulesEditorPrefsDropped) {
        store.setUserRulesEditorPrefsDropped(false);
        shouldResetSize = true;
    }
    (0,react.useEffect)(()=>{
        let removeListenerCallback = ()=>{};
        (async ()=>{
            await store.requestSettingsData();
            const events = [
                constants/* NotifierType */.DY.SettingUpdated
            ];
            removeListenerCallback = await messenger/* messenger */.e.createEventListener(events, async (message)=>{
                const { type } = message;
                switch(type){
                    // This event will be triggered when the user rules status is toggled.
                    case constants/* NotifierType */.DY.SettingUpdated:
                        {
                            await store.requestSettingsData();
                            break;
                        }
                    default:
                        {
                            logger/* logger */.v.debug('Undefined message type:', type);
                            break;
                        }
                }
            });
        })();
        return ()=>{
            removeListenerCallback();
        };
    }, [
        store
    ]);
    // Get initial storage content and set to the editor
    (0,react.useEffect)(()=>{
        (async ()=>{
            let editorContent = await messenger/* messenger */.e.getEditorStorageContent();
            // clear editor content from storage after reading it
            await messenger/* messenger */.e.setEditorStorageContent(null);
            let resetInfoThatContentChanged = false;
            if (!editorContent) {
                const { content } = await messenger/* messenger */.e.getUserRules();
                editorContent = content;
                resetInfoThatContentChanged = true;
            }
            editorRef.current.editor.setValue(editorContent, savingFSM/* CURSOR_POSITION_AFTER_INSERT */.gq);
            editorRef.current.editor.session.getUndoManager().reset();
            if (resetInfoThatContentChanged) {
                store.setUserRulesEditorContentChangedState(false);
            }
            // initial export button state
            const { userRules } = await messenger/* messenger */.e.sendMessage(messages/* MessageType */.Go.GetUserRulesEditorData);
            if (userRules.length > 0) {
                store.setUserRulesExportAvailableState(true);
            } else {
                store.setUserRulesExportAvailableState(false);
            }
        })();
    }, [
        store
    ]);
    /**
     * One of the reasons for request filter to update
     * may be adding user rules from other places like assistant and others
     *
     * @returns {Promise<void>}
     */ const handleUserFilterUpdated = (0,react.useCallback)(async ()=>{
        const { userRules } = await messenger/* messenger */.e.sendMessage(messages/* MessageType */.Go.GetUserRulesEditorData);
        if (!store.userRulesEditorContentChanged) {
            if (editorRef.current) {
                editorRef.current.editor.setValue(userRules, savingFSM/* CURSOR_POSITION_AFTER_INSERT */.gq);
            }
            store.setUserRulesEditorContentChangedState(false);
            await messenger/* messenger */.e.setEditorStorageContent(null);
        }
        // disable or enable export button
        if (userRules.length > 0) {
            store.setUserRulesExportAvailableState(true);
        } else {
            store.setUserRulesExportAvailableState(false);
        }
    }, [
        store
    ]);
    // Append listeners
    (0,react.useEffect)(()=>{
        let removeListenerCallback = ()=>{};
        (async ()=>{
            // Subscribe to events of request filter update
            // to have actual user rules in the editor
            const events = [
                constants/* NotifierType */.DY.UserFilterUpdated
            ];
            removeListenerCallback = await messenger/* messenger */.e.createEventListener(events, async (message)=>{
                const { type } = message;
                switch(type){
                    case constants/* NotifierType */.DY.UserFilterUpdated:
                        {
                            await handleUserFilterUpdated();
                            break;
                        }
                    default:
                        {
                            logger/* logger */.v.debug('Undefined message type:', type);
                            break;
                        }
                }
            });
        })();
        return ()=>{
            removeListenerCallback();
        };
    }, [
        handleUserFilterUpdated
    ]);
    // save editor content to the storage after close of fullscreen
    (0,react.useEffect)(()=>{
        if (fullscreen) {
            const beforeUnloadListener = async ()=>{
                if (store.userRulesEditorContentChanged) {
                    // send content to the storage only before switching editors
                    const content = editorRef.current.editor.session.getValue();
                    await messenger/* messenger */.e.setEditorStorageContent(content);
                }
            };
            window.addEventListener('beforeunload', beforeUnloadListener);
        }
    }, [
        store.userRulesEditorContentChanged,
        fullscreen
    ]);
    // set initial wrap mode
    (0,react.useEffect)(()=>{
        editorRef.current.editor.session.setUseWrapMode(store.userRulesEditorWrapState);
    }, [
        store.userRulesEditorWrapState
    ]);
    // Block unsaved changes only on fullscreen editor
    const hasUnsavedChanges = fullscreen && store.userRulesEditorContentChanged;
    const unsavedChangesTitle = translator/* translator */.N.getMessage('options_editor_leave_title');
    const unsavedChangesSubtitle = translator/* translator */.N.getMessage('options_userfilter_leave_subtitle');
    (0,usePreventUnload/* usePreventUnload */.D)(hasUnsavedChanges, `${unsavedChangesTitle} ${unsavedChangesSubtitle}`);
    const saveUserRules = async (userRules)=>{
        // For MV2 version we don't show loader and don't check limits.
        if (false) {} else {
            uiStore.setShowLoader(true);
            await store.saveUserRules(userRules);
            await settingsStore.checkLimitations();
            uiStore.setShowLoader(false);
        }
    };
    const inputChangeHandler = async (event)=>{
        event.persist();
        const file = event.target.files[0];
        try {
            const rawNewRules = await (0,helpers/* handleFileUpload */.i_)(file, 'txt');
            const trimmedNewRules = rawNewRules.trim();
            if (trimmedNewRules.length < 0) {
                return;
            }
            const oldRulesString = editorRef.current.editor.getValue();
            const oldRules = oldRulesString.split(constants/* NEWLINE_CHAR_UNIX */.JP);
            const newRules = trimmedNewRules.split(constants/* NEWLINE_CHAR_REGEX */.WC);
            const uniqNewRules = newRules.filter((newRule)=>{
                const trimmedNewRule = newRule.trim();
                if (trimmedNewRule.length === 0) {
                    return true;
                }
                const isInOldRules = oldRules.some((oldRule)=>oldRule === trimmedNewRule);
                return !isInOldRules;
            });
            const rulesUnion = [
                ...oldRules,
                ...uniqNewRules
            ];
            const rulesUnionString = rulesUnion.join(constants/* NEWLINE_CHAR_UNIX */.JP).trim();
            if (oldRulesString !== rulesUnionString) {
                editorRef.current.editor.setValue(rulesUnionString, savingFSM/* CURSOR_POSITION_AFTER_INSERT */.gq);
                await saveUserRules(rulesUnionString);
            }
        } catch (e) {
            logger/* logger */.v.debug(e.message);
            uiStore.addNotification({
                description: (0,translator/* translator */.N)('options_popup_import_error_file_description'),
                type: UiStore/* NotificationType */._.ERROR
            });
        }
        // eslint-disable-next-line no-param-reassign
        event.target.value = '';
    };
    const importClickHandler = (e)=>{
        e.preventDefault();
        inputRef.current.click();
    };
    const saveClickHandler = async ()=>{
        if (!store.userRulesEditorContentChanged) {
            return;
        }
        const value = editorRef.current.editor.getValue();
        await saveUserRules(value);
    };
    const editorChangeHandler = async (value)=>{
        const { content } = await messenger/* messenger */.e.getUserRules();
        store.setUserRulesEditorContentChangedState(content !== value);
    };
    const shortcuts = [
        {
            name: 'save',
            bindKey: {
                win: 'Ctrl-S',
                mac: 'Command-S'
            },
            exec: saveClickHandler
        },
        {
            name: 'togglecomment',
            bindKey: {
                win: 'Ctrl-/',
                mac: 'Command-/'
            },
            exec: (editor)=>{
                const selection = editor.getSelection();
                const ranges = selection.getAllRanges();
                const rowsSelected = ranges.map((range)=>{
                    const [start, end] = [
                        range.start.row,
                        range.end.row
                    ];
                    return Array.from({
                        length: end - start + 1
                    }, (_, idx)=>idx + start);
                }).flat();
                const allRowsCommented = rowsSelected.every((row)=>{
                    const rowLine = editor.session.getLine(row);
                    return rowLine.trim().startsWith(simple_regex_dfa6ed82.S.MASK_COMMENT);
                });
                rowsSelected.forEach((row)=>{
                    const rawLine = editor.session.getLine(row);
                    // if all lines start with comment mark we remove it
                    if (allRowsCommented) {
                        const lineWithRemovedComment = rawLine.replace(simple_regex_dfa6ed82.S.MASK_COMMENT, '');
                        editor.session.replace(new ace.Range(row, 0, row), lineWithRemovedComment);
                    // otherwise we add it
                    } else {
                        editor.session.insert({
                            row,
                            column: 0
                        }, simple_regex_dfa6ed82.S.MASK_COMMENT);
                    }
                });
            }
        }
    ];
    const exportClickHandler = ()=>{
        (0,utils_export/* exportData */.Rz)(utils_export/* ExportTypes */.m6.USER_FILTER);
    };
    // We set wrap mode directly in order to avoid editor re-rendering
    // Otherwise editor would remove all unsaved content
    const toggleWrap = async ()=>{
        const toggledWrapMode = !store.userRulesEditorWrapState;
        editorRef.current.editor.session.setUseWrapMode(toggledWrapMode);
        await store.toggleUserRulesEditorWrapMode(toggledWrapMode);
        if (true) {
            await settingsStore.checkLimitations();
        }
    };
    const openEditorFullscreen = async ()=>{
        // send dirty content to the storage only before switching editors
        if (store.userRulesEditorContentChanged) {
            const content = editorRef.current.editor.session.getValue();
            await messenger/* messenger */.e.setEditorStorageContent(content);
        }
        await messenger/* messenger */.e.sendMessage(messages/* MessageType */.Go.OpenFullscreenUserRules);
    };
    const closeEditorFullscreen = async ()=>{
        // send dirty content to the storage only before switching editors
        if (store.userRulesEditorContentChanged) {
            const content = editorRef.current.editor.session.getValue();
            await messenger/* messenger */.e.setEditorStorageContent(content);
        }
        window.close();
    };
    const handleUserRulesToggle = async ({ id, data })=>{
        await (0,components_helpers/* addMinDelayLoader */.C)(uiStore.setShowLoader, store.updateSetting)(id, data);
    };
    const fullscreenTooltipText = fullscreen ? translator/* translator */.N.getMessage('options_editor_close_fullscreen_button_tooltip') : translator/* translator */.N.getMessage('options_editor_open_fullscreen_button_tooltip');
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(Editor/* Editor */.K, {
        name: "user-rules",
        editorRef: editorRef,
        shortcuts: shortcuts,
        fullscreen: fullscreen,
        shouldResetSize: shouldResetSize,
        onChange: editorChangeHandler,
        highlightRules: true
    }), !fullscreen && /*#__PURE__*/ react.createElement(Editor/* EditorLeaveModal */.S, {
        subtitle: unsavedChangesSubtitle,
        isSaving: store.savingUserRulesState === savingFSM/* SavingFSMState */.A3.Saving,
        contentChanged: store.userRulesEditorContentChanged
    }), /*#__PURE__*/ react.createElement("div", {
        className: classnames_default()('actions actions--grid', {
            'actions--fullscreen-user-rules': fullscreen,
            'actions--user-rules': !fullscreen
        })
    }, fullscreen && /*#__PURE__*/ react.createElement("label", {
        className: "actions__label",
        htmlFor: "user-filter-enabled"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "actions__title"
    }, translator/* translator */.N.getMessage('fullscreen_user_rules_title')), /*#__PURE__*/ react.createElement("div", {
        className: "actions__control"
    }, /*#__PURE__*/ react.createElement(Checkbox/* Checkbox */.S, {
        id: "user-filter-enabled",
        handler: handleUserRulesToggle,
        value: store.userFilterEnabled,
        className: "checkbox__label--actions"
    }))), /*#__PURE__*/ react.createElement("div", {
        className: "actions--grid actions--buttons"
    }, /*#__PURE__*/ react.createElement(UserRulesSavingButton, {
        onClick: saveClickHandler
    }), /*#__PURE__*/ react.createElement("input", {
        type: "file",
        id: "inputEl",
        accept: "text/plain",
        ref: inputRef,
        onChange: inputChangeHandler,
        style: {
            display: 'none'
        }
    }), /*#__PURE__*/ react.createElement("button", {
        type: "button",
        className: "button button--l button--transparent actions__btn",
        onClick: importClickHandler,
        title: translator/* translator */.N.getMessage('options_userfilter_import')
    }, translator/* translator */.N.getMessage('options_userfilter_import')), /*#__PURE__*/ react.createElement("button", {
        type: "button",
        className: "button button--l button--transparent actions__btn",
        onClick: exportClickHandler,
        disabled: !store.userRulesExportAvailable,
        title: translator/* translator */.N.getMessage('options_userfilter_export')
    }, translator/* translator */.N.getMessage('options_userfilter_export'))), /*#__PURE__*/ react.createElement("div", {
        className: "actions--grid actions--icons"
    }, /*#__PURE__*/ react.createElement(ToggleWrapButton, {
        onClick: toggleWrap
    }), /*#__PURE__*/ react.createElement(Popover/* Popover */.A, {
        text: fullscreenTooltipText
    }, fullscreen ? /*#__PURE__*/ react.createElement("button", {
        type: "button",
        className: "button actions__btn actions__btn--icon",
        onClick: closeEditorFullscreen,
        "aria-label": translator/* translator */.N.getMessage('options_editor_close_fullscreen_button_tooltip')
    }, /*#__PURE__*/ react.createElement(Icon/* Icon */.I, {
        id: "#reduce",
        classname: "icon--24 icon--gray-default"
    })) : /*#__PURE__*/ react.createElement("button", {
        type: "button",
        className: "button actions__btn actions__btn--icon",
        onClick: openEditorFullscreen,
        "aria-label": translator/* translator */.N.getMessage('options_editor_open_fullscreen_button_tooltip')
    }, /*#__PURE__*/ react.createElement(Icon/* Icon */.I, {
        id: "#extend",
        classname: "icon--24 icon--gray-default"
    }))))));
});

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 21077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ addMinDelayLoader)
/* harmony export */ });
/* harmony import */ var _common_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42400);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50122);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * Checks if the extension is MV3, and
 * - if so it returns a new callback and shows a loader for at least {@link MIN_LOADER_SHOWING_TIME_MS},
 * - otherwise (for MV2) it returns the callback as it is.
 *
 * @param setShowLoaderCb Callback to set the loader visibility.
 * @param callback Async callback to run.
 *
 * @returns Async callback with the loader showing for at least {@link MIN_LOADER_SHOWING_TIME_MS}.
 */ const addMinDelayLoader = (setShowLoaderCb, callback)=>{
    if (false) {}
    const callbackWithMinDuration = (0,_common_script__WEBPACK_IMPORTED_MODULE_0__/* .addMinDurationTime */ .pM)(callback, _constants__WEBPACK_IMPORTED_MODULE_1__/* .MIN_LOADER_SHOWING_TIME_MS */ .kG);
    return async (...args)=>{
        setShowLoaderCb(true);
        try {
            const response = await callbackWithMinDuration(...args);
            setShowLoaderCb(false);
            return response;
        } catch (e) {
            setShowLoaderCb(false);
            throw e;
        }
    };
};


/***/ }),

/***/ 13182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* reexport */ Checkbox)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(27349);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(96400);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./Extension/src/common/logger.ts
var logger = __webpack_require__(68672);
// EXTERNAL MODULE: ./Extension/src/common/error.ts
var common_error = __webpack_require__(27116);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(29884);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6565);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(33383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(24500);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(23536);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(46429);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Checkbox/checkbox.pcss
var Checkbox_checkbox = __webpack_require__(79749);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Checkbox/checkbox.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Checkbox_checkbox/* default */.A, options);




       /* harmony default export */ const ui_Checkbox_checkbox = (Checkbox_checkbox/* default */.A && Checkbox_checkbox/* default */.A.locals ? Checkbox_checkbox/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Checkbox/Checkbox.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 





/**
 * Checkbox component that supports both optimistic and pessimistic state updates.
 * - When `optimistic` is true, the checkbox state updates immediately upon user interaction.
 * - When `optimistic` is false, the checkbox state updates only after the handler completes.
 *
 * @param props CheckboxProps
 */ const Checkbox = (props)=>{
    const { id, handler, inverted = false, label = '', value = false, className, disabled, optimistic = true } = props;
    const computedValue = inverted ? !value : value;
    const [state, setState] = (0,react.useState)(computedValue);
    const [pending, setPending] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setState(computedValue);
    }, [
        computedValue
    ]);
    const changeHandler = async (e)=>{
        const newValue = !state;
        if (optimistic) {
            setState(newValue);
        } else {
            setPending(true);
        }
        try {
            const { target: { name: targetId, checked: data } } = e;
            await handler({
                id: targetId,
                data: inverted ? !data : data
            });
            if (!optimistic) {
                setState(newValue);
            }
        } catch (error) {
            // TODO: Dirty hack, need to refactor. Maybe pass some new prop like 'revertOnError'?
            if (!(0,common_error/* getErrorMessage */.u)(error).includes('[revert-checkbox]')) {
                logger/* logger */.v.error('Handler execution failed', error);
            }
            if (optimistic) {
                setState(!newValue); // revert state on error
            }
        } finally{
            if (!optimistic) {
                setPending(false);
            }
        }
    };
    return /*#__PURE__*/ react.createElement("div", {
        className: "checkbox"
    }, /*#__PURE__*/ react.createElement("input", {
        type: "checkbox",
        name: String(id),
        checked: state,
        onChange: changeHandler,
        id: String(id),
        className: "checkbox__in",
        tabIndex: 0,
        disabled: disabled || pending
    }), /*#__PURE__*/ react.createElement("label", {
        htmlFor: String(id),
        className: classnames_default()('checkbox__label', className)
    }, label));
};


;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Checkbox/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 17941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ Icons)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(29884);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6565);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(33383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(24500);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(23536);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(46429);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/styles/icons.pcss
var icons = __webpack_require__(53315);
;// CONCATENATED MODULE: ./Extension/src/pages/common/styles/icons.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(icons/* default */.A, options);




       /* harmony default export */ const styles_icons = (icons/* default */.A && icons/* default */.A.locals ? icons/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Icons.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

const Icons = ()=>{
    return /*#__PURE__*/ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        display: "none"
    }, /*#__PURE__*/ react.createElement("symbol", {
        id: "arrow-left",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "m15 18-6-6 6-6",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "cross",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M6.42857 6.42857L17.6043 17.6043",
        strokeWidth: "1.5",
        strokeLinecap: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M6.42871 17.5714L17.6045 6.39563",
        strokeWidth: "1.5",
        strokeLinecap: "round"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "checked",
        viewBox: "0 0 20 20"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("rect", {
        fill: "#67b279",
        width: "20",
        height: "20",
        rx: "2"
    }), /*#__PURE__*/ react.createElement("path", {
        stroke: "#fff",
        d: "m5.05 9.04 4.47 4.47 5.43-7.02",
        strokeWidth: "1.5",
        strokeLinecap: "round"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "logo",
        viewBox: "0 0 107 24"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("path", {
        fill: "#67b279",
        d: "M12.4997 0C8.74899 0 4.22465.860534.500004 2.75463.500004 6.84537.448591 17.0366 12.4997 24 24.5511 17.0366 24.5 6.84537 24.5 2.75463 20.7751.860534 16.2507 0 12.4997 0Z"
    }), /*#__PURE__*/ react.createElement("path", {
        fill: "#5b9f6b",
        d: "M12.5 0h-.0003C8.74898 0 4.22464.860534.500002 2.75463v.05192C.499784 6.931.499251 17.0659 12.4997 24c.0001-.0001.0002-.0001.0003-.0002V0Z"
    }), /*#__PURE__*/ react.createElement("path", {
        fill: "#fff",
        d: "m12.3942 15.4286 6.963-9.22598c-.5103-.40206-.9578-.1183-1.2042.10139l-.009.0007-5.8057 5.93749-2.1875-2.58795C9.10728 8.46897 7.68859 9.37307 7.35718 9.612l5.03702 5.8166Z"
    }), /*#__PURE__*/ react.createElement("path", {
        fill: "currentColor",
        d: "M57.1774 17.4737c-1.6568 0-3.006-.5141-4.0479-1.5423-1.0418-1.0282-1.5627-2.3387-1.5627-3.9314 0-1.5222.5336-2.81497 1.6008-3.87846 1.0673-1.0635 2.3988-1.59523 3.9946-1.59523.9249 0 1.7075.11844 2.3479.35533.6403.23689 1.2553.60231 1.8448 1.09625L59.876 9.74701c-.4472-.37298-.8792-.64515-1.2959-.81652-.4168-.17137-.9148-.25705-1.4942-.25705-.8538 0-1.578.32509-2.1726.97529-.5946.65017-.8919 1.43397-.8919 2.35127 0 .9677.3024 1.7691.9072 2.4042.6048.635 1.3798.9526 2.325.9526.8742 0 1.6111-.2117 2.2107-.6351v-1.5121h-2.3631v-2.011h4.6348v4.5967c-1.3315 1.1189-2.851 1.6784-4.5586 1.6784ZM32.5739 6.63214 28 17.2922h2.3937l.9757-2.3739h4.5129l.9758 2.3739h2.4546L34.7389 6.63214h-2.165Zm1.052 2.7973 1.4179 3.43236h-2.8359l1.418-3.43236Zm6.9122 7.86276V6.70776h4.1623c1.6669 0 3.0289.5015 4.086 1.50451C49.8435 9.21528 50.372 10.4778 50.372 12c0 1.5121-.5311 2.7721-1.5932 3.7802-1.0622 1.008-2.4216 1.512-4.0784 1.512h-4.1623Zm4.1621-2.1017h-1.8143V8.80954h1.8143c.9555 0 1.7305.29737 2.3251.89212.5946.59474.8919 1.36084.8919 2.29834 0 .9476-.2948 1.7162-.8843 2.3059-.5895.5897-1.3671.8846-2.3327.8846Zm20.3443 1.066c.8131.8014 1.9464 1.2021 3.3999 1.2021 1.4636 0 2.6096-.4033 3.438-1.2097.8284-.8064 1.2426-1.9959 1.2426-3.5685V6.70776h-2.3479v6.06344c0 .8266-.2008 1.4566-.6023 1.89-.4014.4335-.9681.6502-1.6999.6502s-1.2985-.2243-1.7-.6728c-.4015-.4486-.6022-1.0963-.6022-1.943V6.70776h-2.3479V12.756c0 1.5323.4065 2.6991 1.2197 3.5005Zm8.7169 1.0357 4.5738-10.66006h2.165l4.5739 10.66006h-2.4547l-.9757-2.3739h-4.5129l-.9758 2.3739h-2.3936Zm5.6258-7.86276 1.4179 3.43236h-2.8358l1.4179-3.43236Zm6.9123-2.72168h4.8788c1.3519 0 2.3886.35786 3.1103 1.07357.6098.60483.9147 1.42134.9147 2.44957 0 1.6229-.7623 2.7167-2.2869 3.2812l2.6071 3.7801h-2.7443l-2.3175-3.387h-1.8143v3.387h-2.3479V6.70776Zm4.7262 5.14104h-2.3784V8.80954H90.98c.5793 0 1.0316.12852 1.3569.38558.3252.25705.4879.63254.4879 1.12648 0 .4637-.1576.8342-.4727 1.1114-.3151.2772-.7572.4158-1.3264.4158Zm5.8754-5.14104h4.1619c1.667 0 3.029.5015 4.086 1.50451 1.057 1.00301 1.586 2.26553 1.586 3.78773 0 1.5121-.531 2.7721-1.593 3.7802-1.062 1.008-2.422 1.512-4.079 1.512h-4.1619V6.70776Zm4.1619 8.48274h-1.8139V8.80954h1.8139c.956 0 1.731.29737 2.325.89212.595.59474.892 1.36084.892 2.29834 0 .9476-.294 1.7162-.884 2.3059-.589.5897-1.367.8846-2.333.8846Z"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "magnifying",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("circle", {
        cx: "9.5",
        cy: "9.5",
        r: "5.5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
    }), /*#__PURE__*/ react.createElement("path", {
        d: "M14 14L19 19",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "tick",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "m5 12 6 6 8-9",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "trash",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor"
    }, /*#__PURE__*/ react.createElement("path", {
        clipRule: "evenodd",
        d: "M7 9h10l-.7633 10.0755c-.0395.5215-.4742.9245-.9971.9245H8.76044c-.52298 0-.95763-.403-.99714-.9245L7 9Z",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        d: "M6 6.5h12M14 6V4h-4v2",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        clipRule: "evenodd",
        d: "M13.5 12v5-5ZM10.5 12v5-5Z",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "reload",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M6 6.99999C9.6 1.79999 19.5 3.49996 20 12v1.5M18 16.9999c-3.6 5.2-13.5 3.5001-14-5V11",
        strokeWidth: "1.5",
        strokeLinecap: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "m22 12-2 2-2-2M2 12l2-2 2 2",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "select",
        viewBox: "0 0 14 8"
    }, /*#__PURE__*/ react.createElement("path", {
        d: "m6 10 6 6 6-6",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.5",
        transform: "translate(-5 -9)"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "extend",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("rect", {
        width: "24",
        height: "24",
        fill: "none"
    }), /*#__PURE__*/ react.createElement("path", {
        d: "M6 10V6H10M6 14V18H10M18 10V6H14M18 14V18H14",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "line-break-on",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.08 4.74a.75.75 0 0 0 0 1.5h15.54a.75.75 0 0 0 0-1.5H4.08ZM4 8.96a.75.75 0 0 0 0 1.5h11.54a3.25 3.25 0 0 1 .02 6.48l.73-.73a.75.75 0 0 0-1.06-1.06L13.3 17.1c-.3.29-.3.76 0 1.06l1.94 1.94a.75.75 0 0 0 1.06-1.06l-.6-.6a4.75 4.75 0 0 0-.15-9.49H4Zm-.67 4.78c0-.41.34-.75.75-.75h6.8a.75.75 0 0 1 0 1.5h-6.8a.75.75 0 0 1-.75-.75Zm0 3.89c0-.42.34-.75.75-.75h6.8a.75.75 0 0 1 0 1.5h-6.8a.75.75 0 0 1-.75-.75Z"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "line-break-off",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M4 6h16M4 18h16M4 14h16M4 10h16",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "info",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("circle", {
        stroke: "currentColor",
        fill: "none",
        cx: "12",
        cy: "12",
        r: "9",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M12 16V10",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M11.997 7.59552C12.009 7.59745 11.997 7.40446 11.997 7.40446",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "reduce",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M10 6v4H6M10 18v-4H6M14 6v4h4M14 18v-4h4",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), /*#__PURE__*/ react.createElement("symbol", {
        id: "cross",
        width: "24",
        height: "24"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M6.429 6.796 17.604 18.61M6.429 18.576 17.605 6.76"
    })), /*#__PURE__*/ react.createElement("symbol", {
        id: "question",
        width: "24",
        height: "24"
    }, /*#__PURE__*/ react.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        clipRule: "evenodd",
        d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ react.createElement("path", {
        stroke: "currentColor",
        d: "M10 9.3c.02-.82 1-1.52 2-1.52s1.6.39 2 1.22c.32.7.01 1.55-1.06 2.28-.87.56-1.14 1.13-1.14 2.18M11.8 15.9v-.2",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))));
};


/***/ }),

/***/ 37877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.ts + 1 modules
var AttachmentPortal = __webpack_require__(8658);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Tooltip/index.ts + 2 modules
var Tooltip = __webpack_require__(5156);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(29884);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6565);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(33383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(24500);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(23536);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(46429);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Popover/popover.pcss
var popover = __webpack_require__(70165);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Popover/popover.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(popover/* default */.A, options);




       /* harmony default export */ const Popover_popover = (popover/* default */.A && popover/* default */.A.locals ? popover/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Popover/Popover.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 



/**
 * Default delay before showing popover.
 */ const POPOVER_SHOW_DELAY_MS = 500;
/**
 * Wrap child container for handle tooltips rendering in overlay on hover
 */ const Popover = ({ text, delay, comingSoon, fixedWidth, children, ...props })=>{
    const defaultTooltip = {
        visible: false,
        position: null
    };
    const [tooltip, setTooltip] = (0,react.useState)(defaultTooltip);
    const timer = (0,react.useRef)();
    // clear timer on unmounting
    (0,react.useEffect)(()=>{
        return ()=>{
            clearTimeout(timer.current);
        };
    }, []);
    const handleMouseEnter = (e)=>{
        const { left, bottom } = e.currentTarget.getBoundingClientRect();
        timer.current = setTimeout(()=>{
            setTooltip({
                visible: true,
                position: {
                    x: left + window.scrollX,
                    y: bottom + window.scrollY
                }
            });
        }, delay || POPOVER_SHOW_DELAY_MS);
    };
    const handleMouseLeave = ()=>{
        clearTimeout(timer.current);
        setTooltip({
            visible: false,
            position: null
        });
    };
    const popoverClassName = comingSoon ? 'popover popover--coming-soon' : 'popover';
    return /*#__PURE__*/ react.createElement("div", {
        className: popoverClassName,
        ...props,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
    }, tooltip.visible && tooltip.position && /*#__PURE__*/ react.createElement(AttachmentPortal/* AttachmentPortal */.c, {
        rootId: "root-portal",
        position: tooltip.position
    }, /*#__PURE__*/ react.createElement(Tooltip/* Tooltip */.m, {
        text: text,
        visible: tooltip.visible,
        fixedWidth: true
    })), children);
};


/***/ }),

/***/ 24497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _Popover__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37877);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 5156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* reexport */ Tooltip)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(96400);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(29884);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6565);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(33383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(24500);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(23536);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(46429);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Tooltip/tooltip.pcss
var tooltip = __webpack_require__(53621);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/tooltip.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tooltip/* default */.A, options);




       /* harmony default export */ const Tooltip_tooltip = (tooltip/* default */.A && tooltip/* default */.A.locals ? tooltip/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/Tooltip.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


const Tooltip = ({ text, visible, fixedWidth })=>{
    return /*#__PURE__*/ react.createElement("div", {
        className: classnames_default()('tooltip', {
            'tooltip--on': visible,
            'tooltip--off': !visible,
            'tooltip--fixed-width': fixedWidth
        })
    }, text);
};

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 50122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KR: () => (/* binding */ MIN_FILTERS_UPDATE_DISPLAY_DURATION_MS),
/* harmony export */   kG: () => (/* binding */ MIN_LOADER_SHOWING_TIME_MS),
/* harmony export */   ph: () => (/* binding */ MIN_USER_RULES_REMOVAL_DISPLAY_DURATION_MS)
/* harmony export */ });
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ const MIN_FILTERS_UPDATE_DISPLAY_DURATION_MS = 2000;
const MIN_USER_RULES_REMOVAL_DISPLAY_DURATION_MS = 1500;
/**
 * Minimal delay for showing loader. Needed in mv3 for smoother user experience.
 */ const MIN_LOADER_SHOWING_TIME_MS = 500;


/***/ }),

/***/ 46342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useAppearanceTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92400);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91628);
/* harmony import */ var _common_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74701);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


const useAppearanceTheme = (appearanceTheme)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        const STORAGE_KEY = 'appearance_theme';
        const DARK_THEME_CLASS = 'dark-mode';
        const LIGHT_THEME_CLASS = 'light-mode';
        const SET_TO_STORAGE_TIMEOUT = 500;
        const throttledSetToStorage = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((mode)=>{
            localStorage.setItem(STORAGE_KEY, mode);
        }, SET_TO_STORAGE_TIMEOUT);
        let theme = appearanceTheme;
        if (!theme) {
            theme = localStorage.getItem(STORAGE_KEY);
        } else {
            throttledSetToStorage(theme);
        }
        switch(theme){
            case _common_settings__WEBPACK_IMPORTED_MODULE_1__/* .AppearanceTheme */ .i0.Dark:
                {
                    document.documentElement.classList.add(DARK_THEME_CLASS);
                    document.documentElement.classList.remove(LIGHT_THEME_CLASS);
                    break;
                }
            case _common_settings__WEBPACK_IMPORTED_MODULE_1__/* .AppearanceTheme */ .i0.Light:
                {
                    document.documentElement.classList.add(LIGHT_THEME_CLASS);
                    document.documentElement.classList.remove(DARK_THEME_CLASS);
                    break;
                }
            default:
                {
                    document.documentElement.classList.remove(DARK_THEME_CLASS);
                    document.documentElement.classList.remove(LIGHT_THEME_CLASS);
                }
        }
    }, [
        appearanceTheme
    ]);
};


/***/ }),

/***/ 88349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rz: () => (/* binding */ exportData),
/* harmony export */   m6: () => (/* binding */ ExportTypes)
/* harmony export */ });
/* unused harmony export getExportedSettingsFilename */
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65005);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31040);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18827);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14371);
/* harmony import */ var _services_messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90495);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12839);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 





/**
 * Export types.
 *
 * @readonly
 * @enum {string}
 */ const ExportTypes = {
    USER_FILTER: 'user_filter',
    ALLOW_LIST: 'allow_list',
    SETTINGS: 'settings'
};
const exportMetadata = {
    [ExportTypes.USER_FILTER]: {
        name: 'user_rules',
        messageType: _common_messages__WEBPACK_IMPORTED_MODULE_4__/* .MessageType */ .Go.GetUserRules,
        ext: 'txt'
    },
    [ExportTypes.ALLOW_LIST]: {
        name: 'allowlist',
        messageType: _common_messages__WEBPACK_IMPORTED_MODULE_4__/* .MessageType */ .Go.GetAllowlistDomains,
        ext: 'txt'
    },
    [ExportTypes.SETTINGS]: {
        name: 'settings',
        messageType: _common_messages__WEBPACK_IMPORTED_MODULE_4__/* .MessageType */ .Go.LoadSettingsJson,
        ext: 'json'
    }
};
/**
 * Generates filename for exported `type`.
 *
 * @param {ExportTypes} type Type of export
 * @param {string} appVersion App version
 * @returns {string} Filename
 */ const getExportedSettingsFilename = (type, appVersion)=>{
    const { name, ext } = exportMetadata[type];
    const product = `adg_ext_${name}`;
    const currentTimeString = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(Date.now(), 'ddMMyy-HHmmss');
    return `${product}_${appVersion}_${currentTimeString}.${ext}`;
};
/**
 * Exports data to file and downloads it in browser.
 *
 * @param {ExportTypes} type Type of export
 */ const exportData = async (type)=>{
    const { messageType } = exportMetadata[type];
    const { content, appVersion } = await _services_messenger__WEBPACK_IMPORTED_MODULE_3__/* .messenger */ .e.sendMessage(messageType);
    const filename = getExportedSettingsFilename(type, appVersion);
    const blob = new Blob([
        content
    ]);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
};


/***/ }),

/***/ 51824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gt: () => (/* binding */ containsIgnoreCase),
/* harmony export */   K2: () => (/* binding */ updateFilterDescription),
/* harmony export */   UK: () => (/* binding */ isVerticalScroll),
/* harmony export */   WI: () => (/* binding */ measureTextWidth),
/* harmony export */   i_: () => (/* binding */ handleFileUpload),
/* harmony export */   lW: () => (/* binding */ copyToClipboard),
/* harmony export */   w5: () => (/* binding */ findChunks),
/* harmony export */   wh: () => (/* binding */ passiveEventSupported),
/* harmony export */   yy: () => (/* binding */ sleep)
/* harmony export */ });
/* unused harmony export getFilenameExtension */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63318);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19096);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_translators_translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91310);
/* harmony import */ var _options_stores_UiStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36920);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 



const getFilenameExtension = (filename)=>{
    if (!filename) {
        return undefined;
    }
    const parts = filename.split('.');
    if (parts.length < 2) {
        return undefined;
    }
    return parts[parts.length - 1];
};
/**
 * Handles file upload
 *
 * @param file File to upload.
 * @param requiredExtension Required file extension.
 *
 * @returns Promise that resolves with file content as string if file is uploaded successfully,
 * and rejects with error message otherwise.
 */ const handleFileUpload = (file, requiredExtension)=>{
    return new Promise((resolve, reject)=>{
        if (getFilenameExtension(file.name) !== requiredExtension) {
            reject(new Error(_common_translators_translator__WEBPACK_IMPORTED_MODULE_2__/* .translator */ .N.getMessage('options_popup_import_settings_wrong_file_ext', {
                extension: requiredExtension
            })));
        }
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (event)=>{
            if (event.target) {
                // @ts-ignore
                resolve(event.target.result);
            }
        };
        reader.onerror = ()=>{
            reject(new Error(_common_translators_translator__WEBPACK_IMPORTED_MODULE_2__/* .translator */ .N.getMessage('options_popup_import_error_file_description')));
        };
    });
};
/**
 * Awaits required period of time.
 *
 * @param timeoutMs Time to wait.
 *
 * @returns Promise that resolves after `timeoutMs`.
 */ const sleep = (timeoutMs)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, timeoutMs);
    });
};
const indexOfIgnoreCase = (str, searchString)=>{
    return str.toLowerCase().indexOf(searchString.toLowerCase());
};
const containsIgnoreCase = (str, searchString)=>{
    return !!(str && searchString && indexOfIgnoreCase(str, searchString) >= 0);
};
const findChunks = (str, searchString, chunks = [])=>{
    const ind = indexOfIgnoreCase(str, searchString);
    if (ind > -1) {
        chunks.push(str.slice(0, ind));
        chunks.push(str.slice(ind, ind + searchString.length));
        const restStr = str.slice(ind + searchString.length);
        if (containsIgnoreCase(restStr, searchString)) {
            findChunks(restStr, searchString, chunks);
        } else {
            chunks.push(restStr);
        }
    }
    return chunks.filter((i)=>!!i);
};
const passiveEventSupported = (()=>{
    let passiveSupported = null;
    return ()=>{
        // memoize support to avoid adding multiple test events
        if (typeof passiveSupported === 'boolean') {
            return passiveSupported;
        }
        let supported = false;
        try {
            const options = {
                get passive () {
                    supported = true;
                    return false;
                }
            };
            // @ts-ignore
            window.addEventListener('test', null, options);
            // @ts-ignore
            window.removeEventListener('test', null, options);
        } catch (err) {
            supported = false;
        }
        passiveSupported = supported;
        return passiveSupported;
    };
})();
const copyToClipboard = (text)=>{
    const textarea = document.createElement('textarea');
    textarea.innerText = text;
    // @ts-ignore
    textarea.style = `
        position: absolute;
        display: hidden;
        width: 0;
        height: 0;
    `;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
};
const measureTextWidth = (text)=>{
    const el = document.createElement('p');
    el.innerText = text;
    // @ts-ignore
    el.style = `
        position: absolute;
        display: hidden;
        height: 0;
        white-space: nowrap;
        font-family: Roboto, "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Arial, sans-serif;
        font-size: 14px;
    `;
    document.body.appendChild(el);
    const pxLength = el.clientWidth;
    el.remove();
    return pxLength;
};
/**
 * Calculates the angle of radius vector of the scroll motion
 * and detect whether scroll is vertical
 *
 * @param deltaY Wheel event deltaY value.
 * @param  deltaX Wheel event deltaX value.
 *
 * @returns True if scroll is vertical, false otherwise.
 */ const isVerticalScroll = (()=>{
    const degToRad = (deg)=>deg * (Math.PI / 180);
    const deg60ToRad = degToRad(60);
    const deg90ToRad = degToRad(90);
    const deg120ToRad = degToRad(120);
    const deg240ToRad = degToRad(240);
    const deg270ToRad = degToRad(270);
    const deg300ToRad = degToRad(300);
    return (deltaY, deltaX)=>{
        if (deltaY === 0) {
            return false;
        }
        let angle = Math.atan(deltaX / deltaY);
        angle = deltaY > 0 ? angle + deg90ToRad : angle + deg270ToRad;
        return angle > deg60ToRad && angle < deg120ToRad || angle > deg240ToRad && angle < deg300ToRad;
    };
})();
/**
 * Checks the length of the array with filters and returns the contents for notification.
 *
 * @param updatedFilters Array with updated filters.
 *
 * @returns Object with title and description describing error if `updatedFilters` is not provided,
 * otherwise description with information about updated filters.
 */ const updateFilterDescription = (updatedFilters)=>{
    if (!updatedFilters) {
        return {
            description: _common_translators_translator__WEBPACK_IMPORTED_MODULE_2__/* .translator */ .N.getMessage('options_popup_update_error'),
            type: _options_stores_UiStore__WEBPACK_IMPORTED_MODULE_3__/* .NotificationType */ ._.ERROR
        };
    }
    const filterNames = updatedFilters.map((filter)=>filter.name).join(', ');
    // no updated filters
    let description = `${filterNames} ${_common_translators_translator__WEBPACK_IMPORTED_MODULE_2__/* .translator */ .N.getMessage('options_popup_update_not_found')}`;
    if (updatedFilters.length === 1) {
        description = `${filterNames} ${_common_translators_translator__WEBPACK_IMPORTED_MODULE_2__/* .translator */ .N.getMessage('options_popup_update_filter')}`;
    } else if (updatedFilters.length > 1) {
        description = `${filterNames} ${_common_translators_translator__WEBPACK_IMPORTED_MODULE_2__/* .translator */ .N.getMessage('options_popup_update_filters')}`;
    }
    return {
        description,
        type: _options_stores_UiStore__WEBPACK_IMPORTED_MODULE_3__/* .NotificationType */ ._.SUCCESS
    };
};


/***/ }),

/***/ 19833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ SEARCH_FILTERS),
/* harmony export */   T: () => (/* binding */ TABLET_SCREEN_WIDTH)
/* harmony export */ });
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ const SEARCH_FILTERS = {
    ALL: 'all',
    ENABLED: 'enabled',
    DISABLED: 'disabled'
};
const TABLET_SCREEN_WIDTH = 1024;


/***/ }),

/***/ 16140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WO: () => (/* binding */ sortFilters),
/* harmony export */   Yq: () => (/* binding */ formatDate),
/* harmony export */   eq: () => (/* binding */ updateGroups),
/* harmony export */   o7: () => (/* binding */ sortGroupsOnSearch),
/* harmony export */   vm: () => (/* binding */ updateFilters)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19096);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58477);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * Sorts filters by enabled status and displayNumber
 *
 * @param filters Filters to sort.
 *
 * @returns Sorted filters.
 */ const sortFilters = (filters)=>{
    const sorted = [
        ...filters
    ].sort((a, b)=>{
        // sort by enabled
        const enabledA = !!a.enabled;
        const enabledB = !!b.enabled;
        if (enabledA !== enabledB) {
            return Number(enabledB) - Number(enabledA);
        }
        // sort by groupId
        if (a.groupId !== b.groupId) {
            return a.groupId - b.groupId;
        }
        // sort by display number
        if (a.displayNumber && b.displayNumber) {
            return a.displayNumber - b.displayNumber;
        }
        if (a.displayNumber) {
            return 1;
        }
        if (b.displayNumber) {
            return -1;
        }
        return 0;
    });
    return sorted;
};
/**
 * Updates filters state without changing order
 *
 * @param currentFilters
 * @param newFilters
 *
 * @returns Filters with updated state.
 */ const updateFilters = (currentFilters, newFilters)=>{
    const updatedFilters = [
        ...currentFilters
    ];
    newFilters.forEach((newFilter)=>{
        const currentFilterIdx = currentFilters.findIndex((currentFilter)=>{
            return currentFilter.filterId === newFilter.filterId;
        });
        if (currentFilterIdx < 0) {
            updatedFilters.push(newFilter);
        } else {
            updatedFilters[currentFilterIdx] = newFilter;
        }
    });
    return updatedFilters;
};
/**
 * Updates groups state without changing order
 *
 * @param currentGroups
 * @param newGroups
 *
 * @returns Groups with updated state.
 */ const updateGroups = (currentGroups, newGroups)=>{
    const updatedGroups = [
        ...currentGroups
    ];
    newGroups.forEach((newGroup)=>{
        const currentGroupIdx = currentGroups.findIndex((currentGroup)=>{
            return currentGroup.groupId === newGroup.groupId;
        });
        if (currentGroupIdx < 0) {
            updatedGroups.push(newGroup);
        } else {
            updatedGroups[currentGroupIdx] = newGroup;
        }
    });
    return updatedGroups;
};
const sortGroupsOnSearch = (groups)=>{
    const sortedGroups = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(groups, 'displayNumber').sort((a, b)=>{
        // enabled first
        if (a.enabled && !b.enabled) {
            return -1;
        }
        if (!a.enabled && b.enabled) {
            return 1;
        }
        return 0;
    });
    return sortedGroups;
};
/**
 * Formats `date` to string.
 *
 * @param dateMs Date to format.
 *
 * @returns Formatted date.
 */ const formatDate = (dateMs)=>{
    const dateObj = new Date(dateMs);
    const formatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return dateObj.toLocaleDateString('default', formatOptions);
};


/***/ }),

/***/ 180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* reexport */ Notifications)
});

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(52345);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./Extension/src/pages/options/stores/RootStore.ts + 1 modules
var RootStore = __webpack_require__(38026);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(96400);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.tsx
var Icon = __webpack_require__(3770);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(90495);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/Notification.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




/**
 * Notification component.
 *
 * @param props Notification component props
 */ const Notification = (props)=>{
    const [notificationIsClosed, setNotificationIsClosed] = (0,react.useState)(false);
    const [shouldCloseOnTimeout, setShouldCloseOnTimeout] = (0,react.useState)(true);
    const { uiStore } = (0,react.useContext)(RootStore/* rootStore */.a);
    const { id, description, type, extra } = props;
    const isNotificationWithLink = (extra === null || extra === void 0 ? void 0 : extra.link) && typeof (extra === null || extra === void 0 ? void 0 : extra.link) === 'string';
    const TIME_TO_REMOVE_NOTIFICATION_MS = 300;
    const NOTIFICATION_TTL_MS = 4000;
    (0,react.useEffect)(()=>{
        const closeTimeout = setTimeout(()=>{
            if (shouldCloseOnTimeout) {
                setNotificationIsClosed(true);
            }
        }, NOTIFICATION_TTL_MS);
        const removeTimeout = setTimeout(()=>{
            if (shouldCloseOnTimeout) {
                uiStore.removeNotification(id);
            }
        }, NOTIFICATION_TTL_MS + TIME_TO_REMOVE_NOTIFICATION_MS);
        return ()=>{
            clearTimeout(closeTimeout);
            clearTimeout(removeTimeout);
        };
    }, [
        id,
        uiStore,
        shouldCloseOnTimeout
    ]);
    const notificationClassnames = classnames_default()(`notification notification--${type}`, {
        'notification--close': notificationIsClosed
    });
    const handleCloseClick = ()=>{
        setNotificationIsClosed(true);
        const removeTimeout = setTimeout(()=>{
            uiStore.removeNotification(id);
            clearTimeout(removeTimeout);
        }, TIME_TO_REMOVE_NOTIFICATION_MS);
    };
    // TODO: Refactor this code and extract click handler from general
    // notification component.
    const handleRuleLimitsClick = (e)=>{
        e.preventDefault();
        messenger/* messenger */.e.openRulesLimitsTab();
        handleCloseClick();
    };
    /**
     * Handles mouse over event which prevents notification from closing.
     */ const handleMouseOver = ()=>{
        setShouldCloseOnTimeout(false);
    };
    return /*#__PURE__*/ react.createElement("div", {
        className: notificationClassnames,
        onMouseEnter: handleMouseOver
    }, /*#__PURE__*/ react.createElement(Icon/* Icon */.I, {
        id: "#info",
        classname: "icon--24"
    }), /*#__PURE__*/ react.createElement("div", {
        className: "notification__content"
    }, /*#__PURE__*/ react.createElement("p", null, description), isNotificationWithLink && /*#__PURE__*/ react.createElement("button", {
        type: "button",
        onClick: handleRuleLimitsClick
    }, extra.link)), /*#__PURE__*/ react.createElement("button", {
        "aria-label": "close",
        type: "button",
        className: "notification__btn-close",
        onClick: handleCloseClick
    }, /*#__PURE__*/ react.createElement(Icon/* Icon */.I, {
        id: "#cross",
        classname: "icon--24 icon--gray-default"
    })));
};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(29884);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6565);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(33383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(24500);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(23536);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(46429);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/options/components/Notifications/notifications.pcss
var notifications = __webpack_require__(1543);
;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/notifications.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(notifications/* default */.A, options);




       /* harmony default export */ const Notifications_notifications = (notifications/* default */.A && notifications/* default */.A.locals ? notifications/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/Notifications.tsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




const Notifications = (0,mobxreact_esm/* observer */.PA)(()=>{
    const { uiStore } = (0,react.useContext)(RootStore/* rootStore */.a);
    const { notifications } = uiStore;
    if (notifications.length === 0) {
        return null;
    }
    /**
     * Reverse notifications to correct transition for change position
     * of notification. If we use normal, not reversed order, new notification
     * will push old notifications (up or down) on the Y axis without transition.
     */ const reversedNotifications = notifications.slice().reverse();
    return /*#__PURE__*/ react.createElement("div", {
        className: "notifications"
    }, reversedNotifications.map((notification)=>/*#__PURE__*/ react.createElement(Notification, {
            key: notification.id,
            ...notification
        })));
});

;// CONCATENATED MODULE: ./Extension/src/pages/options/components/Notifications/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 


/***/ }),

/***/ 91363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getDynamicWarningMessage),
/* harmony export */   E: () => (/* binding */ getStaticWarningMessage)
/* harmony export */ });
/* harmony import */ var _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91310);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Returns a warning message based on the data.
 *
 * @param data Result of limits check of static rules.
 *
 * @returns Warning message or null if the data is invalid.
 */ const getStaticWarningMessage = (data)=>{
    const { filtersCount, rulesCount, rulesRegexpsCount } = data;
    if (filtersCount) {
        if (filtersCount.expected !== undefined && filtersCount.current !== undefined) {
            return _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator */ .N.getMessage('options_all_limits_exceeded_warning', {
                current: filtersCount.current,
                expected: filtersCount.expected
            });
        }
        if (filtersCount.maximum !== undefined && filtersCount.current !== undefined) {
            return _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator */ .N.getMessage('options_limits_warning_static_filters', {
                current: filtersCount.current,
                maximum: filtersCount.maximum
            });
        }
    }
    if (rulesCount) {
        return _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator */ .N.getMessage('options_limits_warning_static_rules', {
            current: rulesCount.current,
            maximum: rulesCount.maximum
        });
    }
    if (rulesRegexpsCount) {
        return _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator */ .N.getMessage('options_limits_warning_static_regex_rules', {
            current: rulesRegexpsCount.current,
            maximum: rulesRegexpsCount.maximum
        });
    }
    return null;
};
/**
 * Returns a warning message based on the data.
 *
 * @param data Result of limits check of dynamic rules.
 *
 * @returns Warning message or null if the data is invalid.
 */ const getDynamicWarningMessage = (data)=>{
    const { rulesCount, rulesRegexpsCount } = data;
    if (rulesCount) {
        return _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator */ .N.getMessage('options_limits_warning_dynamic_rules', {
            current: rulesCount.current,
            maximum: rulesCount.maximum
        });
    }
    if (rulesRegexpsCount) {
        return _common_translators_translator__WEBPACK_IMPORTED_MODULE_0__/* .translator */ .N.getMessage('options_limits_warning_dynamic_regex_rules', {
            current: rulesRegexpsCount.current,
            maximum: rulesRegexpsCount.maximum
        });
    }
    return null;
};


/***/ }),

/***/ 7593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ optionsStorage)
});

// EXTERNAL MODULE: ./Extension/src/common/logger.ts
var logger = __webpack_require__(68672);
;// CONCATENATED MODULE: ./Extension/src/pages/options/options-storage/OptionsStorage.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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

/**
 * Module used to keep options page settings, which do not need extension level persistence
 */ class OptionsStorage {
    /**
     * Set item to storage.
     *
     * @param key Key
     * @param value Value
     */ setItem(key, value) {
        try {
            this.storage.setItem(key, JSON.stringify(value));
        } catch (e) {
            logger/* logger */.v.debug(e);
        }
    }
    /**
     * Get item from storage.
     *
     * @param key Key
     */ getItem(key) {
        let storedValue = null;
        const item = this.storage.getItem(key);
        if (item !== null) {
            try {
                storedValue = JSON.parse(item);
            } catch (e) {
                logger/* logger */.v.debug(e);
            }
        }
        return storedValue === null ? this.DEFAULTS[key] : storedValue;
    }
    constructor(){
        _define_property(this, "KEYS", {
            /**
         * Allowlist editor wrap setting
         */ ALLOWLIST_EDITOR_WRAP: 'allowlist-editor-wrap',
            /**
         * Filtering log columns widths
         */ COLUMNS_WIDTHS_PX: 'columns-widths-px',
            /**
         * Filtering log columns widths
         */ COLUMNS_DATA: 'columns-data',
            /**
         * Request modal width
         */ REQUEST_INFO_MODAL_WIDTH: 'request-info-modal-width'
        });
        _define_property(this, "DEFAULTS", {
            [this.KEYS.ALLOWLIST_EDITOR_WRAP]: false,
            [this.KEYS.REQUEST_INFO_MODAL_WIDTH]: null,
            [this.KEYS.COLUMNS_DATA]: {
                status: {
                    width: 260
                },
                url: {
                    width: 260
                },
                type: {
                    width: 100
                },
                rule: {
                    width: 260
                },
                filter: {
                    width: 260
                },
                source: {
                    width: 200
                }
            }
        });
        /**
     * Storage object
     */ _define_property(this, "storage", void 0);
        this.storage = localStorage;
    }
}

;// CONCATENATED MODULE: ./Extension/src/pages/options/options-storage/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const optionsStorage = new OptionsStorage();


/***/ }),

/***/ 38026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ rootStore)
});

// UNUSED EXPORTS: RootStore

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(92400);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(52905);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(27349);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(19096);
// EXTERNAL MODULE: ./Extension/src/common/logger.ts
var logger = __webpack_require__(68672);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/savingFSM.ts
var savingFSM = __webpack_require__(37628);
// EXTERNAL MODULE: ./Extension/src/pages/common/constants.ts
var constants = __webpack_require__(50122);
// EXTERNAL MODULE: ./Extension/src/pages/helpers.ts
var helpers = __webpack_require__(51824);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(90495);
// EXTERNAL MODULE: ./Extension/src/pages/options/components/Filters/Search/constants.js
var Search_constants = __webpack_require__(19833);
// EXTERNAL MODULE: ./Extension/src/pages/options/components/Filters/helpers.ts
var Filters_helpers = __webpack_require__(16140);
// EXTERNAL MODULE: ./Extension/src/pages/options/options-storage/index.ts + 1 modules
var options_storage = __webpack_require__(7593);
// EXTERNAL MODULE: ./Extension/src/common/constants.ts
var common_constants = __webpack_require__(10135);
// EXTERNAL MODULE: ./Extension/src/common/translators/translator.ts
var translator = __webpack_require__(91310);
// EXTERNAL MODULE: ./Extension/src/pages/options/stores/UiStore.ts
var UiStore = __webpack_require__(36920);
;// CONCATENATED MODULE: ./Extension/src/pages/options/stores/SettingsStore.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}














/**
 * Sometimes the options page might be opened before the background page is ready to provide data.
 * In this case, we need to retry getting data from the background service.
 * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2712
 *
 * @returns data for the options page from the background page
 */ const getOptionsDataWithRetry = async ()=>{
    /**
     * Delay between retries in milliseconds
     */ const RETRY_DELAY_MS = 500;
    /**
     * Total number of retries.
     */ const TOTAL_RETRY_TIMES = 10;
    /**
     * Inner function to retry getting data from the background service.
     *
     * @param retryTimes {number} - number of retries left
     */ const innerRetry = async (retryTimes)=>{
        if (retryTimes === 0) {
            logger/* logger */.v.error('Failed to get options data from the background service');
            return null;
        }
        try {
            const data = await messenger/* messenger */.e.getOptionsData();
            if (!data) {
                await (0,helpers/* sleep */.yy)(RETRY_DELAY_MS);
                // eslint-disable-next-line @typescript-eslint/return-await
                return innerRetry(retryTimes - 1);
            }
            return data;
        } catch (e) {
            logger/* logger */.v.error(e);
            await (0,helpers/* sleep */.yy)(RETRY_DELAY_MS);
            return innerRetry(retryTimes - 1);
        }
    };
    return innerRetry(TOTAL_RETRY_TIMES);
};
const DEFAULT_RULES_LIMITS = {
    dynamicRulesEnabledCount: 0,
    dynamicRulesMaximumCount: 0,
    dynamicRulesRegexpsEnabledCount: 0,
    dynamicRulesRegexpsMaximumCount: 0,
    staticFiltersEnabledCount: 0,
    staticFiltersMaximumCount: 0,
    staticRulesEnabledCount: 0,
    staticRulesMaximumCount: 0,
    staticRulesRegexpsEnabledCount: 0,
    staticRulesRegexpsMaxCount: 0,
    expectedEnabledFilters: [],
    actuallyEnabledFilters: [],
    areFilterLimitsExceeded: false
};
/**
 * @typedef {import('../../common/messages/constants').CustomFilterSubscriptionData} CustomFilterSubscriptionData
 */ class SettingsStore {
    async getRulesLimitsCounters() {
        const rulesLimits = await messenger/* messenger */.e.getRulesLimitsCounters();
        (0,mobx_esm/* runInAction */.h5)(()=>{
            this.rulesLimits = rulesLimits;
        });
    }
    async checkLimitations() {
        const currentLimitsMv3 = await messenger/* messenger */.e.getCurrentLimits();
        const uiStore = this.rootStore.uiStore;
        uiStore.setStaticFiltersLimitsWarning(currentLimitsMv3.staticFiltersData);
        uiStore.setDynamicRulesLimitsWarning(currentLimitsMv3.dynamicRulesData);
        if (uiStore.dynamicRulesLimitsWarning) {
            uiStore.addNotification({
                description: uiStore.dynamicRulesLimitsWarning,
                extra: {
                    link: translator/* translator */.N.getMessage('options_rule_limits')
                },
                type: UiStore/* NotificationType */._.ERROR
            });
        }
        return currentLimitsMv3;
    }
    async requestOptionsData(firstRender) {
        // do not re-render options page if the annoyances consent modal is open.
        // it is needed to prevent switch disabling due to the actual state while the modal is shown
        if (this.isAnnoyancesConsentModalOpen) {
            return;
        }
        let data = null;
        if (firstRender) {
            // on first render background service might not be ready to provide data, so we need to get it with retry
            data = await getOptionsDataWithRetry();
        } else {
            data = await messenger/* messenger */.e.getOptionsData();
        }
        (0,mobx_esm/* runInAction */.h5)(()=>{
            this.settings = data.settings;
            // on first render we sort filters to show enabled on the top
            // filter should remain on the same place event after being enabled or disabled
            if (firstRender) {
                this.setFilters((0,Filters_helpers/* sortFilters */.WO)(data.filtersMetadata.filters));
            } else {
                // on the next filters updates, we update filters keeping order
                /**
                 * TODO (v.zhelvis): Updating filters on background service response can cause filter enable state mismatch,
                 * because we toggle switches on frontend side first, but cannot determine when action
                 * in background service is completed and final result of user action.
                 * It seems that we need to use a new approach with atomic updates instead of global state synchronization
                 * to avoid this kind of problems. This task can be split into two parts:
                 * - Moving specific logic from the background to the settings page.
                 * - Integrate a transparent transaction model with simple collision resolution to prevent race conditions.
                 */ this.setFilters((0,Filters_helpers/* updateFilters */.vm)(this.filters, data.filtersMetadata.filters));
            }
            // do not rerender groups on its turning on/off while searching
            if (this.isSearching) {
                this.setGroups((0,Filters_helpers/* updateGroups */.eq)(this.categories, data.filtersMetadata.categories));
            } else {
                this.setGroups(data.filtersMetadata.categories);
            }
            this.rulesCount = data.filtersInfo.rulesCount;
            this.version = data.appVersion;
            this.libVersions = data.libVersions;
            this.constants = data.constants;
            this.setAllowAcceptableAds(data.filtersMetadata.filters);
            this.setBlockKnownTrackers(data.filtersMetadata.filters);
            this.setStripTrackingParameters(data.filtersMetadata.filters);
            this.isChrome = data.environmentOptions.isChrome;
            this.optionsReadyToRender = true;
            this.fullscreenUserRulesEditorIsOpen = data.fullscreenUserRulesEditorIsOpen;
        });
        return data;
    }
    setSelectedGroupId(dirtyGroupId) {
        const groupId = Number.parseInt(dirtyGroupId, 10);
        if (Number.isNaN(groupId)) {
            this.selectedGroupId = null;
        } else {
            const groupExists = this.categories.find((category)=>category.groupId === groupId);
            if (groupExists) {
                this.selectedGroupId = groupId;
            } else {
                this.selectedGroupId = null;
            }
        }
    }
    async updateSetting(settingId, value, ignoreBackground = false) {
        this.settings.values[settingId] = value;
        if (!ignoreBackground) {
            await messenger/* messenger */.e.changeUserSetting(settingId, value);
        }
    }
    async setFilterRelatedSettingState(filterId, optionKey, enabled) {
        const prevValue = this[optionKey];
        this[optionKey] = enabled;
        try {
            const relatedFilter = this.filters.find((f)=>f.filterId === filterId);
            if (enabled) {
                await messenger/* messenger */.e.enableFilter(filterId);
                await this.updateGroupSetting(relatedFilter.groupId, enabled);
            } else {
                await messenger/* messenger */.e.disableFilter(filterId);
            }
            relatedFilter.enabled = enabled;
            this.refreshFilter(relatedFilter);
        } catch (e) {
            (0,mobx_esm/* runInAction */.h5)(()=>{
                this[optionKey] = prevValue;
            });
        }
    }
    async setAllowAcceptableAdsState(enabled) {
        const { SearchAndSelfPromoFilterId } = this.constants.AntiBannerFiltersId;
        await this.setFilterRelatedSettingState(SearchAndSelfPromoFilterId, this.KEYS.ALLOW_ACCEPTABLE_ADS, !enabled);
    }
    async setBlockKnownTrackersState(enabled) {
        const { TrackingFilterId } = this.constants.AntiBannerFiltersId;
        await this.setFilterRelatedSettingState(TrackingFilterId, this.KEYS.BLOCK_KNOWN_TRACKERS, enabled);
    }
    async setStripTrackingParametersState(enabled) {
        const { UrlTrackingFilterId } = this.constants.AntiBannerFiltersId;
        await this.setFilterRelatedSettingState(UrlTrackingFilterId, this.KEYS.STRIP_TRACKING_PARAMETERS, enabled);
    }
    setSetting(filtersId, settingKey, filters) {
        const relatedFilter = filters.find((f)=>f.filterId === filtersId);
        this[settingKey] = !!relatedFilter.enabled;
    }
    setAllowAcceptableAds(filters) {
        const { SearchAndSelfPromoFilterId } = this.constants.AntiBannerFiltersId;
        this.setSetting(SearchAndSelfPromoFilterId, this.KEYS.ALLOW_ACCEPTABLE_ADS, filters);
    }
    setBlockKnownTrackers(filters) {
        const { TrackingFilterId } = this.constants.AntiBannerFiltersId;
        this.setSetting(TrackingFilterId, this.KEYS.BLOCK_KNOWN_TRACKERS, filters);
    }
    setStripTrackingParameters(filters) {
        const { UrlTrackingFilterId } = this.constants.AntiBannerFiltersId;
        this.setSetting(UrlTrackingFilterId, this.KEYS.STRIP_TRACKING_PARAMETERS, filters);
    }
    isFilterEnabled(filterId) {
        const filter = this.filters.find((f)=>f.filterId === filterId);
        return filter.enabled;
    }
    isCategoryEnabled(categoryId) {
        const category = this.categories.find((c)=>c.groupId === categoryId);
        return category.enabled;
    }
    /**
     * Checks whether the group is touched.
     *
     * @param {number} groupId Group id.
     *
     * @returns {boolean} True if the group is touched, false otherwise.
     */ isGroupTouched(groupId) {
        return this.categories.some((c)=>c.groupId === groupId && c.touched);
    }
    isAllowAcceptableAdsFilterEnabled() {
        const { SearchAndSelfPromoFilterId } = this.constants.AntiBannerFiltersId;
        return this.isFilterEnabled(SearchAndSelfPromoFilterId);
    }
    isBlockKnownTrackersFilterEnabled() {
        const { TrackingFilterId } = this.constants.AntiBannerFiltersId;
        return this.isFilterEnabled(TrackingFilterId);
    }
    isStripTrackingParametersFilterEnabled() {
        const { UrlTrackingFilterId } = this.constants.AntiBannerFiltersId;
        return this.isFilterEnabled(UrlTrackingFilterId);
    }
    /**
     * List of annoyances filters.
     */ get annoyancesFilters() {
        const annoyancesGroup = this.categories.find((group)=>{
            return group.groupId === common_constants/* AntibannerGroupsId */.ge.AnnoyancesFiltersGroupId;
        });
        return annoyancesGroup.filters;
    }
    /**
     * List of recommended annoyances filters.
     */ get recommendedAnnoyancesFilters() {
        return this.annoyancesFilters.filter((filter)=>{
            return filter.tags.includes(common_constants/* RECOMMENDED_TAG_ID */.Nq);
        });
    }
    /**
     * List of AdGuard annoyances filters.
     */ get agAnnoyancesFilters() {
        return [
            ...this.recommendedAnnoyancesFilters,
            this.annoyancesFilters.find((f)=>{
                return f.filterId === common_constants/* AntiBannerFiltersId */.j8.AnnoyancesCombinedFilterId;
            })
        ];
    }
    /**
     * Used to display the last check time under all rules count.
     *
     * @returns {number} the latest check time of all filters.
     */ get latestCheckTime() {
        return Math.max(...this.filters.map(({ lastScheduledCheckTime, lastCheckTime })=>Math.max(lastScheduledCheckTime || 0, lastCheckTime || 0)));
    }
    async updateGroupSetting(groupId, enabled) {
        const recommendedFiltersIds = await messenger/* messenger */.e.updateGroupStatus(groupId, enabled);
        await this.getRulesLimitsCounters();
        (0,mobx_esm/* runInAction */.h5)(()=>{
            if (groupId === common_constants/* AntibannerGroupsId */.ge.OtherFiltersGroupId && this.isAllowAcceptableAdsFilterEnabled()) {
                this.allowAcceptableAds = enabled;
            } else if (groupId === common_constants/* AntibannerGroupsId */.ge.PrivacyFiltersGroupId) {
                if (this.isBlockKnownTrackersFilterEnabled()) {
                    this.blockKnownTrackers = enabled;
                }
                if (this.isStripTrackingParametersFilterEnabled()) {
                    this.stripTrackingParameters = enabled;
                }
            }
            this.categories.forEach((group)=>{
                if (group.groupId === groupId) {
                    if (enabled) {
                        // eslint-disable-next-line no-param-reassign
                        group.enabled = true;
                    } else {
                        // eslint-disable-next-line no-param-reassign
                        delete group.enabled;
                    }
                }
            });
            if (Array.isArray(recommendedFiltersIds)) {
                recommendedFiltersIds.forEach((id)=>{
                    this.setFilterEnabledState(id, true);
                });
            }
        });
    }
    updateGroupStateUI(groupId, enabled) {
        this.categories.forEach((category)=>{
            if (category.groupId === groupId) {
                if (enabled) {
                    category.enabled = true;
                } else {
                    delete category.enabled;
                }
            }
        });
    }
    updateFilterStateUI(filterId, enabled) {
        this.filters.forEach((filter)=>{
            if (filter.filterId === filterId) {
                if (enabled) {
                    filter.enabled = true;
                } else {
                    delete filter.enabled;
                }
            }
        });
    }
    setFiltersToGetConsentFor(filters) {
        this.filtersToGetConsentFor = filters;
    }
    refreshFilters(updatedFilters) {
        if (updatedFilters && updatedFilters.length) {
            updatedFilters.forEach((filter)=>this.refreshFilter(filter));
        }
    }
    refreshFilter(filter) {
        if (!filter) {
            return;
        }
        const idx = this.filters.findIndex((f)=>f.filterId === filter.filterId);
        if (idx !== -1) {
            Object.keys(filter).forEach((key)=>{
                this.filters[idx][key] = filter[key];
            });
        }
    }
    async updateFilterSetting(filterId, enabled) {
        /**
         * Optimistically set the enabled property to true.
         * The verified state of the filter will be emitted after the engine update.
         */ // do not update filter state for mv3 optimistically
        if (false) {}
        try {
            const groupId = await messenger/* messenger */.e.updateFilterStatus(filterId, enabled);
            // update allow acceptable ads setting
            if (filterId === this.constants.AntiBannerFiltersId.SearchAndSelfPromoFilterId) {
                this.allowAcceptableAds = enabled;
            } else if (filterId === this.constants.AntiBannerFiltersId.TrackingFilterId) {
                this.blockKnownTrackers = enabled;
            } else if (filterId === this.constants.AntiBannerFiltersId.UrlTrackingFilterId) {
                this.stripTrackingParameters = enabled;
            }
            if (groupId) {
                const group = this.categories.find((group)=>group.groupId === groupId);
                if (group) {
                    group.enabled = true;
                    // if any filter in group is enabled, the group is considered as touched
                    group.touched = true;
                }
            }
            if (true) {
                this.setFilterEnabledState(filterId, enabled);
            }
        } catch (e) {
            logger/* logger */.v.error(e);
            this.setFilterEnabledState(filterId, !enabled);
        }
    }
    setFiltersUpdating(value) {
        this.filtersUpdating = value;
    }
    async updateFilters() {
        this.setFiltersUpdating(true);
        try {
            const filtersUpdates = await messenger/* messenger */.e.updateFilters();
            this.refreshFilters(filtersUpdates);
            setTimeout(()=>{
                this.setFiltersUpdating(false);
            }, constants/* MIN_FILTERS_UPDATE_DISPLAY_DURATION_MS */.KR);
            return filtersUpdates;
        } catch (error) {
            this.setFiltersUpdating(false);
            throw error;
        }
    }
    /**
     * Adds a custom filter but does not enable it.
     *
     * @param {CustomFilterSubscriptionData} filter Custom filter data.
     *
     * @returns {Promise<number>} Custom filter id.
     */ async addCustomFilter(filter) {
        const newFilter = await messenger/* messenger */.e.addCustomFilter(filter);
        if (!newFilter) {
            return;
        }
        (0,mobx_esm/* runInAction */.h5)(()=>{
            /**
             * This was added because sometimes the filter might already be in the list.
             * It happens in the case where a filter was added and the engine fired an
             * event that it was updated and the options page already fetched options data.
             */ if (!this.filters.some((f)=>f.filterId === newFilter.filterId)) {
                this.filters.push(newFilter);
            }
            if (this.searchSelect !== Search_constants/* SEARCH_FILTERS */.F.ALL) {
                this.setSearchSelect(Search_constants/* SEARCH_FILTERS */.F.ALL);
            }
        });
        return newFilter.filterId;
    }
    async removeCustomFilter(filterId) {
        await messenger/* messenger */.e.removeCustomFilter(filterId);
        (0,mobx_esm/* runInAction */.h5)(()=>{
            this.setFilters(this.filters.filter((filter)=>filter.filterId !== filterId));
            this.setVisibleFilters(this.visibleFilters.filter((filter)=>{
                return filter.filterId !== filterId;
            }));
        });
    }
    get isSearching() {
        return this.searchSelect !== Search_constants/* SEARCH_FILTERS */.F.ALL || this.searchInput;
    }
    get filtersToRender() {
        const searchInputString = this.searchInput.replace(common_constants/* WASTE_CHARACTERS */.iR, '\\$&');
        const searchQuery = new RegExp(searchInputString, 'ig');
        let selectedFilters;
        if (this.isSearching) {
            selectedFilters = this.visibleFilters;
        } else {
            selectedFilters = this.filters;
        }
        return selectedFilters.filter((filter)=>{
            if (Number.isInteger(this.selectedGroupId)) {
                return filter.groupId === this.selectedGroupId;
            }
            return true;
        }).filter((filter)=>{
            const nameIsMatching = filter.name.match(searchQuery);
            if (nameIsMatching) {
                return true;
            }
            if (filter.tagsDetails) {
                const tagKeywordIsMatching = filter.tagsDetails.some((tag)=>`#${tag.keyword}`.match(searchQuery));
                if (tagKeywordIsMatching) {
                    return true;
                }
            }
            // AG-10491
            if (filter.trusted && filter.trusted === true) {
                const trustedTagMatching = `#${common_constants/* TRUSTED_TAG_KEYWORD */.Fx}`.match(searchQuery);
                if (trustedTagMatching) {
                    return true;
                }
            }
            return false;
        });
    }
    get appearanceTheme() {
        if (!this.settings) {
            return null;
        }
        return this.settings.values[this.settings.names.AppearanceTheme];
    }
    get showAdguardPromoInfo() {
        if (!this.settings) {
            return null;
        }
        return !this.settings.values[this.settings.names.DisableShowAdguardPromoInfo];
    }
    async hideAdguardPromoInfo() {
        await this.updateSetting(this.settings.names.DisableShowAdguardPromoInfo, true);
    }
    get allowlistEditorWrapState() {
        if (this.allowlistEditorWrap === null) {
            this.allowlistEditorWrap = options_storage/* optionsStorage */.O.getItem(options_storage/* optionsStorage */.O.KEYS.ALLOWLIST_EDITOR_WRAP);
        }
        return this.allowlistEditorWrap;
    }
    toggleAllowlistEditorWrap() {
        this.allowlistEditorWrap = !this.allowlistEditorWrap;
        options_storage/* optionsStorage */.O.setItem(options_storage/* optionsStorage */.O.KEYS.ALLOWLIST_EDITOR_WRAP, this.allowlistEditorWrap);
    }
    get footerRateShowState() {
        return !this.settings.values[this.settings.names.HideRateBlock];
    }
    async hideFooterRateShow() {
        await this.updateSetting(this.settings.names.HideRateBlock, true);
    }
    setFullscreenUserRulesEditorState(isOpen) {
        this.fullscreenUserRulesEditorIsOpen = isOpen;
    }
    get isFullscreenUserRulesEditorOpen() {
        return this.fullscreenUserRulesEditorIsOpen;
    }
    get userFilterEnabledSettingId() {
        return this.settings.names.UserFilterEnabled;
    }
    get userFilterEnabled() {
        return this.settings.values[this.userFilterEnabledSettingId];
    }
    setAllowlistSizeReset(value) {
        this.allowlistSizeReset = value;
    }
    get isUpdateFiltersButtonActive() {
        return this.filters.some((filter)=>filter.enabled && this.isCategoryEnabled(filter.groupId));
    }
    get shouldShowFilterPolicy() {
        if (this.filterIdSelectedForConsent) {
            return this.agAnnoyancesFilters.some((f)=>f.filterId === this.filterIdSelectedForConsent);
        }
        // consent modal for group
        return true;
    }
    constructor(rootStore){
        _define_property(this, "KEYS", {
            ALLOW_ACCEPTABLE_ADS: 'allowAcceptableAds',
            BLOCK_KNOWN_TRACKERS: 'blockKnownTrackers',
            STRIP_TRACKING_PARAMETERS: 'stripTrackingParameters'
        });
        _define_property(this, "savingAllowlistService", (0,savingFSM/* createSavingService */.s0)({
            id: 'allowlist',
            services: {
                saveData: async ({ event })=>{
                    /**
                 * If saveAllowlist executes faster than MIN_EXECUTION_TIME_REQUIRED_MS we increase
                 * execution time for smoother user experience.
                 *
                 * TODO: Can we remove this and set minDelayLoader when we call
                 * saveAllowlist as in the user rules section?
                 */ const MIN_EXECUTION_TIME_REQUIRED_MS = 500;
                    const { value, callback } = event;
                    const start = Date.now();
                    await messenger/* messenger */.e.saveAllowlist(value);
                    const end = Date.now();
                    const timePassed = end - start;
                    if (timePassed < MIN_EXECUTION_TIME_REQUIRED_MS) {
                        await (0,helpers/* sleep */.yy)(MIN_EXECUTION_TIME_REQUIRED_MS - timePassed);
                    }
                    await callback();
                }
            }
        }));
        _define_property(this, "settings", null);
        _define_property(this, "optionsReadyToRender", false);
        _define_property(this, "version", null);
        _define_property(this, "libVersions", null);
        _define_property(this, "filters", []);
        _define_property(this, "categories", []);
        _define_property(this, "visibleFilters", []);
        _define_property(this, "rulesCount", 0);
        _define_property(this, "allowAcceptableAds", null);
        _define_property(this, "blockKnownTrackers", null);
        _define_property(this, "stripTrackingParameters", null);
        _define_property(this, "allowlist", '');
        _define_property(this, "savingAllowlistState", this.savingAllowlistService.getSnapshot().value);
        _define_property(this, "filtersUpdating", false);
        _define_property(this, "selectedGroupId", null);
        _define_property(this, "isChrome", null);
        _define_property(this, "searchInput", '');
        _define_property(this, "searchSelect", Search_constants/* SEARCH_FILTERS */.F.ALL);
        _define_property(this, "allowlistEditorContentChanged", false);
        _define_property(this, "allowlistEditorWrap", null);
        _define_property(this, "fullscreenUserRulesEditorIsOpen", false);
        _define_property(this, "allowlistSizeReset", false);
        _define_property(this, "filtersToGetConsentFor", []);
        _define_property(this, "isAnnoyancesConsentModalOpen", false);
        _define_property(this, "filterIdSelectedForConsent", null);
        _define_property(this, "rulesLimits", DEFAULT_RULES_LIMITS);
        _define_property(this, "setFilterEnabledState", (rawFilterId, enabled)=>{
            const filterId = parseInt(rawFilterId, 10);
            this.filters.forEach((filter)=>{
                if (filter.filterId === filterId) {
                    // eslint-disable-next-line no-param-reassign
                    filter.enabled = !!enabled;
                }
            });
            this.visibleFilters.forEach((filter)=>{
                if (filter.filterId === filterId) {
                    // eslint-disable-next-line no-param-reassign
                    filter.enabled = !!enabled;
                }
            });
        });
        _define_property(this, "setAllowlist", (allowlist)=>{
            this.allowlist = allowlist;
        });
        _define_property(this, "getAllowlist", async ()=>{
            try {
                const { content } = await messenger/* messenger */.e.getAllowlist();
                this.setAllowlist(content);
            } catch (e) {
                logger/* logger */.v.debug(e);
            }
        });
        _define_property(this, "saveAllowlist", async (value)=>{
            return new Promise((resolve, reject)=>{
                try {
                    this.savingAllowlistService.send({
                        type: savingFSM/* SavingFSMEvent */.xo.Save,
                        value,
                        callback: resolve
                    });
                } catch (e) {
                    reject(e);
                }
            });
        });
        _define_property(this, "setAllowlistEditorContentChangedState", (state)=>{
            this.allowlistEditorContentChanged = state;
        });
        _define_property(this, "setSearchInput", (value)=>{
            this.searchInput = value;
            this.sortFilters();
            this.sortSearchGroups();
            this.selectVisibleFilters();
        });
        _define_property(this, "setSearchSelect", (value)=>{
            this.searchSelect = value;
            this.sortFilters();
            this.sortSearchGroups();
            this.selectVisibleFilters();
        });
        /**
     * We do not sort filters on every filters data update for better UI experience
     * Filters sort happens when user exits from filters group, or changes search filters
     */ _define_property(this, "sortFilters", ()=>{
            this.setFilters((0,Filters_helpers/* sortFilters */.WO)(this.filters));
        });
        _define_property(this, "setFilters", (filters)=>{
            this.filters = filters;
        });
        _define_property(this, "setVisibleFilters", (visibleFilters)=>{
            this.visibleFilters = visibleFilters;
        });
        /**
     * We do not sort groups while search on every groups data update for better UI experience
     * Groups sort happens only when user changes search filters
     */ _define_property(this, "sortSearchGroups", ()=>{
            this.setGroups((0,Filters_helpers/* sortGroupsOnSearch */.o7)(this.categories));
        });
        _define_property(this, "setGroups", (categories)=>{
            this.categories = categories;
        });
        /**
     * We use visibleFilters for better UI experience, in order not to hide filter
     * when user enables/disables filter when he has chosen search filters
     * We update visibleFilters when search filters are updated
     *
     */ _define_property(this, "selectVisibleFilters", ()=>{
            this.visibleFilters = this.filters.filter((filter)=>{
                let searchMod;
                switch(this.searchSelect){
                    case Search_constants/* SEARCH_FILTERS */.F.ENABLED:
                        searchMod = filter.enabled;
                        break;
                    case Search_constants/* SEARCH_FILTERS */.F.DISABLED:
                        searchMod = !filter.enabled;
                        break;
                    default:
                        searchMod = true;
                }
                return searchMod;
            });
        });
        _define_property(this, "setIsAnnoyancesConsentModalOpen", (value)=>{
            this.isAnnoyancesConsentModalOpen = value;
        });
        _define_property(this, "setFilterIdSelectedForConsent", (filterId)=>{
            this.filterIdSelectedForConsent = filterId;
            this.updateFilterStateUI(filterId, true);
        });
        _define_property(this, "handleFilterConsentCancel", ()=>{
            if (this.filterIdSelectedForConsent) {
                this.updateFilterStateUI(this.filterIdSelectedForConsent, false);
                this.filterIdSelectedForConsent = null;
                return;
            }
            // handle modal for group
            this.updateGroupStateUI(common_constants/* AntibannerGroupsId */.ge.AnnoyancesFiltersGroupId, false);
        });
        _define_property(this, "handleFilterConsentConfirm", async ()=>{
            if (this.filterIdSelectedForConsent) {
                await this.updateFilterSetting(this.filterIdSelectedForConsent, true);
                await messenger/* messenger */.e.setConsentedFilters([
                    this.filterIdSelectedForConsent
                ]);
                this.filterIdSelectedForConsent = null;
                return;
            }
            // handle consent modal for group
            await this.updateGroupSetting(common_constants/* AntibannerGroupsId */.ge.AnnoyancesFiltersGroupId, true);
            await messenger/* messenger */.e.setConsentedFilters(this.recommendedAnnoyancesFilters.map((f)=>f.filterId));
        });
        (0,mobx_esm/* makeObservable */.Gn)(this);
        this.rootStore = rootStore;
        this.updateSetting = this.updateSetting.bind(this);
        this.updateFilterSetting = this.updateFilterSetting.bind(this);
        this.updateGroupSetting = this.updateGroupSetting.bind(this);
        this.setAllowAcceptableAdsState = this.setAllowAcceptableAdsState.bind(this);
        this.savingAllowlistService.subscribe((state)=>{
            (0,mobx_esm/* runInAction */.h5)(()=>{
                this.savingAllowlistState = state.value;
                if (state.value === savingFSM/* SavingFSMState */.A3.Saving) {
                    this.allowlistEditorContentChanged = false;
                }
            });
        });
    }
}
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "settings", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "optionsReadyToRender", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "version", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "libVersions", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "filters", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "categories", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "visibleFilters", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "rulesCount", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "allowAcceptableAds", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "blockKnownTrackers", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "stripTrackingParameters", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "allowlist", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "savingAllowlistState", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "filtersUpdating", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "selectedGroupId", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "isChrome", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "searchInput", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "searchSelect", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "allowlistEditorContentChanged", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "allowlistEditorWrap", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "fullscreenUserRulesEditorIsOpen", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "allowlistSizeReset", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "filtersToGetConsentFor", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "isAnnoyancesConsentModalOpen", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "filterIdSelectedForConsent", void 0);
_ts_decorate([
    mobx_esm/* observable */.sH
], SettingsStore.prototype, "rulesLimits", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "getRulesLimitsCounters", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "checkLimitations", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "requestOptionsData", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setSelectedGroupId", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "updateSetting", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setAllowAcceptableAdsState", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setBlockKnownTrackersState", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setStripTrackingParametersState", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setAllowAcceptableAds", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setBlockKnownTrackers", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setStripTrackingParameters", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "annoyancesFilters", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "recommendedAnnoyancesFilters", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "agAnnoyancesFilters", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "latestCheckTime", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "updateGroupSetting", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "updateGroupStateUI", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "updateFilterStateUI", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setFiltersToGetConsentFor", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "refreshFilters", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "refreshFilter", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setFilterEnabledState", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "updateFilterSetting", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setFiltersUpdating", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "updateFilters", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "addCustomFilter", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "removeCustomFilter", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setAllowlist", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "getAllowlist", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setAllowlistEditorContentChangedState", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setSearchInput", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setSearchSelect", void 0);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "isSearching", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "sortFilters", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setFilters", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setVisibleFilters", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "sortSearchGroups", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setGroups", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "selectVisibleFilters", void 0);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "filtersToRender", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "appearanceTheme", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "showAdguardPromoInfo", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "hideAdguardPromoInfo", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "allowlistEditorWrapState", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "toggleAllowlistEditorWrap", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "footerRateShowState", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "hideFooterRateShow", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setFullscreenUserRulesEditorState", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "isFullscreenUserRulesEditorOpen", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "userFilterEnabledSettingId", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "userFilterEnabled", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setAllowlistSizeReset", null);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "isUpdateFiltersButtonActive", null);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setIsAnnoyancesConsentModalOpen", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "setFilterIdSelectedForConsent", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "handleFilterConsentCancel", void 0);
_ts_decorate([
    mobx_esm/* action */.XI
], SettingsStore.prototype, "handleFilterConsentConfirm", void 0);
_ts_decorate([
    mobx_esm/* computed */.EW
], SettingsStore.prototype, "shouldShowFilterPolicy", null);
/* harmony default export */ const stores_SettingsStore = (SettingsStore);

;// CONCATENATED MODULE: ./Extension/src/pages/options/stores/RootStore.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function RootStore_define_property(obj, key, value) {
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




// Do not allow property change outside of store actions
(0,mobx_esm/* configure */.jK)({
    enforceActions: 'observed'
});
class RootStore {
    constructor(){
        RootStore_define_property(this, "uiStore", void 0);
        RootStore_define_property(this, "settingsStore", void 0);
        // uiStore should be initialized before settingsStore
        // because settingsStore uses uiStore
        this.uiStore = new UiStore/* default */.A(this);
        this.settingsStore = new stores_SettingsStore(this);
    }
}
const rootStore = (0,react.createContext)(new RootStore());


/***/ }),

/***/ 36920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _: () => (/* binding */ NotificationType)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19096);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63318);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52905);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47127);
/* harmony import */ var _components_Warnings_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91363);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




// TODO: Maybe not import from components folder here?

var NotificationType;
(function(NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["ERROR"] = "error";
})(NotificationType || (NotificationType = {}));
class UiStore {
    addNotification({ description, type, extra }) {
        const id = (0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .Ak)();
        this.notifications.push({
            id,
            description,
            extra,
            type
        });
        return id;
    }
    removeNotification(id) {
        this.notifications = this.notifications.filter((notification)=>notification.id !== id);
    }
    /**
     * Sets the loader visibility state. **Used for mv3**
     *
     * @param value Loader visibility state. Default value is false.
     */ setShowLoader(value = false) {
        this.showLoader = value;
    }
    /**
     * Sets a specific limit warning message to be displayed about static filters.
     *
     * @throws Error if the warning type is incorrect.
     *
     * @param data Result of limits check of static rules.
     */ setStaticFiltersLimitsWarning(data) {
        if (!data) {
            this.staticFiltersLimitsWarning = null;
            return;
        }
        if (data.type !== 'static') {
            throw new Error('Incorrect warning type');
        }
        this.staticFiltersLimitsWarning = (0,_components_Warnings_messages__WEBPACK_IMPORTED_MODULE_2__/* .getStaticWarningMessage */ .E)(data);
    }
    /**
     * Sets a specific limit warning message to be displayed about dynamic section with user rules.
     *
     * @throws Error if the warning type is incorrect.
     *
     * @param data Result of limits check of dynamic rules.
     */ setDynamicRulesLimitsWarning(data) {
        if (!data) {
            this.dynamicRulesLimitsWarning = null;
            return;
        }
        if (data.type !== 'dynamic') {
            throw new Error('Incorrect warning type');
        }
        this.dynamicRulesLimitsWarning = (0,_components_Warnings_messages__WEBPACK_IMPORTED_MODULE_2__/* .getDynamicWarningMessage */ .$)(data);
    }
    constructor(rootStore){
        /**
     * Root store instance. Added in advance, even though it is not used.
     */ _define_property(this, "rootStore", void 0);
        /**
     * Notifications list
     */ _define_property(this, "notifications", []);
        /**
     * Loader visibility state. **Used for mv3**.
     */ _define_property(this, "showLoader", false);
        /**
     * Specific limits warning message to be displayed about static filters.
     */ _define_property(this, "staticFiltersLimitsWarning", null);
        /**
     * Specific limits warning message to be displayed about dynamic section with user rules.
     */ _define_property(this, "dynamicRulesLimitsWarning", null);
        this.rootStore = rootStore;
        (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .makeObservable */ .Gn)(this);
        this.setShowLoader = this.setShowLoader.bind(this);
        this.setStaticFiltersLimitsWarning = this.setStaticFiltersLimitsWarning.bind(this);
        this.setDynamicRulesLimitsWarning = this.setDynamicRulesLimitsWarning.bind(this);
    }
}
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .sH
], UiStore.prototype, "notifications", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .sH
], UiStore.prototype, "showLoader", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .sH
], UiStore.prototype, "staticFiltersLimitsWarning", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .sH
], UiStore.prototype, "dynamicRulesLimitsWarning", void 0);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .XI
], UiStore.prototype, "addNotification", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .XI
], UiStore.prototype, "removeNotification", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .XI
], UiStore.prototype, "setShowLoader", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .XI
], UiStore.prototype, "setStaticFiltersLimitsWarning", null);
_ts_decorate([
    mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .XI
], UiStore.prototype, "setDynamicRulesLimitsWarning", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiStore);


/***/ }),

/***/ 90495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ messenger)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79899);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47127);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68672);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12839);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
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




/**
 * @typedef {import('../../background/api').FilteringLogTabInfo} FilteringLogTabInfo
 */ /**
 * @typedef {import('../../background/services/rules-limits/interface').StaticLimitsCheckResult} StaticLimitsCheckResult
 */ /**
 * @typedef {import('../../background/services/rules-limits/interface').DynamicLimitsCheckResult} DynamicLimitsCheckResult
 */ /**
 * @typedef {import('../../common/messages/constants').CustomFilterSubscriptionData} CustomFilterSubscriptionData
 */ /**
 * @typedef {import('../../background/schema/custom-filter-metadata').CustomFilterMetadata} CustomFilterMetadata
 */ /**
 * @typedef {import('../../background/services/rules-limits/interface').Mv3LimitsCheckResult} Mv3LimitsCheckResult
 */ /**
 * @typedef {import('../../background/services').GetTabInfoForPopupResponse} GetTabInfoForPopupResponse
 */ class Messenger {
    // eslint-disable-next-line class-methods-use-this
    async sendMessage(type, data) {
        _common_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.debug('Request type:', type);
        if (data) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.debug('Request data:', data);
        }
        const response = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
            handlerName: _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .APP_MESSAGE_HANDLER_NAME */ .zk,
            type,
            data
        });
        if (response) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.debug('Response type:', type);
            _common_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.debug('Response data:', response);
        }
        return response;
    }
    async getOptionsData() {
        const res = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetOptionsData);
        return res;
    }
    async changeUserSetting(settingId, value) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ChangeUserSettings, {
            key: settingId,
            value
        });
    }
    async enableFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.AddAndEnableFilter, {
            filterId
        });
    }
    async disableFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.DisableFilter, {
            filterId
        });
    }
    async applySettingsJson(json) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ApplySettingsJson, {
            json
        });
    }
    async openFilteringLog() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenFilteringLog);
    }
    async resetStatistics() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ResetBlockedAdsCount);
    }
    async setFilteringLogWindowState(windowState) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SetFilteringLogWindowState, {
            windowState
        });
    }
    async resetSettings() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ResetSettings);
    }
    async getUserRules() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetUserRules);
    }
    async saveUserRules(value) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SaveUserRules, {
            value
        });
    }
    async getAllowlist() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetAllowlistDomains);
    }
    async saveAllowlist(value) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SaveAllowlistDomains, {
            value
        });
    }
    /**
     * Sends a message to the background page to update filters.
     *
     * @returns {Promise<[]>} List of filters.
     */ async updateFilters() {
        if (true) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.debug('Filters update is not supported in MV3');
            return [];
        }
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.CheckFiltersUpdate);
    }
    async updateGroupStatus(id, enabled) {
        const type = enabled ? _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.EnableFiltersGroup : _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.DisableFiltersGroup;
        const groupId = Number.parseInt(id, 10);
        return this.sendMessage(type, {
            groupId
        });
    }
    async updateFilterStatus(filterId, enabled) {
        return enabled ? this.enableFilter(filterId) : this.disableFilter(filterId);
    }
    async setConsentedFilters(filterIds) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SetConsentedFilters, {
            filterIds
        });
    }
    async getIsConsentedFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetIsConsentedFilter, {
            filterId
        });
    }
    async checkCustomUrl(url) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.LoadCustomFilterInfo, {
            url
        });
    }
    /**
     * Sends a message to the background page to add a custom filter.
     *
     * @param {CustomFilterSubscriptionData} filter Custom filter data.
     *
     * @returns {Promise<CustomFilterMetadata>} Custom filter metadata.
     */ async addCustomFilter(filter) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SubscribeToCustomFilter, {
            filter
        });
    }
    async removeCustomFilter(filterId) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.RemoveAntiBannerFilter, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to check if the engine is started.
     *
     * @returns {Promise<boolean>} Promise that resolves to a boolean value:
     * true if the engine is started, false otherwise.
     */ async getIsEngineStarted() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetIsEngineStarted);
    }
    /**
     * Sends a message to the background to get the tab info for the popup.
     *
     * @param {number} tabId Tab id.
     *
     * @returns {Promise<GetTabInfoForPopupResponse | undefined>} Tab info.
     */ async getTabInfoForPopup(tabId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetTabInfoForPopup, {
            tabId
        });
    }
    async changeApplicationFilteringPaused(state) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ChangeApplicationFilteringPaused, {
            state
        });
    }
    async openRulesLimitsTab() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenRulesLimitsTab);
    }
    async openSettingsTab() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenSettingsTab);
    }
    async openAssistant() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenAssistant);
    }
    async openAbuseSite(url, from) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenAbuseTab, {
            url,
            from
        });
    }
    async checkSiteSecurity(url, from) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenSiteReportTab, {
            url,
            from
        });
    }
    async resetUserRulesForPage(url) {
        const [currentTab] = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().tabs.query({
            active: true,
            currentWindow: true
        });
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ResetUserRulesForPage, {
            url,
            tabId: currentTab === null || currentTab === void 0 ? void 0 : currentTab.id
        });
    }
    async removeAllowlistDomain(tabId, tabRefresh) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.RemoveAllowlistDomain, {
            tabId,
            tabRefresh
        });
    }
    async addAllowlistDomain(tabId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.AddAllowlistDomainPopup, {
            tabId
        });
    }
    /**
     * Works only in mv2, since mv3 doesn't support filtering log yet.
     */ async onOpenFilteringLogPage() {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OnOpenFilteringLogPage);
    }
    async getFilteringLogData() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetFilteringLogData);
    }
    async onCloseFilteringLogPage() {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OnCloseFilteringLogPage);
    }
    /**
     * Sends a message to the background page to get filtering info by tab id.
     *
     * @returns {FilteringLogTabInfo} Filtering info about the tab.
     */ async getFilteringInfoByTabId(tabId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetFilteringInfoByTabId, {
            tabId
        });
    }
    /**
     * Sends a message to synchronize the list of open tabs.
     *
     * @returns {FilteringLogTabInfo[]} Array of filtering info about open tabs.
     */ async synchronizeOpenTabs() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SynchronizeOpenTabs);
    }
    async clearEventsByTabId(tabId, ignorePreserveLog) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.ClearEventsByTabId, {
            tabId,
            ignorePreserveLog
        });
    }
    async refreshPage(tabId, preserveLogEnabled) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.RefreshPage, {
            tabId,
            preserveLogEnabled
        });
    }
    async addUserRule(ruleText) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.AddUserRule, {
            ruleText
        });
    }
    async removeUserRule(ruleText) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.RemoveUserRule, {
            ruleText
        });
    }
    async setPreserveLogState(state) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SetPreserveLogState, {
            state
        });
    }
    async getEditorStorageContent() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetEditorStorageContent);
    }
    async setEditorStorageContent(content) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.SetEditorStorageContent, {
            content
        });
    }
    async getRulesLimitsCounters() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.GetRulesLimitsCountersMv3);
    }
    /**
     * Sends a message to background page to check if it is possible to enable static filter.
     *
     * @param {number} filterId Filter id.
     *
     * @returns {Promise<StaticLimitsCheckResult>} A check result.
     * @throws {Error} If the filter is not static.
     */ async canEnableStaticFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.CanEnableStaticFilterMv3, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to check if all user rules' dynamic rules are be enabled.
     *
     * @param groupId Group identifier.
     * @returns {Promise<StaticLimitsCheckResult>}
     */ async canEnableStaticGroup(groupId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.CanEnableStaticGroupMv3, {
            groupId
        });
    }
    /**
     * Sends a message to the background page to get static filters limits.
     *
     * @returns {Promise<Mv3LimitsCheckResult>}
     */ async getCurrentLimits() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.CurrentLimitsMv3);
    }
    constructor(){
        _define_property(this, "onMessage", (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime).onMessage);
        /**
     * Creates long-lived connections between popup and background page.
     *
     * @param {string} page
     * @param events
     * @param callback
     * @returns {() => Promise<void>}
     */ _define_property(this, "createLongLivedConnection", (page, events, callback)=>{
            const eventListener = (...args)=>{
                callback(...args);
            };
            let port;
            let forceDisconnected = false;
            const connect = ()=>{
                port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.connect({
                    name: `${page}_${(0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .Ak)()}`
                });
                port.postMessage({
                    type: _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.AddLongLivedConnection,
                    data: {
                        events
                    }
                });
                port.onMessage.addListener((message)=>{
                    if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.NotifyListeners) {
                        const [type, ...data] = message.data;
                        eventListener({
                            type,
                            data
                        });
                    }
                });
                port.onDisconnect.addListener(()=>{
                    if ((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime).lastError) {
                        _common_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.error((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime).lastError.message);
                    }
                    // we try to connect again if the background page was terminated
                    if (!forceDisconnected) {
                        connect();
                    }
                });
            };
            connect();
            const onUnload = ()=>{
                if (port) {
                    forceDisconnected = true;
                    port.disconnect();
                }
            };
            window.addEventListener('beforeunload', onUnload);
            window.addEventListener('unload', onUnload);
            return onUnload;
        });
        /**
     * Method subscribes to notifier module events.
     *
     * @param events - list of events to which subscribe
     * @param callback - callback called when event fires
     * @param onUnloadCallback - callback used to remove listener on unload
     * @returns {Promise<function(): Promise<void>>}
     */ _define_property(this, "createEventListener", async (events, callback, onUnloadCallback)=>{
            const eventListener = (...args)=>{
                callback(...args);
            };
            let { listenerId } = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.CreateEventListener, {
                events
            });
            const onUpdateListeners = async ()=>{
                const response = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.CreateEventListener, {
                    events
                });
                listenerId = response.listenerId;
            };
            webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.addListener((message)=>{
                if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.NotifyListeners) {
                    const [type, ...data] = message.data;
                    eventListener({
                        type,
                        data
                    });
                }
                if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.UpdateListeners) {
                    onUpdateListeners();
                }
            });
            const onUnload = async ()=>{
                if (listenerId) {
                    const type = _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.RemoveListener;
                    this.sendMessage(type, {
                        listenerId
                    });
                    listenerId = null;
                    if (typeof onUnloadCallback === 'function') {
                        onUnloadCallback();
                    }
                }
            };
            window.addEventListener('beforeunload', onUnload);
            window.addEventListener('unload', onUnload);
            return onUnload;
        });
        _define_property(this, "openExtensionStore", async ()=>{
            return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenExtensionStore);
        });
        _define_property(this, "openComparePage", async ()=>{
            return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType */ .Go.OpenComparePage);
        });
        this.resetUserRulesForPage = this.resetUserRulesForPage.bind(this);
        this.updateFilters = this.updateFilters.bind(this);
        this.removeAllowlistDomain = this.removeAllowlistDomain.bind(this);
        this.addAllowlistDomain = this.addAllowlistDomain.bind(this);
    }
}
const messenger = new Messenger();



/***/ }),

/***/ 59723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(50781);
var create = __webpack_require__(67238);
var defineProperty = (__webpack_require__(62239).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 71085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(26578);
var isArray = __webpack_require__(44230);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 2503:
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 48687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(29541);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 44230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(31018);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 67238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(53953);
var definePropertiesModule = __webpack_require__(74867);
var enumBugKeys = __webpack_require__(76545);
var hiddenKeys = __webpack_require__(93399);
var html = __webpack_require__(48687);
var documentCreateElement = __webpack_require__(14261);
var sharedKey = __webpack_require__(98797);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 74867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(26578);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(58092);
var definePropertyModule = __webpack_require__(62239);
var anObject = __webpack_require__(53953);
var toIndexedObject = __webpack_require__(34323);
var objectKeys = __webpack_require__(31766);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 31766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(73066);
var enumBugKeys = __webpack_require__(76545);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 95846:
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 27349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(60552);
var $includes = (__webpack_require__(15879).includes);
var fails = __webpack_require__(125);
var addToUnscopables = __webpack_require__(59723);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 19096:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(60552);
var toObject = __webpack_require__(90111);
var lengthOfArrayLike = __webpack_require__(79036);
var setArrayLength = __webpack_require__(71085);
var doesNotExceedSafeInteger = __webpack_require__(2503);
var fails = __webpack_require__(125);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 65005:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__(53990);
var uncurryThis = __webpack_require__(31534);
var toString = __webpack_require__(59273);
var validateArgumentsLength = __webpack_require__(95846);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 31040:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__(53990);
var uncurryThis = __webpack_require__(31534);
var toString = __webpack_require__(59273);
var validateArgumentsLength = __webpack_require__(95846);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 18827:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(26578);
var uncurryThis = __webpack_require__(31534);
var defineBuiltInAccessor = __webpack_require__(88868);

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ 70327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6430);
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25208);
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95835);
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36759);
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42303);






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

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ 75517:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48576);
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97254);
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53745);
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94141);
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39285);






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

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ 5465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92380);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29767);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ 64931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11458);
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70772);
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65511);
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78939);
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93251);






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

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ 45651:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _Stack)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js
var _ListCache = __webpack_require__(75517);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache/* default */.A;
  this.size = 0;
}

/* harmony default export */ const _stackClear = (stackClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
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

/* harmony default export */ const _stackDelete = (stackDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
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

/* harmony default export */ const _stackGet = (stackGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
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

/* harmony default export */ const _stackHas = (stackHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(5465);
// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js
var _MapCache = __webpack_require__(64931);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

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
  if (data instanceof _ListCache/* default */.A) {
    var pairs = data.__data__;
    if (!_Map/* default */.A || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache/* default */.A(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const _stackSet = (stackSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache/* default */.A(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ const _Stack = (Stack);


/***/ }),

/***/ 33531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29767);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ 48470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29767);


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Uint8Array;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);


/***/ }),

/***/ 22705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _arrayLikeKeys)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
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

/* harmony default export */ const _baseTimes = (baseTimes);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js
var isArguments = __webpack_require__(23042);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__(54186);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js
var isTypedArray = __webpack_require__(77401);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,isArray/* default */.A)(value),
      isArg = !isArr && (0,isArguments/* default */.A)(value),
      isBuff = !isArr && !isArg && (0,isBuffer/* default */.A)(value),
      isType = !isArr && !isArg && !isBuff && (0,isTypedArray/* default */.A)(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex/* default */.A)(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _arrayLikeKeys = (arrayLikeKeys);


/***/ }),

/***/ 90018:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);


/***/ }),

/***/ 57406:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);


/***/ }),

/***/ 91210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraySome);


/***/ }),

/***/ 92811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35758);


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
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ 13228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseEach)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseFor.js + 1 modules
var _baseFor = __webpack_require__(20405);
// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js + 2 modules
var keys = __webpack_require__(9956);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseForOwn.js



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && (0,_baseFor/* default */.A)(object, iteratee, keys/* default */.A);
}

/* harmony default export */ const _baseForOwn = (baseForOwn);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(75920);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseEach.js


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!(0,isArrayLike/* default */.A)(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/* harmony default export */ const _createBaseEach = (createBaseEach);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseEach.js



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

/* harmony default export */ const _baseEach = (baseEach);


/***/ }),

/***/ 44516:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseFlatten)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayPush.js
var _arrayPush = __webpack_require__(57406);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(33531);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js
var isArguments = __webpack_require__(23042);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(22007);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_isFlattenable.js




/** Built-in value references. */
var spreadableSymbol = _Symbol/* default */.A ? _Symbol/* default */.A.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,isArray/* default */.A)(value) || (0,isArguments/* default */.A)(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ const _isFlattenable = (isFlattenable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFlatten.js



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        (0,_arrayPush/* default */.A)(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ const _baseFlatten = (baseFlatten);


/***/ }),

/***/ 20405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseFor)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const _createBaseFor = (createBaseFor);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ const _baseFor = (baseFor);


/***/ }),

/***/ 53572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57631);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74327);



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGet);


/***/ }),

/***/ 57638:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33531);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71149);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3672);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.toStringTag : undefined;

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
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ 72980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57638);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98832);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) == argsTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);


/***/ }),

/***/ 64125:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53360);
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98938);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87639);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99339);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ 55687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57638);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91152);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98832);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
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

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) &&
    (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value)];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);


/***/ }),

/***/ 23349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseIteratee)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__(45651);
// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js
var _MapCache = __webpack_require__(64931);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

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

/* harmony default export */ const _setCacheAdd = (setCacheAdd);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheHas.js
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

/* harmony default export */ const _setCacheHas = (setCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_SetCache.js




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

  this.__data__ = new _MapCache/* default */.A;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ const _SetCache = (SetCache);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arraySome.js
var _arraySome = __webpack_require__(91210);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_cacheHas.js
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

/* harmony default export */ const _cacheHas = (cacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

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
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

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
      if (!(0,_arraySome/* default */.A)(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
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

/* harmony default export */ const _equalArrays = (equalArrays);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(33531);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Uint8Array.js
var _Uint8Array = __webpack_require__(48470);
// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(35758);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapToArray.js
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

/* harmony default export */ const _mapToArray = (mapToArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToArray.js
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

/* harmony default export */ const _setToArray = (setToArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol/* default */.A ? _Symbol/* default */.A.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
          !equalFunc(new _Uint8Array/* default */.A(object), new _Uint8Array/* default */.A(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,eq/* default */.A)(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ const _equalByTag = (equalByTag);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayPush.js
var _arrayPush = __webpack_require__(57406);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(22007);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js



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
  return (0,isArray/* default */.A)(object) ? result : (0,_arrayPush/* default */.A)(result, symbolsFunc(object));
}

/* harmony default export */ const _baseGetAllKeys = (baseGetAllKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayFilter.js
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

/* harmony default export */ const _arrayFilter = (arrayFilter);

;// CONCATENATED MODULE: ./node_modules/lodash-es/stubArray.js
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

/* harmony default export */ const lodash_es_stubArray = (stubArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const _getSymbols = (getSymbols);

// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js + 2 modules
var keys = __webpack_require__(9956);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys/* default */.A, _getSymbols);
}

/* harmony default export */ const _getAllKeys = (getAllKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

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
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
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

/* harmony default export */ const _equalObjects = (equalObjects);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js
var _getNative = __webpack_require__(92380);
// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(29767);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative/* default */.A)(_root/* default */.A, 'DataView');

/* harmony default export */ const _DataView = (DataView);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(5465);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative/* default */.A)(_root/* default */.A, 'Promise');

/* harmony default export */ const _Promise = (Promise);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative/* default */.A)(_root/* default */.A, 'Set');

/* harmony default export */ const _Set = (Set);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative/* default */.A)(_root/* default */.A, 'WeakMap');

/* harmony default export */ const _WeakMap = (WeakMap);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js
var _baseGetTag = __webpack_require__(57638);
// EXTERNAL MODULE: ./node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__(99339);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource/* default */.A)(_DataView),
    mapCtorString = (0,_toSource/* default */.A)(_Map/* default */.A),
    promiseCtorString = (0,_toSource/* default */.A)(_Promise),
    setCtorString = (0,_toSource/* default */.A)(_Set),
    weakMapCtorString = (0,_toSource/* default */.A)(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag/* default */.A;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map/* default */.A && getTag(new _Map/* default */.A) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag/* default */.A)(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource/* default */.A)(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const _getTag = (getTag);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__(54186);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js
var isTypedArray = __webpack_require__(77401);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

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
  var objIsArr = (0,isArray/* default */.A)(object),
      othIsArr = (0,isArray/* default */.A)(other),
      objTag = objIsArr ? arrayTag : _getTag(object),
      othTag = othIsArr ? arrayTag : _getTag(other);

  objTag = objTag == argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == argsTag ? _baseIsEqualDeep_objectTag : othTag;

  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && (0,isBuffer/* default */.A)(object)) {
    if (!(0,isBuffer/* default */.A)(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack/* default */.A);
    return (objIsArr || (0,isTypedArray/* default */.A)(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack/* default */.A);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack/* default */.A);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ const _baseIsEqualDeep = (baseIsEqualDeep);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(98832);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqual.js



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
  if (value == null || other == null || (!(0,isObjectLike/* default */.A)(value) && !(0,isObjectLike/* default */.A)(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ const _baseIsEqual = (baseIsEqual);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsMatch.js



/** Used to compose bitmasks for value comparisons. */
var _baseIsMatch_COMPARE_PARTIAL_FLAG = 1,
    _baseIsMatch_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack/* default */.A;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, _baseIsMatch_COMPARE_PARTIAL_FLAG | _baseIsMatch_COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ const _baseIsMatch = (baseIsMatch);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(87639);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_isStrictComparable.js


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !(0,isObject/* default */.A)(value);
}

/* harmony default export */ const _isStrictComparable = (isStrictComparable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getMatchData.js



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0,keys/* default */.A)(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

/* harmony default export */ const _getMatchData = (getMatchData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_matchesStrictComparable.js
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/* harmony default export */ const _matchesStrictComparable = (matchesStrictComparable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatches.js




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

/* harmony default export */ const _baseMatches = (baseMatches);

// EXTERNAL MODULE: ./node_modules/lodash-es/get.js
var get = __webpack_require__(63306);
// EXTERNAL MODULE: ./node_modules/lodash-es/hasIn.js + 2 modules
var hasIn = __webpack_require__(60784);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isKey.js
var _isKey = __webpack_require__(31868);
// EXTERNAL MODULE: ./node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__(74327);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatchesProperty.js








/** Used to compose bitmasks for value comparisons. */
var _baseMatchesProperty_COMPARE_PARTIAL_FLAG = 1,
    _baseMatchesProperty_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if ((0,_isKey/* default */.A)(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable((0,_toKey/* default */.A)(path), srcValue);
  }
  return function(object) {
    var objValue = (0,get/* default */.A)(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? (0,hasIn/* default */.A)(object, path)
      : _baseIsEqual(srcValue, objValue, _baseMatchesProperty_COMPARE_PARTIAL_FLAG | _baseMatchesProperty_COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ const _baseMatchesProperty = (baseMatchesProperty);

// EXTERNAL MODULE: ./node_modules/lodash-es/identity.js
var identity = __webpack_require__(69802);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseProperty.js
var _baseProperty = __webpack_require__(15999);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGet.js
var _baseGet = __webpack_require__(53572);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_basePropertyDeep.js


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return (0,_baseGet/* default */.A)(object, path);
  };
}

/* harmony default export */ const _basePropertyDeep = (basePropertyDeep);

;// CONCATENATED MODULE: ./node_modules/lodash-es/property.js





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return (0,_isKey/* default */.A)(path) ? (0,_baseProperty/* default */.A)((0,_toKey/* default */.A)(path)) : _basePropertyDeep(path);
}

/* harmony default export */ const lodash_es_property = (property);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIteratee.js






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity/* default */.A;
  }
  if (typeof value == 'object') {
    return (0,isArray/* default */.A)(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return lodash_es_property(value);
}

/* harmony default export */ const _baseIteratee = (baseIteratee);


/***/ }),

/***/ 15999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseProperty);


/***/ }),

/***/ 5860:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69802);
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61389);
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65155);




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A), func + '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseRest);


/***/ }),

/***/ 57566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33531);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22007);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54632);





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);


/***/ }),

/***/ 97858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13086);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ 4919:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);


/***/ }),

/***/ 57631:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22007);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31868);
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50484);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10776);





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return value;
  }
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value, object) ? [value] : (0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castPath);


/***/ }),

/***/ 88731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29767);


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A['__core-js_shared__'];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ 58589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92380);


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ 42322:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ 46541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64208);


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
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ 92380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64125);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11126);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ 71149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33531);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.toStringTag : undefined;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ 11126:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ 6430:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47024);


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ 25208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ 95835:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47024);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ 36759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47024);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ 42303:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47024);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

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
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ 35395:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ 79842:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35758);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75920);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35395);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87639);





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,_eq_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(object[index], value);
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIterateeCall);


/***/ }),

/***/ 31868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22007);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54632);



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKey);


/***/ }),

/***/ 64208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ 98938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88731);


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ 93393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);


/***/ }),

/***/ 48576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ 97254:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92811);


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

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
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data, key);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ 53745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92811);


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
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ 94141:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92811);


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
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ 39285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92811);


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
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ 11458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70327);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75517);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5465);




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
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ 70772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46541);


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
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ 65511:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46541);


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
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ 78939:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46541);


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
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ 93251:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46541);


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
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ 83401:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42562);


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);


/***/ }),

/***/ 47024:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92380);


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ 60111:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42322);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);


/***/ }),

/***/ 3672:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ 92893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);


/***/ }),

/***/ 61389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _overRest)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const _apply = (apply);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ const _overRest = (overRest);


/***/ }),

/***/ 29767:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42322);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ 65155:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _setToString)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const lodash_es_constant = (constant);

// EXTERNAL MODULE: ./node_modules/lodash-es/_defineProperty.js
var _defineProperty = __webpack_require__(58589);
// EXTERNAL MODULE: ./node_modules/lodash-es/identity.js
var identity = __webpack_require__(69802);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty/* default */.A ? identity/* default */.A : function(func, string) {
  return (0,_defineProperty/* default */.A)(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ const _baseSetToString = (baseSetToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const _shortOut = (shortOut);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ const _setToString = (setToString);


/***/ }),

/***/ 50484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83401);


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0,_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);


/***/ }),

/***/ 74327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54632);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);


/***/ }),

/***/ 99339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ 13086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ 96291:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87639);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93386);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34028);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ 35758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ 63306:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53572);


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);


/***/ }),

/***/ 60784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_hasIn)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseHasIn.js
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ const _baseHasIn = (baseHasIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_castPath.js
var _castPath = __webpack_require__(57631);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js
var isArguments = __webpack_require__(23042);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/lodash-es/isLength.js
var isLength = __webpack_require__(91152);
// EXTERNAL MODULE: ./node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__(74327);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_hasPath.js







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0,_castPath/* default */.A)(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = (0,_toKey/* default */.A)(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0,isLength/* default */.A)(length) && (0,_isIndex/* default */.A)(key, length) &&
    ((0,isArray/* default */.A)(object) || (0,isArguments/* default */.A)(object));
}

/* harmony default export */ const _hasPath = (hasPath);

;// CONCATENATED MODULE: ./node_modules/lodash-es/hasIn.js



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

/* harmony default export */ const lodash_es_hasIn = (hasIn);


/***/ }),

/***/ 69802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identity);


/***/ }),

/***/ 23042:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72980);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98832);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

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
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A : function(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ 22007:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ 75920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53360);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91152);



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
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);


/***/ }),

/***/ 54186:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29767);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89257);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

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
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);


/***/ }),

/***/ 53360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57638);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87639);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

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
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ 91152:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);


/***/ }),

/***/ 87639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ 98832:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ 54632:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57638);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98832);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ 77401:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55687);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4919);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60111);




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isTypedArray;

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
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);


/***/ }),

/***/ 9956:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_keys)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js + 1 modules
var _arrayLikeKeys = __webpack_require__(22705);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__(93393);
// EXTERNAL MODULE: ./node_modules/lodash-es/_overArg.js
var _overArg = __webpack_require__(92893);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg/* default */.A)(Object.keys, Object);

/* harmony default export */ const _nativeKeys = (nativeKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype/* default */.A)(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _baseKeys = (baseKeys);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(75920);
;// CONCATENATED MODULE: ./node_modules/lodash-es/keys.js




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
  return (0,isArrayLike/* default */.A)(object) ? (0,_arrayLikeKeys/* default */.A)(object) : _baseKeys(object);
}

/* harmony default export */ const lodash_es_keys = (keys);


/***/ }),

/***/ 42562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64931);


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ 93386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29767);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ }),

/***/ 58477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_sortBy)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseFlatten.js + 1 modules
var _baseFlatten = __webpack_require__(44516);
// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__(90018);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGet.js
var _baseGet = __webpack_require__(53572);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIteratee.js + 29 modules
var _baseIteratee = __webpack_require__(23349);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseEach.js + 2 modules
var _baseEach = __webpack_require__(13228);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(75920);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMap.js



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = (0,isArrayLike/* default */.A)(collection) ? Array(collection.length) : [];

  (0,_baseEach/* default */.A)(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ const _baseMap = (baseMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSortBy.js
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/* harmony default export */ const _baseSortBy = (baseSortBy);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__(4919);
// EXTERNAL MODULE: ./node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(54632);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_compareAscending.js


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = (0,isSymbol/* default */.A)(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = (0,isSymbol/* default */.A)(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/* harmony default export */ const _compareAscending = (compareAscending);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_compareMultiple.js


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/* harmony default export */ const _compareMultiple = (compareMultiple);

// EXTERNAL MODULE: ./node_modules/lodash-es/identity.js
var identity = __webpack_require__(69802);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(22007);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseOrderBy.js










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = (0,_arrayMap/* default */.A)(iteratees, function(iteratee) {
      if ((0,isArray/* default */.A)(iteratee)) {
        return function(value) {
          return (0,_baseGet/* default */.A)(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity/* default */.A];
  }

  var index = -1;
  iteratees = (0,_arrayMap/* default */.A)(iteratees, (0,_baseUnary/* default */.A)(_baseIteratee/* default */.A));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = (0,_arrayMap/* default */.A)(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

/* harmony default export */ const _baseOrderBy = (baseOrderBy);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseRest.js
var _baseRest = __webpack_require__(5860);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIterateeCall.js
var _isIterateeCall = __webpack_require__(79842);
;// CONCATENATED MODULE: ./node_modules/lodash-es/sortBy.js





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = (0,_baseRest/* default */.A)(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && (0,_isIterateeCall/* default */.A)(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && (0,_isIterateeCall/* default */.A)(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return _baseOrderBy(collection, (0,_baseFlatten/* default */.A)(iteratees, 1), []);
});

/* harmony default export */ const lodash_es_sortBy = (sortBy);


/***/ }),

/***/ 89257:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);


/***/ }),

/***/ 91628:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96291);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87639);



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ }),

/***/ 34028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97858);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87639);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54632);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ }),

/***/ 10776:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57566);


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);


/***/ }),

/***/ 47127:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ak: () => (/* binding */ nanoid)
/* harmony export */ });
/* unused harmony exports customAlphabet, customRandom, random */

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ }),

/***/ 14476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ z)
/* harmony export */ });
/* unused harmony exports BRAND, DIRTY, EMPTY_PATH, INVALID, NEVER, OK, ParseStatus, Schema, ZodAny, ZodArray, ZodBigInt, ZodBoolean, ZodBranded, ZodCatch, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodEffects, ZodEnum, ZodError, ZodFirstPartyTypeKind, ZodFunction, ZodIntersection, ZodIssueCode, ZodLazy, ZodLiteral, ZodMap, ZodNaN, ZodNativeEnum, ZodNever, ZodNull, ZodNullable, ZodNumber, ZodObject, ZodOptional, ZodParsedType, ZodPipeline, ZodPromise, ZodReadonly, ZodRecord, ZodSchema, ZodSet, ZodString, ZodSymbol, ZodTransformer, ZodTuple, ZodType, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, addIssueToContext, any, array, bigint, boolean, coerce, custom, date, datetimeRegex, defaultErrorMap, discriminatedUnion, effect, enum, function, getErrorMap, getParsedType, instanceof, intersection, isAborted, isAsync, isDirty, isValid, late, lazy, literal, makeIssue, map, nan, nativeEnum, never, null, nullable, number, object, objectUtil, oboolean, onumber, optional, ostring, pipeline, preprocess, promise, quotelessJson, record, set, setErrorMap, strictObject, string, symbol, transformer, tuple, undefined, union, unknown, util, void, z */
var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message,
        };
    }
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === errorMap ? undefined : errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this, this._def);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
        regex = `${regex}\\.\\d{${args.precision}}`;
    }
    else if (args.precision == null) {
        regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    date(message) {
        return this._addCheck({ kind: "date", message });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options,
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    /**
     * @deprecated Use z.string().min(1) instead.
     * @see {@link ZodString.min}
     */
    nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return util.objectValues(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else if (type instanceof ZodOptional) {
        return [undefined, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    }
    else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef,
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef,
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed) => {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                });
            }
            else {
                if (status.value === "aborted")
                    return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
                if (result.status === "aborted")
                    return INVALID;
                if (result.status === "dirty")
                    return DIRTY(result.value);
                if (status.value === "dirty")
                    return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
            if (isValid(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return isAsync(result)
            ? result.then((data) => freeze(data))
            : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
function custom(check, params = {}, 
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
                const p = typeof params === "function"
                    ? params(data)
                    : typeof params === "string"
                        ? { message: params }
                        : params;
                const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                const p2 = typeof p === "string" ? { message: p } : p;
                ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
        });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util; },
    get objectUtil () { return objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [36,869,840,92], () => (__webpack_exec__(90496)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);