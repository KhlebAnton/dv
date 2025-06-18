/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
          /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
          windowEl: window,
          documentEl: document,
          htmlEl: document.documentElement,
          bodyEl: document.body,
          bodyLockStatus: true,
          sliderReviews: document.querySelector('.template-border__reviews'),
          largeSliders: document.querySelectorAll('.large-slider'),
          selects: document.querySelectorAll('.select'),
          videos: document.querySelectorAll('.video'),
          programmSlider: document.querySelector('.js-slider-programms')
        });

        /***/
}),

/***/ "./src/js/functions/anim-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/functions/anim-scroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animItemsScroll: () => (/* binding */ animItemsScroll)
          /* harmony export */
});
        const animItemsScroll = () => {
          const animItems = Array.from(document.querySelectorAll('.anim-item'));
          const callback = (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('anim-item--show');
                if (entry.target.classList.contains('anim-item--norepeat')) {
                  observer.unobserve(entry.target);
                }
              } else {
                entry.target.classList.remove('anim-item--show');
              }
            });
          };
          const options = {
            threshold: 0
          };
          const observer = new IntersectionObserver(callback, options);
          animItems?.forEach(item => observer.observe(item));
        };

        /***/
}),

/***/ "./src/js/modules/page-index.js":
/*!**************************************!*\
  !*** ./src/js/modules/page-index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "node_modules/swiper/swiper.esm.html");
/* harmony import */ var _functions_anim_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/anim-scroll */ "src/js/functions/anim-scroll.html");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_vars */ "src/js/_vars.html");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! choices.js */ "node_modules/choices.js/public/assets/scripts/choices.html");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_3__);

        swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);



        window.addEventListener('DOMContentLoaded', () => {
          class RegistryPageClass {
            constructor() { }
            initSelects() {
              if (_vars__WEBPACK_IMPORTED_MODULE_2__["default"].selects) {
                _vars__WEBPACK_IMPORTED_MODULE_2__["default"].selects?.forEach(select => {
                  new (choices_js__WEBPACK_IMPORTED_MODULE_3___default())(select, {
                    allowHTML: false,
                    searchEnabled: false
                  });
                });
              }
            }
            initSliders() {
              if (_vars__WEBPACK_IMPORTED_MODULE_2__["default"].sliderReviews) {
                new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](_vars__WEBPACK_IMPORTED_MODULE_2__["default"].sliderReviews, {
                  slidesPerView: 1,
                  spaceBetween: 50,
                  grabCursor: true,
                  autoplay: {
                    delay: 5000
                  },
                  loop: true,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                  }
                });
              }
              if (_vars__WEBPACK_IMPORTED_MODULE_2__["default"].largeSliders) {
                _vars__WEBPACK_IMPORTED_MODULE_2__["default"].largeSliders?.forEach(slider => {
                  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
                    slidesPerView: 'auto',
                    spaceBetween: 29,
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                    }
                  });
                });
              }
            }
            initWatcher() {
              (0, _functions_anim_scroll__WEBPACK_IMPORTED_MODULE_1__.animItemsScroll)();
            }
            initModal() {
              class Modal {
                constructor(selector, options) {
                  let defaultOptions = {
                    isOpen: () => { },
                    isClose: () => { },
                    speed: 300,
                    classNames: {
                      modal: 'modal',
                      window: 'modal__window',
                      show: 'show',
                      active: 'active'
                    },
                    dataAttributes: {
                      overlay: 'data-modal-overlay',
                      modal: 'data-modal-btn',
                      window: 'data-modal-window',
                      btnClose: 'data-modal-close',
                      fixBlock: 'data-modal-fix'
                    }
                  };
                  this.options = Object.assign(defaultOptions, options);
                  this.modalBtns = document?.querySelectorAll(selector);
                  this.modal = document?.querySelector(`[${this.options.dataAttributes.overlay}]`);
                  this.windows = this.modal?.querySelectorAll(`.${this.options.classNames.window}`);
                  this.html = document.documentElement;
                  this.body = document.body;
                  this.modalCloseBtns = this.modal?.querySelectorAll(`[${this.options.dataAttributes.btnClose}]`);
                  this.previusActiveBtn = null;
                  this.modalFocusableElements = null;
                  this.documentFocusableElements = null;
                  this.renderedModalContent = null;
                  this.focusElements = ['a[href]', 'input', 'select', 'textarea', 'button', 'iframe', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
                  this.events();
                }
                events() {
                  this.modalInit();
                  document.addEventListener('click', e => {
                    if (e.target.closest('[data-modal-btn]')) {
                      const {
                        currSpeed
                      } = this.getParamsModal();
                      if (new Date().getTime() - this.lastClick < currSpeed + 15) return;
                      this.lastClick = new Date().getTime();
                      if (!this.modal?.classList.contains(this.options.classNames.show)) {
                        this.openModal(e.target.closest('[data-modal-btn]'));
                      } else {
                        this.reOpenModal(e.target.closest('[data-modal-btn]'), currSpeed);
                      }
                    }
                  });
                  this.modal?.addEventListener('click', e => {
                    if (e.target == e.currentTarget) {
                      const {
                        currSpeed
                      } = this.getParamsModal();
                      if (new Date().getTime() - this.lastClick < currSpeed + 15) return;
                      this.lastClick = new Date().getTime();
                      this.closeModal();
                    }
                  });
                  this.modalCloseBtns?.forEach(modalCloseBtn => {
                    modalCloseBtn?.addEventListener('click', () => {
                      const {
                        currSpeed
                      } = this.getParamsModal();
                      if (new Date().getTime() - this.lastClick < currSpeed + 15) return;
                      this.lastClick = new Date().getTime();
                      this.closeModal();
                    });
                  });
                  document.addEventListener('keydown', e => {
                    if (e.code === 'Escape') {
                      const {
                        currSpeed
                      } = this.getParamsModal();
                      if (new Date().getTime() - this.lastClick < currSpeed + 15) return;
                      this.lastClick = new Date().getTime();
                      this.closeModal();
                    }
                    if (this.modal?.classList.contains(this.options.classNames.show)) {
                      this.focusMoving(e);
                    }
                  });
                }
                modalInit() {
                  this.windows?.forEach(window => {
                    window.setAttribute('role', 'dialog');
                    window.setAttribute('aria-modal', 'true');
                    window.setAttribute('aria-hidden', 'true');
                  });
                }
                openModal(modalData) {
                  const currSpeed = modalData.dataset.modalSpeed || this.options.speed;
                  this.modal.style.setProperty('--modal-time', `${currSpeed / 1000}s`);
                  this.modal?.classList.add(this.options.classNames.show);
                  const currWindow = this.modal?.querySelector(`[${this.options.dataAttributes.window}="${modalData.dataset.modalBtn || modalData.dataset.modalWindow}"]`);
                  const currActiveWindow = this.modal?.querySelector(`.${this.options.classNames.window}.${this.options.classNames.active}`);
                  if (currActiveWindow) {
                    this.reOpenModal(modalData, currSpeed);
                  } else {
                    currWindow.classList.add(this.options.classNames.show);
                    setTimeout(() => {
                      currWindow.classList.add(this.options.classNames.active);
                    });
                    this.disableScroll();
                    this.tabindexOff();
                    this.focusToModal(currWindow, currSpeed);
                    this.openModalA11y(currWindow);
                    this.renderModalContent(modalData, currWindow);
                    this.options.isOpen(this);
                  }
                }
                closeModal(modalBtn) {
                  const {
                    currSpeed
                  } = this.getParamsModal();
                  if (!modalBtn) {
                    this.modal?.classList.remove(this.options.classNames.show);
                  }
                  const currWindow = this.modal?.querySelector(`.${this.options.classNames.window}.${this.options.classNames.active}`);
                  currWindow?.classList.remove(this.options.classNames.active);
                  setTimeout(() => {
                    currWindow?.classList.remove(this.options.classNames.show);
                    this.enableScroll();
                    this.deleteRenderModalContent(currWindow);
                  }, currSpeed);
                  this.focusToBtn();
                  this.closeModalA11y(currWindow);
                  this.options.isClose(this);
                }
                reOpenModal(modalBtn, currSpeed) {
                  this.closeModal(modalBtn);
                  this.tabindexOff();
                  setTimeout(() => {
                    this.openModal(modalBtn);
                  }, currSpeed);
                }
                openModalA11y(currWindow) {
                  currWindow?.setAttribute('aria-hidden', 'false');
                }
                closeModalA11y(currWindow) {
                  currWindow?.setAttribute('aria-hidden', 'true');
                }
                disableScroll() {
                  if (!this.body.classList.contains('lock')) {
                    const paddingOffset = `${window.innerWidth - this.body.offsetWidth}px`;
                    this.body.style.paddingRight = paddingOffset;
                    document.documentElement.classList.add('lock');
                  }
                }
                enableScroll() {
                  this.body.style.paddingRight = '0px';
                  document.documentElement.classList.remove('lock');
                }
                getParamsModal() {
                  const currSpeed = parseFloat(getComputedStyle(this.modal).getPropertyValue('--modal-time')) * 1000;
                  return {
                    currSpeed
                  };
                }
                focusToModal(currWindow, currSpeed) {
                  this.modalFocusableElements = Array.from(currWindow.querySelectorAll(this.focusElements));
                  this.documentFocusableElements = Array.from(document.querySelectorAll(this.focusElements));
                  this.previusActiveBtn = document.activeElement;
                  this.tabindexOff();
                  setTimeout(() => {
                    this.modalFocusableElements[0]?.focus();
                  }, currSpeed);
                }
                focusMoving(e) {
                  const focusIndex = this.modalFocusableElements.indexOf(document.activeElement);
                  const keysToExclude = ['Escape', 'Tab'];
                  if (!e.shiftKey && e.key !== 'Enter' && e.key !== ' ' && keysToExclude.includes(e.key) && focusIndex === this.modalFocusableElements.length - 1 && this.modalFocusableElements.length > 0) {
                    this.modalFocusableElements[0].focus();
                    e.preventDefault();
                  }
                  if (e.shiftKey && e.key === 'Tab' && focusIndex === 0) {
                    this.modalFocusableElements[this.modalFocusableElements.length - 1].focus();
                    e.preventDefault();
                  }
                }
                focusToBtn() {
                  this.previusActiveBtn?.focus();
                  this.tabindexOn();
                }
                tabindexOn() {
                  this.documentFocusableElements?.map(focusElem => focusElem?.removeAttribute('tabindex'));
                }
                tabindexOff() {
                  this.documentFocusableElements?.map(focusElem => focusElem?.setAttribute('tabindex', '-1'));
                  this.modalFocusableElements?.map(focusElem => focusElem?.removeAttribute('tabindex'));
                }
                renderModalContent(modalData, currWindow) {
                  const modalContent = modalData.dataset?.modalContent;
                  if (modalContent) {
                    const modalContentWpapper = document.createElement('div');
                    modalContentWpapper.className = `${this.options.classNames.modal}__content`;
                    currWindow.append(modalContentWpapper);
                    modalContentWpapper.insertAdjacentHTML('afterbegin', modalContent);
                  }
                }
                deleteRenderModalContent(currWindow) {
                  const modalContentWpappers = currWindow.querySelectorAll(`.${this.options.classNames.modal}__content`);
                  modalContentWpappers.forEach(modalContentWpapper => {
                    modalContentWpapper.remove();
                  });
                }
              }
              new Modal('data-modal-btn');
            }
            init() {
              this.initSelects();
              this.initSliders();
              this.initWatcher();
              this.initModal();
              console.log('RegistryJsScript has been initialized');
              return this;
            }
          }
          new RegistryPageClass().init();
        });

        /***/
})

    /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
// /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if (chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
        /******/
}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
            /******/
} else {
/******/ 						fulfilled = false;
/******/ 						if (priority < notFulfilled) notFulfilled = priority;
            /******/
}
          /******/
}
/******/ 				if (fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
          /******/
}
        /******/
}
/******/ 			return result;
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"page-index": 0
      /******/
};
/******/
/******/ 		// no chunk on demand loading
/******/
/******/ 		// no prefetching
/******/
/******/ 		// no preloaded
/******/
/******/ 		// no HMR
/******/
/******/ 		// no HMR manifest
/******/
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for (moduleId in moreModules) {
/******/ 					if (__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
}
          /******/
}
/******/ 				if (runtime) var result = runtime(__webpack_require__);
        /******/
}
/******/ 			if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for (; i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
          /******/
}
/******/ 				installedChunks[chunkId] = 0;
        /******/
}
/******/ 			return __webpack_require__.O(result);
      /******/
}
/******/
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("src/js/modules/page-index.html")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})()
  ;
//# sourceMappingURL=page-index.js.map