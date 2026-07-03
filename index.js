var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/sweetalert2/dist/sweetalert2.all.js
var require_sweetalert2_all = __commonJS((exports, module) => {
  /*!
  * sweetalert2 v11.26.25
  * Released under the MIT License.
  */
  (function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Sweetalert2 = factory());
  })(exports, function() {
    function _assertClassBrand(e, t, n) {
      if (typeof e == "function" ? e === t : e.has(t))
        return arguments.length < 3 ? t : n;
      throw new TypeError("Private element is not present on this object");
    }
    function _checkPrivateRedeclaration(e, t) {
      if (t.has(e))
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function _classPrivateFieldGet2(s, a) {
      return s.get(_assertClassBrand(s, a));
    }
    function _classPrivateFieldInitSpec(e, t, a) {
      _checkPrivateRedeclaration(e, t), t.set(e, a);
    }
    function _classPrivateFieldSet2(s, a, r) {
      return s.set(_assertClassBrand(s, a), r), r;
    }
    const RESTORE_FOCUS_TIMEOUT = 100;
    const globalState = {};
    const focusPreviousActiveElement = () => {
      if (globalState.previousActiveElement instanceof HTMLElement) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }
    };
    const restoreActiveElement = (returnFocus) => {
      return new Promise((resolve) => {
        if (!returnFocus) {
          return resolve();
        }
        const x = window.scrollX;
        const y = window.scrollY;
        globalState.restoreFocusTimeout = setTimeout(() => {
          focusPreviousActiveElement();
          resolve();
        }, RESTORE_FOCUS_TIMEOUT);
        window.scrollTo(x, y);
      });
    };
    const swalPrefix = "swal2-";
    const classNames = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "draggable", "dragging"];
    const swalClasses = classNames.reduce((acc, className) => {
      acc[className] = swalPrefix + className;
      return acc;
    }, {});
    const icons = ["success", "warning", "info", "question", "error"];
    const iconTypes = icons.reduce((acc, icon) => {
      acc[icon] = swalPrefix + icon;
      return acc;
    }, {});
    const consolePrefix = "SweetAlert2:";
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const warn = (message) => {
      console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
    };
    const error = (message) => {
      console.error(`${consolePrefix} ${message}`);
    };
    const previousWarnOnceMessages = [];
    const warnOnce = (message) => {
      if (!previousWarnOnceMessages.includes(message)) {
        previousWarnOnceMessages.push(message);
        warn(message);
      }
    };
    const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
      warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ""}`);
    };
    const callIfFunction = (arg) => typeof arg === "function" ? arg() : arg;
    const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === "function";
    const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    const isPromise = (arg) => arg && Promise.resolve(arg) === arg;
    const isFirefox = () => navigator.userAgent.includes("Firefox");
    const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
    const elementBySelector = (selectorString) => {
      const container = getContainer();
      return container ? container.querySelector(selectorString) : null;
    };
    const elementByClass = (className) => {
      return elementBySelector(`.${className}`);
    };
    const getPopup = () => elementByClass(swalClasses.popup);
    const getIcon = () => elementByClass(swalClasses.icon);
    const getIconContent = () => elementByClass(swalClasses["icon-content"]);
    const getTitle = () => elementByClass(swalClasses.title);
    const getHtmlContainer = () => elementByClass(swalClasses["html-container"]);
    const getImage = () => elementByClass(swalClasses.image);
    const getProgressSteps = () => elementByClass(swalClasses["progress-steps"]);
    const getValidationMessage = () => elementByClass(swalClasses["validation-message"]);
    const getConfirmButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
    const getCancelButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
    const getDenyButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
    const getInputLabel = () => elementByClass(swalClasses["input-label"]);
    const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
    const getActions = () => elementByClass(swalClasses.actions);
    const getFooter = () => elementByClass(swalClasses.footer);
    const getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]);
    const getCloseButton = () => elementByClass(swalClasses.close);
    const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
    const getFocusableElements = () => {
      const popup = getPopup();
      if (!popup) {
        return [];
      }
      const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
      const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex).sort((a, b) => {
        const tabindexA = parseInt(a.getAttribute("tabindex") || "0");
        const tabindexB = parseInt(b.getAttribute("tabindex") || "0");
        if (tabindexA > tabindexB) {
          return 1;
        } else if (tabindexA < tabindexB) {
          return -1;
        }
        return 0;
      });
      const otherFocusableElements = popup.querySelectorAll(focusable);
      const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter((el) => el.getAttribute("tabindex") !== "-1");
      return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter((el) => isVisible$1(el));
    };
    const isModal = () => {
      return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
    };
    const isToast = () => {
      const popup = getPopup();
      if (!popup) {
        return false;
      }
      return hasClass(popup, swalClasses.toast);
    };
    const isLoading = () => {
      const popup = getPopup();
      if (!popup) {
        return false;
      }
      return popup.hasAttribute("data-loading");
    };
    const setInnerHtml = (elem, html) => {
      elem.textContent = "";
      if (html) {
        const parser = new DOMParser;
        const parsed = parser.parseFromString(html, `text/html`);
        const head = parsed.querySelector("head");
        if (head) {
          Array.from(head.childNodes).forEach((child) => {
            elem.appendChild(child);
          });
        }
        const body = parsed.querySelector("body");
        if (body) {
          Array.from(body.childNodes).forEach((child) => {
            if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
              elem.appendChild(child.cloneNode(true));
            } else {
              elem.appendChild(child);
            }
          });
        }
      }
    };
    const hasClass = (elem, className) => {
      if (!className) {
        return false;
      }
      return className.split(/\s+/).every((cls) => elem.classList.contains(cls));
    };
    const removeCustomClasses = (elem, params) => {
      Array.from(elem.classList).forEach((className) => {
        if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
          elem.classList.remove(className);
        }
      });
    };
    const applyCustomClass = (elem, params, className) => {
      removeCustomClasses(elem, params);
      if (!params.customClass) {
        return;
      }
      const customClass = params.customClass[className];
      if (!customClass) {
        return;
      }
      if (typeof customClass !== "string" && !customClass.forEach) {
        warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
        return;
      }
      addClass(elem, customClass);
    };
    const getInput$1 = (popup, inputClass) => {
      if (!inputClass) {
        return null;
      }
      switch (inputClass) {
        case "select":
        case "textarea":
        case "file":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
        case "checkbox":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
        case "radio":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
        case "range":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
        default:
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
      }
    };
    const focusInput = (input) => {
      input.focus();
      if (input.type !== "file") {
        const val = input.value;
        input.value = "";
        input.value = val;
      }
    };
    const toggleClass = (target, classList, condition) => {
      if (!target || !classList) {
        return;
      }
      const classes = typeof classList === "string" ? classList.split(/\s+/).filter(Boolean) : classList;
      const targets = Array.isArray(target) ? target : [target];
      targets.forEach((elem) => {
        classes.forEach((className) => {
          if (condition) {
            elem.classList.add(className);
          } else {
            elem.classList.remove(className);
          }
        });
      });
    };
    const addClass = (target, classList) => {
      toggleClass(target, classList, true);
    };
    const removeClass = (target, classList) => {
      toggleClass(target, classList, false);
    };
    const getDirectChildByClass = (elem, className) => Array.from(elem.children).find((child) => child instanceof HTMLElement && hasClass(child, className));
    const applyNumericalStyle = (elem, property, value) => {
      if (value === `${parseInt(`${value}`)}`) {
        value = parseInt(value);
      }
      if (value || value === 0) {
        elem.style.setProperty(property, typeof value === "number" ? `${value}px` : value);
      } else {
        elem.style.removeProperty(property);
      }
    };
    const show = (elem, display = "flex") => {
      if (!elem) {
        return;
      }
      elem.style.display = display;
    };
    const hide = (elem) => {
      if (!elem) {
        return;
      }
      elem.style.display = "none";
    };
    const showWhenInnerHtmlPresent = (elem, display = "block") => {
      if (!elem) {
        return;
      }
      new MutationObserver(() => {
        toggle(elem, elem.innerHTML, display);
      }).observe(elem, {
        childList: true,
        subtree: true
      });
    };
    const setStyle = (parent, selector, property, value) => {
      const el = parent.querySelector(selector);
      if (el) {
        el.style.setProperty(property, value);
      }
    };
    const toggle = (elem, condition, display = "flex") => {
      if (condition) {
        show(elem, display);
      } else {
        hide(elem);
      }
    };
    const isVisible$1 = (elem) => Boolean(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
    const isScrollable = (elem) => Boolean(elem.scrollHeight > elem.clientHeight);
    const selfOrParentIsScrollable = (element, stopElement) => {
      let parent = element;
      while (parent && parent !== stopElement) {
        if (isScrollable(parent)) {
          return true;
        }
        parent = parent.parentElement;
      }
      return false;
    };
    const hasCssAnimation = (elem) => {
      const style = window.getComputedStyle(elem);
      const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
      const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
      return animDuration > 0 || transDuration > 0;
    };
    const animateTimerProgressBar = (timer, reset = false) => {
      const timerProgressBar = getTimerProgressBar();
      if (!timerProgressBar) {
        return;
      }
      if (isVisible$1(timerProgressBar)) {
        if (reset) {
          timerProgressBar.style.transition = "none";
          timerProgressBar.style.width = "100%";
        }
        setTimeout(() => {
          timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
          timerProgressBar.style.width = "0%";
        }, 10);
      }
    };
    const stopTimerProgressBar = () => {
      const timerProgressBar = getTimerProgressBar();
      if (!timerProgressBar) {
        return;
      }
      const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
      timerProgressBar.style.removeProperty("transition");
      timerProgressBar.style.width = "100%";
      const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
      const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
      timerProgressBar.style.width = `${timerProgressBarPercent}%`;
    };
    const isNodeEnv = () => typeof window === "undefined" || typeof document === "undefined";
    const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
    const resetOldContainer = () => {
      const oldContainer = getContainer();
      if (!oldContainer) {
        return false;
      }
      oldContainer.remove();
      removeClass([document.documentElement, document.body], [
        swalClasses["no-backdrop"],
        swalClasses["toast-shown"],
        swalClasses["has-column"]
      ]);
      return true;
    };
    const resetValidationMessage$1 = () => {
      if (globalState.currentInstance) {
        globalState.currentInstance.resetValidationMessage();
      }
    };
    const addInputChangeListeners = () => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const input = getDirectChildByClass(popup, swalClasses.input);
      const file = getDirectChildByClass(popup, swalClasses.file);
      const range = popup.querySelector(`.${swalClasses.range} input`);
      const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
      const select = getDirectChildByClass(popup, swalClasses.select);
      const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
      const textarea = getDirectChildByClass(popup, swalClasses.textarea);
      if (input) {
        input.oninput = resetValidationMessage$1;
      }
      if (file) {
        file.onchange = resetValidationMessage$1;
      }
      if (select) {
        select.onchange = resetValidationMessage$1;
      }
      if (checkbox) {
        checkbox.onchange = resetValidationMessage$1;
      }
      if (textarea) {
        textarea.oninput = resetValidationMessage$1;
      }
      if (range && rangeOutput) {
        range.oninput = () => {
          resetValidationMessage$1();
          rangeOutput.value = range.value;
        };
        range.onchange = () => {
          resetValidationMessage$1();
          rangeOutput.value = range.value;
        };
      }
    };
    const getTarget = (target) => {
      if (typeof target === "string") {
        const element = document.querySelector(target);
        if (!element) {
          throw new Error(`Target element "${target}" not found`);
        }
        return element;
      }
      return target;
    };
    const setupAccessibility = (params) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      popup.setAttribute("role", params.toast ? "alert" : "dialog");
      popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
      if (!params.toast) {
        popup.setAttribute("aria-modal", "true");
      }
    };
    const setupRTL = (targetElement) => {
      if (window.getComputedStyle(targetElement).direction === "rtl") {
        addClass(getContainer(), swalClasses.rtl);
        globalState.isRTL = true;
      }
    };
    const init = (params) => {
      const oldContainerExisted = resetOldContainer();
      if (isNodeEnv()) {
        error("SweetAlert2 requires document to initialize");
        return;
      }
      const container = document.createElement("div");
      container.className = swalClasses.container;
      if (oldContainerExisted) {
        addClass(container, swalClasses["no-transition"]);
      }
      setInnerHtml(container, sweetHTML);
      container.dataset["swal2Theme"] = params.theme;
      const targetElement = getTarget(params.target || "body");
      targetElement.appendChild(container);
      if (params.topLayer) {
        container.setAttribute("popover", "");
        container.showPopover();
      }
      setupAccessibility(params);
      setupRTL(targetElement);
      addInputChangeListeners();
    };
    const parseHtmlToContainer = (param, target) => {
      if (param instanceof HTMLElement) {
        target.appendChild(param);
      } else if (typeof param === "object") {
        handleObject(param, target);
      } else if (param) {
        setInnerHtml(target, param);
      }
    };
    const handleObject = (param, target) => {
      if ("jquery" in param) {
        handleJqueryElem(target, param);
      } else {
        setInnerHtml(target, param.toString());
      }
    };
    const handleJqueryElem = (target, elem) => {
      target.textContent = "";
      if (0 in elem) {
        for (let i = 0;i in elem; i++) {
          target.appendChild(elem[i].cloneNode(true));
        }
      } else {
        target.appendChild(elem.cloneNode(true));
      }
    };
    const renderActions = (instance, params) => {
      const actions = getActions();
      const loader = getLoader();
      if (!actions || !loader) {
        return;
      }
      if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
        hide(actions);
      } else {
        show(actions);
      }
      applyCustomClass(actions, params, "actions");
      renderButtons(actions, loader, params);
      setInnerHtml(loader, params.loaderHtml || "");
      applyCustomClass(loader, params, "loader");
    };
    function renderButtons(actions, loader, params) {
      const confirmButton = getConfirmButton();
      const denyButton = getDenyButton();
      const cancelButton = getCancelButton();
      if (!confirmButton || !denyButton || !cancelButton) {
        return;
      }
      renderButton(confirmButton, "confirm", params);
      renderButton(denyButton, "deny", params);
      renderButton(cancelButton, "cancel", params);
      handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
      if (params.reverseButtons) {
        if (params.toast) {
          actions.insertBefore(cancelButton, confirmButton);
          actions.insertBefore(denyButton, confirmButton);
        } else {
          actions.insertBefore(cancelButton, loader);
          actions.insertBefore(denyButton, loader);
          actions.insertBefore(confirmButton, loader);
        }
      }
    }
    function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
      if (!params.buttonsStyling) {
        removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
        return;
      }
      addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      const buttons = [[confirmButton, "confirm", params.confirmButtonColor], [denyButton, "deny", params.denyButtonColor], [cancelButton, "cancel", params.cancelButtonColor]];
      buttons.forEach(([button, type, color]) => {
        if (color) {
          button.style.setProperty(`--swal2-${type}-button-background-color`, color);
        }
        applyOutlineColor(button);
      });
    }
    function applyOutlineColor(button) {
      const buttonStyle = window.getComputedStyle(button);
      if (buttonStyle.getPropertyValue("--swal2-action-button-focus-box-shadow")) {
        return;
      }
      const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, "rgba($1, $2, $3, 0.5)");
      button.style.setProperty("--swal2-action-button-focus-box-shadow", buttonStyle.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${outlineColor}`));
    }
    function renderButton(button, buttonType, params) {
      const buttonName = capitalizeFirstLetter(buttonType);
      toggle(button, params[`show${buttonName}Button`], "inline-block");
      setInnerHtml(button, params[`${buttonType}ButtonText`] || "");
      button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`] || "");
      button.className = swalClasses[buttonType];
      applyCustomClass(button, params, `${buttonType}Button`);
    }
    const renderCloseButton = (instance, params) => {
      const closeButton = getCloseButton();
      if (!closeButton) {
        return;
      }
      setInnerHtml(closeButton, params.closeButtonHtml || "");
      applyCustomClass(closeButton, params, "closeButton");
      toggle(closeButton, params.showCloseButton);
      closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
    };
    const renderContainer = (instance, params) => {
      const container = getContainer();
      if (!container) {
        return;
      }
      handleBackdropParam(container, params.backdrop);
      handlePositionParam(container, params.position);
      handleGrowParam(container, params.grow);
      applyCustomClass(container, params, "container");
    };
    function handleBackdropParam(container, backdrop) {
      if (typeof backdrop === "string") {
        container.style.background = backdrop;
      } else if (!backdrop) {
        addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
      }
    }
    function handlePositionParam(container, position) {
      if (!position) {
        return;
      }
      if (position in swalClasses) {
        addClass(container, swalClasses[position]);
      } else {
        warn('The "position" parameter is not valid, defaulting to "center"');
        addClass(container, swalClasses.center);
      }
    }
    function handleGrowParam(container, grow) {
      if (!grow) {
        return;
      }
      addClass(container, swalClasses[`grow-${grow}`]);
    }
    var privateProps = {
      innerParams: new WeakMap,
      domCache: new WeakMap,
      focusedElement: new WeakMap
    };
    const inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
    const renderInput = (instance, params) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const innerParams = privateProps.innerParams.get(instance);
      const rerender = !innerParams || params.input !== innerParams.input;
      inputClasses.forEach((inputClass) => {
        const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
        if (!inputContainer) {
          return;
        }
        setAttributes(inputClass, params.inputAttributes);
        inputContainer.className = swalClasses[inputClass];
        if (rerender) {
          hide(inputContainer);
        }
      });
      if (params.input) {
        if (rerender) {
          showInput(params);
        }
        setCustomClass(params);
      }
    };
    const showInput = (params) => {
      if (!params.input) {
        return;
      }
      if (!renderInputType[params.input]) {
        error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(" | ")}, got "${params.input}"`);
        return;
      }
      const inputContainer = getInputContainer(params.input);
      if (!inputContainer) {
        return;
      }
      const input = renderInputType[params.input](inputContainer, params);
      show(inputContainer);
      if (params.inputAutoFocus) {
        setTimeout(() => {
          focusInput(input);
        });
      }
    };
    const removeAttributes = (input) => {
      for (const {
        name
      } of Array.from(input.attributes)) {
        if (!["id", "type", "value", "style"].includes(name)) {
          input.removeAttribute(name);
        }
      }
    };
    const setAttributes = (inputClass, inputAttributes) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const input = getInput$1(popup, inputClass);
      if (!input) {
        return;
      }
      removeAttributes(input);
      for (const attr in inputAttributes) {
        input.setAttribute(attr, inputAttributes[attr]);
      }
    };
    const setCustomClass = (params) => {
      if (!params.input) {
        return;
      }
      const inputContainer = getInputContainer(params.input);
      if (inputContainer) {
        applyCustomClass(inputContainer, params, "input");
      }
    };
    const setInputPlaceholder = (input, params) => {
      if (!input.placeholder && params.inputPlaceholder) {
        input.placeholder = params.inputPlaceholder;
      }
    };
    const setInputLabel = (input, prependTo, params) => {
      if (params.inputLabel) {
        const label = document.createElement("label");
        const labelClass = swalClasses["input-label"];
        label.setAttribute("for", input.id);
        label.className = labelClass;
        if (typeof params.customClass === "object") {
          addClass(label, params.customClass.inputLabel);
        }
        label.innerText = params.inputLabel;
        prependTo.insertAdjacentElement("beforebegin", label);
      }
    };
    const getInputContainer = (inputType) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      return getDirectChildByClass(popup, swalClasses[inputType] || swalClasses.input);
    };
    const checkAndSetInputValue = (input, inputValue) => {
      if (["string", "number"].includes(typeof inputValue)) {
        input.value = `${inputValue}`;
      } else if (!isPromise(inputValue)) {
        warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
      }
    };
    const renderInputType = {};
    renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType["datetime-local"] = renderInputType.time = renderInputType.week = renderInputType.month = (input, params) => {
      const inputElement = input;
      checkAndSetInputValue(inputElement, params.inputValue);
      setInputLabel(inputElement, inputElement, params);
      setInputPlaceholder(inputElement, params);
      inputElement.type = params.input;
      return inputElement;
    };
    renderInputType.file = (input, params) => {
      const inputElement = input;
      setInputLabel(inputElement, inputElement, params);
      setInputPlaceholder(inputElement, params);
      return inputElement;
    };
    renderInputType.range = (range, params) => {
      const rangeContainer = range;
      const rangeInput = rangeContainer.querySelector("input");
      const rangeOutput = rangeContainer.querySelector("output");
      if (rangeInput) {
        checkAndSetInputValue(rangeInput, params.inputValue);
        rangeInput.type = params.input;
        setInputLabel(rangeInput, range, params);
      }
      if (rangeOutput) {
        checkAndSetInputValue(rangeOutput, params.inputValue);
      }
      return range;
    };
    renderInputType.select = (select, params) => {
      const selectElement = select;
      selectElement.textContent = "";
      if (params.inputPlaceholder) {
        const placeholder = document.createElement("option");
        setInnerHtml(placeholder, params.inputPlaceholder);
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        selectElement.appendChild(placeholder);
      }
      setInputLabel(selectElement, selectElement, params);
      return selectElement;
    };
    renderInputType.radio = (radio) => {
      const radioElement = radio;
      radioElement.textContent = "";
      return radio;
    };
    renderInputType.checkbox = (checkboxContainer, params) => {
      const popup = getPopup();
      if (!popup) {
        throw new Error("Popup not found");
      }
      const checkbox = getInput$1(popup, "checkbox");
      if (!checkbox) {
        throw new Error("Checkbox input not found");
      }
      checkbox.value = "1";
      checkbox.checked = Boolean(params.inputValue);
      const containerElement = checkboxContainer;
      const label = containerElement.querySelector("span");
      if (label) {
        const placeholderOrLabel = params.inputPlaceholder || params.inputLabel;
        if (placeholderOrLabel) {
          setInnerHtml(label, placeholderOrLabel);
        }
      }
      return checkbox;
    };
    renderInputType.textarea = (textarea, params) => {
      const textareaElement = textarea;
      checkAndSetInputValue(textareaElement, params.inputValue);
      setInputPlaceholder(textareaElement, params);
      setInputLabel(textareaElement, textareaElement, params);
      const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
      setTimeout(() => {
        if ("MutationObserver" in window) {
          const popup = getPopup();
          if (!popup) {
            return;
          }
          const initialPopupWidth = parseInt(window.getComputedStyle(popup).width);
          const textareaResizeHandler = () => {
            if (!document.body.contains(textareaElement)) {
              return;
            }
            const textareaWidth = textareaElement.offsetWidth + getMargin(textareaElement);
            const popupElement = getPopup();
            if (popupElement) {
              if (textareaWidth > initialPopupWidth) {
                popupElement.style.width = `${textareaWidth}px`;
              } else {
                applyNumericalStyle(popupElement, "width", params.width);
              }
            }
          };
          new MutationObserver(textareaResizeHandler).observe(textareaElement, {
            attributes: true,
            attributeFilter: ["style"]
          });
        }
      });
      return textareaElement;
    };
    const renderContent = (instance, params) => {
      const htmlContainer = getHtmlContainer();
      if (!htmlContainer) {
        return;
      }
      showWhenInnerHtmlPresent(htmlContainer);
      applyCustomClass(htmlContainer, params, "htmlContainer");
      if (params.html) {
        parseHtmlToContainer(params.html, htmlContainer);
        show(htmlContainer, "block");
      } else if (params.text) {
        htmlContainer.textContent = params.text;
        show(htmlContainer, "block");
      } else {
        hide(htmlContainer);
      }
      renderInput(instance, params);
    };
    const renderFooter = (instance, params) => {
      const footer = getFooter();
      if (!footer) {
        return;
      }
      showWhenInnerHtmlPresent(footer);
      toggle(footer, Boolean(params.footer), "block");
      if (params.footer) {
        parseHtmlToContainer(params.footer, footer);
      }
      applyCustomClass(footer, params, "footer");
    };
    const renderIcon = (instance, params) => {
      const innerParams = privateProps.innerParams.get(instance);
      const icon = getIcon();
      if (!icon) {
        return;
      }
      if (innerParams && params.icon === innerParams.icon) {
        setContent(icon, params);
        applyStyles(icon, params);
        return;
      }
      if (!params.icon && !params.iconHtml) {
        hide(icon);
        return;
      }
      if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
        error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
        hide(icon);
        return;
      }
      show(icon);
      setContent(icon, params);
      applyStyles(icon, params);
      addClass(icon, params.showClass && params.showClass.icon);
      const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      colorSchemeQueryList.addEventListener("change", adjustSuccessIconBackgroundColor);
    };
    const applyStyles = (icon, params) => {
      for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
        if (params.icon !== iconType) {
          removeClass(icon, iconClassName);
        }
      }
      addClass(icon, params.icon && iconTypes[params.icon]);
      setColor(icon, params);
      adjustSuccessIconBackgroundColor();
      applyCustomClass(icon, params, "icon");
    };
    const adjustSuccessIconBackgroundColor = () => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
      const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      successIconParts.forEach((part) => {
        part.style.backgroundColor = popupBackgroundColor;
      });
    };
    const successIconHtml = (params) => `
  ${params.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${params.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${params.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`;
    const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
    const setContent = (icon, params) => {
      if (!params.icon && !params.iconHtml) {
        return;
      }
      let oldContent = icon.innerHTML;
      let newContent = "";
      if (params.iconHtml) {
        newContent = iconContent(params.iconHtml);
      } else if (params.icon === "success") {
        newContent = successIconHtml(params);
        oldContent = oldContent.replace(/ style=".*?"/g, "");
      } else if (params.icon === "error") {
        newContent = errorIconHtml;
      } else if (params.icon) {
        const defaultIconHtml = {
          question: "?",
          warning: "!",
          info: "i"
        };
        newContent = iconContent(defaultIconHtml[params.icon]);
      }
      if (oldContent.trim() !== newContent.trim()) {
        setInnerHtml(icon, newContent);
      }
    };
    const setColor = (icon, params) => {
      if (!params.iconColor) {
        return;
      }
      icon.style.color = params.iconColor;
      icon.style.borderColor = params.iconColor;
      for (const sel of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) {
        setStyle(icon, sel, "background-color", params.iconColor);
      }
      setStyle(icon, ".swal2-success-ring", "border-color", params.iconColor);
    };
    const iconContent = (content) => `<div class="${swalClasses["icon-content"]}">${content}</div>`;
    const renderImage = (instance, params) => {
      const image = getImage();
      if (!image) {
        return;
      }
      if (!params.imageUrl) {
        hide(image);
        return;
      }
      show(image, "");
      image.setAttribute("src", params.imageUrl);
      image.setAttribute("alt", params.imageAlt || "");
      applyNumericalStyle(image, "width", params.imageWidth);
      applyNumericalStyle(image, "height", params.imageHeight);
      image.className = swalClasses.image;
      applyCustomClass(image, params, "image");
    };
    let dragging = false;
    let mousedownX = 0;
    let mousedownY = 0;
    let initialX = 0;
    let initialY = 0;
    const addDraggableListeners = (popup) => {
      popup.addEventListener("mousedown", down);
      document.body.addEventListener("mousemove", move);
      popup.addEventListener("mouseup", up);
      popup.addEventListener("touchstart", down);
      document.body.addEventListener("touchmove", move);
      popup.addEventListener("touchend", up);
    };
    const removeDraggableListeners = (popup) => {
      popup.removeEventListener("mousedown", down);
      document.body.removeEventListener("mousemove", move);
      popup.removeEventListener("mouseup", up);
      popup.removeEventListener("touchstart", down);
      document.body.removeEventListener("touchmove", move);
      popup.removeEventListener("touchend", up);
    };
    const down = (event) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const icon = getIcon();
      if (event.target === popup || icon && icon.contains(event.target)) {
        dragging = true;
        const clientXY = getClientXY(event);
        mousedownX = clientXY.clientX;
        mousedownY = clientXY.clientY;
        initialX = parseInt(popup.style.insetInlineStart) || 0;
        initialY = parseInt(popup.style.insetBlockStart) || 0;
        addClass(popup, "swal2-dragging");
      }
    };
    const move = (event) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      if (dragging) {
        let {
          clientX,
          clientY
        } = getClientXY(event);
        const deltaX = clientX - mousedownX;
        popup.style.insetInlineStart = `${initialX + (globalState.isRTL ? -deltaX : deltaX)}px`;
        popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
      }
    };
    const up = () => {
      const popup = getPopup();
      dragging = false;
      removeClass(popup, "swal2-dragging");
    };
    const getClientXY = (event) => {
      const source = event.type.startsWith("touch") ? event.touches[0] : event;
      return {
        clientX: source.clientX,
        clientY: source.clientY
      };
    };
    const renderPopup = (instance, params) => {
      const container = getContainer();
      const popup = getPopup();
      if (!container || !popup) {
        return;
      }
      if (params.toast) {
        applyNumericalStyle(container, "width", params.width);
        popup.style.width = "100%";
        const loader = getLoader();
        if (loader) {
          popup.insertBefore(loader, getIcon());
        }
      } else {
        applyNumericalStyle(popup, "width", params.width);
      }
      applyNumericalStyle(popup, "padding", params.padding);
      if (params.color) {
        popup.style.color = params.color;
      }
      if (params.background) {
        popup.style.background = params.background;
      }
      hide(getValidationMessage());
      addClasses$1(popup, params);
      if (params.draggable && !params.toast) {
        addClass(popup, swalClasses.draggable);
        addDraggableListeners(popup);
      } else {
        removeClass(popup, swalClasses.draggable);
        removeDraggableListeners(popup);
      }
    };
    const addClasses$1 = (popup, params) => {
      const showClass = params.showClass || {};
      popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ""}`;
      if (params.toast) {
        addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
        addClass(popup, swalClasses.toast);
      } else {
        addClass(popup, swalClasses.modal);
      }
      applyCustomClass(popup, params, "popup");
      if (typeof params.customClass === "string") {
        addClass(popup, params.customClass);
      }
      if (params.icon) {
        addClass(popup, swalClasses[`icon-${params.icon}`]);
      }
    };
    const renderProgressSteps = (instance, params) => {
      const progressStepsContainer = getProgressSteps();
      if (!progressStepsContainer) {
        return;
      }
      const {
        progressSteps,
        currentProgressStep
      } = params;
      if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
        hide(progressStepsContainer);
        return;
      }
      show(progressStepsContainer);
      progressStepsContainer.textContent = "";
      if (currentProgressStep >= progressSteps.length) {
        warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length " + "(currentProgressStep like JS arrays starts from 0)");
      }
      progressSteps.forEach((step, index) => {
        const stepEl = createStepElement(step);
        progressStepsContainer.appendChild(stepEl);
        if (index === currentProgressStep) {
          addClass(stepEl, swalClasses["active-progress-step"]);
        }
        if (index !== progressSteps.length - 1) {
          const lineEl = createLineElement(params);
          progressStepsContainer.appendChild(lineEl);
        }
      });
    };
    const createStepElement = (step) => {
      const stepEl = document.createElement("li");
      addClass(stepEl, swalClasses["progress-step"]);
      setInnerHtml(stepEl, step);
      return stepEl;
    };
    const createLineElement = (params) => {
      const lineEl = document.createElement("li");
      addClass(lineEl, swalClasses["progress-step-line"]);
      if (params.progressStepsDistance) {
        applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
      }
      return lineEl;
    };
    const renderTitle = (instance, params) => {
      const title = getTitle();
      if (!title) {
        return;
      }
      showWhenInnerHtmlPresent(title);
      toggle(title, Boolean(params.title || params.titleText), "block");
      if (params.title) {
        parseHtmlToContainer(params.title, title);
      }
      if (params.titleText) {
        title.innerText = params.titleText;
      }
      applyCustomClass(title, params, "title");
    };
    const render = (instance, params) => {
      var _globalState$eventEmi;
      renderPopup(instance, params);
      renderContainer(instance, params);
      renderProgressSteps(instance, params);
      renderIcon(instance, params);
      renderImage(instance, params);
      renderTitle(instance, params);
      renderCloseButton(instance, params);
      renderContent(instance, params);
      renderActions(instance, params);
      renderFooter(instance, params);
      const popup = getPopup();
      if (typeof params.didRender === "function" && popup) {
        params.didRender(popup);
      }
      (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === undefined || _globalState$eventEmi.emit("didRender", popup);
    };
    const isVisible = () => {
      return isVisible$1(getPopup());
    };
    const clickConfirm = () => {
      var _dom$getConfirmButton;
      return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === undefined ? undefined : _dom$getConfirmButton.click();
    };
    const clickDeny = () => {
      var _dom$getDenyButton;
      return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === undefined ? undefined : _dom$getDenyButton.click();
    };
    const clickCancel = () => {
      var _dom$getCancelButton;
      return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === undefined ? undefined : _dom$getCancelButton.click();
    };
    const DismissReason = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
    });
    const removeKeydownHandler = (globalState2) => {
      if (globalState2.keydownTarget && globalState2.keydownHandlerAdded && globalState2.keydownHandler) {
        const handler = globalState2.keydownHandler;
        globalState2.keydownTarget.removeEventListener("keydown", handler, {
          capture: globalState2.keydownListenerCapture
        });
        globalState2.keydownHandlerAdded = false;
      }
    };
    const addKeydownHandler = (globalState2, innerParams, dismissWith) => {
      removeKeydownHandler(globalState2);
      if (!innerParams.toast) {
        const handler = (e) => keydownHandler(innerParams, e, dismissWith);
        globalState2.keydownHandler = handler;
        const target = innerParams.keydownListenerCapture ? window : getPopup();
        if (target) {
          globalState2.keydownTarget = target;
          globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
          const eventHandler = handler;
          globalState2.keydownTarget.addEventListener("keydown", eventHandler, {
            capture: globalState2.keydownListenerCapture
          });
          globalState2.keydownHandlerAdded = true;
        }
      }
    };
    const setFocus = (index, increment) => {
      var _dom$getPopup;
      const focusableElements = getFocusableElements();
      if (focusableElements.length) {
        index = index + increment;
        if (index === -2) {
          index = focusableElements.length - 1;
        }
        if (index === focusableElements.length) {
          index = 0;
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }
        focusableElements[index].focus();
        if (isFirefox() && focusableElements[index] instanceof HTMLIFrameElement) {
          return false;
        }
        return true;
      }
      (_dom$getPopup = getPopup()) === null || _dom$getPopup === undefined || _dom$getPopup.focus();
      return true;
    };
    const arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
    const arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
    const keydownHandler = (innerParams, event, dismissWith) => {
      if (!innerParams) {
        return;
      }
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (innerParams.stopKeydownPropagation) {
        event.stopPropagation();
      }
      if (event.key === "Enter") {
        handleEnter(event, innerParams);
      } else if (event.key === "Tab") {
        handleTab(event);
      } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
        handleArrows(event.key);
      } else if (event.key === "Escape") {
        handleEsc(event, innerParams, dismissWith);
      }
    };
    const handleEnter = (event, innerParams) => {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        return;
      }
      const popup = getPopup();
      if (!popup || !innerParams.input) {
        return;
      }
      const input = getInput$1(popup, innerParams.input);
      if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
        if (["textarea", "file"].includes(innerParams.input)) {
          return;
        }
        clickConfirm();
        event.preventDefault();
      }
    };
    const handleTab = (event) => {
      const targetElement = event.target;
      const focusableElements = getFocusableElements();
      const btnIndex = focusableElements.findIndex((el) => el === targetElement);
      let shouldPreventDefault = true;
      if (!event.shiftKey) {
        shouldPreventDefault = setFocus(btnIndex, 1);
      } else {
        shouldPreventDefault = setFocus(btnIndex, -1);
      }
      event.stopPropagation();
      if (shouldPreventDefault) {
        event.preventDefault();
      }
    };
    const handleArrows = (key) => {
      const actions = getActions();
      const confirmButton = getConfirmButton();
      const denyButton = getDenyButton();
      const cancelButton = getCancelButton();
      if (!actions || !confirmButton || !denyButton || !cancelButton) {
        return;
      }
      const buttons = [confirmButton, denyButton, cancelButton];
      if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
        return;
      }
      const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
      let buttonToFocus = document.activeElement;
      if (!buttonToFocus) {
        return;
      }
      for (let i = 0;i < actions.children.length; i++) {
        buttonToFocus = buttonToFocus[sibling];
        if (!buttonToFocus) {
          return;
        }
        if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
          break;
        }
      }
      if (buttonToFocus instanceof HTMLButtonElement) {
        buttonToFocus.focus();
      }
    };
    const handleEsc = (event, innerParams, dismissWith) => {
      event.preventDefault();
      if (callIfFunction(innerParams.allowEscapeKey)) {
        dismissWith(DismissReason.esc);
      }
    };
    var privateMethods = {
      swalPromiseResolve: new WeakMap,
      swalPromiseReject: new WeakMap
    };
    const setAriaHidden = () => {
      const container = getContainer();
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((el) => {
        if (el.contains(container)) {
          return;
        }
        if (el.hasAttribute("aria-hidden")) {
          el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
        }
        el.setAttribute("aria-hidden", "true");
      });
    };
    const unsetAriaHidden = () => {
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((el) => {
        if (el.hasAttribute("data-previous-aria-hidden")) {
          el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
          el.removeAttribute("data-previous-aria-hidden");
        } else {
          el.removeAttribute("aria-hidden");
        }
      });
    };
    const isSafariOrIOS = typeof window !== "undefined" && Boolean(window.GestureEvent);
    const isIOS = isSafariOrIOS && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const iOSfix = () => {
      if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
        const offset = document.body.scrollTop;
        document.body.style.top = `${offset * -1}px`;
        addClass(document.body, swalClasses.iosfix);
        lockBodyScroll();
      }
    };
    const lockBodyScroll = () => {
      const container = getContainer();
      if (!container) {
        return;
      }
      let preventTouchMove;
      container.ontouchstart = (event) => {
        preventTouchMove = shouldPreventTouchMove(event);
      };
      container.ontouchmove = (event) => {
        if (preventTouchMove) {
          event.preventDefault();
          event.stopPropagation();
        }
      };
    };
    const shouldPreventTouchMove = (event) => {
      const target = event.target;
      const container = getContainer();
      const htmlContainer = getHtmlContainer();
      if (!container || !htmlContainer) {
        return false;
      }
      if (isStylus(event) || isZoom(event)) {
        return false;
      }
      if (target === container) {
        return true;
      }
      if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) && target.tagName !== "INPUT" && target.tagName !== "TEXTAREA" && !(isScrollable(htmlContainer) && htmlContainer.contains(target))) {
        return true;
      }
      return false;
    };
    const isStylus = (event) => {
      return Boolean(event.touches && event.touches.length && event.touches[0].touchType === "stylus");
    };
    const isZoom = (event) => {
      return event.touches && event.touches.length > 1;
    };
    const undoIOSfix = () => {
      if (hasClass(document.body, swalClasses.iosfix)) {
        const offset = parseInt(document.body.style.top, 10);
        removeClass(document.body, swalClasses.iosfix);
        document.body.style.top = "";
        document.body.scrollTop = offset * -1;
      }
    };
    const measureScrollbar = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = swalClasses["scrollbar-measure"];
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };
    let previousBodyPadding = null;
    const replaceScrollbarWithPadding = (initialBodyOverflow) => {
      if (previousBodyPadding !== null) {
        return;
      }
      if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === "scroll") {
        previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
        document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
      }
    };
    const undoReplaceScrollbarWithPadding = () => {
      if (previousBodyPadding !== null) {
        document.body.style.paddingRight = `${previousBodyPadding}px`;
        previousBodyPadding = null;
      }
    };
    function removePopupAndResetState(instance, container, returnFocus, didClose) {
      if (isToast()) {
        triggerDidCloseAndDispose(instance, didClose);
      } else {
        restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
        removeKeydownHandler(globalState);
      }
      if (isSafariOrIOS) {
        container.setAttribute("style", "display:none !important");
        container.removeAttribute("class");
        container.innerHTML = "";
      } else {
        container.remove();
      }
      if (isModal()) {
        undoReplaceScrollbarWithPadding();
        undoIOSfix();
        unsetAriaHidden();
      }
      removeBodyClasses();
    }
    function removeBodyClasses() {
      removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
    }
    function close(resolveValue) {
      resolveValue = prepareResolveValue(resolveValue);
      const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
      const didClose = triggerClosePopup(this);
      if (this.isAwaitingPromise) {
        if (!resolveValue.isDismissed) {
          handleAwaitingPromise(this);
          swalPromiseResolve(resolveValue);
        }
      } else if (didClose) {
        swalPromiseResolve(resolveValue);
      }
    }
    const triggerClosePopup = (instance) => {
      const popup = getPopup();
      if (!popup) {
        return false;
      }
      const innerParams = privateProps.innerParams.get(instance);
      if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
        return false;
      }
      removeClass(popup, innerParams.showClass.popup);
      addClass(popup, innerParams.hideClass.popup);
      const backdrop = getContainer();
      removeClass(backdrop, innerParams.showClass.backdrop);
      addClass(backdrop, innerParams.hideClass.backdrop);
      handlePopupAnimation(instance, popup, innerParams);
      return true;
    };
    function rejectPromise(error2) {
      const rejectPromise2 = privateMethods.swalPromiseReject.get(this);
      handleAwaitingPromise(this);
      if (rejectPromise2) {
        rejectPromise2(error2);
      }
    }
    const handleAwaitingPromise = (instance) => {
      if (instance.isAwaitingPromise) {
        delete instance.isAwaitingPromise;
        if (!privateProps.innerParams.get(instance)) {
          instance._destroy();
        }
      }
    };
    const prepareResolveValue = (resolveValue) => {
      if (typeof resolveValue === "undefined") {
        return {
          isConfirmed: false,
          isDenied: false,
          isDismissed: true
        };
      }
      return Object.assign({
        isConfirmed: false,
        isDenied: false,
        isDismissed: false
      }, resolveValue);
    };
    const handlePopupAnimation = (instance, popup, innerParams) => {
      var _globalState$eventEmi;
      const container = getContainer();
      const animationIsSupported = hasCssAnimation(popup);
      if (typeof innerParams.willClose === "function") {
        innerParams.willClose(popup);
      }
      (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === undefined || _globalState$eventEmi.emit("willClose", popup);
      if (animationIsSupported && container) {
        animatePopup(instance, popup, container, Boolean(innerParams.returnFocus), innerParams.didClose);
      } else if (container) {
        removePopupAndResetState(instance, container, Boolean(innerParams.returnFocus), innerParams.didClose);
      }
    };
    const animatePopup = (instance, popup, container, returnFocus, didClose) => {
      globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
      const swalCloseAnimationFinished = function(e) {
        if (e.target === popup) {
          var _globalState$swalClos;
          (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === undefined || _globalState$swalClos.call(globalState);
          delete globalState.swalCloseEventFinishedCallback;
          popup.removeEventListener("animationend", swalCloseAnimationFinished);
          popup.removeEventListener("transitionend", swalCloseAnimationFinished);
        }
      };
      popup.addEventListener("animationend", swalCloseAnimationFinished);
      popup.addEventListener("transitionend", swalCloseAnimationFinished);
    };
    const triggerDidCloseAndDispose = (instance, didClose) => {
      setTimeout(() => {
        var _globalState$eventEmi2;
        if (typeof didClose === "function") {
          didClose.bind(instance.params)();
        }
        (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === undefined || _globalState$eventEmi2.emit("didClose");
        if (instance._destroy) {
          instance._destroy();
        }
      });
    };
    const showLoading = (buttonToReplace) => {
      let popup = getPopup();
      if (!popup) {
        new Swal;
      }
      popup = getPopup();
      if (!popup) {
        return;
      }
      const loader = getLoader();
      if (isToast()) {
        hide(getIcon());
      } else {
        replaceButton(popup, buttonToReplace);
      }
      show(loader);
      popup.setAttribute("data-loading", "true");
      popup.setAttribute("aria-busy", "true");
      popup.focus();
    };
    const replaceButton = (popup, buttonToReplace) => {
      const actions = getActions();
      const loader = getLoader();
      if (!actions || !loader) {
        return;
      }
      if (!buttonToReplace && isVisible$1(getConfirmButton())) {
        buttonToReplace = getConfirmButton();
      }
      show(actions);
      if (buttonToReplace) {
        hide(buttonToReplace);
        loader.setAttribute("data-button-to-replace", buttonToReplace.className);
        actions.insertBefore(loader, buttonToReplace);
      }
      addClass([popup, actions], swalClasses.loading);
    };
    const handleInputOptionsAndValue = (instance, params) => {
      if (params.input === "select" || params.input === "radio") {
        handleInputOptions(instance, params);
      } else if (["text", "email", "number", "tel", "textarea"].some((i) => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
        showLoading(getConfirmButton());
        handleInputValue(instance, params);
      }
    };
    const getInputValue = (instance, innerParams) => {
      const input = instance.getInput();
      if (!input) {
        return null;
      }
      switch (innerParams.input) {
        case "checkbox":
          return getCheckboxValue(input);
        case "radio":
          return getRadioValue(input);
        case "file":
          return getFileValue(input);
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    };
    const getCheckboxValue = (input) => input.checked ? 1 : 0;
    const getRadioValue = (input) => input.checked ? input.value : null;
    const getFileValue = (input) => input.files && input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
    const handleInputOptions = (instance, params) => {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const processInputOptions = (inputOptions) => {
        if (params.input === "select") {
          populateSelectOptions(popup, formatInputOptions(inputOptions), params);
        } else if (params.input === "radio") {
          populateRadioOptions(popup, formatInputOptions(inputOptions), params);
        }
      };
      if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
        showLoading(getConfirmButton());
        asPromise(params.inputOptions).then((inputOptions) => {
          instance.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (typeof params.inputOptions === "object") {
        processInputOptions(params.inputOptions);
      } else {
        error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
      }
    };
    const handleInputValue = (instance, params) => {
      const input = instance.getInput();
      if (!input) {
        return;
      }
      hide(input);
      asPromise(params.inputValue).then((inputValue) => {
        input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
        show(input);
        input.focus();
        instance.hideLoading();
      }).catch((err) => {
        error(`Error in inputValue promise: ${err}`);
        input.value = "";
        show(input);
        input.focus();
        instance.hideLoading();
      });
    };
    function populateSelectOptions(popup, inputOptions, params) {
      const select = getDirectChildByClass(popup, swalClasses.select);
      if (!select) {
        return;
      }
      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement("option");
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };
      inputOptions.forEach((inputOption) => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1];
        if (Array.isArray(optionLabel)) {
          const optgroup = document.createElement("optgroup");
          optgroup.label = optionValue;
          optgroup.disabled = false;
          select.appendChild(optgroup);
          optionLabel.forEach((o) => renderOption(optgroup, o[1], o[0]));
        } else {
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    }
    function populateRadioOptions(popup, inputOptions, params) {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      if (!radio) {
        return;
      }
      inputOptions.forEach((inputOption) => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement("input");
        const radioLabelElement = document.createElement("label");
        radioInput.type = "radio";
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;
        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }
        const label = document.createElement("span");
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll("input");
      if (radios.length) {
        radios[0].focus();
      }
    }
    const formatInputOptions = (inputOptions) => {
      const entries = inputOptions instanceof Map ? Array.from(inputOptions) : Object.entries(inputOptions);
      return entries.map(([key, value]) => [key, typeof value === "object" ? formatInputOptions(value) : value]);
    };
    const isSelected = (optionValue, inputValue) => Boolean(inputValue) && inputValue != null && inputValue.toString() === optionValue.toString();
    const handleConfirmButtonClick = (instance) => {
      const innerParams = privateProps.innerParams.get(instance);
      instance.disableButtons();
      if (innerParams.input) {
        handleConfirmOrDenyWithInput(instance, "confirm");
      } else {
        confirm(instance, true);
      }
    };
    const handleDenyButtonClick = (instance) => {
      const innerParams = privateProps.innerParams.get(instance);
      instance.disableButtons();
      if (innerParams.returnInputValueOnDeny) {
        handleConfirmOrDenyWithInput(instance, "deny");
      } else {
        deny(instance, false);
      }
    };
    const handleCancelButtonClick = (instance, dismissWith) => {
      instance.disableButtons();
      dismissWith(DismissReason.cancel);
    };
    const handleConfirmOrDenyWithInput = (instance, type) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (!innerParams.input) {
        error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
        return;
      }
      const input = instance.getInput();
      const inputValue = getInputValue(instance, innerParams);
      if (innerParams.inputValidator) {
        handleInputValidator(instance, inputValue, type);
      } else if (input && !input.checkValidity()) {
        instance.enableButtons();
        instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
      } else if (type === "deny") {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    };
    const handleInputValidator = (instance, inputValue, type) => {
      const innerParams = privateProps.innerParams.get(instance);
      instance.disableInput();
      const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
      validationPromise.then((validationMessage) => {
        instance.enableButtons();
        instance.enableInput();
        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else if (type === "deny") {
          deny(instance, inputValue);
        } else {
          confirm(instance, inputValue);
        }
      });
    };
    const deny = (instance, value) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (innerParams.showLoaderOnDeny) {
        showLoading(getDenyButton());
      }
      if (innerParams.preDeny) {
        instance.isAwaitingPromise = true;
        const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
        preDenyPromise.then((preDenyValue) => {
          if (preDenyValue === false) {
            instance.hideLoading();
            handleAwaitingPromise(instance);
          } else {
            instance.close({
              isDenied: true,
              value: typeof preDenyValue === "undefined" ? value : preDenyValue
            });
          }
        }).catch((error2) => rejectWith(instance, error2));
      } else {
        instance.close({
          isDenied: true,
          value
        });
      }
    };
    const succeedWith = (instance, value) => {
      instance.close({
        isConfirmed: true,
        value
      });
    };
    const rejectWith = (instance, error2) => {
      instance.rejectPromise(error2);
    };
    const confirm = (instance, value) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (innerParams.showLoaderOnConfirm) {
        showLoading();
      }
      if (innerParams.preConfirm) {
        instance.resetValidationMessage();
        instance.isAwaitingPromise = true;
        const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
        preConfirmPromise.then((preConfirmValue) => {
          if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
            instance.hideLoading();
            handleAwaitingPromise(instance);
          } else {
            succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
          }
        }).catch((error2) => rejectWith(instance, error2));
      } else {
        succeedWith(instance, value);
      }
    };
    function hideLoading() {
      const innerParams = privateProps.innerParams.get(this);
      if (!innerParams) {
        return;
      }
      const domCache = privateProps.domCache.get(this);
      hide(domCache.loader);
      if (isToast()) {
        if (innerParams.icon) {
          show(getIcon());
        }
      } else {
        showRelatedButton(domCache);
      }
      removeClass([domCache.popup, domCache.actions], swalClasses.loading);
      domCache.popup.removeAttribute("aria-busy");
      domCache.popup.removeAttribute("data-loading");
      this.enableButtons();
    }
    const showRelatedButton = (domCache) => {
      const dataButtonToReplace = domCache.loader.getAttribute("data-button-to-replace");
      const buttonToReplace = dataButtonToReplace ? domCache.popup.getElementsByClassName(dataButtonToReplace) : [];
      if (buttonToReplace.length) {
        show(buttonToReplace[0], "inline-block");
      } else if (allButtonsAreHidden()) {
        hide(domCache.actions);
      }
    };
    function getInput() {
      const innerParams = privateProps.innerParams.get(this);
      const domCache = privateProps.domCache.get(this);
      if (!domCache) {
        return null;
      }
      return getInput$1(domCache.popup, innerParams.input);
    }
    function setButtonsDisabled(instance, buttons, disabled) {
      const domCache = privateProps.domCache.get(instance);
      buttons.forEach((button) => {
        domCache[button].disabled = disabled;
      });
    }
    function setInputDisabled(input, disabled) {
      const popup = getPopup();
      if (!popup || !input) {
        return;
      }
      if (input.type === "radio") {
        const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
        radios.forEach((radio) => {
          radio.disabled = disabled;
        });
      } else {
        input.disabled = disabled;
      }
    }
    function enableButtons() {
      setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
      const focusedElement = privateProps.focusedElement.get(this);
      if (focusedElement instanceof HTMLElement && document.activeElement === document.body) {
        focusedElement.focus();
      }
      privateProps.focusedElement.delete(this);
    }
    function disableButtons() {
      privateProps.focusedElement.set(this, document.activeElement);
      setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
    }
    function enableInput() {
      setInputDisabled(this.getInput(), false);
    }
    function disableInput() {
      setInputDisabled(this.getInput(), true);
    }
    function showValidationMessage(error2) {
      const domCache = privateProps.domCache.get(this);
      const params = privateProps.innerParams.get(this);
      setInnerHtml(domCache.validationMessage, error2);
      domCache.validationMessage.className = swalClasses["validation-message"];
      if (params.customClass && params.customClass.validationMessage) {
        addClass(domCache.validationMessage, params.customClass.validationMessage);
      }
      show(domCache.validationMessage);
      const input = this.getInput();
      if (input) {
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", swalClasses["validation-message"]);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    }
    function resetValidationMessage() {
      const domCache = privateProps.domCache.get(this);
      if (domCache.validationMessage) {
        hide(domCache.validationMessage);
      }
      const input = this.getInput();
      if (input) {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
        removeClass(input, swalClasses.inputerror);
      }
    }
    const defaultParams = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: undefined,
      iconColor: undefined,
      iconHtml: undefined,
      template: undefined,
      toast: false,
      draggable: false,
      animation: true,
      theme: "light",
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show"
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide"
      },
      customClass: {},
      target: "body",
      color: undefined,
      backdrop: true,
      heightAuto: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: true,
      keydownListenerCapture: false,
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: false,
      preConfirm: undefined,
      preDeny: undefined,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: undefined,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: undefined,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: undefined,
      buttonsStyling: true,
      reverseButtons: false,
      focusConfirm: true,
      focusDeny: false,
      focusCancel: false,
      returnFocus: true,
      showCloseButton: false,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: false,
      showLoaderOnDeny: false,
      imageUrl: undefined,
      imageWidth: undefined,
      imageHeight: undefined,
      imageAlt: "",
      timer: undefined,
      timerProgressBar: false,
      width: undefined,
      padding: undefined,
      background: undefined,
      input: undefined,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: true,
      inputAutoTrim: true,
      inputAttributes: {},
      inputValidator: undefined,
      returnInputValueOnDeny: false,
      validationMessage: undefined,
      grow: false,
      position: "center",
      progressSteps: [],
      currentProgressStep: undefined,
      progressStepsDistance: undefined,
      willOpen: undefined,
      didOpen: undefined,
      didRender: undefined,
      willClose: undefined,
      didClose: undefined,
      didDestroy: undefined,
      scrollbarPadding: true,
      topLayer: false
    };
    const updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "draggable", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "theme", "willClose"];
    const deprecatedParams = {
      allowEnterKey: undefined
    };
    const toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "draggable", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
    const isValidParameter = (paramName) => {
      return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    const isUpdatableParameter = (paramName) => {
      return updatableParams.indexOf(paramName) !== -1;
    };
    const isDeprecatedParameter = (paramName) => {
      return deprecatedParams[paramName];
    };
    const checkIfParamIsValid = (param) => {
      if (!isValidParameter(param)) {
        warn(`Unknown parameter "${param}"`);
      }
    };
    const checkIfToastParamIsValid = (param) => {
      if (toastIncompatibleParams.includes(param)) {
        warn(`The parameter "${param}" is incompatible with toasts`);
      }
    };
    const checkIfParamIsDeprecated = (param) => {
      const isDeprecated = isDeprecatedParameter(param);
      if (isDeprecated) {
        warnAboutDeprecation(param, isDeprecated);
      }
    };
    const showWarningsForParams = (params) => {
      if (params.backdrop === false && params.allowOutsideClick) {
        warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      }
      if (params.theme && !["light", "dark", "auto", "minimal", "borderless", "bootstrap-4", "bootstrap-4-light", "bootstrap-4-dark", "bootstrap-5", "bootstrap-5-light", "bootstrap-5-dark", "material-ui", "material-ui-light", "material-ui-dark", "embed-iframe", "bulma", "bulma-light", "bulma-dark"].includes(params.theme)) {
        warn(`Invalid theme "${params.theme}"`);
      }
      for (const param in params) {
        checkIfParamIsValid(param);
        if (params.toast) {
          checkIfToastParamIsValid(param);
        }
        checkIfParamIsDeprecated(param);
      }
    };
    function update(params) {
      const container = getContainer();
      const popup = getPopup();
      const innerParams = privateProps.innerParams.get(this);
      if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
        warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
        return;
      }
      const validUpdatableParams = filterValidParams(params);
      const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
      showWarningsForParams(updatedParams);
      if (container) {
        container.dataset["swal2Theme"] = updatedParams.theme;
      }
      render(this, updatedParams);
      privateProps.innerParams.set(this, updatedParams);
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, params),
          writable: false,
          enumerable: true
        }
      });
    }
    const filterValidParams = (params) => {
      const validUpdatableParams = {};
      Object.keys(params).forEach((param) => {
        if (isUpdatableParameter(param)) {
          const typedParams = params;
          validUpdatableParams[param] = typedParams[param];
        } else {
          warn(`Invalid parameter to update: ${param}`);
        }
      });
      return validUpdatableParams;
    };
    function _destroy() {
      var _globalState$eventEmi;
      const domCache = privateProps.domCache.get(this);
      const innerParams = privateProps.innerParams.get(this);
      if (!innerParams) {
        disposeWeakMaps(this);
        return;
      }
      if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
      if (typeof innerParams.didDestroy === "function") {
        innerParams.didDestroy();
      }
      (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === undefined || _globalState$eventEmi.emit("didDestroy");
      disposeSwal(this);
    }
    const disposeSwal = (instance) => {
      disposeWeakMaps(instance);
      delete instance.params;
      delete globalState.keydownHandler;
      delete globalState.keydownTarget;
      delete globalState.currentInstance;
    };
    const disposeWeakMaps = (instance) => {
      if (instance.isAwaitingPromise) {
        unsetWeakMaps(privateProps, instance);
        instance.isAwaitingPromise = true;
      } else {
        unsetWeakMaps(privateMethods, instance);
        unsetWeakMaps(privateProps, instance);
        delete instance.isAwaitingPromise;
        delete instance.disableButtons;
        delete instance.enableButtons;
        delete instance.getInput;
        delete instance.disableInput;
        delete instance.enableInput;
        delete instance.hideLoading;
        delete instance.disableLoading;
        delete instance.showValidationMessage;
        delete instance.resetValidationMessage;
        delete instance.close;
        delete instance.closePopup;
        delete instance.closeModal;
        delete instance.closeToast;
        delete instance.rejectPromise;
        delete instance.update;
        delete instance._destroy;
      }
    };
    const unsetWeakMaps = (obj, instance) => {
      for (const i in obj) {
        obj[i].delete(instance);
      }
    };
    var instanceMethods = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      _destroy,
      close,
      closeModal: close,
      closePopup: close,
      closeToast: close,
      disableButtons,
      disableInput,
      disableLoading: hideLoading,
      enableButtons,
      enableInput,
      getInput,
      handleAwaitingPromise,
      hideLoading,
      rejectPromise,
      resetValidationMessage,
      showValidationMessage,
      update
    });
    const handlePopupClick = (innerParams, domCache, dismissWith) => {
      if (innerParams.toast) {
        handleToastClick(innerParams, domCache, dismissWith);
      } else {
        handleModalMousedown(domCache);
        handleContainerMousedown(domCache);
        handleModalClick(innerParams, domCache, dismissWith);
      }
    };
    const handleToastClick = (innerParams, domCache, dismissWith) => {
      domCache.popup.onclick = () => {
        if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
          return;
        }
        dismissWith(DismissReason.close);
      };
    };
    const isAnyButtonShown = (innerParams) => {
      return Boolean(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
    };
    let ignoreOutsideClick = false;
    const handleModalMousedown = (domCache) => {
      domCache.popup.onmousedown = () => {
        domCache.container.onmouseup = function(e) {
          domCache.container.onmouseup = () => {};
          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      };
    };
    const handleContainerMousedown = (domCache) => {
      domCache.container.onmousedown = (e) => {
        if (e.target === domCache.container) {
          e.preventDefault();
        }
        domCache.popup.onmouseup = function(e2) {
          domCache.popup.onmouseup = () => {};
          if (e2.target === domCache.popup || e2.target instanceof HTMLElement && domCache.popup.contains(e2.target)) {
            ignoreOutsideClick = true;
          }
        };
      };
    };
    const handleModalClick = (innerParams, domCache, dismissWith) => {
      domCache.container.onclick = (e) => {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(DismissReason.backdrop);
        }
      };
    };
    const isJqueryElement = (elem) => typeof elem === "object" && elem !== null && ("jquery" in elem);
    const isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
    const argsToParams = (args) => {
      const params = {};
      if (typeof args[0] === "object" && !isElement(args[0])) {
        Object.assign(params, args[0]);
      } else {
        ["title", "html", "icon"].forEach((name, index) => {
          const arg = args[index];
          if (typeof arg === "string" || isElement(arg)) {
            params[name] = arg;
          } else if (arg !== undefined) {
            error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
          }
        });
      }
      return params;
    };
    function fire(...args) {
      return new this(...args);
    }
    function mixin(mixinParams) {

      class MixinSwal extends this {
        _main(params, priorityMixinParams) {
          return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
        }
      }
      return MixinSwal;
    }
    const getTimerLeft = () => {
      return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    const stopTimer = () => {
      if (globalState.timeout) {
        stopTimerProgressBar();
        return globalState.timeout.stop();
      }
    };
    const resumeTimer = () => {
      if (globalState.timeout) {
        const remaining = globalState.timeout.start();
        animateTimerProgressBar(remaining);
        return remaining;
      }
    };
    const toggleTimer = () => {
      const timer = globalState.timeout;
      return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    const increaseTimer = (ms) => {
      if (globalState.timeout) {
        const remaining = globalState.timeout.increase(ms);
        animateTimerProgressBar(remaining, true);
        return remaining;
      }
    };
    const isTimerRunning = () => {
      return Boolean(globalState.timeout && globalState.timeout.isRunning());
    };
    let bodyClickListenerAdded = false;
    const clickHandlers = {};
    function bindClickHandler(attr = "data-swal-template") {
      clickHandlers[attr] = this;
      if (!bodyClickListenerAdded) {
        document.body.addEventListener("click", bodyClickListener);
        bodyClickListenerAdded = true;
      }
    }
    const bodyClickListener = (event) => {
      for (let el = event.target;el && el !== document; el = el.parentNode) {
        for (const attr in clickHandlers) {
          const template = el.getAttribute && el.getAttribute(attr);
          if (template) {
            clickHandlers[attr].fire({
              template
            });
            return;
          }
        }
      }
    };

    class EventEmitter {
      constructor() {
        this.events = {};
      }
      _getHandlersByEventName(eventName) {
        if (typeof this.events[eventName] === "undefined") {
          this.events[eventName] = [];
        }
        return this.events[eventName];
      }
      on(eventName, eventHandler) {
        const currentHandlers = this._getHandlersByEventName(eventName);
        if (!currentHandlers.includes(eventHandler)) {
          currentHandlers.push(eventHandler);
        }
      }
      once(eventName, eventHandler) {
        const onceFn = (...args) => {
          this.removeListener(eventName, onceFn);
          eventHandler.apply(this, args);
        };
        this.on(eventName, onceFn);
      }
      emit(eventName, ...args) {
        this._getHandlersByEventName(eventName).forEach((eventHandler) => {
          try {
            eventHandler.apply(this, args);
          } catch (error2) {
            console.error(error2);
          }
        });
      }
      removeListener(eventName, eventHandler) {
        const currentHandlers = this._getHandlersByEventName(eventName);
        const index = currentHandlers.indexOf(eventHandler);
        if (index > -1) {
          currentHandlers.splice(index, 1);
        }
      }
      removeAllListeners(eventName) {
        if (this.events[eventName] !== undefined) {
          this.events[eventName].length = 0;
        }
      }
      reset() {
        this.events = {};
      }
    }
    globalState.eventEmitter = new EventEmitter;
    const on = (eventName, eventHandler) => {
      if (globalState.eventEmitter) {
        globalState.eventEmitter.on(eventName, eventHandler);
      }
    };
    const once = (eventName, eventHandler) => {
      if (globalState.eventEmitter) {
        globalState.eventEmitter.once(eventName, eventHandler);
      }
    };
    const off = (eventName, eventHandler) => {
      if (!globalState.eventEmitter) {
        return;
      }
      if (!eventName) {
        globalState.eventEmitter.reset();
        return;
      }
      if (eventHandler) {
        globalState.eventEmitter.removeListener(eventName, eventHandler);
      } else {
        globalState.eventEmitter.removeAllListeners(eventName);
      }
    };
    var staticMethods = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      argsToParams,
      bindClickHandler,
      clickCancel,
      clickConfirm,
      clickDeny,
      enableLoading: showLoading,
      fire,
      getActions,
      getCancelButton,
      getCloseButton,
      getConfirmButton,
      getContainer,
      getDenyButton,
      getFocusableElements,
      getFooter,
      getHtmlContainer,
      getIcon,
      getIconContent,
      getImage,
      getInputLabel,
      getLoader,
      getPopup,
      getProgressSteps,
      getTimerLeft,
      getTimerProgressBar,
      getTitle,
      getValidationMessage,
      increaseTimer,
      isDeprecatedParameter,
      isLoading,
      isTimerRunning,
      isUpdatableParameter,
      isValidParameter,
      isVisible,
      mixin,
      off,
      on,
      once,
      resumeTimer,
      showLoading,
      stopTimer,
      toggleTimer
    });

    class Timer {
      constructor(callback, delay) {
        this.callback = callback;
        this.remaining = delay;
        this.running = false;
        this.start();
      }
      start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date;
          this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
      }
      stop() {
        if (this.started && this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date().getTime() - this.started.getTime();
        }
        return this.remaining;
      }
      increase(n) {
        const running = this.running;
        if (running) {
          this.stop();
        }
        this.remaining += n;
        if (running) {
          this.start();
        }
        return this.remaining;
      }
      getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }
        return this.remaining;
      }
      isRunning() {
        return this.running;
      }
    }
    const swalStringParams = ["swal-title", "swal-html", "swal-footer"];
    const getTemplateParams = (params) => {
      const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
      if (!template) {
        return {};
      }
      const templateContent = template.content;
      showWarningsForElements(templateContent);
      const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
      return result;
    };
    const getSwalParams = (templateContent) => {
      const result = {};
      const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
      swalParams.forEach((param) => {
        showWarningsForAttributes(param, ["name", "value"]);
        const paramName = param.getAttribute("name");
        const value = param.getAttribute("value");
        if (!paramName || !value) {
          return;
        }
        if (paramName in defaultParams && typeof defaultParams[paramName] === "boolean") {
          result[paramName] = value !== "false";
        } else if (paramName in defaultParams && typeof defaultParams[paramName] === "object") {
          result[paramName] = JSON.parse(value);
        } else {
          result[paramName] = value;
        }
      });
      return result;
    };
    const getSwalFunctionParams = (templateContent) => {
      const result = {};
      const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
      swalFunctions.forEach((param) => {
        const paramName = param.getAttribute("name");
        const value = param.getAttribute("value");
        if (!paramName || !value) {
          return;
        }
        result[paramName] = new Function(`return ${value}`)();
      });
      return result;
    };
    const getSwalButtons = (templateContent) => {
      const result = {};
      const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
      swalButtons.forEach((button) => {
        showWarningsForAttributes(button, ["type", "color", "aria-label"]);
        const type = button.getAttribute("type");
        if (!type || !["confirm", "cancel", "deny"].includes(type)) {
          return;
        }
        result[`${type}ButtonText`] = button.innerHTML;
        result[`show${capitalizeFirstLetter(type)}Button`] = true;
        const color = button.getAttribute("color");
        if (color !== null) {
          result[`${type}ButtonColor`] = color;
        }
        const ariaLabel = button.getAttribute("aria-label");
        if (ariaLabel !== null) {
          result[`${type}ButtonAriaLabel`] = ariaLabel;
        }
      });
      return result;
    };
    const getSwalImage = (templateContent) => {
      const result = {};
      const image = templateContent.querySelector("swal-image");
      if (image) {
        showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
        const src = image.getAttribute("src");
        if (src !== null)
          result.imageUrl = src || undefined;
        const width = image.getAttribute("width");
        if (width !== null)
          result.imageWidth = width || undefined;
        const height = image.getAttribute("height");
        if (height !== null)
          result.imageHeight = height || undefined;
        const alt = image.getAttribute("alt");
        if (alt !== null)
          result.imageAlt = alt || undefined;
      }
      return result;
    };
    const getSwalIcon = (templateContent) => {
      const result = {};
      const icon = templateContent.querySelector("swal-icon");
      if (icon) {
        showWarningsForAttributes(icon, ["type", "color"]);
        if (icon.hasAttribute("type")) {
          result.icon = icon.getAttribute("type");
        }
        if (icon.hasAttribute("color")) {
          result.iconColor = icon.getAttribute("color");
        }
        result.iconHtml = icon.innerHTML;
      }
      return result;
    };
    const getSwalInput = (templateContent) => {
      const result = {};
      const input = templateContent.querySelector("swal-input");
      if (input) {
        showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
        result.input = input.getAttribute("type") || "text";
        if (input.hasAttribute("label")) {
          result.inputLabel = input.getAttribute("label");
        }
        if (input.hasAttribute("placeholder")) {
          result.inputPlaceholder = input.getAttribute("placeholder");
        }
        if (input.hasAttribute("value")) {
          result.inputValue = input.getAttribute("value");
        }
      }
      const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
      if (inputOptions.length) {
        result.inputOptions = {};
        inputOptions.forEach((option) => {
          showWarningsForAttributes(option, ["value"]);
          const optionValue = option.getAttribute("value");
          if (!optionValue) {
            return;
          }
          const optionName = option.innerHTML;
          result.inputOptions[optionValue] = optionName;
        });
      }
      return result;
    };
    const getSwalStringParams = (templateContent, paramNames) => {
      const result = {};
      for (const i in paramNames) {
        const paramName = paramNames[i];
        const tag = templateContent.querySelector(paramName);
        if (tag) {
          showWarningsForAttributes(tag, []);
          result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
        }
      }
      return result;
    };
    const showWarningsForElements = (templateContent) => {
      const allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      Array.from(templateContent.children).forEach((el) => {
        const tagName = el.tagName.toLowerCase();
        if (!allowedElements.includes(tagName)) {
          warn(`Unrecognized element <${tagName}>`);
        }
      });
    };
    const showWarningsForAttributes = (el, allowedAttributes) => {
      Array.from(el.attributes).forEach((attribute) => {
        if (allowedAttributes.indexOf(attribute.name) === -1) {
          warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`]);
        }
      });
    };
    const SHOW_CLASS_TIMEOUT = 10;
    const openPopup = (params) => {
      var _globalState$eventEmi, _globalState$eventEmi2;
      const container = getContainer();
      const popup = getPopup();
      if (!container || !popup) {
        return;
      }
      if (typeof params.willOpen === "function") {
        params.willOpen(popup);
      }
      (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === undefined || _globalState$eventEmi.emit("willOpen", popup);
      const bodyStyles = window.getComputedStyle(document.body);
      const initialBodyOverflow = bodyStyles.overflowY;
      addClasses(container, popup, params);
      setTimeout(() => {
        setScrollingVisibility(container, popup);
      }, SHOW_CLASS_TIMEOUT);
      if (isModal()) {
        fixScrollContainer(container, params.scrollbarPadding !== undefined ? params.scrollbarPadding : false, initialBodyOverflow);
        setAriaHidden();
      }
      if (isIOS && params.backdrop === false && popup.scrollHeight > container.clientHeight) {
        container.style.pointerEvents = "auto";
      }
      if (!isToast() && !globalState.previousActiveElement) {
        globalState.previousActiveElement = document.activeElement;
      }
      if (typeof params.didOpen === "function") {
        const didOpen = params.didOpen;
        setTimeout(() => didOpen(popup));
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === undefined || _globalState$eventEmi2.emit("didOpen", popup);
    };
    const swalOpenAnimationFinished = (event) => {
      const popup = getPopup();
      if (!popup || event.target !== popup) {
        return;
      }
      const container = getContainer();
      if (!container) {
        return;
      }
      popup.removeEventListener("animationend", swalOpenAnimationFinished);
      popup.removeEventListener("transitionend", swalOpenAnimationFinished);
      container.style.overflowY = "auto";
      removeClass(container, swalClasses["no-transition"]);
    };
    const setScrollingVisibility = (container, popup) => {
      if (hasCssAnimation(popup)) {
        container.style.overflowY = "hidden";
        popup.addEventListener("animationend", swalOpenAnimationFinished);
        popup.addEventListener("transitionend", swalOpenAnimationFinished);
      } else {
        container.style.overflowY = "auto";
      }
    };
    const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
      iOSfix();
      if (scrollbarPadding && initialBodyOverflow !== "hidden") {
        replaceScrollbarWithPadding(initialBodyOverflow);
      }
      setTimeout(() => {
        container.scrollTop = 0;
      });
    };
    const addClasses = (container, popup, params) => {
      var _params$showClass;
      if ((_params$showClass = params.showClass) !== null && _params$showClass !== undefined && _params$showClass.backdrop) {
        addClass(container, params.showClass.backdrop);
      }
      if (params.animation) {
        popup.style.setProperty("opacity", "0", "important");
        show(popup, "grid");
        setTimeout(() => {
          var _params$showClass2;
          if ((_params$showClass2 = params.showClass) !== null && _params$showClass2 !== undefined && _params$showClass2.popup) {
            addClass(popup, params.showClass.popup);
          }
          popup.style.removeProperty("opacity");
        }, SHOW_CLASS_TIMEOUT);
      } else {
        show(popup, "grid");
      }
      addClass([document.documentElement, document.body], swalClasses.shown);
      if (params.heightAuto && params.backdrop && !params.toast) {
        addClass([document.documentElement, document.body], swalClasses["height-auto"]);
      }
    };
    var defaultInputValidators = {
      email: (string, validationMessage) => {
        return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
      },
      url: (string, validationMessage) => {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
      }
    };
    function setDefaultInputValidators(params) {
      if (params.inputValidator) {
        return;
      }
      if (params.input === "email") {
        params.inputValidator = defaultInputValidators["email"];
      }
      if (params.input === "url") {
        params.inputValidator = defaultInputValidators["url"];
      }
    }
    function validateCustomTargetElement(params) {
      if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
        warn('Target parameter is not valid, defaulting to "body"');
        params.target = "body";
      }
    }
    function setParameters(params) {
      setDefaultInputValidators(params);
      if (params.showLoaderOnConfirm && !params.preConfirm) {
        warn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
` + `showLoaderOnConfirm should be used together with preConfirm, see usage example:
` + "https://sweetalert2.github.io/#ajax-request");
      }
      validateCustomTargetElement(params);
      if (typeof params.title === "string") {
        params.title = params.title.split(`
`).join("<br />");
      }
      init(params);
    }
    let currentInstance;
    var _promise = /* @__PURE__ */ new WeakMap;

    class SweetAlert {
      constructor(...args) {
        _classPrivateFieldInitSpec(this, _promise, Promise.resolve({
          isConfirmed: false,
          isDenied: false,
          isDismissed: true
        }));
        if (typeof window === "undefined") {
          return;
        }
        currentInstance = this;
        const outerParams = Object.freeze(this.constructor.argsToParams(args));
        this.params = outerParams;
        this.isAwaitingPromise = false;
        _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
      }
      _main(userParams, mixinParams = {}) {
        showWarningsForParams(Object.assign({}, mixinParams, userParams));
        if (globalState.currentInstance) {
          const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
          const {
            isAwaitingPromise
          } = globalState.currentInstance;
          globalState.currentInstance._destroy();
          if (!isAwaitingPromise) {
            swalPromiseResolve({
              isDismissed: true
            });
          }
          if (isModal()) {
            unsetAriaHidden();
          }
        }
        globalState.currentInstance = currentInstance;
        const innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams);
        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        }
        clearTimeout(globalState.restoreFocusTimeout);
        const domCache = populateDomCache(currentInstance);
        render(currentInstance, innerParams);
        privateProps.innerParams.set(currentInstance, innerParams);
        return swalPromise(currentInstance, domCache, innerParams);
      }
      then(onFulfilled) {
        return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
      }
      finally(onFinally) {
        return _classPrivateFieldGet2(_promise, this).finally(onFinally);
      }
    }
    const swalPromise = (instance, domCache, innerParams) => {
      return new Promise((resolve, reject) => {
        const dismissWith = (dismiss) => {
          instance.close({
            isDismissed: true,
            dismiss,
            isConfirmed: false,
            isDenied: false
          });
        };
        privateMethods.swalPromiseResolve.set(instance, resolve);
        privateMethods.swalPromiseReject.set(instance, reject);
        domCache.confirmButton.onclick = () => {
          handleConfirmButtonClick(instance);
        };
        domCache.denyButton.onclick = () => {
          handleDenyButtonClick(instance);
        };
        domCache.cancelButton.onclick = () => {
          handleCancelButtonClick(instance, dismissWith);
        };
        domCache.closeButton.onclick = () => {
          dismissWith(DismissReason.close);
        };
        handlePopupClick(innerParams, domCache, dismissWith);
        addKeydownHandler(globalState, innerParams, dismissWith);
        handleInputOptionsAndValue(instance, innerParams);
        openPopup(innerParams);
        setupTimer(globalState, innerParams, dismissWith);
        initFocus(domCache, innerParams);
        setTimeout(() => {
          domCache.container.scrollTop = 0;
        });
      });
    };
    const prepareParams = (userParams, mixinParams) => {
      const templateParams = getTemplateParams(userParams);
      const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
      params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
      params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
      if (params.animation === false) {
        params.showClass = {
          backdrop: "swal2-noanimation"
        };
        params.hideClass = {};
      }
      return params;
    };
    const populateDomCache = (instance) => {
      const domCache = {
        popup: getPopup(),
        container: getContainer(),
        actions: getActions(),
        confirmButton: getConfirmButton(),
        denyButton: getDenyButton(),
        cancelButton: getCancelButton(),
        loader: getLoader(),
        closeButton: getCloseButton(),
        validationMessage: getValidationMessage(),
        progressSteps: getProgressSteps()
      };
      privateProps.domCache.set(instance, domCache);
      return domCache;
    };
    const setupTimer = (globalState2, innerParams, dismissWith) => {
      const timerProgressBar = getTimerProgressBar();
      hide(timerProgressBar);
      if (innerParams.timer) {
        globalState2.timeout = new Timer(() => {
          dismissWith("timer");
          delete globalState2.timeout;
        }, innerParams.timer);
        if (innerParams.timerProgressBar && timerProgressBar) {
          show(timerProgressBar);
          applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
          setTimeout(() => {
            if (globalState2.timeout && globalState2.timeout.running) {
              animateTimerProgressBar(innerParams.timer);
            }
          });
        }
      }
    };
    const initFocus = (domCache, innerParams) => {
      if (innerParams.toast) {
        return;
      }
      if (!callIfFunction(innerParams.allowEnterKey)) {
        warnAboutDeprecation("allowEnterKey", "preConfirm: () => false");
        domCache.popup.focus();
        return;
      }
      if (focusAutofocus(domCache)) {
        return;
      }
      if (focusButton(domCache, innerParams)) {
        return;
      }
      setFocus(-1, 1);
    };
    const focusAutofocus = (domCache) => {
      const autofocusElements = Array.from(domCache.popup.querySelectorAll("[autofocus]"));
      for (const autofocusElement of autofocusElements) {
        if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
          autofocusElement.focus();
          return true;
        }
      }
      return false;
    };
    const focusButton = (domCache, innerParams) => {
      if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
        domCache.denyButton.focus();
        return true;
      }
      if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
        domCache.cancelButton.focus();
        return true;
      }
      if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
        domCache.confirmButton.focus();
        return true;
      }
      return false;
    };
    SweetAlert.prototype.disableButtons = disableButtons;
    SweetAlert.prototype.enableButtons = enableButtons;
    SweetAlert.prototype.getInput = getInput;
    SweetAlert.prototype.disableInput = disableInput;
    SweetAlert.prototype.enableInput = enableInput;
    SweetAlert.prototype.hideLoading = hideLoading;
    SweetAlert.prototype.disableLoading = hideLoading;
    SweetAlert.prototype.showValidationMessage = showValidationMessage;
    SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
    SweetAlert.prototype.close = close;
    SweetAlert.prototype.closePopup = close;
    SweetAlert.prototype.closeModal = close;
    SweetAlert.prototype.closeToast = close;
    SweetAlert.prototype.rejectPromise = rejectPromise;
    SweetAlert.prototype.update = update;
    SweetAlert.prototype._destroy = _destroy;
    Object.assign(SweetAlert, staticMethods);
    Object.keys(instanceMethods).forEach((key) => {
      SweetAlert[key] = function(...args) {
        if (currentInstance && currentInstance[key]) {
          return currentInstance[key](...args);
        }
        return;
      };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = "11.26.25";
    const Swal = SweetAlert;
    Swal.default = Swal;
    return Swal;
  });
  if (typeof exports !== "undefined" && exports.Sweetalert2) {
    exports.swal = exports.sweetAlert = exports.Swal = exports.SweetAlert = exports.Sweetalert2;
  }
  typeof document != "undefined" && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e2) {
        n.innerText = t;
      }
  }(document, ":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");
});

// node_modules/js-chess-engine/dist/types/board.types.js
var require_board_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InternalColor = exports.Piece = undefined;
  var Piece;
  (function(Piece2) {
    Piece2[Piece2["EMPTY"] = 0] = "EMPTY";
    Piece2[Piece2["WHITE_PAWN"] = 1] = "WHITE_PAWN";
    Piece2[Piece2["WHITE_KNIGHT"] = 2] = "WHITE_KNIGHT";
    Piece2[Piece2["WHITE_BISHOP"] = 3] = "WHITE_BISHOP";
    Piece2[Piece2["WHITE_ROOK"] = 4] = "WHITE_ROOK";
    Piece2[Piece2["WHITE_QUEEN"] = 5] = "WHITE_QUEEN";
    Piece2[Piece2["WHITE_KING"] = 6] = "WHITE_KING";
    Piece2[Piece2["BLACK_PAWN"] = 7] = "BLACK_PAWN";
    Piece2[Piece2["BLACK_KNIGHT"] = 8] = "BLACK_KNIGHT";
    Piece2[Piece2["BLACK_BISHOP"] = 9] = "BLACK_BISHOP";
    Piece2[Piece2["BLACK_ROOK"] = 10] = "BLACK_ROOK";
    Piece2[Piece2["BLACK_QUEEN"] = 11] = "BLACK_QUEEN";
    Piece2[Piece2["BLACK_KING"] = 12] = "BLACK_KING";
  })(Piece || (exports.Piece = Piece = {}));
  var InternalColor;
  (function(InternalColor2) {
    InternalColor2[InternalColor2["WHITE"] = 0] = "WHITE";
    InternalColor2[InternalColor2["BLACK"] = 1] = "BLACK";
  })(InternalColor || (exports.InternalColor = InternalColor = {}));
});

// node_modules/js-chess-engine/dist/types/move.types.js
var require_move_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MoveOrderType = exports.CastlingType = exports.PromotionPiece = exports.MoveFlag = undefined;
  var MoveFlag;
  (function(MoveFlag2) {
    MoveFlag2[MoveFlag2["NONE"] = 0] = "NONE";
    MoveFlag2[MoveFlag2["EN_PASSANT"] = 1] = "EN_PASSANT";
    MoveFlag2[MoveFlag2["CASTLING"] = 2] = "CASTLING";
    MoveFlag2[MoveFlag2["PROMOTION"] = 4] = "PROMOTION";
    MoveFlag2[MoveFlag2["PAWN_DOUBLE_PUSH"] = 8] = "PAWN_DOUBLE_PUSH";
    MoveFlag2[MoveFlag2["CAPTURE"] = 16] = "CAPTURE";
  })(MoveFlag || (exports.MoveFlag = MoveFlag = {}));
  var PromotionPiece;
  (function(PromotionPiece2) {
    PromotionPiece2[PromotionPiece2["QUEEN"] = 5] = "QUEEN";
    PromotionPiece2[PromotionPiece2["ROOK"] = 4] = "ROOK";
    PromotionPiece2[PromotionPiece2["BISHOP"] = 3] = "BISHOP";
    PromotionPiece2[PromotionPiece2["KNIGHT"] = 2] = "KNIGHT";
  })(PromotionPiece || (exports.PromotionPiece = PromotionPiece = {}));
  var CastlingType;
  (function(CastlingType2) {
    CastlingType2[CastlingType2["NONE"] = 0] = "NONE";
    CastlingType2[CastlingType2["WHITE_SHORT"] = 1] = "WHITE_SHORT";
    CastlingType2[CastlingType2["WHITE_LONG"] = 2] = "WHITE_LONG";
    CastlingType2[CastlingType2["BLACK_SHORT"] = 3] = "BLACK_SHORT";
    CastlingType2[CastlingType2["BLACK_LONG"] = 4] = "BLACK_LONG";
  })(CastlingType || (exports.CastlingType = CastlingType = {}));
  var MoveOrderType;
  (function(MoveOrderType2) {
    MoveOrderType2[MoveOrderType2["TT_MOVE"] = 1e6] = "TT_MOVE";
    MoveOrderType2[MoveOrderType2["WINNING_CAPTURE"] = 1e5] = "WINNING_CAPTURE";
    MoveOrderType2[MoveOrderType2["KILLER_1"] = 90000] = "KILLER_1";
    MoveOrderType2[MoveOrderType2["KILLER_2"] = 80000] = "KILLER_2";
    MoveOrderType2[MoveOrderType2["HISTORY"] = 0] = "HISTORY";
    MoveOrderType2[MoveOrderType2["LOSING_CAPTURE"] = -1e4] = "LOSING_CAPTURE";
  })(MoveOrderType || (exports.MoveOrderType = MoveOrderType = {}));
});

// node_modules/js-chess-engine/dist/types/ai.types.js
var require_ai_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TTEntryType = undefined;
  var TTEntryType;
  (function(TTEntryType2) {
    TTEntryType2[TTEntryType2["EXACT"] = 0] = "EXACT";
    TTEntryType2[TTEntryType2["LOWERBOUND"] = 1] = "LOWERBOUND";
    TTEntryType2[TTEntryType2["UPPERBOUND"] = 2] = "UPPERBOUND";
  })(TTEntryType || (exports.TTEntryType = TTEntryType = {}));
});

// node_modules/js-chess-engine/dist/types/index.js
var require_types = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_board_types(), exports);
  __exportStar(require_move_types(), exports);
  __exportStar(require_ai_types(), exports);
});

// node_modules/js-chess-engine/dist/utils/constants.js
var require_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CASTLING = exports.ROWS = exports.COLUMNS = exports.TOTAL_SQUARES = exports.BOARD_SIZE = undefined;
  exports.BOARD_SIZE = 8;
  exports.TOTAL_SQUARES = 64;
  exports.COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H"];
  exports.ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"];
  exports.CASTLING = {
    WHITE_SHORT: {
      kingFrom: 4,
      kingTo: 6,
      rookFrom: 7,
      rookTo: 5
    },
    WHITE_LONG: {
      kingFrom: 4,
      kingTo: 2,
      rookFrom: 0,
      rookTo: 3
    },
    BLACK_SHORT: {
      kingFrom: 60,
      kingTo: 62,
      rookFrom: 63,
      rookTo: 61
    },
    BLACK_LONG: {
      kingFrom: 60,
      kingTo: 58,
      rookFrom: 56,
      rookTo: 59
    }
  };
});

// node_modules/js-chess-engine/dist/core/Board.js
var require_Board = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createEmptyBoard = createEmptyBoard;
  exports.createStartingBoard = createStartingBoard;
  exports.setPiece = setPiece;
  exports.removePiece = removePiece;
  exports.getPiece = getPiece;
  exports.getBitboard = getBitboard;
  exports.copyBoard = copyBoard;
  exports.isPieceColor = isPieceColor;
  exports.getPieceColor = getPieceColor;
  exports.oppositeColor = oppositeColor;
  exports.isSquareEmpty = isSquareEmpty;
  exports.isSquareEnemy = isSquareEnemy;
  exports.isSquareFriendly = isSquareFriendly;
  var types_1 = require_types();
  var constants_1 = require_constants();
  function createEmptyBoard() {
    return {
      mailbox: new Int8Array(constants_1.TOTAL_SQUARES),
      whitePawns: 0n,
      whiteKnights: 0n,
      whiteBishops: 0n,
      whiteRooks: 0n,
      whiteQueens: 0n,
      whiteKing: 0n,
      blackPawns: 0n,
      blackKnights: 0n,
      blackBishops: 0n,
      blackRooks: 0n,
      blackQueens: 0n,
      blackKing: 0n,
      whitePieces: 0n,
      blackPieces: 0n,
      allPieces: 0n,
      turn: types_1.InternalColor.WHITE,
      castlingRights: {
        whiteShort: true,
        blackShort: true,
        whiteLong: true,
        blackLong: true
      },
      enPassantSquare: null,
      halfMoveClock: 0,
      fullMoveNumber: 1,
      zobristHash: 0n,
      isCheck: false,
      isCheckmate: false,
      isStalemate: false
    };
  }
  function createStartingBoard() {
    const board = createEmptyBoard();
    for (let i = 8;i < 16; i++) {
      setPiece(board, i, types_1.Piece.WHITE_PAWN);
    }
    for (let i = 48;i < 56; i++) {
      setPiece(board, i, types_1.Piece.BLACK_PAWN);
    }
    setPiece(board, 0, types_1.Piece.WHITE_ROOK);
    setPiece(board, 1, types_1.Piece.WHITE_KNIGHT);
    setPiece(board, 2, types_1.Piece.WHITE_BISHOP);
    setPiece(board, 3, types_1.Piece.WHITE_QUEEN);
    setPiece(board, 4, types_1.Piece.WHITE_KING);
    setPiece(board, 5, types_1.Piece.WHITE_BISHOP);
    setPiece(board, 6, types_1.Piece.WHITE_KNIGHT);
    setPiece(board, 7, types_1.Piece.WHITE_ROOK);
    setPiece(board, 56, types_1.Piece.BLACK_ROOK);
    setPiece(board, 57, types_1.Piece.BLACK_KNIGHT);
    setPiece(board, 58, types_1.Piece.BLACK_BISHOP);
    setPiece(board, 59, types_1.Piece.BLACK_QUEEN);
    setPiece(board, 60, types_1.Piece.BLACK_KING);
    setPiece(board, 61, types_1.Piece.BLACK_BISHOP);
    setPiece(board, 62, types_1.Piece.BLACK_KNIGHT);
    setPiece(board, 63, types_1.Piece.BLACK_ROOK);
    board.castlingRights = {
      whiteShort: true,
      whiteLong: true,
      blackShort: true,
      blackLong: true
    };
    return board;
  }
  function setPiece(board, index, piece) {
    const existingPiece = board.mailbox[index];
    if (existingPiece !== types_1.Piece.EMPTY) {
      removePiece(board, index);
    }
    board.mailbox[index] = piece;
    if (piece === types_1.Piece.EMPTY) {
      return;
    }
    const bitboard = 1n << BigInt(index);
    switch (piece) {
      case types_1.Piece.WHITE_PAWN:
        board.whitePawns |= bitboard;
        board.whitePieces |= bitboard;
        break;
      case types_1.Piece.WHITE_KNIGHT:
        board.whiteKnights |= bitboard;
        board.whitePieces |= bitboard;
        break;
      case types_1.Piece.WHITE_BISHOP:
        board.whiteBishops |= bitboard;
        board.whitePieces |= bitboard;
        break;
      case types_1.Piece.WHITE_ROOK:
        board.whiteRooks |= bitboard;
        board.whitePieces |= bitboard;
        break;
      case types_1.Piece.WHITE_QUEEN:
        board.whiteQueens |= bitboard;
        board.whitePieces |= bitboard;
        break;
      case types_1.Piece.WHITE_KING:
        board.whiteKing |= bitboard;
        board.whitePieces |= bitboard;
        break;
      case types_1.Piece.BLACK_PAWN:
        board.blackPawns |= bitboard;
        board.blackPieces |= bitboard;
        break;
      case types_1.Piece.BLACK_KNIGHT:
        board.blackKnights |= bitboard;
        board.blackPieces |= bitboard;
        break;
      case types_1.Piece.BLACK_BISHOP:
        board.blackBishops |= bitboard;
        board.blackPieces |= bitboard;
        break;
      case types_1.Piece.BLACK_ROOK:
        board.blackRooks |= bitboard;
        board.blackPieces |= bitboard;
        break;
      case types_1.Piece.BLACK_QUEEN:
        board.blackQueens |= bitboard;
        board.blackPieces |= bitboard;
        break;
      case types_1.Piece.BLACK_KING:
        board.blackKing |= bitboard;
        board.blackPieces |= bitboard;
        break;
    }
    board.allPieces = board.whitePieces | board.blackPieces;
  }
  function removePiece(board, index) {
    const piece = board.mailbox[index];
    if (piece === types_1.Piece.EMPTY) {
      return;
    }
    board.mailbox[index] = types_1.Piece.EMPTY;
    const bitboard = ~(1n << BigInt(index));
    switch (piece) {
      case types_1.Piece.WHITE_PAWN:
        board.whitePawns &= bitboard;
        board.whitePieces &= bitboard;
        break;
      case types_1.Piece.WHITE_KNIGHT:
        board.whiteKnights &= bitboard;
        board.whitePieces &= bitboard;
        break;
      case types_1.Piece.WHITE_BISHOP:
        board.whiteBishops &= bitboard;
        board.whitePieces &= bitboard;
        break;
      case types_1.Piece.WHITE_ROOK:
        board.whiteRooks &= bitboard;
        board.whitePieces &= bitboard;
        break;
      case types_1.Piece.WHITE_QUEEN:
        board.whiteQueens &= bitboard;
        board.whitePieces &= bitboard;
        break;
      case types_1.Piece.WHITE_KING:
        board.whiteKing &= bitboard;
        board.whitePieces &= bitboard;
        break;
      case types_1.Piece.BLACK_PAWN:
        board.blackPawns &= bitboard;
        board.blackPieces &= bitboard;
        break;
      case types_1.Piece.BLACK_KNIGHT:
        board.blackKnights &= bitboard;
        board.blackPieces &= bitboard;
        break;
      case types_1.Piece.BLACK_BISHOP:
        board.blackBishops &= bitboard;
        board.blackPieces &= bitboard;
        break;
      case types_1.Piece.BLACK_ROOK:
        board.blackRooks &= bitboard;
        board.blackPieces &= bitboard;
        break;
      case types_1.Piece.BLACK_QUEEN:
        board.blackQueens &= bitboard;
        board.blackPieces &= bitboard;
        break;
      case types_1.Piece.BLACK_KING:
        board.blackKing &= bitboard;
        board.blackPieces &= bitboard;
        break;
    }
    board.allPieces = board.whitePieces | board.blackPieces;
  }
  function getPiece(board, index) {
    return board.mailbox[index];
  }
  function getBitboard(board, piece) {
    switch (piece) {
      case types_1.Piece.WHITE_PAWN:
        return board.whitePawns;
      case types_1.Piece.WHITE_KNIGHT:
        return board.whiteKnights;
      case types_1.Piece.WHITE_BISHOP:
        return board.whiteBishops;
      case types_1.Piece.WHITE_ROOK:
        return board.whiteRooks;
      case types_1.Piece.WHITE_QUEEN:
        return board.whiteQueens;
      case types_1.Piece.WHITE_KING:
        return board.whiteKing;
      case types_1.Piece.BLACK_PAWN:
        return board.blackPawns;
      case types_1.Piece.BLACK_KNIGHT:
        return board.blackKnights;
      case types_1.Piece.BLACK_BISHOP:
        return board.blackBishops;
      case types_1.Piece.BLACK_ROOK:
        return board.blackRooks;
      case types_1.Piece.BLACK_QUEEN:
        return board.blackQueens;
      case types_1.Piece.BLACK_KING:
        return board.blackKing;
      default:
        return 0n;
    }
  }
  function copyBoard(source) {
    return {
      mailbox: new Int8Array(source.mailbox),
      whitePawns: source.whitePawns,
      whiteKnights: source.whiteKnights,
      whiteBishops: source.whiteBishops,
      whiteRooks: source.whiteRooks,
      whiteQueens: source.whiteQueens,
      whiteKing: source.whiteKing,
      blackPawns: source.blackPawns,
      blackKnights: source.blackKnights,
      blackBishops: source.blackBishops,
      blackRooks: source.blackRooks,
      blackQueens: source.blackQueens,
      blackKing: source.blackKing,
      whitePieces: source.whitePieces,
      blackPieces: source.blackPieces,
      allPieces: source.allPieces,
      turn: source.turn,
      castlingRights: { ...source.castlingRights },
      enPassantSquare: source.enPassantSquare,
      halfMoveClock: source.halfMoveClock,
      fullMoveNumber: source.fullMoveNumber,
      zobristHash: source.zobristHash,
      isCheck: source.isCheck,
      isCheckmate: source.isCheckmate,
      isStalemate: source.isStalemate
    };
  }
  function isPieceColor(piece, color) {
    if (piece === types_1.Piece.EMPTY) {
      return false;
    }
    if (color === types_1.InternalColor.WHITE) {
      return piece >= types_1.Piece.WHITE_PAWN && piece <= types_1.Piece.WHITE_KING;
    } else {
      return piece >= types_1.Piece.BLACK_PAWN && piece <= types_1.Piece.BLACK_KING;
    }
  }
  function getPieceColor(piece) {
    if (piece === types_1.Piece.EMPTY) {
      return null;
    }
    return piece >= types_1.Piece.WHITE_PAWN && piece <= types_1.Piece.WHITE_KING ? types_1.InternalColor.WHITE : types_1.InternalColor.BLACK;
  }
  function oppositeColor(color) {
    return color === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
  }
  function isSquareEmpty(board, index) {
    return board.mailbox[index] === types_1.Piece.EMPTY;
  }
  function isSquareEnemy(board, index, color) {
    const piece = board.mailbox[index];
    if (piece === types_1.Piece.EMPTY) {
      return false;
    }
    const pieceColor = getPieceColor(piece);
    return pieceColor !== null && pieceColor !== color;
  }
  function isSquareFriendly(board, index, color) {
    const piece = board.mailbox[index];
    if (piece === types_1.Piece.EMPTY) {
      return false;
    }
    return isPieceColor(piece, color);
  }
});

// node_modules/js-chess-engine/dist/utils/conversion.js
var require_conversion = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.squareToIndex = squareToIndex;
  exports.indexToSquare = indexToSquare;
  exports.getFileIndex = getFileIndex;
  exports.getRankIndex = getRankIndex;
  exports.getFile = getFile;
  exports.getRank = getRank;
  exports.fileRankToIndex = fileRankToIndex;
  exports.isValidSquare = isValidSquare;
  exports.isValidIndex = isValidIndex;
  exports.indexToBitboard = indexToBitboard;
  exports.squareToBitboard = squareToBitboard;
  exports.bitboardToIndices = bitboardToIndices;
  exports.getLowestSetBit = getLowestSetBit;
  exports.getHighestSetBit = getHighestSetBit;
  exports.popCount = popCount;
  exports.manhattanDistance = manhattanDistance;
  exports.chebyshevDistance = chebyshevDistance;
  exports.isOnEdge = isOnEdge;
  exports.isAFile = isAFile;
  exports.isHFile = isHFile;
  exports.isRank1 = isRank1;
  exports.isRank8 = isRank8;
  var constants_1 = require_constants();
  function squareToIndex(square) {
    const normalized = square.toUpperCase();
    if (normalized.length !== 2) {
      throw new Error(`Invalid square notation: ${square}`);
    }
    const file2 = normalized[0];
    const rank2 = normalized[1];
    const fileIndex = constants_1.COLUMNS.indexOf(file2);
    const rankIndex = constants_1.ROWS.indexOf(rank2);
    if (fileIndex === -1 || rankIndex === -1) {
      throw new Error(`Invalid square notation: ${square}`);
    }
    return rankIndex * 8 + fileIndex;
  }
  function indexToSquare(index) {
    if (index < 0 || index > 63) {
      throw new Error(`Invalid square index: ${index}`);
    }
    const fileIndex = index % 8;
    const rankIndex = Math.floor(index / 8);
    return `${constants_1.COLUMNS[fileIndex]}${constants_1.ROWS[rankIndex]}`;
  }
  function getFileIndex(index) {
    return index % 8;
  }
  function getRankIndex(index) {
    return Math.floor(index / 8);
  }
  function getFile(square) {
    const normalized = square.toUpperCase();
    const fileIndex = constants_1.COLUMNS.indexOf(normalized[0]);
    if (fileIndex === -1) {
      throw new Error(`Invalid square notation: ${square}`);
    }
    return fileIndex;
  }
  function getRank(square) {
    const normalized = square.toUpperCase();
    const rankIndex = constants_1.ROWS.indexOf(normalized[1]);
    if (rankIndex === -1) {
      throw new Error(`Invalid square notation: ${square}`);
    }
    return rankIndex;
  }
  function fileRankToIndex(file2, rank2) {
    return rank2 * 8 + file2;
  }
  function isValidSquare(square) {
    if (typeof square !== "string" || square.length !== 2) {
      return false;
    }
    const normalized = square.toUpperCase();
    const file2 = normalized[0];
    const rank2 = normalized[1];
    return constants_1.COLUMNS.includes(file2) && constants_1.ROWS.includes(rank2);
  }
  function isValidIndex(index) {
    return Number.isInteger(index) && index >= 0 && index <= 63;
  }
  function indexToBitboard(index) {
    return 1n << BigInt(index);
  }
  function squareToBitboard(square) {
    return indexToBitboard(squareToIndex(square));
  }
  function bitboardToIndices(bitboard) {
    const indices = [];
    let bb = bitboard;
    while (bb !== 0n) {
      const index = getLowestSetBit(bb);
      indices.push(index);
      bb &= bb - 1n;
    }
    return indices;
  }
  var DE_BRUIJN_64 = 0x03f79d71b4cb0a89n;
  var MASK_64 = 0xffffffffffffffffn;
  var DE_BRUIJN_TABLE = new Int8Array(64);
  for (let i = 0;i < 64; i++) {
    DE_BRUIJN_TABLE[Number(((1n << BigInt(i)) * DE_BRUIJN_64 & MASK_64) >> 58n)] = i;
  }
  function getLowestSetBit(bitboard) {
    if (bitboard === 0n)
      return -1;
    const isolated = bitboard & -bitboard;
    return DE_BRUIJN_TABLE[Number((isolated * DE_BRUIJN_64 & MASK_64) >> 58n)];
  }
  function getHighestSetBit(bitboard) {
    if (bitboard === 0n)
      return -1;
    let bb = bitboard;
    bb |= bb >> 1n;
    bb |= bb >> 2n;
    bb |= bb >> 4n;
    bb |= bb >> 8n;
    bb |= bb >> 16n;
    bb |= bb >> 32n;
    const msb = bb - (bb >> 1n);
    return DE_BRUIJN_TABLE[Number((msb * DE_BRUIJN_64 & MASK_64) >> 58n)];
  }
  function popCount(bitboard) {
    let count = 0;
    let bb = bitboard;
    while (bb !== 0n) {
      bb &= bb - 1n;
      count++;
    }
    return count;
  }
  function manhattanDistance(from, to) {
    const fromFile = getFileIndex(from);
    const fromRank = getRankIndex(from);
    const toFile = getFileIndex(to);
    const toRank = getRankIndex(to);
    return Math.abs(fromFile - toFile) + Math.abs(fromRank - toRank);
  }
  function chebyshevDistance(from, to) {
    const fromFile = getFileIndex(from);
    const fromRank = getRankIndex(from);
    const toFile = getFileIndex(to);
    const toRank = getRankIndex(to);
    return Math.max(Math.abs(fromFile - toFile), Math.abs(fromRank - toRank));
  }
  function isOnEdge(index) {
    const file2 = getFileIndex(index);
    const rank2 = getRankIndex(index);
    return file2 === 0 || file2 === 7 || rank2 === 0 || rank2 === 7;
  }
  function isAFile(index) {
    return getFileIndex(index) === 0;
  }
  function isHFile(index) {
    return getFileIndex(index) === 7;
  }
  function isRank1(index) {
    return getRankIndex(index) === 0;
  }
  function isRank8(index) {
    return getRankIndex(index) === 7;
  }
});

// node_modules/js-chess-engine/dist/core/Position.js
var require_Position = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.KNIGHT_ATTACKS = exports.KING_ATTACKS = exports.NOT_RANK_8 = exports.NOT_RANK_1 = exports.NOT_GH_FILE = exports.NOT_AB_FILE = exports.NOT_H_FILE = exports.NOT_A_FILE = exports.EDGE_MASK = exports.ANTI_DIAGONAL_MASKS = exports.DIAGONAL_MASKS = exports.RANK_MASKS = exports.FILE_MASKS = undefined;
  exports.shiftNorth = shiftNorth;
  exports.shiftSouth = shiftSouth;
  exports.shiftEast = shiftEast;
  exports.shiftWest = shiftWest;
  exports.shiftNorthEast = shiftNorthEast;
  exports.shiftNorthWest = shiftNorthWest;
  exports.shiftSouthEast = shiftSouthEast;
  exports.shiftSouthWest = shiftSouthWest;
  exports.getFileMask = getFileMask;
  exports.getRankMask = getRankMask;
  exports.getDiagonalMask = getDiagonalMask;
  exports.getAntiDiagonalMask = getAntiDiagonalMask;
  exports.getRookAttacks = getRookAttacks;
  exports.getBishopAttacks = getBishopAttacks;
  exports.getQueenAttacks = getQueenAttacks;
  exports.initializeAttackTables = initializeAttackTables;
  exports.getKingAttacks = getKingAttacks;
  exports.getKnightAttacks = getKnightAttacks;
  exports.getWhitePawnAttacks = getWhitePawnAttacks;
  exports.getBlackPawnAttacks = getBlackPawnAttacks;
  exports.getWhitePawnsAttacks = getWhitePawnsAttacks;
  exports.getBlackPawnsAttacks = getBlackPawnsAttacks;
  var conversion_1 = require_conversion();
  exports.FILE_MASKS = [
    0x0101010101010101n,
    0x0202020202020202n,
    0x0404040404040404n,
    0x0808080808080808n,
    0x1010101010101010n,
    0x2020202020202020n,
    0x4040404040404040n,
    0x8080808080808080n
  ];
  exports.RANK_MASKS = [
    0x00000000000000ffn,
    0x000000000000ff00n,
    0x0000000000ff0000n,
    0x00000000ff000000n,
    0x000000ff00000000n,
    0x0000ff0000000000n,
    0x00ff000000000000n,
    0xff00000000000000n
  ];
  exports.DIAGONAL_MASKS = [
    0x0000000000000001n,
    0x0000000000000102n,
    0x0000000000010204n,
    0x0000000001020408n,
    0x0000000102040810n,
    0x0000010204081020n,
    0x0001020408102040n,
    0x0102040810204080n,
    0x0204081020408000n,
    0x0408102040800000n,
    0x0810204080000000n,
    0x1020408000000000n,
    0x2040800000000000n,
    0x4080000000000000n,
    0x8000000000000000n
  ];
  exports.ANTI_DIAGONAL_MASKS = [
    0x0000000000000080n,
    0x0000000000008040n,
    0x0000000000804020n,
    0x0000000080402010n,
    0x0000008040201008n,
    0x0000804020100804n,
    0x0080402010080402n,
    0x8040201008040201n,
    0x4020100804020100n,
    0x2010080402010000n,
    0x1008040201000000n,
    0x0804020100000000n,
    0x0402010000000000n,
    0x0201000000000000n,
    0x0100000000000000n
  ];
  exports.EDGE_MASK = 0xff818181818181ffn;
  exports.NOT_A_FILE = 0xfefefefefefefefen;
  exports.NOT_H_FILE = 0x7f7f7f7f7f7f7f7fn;
  exports.NOT_AB_FILE = 0xfcfcfcfcfcfcfcfcn;
  exports.NOT_GH_FILE = 0x3f3f3f3f3f3f3f3fn;
  exports.NOT_RANK_1 = 0xffffffffffffff00n;
  exports.NOT_RANK_8 = 0x00ffffffffffffffn;
  function shiftNorth(bb) {
    return (bb & exports.NOT_RANK_8) << 8n;
  }
  function shiftSouth(bb) {
    return (bb & exports.NOT_RANK_1) >> 8n;
  }
  function shiftEast(bb) {
    return (bb & exports.NOT_H_FILE) << 1n;
  }
  function shiftWest(bb) {
    return (bb & exports.NOT_A_FILE) >> 1n;
  }
  function shiftNorthEast(bb) {
    return (bb & exports.NOT_H_FILE & exports.NOT_RANK_8) << 9n;
  }
  function shiftNorthWest(bb) {
    return (bb & exports.NOT_A_FILE & exports.NOT_RANK_8) << 7n;
  }
  function shiftSouthEast(bb) {
    return (bb & exports.NOT_H_FILE & exports.NOT_RANK_1) >> 7n;
  }
  function shiftSouthWest(bb) {
    return (bb & exports.NOT_A_FILE & exports.NOT_RANK_1) >> 9n;
  }
  function getFileMask(index) {
    const file2 = (0, conversion_1.getFileIndex)(index);
    return exports.FILE_MASKS[file2];
  }
  function getRankMask(index) {
    const rank2 = (0, conversion_1.getRankIndex)(index);
    return exports.RANK_MASKS[rank2];
  }
  function getDiagonalMask(index) {
    const file2 = (0, conversion_1.getFileIndex)(index);
    const rank2 = (0, conversion_1.getRankIndex)(index);
    const diagonalIndex = 7 + rank2 - file2;
    return exports.DIAGONAL_MASKS[diagonalIndex];
  }
  function getAntiDiagonalMask(index) {
    const file2 = (0, conversion_1.getFileIndex)(index);
    const rank2 = (0, conversion_1.getRankIndex)(index);
    const antiDiagonalIndex = rank2 + file2;
    return exports.ANTI_DIAGONAL_MASKS[antiDiagonalIndex];
  }
  var RAY_TABLE = Array.from({ length: 8 }, () => new Array(64));
  function initRayTables() {
    const directions = [8, -8, 1, -1, 9, 7, -7, -9];
    for (let dirIdx = 0;dirIdx < 8; dirIdx++) {
      const dir = directions[dirIdx];
      for (let sq = 0;sq < 64; sq++) {
        let attacks = 0n;
        let current = sq;
        while (true) {
          const next = current + dir;
          if (next < 0 || next > 63)
            break;
          const cf = current % 8;
          const nf = next % 8;
          const fd = Math.abs(nf - cf);
          if (dir === 1 || dir === -1) {
            if (fd !== 1)
              break;
          } else if (dir === 8 || dir === -8) {
            if (fd !== 0)
              break;
          } else {
            if (fd !== 1)
              break;
          }
          attacks |= 1n << BigInt(next);
          current = next;
        }
        RAY_TABLE[dirIdx][sq] = attacks;
      }
    }
  }
  initRayTables();
  function positiveRay(dirIdx, square, occupied) {
    const ray = RAY_TABLE[dirIdx][square];
    const blockers = ray & occupied;
    if (blockers === 0n)
      return ray;
    const first = (0, conversion_1.getLowestSetBit)(blockers);
    return ray ^ RAY_TABLE[dirIdx][first];
  }
  function negativeRay(dirIdx, square, occupied) {
    const ray = RAY_TABLE[dirIdx][square];
    const blockers = ray & occupied;
    if (blockers === 0n)
      return ray;
    const first = (0, conversion_1.getHighestSetBit)(blockers);
    return ray ^ RAY_TABLE[dirIdx][first];
  }
  function getRookAttacks(square, occupied) {
    return positiveRay(0, square, occupied) | negativeRay(1, square, occupied) | positiveRay(2, square, occupied) | negativeRay(3, square, occupied);
  }
  function getBishopAttacks(square, occupied) {
    return positiveRay(4, square, occupied) | positiveRay(5, square, occupied) | negativeRay(6, square, occupied) | negativeRay(7, square, occupied);
  }
  function getQueenAttacks(square, occupied) {
    return getRookAttacks(square, occupied) | getBishopAttacks(square, occupied);
  }
  exports.KING_ATTACKS = new Array(64);
  exports.KNIGHT_ATTACKS = new Array(64);
  function initializeAttackTables() {
    for (let sq = 0;sq < 64; sq++) {
      let attacks = 0n;
      const sqBit = 1n << BigInt(sq);
      attacks |= shiftNorth(sqBit);
      attacks |= shiftSouth(sqBit);
      attacks |= shiftEast(sqBit);
      attacks |= shiftWest(sqBit);
      attacks |= shiftNorthEast(sqBit);
      attacks |= shiftNorthWest(sqBit);
      attacks |= shiftSouthEast(sqBit);
      attacks |= shiftSouthWest(sqBit);
      exports.KING_ATTACKS[sq] = attacks;
    }
    for (let sq = 0;sq < 64; sq++) {
      let attacks = 0n;
      const sqBit = 1n << BigInt(sq);
      const nnw = shiftNorth(shiftNorth(shiftWest(sqBit)));
      const nne = shiftNorth(shiftNorth(shiftEast(sqBit)));
      const nee = shiftEast(shiftEast(shiftNorth(sqBit)));
      const see = shiftEast(shiftEast(shiftSouth(sqBit)));
      const sse = shiftSouth(shiftSouth(shiftEast(sqBit)));
      const ssw = shiftSouth(shiftSouth(shiftWest(sqBit)));
      const sww = shiftWest(shiftWest(shiftSouth(sqBit)));
      const nww = shiftWest(shiftWest(shiftNorth(sqBit)));
      attacks = nnw | nne | nee | see | sse | ssw | sww | nww;
      exports.KNIGHT_ATTACKS[sq] = attacks;
    }
  }
  initializeAttackTables();
  function getKingAttacks(square) {
    const attacks = exports.KING_ATTACKS[square];
    return attacks !== undefined ? attacks : 0n;
  }
  function getKnightAttacks(square) {
    const attacks = exports.KNIGHT_ATTACKS[square];
    return attacks !== undefined ? attacks : 0n;
  }
  function getWhitePawnAttacks(square) {
    const sqBit = 1n << BigInt(square);
    return shiftNorthEast(sqBit) | shiftNorthWest(sqBit);
  }
  function getBlackPawnAttacks(square) {
    const sqBit = 1n << BigInt(square);
    return shiftSouthEast(sqBit) | shiftSouthWest(sqBit);
  }
  function getWhitePawnsAttacks(pawns) {
    return shiftNorthEast(pawns) | shiftNorthWest(pawns);
  }
  function getBlackPawnsAttacks(pawns) {
    return shiftSouthEast(pawns) | shiftSouthWest(pawns);
  }
});

// node_modules/js-chess-engine/dist/core/AttackDetector.js
var require_AttackDetector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isSquareAttacked = isSquareAttacked;
  exports.isKingInCheck = isKingInCheck;
  exports.getAttackedSquares = getAttackedSquares;
  exports.getAttackers = getAttackers;
  exports.wouldLeaveKingInCheck = wouldLeaveKingInCheck;
  var types_1 = require_types();
  var Position_1 = require_Position();
  var conversion_1 = require_conversion();
  function isSquareAttacked(board, square, attackerColor) {
    const attackers = attackerColor === types_1.InternalColor.WHITE ? board.whitePieces : board.blackPieces;
    const pawnAttackOrigins = attackerColor === types_1.InternalColor.WHITE ? (0, Position_1.getBlackPawnAttacks)(square) : (0, Position_1.getWhitePawnAttacks)(square);
    const pawns = attackerColor === types_1.InternalColor.WHITE ? board.whitePawns : board.blackPawns;
    if ((pawnAttackOrigins & pawns) !== 0n) {
      return true;
    }
    const knightAttacks = (0, Position_1.getKnightAttacks)(square);
    const knights = attackerColor === types_1.InternalColor.WHITE ? board.whiteKnights : board.blackKnights;
    if ((knightAttacks & knights) !== 0n) {
      return true;
    }
    const bishopAttacks = (0, Position_1.getBishopAttacks)(square, board.allPieces);
    const bishops = attackerColor === types_1.InternalColor.WHITE ? board.whiteBishops : board.blackBishops;
    const queens = attackerColor === types_1.InternalColor.WHITE ? board.whiteQueens : board.blackQueens;
    if ((bishopAttacks & (bishops | queens)) !== 0n) {
      return true;
    }
    const rookAttacks = (0, Position_1.getRookAttacks)(square, board.allPieces);
    const rooks = attackerColor === types_1.InternalColor.WHITE ? board.whiteRooks : board.blackRooks;
    if ((rookAttacks & (rooks | queens)) !== 0n) {
      return true;
    }
    const kingAttacks = (0, Position_1.getKingAttacks)(square);
    const king = attackerColor === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    if ((kingAttacks & king) !== 0n) {
      return true;
    }
    return false;
  }
  function isKingInCheck(board) {
    const kingBitboard = board.turn === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    if (kingBitboard === 0n) {
      return false;
    }
    const kingSquare = (0, conversion_1.getLowestSetBit)(kingBitboard);
    const opponentColor = board.turn === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
    return isSquareAttacked(board, kingSquare, opponentColor);
  }
  function getAttackedSquares(board, attackerColor) {
    let attacked = 0n;
    const pawns = attackerColor === types_1.InternalColor.WHITE ? board.whitePawns : board.blackPawns;
    if (attackerColor === types_1.InternalColor.WHITE) {
      attacked |= (pawns & 0xfefefefefefefefen) << 9n;
      attacked |= (pawns & 0x7f7f7f7f7f7f7f7fn) << 7n;
    } else {
      attacked |= (pawns & 0xfefefefefefefefen) >> 7n;
      attacked |= (pawns & 0x7f7f7f7f7f7f7f7fn) >> 9n;
    }
    const knights = attackerColor === types_1.InternalColor.WHITE ? board.whiteKnights : board.blackKnights;
    let knightsBB = knights;
    while (knightsBB !== 0n) {
      const sq = (0, conversion_1.getLowestSetBit)(knightsBB);
      attacked |= (0, Position_1.getKnightAttacks)(sq);
      knightsBB &= knightsBB - 1n;
    }
    const bishops = attackerColor === types_1.InternalColor.WHITE ? board.whiteBishops : board.blackBishops;
    let bishopsBB = bishops;
    while (bishopsBB !== 0n) {
      const sq = (0, conversion_1.getLowestSetBit)(bishopsBB);
      attacked |= (0, Position_1.getBishopAttacks)(sq, board.allPieces);
      bishopsBB &= bishopsBB - 1n;
    }
    const rooks = attackerColor === types_1.InternalColor.WHITE ? board.whiteRooks : board.blackRooks;
    let rooksBB = rooks;
    while (rooksBB !== 0n) {
      const sq = (0, conversion_1.getLowestSetBit)(rooksBB);
      attacked |= (0, Position_1.getRookAttacks)(sq, board.allPieces);
      rooksBB &= rooksBB - 1n;
    }
    const queens = attackerColor === types_1.InternalColor.WHITE ? board.whiteQueens : board.blackQueens;
    let queensBB = queens;
    while (queensBB !== 0n) {
      const sq = (0, conversion_1.getLowestSetBit)(queensBB);
      attacked |= (0, Position_1.getQueenAttacks)(sq, board.allPieces);
      queensBB &= queensBB - 1n;
    }
    const king = attackerColor === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    if (king !== 0n) {
      const kingSquare = (0, conversion_1.getLowestSetBit)(king);
      attacked |= (0, Position_1.getKingAttacks)(kingSquare);
    }
    return attacked;
  }
  function getAttackers(board, square, attackerColor) {
    let attackers = 0n;
    const pawnAttackOrigins = attackerColor === types_1.InternalColor.WHITE ? (0, Position_1.getBlackPawnAttacks)(square) : (0, Position_1.getWhitePawnAttacks)(square);
    const pawns = attackerColor === types_1.InternalColor.WHITE ? board.whitePawns : board.blackPawns;
    attackers |= pawnAttackOrigins & pawns;
    const knightAttacks = (0, Position_1.getKnightAttacks)(square);
    const knights = attackerColor === types_1.InternalColor.WHITE ? board.whiteKnights : board.blackKnights;
    attackers |= knightAttacks & knights;
    const bishopAttacks = (0, Position_1.getBishopAttacks)(square, board.allPieces);
    const bishops = attackerColor === types_1.InternalColor.WHITE ? board.whiteBishops : board.blackBishops;
    const queens = attackerColor === types_1.InternalColor.WHITE ? board.whiteQueens : board.blackQueens;
    attackers |= bishopAttacks & (bishops | queens);
    const rookAttacks = (0, Position_1.getRookAttacks)(square, board.allPieces);
    const rooks = attackerColor === types_1.InternalColor.WHITE ? board.whiteRooks : board.blackRooks;
    attackers |= rookAttacks & (rooks | queens);
    const kingAttacks = (0, Position_1.getKingAttacks)(square);
    const king = attackerColor === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    attackers |= kingAttacks & king;
    return attackers;
  }
  function wouldLeaveKingInCheck(board, from, to) {
    const piece = board.mailbox[from];
    const capturedPiece = board.mailbox[to];
    const color = board.turn;
    board.mailbox[from] = types_1.Piece.EMPTY;
    board.mailbox[to] = piece;
    const fromBit = 1n << BigInt(from);
    const toBit = 1n << BigInt(to);
    const moveBits = fromBit | toBit;
    let originalPieceBB;
    let originalCapturedBB = null;
    switch (piece) {
      case types_1.Piece.WHITE_PAWN:
        originalPieceBB = board.whitePawns;
        board.whitePawns = board.whitePawns & ~fromBit | toBit;
        break;
      case types_1.Piece.WHITE_KNIGHT:
        originalPieceBB = board.whiteKnights;
        board.whiteKnights = board.whiteKnights & ~fromBit | toBit;
        break;
      case types_1.Piece.WHITE_BISHOP:
        originalPieceBB = board.whiteBishops;
        board.whiteBishops = board.whiteBishops & ~fromBit | toBit;
        break;
      case types_1.Piece.WHITE_ROOK:
        originalPieceBB = board.whiteRooks;
        board.whiteRooks = board.whiteRooks & ~fromBit | toBit;
        break;
      case types_1.Piece.WHITE_QUEEN:
        originalPieceBB = board.whiteQueens;
        board.whiteQueens = board.whiteQueens & ~fromBit | toBit;
        break;
      case types_1.Piece.WHITE_KING:
        originalPieceBB = board.whiteKing;
        board.whiteKing = board.whiteKing & ~fromBit | toBit;
        break;
      case types_1.Piece.BLACK_PAWN:
        originalPieceBB = board.blackPawns;
        board.blackPawns = board.blackPawns & ~fromBit | toBit;
        break;
      case types_1.Piece.BLACK_KNIGHT:
        originalPieceBB = board.blackKnights;
        board.blackKnights = board.blackKnights & ~fromBit | toBit;
        break;
      case types_1.Piece.BLACK_BISHOP:
        originalPieceBB = board.blackBishops;
        board.blackBishops = board.blackBishops & ~fromBit | toBit;
        break;
      case types_1.Piece.BLACK_ROOK:
        originalPieceBB = board.blackRooks;
        board.blackRooks = board.blackRooks & ~fromBit | toBit;
        break;
      case types_1.Piece.BLACK_QUEEN:
        originalPieceBB = board.blackQueens;
        board.blackQueens = board.blackQueens & ~fromBit | toBit;
        break;
      case types_1.Piece.BLACK_KING:
        originalPieceBB = board.blackKing;
        board.blackKing = board.blackKing & ~fromBit | toBit;
        break;
      default:
        originalPieceBB = 0n;
    }
    if (capturedPiece !== types_1.Piece.EMPTY) {
      switch (capturedPiece) {
        case types_1.Piece.WHITE_PAWN:
          originalCapturedBB = board.whitePawns;
          board.whitePawns &= ~toBit;
          break;
        case types_1.Piece.WHITE_KNIGHT:
          originalCapturedBB = board.whiteKnights;
          board.whiteKnights &= ~toBit;
          break;
        case types_1.Piece.WHITE_BISHOP:
          originalCapturedBB = board.whiteBishops;
          board.whiteBishops &= ~toBit;
          break;
        case types_1.Piece.WHITE_ROOK:
          originalCapturedBB = board.whiteRooks;
          board.whiteRooks &= ~toBit;
          break;
        case types_1.Piece.WHITE_QUEEN:
          originalCapturedBB = board.whiteQueens;
          board.whiteQueens &= ~toBit;
          break;
        case types_1.Piece.BLACK_PAWN:
          originalCapturedBB = board.blackPawns;
          board.blackPawns &= ~toBit;
          break;
        case types_1.Piece.BLACK_KNIGHT:
          originalCapturedBB = board.blackKnights;
          board.blackKnights &= ~toBit;
          break;
        case types_1.Piece.BLACK_BISHOP:
          originalCapturedBB = board.blackBishops;
          board.blackBishops &= ~toBit;
          break;
        case types_1.Piece.BLACK_ROOK:
          originalCapturedBB = board.blackRooks;
          board.blackRooks &= ~toBit;
          break;
        case types_1.Piece.BLACK_QUEEN:
          originalCapturedBB = board.blackQueens;
          board.blackQueens &= ~toBit;
          break;
      }
    }
    const originalWhitePieces = board.whitePieces;
    const originalBlackPieces = board.blackPieces;
    const originalAllPieces = board.allPieces;
    board.whitePieces = board.whitePawns | board.whiteKnights | board.whiteBishops | board.whiteRooks | board.whiteQueens | board.whiteKing;
    board.blackPieces = board.blackPawns | board.blackKnights | board.blackBishops | board.blackRooks | board.blackQueens | board.blackKing;
    board.allPieces = board.whitePieces | board.blackPieces;
    const inCheck = isKingInCheck(board);
    board.mailbox[from] = piece;
    board.mailbox[to] = capturedPiece;
    switch (piece) {
      case types_1.Piece.WHITE_PAWN:
        board.whitePawns = originalPieceBB;
        break;
      case types_1.Piece.WHITE_KNIGHT:
        board.whiteKnights = originalPieceBB;
        break;
      case types_1.Piece.WHITE_BISHOP:
        board.whiteBishops = originalPieceBB;
        break;
      case types_1.Piece.WHITE_ROOK:
        board.whiteRooks = originalPieceBB;
        break;
      case types_1.Piece.WHITE_QUEEN:
        board.whiteQueens = originalPieceBB;
        break;
      case types_1.Piece.WHITE_KING:
        board.whiteKing = originalPieceBB;
        break;
      case types_1.Piece.BLACK_PAWN:
        board.blackPawns = originalPieceBB;
        break;
      case types_1.Piece.BLACK_KNIGHT:
        board.blackKnights = originalPieceBB;
        break;
      case types_1.Piece.BLACK_BISHOP:
        board.blackBishops = originalPieceBB;
        break;
      case types_1.Piece.BLACK_ROOK:
        board.blackRooks = originalPieceBB;
        break;
      case types_1.Piece.BLACK_QUEEN:
        board.blackQueens = originalPieceBB;
        break;
      case types_1.Piece.BLACK_KING:
        board.blackKing = originalPieceBB;
        break;
    }
    if (originalCapturedBB !== null) {
      switch (capturedPiece) {
        case types_1.Piece.WHITE_PAWN:
          board.whitePawns = originalCapturedBB;
          break;
        case types_1.Piece.WHITE_KNIGHT:
          board.whiteKnights = originalCapturedBB;
          break;
        case types_1.Piece.WHITE_BISHOP:
          board.whiteBishops = originalCapturedBB;
          break;
        case types_1.Piece.WHITE_ROOK:
          board.whiteRooks = originalCapturedBB;
          break;
        case types_1.Piece.WHITE_QUEEN:
          board.whiteQueens = originalCapturedBB;
          break;
        case types_1.Piece.BLACK_PAWN:
          board.blackPawns = originalCapturedBB;
          break;
        case types_1.Piece.BLACK_KNIGHT:
          board.blackKnights = originalCapturedBB;
          break;
        case types_1.Piece.BLACK_BISHOP:
          board.blackBishops = originalCapturedBB;
          break;
        case types_1.Piece.BLACK_ROOK:
          board.blackRooks = originalCapturedBB;
          break;
        case types_1.Piece.BLACK_QUEEN:
          board.blackQueens = originalCapturedBB;
          break;
      }
    }
    board.whitePieces = originalWhitePieces;
    board.blackPieces = originalBlackPieces;
    board.allPieces = originalAllPieces;
    return inCheck;
  }
});

// node_modules/js-chess-engine/dist/core/zobrist.js
var require_zobrist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.initZobrist = initZobrist;
  exports.computeZobristHash = computeZobristHash;
  exports.updateHashMove = updateHashMove;
  exports.updateHashCapture = updateHashCapture;
  exports.toggleSide = toggleSide;
  exports.updateHashCastling = updateHashCastling;
  exports.updateHashEnPassant = updateHashEnPassant;
  exports.addPieceToHash = addPieceToHash;
  exports.removePieceFromHash = removePieceFromHash;
  var types_1 = require_types();
  var constants_1 = require_constants();
  var pieceKeys = [];
  var sideKey = 0n;
  var castlingKeys = [];
  var enPassantKeys = [];
  function initZobrist() {
    let seed = 12345n;
    const rand64 = () => {
      seed ^= seed << 13n;
      seed ^= seed >> 7n;
      seed ^= seed << 17n;
      return seed;
    };
    pieceKeys = [];
    for (let piece = 0;piece <= 12; piece++) {
      pieceKeys[piece] = [];
      for (let square = 0;square < constants_1.TOTAL_SQUARES; square++) {
        pieceKeys[piece][square] = rand64();
      }
    }
    sideKey = rand64();
    castlingKeys = [
      rand64(),
      rand64(),
      rand64(),
      rand64()
    ];
    enPassantKeys = [];
    for (let file2 = 0;file2 < 8; file2++) {
      enPassantKeys[file2] = rand64();
    }
  }
  function computeZobristHash(board) {
    let hash = 0n;
    for (let square = 0;square < constants_1.TOTAL_SQUARES; square++) {
      const piece = board.mailbox[square];
      if (piece !== types_1.Piece.EMPTY) {
        hash ^= pieceKeys[piece][square];
      }
    }
    if (board.turn === types_1.InternalColor.WHITE) {
      hash ^= sideKey;
    }
    if (board.castlingRights.whiteShort) {
      hash ^= castlingKeys[0];
    }
    if (board.castlingRights.whiteLong) {
      hash ^= castlingKeys[1];
    }
    if (board.castlingRights.blackShort) {
      hash ^= castlingKeys[2];
    }
    if (board.castlingRights.blackLong) {
      hash ^= castlingKeys[3];
    }
    if (board.enPassantSquare !== null) {
      const file2 = board.enPassantSquare % 8;
      hash ^= enPassantKeys[file2];
    }
    return hash;
  }
  function updateHashMove(hash, piece, from, to) {
    hash ^= pieceKeys[piece][from];
    hash ^= pieceKeys[piece][to];
    return hash;
  }
  function updateHashCapture(hash, capturedPiece, square) {
    hash ^= pieceKeys[capturedPiece][square];
    return hash;
  }
  function toggleSide(hash) {
    return hash ^ sideKey;
  }
  function updateHashCastling(hash, whiteShortOld, whiteShortNew, whiteLongOld, whiteLongNew, blackShortOld, blackShortNew, blackLongOld, blackLongNew) {
    if (whiteShortOld)
      hash ^= castlingKeys[0];
    if (whiteLongOld)
      hash ^= castlingKeys[1];
    if (blackShortOld)
      hash ^= castlingKeys[2];
    if (blackLongOld)
      hash ^= castlingKeys[3];
    if (whiteShortNew)
      hash ^= castlingKeys[0];
    if (whiteLongNew)
      hash ^= castlingKeys[1];
    if (blackShortNew)
      hash ^= castlingKeys[2];
    if (blackLongNew)
      hash ^= castlingKeys[3];
    return hash;
  }
  function updateHashEnPassant(hash, oldSquare, newSquare) {
    if (oldSquare !== null) {
      const oldFile = oldSquare % 8;
      hash ^= enPassantKeys[oldFile];
    }
    if (newSquare !== null) {
      const newFile = newSquare % 8;
      hash ^= enPassantKeys[newFile];
    }
    return hash;
  }
  function addPieceToHash(hash, piece, square) {
    return hash ^ pieceKeys[piece][square];
  }
  function removePieceFromHash(hash, piece, square) {
    return hash ^ pieceKeys[piece][square];
  }
  initZobrist();
});

// node_modules/js-chess-engine/dist/core/MoveGenerator.js
var require_MoveGenerator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.generateLegalMoves = generateLegalMoves;
  exports.generatePseudoLegalMoves = generatePseudoLegalMoves;
  exports.getMovesForPiece = getMovesForPiece;
  exports.isMoveLegal = isMoveLegal;
  exports.applyMoveComplete = applyMoveComplete;
  var types_1 = require_types();
  var Position_1 = require_Position();
  var AttackDetector_1 = require_AttackDetector();
  var conversion_1 = require_conversion();
  var Board_1 = require_Board();
  var constants_1 = require_constants();
  var zobrist_1 = require_zobrist();
  function generateLegalMoves(board) {
    const pseudoLegalMoves = generatePseudoLegalMoves(board);
    const currentColor = board.turn;
    const ourKingBitboard = currentColor === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    if (ourKingBitboard === 0n) {
      return pseudoLegalMoves;
    }
    return pseudoLegalMoves.filter((move) => {
      if (move.flags & types_1.MoveFlag.CASTLING) {
        return true;
      }
      const testBoard = (0, Board_1.copyBoard)(board);
      const originalTurn = testBoard.turn;
      makeMove(testBoard, move);
      const kingBitboardAfter = originalTurn === types_1.InternalColor.WHITE ? testBoard.whiteKing : testBoard.blackKing;
      if (kingBitboardAfter === 0n) {
        return true;
      }
      const kingSquare = (0, conversion_1.getLowestSetBit)(kingBitboardAfter);
      const opponentColor = originalTurn === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
      return !(0, AttackDetector_1.isSquareAttacked)(testBoard, kingSquare, opponentColor);
    });
  }
  function makeMove(board, move) {
    if (move.flags & types_1.MoveFlag.CASTLING) {
      (0, Board_1.removePiece)(board, move.from);
      (0, Board_1.setPiece)(board, move.to, move.piece);
      const color = board.turn;
      if (color === types_1.InternalColor.WHITE) {
        if (move.to === constants_1.CASTLING.WHITE_SHORT.kingTo) {
          (0, Board_1.removePiece)(board, constants_1.CASTLING.WHITE_SHORT.rookFrom);
          (0, Board_1.setPiece)(board, constants_1.CASTLING.WHITE_SHORT.rookTo, types_1.Piece.WHITE_ROOK);
        } else {
          (0, Board_1.removePiece)(board, constants_1.CASTLING.WHITE_LONG.rookFrom);
          (0, Board_1.setPiece)(board, constants_1.CASTLING.WHITE_LONG.rookTo, types_1.Piece.WHITE_ROOK);
        }
      } else {
        if (move.to === constants_1.CASTLING.BLACK_SHORT.kingTo) {
          (0, Board_1.removePiece)(board, constants_1.CASTLING.BLACK_SHORT.rookFrom);
          (0, Board_1.setPiece)(board, constants_1.CASTLING.BLACK_SHORT.rookTo, types_1.Piece.BLACK_ROOK);
        } else {
          (0, Board_1.removePiece)(board, constants_1.CASTLING.BLACK_LONG.rookFrom);
          (0, Board_1.setPiece)(board, constants_1.CASTLING.BLACK_LONG.rookTo, types_1.Piece.BLACK_ROOK);
        }
      }
    } else if (move.flags & types_1.MoveFlag.EN_PASSANT) {
      (0, Board_1.removePiece)(board, move.from);
      (0, Board_1.setPiece)(board, move.to, move.piece);
      const capturedPawnSquare = board.turn === types_1.InternalColor.WHITE ? move.to - 8 : move.to + 8;
      (0, Board_1.removePiece)(board, capturedPawnSquare);
    } else if (move.flags & types_1.MoveFlag.PROMOTION) {
      (0, Board_1.removePiece)(board, move.from);
      if (move.capturedPiece !== types_1.Piece.EMPTY) {
        (0, Board_1.removePiece)(board, move.to);
      }
      (0, Board_1.setPiece)(board, move.to, move.promotionPiece);
    } else {
      (0, Board_1.removePiece)(board, move.from);
      if (move.capturedPiece !== types_1.Piece.EMPTY) {
        (0, Board_1.removePiece)(board, move.to);
      }
      (0, Board_1.setPiece)(board, move.to, move.piece);
    }
    if (move.flags & types_1.MoveFlag.PAWN_DOUBLE_PUSH) {
      const epSquare = board.turn === types_1.InternalColor.WHITE ? move.from + 8 : move.from - 8;
      board.enPassantSquare = epSquare;
    } else {
      board.enPassantSquare = null;
    }
    board.turn = board.turn === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
  }
  function generatePseudoLegalMoves(board) {
    const moves = [];
    const color = board.turn;
    const friendlyPieces = color === types_1.InternalColor.WHITE ? board.whitePieces : board.blackPieces;
    const enemyPieces = color === types_1.InternalColor.WHITE ? board.blackPieces : board.whitePieces;
    generatePawnMoves(board, moves, color, friendlyPieces, enemyPieces);
    generateKnightMoves(board, moves, color, friendlyPieces);
    generateBishopMoves(board, moves, color, friendlyPieces);
    generateRookMoves(board, moves, color, friendlyPieces);
    generateQueenMoves(board, moves, color, friendlyPieces);
    generateKingMoves(board, moves, color, friendlyPieces);
    generateCastlingMoves(board, moves, color);
    return moves;
  }
  function generatePawnMoves(board, moves, color, _friendlyPieces, enemyPieces) {
    const pawns = color === types_1.InternalColor.WHITE ? board.whitePawns : board.blackPawns;
    const pawnPiece = color === types_1.InternalColor.WHITE ? types_1.Piece.WHITE_PAWN : types_1.Piece.BLACK_PAWN;
    const promotionRank = color === types_1.InternalColor.WHITE ? 7 : 0;
    const empty = ~board.allPieces;
    if (color === types_1.InternalColor.WHITE) {
      let singlePushBB = (0, Position_1.shiftNorth)(pawns) & empty;
      while (singlePushBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(singlePushBB);
        singlePushBB &= singlePushBB - 1n;
        const from = to - 8;
        const toRank = (0, conversion_1.getRankIndex)(to);
        if (toRank === promotionRank) {
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.WHITE_QUEEN));
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.WHITE_ROOK));
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.WHITE_BISHOP));
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.WHITE_KNIGHT));
        } else {
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.NONE));
        }
      }
      const doublePushSource = pawns & 0x000000000000ff00n;
      let doublePushBB = (0, Position_1.shiftNorth)((0, Position_1.shiftNorth)(doublePushSource) & empty) & empty;
      while (doublePushBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(doublePushBB);
        doublePushBB &= doublePushBB - 1n;
        const from = to - 16;
        moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PAWN_DOUBLE_PUSH));
      }
      let capturesNEBB = (0, Position_1.shiftNorthEast)(pawns) & enemyPieces;
      while (capturesNEBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(capturesNEBB);
        capturesNEBB &= capturesNEBB - 1n;
        const from = to - 9;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const toRank = (0, conversion_1.getRankIndex)(to);
        if (toRank === promotionRank) {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_QUEEN));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_ROOK));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_BISHOP));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_KNIGHT));
        } else {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.CAPTURE));
        }
      }
      let capturesNWBB = (0, Position_1.shiftNorthWest)(pawns) & enemyPieces;
      while (capturesNWBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(capturesNWBB);
        capturesNWBB &= capturesNWBB - 1n;
        const from = to - 7;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const toRank = (0, conversion_1.getRankIndex)(to);
        if (toRank === promotionRank) {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_QUEEN));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_ROOK));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_BISHOP));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.WHITE_KNIGHT));
        } else {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.CAPTURE));
        }
      }
      if (board.enPassantSquare !== null) {
        const epSquare = board.enPassantSquare;
        const epTarget = 1n << BigInt(epSquare);
        const canCaptureEP = ((0, Position_1.shiftSouthWest)(epTarget) | (0, Position_1.shiftSouthEast)(epTarget)) & pawns;
        let epBB = canCaptureEP;
        while (epBB !== 0n) {
          const from = (0, conversion_1.getLowestSetBit)(epBB);
          epBB &= epBB - 1n;
          const capturedPiece = types_1.Piece.BLACK_PAWN;
          moves.push(createMove(from, epSquare, pawnPiece, capturedPiece, types_1.MoveFlag.EN_PASSANT | types_1.MoveFlag.CAPTURE));
        }
      }
    } else {
      let singlePushBB = (0, Position_1.shiftSouth)(pawns) & empty;
      while (singlePushBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(singlePushBB);
        singlePushBB &= singlePushBB - 1n;
        const from = to + 8;
        const toRank = (0, conversion_1.getRankIndex)(to);
        if (toRank === promotionRank) {
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.BLACK_QUEEN));
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.BLACK_ROOK));
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.BLACK_BISHOP));
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PROMOTION, types_1.Piece.BLACK_KNIGHT));
        } else {
          moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.NONE));
        }
      }
      const doublePushSource = pawns & 0x00ff000000000000n;
      let doublePushBB = (0, Position_1.shiftSouth)((0, Position_1.shiftSouth)(doublePushSource) & empty) & empty;
      while (doublePushBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(doublePushBB);
        doublePushBB &= doublePushBB - 1n;
        const from = to + 16;
        moves.push(createMove(from, to, pawnPiece, types_1.Piece.EMPTY, types_1.MoveFlag.PAWN_DOUBLE_PUSH));
      }
      let capturesSEBB = (0, Position_1.shiftSouthEast)(pawns) & enemyPieces;
      while (capturesSEBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(capturesSEBB);
        capturesSEBB &= capturesSEBB - 1n;
        const from = to + 7;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const toRank = (0, conversion_1.getRankIndex)(to);
        if (toRank === promotionRank) {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_QUEEN));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_ROOK));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_BISHOP));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_KNIGHT));
        } else {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.CAPTURE));
        }
      }
      let capturesSWBB = (0, Position_1.shiftSouthWest)(pawns) & enemyPieces;
      while (capturesSWBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(capturesSWBB);
        capturesSWBB &= capturesSWBB - 1n;
        const from = to + 9;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const toRank = (0, conversion_1.getRankIndex)(to);
        if (toRank === promotionRank) {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_QUEEN));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_ROOK));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_BISHOP));
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.PROMOTION | types_1.MoveFlag.CAPTURE, types_1.Piece.BLACK_KNIGHT));
        } else {
          moves.push(createMove(from, to, pawnPiece, capturedPiece, types_1.MoveFlag.CAPTURE));
        }
      }
      if (board.enPassantSquare !== null) {
        const epSquare = board.enPassantSquare;
        const epTarget = 1n << BigInt(epSquare);
        const canCaptureEP = ((0, Position_1.shiftNorthWest)(epTarget) | (0, Position_1.shiftNorthEast)(epTarget)) & pawns;
        let epBB = canCaptureEP;
        while (epBB !== 0n) {
          const from = (0, conversion_1.getLowestSetBit)(epBB);
          epBB &= epBB - 1n;
          const capturedPiece = types_1.Piece.WHITE_PAWN;
          moves.push(createMove(from, epSquare, pawnPiece, capturedPiece, types_1.MoveFlag.EN_PASSANT | types_1.MoveFlag.CAPTURE));
        }
      }
    }
  }
  function generateKnightMoves(board, moves, color, friendlyPieces) {
    const knights = color === types_1.InternalColor.WHITE ? board.whiteKnights : board.blackKnights;
    const knightPiece = color === types_1.InternalColor.WHITE ? types_1.Piece.WHITE_KNIGHT : types_1.Piece.BLACK_KNIGHT;
    let knightsBB = knights;
    while (knightsBB !== 0n) {
      const from = (0, conversion_1.getLowestSetBit)(knightsBB);
      const attacks = (0, Position_1.getKnightAttacks)(from) & ~friendlyPieces;
      let attacksBB = attacks;
      while (attacksBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(attacksBB);
        attacksBB &= attacksBB - 1n;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const flags = capturedPiece !== types_1.Piece.EMPTY ? types_1.MoveFlag.CAPTURE : types_1.MoveFlag.NONE;
        moves.push(createMove(from, to, knightPiece, capturedPiece, flags));
      }
      knightsBB &= knightsBB - 1n;
    }
  }
  function generateBishopMoves(board, moves, color, friendlyPieces) {
    const bishops = color === types_1.InternalColor.WHITE ? board.whiteBishops : board.blackBishops;
    const bishopPiece = color === types_1.InternalColor.WHITE ? types_1.Piece.WHITE_BISHOP : types_1.Piece.BLACK_BISHOP;
    let bishopsBB = bishops;
    while (bishopsBB !== 0n) {
      const from = (0, conversion_1.getLowestSetBit)(bishopsBB);
      const attacks = (0, Position_1.getBishopAttacks)(from, board.allPieces) & ~friendlyPieces;
      let attacksBB = attacks;
      while (attacksBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(attacksBB);
        attacksBB &= attacksBB - 1n;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const flags = capturedPiece !== types_1.Piece.EMPTY ? types_1.MoveFlag.CAPTURE : types_1.MoveFlag.NONE;
        moves.push(createMove(from, to, bishopPiece, capturedPiece, flags));
      }
      bishopsBB &= bishopsBB - 1n;
    }
  }
  function generateRookMoves(board, moves, color, friendlyPieces) {
    const rooks = color === types_1.InternalColor.WHITE ? board.whiteRooks : board.blackRooks;
    const rookPiece = color === types_1.InternalColor.WHITE ? types_1.Piece.WHITE_ROOK : types_1.Piece.BLACK_ROOK;
    let rooksBB = rooks;
    while (rooksBB !== 0n) {
      const from = (0, conversion_1.getLowestSetBit)(rooksBB);
      const attacks = (0, Position_1.getRookAttacks)(from, board.allPieces) & ~friendlyPieces;
      let attacksBB = attacks;
      while (attacksBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(attacksBB);
        attacksBB &= attacksBB - 1n;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const flags = capturedPiece !== types_1.Piece.EMPTY ? types_1.MoveFlag.CAPTURE : types_1.MoveFlag.NONE;
        moves.push(createMove(from, to, rookPiece, capturedPiece, flags));
      }
      rooksBB &= rooksBB - 1n;
    }
  }
  function generateQueenMoves(board, moves, color, friendlyPieces) {
    const queens = color === types_1.InternalColor.WHITE ? board.whiteQueens : board.blackQueens;
    const queenPiece = color === types_1.InternalColor.WHITE ? types_1.Piece.WHITE_QUEEN : types_1.Piece.BLACK_QUEEN;
    let queensBB = queens;
    while (queensBB !== 0n) {
      const from = (0, conversion_1.getLowestSetBit)(queensBB);
      const attacks = (0, Position_1.getQueenAttacks)(from, board.allPieces) & ~friendlyPieces;
      let attacksBB = attacks;
      while (attacksBB !== 0n) {
        const to = (0, conversion_1.getLowestSetBit)(attacksBB);
        attacksBB &= attacksBB - 1n;
        const capturedPiece = (0, Board_1.getPiece)(board, to);
        const flags = capturedPiece !== types_1.Piece.EMPTY ? types_1.MoveFlag.CAPTURE : types_1.MoveFlag.NONE;
        moves.push(createMove(from, to, queenPiece, capturedPiece, flags));
      }
      queensBB &= queensBB - 1n;
    }
  }
  function generateKingMoves(board, moves, color, friendlyPieces) {
    const king = color === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    const kingPiece = color === types_1.InternalColor.WHITE ? types_1.Piece.WHITE_KING : types_1.Piece.BLACK_KING;
    if (king === 0n)
      return;
    const from = (0, conversion_1.getLowestSetBit)(king);
    const attacks = (0, Position_1.getKingAttacks)(from) & ~friendlyPieces;
    let attacksBB = attacks;
    while (attacksBB !== 0n) {
      const to = (0, conversion_1.getLowestSetBit)(attacksBB);
      attacksBB &= attacksBB - 1n;
      const capturedPiece = (0, Board_1.getPiece)(board, to);
      const flags = capturedPiece !== types_1.Piece.EMPTY ? types_1.MoveFlag.CAPTURE : types_1.MoveFlag.NONE;
      moves.push(createMove(from, to, kingPiece, capturedPiece, flags));
    }
  }
  function generateCastlingMoves(board, moves, color) {
    const opponentColor = color === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
    if (color === types_1.InternalColor.WHITE) {
      if (board.castlingRights.whiteShort && (0, Board_1.getPiece)(board, constants_1.CASTLING.WHITE_SHORT.kingFrom) === types_1.Piece.WHITE_KING && (0, Board_1.getPiece)(board, constants_1.CASTLING.WHITE_SHORT.rookFrom) === types_1.Piece.WHITE_ROOK && (0, Board_1.isSquareEmpty)(board, 5) && (0, Board_1.isSquareEmpty)(board, 6) && !(0, AttackDetector_1.isSquareAttacked)(board, 4, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 5, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 6, opponentColor)) {
        moves.push(createMove(constants_1.CASTLING.WHITE_SHORT.kingFrom, constants_1.CASTLING.WHITE_SHORT.kingTo, types_1.Piece.WHITE_KING, types_1.Piece.EMPTY, types_1.MoveFlag.CASTLING));
      }
      if (board.castlingRights.whiteLong && (0, Board_1.getPiece)(board, constants_1.CASTLING.WHITE_LONG.kingFrom) === types_1.Piece.WHITE_KING && (0, Board_1.getPiece)(board, constants_1.CASTLING.WHITE_LONG.rookFrom) === types_1.Piece.WHITE_ROOK && (0, Board_1.isSquareEmpty)(board, 1) && (0, Board_1.isSquareEmpty)(board, 2) && (0, Board_1.isSquareEmpty)(board, 3) && !(0, AttackDetector_1.isSquareAttacked)(board, 4, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 3, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 2, opponentColor)) {
        moves.push(createMove(constants_1.CASTLING.WHITE_LONG.kingFrom, constants_1.CASTLING.WHITE_LONG.kingTo, types_1.Piece.WHITE_KING, types_1.Piece.EMPTY, types_1.MoveFlag.CASTLING));
      }
    } else {
      if (board.castlingRights.blackShort && (0, Board_1.getPiece)(board, constants_1.CASTLING.BLACK_SHORT.kingFrom) === types_1.Piece.BLACK_KING && (0, Board_1.getPiece)(board, constants_1.CASTLING.BLACK_SHORT.rookFrom) === types_1.Piece.BLACK_ROOK && (0, Board_1.isSquareEmpty)(board, 61) && (0, Board_1.isSquareEmpty)(board, 62) && !(0, AttackDetector_1.isSquareAttacked)(board, 60, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 61, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 62, opponentColor)) {
        moves.push(createMove(constants_1.CASTLING.BLACK_SHORT.kingFrom, constants_1.CASTLING.BLACK_SHORT.kingTo, types_1.Piece.BLACK_KING, types_1.Piece.EMPTY, types_1.MoveFlag.CASTLING));
      }
      if (board.castlingRights.blackLong && (0, Board_1.getPiece)(board, constants_1.CASTLING.BLACK_LONG.kingFrom) === types_1.Piece.BLACK_KING && (0, Board_1.getPiece)(board, constants_1.CASTLING.BLACK_LONG.rookFrom) === types_1.Piece.BLACK_ROOK && (0, Board_1.isSquareEmpty)(board, 57) && (0, Board_1.isSquareEmpty)(board, 58) && (0, Board_1.isSquareEmpty)(board, 59) && !(0, AttackDetector_1.isSquareAttacked)(board, 60, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 59, opponentColor) && !(0, AttackDetector_1.isSquareAttacked)(board, 58, opponentColor)) {
        moves.push(createMove(constants_1.CASTLING.BLACK_LONG.kingFrom, constants_1.CASTLING.BLACK_LONG.kingTo, types_1.Piece.BLACK_KING, types_1.Piece.EMPTY, types_1.MoveFlag.CASTLING));
      }
    }
  }
  function createMove(from, to, piece, capturedPiece, flags, promotionPiece) {
    return {
      from,
      to,
      piece,
      capturedPiece,
      flags,
      promotionPiece
    };
  }
  function getMovesForPiece(board, square) {
    const allMoves = generateLegalMoves(board);
    return allMoves.filter((move) => move.from === square);
  }
  function isMoveLegal(board, from, to) {
    const legalMoves = generateLegalMoves(board);
    return legalMoves.some((move) => move.from === from && move.to === to);
  }
  function applyMoveComplete(board, move) {
    const { from, to, piece, capturedPiece, flags, promotionPiece } = move;
    const oldEnPassant = board.enPassantSquare;
    const oldCastling = { ...board.castlingRights };
    board.enPassantSquare = null;
    if (capturedPiece !== types_1.Piece.EMPTY) {
      (0, Board_1.removePiece)(board, to);
      board.zobristHash = (0, zobrist_1.updateHashCapture)(board.zobristHash, capturedPiece, to);
      board.halfMoveClock = 0;
    } else {
      board.halfMoveClock++;
    }
    if (flags & types_1.MoveFlag.EN_PASSANT) {
      const captureSquare = board.turn === types_1.InternalColor.WHITE ? to - 8 : to + 8;
      const capturedPawn = board.turn === types_1.InternalColor.WHITE ? types_1.Piece.BLACK_PAWN : types_1.Piece.WHITE_PAWN;
      (0, Board_1.removePiece)(board, captureSquare);
      board.zobristHash = (0, zobrist_1.updateHashCapture)(board.zobristHash, capturedPawn, captureSquare);
      board.halfMoveClock = 0;
    }
    if (flags & types_1.MoveFlag.CASTLING) {
      if (to === constants_1.CASTLING.WHITE_SHORT.kingTo) {
        (0, Board_1.removePiece)(board, constants_1.CASTLING.WHITE_SHORT.rookFrom);
        (0, Board_1.setPiece)(board, constants_1.CASTLING.WHITE_SHORT.rookTo, types_1.Piece.WHITE_ROOK);
        board.zobristHash = (0, zobrist_1.updateHashMove)(board.zobristHash, types_1.Piece.WHITE_ROOK, constants_1.CASTLING.WHITE_SHORT.rookFrom, constants_1.CASTLING.WHITE_SHORT.rookTo);
      } else if (to === constants_1.CASTLING.WHITE_LONG.kingTo) {
        (0, Board_1.removePiece)(board, constants_1.CASTLING.WHITE_LONG.rookFrom);
        (0, Board_1.setPiece)(board, constants_1.CASTLING.WHITE_LONG.rookTo, types_1.Piece.WHITE_ROOK);
        board.zobristHash = (0, zobrist_1.updateHashMove)(board.zobristHash, types_1.Piece.WHITE_ROOK, constants_1.CASTLING.WHITE_LONG.rookFrom, constants_1.CASTLING.WHITE_LONG.rookTo);
      } else if (to === constants_1.CASTLING.BLACK_SHORT.kingTo) {
        (0, Board_1.removePiece)(board, constants_1.CASTLING.BLACK_SHORT.rookFrom);
        (0, Board_1.setPiece)(board, constants_1.CASTLING.BLACK_SHORT.rookTo, types_1.Piece.BLACK_ROOK);
        board.zobristHash = (0, zobrist_1.updateHashMove)(board.zobristHash, types_1.Piece.BLACK_ROOK, constants_1.CASTLING.BLACK_SHORT.rookFrom, constants_1.CASTLING.BLACK_SHORT.rookTo);
      } else if (to === constants_1.CASTLING.BLACK_LONG.kingTo) {
        (0, Board_1.removePiece)(board, constants_1.CASTLING.BLACK_LONG.rookFrom);
        (0, Board_1.setPiece)(board, constants_1.CASTLING.BLACK_LONG.rookTo, types_1.Piece.BLACK_ROOK);
        board.zobristHash = (0, zobrist_1.updateHashMove)(board.zobristHash, types_1.Piece.BLACK_ROOK, constants_1.CASTLING.BLACK_LONG.rookFrom, constants_1.CASTLING.BLACK_LONG.rookTo);
      }
    }
    (0, Board_1.removePiece)(board, from);
    board.zobristHash = (0, zobrist_1.updateHashMove)(board.zobristHash, piece, from, to);
    if (flags & types_1.MoveFlag.PROMOTION && promotionPiece) {
      board.zobristHash = (0, zobrist_1.removePieceFromHash)(board.zobristHash, piece, to);
      board.zobristHash = (0, zobrist_1.addPieceToHash)(board.zobristHash, promotionPiece, to);
      (0, Board_1.setPiece)(board, to, promotionPiece);
    } else {
      (0, Board_1.setPiece)(board, to, piece);
    }
    if (piece === types_1.Piece.WHITE_PAWN || piece === types_1.Piece.BLACK_PAWN) {
      board.halfMoveClock = 0;
    }
    if (flags & types_1.MoveFlag.PAWN_DOUBLE_PUSH) {
      const enPassantSquare = board.turn === types_1.InternalColor.WHITE ? from + 8 : from - 8;
      board.enPassantSquare = enPassantSquare;
    }
    updateCastlingRights(board, from, to, piece);
    board.zobristHash = (0, zobrist_1.updateHashEnPassant)(board.zobristHash, oldEnPassant, board.enPassantSquare);
    board.zobristHash = (0, zobrist_1.updateHashCastling)(board.zobristHash, oldCastling.whiteShort, board.castlingRights.whiteShort, oldCastling.whiteLong, board.castlingRights.whiteLong, oldCastling.blackShort, board.castlingRights.blackShort, oldCastling.blackLong, board.castlingRights.blackLong);
    board.turn = board.turn === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
    board.zobristHash = (0, zobrist_1.toggleSide)(board.zobristHash);
    if (board.turn === types_1.InternalColor.WHITE) {
      board.fullMoveNumber++;
    }
    updateGameStatus(board);
    return move;
  }
  function updateCastlingRights(board, from, to, piece) {
    if (piece === types_1.Piece.WHITE_KING) {
      board.castlingRights.whiteShort = false;
      board.castlingRights.whiteLong = false;
    } else if (piece === types_1.Piece.BLACK_KING) {
      board.castlingRights.blackShort = false;
      board.castlingRights.blackLong = false;
    }
    if (piece === types_1.Piece.WHITE_ROOK) {
      if (from === constants_1.CASTLING.WHITE_SHORT.rookFrom) {
        board.castlingRights.whiteShort = false;
      } else if (from === constants_1.CASTLING.WHITE_LONG.rookFrom) {
        board.castlingRights.whiteLong = false;
      }
    } else if (piece === types_1.Piece.BLACK_ROOK) {
      if (from === constants_1.CASTLING.BLACK_SHORT.rookFrom) {
        board.castlingRights.blackShort = false;
      } else if (from === constants_1.CASTLING.BLACK_LONG.rookFrom) {
        board.castlingRights.blackLong = false;
      }
    }
    if (to === constants_1.CASTLING.WHITE_SHORT.rookFrom) {
      board.castlingRights.whiteShort = false;
    } else if (to === constants_1.CASTLING.WHITE_LONG.rookFrom) {
      board.castlingRights.whiteLong = false;
    } else if (to === constants_1.CASTLING.BLACK_SHORT.rookFrom) {
      board.castlingRights.blackShort = false;
    } else if (to === constants_1.CASTLING.BLACK_LONG.rookFrom) {
      board.castlingRights.blackLong = false;
    }
  }
  function updateGameStatus(board) {
    const currentColor = board.turn;
    const kingBitboard = currentColor === types_1.InternalColor.WHITE ? board.whiteKing : board.blackKing;
    if (kingBitboard === 0n) {
      board.isCheck = false;
      board.isCheckmate = false;
      board.isStalemate = false;
      return;
    }
    const kingSquare = (0, conversion_1.getLowestSetBit)(kingBitboard);
    const opponentColor = currentColor === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
    const inCheck = (0, AttackDetector_1.isSquareAttacked)(board, kingSquare, opponentColor);
    board.isCheck = inCheck;
    board.isCheckmate = false;
    board.isStalemate = false;
  }
});

// node_modules/js-chess-engine/dist/utils/fen.js
var require_fen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseFEN = parseFEN;
  exports.validateFEN = validateFEN;
  exports.toFEN = toFEN;
  exports.getStartingFEN = getStartingFEN;
  var types_1 = require_types();
  var Board_1 = require_Board();
  var AttackDetector_1 = require_AttackDetector();
  var zobrist_1 = require_zobrist();
  var conversion_1 = require_conversion();
  var FEN_CASTLING_RE = /^(-|[KQkq]{1,4})$/;
  var FEN_EN_PASSANT_RE = /^(-|[a-h][36])$/;
  function parseFEN(fen) {
    const parts = fen.trim().split(/\s+/);
    if (parts.length !== 6) {
      throw new Error(`Invalid FEN: expected 6 parts, got ${parts.length}`);
    }
    const [piecePlacement, activeColor, castling, enPassant, halfMove, fullMove] = parts;
    const board = (0, Board_1.createEmptyBoard)();
    const ranks = piecePlacement.split("/");
    if (ranks.length !== 8) {
      throw new Error(`Invalid FEN: expected 8 ranks, got ${ranks.length}`);
    }
    for (let rank2 = 0;rank2 < 8; rank2++) {
      const rankStr = ranks[rank2];
      let file2 = 0;
      for (const char of rankStr) {
        if (char >= "1" && char <= "8") {
          file2 += parseInt(char, 10);
        } else {
          const piece = fenCharToPiece(char);
          if (piece === null) {
            throw new Error(`Invalid FEN: unknown piece character '${char}'`);
          }
          const squareIndex = (7 - rank2) * 8 + file2;
          (0, Board_1.setPiece)(board, squareIndex, piece);
          file2++;
        }
      }
      if (file2 !== 8) {
        throw new Error(`Invalid FEN: rank ${8 - rank2} has ${file2} files instead of 8`);
      }
    }
    let whiteKings = 0;
    let blackKings = 0;
    for (const p of board.mailbox) {
      if (p === types_1.Piece.WHITE_KING)
        whiteKings++;
      if (p === types_1.Piece.BLACK_KING)
        blackKings++;
    }
    if (whiteKings !== 1 || blackKings !== 1) {
      throw new Error(`Invalid FEN: expected exactly one white king and one black king`);
    }
    if (activeColor === "w") {
      board.turn = types_1.InternalColor.WHITE;
    } else if (activeColor === "b") {
      board.turn = types_1.InternalColor.BLACK;
    } else {
      throw new Error(`Invalid FEN: unknown active color '${activeColor}'`);
    }
    if (!FEN_CASTLING_RE.test(castling)) {
      throw new Error(`Invalid FEN: invalid castling rights '${castling}'`);
    }
    if (castling !== "-") {
      const unique = new Set(castling.split(""));
      if (unique.size !== castling.length) {
        throw new Error(`Invalid FEN: duplicate castling rights '${castling}'`);
      }
    }
    board.castlingRights.whiteShort = castling.includes("K");
    board.castlingRights.whiteLong = castling.includes("Q");
    board.castlingRights.blackShort = castling.includes("k");
    board.castlingRights.blackLong = castling.includes("q");
    if (!FEN_EN_PASSANT_RE.test(enPassant)) {
      throw new Error(`Invalid FEN: invalid en passant square '${enPassant}'`);
    }
    if (enPassant !== "-") {
      board.enPassantSquare = (0, conversion_1.squareToIndex)(enPassant.toUpperCase());
    }
    board.halfMoveClock = parseInt(halfMove, 10);
    if (isNaN(board.halfMoveClock)) {
      throw new Error(`Invalid FEN: invalid half-move clock '${halfMove}'`);
    }
    if (board.halfMoveClock < 0) {
      throw new Error(`Invalid FEN: half-move clock must be >= 0`);
    }
    board.fullMoveNumber = parseInt(fullMove, 10);
    if (isNaN(board.fullMoveNumber)) {
      throw new Error(`Invalid FEN: invalid full move number '${fullMove}'`);
    }
    if (board.fullMoveNumber < 1) {
      throw new Error(`Invalid FEN: full move number must be >= 1`);
    }
    board.zobristHash = (0, zobrist_1.computeZobristHash)(board);
    const notToMove = board.turn === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
    const originalTurn = board.turn;
    try {
      board.turn = notToMove;
      if ((0, AttackDetector_1.isKingInCheck)(board)) {
        const side = notToMove === types_1.InternalColor.WHITE ? "white" : "black";
        throw new Error(`Invalid FEN: ${side} is in check but it is not ${side}'s turn`);
      }
    } finally {
      board.turn = originalTurn;
    }
    return board;
  }
  function validateFEN(fen) {
    parseFEN(fen);
  }
  function toFEN(board) {
    const parts = [];
    const rankStrings = [];
    for (let rank2 = 7;rank2 >= 0; rank2--) {
      let rankStr = "";
      let emptyCount = 0;
      for (let file2 = 0;file2 < 8; file2++) {
        const squareIndex = rank2 * 8 + file2;
        const piece = board.mailbox[squareIndex];
        if (piece === types_1.Piece.EMPTY) {
          emptyCount++;
        } else {
          if (emptyCount > 0) {
            rankStr += emptyCount.toString();
            emptyCount = 0;
          }
          rankStr += pieceToFenChar(piece);
        }
      }
      if (emptyCount > 0) {
        rankStr += emptyCount.toString();
      }
      rankStrings.push(rankStr);
    }
    parts.push(rankStrings.join("/"));
    parts.push(board.turn === types_1.InternalColor.WHITE ? "w" : "b");
    let castling = "";
    if (board.castlingRights.whiteShort)
      castling += "K";
    if (board.castlingRights.whiteLong)
      castling += "Q";
    if (board.castlingRights.blackShort)
      castling += "k";
    if (board.castlingRights.blackLong)
      castling += "q";
    parts.push(castling || "-");
    if (board.enPassantSquare !== null) {
      parts.push((0, conversion_1.indexToSquare)(board.enPassantSquare).toLowerCase());
    } else {
      parts.push("-");
    }
    parts.push(board.halfMoveClock.toString());
    parts.push(board.fullMoveNumber.toString());
    return parts.join(" ");
  }
  function fenCharToPiece(char) {
    switch (char) {
      case "K":
        return types_1.Piece.WHITE_KING;
      case "Q":
        return types_1.Piece.WHITE_QUEEN;
      case "R":
        return types_1.Piece.WHITE_ROOK;
      case "B":
        return types_1.Piece.WHITE_BISHOP;
      case "N":
        return types_1.Piece.WHITE_KNIGHT;
      case "P":
        return types_1.Piece.WHITE_PAWN;
      case "k":
        return types_1.Piece.BLACK_KING;
      case "q":
        return types_1.Piece.BLACK_QUEEN;
      case "r":
        return types_1.Piece.BLACK_ROOK;
      case "b":
        return types_1.Piece.BLACK_BISHOP;
      case "n":
        return types_1.Piece.BLACK_KNIGHT;
      case "p":
        return types_1.Piece.BLACK_PAWN;
      default:
        return null;
    }
  }
  function pieceToFenChar(piece) {
    switch (piece) {
      case types_1.Piece.WHITE_KING:
        return "K";
      case types_1.Piece.WHITE_QUEEN:
        return "Q";
      case types_1.Piece.WHITE_ROOK:
        return "R";
      case types_1.Piece.WHITE_BISHOP:
        return "B";
      case types_1.Piece.WHITE_KNIGHT:
        return "N";
      case types_1.Piece.WHITE_PAWN:
        return "P";
      case types_1.Piece.BLACK_KING:
        return "k";
      case types_1.Piece.BLACK_QUEEN:
        return "q";
      case types_1.Piece.BLACK_ROOK:
        return "r";
      case types_1.Piece.BLACK_BISHOP:
        return "b";
      case types_1.Piece.BLACK_KNIGHT:
        return "n";
      case types_1.Piece.BLACK_PAWN:
        return "p";
      default:
        return "";
    }
  }
  function getStartingFEN() {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  }
});

// node_modules/js-chess-engine/dist/ai/Evaluator.js
var require_Evaluator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Evaluator = exports.SCORE_MAX = exports.SCORE_MIN = undefined;
  var types_1 = require_types();
  exports.SCORE_MIN = -1e6;
  exports.SCORE_MAX = 1e6;
  var V = {
    [types_1.Piece.EMPTY]: 0,
    [types_1.Piece.WHITE_PAWN]: 100,
    [types_1.Piece.BLACK_PAWN]: 100,
    [types_1.Piece.WHITE_KNIGHT]: 320,
    [types_1.Piece.BLACK_KNIGHT]: 320,
    [types_1.Piece.WHITE_BISHOP]: 320,
    [types_1.Piece.BLACK_BISHOP]: 320,
    [types_1.Piece.WHITE_ROOK]: 500,
    [types_1.Piece.BLACK_ROOK]: 500,
    [types_1.Piece.WHITE_QUEEN]: 900,
    [types_1.Piece.BLACK_QUEEN]: 900,
    [types_1.Piece.WHITE_KING]: 0,
    [types_1.Piece.BLACK_KING]: 0
  };
  var PST_PAWN = new Int16Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    2,
    2,
    4,
    6,
    6,
    4,
    2,
    2,
    1,
    1,
    2,
    8,
    8,
    2,
    1,
    1,
    0,
    0,
    0,
    6,
    6,
    0,
    0,
    0,
    1,
    1,
    1,
    -2,
    -2,
    1,
    1,
    1,
    1,
    1,
    1,
    -4,
    -4,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  var PST_KNIGHT = new Int16Array([
    -20,
    -10,
    -10,
    -10,
    -10,
    -10,
    -10,
    -20,
    -10,
    0,
    0,
    0,
    0,
    0,
    0,
    -10,
    -10,
    0,
    5,
    6,
    6,
    5,
    0,
    -10,
    -10,
    2,
    6,
    8,
    8,
    6,
    2,
    -10,
    -10,
    0,
    6,
    8,
    8,
    6,
    0,
    -10,
    -10,
    2,
    4,
    6,
    6,
    4,
    2,
    -10,
    -10,
    0,
    0,
    0,
    0,
    0,
    0,
    -10,
    -20,
    -10,
    -10,
    -10,
    -10,
    -10,
    -10,
    -20
  ]);
  var PST_BISHOP = new Int16Array([
    -10,
    -5,
    -5,
    -5,
    -5,
    -5,
    -5,
    -10,
    -5,
    0,
    0,
    0,
    0,
    0,
    0,
    -5,
    -5,
    0,
    3,
    5,
    5,
    3,
    0,
    -5,
    -5,
    2,
    5,
    7,
    7,
    5,
    2,
    -5,
    -5,
    0,
    5,
    7,
    7,
    5,
    0,
    -5,
    -5,
    2,
    3,
    5,
    5,
    3,
    2,
    -5,
    -5,
    0,
    0,
    0,
    0,
    0,
    0,
    -5,
    -10,
    -5,
    -5,
    -5,
    -5,
    -5,
    -5,
    -10
  ]);
  var PST_ROOK = new Int16Array([
    0,
    0,
    2,
    4,
    4,
    2,
    0,
    0,
    0,
    0,
    2,
    4,
    4,
    2,
    0,
    0,
    0,
    0,
    2,
    4,
    4,
    2,
    0,
    0,
    0,
    0,
    2,
    4,
    4,
    2,
    0,
    0,
    0,
    0,
    2,
    4,
    4,
    2,
    0,
    0,
    2,
    2,
    4,
    6,
    6,
    4,
    2,
    2,
    5,
    5,
    5,
    7,
    7,
    5,
    5,
    5,
    0,
    0,
    2,
    4,
    4,
    2,
    0,
    0
  ]);
  var PST_QUEEN = new Int16Array([
    -10,
    -5,
    -5,
    -2,
    -2,
    -5,
    -5,
    -10,
    -5,
    0,
    0,
    0,
    0,
    0,
    0,
    -5,
    -5,
    0,
    2,
    2,
    2,
    2,
    0,
    -5,
    -2,
    0,
    2,
    3,
    3,
    2,
    0,
    -2,
    -2,
    0,
    2,
    3,
    3,
    2,
    0,
    -2,
    -5,
    0,
    2,
    2,
    2,
    2,
    0,
    -5,
    -5,
    0,
    0,
    0,
    0,
    0,
    0,
    -5,
    -10,
    -5,
    -5,
    -2,
    -2,
    -5,
    -5,
    -10
  ]);
  var PST_KING = new Int16Array([
    -30,
    -40,
    -40,
    -50,
    -50,
    -40,
    -40,
    -30,
    -30,
    -40,
    -40,
    -50,
    -50,
    -40,
    -40,
    -30,
    -30,
    -40,
    -40,
    -50,
    -50,
    -40,
    -40,
    -30,
    -30,
    -40,
    -40,
    -50,
    -50,
    -40,
    -40,
    -30,
    -20,
    -30,
    -30,
    -40,
    -40,
    -30,
    -30,
    -20,
    -10,
    -20,
    -20,
    -20,
    -20,
    -20,
    -20,
    -10,
    10,
    10,
    0,
    0,
    0,
    0,
    10,
    10,
    20,
    30,
    10,
    0,
    0,
    10,
    30,
    20
  ]);
  function mirrorSquare(sq) {
    const rank2 = sq / 8 | 0;
    const file2 = sq & 7;
    return (7 - rank2) * 8 + file2;
  }
  function pst(piece, square) {
    const isWhite = piece >= types_1.Piece.WHITE_PAWN && piece <= types_1.Piece.WHITE_KING;
    const sq = isWhite ? mirrorSquare(square) : square;
    switch (piece) {
      case types_1.Piece.WHITE_PAWN:
      case types_1.Piece.BLACK_PAWN:
        return PST_PAWN[sq];
      case types_1.Piece.WHITE_KNIGHT:
      case types_1.Piece.BLACK_KNIGHT:
        return PST_KNIGHT[sq];
      case types_1.Piece.WHITE_BISHOP:
      case types_1.Piece.BLACK_BISHOP:
        return PST_BISHOP[sq];
      case types_1.Piece.WHITE_ROOK:
      case types_1.Piece.BLACK_ROOK:
        return PST_ROOK[sq];
      case types_1.Piece.WHITE_QUEEN:
      case types_1.Piece.BLACK_QUEEN:
        return PST_QUEEN[sq];
      case types_1.Piece.WHITE_KING:
      case types_1.Piece.BLACK_KING:
        return PST_KING[sq];
      default:
        return 0;
    }
  }

  class Evaluator {
    static evaluate(board, playerColor, plyFromRoot = 0) {
      if (board.isCheckmate) {
        const losing = board.turn === playerColor;
        return losing ? exports.SCORE_MIN + plyFromRoot : exports.SCORE_MAX - plyFromRoot;
      }
      if (board.isStalemate)
        return 0;
      let white = 0;
      let black = 0;
      const mb = board.mailbox;
      for (let sq = 0;sq < 64; sq++) {
        const p = mb[sq];
        if (!p)
          continue;
        const val = (V[p] ?? 0) + pst(p, sq);
        if (p <= types_1.Piece.WHITE_KING)
          white += val;
        else
          black += val;
      }
      const scoreFromWhite = white - black;
      return playerColor === types_1.InternalColor.WHITE ? scoreFromWhite : -scoreFromWhite;
    }
  }
  exports.Evaluator = Evaluator;
});

// node_modules/js-chess-engine/dist/utils/environment.js
var require_environment = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isNodeEnvironment = isNodeEnvironment;
  exports.isBrowserEnvironment = isBrowserEnvironment;
  exports.getDefaultTTSize = getDefaultTTSize;
  function isNodeEnvironment() {
    return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
  }
  function isBrowserEnvironment() {
    return !isNodeEnvironment();
  }
  function getDefaultTTSize() {
    return isNodeEnvironment() ? 4 : 2;
  }
});

// node_modules/js-chess-engine/dist/ai/TranspositionTable.js
var require_TranspositionTable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TranspositionTable = exports.TTEntryType = undefined;
  exports.getRecommendedTTSize = getRecommendedTTSize;
  var Evaluator_1 = require_Evaluator();
  var environment_1 = require_environment();
  var MATE_THRESHOLD = 500;
  function getRecommendedTTSize(level) {
    if ((0, environment_1.isNodeEnvironment)()) {
      const nodeSizes = {
        1: 0.5,
        2: 1,
        3: 4,
        4: 16,
        5: 40
      };
      return nodeSizes[level] ?? 4;
    } else {
      const browserSizes = {
        1: 0.25,
        2: 0.5,
        3: 2,
        4: 8,
        5: 20
      };
      return browserSizes[level] ?? 2;
    }
  }
  function adjustMateScoreForStorage(score, ply) {
    if (score > Evaluator_1.SCORE_MAX - MATE_THRESHOLD)
      return score + ply;
    if (score < Evaluator_1.SCORE_MIN + MATE_THRESHOLD)
      return score - ply;
    return score;
  }
  function adjustMateScoreForRetrieval(score, ply) {
    if (score > Evaluator_1.SCORE_MAX - MATE_THRESHOLD)
      return score - ply;
    if (score < Evaluator_1.SCORE_MIN + MATE_THRESHOLD)
      return score + ply;
    return score;
  }
  var TTEntryType;
  (function(TTEntryType2) {
    TTEntryType2[TTEntryType2["EXACT"] = 0] = "EXACT";
    TTEntryType2[TTEntryType2["LOWER_BOUND"] = 1] = "LOWER_BOUND";
    TTEntryType2[TTEntryType2["UPPER_BOUND"] = 2] = "UPPER_BOUND";
  })(TTEntryType || (exports.TTEntryType = TTEntryType = {}));

  class TranspositionTable {
    table;
    size;
    currentAge = 0;
    hits = 0;
    misses = 0;
    constructor(sizeMB = 16) {
      const entrySize = 40;
      const bytesPerMB = 1024 * 1024;
      const totalBytes = sizeMB * bytesPerMB;
      this.size = Math.pow(2, Math.floor(Math.log2(totalBytes / entrySize)));
      this.table = new Array(this.size).fill(null);
    }
    store(zobristHash, depth, score, type, bestMove, ply = 0) {
      const index = this.getIndex(zobristHash);
      const existingEntry = this.table[index];
      const shouldReplace = !existingEntry || existingEntry.zobristHash === zobristHash || depth >= existingEntry.depth || existingEntry.age < this.currentAge;
      if (shouldReplace) {
        this.table[index] = {
          zobristHash,
          depth,
          score: adjustMateScoreForStorage(score, ply),
          type,
          bestMove,
          age: this.currentAge
        };
      }
    }
    probe(zobristHash, depth, alpha, beta, ply = 0) {
      const index = this.getIndex(zobristHash);
      const entry = this.table[index];
      if (!entry || entry.zobristHash !== zobristHash) {
        this.misses++;
        return null;
      }
      if (entry.depth < depth) {
        this.misses++;
        return null;
      }
      const adjustedScore = adjustMateScoreForRetrieval(entry.score, ply);
      switch (entry.type) {
        case TTEntryType.EXACT:
          this.hits++;
          return { ...entry, score: adjustedScore };
        case TTEntryType.LOWER_BOUND:
          if (adjustedScore >= beta) {
            this.hits++;
            return { ...entry, score: adjustedScore };
          }
          break;
        case TTEntryType.UPPER_BOUND:
          if (adjustedScore <= alpha) {
            this.hits++;
            return { ...entry, score: adjustedScore };
          }
          break;
      }
      return { ...entry, score: adjustedScore };
    }
    getBestMove(zobristHash) {
      const index = this.getIndex(zobristHash);
      const entry = this.table[index];
      if (entry && entry.zobristHash === zobristHash) {
        return entry.bestMove;
      }
      return null;
    }
    clear() {
      this.table.fill(null);
      this.currentAge = 0;
      this.hits = 0;
      this.misses = 0;
    }
    newSearch() {
      this.currentAge++;
    }
    getIndex(hash) {
      return Number(hash & BigInt(this.size - 1));
    }
    getStats() {
      const total = this.hits + this.misses;
      const hitRate = total > 0 ? this.hits / total : 0;
      return {
        hits: this.hits,
        misses: this.misses,
        hitRate,
        size: this.size
      };
    }
  }
  exports.TranspositionTable = TranspositionTable;
});

// node_modules/js-chess-engine/dist/adapters/APIAdapter.js
var require_APIAdapter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.boardToConfig = boardToConfig;
  exports.configToBoard = configToBoard;
  exports.configToFEN = configToFEN;
  exports.movesToMap = movesToMap;
  exports.movesFromSquare = movesFromSquare;
  exports.pieceToSymbol = pieceToSymbol;
  exports.symbolToPiece = symbolToPiece;
  exports.colorToInternal = colorToInternal;
  exports.internalToColor = internalToColor;
  exports.normalizeSquare = normalizeSquare;
  var types_1 = require_types();
  var conversion_1 = require_conversion();
  function boardToConfig(board) {
    const pieces = {};
    for (let i = 0;i < 64; i++) {
      const piece = board.mailbox[i];
      if (piece !== types_1.Piece.EMPTY) {
        const square = (0, conversion_1.indexToSquare)(i);
        const symbol = pieceToSymbol(piece);
        if (symbol) {
          pieces[square] = symbol;
        }
      }
    }
    return {
      pieces,
      turn: board.turn === types_1.InternalColor.WHITE ? "white" : "black",
      isFinished: board.isCheckmate || board.isStalemate,
      check: board.isCheck,
      checkMate: board.isCheckmate,
      staleMate: board.isStalemate,
      castling: { ...board.castlingRights },
      enPassant: board.enPassantSquare !== null ? (0, conversion_1.indexToSquare)(board.enPassantSquare) : null,
      halfMove: board.halfMoveClock,
      fullMove: board.fullMoveNumber
    };
  }
  function configToBoard(config) {
    const { parseFEN } = require_fen();
    const fen = configToFEN(config);
    return parseFEN(fen);
  }
  function configToFEN(config) {
    const ranks = [];
    for (let rank2 = 7;rank2 >= 0; rank2--) {
      let rankStr = "";
      let emptyCount = 0;
      for (let file2 = 0;file2 < 8; file2++) {
        const square = (0, conversion_1.indexToSquare)(rank2 * 8 + file2);
        const piece = config.pieces[square];
        if (!piece) {
          emptyCount++;
        } else {
          if (emptyCount > 0) {
            rankStr += emptyCount.toString();
            emptyCount = 0;
          }
          rankStr += piece;
        }
      }
      if (emptyCount > 0) {
        rankStr += emptyCount.toString();
      }
      ranks.push(rankStr);
    }
    const piecePlacement = ranks.join("/");
    const activeColor = config.turn === "white" ? "w" : "b";
    let castling = "";
    if (config.castling.whiteShort)
      castling += "K";
    if (config.castling.whiteLong)
      castling += "Q";
    if (config.castling.blackShort)
      castling += "k";
    if (config.castling.blackLong)
      castling += "q";
    if (!castling)
      castling = "-";
    const enPassant = config.enPassant ? config.enPassant.toLowerCase() : "-";
    const halfMove = config.halfMove.toString();
    const fullMove = config.fullMove.toString();
    return `${piecePlacement} ${activeColor} ${castling} ${enPassant} ${halfMove} ${fullMove}`;
  }
  function movesToMap(moves) {
    const movesMap = {};
    for (const move of moves) {
      const fromSquare = (0, conversion_1.indexToSquare)(move.from);
      const toSquare = (0, conversion_1.indexToSquare)(move.to);
      if (!movesMap[fromSquare]) {
        movesMap[fromSquare] = [];
      }
      movesMap[fromSquare].push(toSquare);
    }
    return movesMap;
  }
  function movesFromSquare(moves, fromIndex) {
    return moves.filter((move) => move.from === fromIndex).map((move) => (0, conversion_1.indexToSquare)(move.to));
  }
  function pieceToSymbol(piece) {
    switch (piece) {
      case types_1.Piece.WHITE_KING:
        return "K";
      case types_1.Piece.WHITE_QUEEN:
        return "Q";
      case types_1.Piece.WHITE_ROOK:
        return "R";
      case types_1.Piece.WHITE_BISHOP:
        return "B";
      case types_1.Piece.WHITE_KNIGHT:
        return "N";
      case types_1.Piece.WHITE_PAWN:
        return "P";
      case types_1.Piece.BLACK_KING:
        return "k";
      case types_1.Piece.BLACK_QUEEN:
        return "q";
      case types_1.Piece.BLACK_ROOK:
        return "r";
      case types_1.Piece.BLACK_BISHOP:
        return "b";
      case types_1.Piece.BLACK_KNIGHT:
        return "n";
      case types_1.Piece.BLACK_PAWN:
        return "p";
      default:
        return null;
    }
  }
  function symbolToPiece(symbol) {
    switch (symbol) {
      case "K":
        return types_1.Piece.WHITE_KING;
      case "Q":
        return types_1.Piece.WHITE_QUEEN;
      case "R":
        return types_1.Piece.WHITE_ROOK;
      case "B":
        return types_1.Piece.WHITE_BISHOP;
      case "N":
        return types_1.Piece.WHITE_KNIGHT;
      case "P":
        return types_1.Piece.WHITE_PAWN;
      case "k":
        return types_1.Piece.BLACK_KING;
      case "q":
        return types_1.Piece.BLACK_QUEEN;
      case "r":
        return types_1.Piece.BLACK_ROOK;
      case "b":
        return types_1.Piece.BLACK_BISHOP;
      case "n":
        return types_1.Piece.BLACK_KNIGHT;
      case "p":
        return types_1.Piece.BLACK_PAWN;
    }
  }
  function colorToInternal(color) {
    return color === "white" ? types_1.InternalColor.WHITE : types_1.InternalColor.BLACK;
  }
  function internalToColor(color) {
    return color === types_1.InternalColor.WHITE ? "white" : "black";
  }
  function normalizeSquare(square) {
    return square.toUpperCase();
  }
});

// node_modules/js-chess-engine/dist/ai/MoveOrdering.js
var require_MoveOrdering = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MoveSelector = exports.KillerMoves = undefined;
  var types_1 = require_types();
  var PIECE_VALUE = {
    [types_1.Piece.EMPTY]: 0,
    [types_1.Piece.WHITE_PAWN]: 100,
    [types_1.Piece.BLACK_PAWN]: 100,
    [types_1.Piece.WHITE_KNIGHT]: 320,
    [types_1.Piece.BLACK_KNIGHT]: 320,
    [types_1.Piece.WHITE_BISHOP]: 320,
    [types_1.Piece.BLACK_BISHOP]: 320,
    [types_1.Piece.WHITE_ROOK]: 500,
    [types_1.Piece.BLACK_ROOK]: 500,
    [types_1.Piece.WHITE_QUEEN]: 900,
    [types_1.Piece.BLACK_QUEEN]: 900,
    [types_1.Piece.WHITE_KING]: 20000,
    [types_1.Piece.BLACK_KING]: 20000
  };

  class KillerMoves {
    killers;
    maxPly;
    constructor(maxPly = 64) {
      this.maxPly = maxPly;
      this.killers = Array.from({ length: maxPly }, () => [null, null]);
    }
    clear() {
      this.killers = Array.from({ length: this.maxPly }, () => [null, null]);
    }
    store(move, ply) {
      if (ply < 0 || ply >= this.maxPly)
        return;
      if (move.flags & types_1.MoveFlag.CAPTURE)
        return;
      const k1 = this.killers[ply][0];
      if (k1 && k1.from === move.from && k1.to === move.to)
        return;
      this.killers[ply][1] = k1;
      this.killers[ply][0] = move;
    }
    isKiller(move, ply) {
      if (ply < 0 || ply >= this.maxPly)
        return false;
      const [k1, k2] = this.killers[ply];
      return !!(k1 && k1.from === move.from && k1.to === move.to || k2 && k2.from === move.from && k2.to === move.to);
    }
  }
  exports.KillerMoves = KillerMoves;
  function mvvLvaScore(move) {
    const victim = PIECE_VALUE[move.capturedPiece] ?? 0;
    const attacker = PIECE_VALUE[move.piece] ?? 0;
    return victim * 16 - attacker;
  }

  class MoveSelector {
    moves;
    scores;
    n;
    cursor = 0;
    constructor(moves, ttMove, killers, ply) {
      this.moves = moves;
      this.n = moves.length;
      const scores = new Int32Array(this.n);
      for (let i = 0;i < this.n; i++) {
        const m = moves[i];
        let score = 0;
        if (ttMove && m.from === ttMove.from && m.to === ttMove.to) {
          score += 1e7;
        }
        if (m.flags & types_1.MoveFlag.PROMOTION && (m.promotionPiece === types_1.Piece.WHITE_QUEEN || m.promotionPiece === types_1.Piece.BLACK_QUEEN)) {
          score += 9000000;
        }
        if (m.flags & types_1.MoveFlag.CAPTURE) {
          score += 5000000 + mvvLvaScore(m);
        }
        if (killers && killers.isKiller(m, ply)) {
          score += 3000000;
        }
        scores[i] = score;
      }
      this.scores = scores;
    }
    pickNext() {
      const { cursor, n, scores, moves } = this;
      if (cursor >= n)
        return null;
      let bestIdx = cursor;
      let bestScore = scores[cursor];
      for (let j = cursor + 1;j < n; j++) {
        if (scores[j] > bestScore) {
          bestScore = scores[j];
          bestIdx = j;
        }
      }
      if (bestIdx !== cursor) {
        const tmpMove = moves[cursor];
        moves[cursor] = moves[bestIdx];
        moves[bestIdx] = tmpMove;
        scores[bestIdx] = scores[cursor];
      }
      this.cursor++;
      return moves[cursor];
    }
  }
  exports.MoveSelector = MoveSelector;
});

// node_modules/js-chess-engine/dist/ai/Search.js
var require_Search = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Search = undefined;
  var types_1 = require_types();
  var MoveGenerator_1 = require_MoveGenerator();
  var Board_1 = require_Board();
  var AttackDetector_1 = require_AttackDetector();
  var conversion_1 = require_conversion();
  var Evaluator_1 = require_Evaluator();
  var TranspositionTable_1 = require_TranspositionTable();
  var MoveOrdering_1 = require_MoveOrdering();
  var INF = Evaluator_1.SCORE_MAX;

  class Search {
    nodesSearched = 0;
    qMaxDepth = 4;
    checkExtension = true;
    transpositionTable;
    killerMoves;
    constructor(ttSizeMB = 16) {
      this.transpositionTable = ttSizeMB > 0 ? new TranspositionTable_1.TranspositionTable(ttSizeMB) : null;
      this.killerMoves = new MoveOrdering_1.KillerMoves;
    }
    clear() {
      this.transpositionTable?.clear();
      this.killerMoves.clear();
    }
    findBestMove(board, baseDepth, qMaxDepth = 4, checkExtension = true, options = {}) {
      this.qMaxDepth = qMaxDepth;
      this.checkExtension = checkExtension;
      this.nodesSearched = 0;
      this.transpositionTable?.newSearch();
      this.killerMoves.clear();
      const analysis = options.analysis ?? false;
      const randomness = options.randomness ?? 0;
      const moves = (0, MoveGenerator_1.generateLegalMoves)(board);
      if (moves.length === 0) {
        const inCheck = (0, AttackDetector_1.isKingInCheck)(board);
        const score = inCheck ? Evaluator_1.SCORE_MIN + 0 : 0;
        return { move: null, score, depth: 0, nodesSearched: this.nodesSearched };
      }
      let bestMove = null;
      let bestScore = Evaluator_1.SCORE_MIN;
      let scoredMoves;
      const ASPIRATION_DELTA = 25;
      for (let d = 1;d <= baseDepth; d++) {
        const collectScores = d === baseDepth && (randomness > 0 || analysis);
        let alpha = Evaluator_1.SCORE_MIN;
        let beta = Evaluator_1.SCORE_MAX;
        let delta = ASPIRATION_DELTA;
        if (d >= 4 && bestScore > Evaluator_1.SCORE_MIN && bestScore < Evaluator_1.SCORE_MAX) {
          alpha = bestScore - delta;
          beta = bestScore + delta;
        }
        let iterBestMove = null;
        let iterBestScore = Evaluator_1.SCORE_MIN;
        let iterScoredMoves = null;
        while (true) {
          const pvMove = this.transpositionTable?.getBestMove(board.zobristHash) ?? null;
          const selector = new MoveOrdering_1.MoveSelector(moves, pvMove, this.killerMoves, 0);
          iterScoredMoves = collectScores ? [] : null;
          iterBestMove = null;
          iterBestScore = Evaluator_1.SCORE_MIN;
          let iterAlpha = alpha;
          let move;
          let moveIndex = 0;
          while ((move = selector.pickNext()) !== null) {
            if (move.flags & types_1.MoveFlag.PROMOTION && move.promotionPiece) {
              const isQueenPromotion = move.promotionPiece === types_1.Piece.WHITE_QUEEN || move.promotionPiece === types_1.Piece.BLACK_QUEEN;
              if (!isQueenPromotion)
                continue;
            }
            const child = (0, Board_1.copyBoard)(board);
            (0, MoveGenerator_1.applyMoveComplete)(child, move);
            const extension = this.checkExtension && child.isCheck ? 1 : 0;
            let score;
            if (moveIndex === 0) {
              score = -this.negamax(child, d - 1 + extension, -beta, -iterAlpha, 1);
            } else {
              score = -this.negamax(child, d - 1 + extension, -iterAlpha - 1, -iterAlpha, 1);
              if (score > iterAlpha && score < beta) {
                score = -this.negamax(child, d - 1 + extension, -beta, -iterAlpha, 1);
              }
            }
            moveIndex++;
            if (iterScoredMoves) {
              iterScoredMoves.push({ move, score });
            }
            if (score > iterBestScore || iterBestMove === null) {
              iterBestScore = score;
              iterBestMove = move;
            }
            if (score > iterAlpha)
              iterAlpha = score;
            if (iterAlpha >= beta)
              break;
          }
          if (d >= 4 && (alpha > Evaluator_1.SCORE_MIN || beta < Evaluator_1.SCORE_MAX)) {
            if (iterBestScore <= alpha) {
              delta *= 2;
              alpha = delta > 400 ? Evaluator_1.SCORE_MIN : Math.max(Evaluator_1.SCORE_MIN, alpha - delta);
              continue;
            }
            if (iterBestScore >= beta) {
              delta *= 2;
              beta = delta > 400 ? Evaluator_1.SCORE_MAX : Math.min(Evaluator_1.SCORE_MAX, beta + delta);
              continue;
            }
          }
          break;
        }
        if (iterScoredMoves) {
          iterScoredMoves.sort((a, b) => b.score - a.score);
          scoredMoves = iterScoredMoves;
          if (iterScoredMoves.length > 0) {
            bestMove = iterScoredMoves[0].move;
            bestScore = iterScoredMoves[0].score;
          }
        } else if (iterBestMove) {
          bestMove = iterBestMove;
          bestScore = iterBestScore;
        }
      }
      if (randomness > 0 && scoredMoves && scoredMoves.length > 1) {
        const threshold = bestScore - randomness;
        let candidates = scoredMoves.filter((e) => e.score >= threshold);
        if (candidates.length > 1) {
          const bestIsCapture = !!(scoredMoves[0].move.flags & types_1.MoveFlag.CAPTURE);
          if (bestIsCapture) {
            const captureCandidates = candidates.filter((e) => e.move.flags & types_1.MoveFlag.CAPTURE);
            if (captureCandidates.length > 0)
              candidates = captureCandidates;
          }
          bestMove = candidates[Math.floor(Math.random() * candidates.length)].move;
        }
      }
      return bestMove ? { move: bestMove, score: bestScore, depth: baseDepth, nodesSearched: this.nodesSearched, scoredMoves } : null;
    }
    negamax(board, depth, alpha, beta, ply) {
      this.nodesSearched++;
      if (depth <= 0) {
        return this.quiescence(board, alpha, beta, ply, 0);
      }
      const tt = this.transpositionTable;
      const hash = board.zobristHash;
      let ttMove = null;
      if (tt) {
        const entry = tt.probe(hash, depth, alpha, beta, ply);
        if (entry) {
          ttMove = entry.bestMove;
          if (entry.type === TranspositionTable_1.TTEntryType.EXACT)
            return entry.score;
          if (entry.type === TranspositionTable_1.TTEntryType.LOWER_BOUND && entry.score >= beta)
            return entry.score;
          if (entry.type === TranspositionTable_1.TTEntryType.UPPER_BOUND && entry.score <= alpha)
            return entry.score;
        }
      }
      const moves = (0, MoveGenerator_1.generatePseudoLegalMoves)(board);
      const selector = new MoveOrdering_1.MoveSelector(moves, ttMove, this.killerMoves, ply);
      const startAlpha = alpha;
      let bestScore = -INF;
      let bestMove = null;
      let legalMoveCount = 0;
      let move;
      while ((move = selector.pickNext()) !== null) {
        if (move.flags & types_1.MoveFlag.PROMOTION && move.promotionPiece) {
          const isQueenPromotion = move.promotionPiece === types_1.Piece.WHITE_QUEEN || move.promotionPiece === types_1.Piece.BLACK_QUEEN;
          if (!isQueenPromotion)
            continue;
        }
        const child = (0, Board_1.copyBoard)(board);
        (0, MoveGenerator_1.applyMoveComplete)(child, move);
        if (this.isIllegalMove(child))
          continue;
        legalMoveCount++;
        const extension = this.checkExtension && child.isCheck ? 1 : 0;
        let score;
        if (legalMoveCount === 1) {
          score = -this.negamax(child, depth - 1 + extension, -beta, -alpha, ply + 1);
        } else {
          score = -this.negamax(child, depth - 1 + extension, -alpha - 1, -alpha, ply + 1);
          if (score > alpha && score < beta) {
            score = -this.negamax(child, depth - 1 + extension, -beta, -alpha, ply + 1);
          }
        }
        if (score > bestScore || bestMove === null) {
          bestScore = score;
          bestMove = move;
        }
        if (score > alpha)
          alpha = score;
        if (alpha >= beta) {
          this.killerMoves.store(move, ply);
          break;
        }
      }
      if (legalMoveCount === 0) {
        if ((0, AttackDetector_1.isKingInCheck)(board))
          return Evaluator_1.SCORE_MIN + ply;
        return 0;
      }
      if (tt && bestMove) {
        let type = TranspositionTable_1.TTEntryType.EXACT;
        if (bestScore <= startAlpha)
          type = TranspositionTable_1.TTEntryType.UPPER_BOUND;
        else if (bestScore >= beta)
          type = TranspositionTable_1.TTEntryType.LOWER_BOUND;
        tt.store(hash, depth, bestScore, type, bestMove, ply);
      }
      return bestScore;
    }
    quiescence(board, alpha, beta, ply, qDepth) {
      this.nodesSearched++;
      const standPat = Evaluator_1.Evaluator.evaluate(board, board.turn, ply);
      if (standPat >= beta)
        return standPat;
      if (standPat > alpha)
        alpha = standPat;
      if (qDepth >= this.qMaxDepth)
        return standPat;
      const allMoves = (0, MoveGenerator_1.generatePseudoLegalMoves)(board);
      const forcingMask = types_1.MoveFlag.CAPTURE | types_1.MoveFlag.PROMOTION;
      const forcing = [];
      for (let i = 0;i < allMoves.length; i++) {
        if (allMoves[i].flags & forcingMask)
          forcing.push(allMoves[i]);
      }
      const tt = this.transpositionTable;
      const ttMove = tt ? tt.getBestMove(board.zobristHash) : null;
      const selector = new MoveOrdering_1.MoveSelector(forcing, ttMove, this.killerMoves, ply);
      let bestScore = standPat;
      let legalForcingFound = false;
      let move;
      while ((move = selector.pickNext()) !== null) {
        if (move.flags & types_1.MoveFlag.PROMOTION && move.promotionPiece) {
          const isQueenPromotion = move.promotionPiece === types_1.Piece.WHITE_QUEEN || move.promotionPiece === types_1.Piece.BLACK_QUEEN;
          if (!isQueenPromotion)
            continue;
        }
        const child = (0, Board_1.copyBoard)(board);
        (0, MoveGenerator_1.applyMoveComplete)(child, move);
        if (this.isIllegalMove(child))
          continue;
        legalForcingFound = true;
        const score = -this.quiescence(child, -beta, -alpha, ply + 1, qDepth + 1);
        if (score > bestScore)
          bestScore = score;
        if (score >= beta)
          return score;
        if (score > alpha)
          alpha = score;
      }
      if (!legalForcingFound && (0, AttackDetector_1.isKingInCheck)(board)) {
        for (const m of allMoves) {
          if (m.flags & types_1.MoveFlag.CAPTURE || m.flags & types_1.MoveFlag.PROMOTION)
            continue;
          const child = (0, Board_1.copyBoard)(board);
          (0, MoveGenerator_1.applyMoveComplete)(child, m);
          if (!this.isIllegalMove(child))
            return standPat;
        }
        return Evaluator_1.SCORE_MIN + ply;
      }
      return bestScore;
    }
    isIllegalMove(child) {
      const prevColor = child.turn === types_1.InternalColor.WHITE ? types_1.InternalColor.BLACK : types_1.InternalColor.WHITE;
      const prevKingBB = prevColor === types_1.InternalColor.WHITE ? child.whiteKing : child.blackKing;
      if (prevKingBB === 0n)
        return false;
      const prevKingSq = (0, conversion_1.getLowestSetBit)(prevKingBB);
      return (0, AttackDetector_1.isSquareAttacked)(child, prevKingSq, child.turn);
    }
  }
  exports.Search = Search;
});

// node_modules/js-chess-engine/dist/ai/AIEngine.js
var require_AIEngine = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AIEngine = undefined;
  var Search_1 = require_Search();
  var MoveGenerator_1 = require_MoveGenerator();
  var types_1 = require_types();
  var LEVEL_CONFIG = {
    1: { baseDepth: 1, extendedDepth: 0, checkExtension: false, qMaxDepth: 0 },
    2: { baseDepth: 2, extendedDepth: 0, checkExtension: true, qMaxDepth: 0 },
    3: { baseDepth: 2, extendedDepth: 1, checkExtension: true, qMaxDepth: 1 },
    4: { baseDepth: 3, extendedDepth: 2, checkExtension: true, qMaxDepth: 2 },
    5: { baseDepth: 4, extendedDepth: 3, checkExtension: true, qMaxDepth: 4 }
  };

  class AIEngine {
    search;
    currentTTSize = 16;
    constructor() {
      this.search = new Search_1.Search(this.currentTTSize);
    }
    findBestMove(board, level = 3, ttSizeMB = 16, depth, randomness) {
      const result = this.findBestMoveDetailed(board, { level, ttSizeMB, depth, analysis: false, randomness });
      return result ? result.move : null;
    }
    findBestMoveDetailed(board, options = {}) {
      const level = options.level ?? 3;
      const ttSizeMB = options.ttSizeMB ?? 16;
      if (ttSizeMB !== this.currentTTSize) {
        this.currentTTSize = ttSizeMB;
        this.search = new Search_1.Search(ttSizeMB);
      }
      const config = LEVEL_CONFIG[level];
      const baseDepth = options.depth?.base ?? config.baseDepth;
      const extendedDepth = options.depth?.extended ?? config.extendedDepth;
      const qMaxDepth = options.depth?.quiescence ?? config.qMaxDepth;
      const checkExtension = options.depth?.check ?? config.checkExtension;
      const effectiveDepth = this.getAdaptiveDepth(board, baseDepth, extendedDepth);
      const OPENING_RANDOMNESS = 5;
      const effectiveRandomness = options.randomness === undefined && board.fullMoveNumber === 1 ? OPENING_RANDOMNESS : options.randomness ?? 0;
      return this.search.findBestMove(board, effectiveDepth, qMaxDepth, checkExtension, {
        analysis: options.analysis ?? false,
        randomness: effectiveRandomness
      });
    }
    static getLevelDepth(level) {
      return LEVEL_CONFIG[level];
    }
    getAdaptiveDepth(board, baseDepth, allowedExtendedDepth) {
      if (allowedExtendedDepth <= 0)
        return Math.max(1, baseDepth);
      const rootMoves = (0, MoveGenerator_1.generateLegalMoves)(board).length;
      let pieceCount = 0;
      for (const p of board.mailbox) {
        if (p !== types_1.Piece.EMPTY)
          pieceCount++;
      }
      let depth = baseDepth;
      if (pieceCount <= 10)
        depth += 2;
      else if (pieceCount <= 18)
        depth += 1;
      if (rootMoves <= 12)
        depth += 1;
      if (depth < baseDepth)
        depth = baseDepth;
      if (depth < 1)
        depth = 1;
      const maxDepth = baseDepth + allowedExtendedDepth;
      if (depth > maxDepth)
        depth = maxDepth;
      return depth;
    }
  }
  exports.AIEngine = AIEngine;
});

// node_modules/js-chess-engine/dist/index.js
var require_dist = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Game = undefined;
  exports.moves = moves;
  exports.status = status;
  exports.getFen = getFen;
  exports.move = move;
  exports.aiMove = aiMove;
  exports.ai = ai;
  var Board_1 = require_Board();
  var MoveGenerator_1 = require_MoveGenerator();
  var AttackDetector_1 = require_AttackDetector();
  var fen_1 = require_fen();
  var conversion_1 = require_conversion();
  var TranspositionTable_1 = require_TranspositionTable();
  var APIAdapter_1 = require_APIAdapter();
  var AIEngine_1 = require_AIEngine();
  __exportStar(require_types(), exports);

  class Game {
    board;
    history = [];
    aiEngine;
    constructor(configuration) {
      this.aiEngine = new AIEngine_1.AIEngine;
      if (!configuration) {
        this.board = (0, Board_1.createStartingBoard)();
      } else if (typeof configuration === "string") {
        (0, fen_1.validateFEN)(configuration);
        this.board = (0, fen_1.parseFEN)(configuration);
      } else {
        this.board = (0, APIAdapter_1.configToBoard)(configuration);
      }
    }
    move(from, to) {
      const fromNorm = (0, APIAdapter_1.normalizeSquare)(from);
      const toNorm = (0, APIAdapter_1.normalizeSquare)(to);
      const fromIndex = (0, conversion_1.squareToIndex)(fromNorm);
      const toIndex = (0, conversion_1.squareToIndex)(toNorm);
      const legalMoves = (0, MoveGenerator_1.generateLegalMoves)(this.board);
      const move2 = legalMoves.find((m) => m.from === fromIndex && m.to === toIndex);
      if (!move2) {
        throw new Error(`Invalid move from ${fromNorm} to ${toNorm}`);
      }
      const historyEntry = { [fromNorm]: toNorm };
      this.history.push(historyEntry);
      (0, MoveGenerator_1.applyMoveComplete)(this.board, move2);
      return (0, APIAdapter_1.boardToConfig)(this.board);
    }
    moves(from) {
      if (from) {
        const fromNorm = (0, APIAdapter_1.normalizeSquare)(from);
        const fromIndex = (0, conversion_1.squareToIndex)(fromNorm);
        const pieceMoves = (0, MoveGenerator_1.getMovesForPiece)(this.board, fromIndex);
        const toSquares = (0, APIAdapter_1.movesFromSquare)(pieceMoves, fromIndex);
        return { [fromNorm]: toSquares };
      } else {
        const allMoves = (0, MoveGenerator_1.generateLegalMoves)(this.board);
        return (0, APIAdapter_1.movesToMap)(allMoves);
      }
    }
    setPiece(square, piece) {
      const squareNorm = (0, APIAdapter_1.normalizeSquare)(square);
      const squareIndex = (0, conversion_1.squareToIndex)(squareNorm);
      const pieceEnum = (0, APIAdapter_1.symbolToPiece)(piece);
      (0, Board_1.setPiece)(this.board, squareIndex, pieceEnum);
    }
    removePiece(square) {
      const squareNorm = (0, APIAdapter_1.normalizeSquare)(square);
      const squareIndex = (0, conversion_1.squareToIndex)(squareNorm);
      (0, Board_1.removePiece)(this.board, squareIndex);
    }
    getHistory() {
      const result = [];
      const startingBoard = typeof this.board === "string" ? (0, fen_1.parseFEN)(this.board) : (0, Board_1.createStartingBoard)();
      const tempBoard = (0, Board_1.copyBoard)(startingBoard);
      for (const move2 of this.history) {
        const [from, to] = Object.entries(move2)[0];
        const fromIndex = (0, conversion_1.squareToIndex)(from);
        const toIndex = (0, conversion_1.squareToIndex)(to);
        const legalMoves = (0, MoveGenerator_1.generateLegalMoves)(tempBoard);
        const matchingMove = legalMoves.find((m) => m.from === fromIndex && m.to === toIndex);
        if (matchingMove) {
          (0, MoveGenerator_1.applyMoveComplete)(tempBoard, matchingMove);
          const config = (0, APIAdapter_1.boardToConfig)(tempBoard);
          result.push({ ...config, move: move2 });
        }
      }
      return result;
    }
    exportJson() {
      const cfg = (0, APIAdapter_1.boardToConfig)(this.board);
      this.updateConfigStatusFromBoard(this.board, cfg);
      return cfg;
    }
    exportFEN() {
      return (0, fen_1.toFEN)(this.board);
    }
    printToConsole() {
      process.stdout.write(`
`);
      for (let rank2 = 7;rank2 >= 0; rank2--) {
        process.stdout.write(`${rank2 + 1}`);
        for (let file2 = 0;file2 < 8; file2++) {
          const index = rank2 * 8 + file2;
          const piece = this.board.mailbox[index];
          const isWhiteSquare = (rank2 + file2) % 2 === 0;
          const symbol = pieceToUnicode(piece, isWhiteSquare);
          process.stdout.write(symbol);
        }
        process.stdout.write(`
`);
      }
      process.stdout.write(` ABCDEFGH
`);
    }
    aiMove(level = 3) {
      if (level < 1 || level > 5) {
        throw new Error("AI level must be between 1 and 5");
      }
      const ttSizeMB = (0, TranspositionTable_1.getRecommendedTTSize)(level);
      const bestMove = this.aiEngine.findBestMove(this.board, level, ttSizeMB);
      if (!bestMove) {
        throw new Error("Game is already finished");
      }
      const fromSquare = (0, conversion_1.indexToSquare)(bestMove.from);
      const toSquare = (0, conversion_1.indexToSquare)(bestMove.to);
      const historyEntry = { [fromSquare]: toSquare };
      this.history.push(historyEntry);
      (0, MoveGenerator_1.applyMoveComplete)(this.board, bestMove);
      return historyEntry;
    }
    ai(options = {}) {
      const requestedLevel = options.level ?? 3;
      const level = Math.max(1, Math.min(5, requestedLevel));
      const play = options.play ?? true;
      const analysis = options.analysis ?? false;
      const defaultSize = (0, TranspositionTable_1.getRecommendedTTSize)(level);
      const ttSizeMB = options.ttSizeMB === 0 ? 0 : Math.max(0.25, options.ttSizeMB ?? defaultSize);
      if (requestedLevel < 1 || requestedLevel > 5) {
        throw new Error("AI level must be between 1 and 5");
      }
      if (options.depth) {
        const d = options.depth;
        if (d.base !== undefined && (!Number.isInteger(d.base) || d.base < 1)) {
          throw new Error("depth.base must be an integer > 0");
        }
        if (d.extended !== undefined && (!Number.isInteger(d.extended) || d.extended < 0 || d.extended > 3)) {
          throw new Error("depth.extended must be an integer between 0 and 3");
        }
        if (d.quiescence !== undefined && (!Number.isInteger(d.quiescence) || d.quiescence < 0)) {
          throw new Error("depth.quiescence must be an integer >= 0");
        }
        if (d.check !== undefined && typeof d.check !== "boolean") {
          throw new Error("depth.check must be a boolean");
        }
      }
      if (options.randomness !== undefined) {
        if (typeof options.randomness !== "number" || !isFinite(options.randomness) || options.randomness < 0) {
          throw new Error("randomness must be a non-negative number");
        }
      }
      const searchResult = analysis ? this.aiEngine.findBestMoveDetailed(this.board, { level, ttSizeMB, depth: options.depth, analysis: true, randomness: options.randomness }) : null;
      const bestMove = searchResult ? searchResult.move : this.aiEngine.findBestMove(this.board, level, ttSizeMB, options.depth, options.randomness);
      if (!bestMove) {
        throw new Error("Game is already finished");
      }
      const fromSquare = (0, conversion_1.indexToSquare)(bestMove.from);
      const toSquare = (0, conversion_1.indexToSquare)(bestMove.to);
      const historyEntry = { [fromSquare]: toSquare };
      const analysisFields = analysis && searchResult?.scoredMoves ? {
        analysis: searchResult.scoredMoves.map(({ move: move2, score }) => {
          const from = (0, conversion_1.indexToSquare)(move2.from);
          const to = (0, conversion_1.indexToSquare)(move2.to);
          const historyMove = { [from]: to };
          return { move: historyMove, score };
        }),
        depth: searchResult.depth,
        nodesSearched: searchResult.nodesSearched,
        bestScore: searchResult.score
      } : undefined;
      if (!play) {
        const cfg2 = (0, APIAdapter_1.boardToConfig)(this.board);
        this.updateConfigStatusFromBoard(this.board, cfg2);
        return { move: historyEntry, board: cfg2, ...analysisFields ?? {} };
      }
      this.history.push(historyEntry);
      (0, MoveGenerator_1.applyMoveComplete)(this.board, bestMove);
      const cfg = (0, APIAdapter_1.boardToConfig)(this.board);
      this.updateConfigStatusFromBoard(this.board, cfg);
      return {
        move: historyEntry,
        board: cfg,
        ...analysisFields ?? {}
      };
    }
    updateConfigStatusFromBoard(board, cfg) {
      const inCheck = (0, AttackDetector_1.isKingInCheck)(board);
      const moves2 = (0, MoveGenerator_1.generateLegalMoves)(board);
      const isMate = inCheck && moves2.length === 0;
      const isStalemate = !inCheck && moves2.length === 0;
      cfg.check = inCheck;
      cfg.checkMate = isMate;
      cfg.staleMate = isStalemate;
      cfg.isFinished = isMate || isStalemate;
    }
  }
  exports.Game = Game;
  function pieceToUnicode(piece, isWhiteSquare) {
    const symbols = {
      0: isWhiteSquare ? "█" : "░",
      1: "♙",
      2: "♘",
      3: "♗",
      4: "♖",
      5: "♕",
      6: "♔",
      7: "♟",
      8: "♞",
      9: "♝",
      10: "♜",
      11: "♛",
      12: "♚"
    };
    return symbols[piece] || (isWhiteSquare ? "█" : "░");
  }
  function moves(config) {
    const game = new Game(config);
    return game.moves();
  }
  function status(config) {
    const game = new Game(config);
    return game.exportJson();
  }
  function getFen(config) {
    const game = new Game(config);
    return game.exportFEN();
  }
  function move(config, from, to) {
    const game = new Game(config);
    return game.move(from, to);
  }
  function aiMove(config, level = 3) {
    const game = new Game(config);
    return game.aiMove(level);
  }
  function ai(config, options = {}) {
    const game = new Game(config);
    return game.ai(options);
  }
});

// index.js
var import_sweetalert2 = __toESM(require_sweetalert2_all(), 1);

// node_modules/cm-chessboard/src/model/Position.js
var FEN = {
  start: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  empty: "8/8/8/8/8/8/8/8"
};

class Position {
  constructor(fen = FEN.empty) {
    this.squares = new Array(64).fill(null);
    this.setFen(fen);
  }
  setFen(fen = FEN.empty) {
    const parts = fen.replace(/^\s*/, "").replace(/\s*$/, "").split(/\/|\s/);
    for (let part = 0;part < 8; part++) {
      const row = parts[7 - part].replace(/\d/g, (str) => {
        const numSpaces = parseInt(str);
        let ret = "";
        for (let i = 0;i < numSpaces; i++) {
          ret += "-";
        }
        return ret;
      });
      for (let c = 0;c < 8; c++) {
        const char = row.substring(c, c + 1);
        let piece = null;
        if (char !== "-") {
          if (char.toUpperCase() === char) {
            piece = `w${char.toLowerCase()}`;
          } else {
            piece = `b${char}`;
          }
        }
        this.squares[part * 8 + c] = piece;
      }
    }
  }
  getFen() {
    let parts = new Array(8).fill("");
    for (let part = 0;part < 8; part++) {
      let spaceCounter = 0;
      for (let i = 0;i < 8; i++) {
        const piece = this.squares[part * 8 + i];
        if (!piece) {
          spaceCounter++;
        } else {
          if (spaceCounter > 0) {
            parts[7 - part] += spaceCounter;
            spaceCounter = 0;
          }
          const color = piece.substring(0, 1);
          const name = piece.substring(1, 2);
          if (color === "w") {
            parts[7 - part] += name.toUpperCase();
          } else {
            parts[7 - part] += name;
          }
        }
      }
      if (spaceCounter > 0) {
        parts[7 - part] += spaceCounter;
        spaceCounter = 0;
      }
    }
    return parts.join("/");
  }
  getPieces(pieceColor = undefined, pieceType = undefined, sortBy = ["k", "q", "r", "b", "n", "p"]) {
    const pieces = [];
    const sort = (a, b) => {
      return sortBy.indexOf(a.name) - sortBy.indexOf(b.name);
    };
    for (let i = 0;i < 64; i++) {
      const piece = this.squares[i];
      if (piece) {
        const type = piece.charAt(1);
        const color = piece.charAt(0);
        const square = Position.indexToSquare(i);
        if (pieceType && pieceType !== type || pieceColor && pieceColor !== color) {
          continue;
        }
        pieces.push({
          name: type,
          type,
          color,
          position: square,
          square
        });
      }
    }
    if (sortBy) {
      pieces.sort(sort);
    }
    return pieces;
  }
  movePiece(squareFrom, squareTo) {
    if (!this.squares[Position.squareToIndex(squareFrom)]) {
      console.warn("no piece on", squareFrom);
      return;
    }
    this.squares[Position.squareToIndex(squareTo)] = this.squares[Position.squareToIndex(squareFrom)];
    this.squares[Position.squareToIndex(squareFrom)] = null;
  }
  setPiece(square, piece) {
    this.squares[Position.squareToIndex(square)] = piece;
  }
  getPiece(square) {
    return this.squares[Position.squareToIndex(square)];
  }
  static squareToIndex(square) {
    const coordinates = Position.squareToCoordinates(square);
    return coordinates[0] + coordinates[1] * 8;
  }
  static indexToSquare(index) {
    return this.coordinatesToSquare([Math.floor(index % 8), index / 8]);
  }
  static squareToCoordinates(square) {
    const file = square.charCodeAt(0) - 97;
    const rank = square.charCodeAt(1) - 49;
    return [file, rank];
  }
  static coordinatesToSquare(coordinates) {
    const file = String.fromCharCode(coordinates[0] + 97);
    const rank = String.fromCharCode(coordinates[1] + 49);
    return file + rank;
  }
  toString() {
    return this.getFen();
  }
  clone() {
    const cloned = Object.create(Position.prototype);
    cloned.squares = this.squares.slice(0);
    return cloned;
  }
}

// node_modules/cm-chessboard/src/model/ChessboardState.js
class ChessboardState {
  constructor() {
    this.position = new Position;
    this.orientation = undefined;
    this.inputWhiteEnabled = false;
    this.inputBlackEnabled = false;
    this.squareSelectEnabled = false;
    this.moveInputCallback = null;
    this.extensionPoints = {};
    this.moveInputProcess = Promise.resolve();
  }
  inputEnabled() {
    return this.inputWhiteEnabled || this.inputBlackEnabled;
  }
  invokeExtensionPoints(name, data = {}) {
    const extensionPoints = this.extensionPoints[name];
    const dataCloned = Object.assign({}, data);
    dataCloned.extensionPoint = name;
    let returnValue = true;
    if (extensionPoints) {
      for (const extensionPoint of extensionPoints) {
        if (extensionPoint(dataCloned) === false) {
          returnValue = false;
        }
      }
    }
    return returnValue;
  }
}

// node_modules/cm-chessboard/src/lib/Svg.js
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";

class Svg {
  static createSvg(containerElement = undefined) {
    let svg = document.createElementNS(SVG_NAMESPACE, "svg");
    if (containerElement) {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      containerElement.appendChild(svg);
    }
    return svg;
  }
  static addElement(parent, name, attributes = {}) {
    let element = document.createElementNS(SVG_NAMESPACE, name);
    if (name === "use") {
      attributes["xlink:href"] = attributes["href"];
    }
    for (let attribute in attributes) {
      if (attributes.hasOwnProperty(attribute)) {
        if (attribute.indexOf(":") !== -1) {
          const value = attribute.split(":");
          element.setAttributeNS("http://www.w3.org/1999/" + value[0], value[1], attributes[attribute]);
        } else {
          element.setAttribute(attribute, attributes[attribute]);
        }
      }
    }
    parent.appendChild(element);
    return element;
  }
  static removeElement(element) {
    if (!element) {
      console.warn("removeElement, element is", element);
      return;
    }
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    } else {
      console.warn(element, "without parentNode");
    }
  }
}

// node_modules/cm-chessboard/src/model/Extension.js
var EXTENSION_POINT = {
  positionChanged: "positionChanged",
  boardChanged: "boardChanged",
  moveInputToggled: "moveInputToggled",
  moveInput: "moveInput",
  beforeRedrawBoard: "beforeRedrawBoard",
  afterRedrawBoard: "afterRedrawBoard",
  redrawBoard: "redrawBoard",
  animation: "animation",
  destroy: "destroy"
};

class Extension {
  constructor(chessboard) {
    this.chessboard = chessboard;
  }
  registerExtensionPoint(name, callback) {
    if (name === EXTENSION_POINT.redrawBoard) {
      console.warn("EXTENSION_POINT.redrawBoard is deprecated, use EXTENSION_POINT.afterRedrawBoard");
      name = EXTENSION_POINT.afterRedrawBoard;
    }
    if (!this.chessboard.state.extensionPoints[name]) {
      this.chessboard.state.extensionPoints[name] = [];
    }
    this.chessboard.state.extensionPoints[name].push(callback);
  }
  registerMethod(name, callback) {
    console.warn("registerMethod is deprecated, just add methods directly to the chessboard instance");
    if (!this.chessboard[name]) {
      this.chessboard[name] = (...args) => {
        return callback.apply(this, args);
      };
    } else {
      log.error("method", name, "already exists");
    }
  }
}

// node_modules/cm-chessboard/src/lib/Utils.js
class Utils {
  static delegate(element, eventName, selector, handler) {
    const eventListener = function(event) {
      const match = event.target.closest(selector);
      if (match && this.contains(match)) {
        handler.call(match, event);
      }
    };
    element.addEventListener(eventName, eventListener);
    return {
      remove: function() {
        element.removeEventListener(eventName, eventListener);
      }
    };
  }
  static mergeObjects(target, source) {
    const isObject = (obj) => obj && typeof obj === "object";
    if (!isObject(target) || !isObject(source)) {
      return source;
    }
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object) {
        Object.assign(source[key], Utils.mergeObjects(target[key], source[key]));
      }
    }
    Object.assign(target || {}, source);
    return target;
  }
  static createDomElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }
  static createTask() {
    let resolve, reject;
    const promise = new Promise(function(_resolve, _reject) {
      resolve = _resolve;
      reject = _reject;
    });
    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
  }
  static isAbsoluteUrl(url) {
    return url.indexOf("://") !== -1 || url.startsWith("/");
  }
}

// node_modules/cm-chessboard/src/view/PositionAnimationsQueue.js
var ANIMATION_EVENT_TYPE = {
  start: "start",
  frame: "frame",
  end: "end"
};

class PromiseQueue {
  constructor() {
    this.queue = [];
    this.workingOnPromise = false;
    this.stop = false;
  }
  async enqueue(promise) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promise,
        resolve,
        reject
      });
      this.dequeue();
    });
  }
  dequeue() {
    if (this.workingOnPromise) {
      return;
    }
    if (this.stop) {
      this.queue = [];
      this.stop = false;
      return;
    }
    const entry = this.queue.shift();
    if (!entry) {
      return;
    }
    try {
      this.workingOnPromise = true;
      entry.promise().then((value) => {
        this.workingOnPromise = false;
        entry.resolve(value);
        this.dequeue();
      }).catch((err) => {
        this.workingOnPromise = false;
        entry.reject(err);
        this.dequeue();
      });
    } catch (err) {
      this.workingOnPromise = false;
      entry.reject(err);
      this.dequeue();
    }
    return true;
  }
  destroy() {
    this.stop = true;
  }
}
var CHANGE_TYPE = {
  move: 0,
  appear: 1,
  disappear: 2
};

class PositionsAnimation {
  constructor(view, fromPosition, toPosition, duration, callback) {
    this.view = view;
    if (fromPosition && toPosition) {
      this.animatedElements = this.createAnimation(fromPosition.squares, toPosition.squares);
      this.duration = duration;
      this.callback = callback;
      this.frameHandle = requestAnimationFrame(this.animationStep.bind(this));
    } else {
      console.error("fromPosition", fromPosition, "toPosition", toPosition);
    }
    this.view.positionsAnimationTask = Utils.createTask();
    this.view.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.animation, {
      type: ANIMATION_EVENT_TYPE.start
    });
  }
  static seekChanges(fromSquares, toSquares) {
    const appearedList = [], disappearedList = [], changes = [];
    for (let i = 0;i < 64; i++) {
      const previousSquare = fromSquares[i];
      const newSquare = toSquares[i];
      if (newSquare !== previousSquare) {
        if (newSquare) {
          appearedList.push({ piece: newSquare, index: i });
        }
        if (previousSquare) {
          disappearedList.push({ piece: previousSquare, index: i });
        }
      }
    }
    appearedList.forEach((appeared) => {
      let shortestDistance = 8;
      let foundMoved = null;
      disappearedList.forEach((disappeared) => {
        if (appeared.piece === disappeared.piece) {
          const moveDistance = PositionsAnimation.squareDistance(appeared.index, disappeared.index);
          if (moveDistance < shortestDistance) {
            foundMoved = disappeared;
            shortestDistance = moveDistance;
          }
        }
      });
      if (foundMoved) {
        disappearedList.splice(disappearedList.indexOf(foundMoved), 1);
        changes.push({
          type: CHANGE_TYPE.move,
          piece: appeared.piece,
          atIndex: foundMoved.index,
          toIndex: appeared.index
        });
      } else {
        changes.push({ type: CHANGE_TYPE.appear, piece: appeared.piece, atIndex: appeared.index });
      }
    });
    disappearedList.forEach((disappeared) => {
      changes.push({ type: CHANGE_TYPE.disappear, piece: disappeared.piece, atIndex: disappeared.index });
    });
    return changes;
  }
  createAnimation(fromSquares, toSquares) {
    const changes = PositionsAnimation.seekChanges(fromSquares, toSquares);
    const animatedElements = [];
    changes.forEach((change) => {
      const animatedItem = {
        type: change.type
      };
      switch (change.type) {
        case CHANGE_TYPE.move:
          animatedItem.element = this.view.getPieceElement(Position.indexToSquare(change.atIndex));
          animatedItem.element.parentNode.appendChild(animatedItem.element);
          animatedItem.atPoint = this.view.indexToPoint(change.atIndex);
          animatedItem.toPoint = this.view.indexToPoint(change.toIndex);
          break;
        case CHANGE_TYPE.appear:
          animatedItem.element = this.view.drawPieceOnSquare(Position.indexToSquare(change.atIndex), change.piece);
          animatedItem.element.style.opacity = 0;
          break;
        case CHANGE_TYPE.disappear:
          animatedItem.element = this.view.getPieceElement(Position.indexToSquare(change.atIndex));
          break;
      }
      animatedElements.push(animatedItem);
    });
    return animatedElements;
  }
  animationStep(time) {
    if (!this.view || !this.view.chessboard.state) {
      return;
    }
    if (!this.startTime) {
      this.startTime = time;
    }
    const timeDiff = time - this.startTime;
    if (timeDiff <= this.duration) {
      this.frameHandle = requestAnimationFrame(this.animationStep.bind(this));
    } else {
      cancelAnimationFrame(this.frameHandle);
      this.animatedElements.forEach((animatedItem) => {
        if (animatedItem.type === CHANGE_TYPE.disappear) {
          Svg.removeElement(animatedItem.element);
        }
      });
      this.view.positionsAnimationTask.resolve();
      this.view.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.animation, {
        type: ANIMATION_EVENT_TYPE.end
      });
      this.callback();
      return;
    }
    const t = Math.min(1, timeDiff / this.duration);
    let progress = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    if (isNaN(progress) || progress > 0.99) {
      progress = 1;
    }
    this.animatedElements.forEach((animatedItem) => {
      if (animatedItem.element) {
        switch (animatedItem.type) {
          case CHANGE_TYPE.move:
            animatedItem.element.transform.baseVal.removeItem(0);
            const transform = this.view.svg.createSVGTransform();
            transform.setTranslate(animatedItem.atPoint.x + (animatedItem.toPoint.x - animatedItem.atPoint.x) * progress, animatedItem.atPoint.y + (animatedItem.toPoint.y - animatedItem.atPoint.y) * progress);
            animatedItem.element.transform.baseVal.appendItem(transform);
            break;
          case CHANGE_TYPE.appear:
            animatedItem.element.style.opacity = Math.round(progress * 100) / 100;
            break;
          case CHANGE_TYPE.disappear:
            animatedItem.element.style.opacity = Math.round((1 - progress) * 100) / 100;
            break;
        }
      } else {
        console.warn("animatedItem has no element", animatedItem);
      }
    });
    this.view.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.animation, {
      type: ANIMATION_EVENT_TYPE.frame,
      progress
    });
  }
  static squareDistance(index1, index2) {
    const file1 = index1 % 8;
    const rank1 = Math.floor(index1 / 8);
    const file2 = index2 % 8;
    const rank2 = Math.floor(index2 / 8);
    return Math.max(Math.abs(rank2 - rank1), Math.abs(file2 - file1));
  }
}

class PositionAnimationsQueue extends PromiseQueue {
  constructor(chessboard) {
    super();
    this.chessboard = chessboard;
  }
  async enqueuePositionChange(positionFrom, positionTo, animated) {
    if (positionFrom.getFen() === positionTo.getFen()) {
      return super.enqueue(() => Promise.resolve());
    } else {
      return super.enqueue(() => new Promise((resolve) => {
        let duration = animated ? this.chessboard.props.style.animationDuration : 0;
        if (this.queue.length > 0) {
          duration = duration / (1 + Math.pow(this.queue.length / 5, 2));
        }
        new PositionsAnimation(this.chessboard.view, positionFrom, positionTo, animated ? duration : 0, () => {
          if (this.chessboard.view) {
            this.chessboard.view.redrawPieces(positionTo.squares);
          }
          resolve();
        });
      }));
    }
  }
  async enqueueTurnBoard(position, color, animated) {
    return super.enqueue(() => new Promise((resolve) => {
      const emptyPosition = new Position(FEN.empty);
      let duration = animated ? this.chessboard.props.style.animationDuration : 0;
      if (this.queue.length > 0) {
        duration = duration / (1 + Math.pow(this.queue.length / 5, 2));
      }
      new PositionsAnimation(this.chessboard.view, position, emptyPosition, animated ? duration : 0, () => {
        this.chessboard.state.orientation = color;
        this.chessboard.view.redrawBoard();
        this.chessboard.view.redrawPieces(emptyPosition.squares);
        new PositionsAnimation(this.chessboard.view, emptyPosition, position, animated ? duration : 0, () => {
          this.chessboard.view.redrawPieces(position.squares);
          resolve();
        });
      });
    }));
  }
}

// node_modules/cm-chessboard/src/view/VisualMoveInput.js
var MOVE_INPUT_STATE = {
  waitForInputStart: "waitForInputStart",
  pieceClickedThreshold: "pieceClickedThreshold",
  clickTo: "clickTo",
  secondClickThreshold: "secondClickThreshold",
  dragTo: "dragTo",
  clickDragTo: "clickDragTo",
  moveDone: "moveDone",
  reset: "reset"
};
var MOVE_CANCELED_REASON = {
  secondClick: "secondClick",
  secondaryClick: "secondaryClick",
  movedOutOfBoard: "movedOutOfBoard",
  draggedBack: "draggedBack",
  clickedAnotherPiece: "clickedAnotherPiece"
};
var DRAG_THRESHOLD = 4;

class VisualMoveInput {
  constructor(view) {
    this.view = view;
    this.chessboard = view.chessboard;
    this.moveInputState = null;
    this.fromSquare = null;
    this.toSquare = null;
    this.setMoveInputState(MOVE_INPUT_STATE.waitForInputStart);
  }
  moveInputStartedCallback(square) {
    const result = this.view.moveInputStartedCallback(square);
    if (result) {
      this.chessboard.state.moveInputProcess = Utils.createTask();
      this.chessboard.state.moveInputProcess.then((result2) => {
        if (this.moveInputState === MOVE_INPUT_STATE.waitForInputStart || this.moveInputState === MOVE_INPUT_STATE.moveDone) {
          this.view.moveInputFinishedCallback(this.fromSquare, this.toSquare, result2);
        }
      });
    }
    return result;
  }
  movingOverSquareCallback(fromSquare, toSquare) {
    this.view.movingOverSquareCallback(fromSquare, toSquare);
  }
  validateMoveInputCallback(fromSquare, toSquare) {
    const result = this.view.validateMoveInputCallback(fromSquare, toSquare);
    this.chessboard.state.moveInputProcess.resolve(result);
    return result;
  }
  moveInputCanceledCallback(fromSquare, toSquare, reason) {
    this.view.moveInputCanceledCallback(fromSquare, toSquare, reason);
    this.chessboard.state.moveInputProcess.resolve();
  }
  setMoveInputState(newState, params = undefined) {
    const prevState = this.moveInputState;
    this.moveInputState = newState;
    switch (newState) {
      case MOVE_INPUT_STATE.waitForInputStart:
        break;
      case MOVE_INPUT_STATE.pieceClickedThreshold:
        if (MOVE_INPUT_STATE.waitForInputStart !== prevState && MOVE_INPUT_STATE.clickTo !== prevState) {
          throw new Error("moveInputState");
        }
        if (this.pointerMoveListener) {
          removeEventListener(this.pointerMoveListener.type, this.pointerMoveListener);
          this.pointerMoveListener = null;
        }
        if (this.pointerUpListener) {
          removeEventListener(this.pointerUpListener.type, this.pointerUpListener);
          this.pointerUpListener = null;
        }
        this.fromSquare = params.square;
        this.toSquare = null;
        this.movedPiece = params.piece;
        this.startPoint = params.point;
        if (!this.pointerMoveListener && !this.pointerUpListener) {
          if (params.type === "mousedown") {
            this.pointerMoveListener = this.onPointerMove.bind(this);
            this.pointerMoveListener.type = "mousemove";
            addEventListener("mousemove", this.pointerMoveListener);
            this.pointerUpListener = this.onPointerUp.bind(this);
            this.pointerUpListener.type = "mouseup";
            addEventListener("mouseup", this.pointerUpListener);
          } else if (params.type === "touchstart") {
            this.pointerMoveListener = this.onPointerMove.bind(this);
            this.pointerMoveListener.type = "touchmove";
            addEventListener("touchmove", this.pointerMoveListener);
            this.pointerUpListener = this.onPointerUp.bind(this);
            this.pointerUpListener.type = "touchend";
            addEventListener("touchend", this.pointerUpListener);
          } else {
            throw Error("4b74af");
          }
          if (!this.contextMenuListener) {
            this.contextMenuListener = this.onContextMenu.bind(this);
            this.chessboard.view.svg.addEventListener("contextmenu", this.contextMenuListener);
          }
        } else {
          throw Error("94ad0c");
        }
        break;
      case MOVE_INPUT_STATE.clickTo:
        if (this.draggablePiece) {
          Svg.removeElement(this.draggablePiece);
          this.draggablePiece = null;
        }
        if (prevState === MOVE_INPUT_STATE.dragTo) {
          this.view.setPieceVisibility(params.square, true);
        }
        break;
      case MOVE_INPUT_STATE.secondClickThreshold:
        if (MOVE_INPUT_STATE.clickTo !== prevState) {
          throw new Error("moveInputState");
        }
        this.startPoint = params.point;
        break;
      case MOVE_INPUT_STATE.dragTo:
        if (MOVE_INPUT_STATE.pieceClickedThreshold !== prevState) {
          throw new Error("moveInputState");
        }
        if (this.view.chessboard.state.inputEnabled()) {
          this.view.setPieceVisibility(params.square, false);
          this.createDraggablePiece(params.piece);
        }
        break;
      case MOVE_INPUT_STATE.clickDragTo:
        if (MOVE_INPUT_STATE.secondClickThreshold !== prevState) {
          throw new Error("moveInputState");
        }
        if (this.view.chessboard.state.inputEnabled()) {
          this.view.setPieceVisibility(params.square, false);
          this.createDraggablePiece(params.piece);
        }
        break;
      case MOVE_INPUT_STATE.moveDone:
        if ([MOVE_INPUT_STATE.dragTo, MOVE_INPUT_STATE.clickTo, MOVE_INPUT_STATE.clickDragTo].indexOf(prevState) === -1) {
          throw new Error("moveInputState");
        }
        this.toSquare = params.square;
        if (this.toSquare && this.validateMoveInputCallback(this.fromSquare, this.toSquare)) {
          this.chessboard.movePiece(this.fromSquare, this.toSquare, prevState === MOVE_INPUT_STATE.clickTo).then(() => {
            if (prevState === MOVE_INPUT_STATE.clickTo) {
              this.view.setPieceVisibility(this.toSquare, true);
            }
            this.setMoveInputState(MOVE_INPUT_STATE.reset);
          });
        } else {
          this.view.setPieceVisibility(this.fromSquare, true);
          this.setMoveInputState(MOVE_INPUT_STATE.reset);
        }
        break;
      case MOVE_INPUT_STATE.reset:
        if (this.fromSquare && !this.toSquare && this.movedPiece) {
          this.chessboard.state.position.setPiece(this.fromSquare, this.movedPiece);
        }
        this.fromSquare = null;
        this.toSquare = null;
        this.movedPiece = null;
        if (this.draggablePiece) {
          Svg.removeElement(this.draggablePiece);
          this.draggablePiece = null;
        }
        if (this.pointerMoveListener) {
          removeEventListener(this.pointerMoveListener.type, this.pointerMoveListener);
          this.pointerMoveListener = null;
        }
        if (this.pointerUpListener) {
          removeEventListener(this.pointerUpListener.type, this.pointerUpListener);
          this.pointerUpListener = null;
        }
        if (this.contextMenuListener) {
          removeEventListener("contextmenu", this.contextMenuListener);
          this.contextMenuListener = null;
        }
        this.setMoveInputState(MOVE_INPUT_STATE.waitForInputStart);
        const hiddenPieces = this.view.piecesGroup.querySelectorAll("[visibility=hidden]");
        for (let i = 0;i < hiddenPieces.length; i++) {
          hiddenPieces[i].removeAttribute("visibility");
        }
        break;
      default:
        throw Error(`260b09: moveInputState ${newState}`);
    }
  }
  createDraggablePiece(pieceName) {
    if (this.draggablePiece) {
      throw Error("draggablePiece already exists");
    }
    this.draggablePiece = Svg.createSvg(document.body);
    this.draggablePiece.classList.add("cm-chessboard-draggable-piece");
    this.draggablePiece.setAttribute("width", this.view.squareWidth);
    this.draggablePiece.setAttribute("height", this.view.squareHeight);
    this.draggablePiece.setAttribute("style", "pointer-events: none");
    this.draggablePiece.name = pieceName;
    const spriteUrl = this.chessboard.props.assetsCache ? "" : this.view.getSpriteUrl();
    const piece = Svg.addElement(this.draggablePiece, "use", {
      href: `${spriteUrl}#${pieceName}`
    });
    const scaling = this.view.squareHeight / this.chessboard.props.style.pieces.tileSize;
    const transformScale = this.draggablePiece.createSVGTransform();
    transformScale.setScale(scaling, scaling);
    piece.transform.baseVal.appendItem(transformScale);
  }
  moveDraggablePiece(x, y) {
    this.draggablePiece.setAttribute("style", `pointer-events: none; position: absolute; left: ${x - this.view.squareHeight / 2}px; top: ${y - this.view.squareHeight / 2}px`);
  }
  onPointerDown(e) {
    if (!(e.type === "mousedown" && e.button === 0 || e.type === "touchstart")) {
      return;
    }
    const square = e.target.getAttribute("data-square");
    if (!square) {
      return;
    }
    const pieceName = this.chessboard.getPiece(square);
    let color;
    if (pieceName) {
      color = pieceName ? pieceName.substring(0, 1) : null;
      if (color === "w" && this.chessboard.state.inputWhiteEnabled || color === "b" && this.chessboard.state.inputBlackEnabled) {
        e.preventDefault();
      }
    }
    if (this.moveInputState !== MOVE_INPUT_STATE.waitForInputStart || this.chessboard.state.inputWhiteEnabled && color === "w" || this.chessboard.state.inputBlackEnabled && color === "b") {
      let point;
      if (e.type === "mousedown") {
        point = { x: e.clientX, y: e.clientY };
      } else if (e.type === "touchstart") {
        point = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      if (this.moveInputState === MOVE_INPUT_STATE.waitForInputStart && pieceName && this.moveInputStartedCallback(square)) {
        this.setMoveInputState(MOVE_INPUT_STATE.pieceClickedThreshold, {
          square,
          piece: pieceName,
          point,
          type: e.type
        });
      } else if (this.moveInputState === MOVE_INPUT_STATE.clickTo) {
        if (square === this.fromSquare) {
          this.setMoveInputState(MOVE_INPUT_STATE.secondClickThreshold, {
            square,
            piece: pieceName,
            point,
            type: e.type
          });
        } else {
          const pieceName2 = this.chessboard.getPiece(square);
          const pieceColor = pieceName2 ? pieceName2.substring(0, 1) : null;
          const startPieceName = this.chessboard.getPiece(this.fromSquare);
          const startPieceColor = startPieceName ? startPieceName.substring(0, 1) : null;
          if (color && startPieceColor === pieceColor) {
            const result = this.validateMoveInputCallback(this.fromSquare, square);
            if (!result) {
              this.moveInputCanceledCallback(this.fromSquare, square, MOVE_CANCELED_REASON.clickedAnotherPiece);
              if (this.moveInputStartedCallback(square)) {
                this.setMoveInputState(MOVE_INPUT_STATE.pieceClickedThreshold, {
                  square,
                  piece: pieceName2,
                  point,
                  type: e.type
                });
              } else {
                this.setMoveInputState(MOVE_INPUT_STATE.reset);
              }
            }
          } else {
            this.setMoveInputState(MOVE_INPUT_STATE.moveDone, { square });
          }
        }
      }
    }
  }
  onPointerMove(e) {
    let pageX, pageY, clientX, clientY, target;
    if (e.type === "mousemove") {
      clientX = e.clientX;
      clientY = e.clientY;
      pageX = e.pageX;
      pageY = e.pageY;
      target = e.target;
    } else if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
      target = document.elementFromPoint(clientX, clientY);
    }
    if (this.moveInputState === MOVE_INPUT_STATE.pieceClickedThreshold || this.moveInputState === MOVE_INPUT_STATE.secondClickThreshold) {
      if (Math.abs(this.startPoint.x - clientX) > DRAG_THRESHOLD || Math.abs(this.startPoint.y - clientY) > DRAG_THRESHOLD) {
        if (this.moveInputState === MOVE_INPUT_STATE.secondClickThreshold) {
          this.setMoveInputState(MOVE_INPUT_STATE.clickDragTo, {
            square: this.fromSquare,
            piece: this.movedPiece
          });
        } else {
          this.setMoveInputState(MOVE_INPUT_STATE.dragTo, { square: this.fromSquare, piece: this.movedPiece });
        }
        if (this.view.chessboard.state.inputEnabled()) {
          this.moveDraggablePiece(pageX, pageY);
        }
      }
    } else if (this.moveInputState === MOVE_INPUT_STATE.dragTo || this.moveInputState === MOVE_INPUT_STATE.clickDragTo || this.moveInputState === MOVE_INPUT_STATE.clickTo) {
      if (target && target.getAttribute && target.parentElement === this.view.boardGroup) {
        const square = target.getAttribute("data-square");
        if (square !== this.fromSquare && square !== this.toSquare) {
          this.toSquare = square;
          this.movingOverSquareCallback(this.fromSquare, this.toSquare);
        } else if (square === this.fromSquare && this.toSquare !== null) {
          this.toSquare = null;
          this.movingOverSquareCallback(this.fromSquare, null);
        }
      } else if (this.toSquare !== null) {
        this.toSquare = null;
        this.movingOverSquareCallback(this.fromSquare, null);
      }
      if (this.view.chessboard.state.inputEnabled() && (this.moveInputState === MOVE_INPUT_STATE.dragTo || this.moveInputState === MOVE_INPUT_STATE.clickDragTo)) {
        this.moveDraggablePiece(pageX, pageY);
      }
    }
  }
  onPointerUp(e) {
    let target;
    if (e.type === "mouseup") {
      target = e.target;
    } else if (e.type === "touchend") {
      target = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
    if (target && target.getAttribute) {
      const square = target.getAttribute("data-square");
      if (square) {
        if (this.moveInputState === MOVE_INPUT_STATE.dragTo || this.moveInputState === MOVE_INPUT_STATE.clickDragTo) {
          if (this.fromSquare === square) {
            if (this.moveInputState === MOVE_INPUT_STATE.clickDragTo) {
              this.chessboard.state.position.setPiece(this.fromSquare, this.movedPiece);
              this.view.setPieceVisibility(this.fromSquare);
              this.moveInputCanceledCallback(square, null, MOVE_CANCELED_REASON.draggedBack);
              this.setMoveInputState(MOVE_INPUT_STATE.reset);
            } else {
              this.setMoveInputState(MOVE_INPUT_STATE.clickTo, { square });
            }
          } else {
            this.setMoveInputState(MOVE_INPUT_STATE.moveDone, { square });
          }
        } else if (this.moveInputState === MOVE_INPUT_STATE.pieceClickedThreshold) {
          this.setMoveInputState(MOVE_INPUT_STATE.clickTo, { square });
        } else if (this.moveInputState === MOVE_INPUT_STATE.secondClickThreshold) {
          this.setMoveInputState(MOVE_INPUT_STATE.reset);
          this.moveInputCanceledCallback(square, null, MOVE_CANCELED_REASON.secondClick);
        }
      } else {
        this.view.redrawPieces();
        const moveStartSquare = this.fromSquare;
        this.setMoveInputState(MOVE_INPUT_STATE.reset);
        this.moveInputCanceledCallback(moveStartSquare, null, MOVE_CANCELED_REASON.movedOutOfBoard);
      }
    } else {
      this.view.redrawPieces();
      this.setMoveInputState(MOVE_INPUT_STATE.reset);
    }
  }
  onContextMenu(e) {
    e.preventDefault();
    this.view.redrawPieces();
    this.setMoveInputState(MOVE_INPUT_STATE.reset);
    this.moveInputCanceledCallback(this.fromSquare, null, MOVE_CANCELED_REASON.secondaryClick);
  }
  isDragging() {
    return this.moveInputState === MOVE_INPUT_STATE.dragTo || this.moveInputState === MOVE_INPUT_STATE.clickDragTo;
  }
  destroy() {
    this.setMoveInputState(MOVE_INPUT_STATE.reset);
  }
}

// node_modules/cm-chessboard/src/view/ChessboardView.js
var COLOR = {
  white: "w",
  black: "b"
};
var INPUT_EVENT_TYPE = {
  moveInputStarted: "moveInputStarted",
  movingOverSquare: "movingOverSquare",
  validateMoveInput: "validateMoveInput",
  moveInputCanceled: "moveInputCanceled",
  moveInputFinished: "moveInputFinished"
};
var POINTER_EVENTS = {
  pointercancel: "pointercancel",
  pointerdown: "pointerdown",
  pointerenter: "pointerenter",
  pointerleave: "pointerleave",
  pointermove: "pointermove",
  pointerout: "pointerout",
  pointerover: "pointerover",
  pointerup: "pointerup"
};
var BORDER_TYPE = {
  none: "none",
  thin: "thin",
  frame: "frame"
};

class ChessboardView {
  constructor(chessboard) {
    this.chessboard = chessboard;
    this.visualMoveInput = new VisualMoveInput(this);
    if (chessboard.props.assetsCache) {
      this.cacheSpriteToDiv("cm-chessboard-sprite", this.getSpriteUrl());
    }
    this.container = document.createElement("div");
    this.chessboard.context.appendChild(this.container);
    if (chessboard.props.responsive) {
      if (typeof ResizeObserver !== "undefined") {
        this.resizeObserver = new ResizeObserver(() => {
          this.resizeTimeout = setTimeout(() => {
            this.resizeTimeout = null;
            this.handleResize();
          });
        });
        this.resizeObserver.observe(this.chessboard.context);
      } else {
        this.resizeListener = this.handleResize.bind(this);
        window.addEventListener("resize", this.resizeListener);
      }
    }
    this.positionsAnimationTask = Promise.resolve();
    this.pointerDownListener = this.pointerDownHandler.bind(this);
    this.container.addEventListener("mousedown", this.pointerDownListener);
    this.container.addEventListener("touchstart", this.pointerDownListener, { passive: false });
    this.createSvgAndGroups();
    this.handleResize();
  }
  pointerDownHandler(e) {
    this.visualMoveInput.onPointerDown(e);
  }
  destroy() {
    this.visualMoveInput.destroy();
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.chessboard.context);
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
    }
    this.chessboard.context.removeEventListener("mousedown", this.pointerDownListener);
    this.chessboard.context.removeEventListener("touchstart", this.pointerDownListener);
    Svg.removeElement(this.svg);
    this.container.remove();
  }
  cacheSpriteToDiv(wrapperId, url) {
    if (!document.getElementById(wrapperId)) {
      const wrapper = document.createElement("div");
      wrapper.style.transform = "scale(0)";
      wrapper.style.position = "absolute";
      wrapper.setAttribute("aria-hidden", "true");
      wrapper.id = wrapperId;
      document.body.appendChild(wrapper);
      const xhr = new XMLHttpRequest;
      xhr.open("GET", url, true);
      xhr.onload = function() {
        wrapper.insertAdjacentHTML("afterbegin", xhr.response);
      };
      xhr.send();
    }
  }
  createSvgAndGroups() {
    this.svg = Svg.createSvg(this.container);
    let cssClass = this.chessboard.props.style.cssClass ? this.chessboard.props.style.cssClass : "default";
    this.svg.setAttribute("class", "cm-chessboard border-type-" + this.chessboard.props.style.borderType + " " + cssClass);
    this.svg.setAttribute("role", "img");
    this.updateMetrics();
    this.boardGroup = Svg.addElement(this.svg, "g", { class: "board" });
    this.coordinatesGroup = Svg.addElement(this.svg, "g", { class: "coordinates", "aria-hidden": "true" });
    this.markersLayer = Svg.addElement(this.svg, "g", { class: "markers-layer" });
    this.piecesLayer = Svg.addElement(this.svg, "g", { class: "pieces-layer" });
    this.piecesGroup = Svg.addElement(this.piecesLayer, "g", { class: "pieces" });
    this.markersTopLayer = Svg.addElement(this.svg, "g", { class: "markers-top-layer" });
    this.interactiveTopLayer = Svg.addElement(this.svg, "g", { class: "interactive-top-layer" });
  }
  updateMetrics() {
    const piecesTileSize = this.chessboard.props.style.pieces.tileSize;
    this.width = this.container.clientWidth;
    this.height = this.container.clientWidth * (this.chessboard.props.style.aspectRatio || 1);
    if (this.chessboard.props.style.borderType === BORDER_TYPE.frame) {
      this.borderSize = this.width / 25;
    } else if (this.chessboard.props.style.borderType === BORDER_TYPE.thin) {
      this.borderSize = this.width / 320;
    } else {
      this.borderSize = 0;
    }
    this.innerWidth = this.width - 2 * this.borderSize;
    this.innerHeight = this.height - 2 * this.borderSize;
    this.squareWidth = this.innerWidth / 8;
    this.squareHeight = this.innerHeight / 8;
    this.scalingX = this.squareWidth / piecesTileSize;
    this.scalingY = this.squareHeight / piecesTileSize;
    this.pieceXTranslate = this.squareWidth / 2 - piecesTileSize * this.scalingY / 2;
  }
  handleResize() {
    if (!this.chessboard || !this.chessboard.state) {
      return;
    }
    this.container.style.width = this.chessboard.context.clientWidth + "px";
    this.container.style.height = this.chessboard.context.clientWidth * this.chessboard.props.style.aspectRatio + "px";
    if (this.container.clientWidth !== this.width || this.container.clientHeight !== this.height) {
      this.updateMetrics();
      this.redrawBoard();
      this.redrawPieces();
    }
    this.svg.setAttribute("width", "100%");
    this.svg.setAttribute("height", "100%");
  }
  redrawBoard() {
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.beforeRedrawBoard);
    this.redrawSquares();
    this.drawCoordinates();
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.afterRedrawBoard);
    this.visualizeInputState();
  }
  redrawSquares() {
    while (this.boardGroup.firstChild) {
      this.boardGroup.removeChild(this.boardGroup.lastChild);
    }
    let boardBorder = Svg.addElement(this.boardGroup, "rect", { width: this.width, height: this.height });
    boardBorder.setAttribute("class", "border");
    if (this.chessboard.props.style.borderType === BORDER_TYPE.frame) {
      const innerPos = this.borderSize;
      let borderInner = Svg.addElement(this.boardGroup, "rect", {
        x: innerPos,
        y: innerPos,
        width: this.width - innerPos * 2,
        height: this.height - innerPos * 2
      });
      borderInner.setAttribute("class", "border-inner");
    }
    for (let i = 0;i < 64; i++) {
      const index = this.chessboard.state.orientation === COLOR.white ? i : 63 - i;
      const squareColor = (9 * index & 8) === 0 ? "black" : "white";
      const fieldClass = `square ${squareColor}`;
      const point = this.squareToPoint(Position.indexToSquare(index));
      const squareRect = Svg.addElement(this.boardGroup, "rect", {
        x: point.x,
        y: point.y,
        width: this.squareWidth,
        height: this.squareHeight
      });
      squareRect.setAttribute("class", fieldClass);
      squareRect.setAttribute("data-square", Position.indexToSquare(index));
    }
  }
  drawCoordinates() {
    if (!this.chessboard.props.style.showCoordinates) {
      return;
    }
    while (this.coordinatesGroup.firstChild) {
      this.coordinatesGroup.removeChild(this.coordinatesGroup.lastChild);
    }
    const inline = this.chessboard.props.style.borderType !== BORDER_TYPE.frame;
    for (let file = 0;file < 8; file++) {
      let x = this.borderSize + (17 + this.chessboard.props.style.pieces.tileSize * file) * this.scalingX;
      let y = this.height - this.scalingY * 3.5;
      let cssClass = "coordinate file";
      if (inline) {
        x = x + this.scalingX * 15.5;
        cssClass += file % 2 ? " white" : " black";
      }
      const textElement = Svg.addElement(this.coordinatesGroup, "text", {
        class: cssClass,
        x,
        y,
        style: `font-size: ${this.scalingY * 10}px`
      });
      if (this.chessboard.state.orientation === COLOR.white) {
        textElement.textContent = String.fromCharCode(97 + file);
      } else {
        textElement.textContent = String.fromCharCode(104 - file);
      }
    }
    for (let rank = 0;rank < 8; rank++) {
      let x = this.borderSize / 3.7;
      let y = this.borderSize + 25 * this.scalingY + rank * this.squareHeight;
      let cssClass = "coordinate rank";
      if (inline) {
        cssClass += rank % 2 ? " black" : " white";
        if (this.chessboard.props.style.borderType === BORDER_TYPE.frame) {
          x = x + this.scalingX * 10;
          y = y - this.scalingY * 15;
        } else {
          x = x + this.scalingX * 2;
          y = y - this.scalingY * 15;
        }
      }
      const textElement = Svg.addElement(this.coordinatesGroup, "text", {
        class: cssClass,
        x,
        y,
        style: `font-size: ${this.scalingY * 10}px`
      });
      if (this.chessboard.state.orientation === COLOR.white) {
        textElement.textContent = "" + (8 - rank);
      } else {
        textElement.textContent = "" + (1 + rank);
      }
    }
  }
  redrawPieces(squares = this.chessboard.state.position.squares) {
    const childNodes = Array.from(this.piecesGroup.childNodes);
    const isDragging = this.visualMoveInput.isDragging();
    for (let i = 0;i < 64; i++) {
      const pieceName = squares[i];
      if (pieceName) {
        const square = Position.indexToSquare(i);
        this.drawPieceOnSquare(square, pieceName, isDragging && square === this.visualMoveInput.fromSquare);
      }
    }
    for (const childNode of childNodes) {
      this.piecesGroup.removeChild(childNode);
    }
  }
  drawPiece(parentGroup, pieceName, point) {
    const pieceGroup = Svg.addElement(parentGroup, "g", {});
    pieceGroup.setAttribute("data-piece", pieceName);
    const transform = this.svg.createSVGTransform();
    transform.setTranslate(point.x, point.y);
    pieceGroup.transform.baseVal.appendItem(transform);
    const spriteUrl = this.chessboard.props.assetsCache ? "" : this.getSpriteUrl();
    const pieceUse = Svg.addElement(pieceGroup, "use", {
      href: `${spriteUrl}#${pieceName}`,
      class: "piece"
    });
    const transformScale = this.svg.createSVGTransform();
    transformScale.setScale(this.scalingY, this.scalingY);
    pieceUse.transform.baseVal.appendItem(transformScale);
    return pieceGroup;
  }
  drawPieceOnSquare(square, pieceName, hidden = false) {
    const pieceGroup = Svg.addElement(this.piecesGroup, "g", {});
    pieceGroup.setAttribute("data-piece", pieceName);
    pieceGroup.setAttribute("data-square", square);
    if (hidden) {
      pieceGroup.setAttribute("visibility", "hidden");
    }
    const point = this.squareToPoint(square);
    const transform = this.svg.createSVGTransform();
    transform.setTranslate(point.x, point.y);
    pieceGroup.transform.baseVal.appendItem(transform);
    const spriteUrl = this.chessboard.props.assetsCache ? "" : this.getSpriteUrl();
    const pieceUse = Svg.addElement(pieceGroup, "use", {
      href: `${spriteUrl}#${pieceName}`,
      class: "piece"
    });
    const transformTranslate = this.svg.createSVGTransform();
    transformTranslate.setTranslate(this.pieceXTranslate, 0);
    pieceUse.transform.baseVal.appendItem(transformTranslate);
    const transformScale = this.svg.createSVGTransform();
    transformScale.setScale(this.scalingY, this.scalingY);
    pieceUse.transform.baseVal.appendItem(transformScale);
    return pieceGroup;
  }
  setPieceVisibility(square, visible = true) {
    const piece = this.getPieceElement(square);
    if (piece) {
      if (visible) {
        piece.setAttribute("visibility", "visible");
      } else {
        piece.setAttribute("visibility", "hidden");
      }
    } else {
      console.warn("no piece on", square);
    }
  }
  getPieceElement(square) {
    if (!square || square.length < 2) {
      console.warn("invalid square", square);
      return null;
    }
    const piece = this.piecesGroup.querySelector(`g[data-square='${square}']`);
    if (!piece) {
      console.warn("no piece on", square);
      return null;
    }
    return piece;
  }
  enableMoveInput(eventHandler, color = null) {
    if (this.chessboard.state.moveInputCallback) {
      throw Error("moveInput already enabled");
    }
    if (color === COLOR.white) {
      this.chessboard.state.inputWhiteEnabled = true;
    } else if (color === COLOR.black) {
      this.chessboard.state.inputBlackEnabled = true;
    } else {
      this.chessboard.state.inputWhiteEnabled = true;
      this.chessboard.state.inputBlackEnabled = true;
    }
    this.chessboard.state.moveInputCallback = eventHandler;
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInputToggled, { enabled: true, color });
    this.visualizeInputState();
  }
  disableMoveInput() {
    this.chessboard.state.inputWhiteEnabled = false;
    this.chessboard.state.inputBlackEnabled = false;
    this.chessboard.state.moveInputCallback = null;
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInputToggled, { enabled: false });
    this.visualizeInputState();
  }
  moveInputStartedCallback(square) {
    const data = {
      chessboard: this.chessboard,
      type: INPUT_EVENT_TYPE.moveInputStarted,
      square,
      squareFrom: square,
      piece: this.chessboard.getPiece(square)
    };
    if (this.chessboard.state.moveInputCallback) {
      data.moveInputCallbackResult = this.chessboard.state.moveInputCallback(data);
    }
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInput, data);
    return data.moveInputCallbackResult;
  }
  movingOverSquareCallback(squareFrom, squareTo) {
    const data = {
      chessboard: this.chessboard,
      type: INPUT_EVENT_TYPE.movingOverSquare,
      squareFrom,
      squareTo,
      piece: this.chessboard.getPiece(squareFrom)
    };
    if (this.chessboard.state.moveInputCallback) {
      data.moveInputCallbackResult = this.chessboard.state.moveInputCallback(data);
    }
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInput, data);
  }
  validateMoveInputCallback(squareFrom, squareTo) {
    const data = {
      chessboard: this.chessboard,
      type: INPUT_EVENT_TYPE.validateMoveInput,
      squareFrom,
      squareTo,
      piece: this.chessboard.getPiece(squareFrom)
    };
    if (this.chessboard.state.moveInputCallback) {
      data.moveInputCallbackResult = this.chessboard.state.moveInputCallback(data);
    }
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInput, data);
    return data.moveInputCallbackResult;
  }
  moveInputCanceledCallback(squareFrom, squareTo, reason) {
    const data = {
      chessboard: this.chessboard,
      type: INPUT_EVENT_TYPE.moveInputCanceled,
      reason,
      squareFrom,
      squareTo
    };
    if (this.chessboard.state.moveInputCallback) {
      this.chessboard.state.moveInputCallback(data);
    }
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInput, data);
  }
  moveInputFinishedCallback(squareFrom, squareTo, legalMove) {
    const data = {
      chessboard: this.chessboard,
      type: INPUT_EVENT_TYPE.moveInputFinished,
      squareFrom,
      squareTo,
      legalMove
    };
    if (this.chessboard.state.moveInputCallback) {
      this.chessboard.state.moveInputCallback(data);
    }
    this.chessboard.state.invokeExtensionPoints(EXTENSION_POINT.moveInput, data);
  }
  visualizeInputState() {
    if (this.chessboard.state) {
      if (this.chessboard.state.inputWhiteEnabled || this.chessboard.state.inputBlackEnabled) {
        this.boardGroup.setAttribute("class", "board input-enabled");
      } else {
        this.boardGroup.setAttribute("class", "board");
      }
    }
  }
  indexToPoint(index) {
    let x, y;
    if (this.chessboard.state.orientation === COLOR.white) {
      x = this.borderSize + index % 8 * this.squareWidth;
      y = this.borderSize + (7 - Math.floor(index / 8)) * this.squareHeight;
    } else {
      x = this.borderSize + (7 - index % 8) * this.squareWidth;
      y = this.borderSize + Math.floor(index / 8) * this.squareHeight;
    }
    return { x, y };
  }
  squareToPoint(square) {
    const index = Position.squareToIndex(square);
    return this.indexToPoint(index);
  }
  getSpriteUrl() {
    if (Utils.isAbsoluteUrl(this.chessboard.props.style.pieces.file)) {
      return this.chessboard.props.style.pieces.file;
    } else {
      return this.chessboard.props.assetsUrl + this.chessboard.props.style.pieces.file;
    }
  }
}

// node_modules/cm-chessboard/src/Chessboard.js
var PIECES_FILE_TYPE = {
  svgSprite: "svgSprite"
};
class Chessboard {
  constructor(context, props = {}) {
    if (!context) {
      throw new Error("container element is " + context);
    }
    this.context = context;
    this.id = (Math.random() + 1).toString(36).substring(2, 8);
    this.extensions = [];
    this.props = {
      position: FEN.empty,
      orientation: COLOR.white,
      responsive: true,
      assetsUrl: "./assets/",
      assetsCache: true,
      style: {
        cssClass: "default",
        showCoordinates: true,
        borderType: BORDER_TYPE.none,
        aspectRatio: 1,
        pieces: {
          type: PIECES_FILE_TYPE.svgSprite,
          file: "pieces/standard.svg",
          tileSize: 40
        },
        animationDuration: 300
      },
      extensions: []
    };
    Utils.mergeObjects(this.props, props);
    this.state = new ChessboardState;
    this.view = new ChessboardView(this);
    this.positionAnimationsQueue = new PositionAnimationsQueue(this);
    this.state.orientation = this.props.orientation;
    for (const extensionData of this.props.extensions) {
      this.addExtension(extensionData.class, extensionData.props);
    }
    this.view.redrawBoard();
    this.state.position = new Position(this.props.position);
    this.view.redrawPieces();
    this.state.invokeExtensionPoints(EXTENSION_POINT.positionChanged);
    this.initialized = Promise.resolve();
  }
  async setPiece(square, piece, animated = false) {
    const positionFrom = this.state.position.clone();
    this.state.position.setPiece(square, piece);
    this.state.invokeExtensionPoints(EXTENSION_POINT.positionChanged);
    return this.positionAnimationsQueue.enqueuePositionChange(positionFrom, this.state.position.clone(), animated);
  }
  async movePiece(squareFrom, squareTo, animated = false) {
    const positionFrom = this.state.position.clone();
    this.state.position.movePiece(squareFrom, squareTo);
    this.state.invokeExtensionPoints(EXTENSION_POINT.positionChanged);
    return this.positionAnimationsQueue.enqueuePositionChange(positionFrom, this.state.position.clone(), animated);
  }
  async setPosition(fen, animated = false) {
    const positionFrom = this.state.position.clone();
    const positionTo = new Position(fen);
    if (positionFrom.getFen() !== positionTo.getFen()) {
      this.state.position.setFen(fen);
      this.state.invokeExtensionPoints(EXTENSION_POINT.positionChanged);
    }
    return this.positionAnimationsQueue.enqueuePositionChange(positionFrom, this.state.position.clone(), animated);
  }
  async setOrientation(color, animated = false) {
    const position = this.state.position.clone();
    if (this.boardTurning) {
      console.warn("setOrientation is only once in queue allowed");
      return;
    }
    this.boardTurning = true;
    return this.positionAnimationsQueue.enqueueTurnBoard(position, color, animated).then(() => {
      this.boardTurning = false;
      this.state.invokeExtensionPoints(EXTENSION_POINT.boardChanged);
    });
  }
  getPiece(square) {
    return this.state.position.getPiece(square);
  }
  getPosition() {
    return this.state.position.getFen();
  }
  getOrientation() {
    return this.state.orientation;
  }
  enableMoveInput(eventHandler, color = undefined) {
    this.view.enableMoveInput(eventHandler, color);
  }
  disableMoveInput() {
    this.view.disableMoveInput();
  }
  isMoveInputEnabled() {
    return this.state.inputWhiteEnabled || this.state.inputBlackEnabled;
  }
  enableSquareSelect(eventType = POINTER_EVENTS.pointerdown, eventHandler) {
    if (!this.squareSelectListener) {
      this.squareSelectListener = function(e) {
        const square = e.target.getAttribute("data-square");
        eventHandler({
          eventType: e.type,
          event: e,
          chessboard: this,
          square
        });
      };
    }
    this.context.addEventListener(eventType, this.squareSelectListener);
    this.state.squareSelectEnabled = true;
    this.view.visualizeInputState();
  }
  disableSquareSelect(eventType) {
    this.context.removeEventListener(eventType, this.squareSelectListener);
    this.squareSelectListener = undefined;
    this.state.squareSelectEnabled = false;
    this.view.visualizeInputState();
  }
  isSquareSelectEnabled() {
    return this.state.squareSelectEnabled;
  }
  addExtension(extensionClass, props) {
    if (this.getExtension(extensionClass)) {
      throw Error('extension "' + extensionClass.name + '" already added');
    }
    this.extensions.push(new extensionClass(this, props));
  }
  getExtension(extensionClass) {
    for (const extension of this.extensions) {
      if (extension instanceof extensionClass) {
        return extension;
      }
    }
    return null;
  }
  destroy() {
    this.state.invokeExtensionPoints(EXTENSION_POINT.destroy);
    this.positionAnimationsQueue.destroy();
    this.view.destroy();
    this.view = undefined;
    this.state = undefined;
  }
}

// node_modules/cm-chessboard/src/extensions/markers/Markers.js
var MARKER_TYPE = {
  frame: { class: "marker-frame", slice: "markerFrame" },
  framePrimary: { class: "marker-frame-primary", slice: "markerFrame" },
  frameDanger: { class: "marker-frame-danger", slice: "markerFrame" },
  circle: { class: "marker-circle", slice: "markerCircle" },
  circlePrimary: { class: "marker-circle-primary", slice: "markerCircle" },
  circleDanger: { class: "marker-circle-danger", slice: "markerCircle" },
  circleDangerFilled: { class: "marker-circle-danger-filled", slice: "markerCircleFilled" },
  square: { class: "marker-square", slice: "markerSquare" },
  dot: { class: "marker-dot", slice: "markerDot", position: "above" },
  bevel: { class: "marker-bevel", slice: "markerBevel" }
};

class Markers extends Extension {
  constructor(chessboard, props = {}) {
    super(chessboard);
    this.registerExtensionPoint(EXTENSION_POINT.afterRedrawBoard, () => {
      this.onRedrawBoard();
    });
    this.registerExtensionPoint(EXTENSION_POINT.destroy, () => {
      this.onDestroy();
    });
    this.props = {
      autoMarkers: MARKER_TYPE.frame,
      sprite: "extensions/markers/markers.svg"
    };
    Object.assign(this.props, props);
    if (chessboard.props.assetsCache) {
      chessboard.view.cacheSpriteToDiv("cm-chessboard-markers", this.getSpriteUrl());
    }
    chessboard.addMarker = this.addMarker.bind(this);
    chessboard.getMarkers = this.getMarkers.bind(this);
    chessboard.removeMarkers = this.removeMarkers.bind(this);
    chessboard.addLegalMovesMarkers = this.addLegalMovesMarkers.bind(this);
    chessboard.removeLegalMovesMarkers = this.removeLegalMovesMarkers.bind(this);
    this.markerGroupDown = Svg.addElement(chessboard.view.markersLayer, "g", { class: "markers" });
    this.markerGroupUp = Svg.addElement(chessboard.view.markersTopLayer, "g", { class: "markers" });
    this.markers = [];
    if (this.props.autoMarkers) {
      Object.assign(this.props.autoMarkers, this.props.autoMarkers);
      this.registerExtensionPoint(EXTENSION_POINT.moveInput, (event) => {
        this.drawAutoMarkers(event);
      });
    }
  }
  onDestroy() {
    this.markers.length = 0;
    if (this.markerGroupDown && this.markerGroupDown.parentNode) {
      this.markerGroupDown.parentNode.removeChild(this.markerGroupDown);
    }
    if (this.markerGroupUp && this.markerGroupUp.parentNode) {
      this.markerGroupUp.parentNode.removeChild(this.markerGroupUp);
    }
    delete this.chessboard.addMarker;
    delete this.chessboard.getMarkers;
    delete this.chessboard.removeMarkers;
    delete this.chessboard.addLegalMovesMarkers;
    delete this.chessboard.removeLegalMovesMarkers;
  }
  drawAutoMarkers(event) {
    if (event.type !== INPUT_EVENT_TYPE.moveInputFinished) {
      this.removeMarkers(this.props.autoMarkers);
    }
    if (event.type === INPUT_EVENT_TYPE.moveInputStarted && !event.moveInputCallbackResult) {
      return;
    }
    if (event.type === INPUT_EVENT_TYPE.moveInputStarted || event.type === INPUT_EVENT_TYPE.movingOverSquare) {
      if (event.squareFrom) {
        this.addMarker(this.props.autoMarkers, event.squareFrom);
      }
      if (event.squareTo) {
        this.addMarker(this.props.autoMarkers, event.squareTo);
      }
    }
  }
  onRedrawBoard() {
    while (this.markerGroupUp.firstChild) {
      this.markerGroupUp.removeChild(this.markerGroupUp.firstChild);
    }
    while (this.markerGroupDown.firstChild) {
      this.markerGroupDown.removeChild(this.markerGroupDown.firstChild);
    }
    this.markers.forEach((marker) => {
      this.drawMarker(marker);
    });
  }
  addLegalMovesMarkers(moves) {
    this.batchUpdate = true;
    try {
      for (const move of moves) {
        if (move.promotion && move.promotion !== "q") {
          continue;
        }
        if (this.chessboard.getPiece(move.to)) {
          this.chessboard.addMarker(MARKER_TYPE.bevel, move.to);
        } else {
          this.chessboard.addMarker(MARKER_TYPE.dot, move.to);
        }
      }
    } finally {
      this.batchUpdate = false;
      this.onRedrawBoard();
    }
  }
  removeLegalMovesMarkers() {
    this.batchUpdate = true;
    try {
      this.chessboard.removeMarkers(MARKER_TYPE.bevel);
      this.chessboard.removeMarkers(MARKER_TYPE.dot);
    } finally {
      this.batchUpdate = false;
      this.onRedrawBoard();
    }
  }
  drawMarker(marker) {
    let markerGroup;
    if (marker.type.position === "above") {
      markerGroup = Svg.addElement(this.markerGroupUp, "g");
    } else {
      markerGroup = Svg.addElement(this.markerGroupDown, "g");
    }
    markerGroup.setAttribute("data-square", marker.square);
    const point = this.chessboard.view.squareToPoint(marker.square);
    const transform = this.chessboard.view.svg.createSVGTransform();
    transform.setTranslate(point.x, point.y);
    markerGroup.transform.baseVal.appendItem(transform);
    const spriteUrl = this.chessboard.props.assetsCache ? "" : this.getSpriteUrl();
    const markerUse = Svg.addElement(markerGroup, "use", { href: `${spriteUrl}#${marker.type.slice}`, class: "marker " + marker.type.class });
    const transformScale = this.chessboard.view.svg.createSVGTransform();
    transformScale.setScale(this.chessboard.view.scalingX, this.chessboard.view.scalingY);
    markerUse.transform.baseVal.appendItem(transformScale);
    return markerGroup;
  }
  addMarker(type, square) {
    if (typeof type === "string" || typeof square === "object") {
      console.error("changed the signature of `addMarker` to `(type, square)` with v5.1.x");
      return;
    }
    this.markers.push(new Marker(square, type));
    if (!this.batchUpdate) {
      this.onRedrawBoard();
    }
  }
  getMarkers(type = undefined, square = undefined) {
    if (typeof type === "string" || typeof square === "object") {
      console.error("changed the signature of `getMarkers` to `(type, square)` with v5.1.x");
      return;
    }
    let markersFound = [];
    this.markers.forEach((marker) => {
      if (marker.matches(square, type)) {
        markersFound.push(marker);
      }
    });
    return markersFound;
  }
  removeMarkers(type = undefined, square = undefined) {
    if (typeof type === "string" || typeof square === "object") {
      console.error("changed the signature of `removeMarkers` to `(type, square)` with v5.1.x");
      return;
    }
    this.markers = this.markers.filter((marker) => !marker.matches(square, type));
    if (!this.batchUpdate) {
      this.onRedrawBoard();
    }
  }
  getSpriteUrl() {
    if (Utils.isAbsoluteUrl(this.props.sprite)) {
      return this.props.sprite;
    } else {
      return this.chessboard.props.assetsUrl + this.props.sprite;
    }
  }
}

class Marker {
  constructor(square, type) {
    this.square = square;
    this.type = type;
  }
  matches(square = undefined, type = undefined) {
    if (!type && !square) {
      return true;
    } else if (!type) {
      if (square === this.square) {
        return true;
      }
    } else if (!square) {
      if (this.type === type) {
        return true;
      }
    } else if (this.type === type && square === this.square) {
      return true;
    }
    return false;
  }
}

// node_modules/chess.js/dist/esm/chess.js
function rootNode(comment) {
  return comment !== null ? { comment, variations: [] } : { variations: [] };
}
function node(move, suffix, nag, comment, variations) {
  const node2 = { move, variations };
  if (suffix) {
    node2.suffix = suffix;
  }
  if (nag) {
    node2.nag = nag;
  }
  if (comment !== null) {
    node2.comment = comment;
  }
  return node2;
}
function lineToTree(...nodes) {
  const [root, ...rest] = nodes;
  let parent = root;
  for (const child of rest) {
    if (child !== null) {
      parent.variations = [child, ...child.variations];
      child.variations = [];
      parent = child;
    }
  }
  return root;
}
function pgn(headers, game) {
  if (game.marker && game.marker.comment) {
    let node2 = game.root;
    while (true) {
      const next = node2.variations[0];
      if (!next) {
        node2.comment = game.marker.comment;
        break;
      }
      node2 = next;
    }
  }
  return {
    headers,
    root: game.root,
    result: (game.marker && game.marker.result) ?? undefined
  };
}
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }
  C.prototype = parent.prototype;
  child.prototype = new C;
}
function peg$SyntaxError(message, expected, found, location) {
  var self2 = Error.call(this, message);
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self2, peg$SyntaxError.prototype);
  }
  self2.expected = expected;
  self2.found = found;
  self2.location = location;
  self2.name = "SyntaxError";
  return self2;
}
peg$subclass(peg$SyntaxError, Error);
function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) {
    return str;
  }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}
peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0;k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = this.location.source && typeof this.location.source.offset === "function" ? this.location.source.offset(s) : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, " ");
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = last - s.column || 1;
      str += `
 --> ` + loc + `
` + filler + ` |
` + offset_s.line + " | " + line + `
` + filler + " | " + peg$padEnd("", s.column - 1, " ") + peg$padEnd("", hatLen, "^");
    } else {
      str += `
 at ` + loc;
    }
  }
  return str;
};
peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },
    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });
      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(expectation) {
      return expectation.description;
    }
  };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
      return "\\x" + hex(ch);
    });
  }
  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
      return "\\x" + hex(ch);
    });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected2) {
    var descriptions = expected2.map(describeExpectation);
    var i, j;
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1;i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found2) {
    return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
  options = options !== undefined ? options : {};
  var peg$FAILED = {};
  var peg$source = options.grammarSource;
  var peg$startRuleFunctions = { pgn: peg$parsepgn };
  var peg$startRuleFunction = peg$parsepgn;
  var peg$c0 = "[";
  var peg$c1 = '"';
  var peg$c2 = "]";
  var peg$c3 = ".";
  var peg$c4 = "O-O-O";
  var peg$c5 = "O-O";
  var peg$c6 = "0-0-0";
  var peg$c7 = "0-0";
  var peg$c8 = "$";
  var peg$c9 = "{";
  var peg$c10 = "}";
  var peg$c11 = ";";
  var peg$c12 = "(";
  var peg$c13 = ")";
  var peg$c14 = "1-0";
  var peg$c15 = "0-1";
  var peg$c16 = "1/2-1/2";
  var peg$c17 = "*";
  var peg$r0 = /^[a-zA-Z]/;
  var peg$r1 = /^[^"]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[.]/;
  var peg$r4 = /^[a-zA-Z1-8\-=]/;
  var peg$r5 = /^[+#]/;
  var peg$r6 = /^[!?]/;
  var peg$r7 = /^[^}]/;
  var peg$r8 = /^[^\r\n]/;
  var peg$r9 = /^[ \t\r\n]/;
  var peg$e0 = peg$otherExpectation("tag pair");
  var peg$e1 = peg$literalExpectation("[", false);
  var peg$e2 = peg$literalExpectation('"', false);
  var peg$e3 = peg$literalExpectation("]", false);
  var peg$e4 = peg$otherExpectation("tag name");
  var peg$e5 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false);
  var peg$e6 = peg$otherExpectation("tag value");
  var peg$e7 = peg$classExpectation(['"'], true, false);
  var peg$e8 = peg$otherExpectation("move number");
  var peg$e9 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e10 = peg$literalExpectation(".", false);
  var peg$e11 = peg$classExpectation(["."], false, false);
  var peg$e12 = peg$otherExpectation("standard algebraic notation");
  var peg$e13 = peg$literalExpectation("O-O-O", false);
  var peg$e14 = peg$literalExpectation("O-O", false);
  var peg$e15 = peg$literalExpectation("0-0-0", false);
  var peg$e16 = peg$literalExpectation("0-0", false);
  var peg$e17 = peg$classExpectation([["a", "z"], ["A", "Z"], ["1", "8"], "-", "="], false, false);
  var peg$e18 = peg$classExpectation(["+", "#"], false, false);
  var peg$e19 = peg$otherExpectation("suffix annotation");
  var peg$e20 = peg$classExpectation(["!", "?"], false, false);
  var peg$e21 = peg$otherExpectation("NAG");
  var peg$e22 = peg$literalExpectation("$", false);
  var peg$e23 = peg$otherExpectation("brace comment");
  var peg$e24 = peg$literalExpectation("{", false);
  var peg$e25 = peg$classExpectation(["}"], true, false);
  var peg$e26 = peg$literalExpectation("}", false);
  var peg$e27 = peg$otherExpectation("rest of line comment");
  var peg$e28 = peg$literalExpectation(";", false);
  var peg$e29 = peg$classExpectation(["\r", `
`], true, false);
  var peg$e30 = peg$otherExpectation("variation");
  var peg$e31 = peg$literalExpectation("(", false);
  var peg$e32 = peg$literalExpectation(")", false);
  var peg$e33 = peg$otherExpectation("game termination marker");
  var peg$e34 = peg$literalExpectation("1-0", false);
  var peg$e35 = peg$literalExpectation("0-1", false);
  var peg$e36 = peg$literalExpectation("1/2-1/2", false);
  var peg$e37 = peg$literalExpectation("*", false);
  var peg$e38 = peg$otherExpectation("whitespace");
  var peg$e39 = peg$classExpectation([" ", "\t", "\r", `
`], false, false);
  var peg$f0 = function(headers, game) {
    return pgn(headers, game);
  };
  var peg$f1 = function(tagPairs) {
    return Object.fromEntries(tagPairs);
  };
  var peg$f2 = function(tagName, tagValue) {
    return [tagName, tagValue];
  };
  var peg$f3 = function(root, marker) {
    return { root, marker };
  };
  var peg$f4 = function(comment, moves) {
    return lineToTree(rootNode(comment), ...moves.flat());
  };
  var peg$f5 = function(san, suffix, nag, comment, variations) {
    return node(san, suffix, nag, comment, variations);
  };
  var peg$f6 = function(nag) {
    return nag;
  };
  var peg$f7 = function(comment) {
    return comment.replace(/[\r\n]+/g, " ");
  };
  var peg$f8 = function(comment) {
    return comment.trim();
  };
  var peg$f9 = function(line) {
    return line;
  };
  var peg$f10 = function(result, comment) {
    return { result, comment };
  };
  var peg$currPos = options.peg$currPos | 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = peg$currPos;
  var peg$maxFailExpected = options.peg$maxFailExpected || [];
  var peg$silentFails = options.peg$silentFails | 0;
  var peg$result;
  if (options.startRule) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text, ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts, inverted, ignoreCase };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$otherExpectation(description) {
    return { type: "other", description };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;
    if (details) {
      return details;
    } else {
      if (pos >= peg$posDetailsCache.length) {
        p = peg$posDetailsCache.length - 1;
      } else {
        p = pos;
        while (!peg$posDetailsCache[--p]) {}
      }
      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);
    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    return res;
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }
  function peg$parsepgn() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parsetagPairSection();
    s2 = peg$parsemoveTextSection();
    s0 = peg$f0(s1, s2);
    return s0;
  }
  function peg$parsetagPairSection() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsetagPair();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsetagPair();
    }
    s2 = peg$parse_();
    s0 = peg$f1(s1);
    return s0;
  }
  function peg$parsetagPair() {
    var s0, s2, s4, s6, s7, s8, s10;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$parse_();
    if (input.charCodeAt(peg$currPos) === 91) {
      s2 = peg$c0;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e1);
      }
    }
    if (s2 !== peg$FAILED) {
      peg$parse_();
      s4 = peg$parsetagName();
      if (s4 !== peg$FAILED) {
        peg$parse_();
        if (input.charCodeAt(peg$currPos) === 34) {
          s6 = peg$c1;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e2);
          }
        }
        if (s6 !== peg$FAILED) {
          s7 = peg$parsetagValue();
          if (input.charCodeAt(peg$currPos) === 34) {
            s8 = peg$c1;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e2);
            }
          }
          if (s8 !== peg$FAILED) {
            peg$parse_();
            if (input.charCodeAt(peg$currPos) === 93) {
              s10 = peg$c2;
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e3);
              }
            }
            if (s10 !== peg$FAILED) {
              s0 = peg$f2(s4, s7);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$e0);
      }
    }
    return s0;
  }
  function peg$parsetagName() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r0.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e5);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = input.charAt(peg$currPos);
        if (peg$r0.test(s2)) {
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e5);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e4);
      }
    }
    return s0;
  }
  function peg$parsetagValue() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r1.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e7);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = input.charAt(peg$currPos);
      if (peg$r1.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e7);
        }
      }
    }
    s0 = input.substring(s0, peg$currPos);
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) {
      peg$fail(peg$e6);
    }
    return s0;
  }
  function peg$parsemoveTextSection() {
    var s0, s1, s3;
    s0 = peg$currPos;
    s1 = peg$parseline();
    peg$parse_();
    s3 = peg$parsegameTerminationMarker();
    if (s3 === peg$FAILED) {
      s3 = null;
    }
    peg$parse_();
    s0 = peg$f3(s1, s3);
    return s0;
  }
  function peg$parseline() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parsecomment();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    s2 = [];
    s3 = peg$parsemove();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parsemove();
    }
    s0 = peg$f4(s1, s2);
    return s0;
  }
  function peg$parsemove() {
    var s0, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    peg$parse_();
    peg$parsemoveNumber();
    peg$parse_();
    s4 = peg$parsesan();
    if (s4 !== peg$FAILED) {
      s5 = peg$parsesuffixAnnotation();
      if (s5 === peg$FAILED) {
        s5 = null;
      }
      s6 = [];
      s7 = peg$parsenag();
      while (s7 !== peg$FAILED) {
        s6.push(s7);
        s7 = peg$parsenag();
      }
      s7 = peg$parse_();
      s8 = peg$parsecomment();
      if (s8 === peg$FAILED) {
        s8 = null;
      }
      s9 = [];
      s10 = peg$parsevariation();
      while (s10 !== peg$FAILED) {
        s9.push(s10);
        s10 = peg$parsevariation();
      }
      s0 = peg$f5(s4, s5, s6, s8, s9);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsemoveNumber() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r2.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e9);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = input.charAt(peg$currPos);
      if (peg$r2.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e9);
        }
      }
    }
    if (input.charCodeAt(peg$currPos) === 46) {
      s2 = peg$c3;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e10);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      s4 = [];
      s5 = input.charAt(peg$currPos);
      if (peg$r3.test(s5)) {
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e11);
        }
      }
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = input.charAt(peg$currPos);
        if (peg$r3.test(s5)) {
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e11);
          }
        }
      }
      s1 = [s1, s2, s3, s4];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e8);
      }
    }
    return s0;
  }
  function peg$parsesan() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c4) {
      s2 = peg$c4;
      peg$currPos += 5;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e13);
      }
    }
    if (s2 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c5) {
        s2 = peg$c5;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e14);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c6) {
          s2 = peg$c6;
          peg$currPos += 5;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e15);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c7) {
            s2 = peg$c7;
            peg$currPos += 3;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e16);
            }
          }
          if (s2 === peg$FAILED) {
            s2 = peg$currPos;
            s3 = input.charAt(peg$currPos);
            if (peg$r0.test(s3)) {
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e5);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = input.charAt(peg$currPos);
              if (peg$r4.test(s5)) {
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e17);
                }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = input.charAt(peg$currPos);
                  if (peg$r4.test(s5)) {
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e17);
                    }
                  }
                }
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        }
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = input.charAt(peg$currPos);
      if (peg$r5.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e18);
        }
      }
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e12);
      }
    }
    return s0;
  }
  function peg$parsesuffixAnnotation() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r6.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e20);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (s1.length >= 2) {
        s2 = peg$FAILED;
      } else {
        s2 = input.charAt(peg$currPos);
        if (peg$r6.test(s2)) {
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e20);
          }
        }
      }
    }
    if (s1.length < 1) {
      peg$currPos = s0;
      s0 = peg$FAILED;
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e19);
      }
    }
    return s0;
  }
  function peg$parsenag() {
    var s0, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$parse_();
    if (input.charCodeAt(peg$currPos) === 36) {
      s2 = peg$c8;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e22);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      s4 = [];
      s5 = input.charAt(peg$currPos);
      if (peg$r2.test(s5)) {
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e9);
        }
      }
      if (s5 !== peg$FAILED) {
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = input.charAt(peg$currPos);
          if (peg$r2.test(s5)) {
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e9);
            }
          }
        }
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s3 = input.substring(s3, peg$currPos);
      } else {
        s3 = s4;
      }
      if (s3 !== peg$FAILED) {
        s0 = peg$f6(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$e21);
      }
    }
    return s0;
  }
  function peg$parsecomment() {
    var s0;
    s0 = peg$parsebraceComment();
    if (s0 === peg$FAILED) {
      s0 = peg$parserestOfLineComment();
    }
    return s0;
  }
  function peg$parsebraceComment() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e24);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = input.charAt(peg$currPos);
      if (peg$r7.test(s4)) {
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e25);
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = input.charAt(peg$currPos);
        if (peg$r7.test(s4)) {
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e25);
          }
        }
      }
      s2 = input.substring(s2, peg$currPos);
      if (input.charCodeAt(peg$currPos) === 125) {
        s3 = peg$c10;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e26);
        }
      }
      if (s3 !== peg$FAILED) {
        s0 = peg$f7(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e23);
      }
    }
    return s0;
  }
  function peg$parserestOfLineComment() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 59) {
      s1 = peg$c11;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e28);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = input.charAt(peg$currPos);
      if (peg$r8.test(s4)) {
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e29);
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = input.charAt(peg$currPos);
        if (peg$r8.test(s4)) {
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e29);
          }
        }
      }
      s2 = input.substring(s2, peg$currPos);
      s0 = peg$f8(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e27);
      }
    }
    return s0;
  }
  function peg$parsevariation() {
    var s0, s2, s3, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$parse_();
    if (input.charCodeAt(peg$currPos) === 40) {
      s2 = peg$c12;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e31);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parseline();
      if (s3 !== peg$FAILED) {
        peg$parse_();
        if (input.charCodeAt(peg$currPos) === 41) {
          s5 = peg$c13;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e32);
          }
        }
        if (s5 !== peg$FAILED) {
          s0 = peg$f9(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$e30);
      }
    }
    return s0;
  }
  function peg$parsegameTerminationMarker() {
    var s0, s1, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c14) {
      s1 = peg$c14;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e34);
      }
    }
    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c15) {
        s1 = peg$c15;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e35);
        }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 7) === peg$c16) {
          s1 = peg$c16;
          peg$currPos += 7;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e36);
          }
        }
        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s1 = peg$c17;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e37);
            }
          }
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$parse_();
      s3 = peg$parsecomment();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s0 = peg$f10(s1, s3);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e33);
      }
    }
    return s0;
  }
  function peg$parse_() {
    var s0, s1;
    peg$silentFails++;
    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r9.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e39);
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = input.charAt(peg$currPos);
      if (peg$r9.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e39);
        }
      }
    }
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) {
      peg$fail(peg$e38);
    }
    return s0;
  }
  peg$result = peg$startRuleFunction();
  if (options.peg$library) {
    return {
      peg$result,
      peg$currPos,
      peg$FAILED,
      peg$maxFailExpected,
      peg$maxFailPos
    };
  }
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}
var MASK64 = 0xffffffffffffffffn;
function rotl(x, k) {
  return (x << k | x >> 64n - k) & 0xffffffffffffffffn;
}
function wrappingMul(x, y) {
  return x * y & MASK64;
}
function xoroshiro128(state) {
  return function() {
    let s0 = BigInt(state & MASK64);
    let s1 = BigInt(state >> 64n & MASK64);
    const result = wrappingMul(rotl(wrappingMul(s0, 5n), 7n), 9n);
    s1 ^= s0;
    s0 = (rotl(s0, 24n) ^ s1 ^ s1 << 16n) & MASK64;
    s1 = rotl(s1, 37n);
    state = s1 << 64n | s0;
    return result;
  };
}
var rand = xoroshiro128(0xa187eb39cdcaed8f31c4b365b102e01en);
var PIECE_KEYS = Array.from({ length: 2 }, () => Array.from({ length: 6 }, () => Array.from({ length: 128 }, () => rand())));
var EP_KEYS = Array.from({ length: 8 }, () => rand());
var CASTLING_KEYS = Array.from({ length: 16 }, () => rand());
var SIDE_KEY = rand();
var WHITE = "w";
var BLACK = "b";
var PAWN = "p";
var KNIGHT = "n";
var BISHOP = "b";
var ROOK = "r";
var QUEEN = "q";
var KING = "k";
var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

class Move {
  color;
  from;
  to;
  piece;
  captured;
  promotion;
  flags;
  san;
  lan;
  before;
  after;
  constructor(chess, internal) {
    const { color, piece, from, to, flags, captured, promotion } = internal;
    const fromAlgebraic = algebraic(from);
    const toAlgebraic = algebraic(to);
    this.color = color;
    this.piece = piece;
    this.from = fromAlgebraic;
    this.to = toAlgebraic;
    this.san = chess["_moveToSan"](internal, chess["_moves"]({ legal: true }));
    this.lan = fromAlgebraic + toAlgebraic;
    this.before = chess.fen();
    chess["_makeMove"](internal);
    this.after = chess.fen();
    chess["_undoMove"]();
    this.flags = "";
    for (const flag in BITS) {
      if (BITS[flag] & flags) {
        this.flags += FLAGS[flag];
      }
    }
    if (captured) {
      this.captured = captured;
    }
    if (promotion) {
      this.promotion = promotion;
      this.lan += promotion;
    }
  }
  isCapture() {
    return this.flags.indexOf(FLAGS["CAPTURE"]) > -1;
  }
  isPromotion() {
    return this.flags.indexOf(FLAGS["PROMOTION"]) > -1;
  }
  isEnPassant() {
    return this.flags.indexOf(FLAGS["EP_CAPTURE"]) > -1;
  }
  isKingsideCastle() {
    return this.flags.indexOf(FLAGS["KSIDE_CASTLE"]) > -1;
  }
  isQueensideCastle() {
    return this.flags.indexOf(FLAGS["QSIDE_CASTLE"]) > -1;
  }
  isBigPawn() {
    return this.flags.indexOf(FLAGS["BIG_PAWN"]) > -1;
  }
}
var EMPTY = -1;
var FLAGS = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q",
  NULL_MOVE: "-"
};
var BITS = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64,
  NULL_MOVE: 128
};
var SEVEN_TAG_ROSTER = {
  Event: "?",
  Site: "?",
  Date: "????.??.??",
  Round: "?",
  White: "?",
  Black: "?",
  Result: "*"
};
var SUPLEMENTAL_TAGS = {
  WhiteTitle: null,
  BlackTitle: null,
  WhiteElo: null,
  BlackElo: null,
  WhiteUSCF: null,
  BlackUSCF: null,
  WhiteNA: null,
  BlackNA: null,
  WhiteType: null,
  BlackType: null,
  EventDate: null,
  EventSponsor: null,
  Section: null,
  Stage: null,
  Board: null,
  Opening: null,
  Variation: null,
  SubVariation: null,
  ECO: null,
  NIC: null,
  Time: null,
  UTCTime: null,
  UTCDate: null,
  TimeControl: null,
  SetUp: null,
  FEN: null,
  Termination: null,
  Annotator: null,
  Mode: null,
  PlyCount: null
};
var HEADER_TEMPLATE = {
  ...SEVEN_TAG_ROSTER,
  ...SUPLEMENTAL_TAGS
};
var Ox88 = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
};
var PAWN_OFFSETS = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
};
var PIECE_OFFSETS = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
};
var ATTACKS = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
];
var RAYS = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
];
var PIECE_MASKS = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 };
var SYMBOLS = "pnbrqkPNBRQK";
var PROMOTIONS = [KNIGHT, BISHOP, ROOK, QUEEN];
var RANK_1 = 7;
var RANK_2 = 6;
var RANK_7 = 1;
var RANK_8 = 0;
var SIDES = {
  [KING]: BITS.KSIDE_CASTLE,
  [QUEEN]: BITS.QSIDE_CASTLE
};
var ROOKS = {
  w: [
    { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
  ],
  b: [
    { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
  ]
};
var SECOND_RANK = { b: RANK_7, w: RANK_2 };
var SAN_NULLMOVE = "--";
function rank(square) {
  return square >> 4;
}
function file(square) {
  return square & 15;
}
function isDigit(c) {
  return "0123456789".indexOf(c) !== -1;
}
function algebraic(square) {
  const f = file(square);
  const r = rank(square);
  return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
}
function swapColor(color) {
  return color === WHITE ? BLACK : WHITE;
}
function validateFen(fen) {
  const tokens = fen.split(/\s+/);
  if (tokens.length !== 6) {
    return {
      ok: false,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  }
  const moveNumber = parseInt(tokens[5], 10);
  if (isNaN(moveNumber) || moveNumber <= 0) {
    return {
      ok: false,
      error: "Invalid FEN: move number must be a positive integer"
    };
  }
  const halfMoves = parseInt(tokens[4], 10);
  if (isNaN(halfMoves) || halfMoves < 0) {
    return {
      ok: false,
      error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
  }
  if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
    return { ok: false, error: "Invalid FEN: en-passant square is invalid" };
  }
  if (/[^kKqQ-]/.test(tokens[2])) {
    return { ok: false, error: "Invalid FEN: castling availability is invalid" };
  }
  if (!/^(w|b)$/.test(tokens[1])) {
    return { ok: false, error: "Invalid FEN: side-to-move is invalid" };
  }
  const rows = tokens[0].split("/");
  if (rows.length !== 8) {
    return {
      ok: false,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  }
  for (let i = 0;i < rows.length; i++) {
    let sumFields = 0;
    let previousWasNumber = false;
    for (let k = 0;k < rows[i].length; k++) {
      if (isDigit(rows[i][k])) {
        if (previousWasNumber) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        }
        sumFields += parseInt(rows[i][k], 10);
        previousWasNumber = true;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        }
        sumFields += 1;
        previousWasNumber = false;
      }
    }
    if (sumFields !== 8) {
      return {
        ok: false,
        error: "Invalid FEN: piece data is invalid (too many squares in rank)"
      };
    }
  }
  if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
    return { ok: false, error: "Invalid FEN: illegal en-passant square" };
  }
  const kings = [
    { color: "white", regex: /K/g },
    { color: "black", regex: /k/g }
  ];
  for (const { color, regex } of kings) {
    if (!regex.test(tokens[0])) {
      return { ok: false, error: `Invalid FEN: missing ${color} king` };
    }
    if ((tokens[0].match(regex) || []).length > 1) {
      return { ok: false, error: `Invalid FEN: too many ${color} kings` };
    }
  }
  if (Array.from(rows[0] + rows[7]).some((char) => char.toUpperCase() === "P")) {
    return {
      ok: false,
      error: "Invalid FEN: some pawns are on the edge rows"
    };
  }
  return { ok: true };
}
function getDisambiguator(move, moves) {
  const from = move.from;
  const to = move.to;
  const piece = move.piece;
  let ambiguities = 0;
  let sameRank = 0;
  let sameFile = 0;
  for (let i = 0, len = moves.length;i < len; i++) {
    const ambigFrom = moves[i].from;
    const ambigTo = moves[i].to;
    const ambigPiece = moves[i].piece;
    if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
      ambiguities++;
      if (rank(from) === rank(ambigFrom)) {
        sameRank++;
      }
      if (file(from) === file(ambigFrom)) {
        sameFile++;
      }
    }
  }
  if (ambiguities > 0) {
    if (sameRank > 0 && sameFile > 0) {
      return algebraic(from);
    } else if (sameFile > 0) {
      return algebraic(from).charAt(1);
    } else {
      return algebraic(from).charAt(0);
    }
  }
  return "";
}
function addMove(moves, color, from, to, piece, captured = undefined, flags = BITS.NORMAL) {
  const r = rank(to);
  if (piece === PAWN && (r === RANK_1 || r === RANK_8)) {
    for (let i = 0;i < PROMOTIONS.length; i++) {
      const promotion = PROMOTIONS[i];
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        promotion,
        flags: flags | BITS.PROMOTION
      });
    }
  } else {
    moves.push({
      color,
      from,
      to,
      piece,
      captured,
      flags
    });
  }
}
function inferPieceType(san) {
  let pieceType = san.charAt(0);
  if (pieceType >= "a" && pieceType <= "h") {
    const matches = san.match(/[a-h]\d.*[a-h]\d/);
    if (matches) {
      return;
    }
    return PAWN;
  }
  pieceType = pieceType.toLowerCase();
  if (pieceType === "o") {
    return KING;
  }
  return pieceType;
}
function strippedSan(move) {
  return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}

class Chess {
  _board = new Array(128);
  _turn = WHITE;
  _header = {};
  _kings = { w: EMPTY, b: EMPTY };
  _epSquare = -1;
  _halfMoves = 0;
  _moveNumber = 0;
  _history = [];
  _comments = {};
  _castling = { w: 0, b: 0 };
  _hash = 0n;
  _positionCount = new Map;
  constructor(fen = DEFAULT_POSITION, { skipValidation = false } = {}) {
    this.load(fen, { skipValidation });
  }
  clear({ preserveHeaders = false } = {}) {
    this._board = new Array(128);
    this._kings = { w: EMPTY, b: EMPTY };
    this._turn = WHITE;
    this._castling = { w: 0, b: 0 };
    this._epSquare = EMPTY;
    this._halfMoves = 0;
    this._moveNumber = 1;
    this._history = [];
    this._comments = {};
    this._header = preserveHeaders ? this._header : { ...HEADER_TEMPLATE };
    this._hash = this._computeHash();
    this._positionCount = new Map;
    this._header["SetUp"] = null;
    this._header["FEN"] = null;
  }
  load(fen, { skipValidation = false, preserveHeaders = false } = {}) {
    let tokens = fen.split(/\s+/);
    if (tokens.length >= 2 && tokens.length < 6) {
      const adjustments = ["-", "-", "0", "1"];
      fen = tokens.concat(adjustments.slice(-(6 - tokens.length))).join(" ");
    }
    tokens = fen.split(/\s+/);
    if (!skipValidation) {
      const { ok, error } = validateFen(fen);
      if (!ok) {
        throw new Error(error);
      }
    }
    const position = tokens[0];
    let square = 0;
    this.clear({ preserveHeaders });
    for (let i = 0;i < position.length; i++) {
      const piece = position.charAt(i);
      if (piece === "/") {
        square += 8;
      } else if (isDigit(piece)) {
        square += parseInt(piece, 10);
      } else {
        const color = piece < "a" ? WHITE : BLACK;
        this._put({ type: piece.toLowerCase(), color }, algebraic(square));
        square++;
      }
    }
    this._turn = tokens[1];
    if (tokens[2].indexOf("K") > -1) {
      this._castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("Q") > -1) {
      this._castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf("k") > -1) {
      this._castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("q") > -1) {
      this._castling.b |= BITS.QSIDE_CASTLE;
    }
    this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
    this._halfMoves = parseInt(tokens[4], 10);
    this._moveNumber = parseInt(tokens[5], 10);
    this._hash = this._computeHash();
    this._updateSetup(fen);
    this._incPositionCount();
  }
  fen({ forceEnpassantSquare = false } = {}) {
    let empty = 0;
    let fen = "";
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (this._board[i]) {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        const { color, type: piece } = this._board[i];
        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      } else {
        empty++;
      }
      if (i + 1 & 136) {
        if (empty > 0) {
          fen += empty;
        }
        if (i !== Ox88.h1) {
          fen += "/";
        }
        empty = 0;
        i += 8;
      }
    }
    let castling = "";
    if (this._castling[WHITE] & BITS.KSIDE_CASTLE) {
      castling += "K";
    }
    if (this._castling[WHITE] & BITS.QSIDE_CASTLE) {
      castling += "Q";
    }
    if (this._castling[BLACK] & BITS.KSIDE_CASTLE) {
      castling += "k";
    }
    if (this._castling[BLACK] & BITS.QSIDE_CASTLE) {
      castling += "q";
    }
    castling = castling || "-";
    let epSquare = "-";
    if (this._epSquare !== EMPTY) {
      if (forceEnpassantSquare) {
        epSquare = algebraic(this._epSquare);
      } else {
        const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
        const squares = [bigPawnSquare + 1, bigPawnSquare - 1];
        for (const square of squares) {
          if (square & 136) {
            continue;
          }
          const color = this._turn;
          if (this._board[square]?.color === color && this._board[square]?.type === PAWN) {
            this._makeMove({
              color,
              from: square,
              to: this._epSquare,
              piece: PAWN,
              captured: PAWN,
              flags: BITS.EP_CAPTURE
            });
            const isLegal = !this._isKingAttacked(color);
            this._undoMove();
            if (isLegal) {
              epSquare = algebraic(this._epSquare);
              break;
            }
          }
        }
      }
    }
    return [
      fen,
      this._turn,
      castling,
      epSquare,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  _pieceKey(i) {
    if (!this._board[i]) {
      return 0n;
    }
    const { color, type } = this._board[i];
    const colorIndex = {
      w: 0,
      b: 1
    }[color];
    const typeIndex = {
      p: 0,
      n: 1,
      b: 2,
      r: 3,
      q: 4,
      k: 5
    }[type];
    return PIECE_KEYS[colorIndex][typeIndex][i];
  }
  _epKey() {
    return this._epSquare === EMPTY ? 0n : EP_KEYS[this._epSquare & 7];
  }
  _castlingKey() {
    const index = this._castling.w >> 5 | this._castling.b >> 3;
    return CASTLING_KEYS[index];
  }
  _computeHash() {
    let hash = 0n;
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (this._board[i]) {
        hash ^= this._pieceKey(i);
      }
    }
    hash ^= this._epKey();
    hash ^= this._castlingKey();
    if (this._turn === "b") {
      hash ^= SIDE_KEY;
    }
    return hash;
  }
  _updateSetup(fen) {
    if (this._history.length > 0)
      return;
    if (fen !== DEFAULT_POSITION) {
      this._header["SetUp"] = "1";
      this._header["FEN"] = fen;
    } else {
      this._header["SetUp"] = null;
      this._header["FEN"] = null;
    }
  }
  reset() {
    this.load(DEFAULT_POSITION);
  }
  get(square) {
    return this._board[Ox88[square]];
  }
  findPiece(piece) {
    const squares = [];
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (!this._board[i] || this._board[i]?.color !== piece.color) {
        continue;
      }
      if (this._board[i].color === piece.color && this._board[i].type === piece.type) {
        squares.push(algebraic(i));
      }
    }
    return squares;
  }
  put({ type, color }, square) {
    if (this._put({ type, color }, square)) {
      this._updateCastlingRights();
      this._updateEnPassantSquare();
      this._updateSetup(this.fen());
      return true;
    }
    return false;
  }
  _set(sq, piece) {
    this._hash ^= this._pieceKey(sq);
    this._board[sq] = piece;
    this._hash ^= this._pieceKey(sq);
  }
  _put({ type, color }, square) {
    if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
      return false;
    }
    if (!(square in Ox88)) {
      return false;
    }
    const sq = Ox88[square];
    if (type == KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) {
      return false;
    }
    const currentPieceOnSquare = this._board[sq];
    if (currentPieceOnSquare && currentPieceOnSquare.type === KING) {
      this._kings[currentPieceOnSquare.color] = EMPTY;
    }
    this._set(sq, { type, color });
    if (type === KING) {
      this._kings[color] = sq;
    }
    return true;
  }
  _clear(sq) {
    this._hash ^= this._pieceKey(sq);
    delete this._board[sq];
  }
  remove(square) {
    const piece = this.get(square);
    this._clear(Ox88[square]);
    if (piece && piece.type === KING) {
      this._kings[piece.color] = EMPTY;
    }
    this._updateCastlingRights();
    this._updateEnPassantSquare();
    this._updateSetup(this.fen());
    return piece;
  }
  _updateCastlingRights() {
    this._hash ^= this._castlingKey();
    const whiteKingInPlace = this._board[Ox88.e1]?.type === KING && this._board[Ox88.e1]?.color === WHITE;
    const blackKingInPlace = this._board[Ox88.e8]?.type === KING && this._board[Ox88.e8]?.color === BLACK;
    if (!whiteKingInPlace || this._board[Ox88.a1]?.type !== ROOK || this._board[Ox88.a1]?.color !== WHITE) {
      this._castling.w &= -65;
    }
    if (!whiteKingInPlace || this._board[Ox88.h1]?.type !== ROOK || this._board[Ox88.h1]?.color !== WHITE) {
      this._castling.w &= -33;
    }
    if (!blackKingInPlace || this._board[Ox88.a8]?.type !== ROOK || this._board[Ox88.a8]?.color !== BLACK) {
      this._castling.b &= -65;
    }
    if (!blackKingInPlace || this._board[Ox88.h8]?.type !== ROOK || this._board[Ox88.h8]?.color !== BLACK) {
      this._castling.b &= -33;
    }
    this._hash ^= this._castlingKey();
  }
  _updateEnPassantSquare() {
    if (this._epSquare === EMPTY) {
      return;
    }
    const startSquare = this._epSquare + (this._turn === WHITE ? -16 : 16);
    const currentSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
    const attackers = [currentSquare + 1, currentSquare - 1];
    if (this._board[startSquare] !== null || this._board[this._epSquare] !== null || this._board[currentSquare]?.color !== swapColor(this._turn) || this._board[currentSquare]?.type !== PAWN) {
      this._hash ^= this._epKey();
      this._epSquare = EMPTY;
      return;
    }
    const canCapture = (square) => !(square & 136) && this._board[square]?.color === this._turn && this._board[square]?.type === PAWN;
    if (!attackers.some(canCapture)) {
      this._hash ^= this._epKey();
      this._epSquare = EMPTY;
    }
  }
  _attacked(color, square, verbose) {
    const attackers = [];
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (this._board[i] === undefined || this._board[i].color !== color) {
        continue;
      }
      const piece = this._board[i];
      const difference = i - square;
      if (difference === 0) {
        continue;
      }
      const index = difference + 119;
      if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
        if (piece.type === PAWN) {
          if (difference > 0 && piece.color === WHITE || difference <= 0 && piece.color === BLACK) {
            if (!verbose) {
              return true;
            } else {
              attackers.push(algebraic(i));
            }
          }
          continue;
        }
        if (piece.type === "n" || piece.type === "k") {
          if (!verbose) {
            return true;
          } else {
            attackers.push(algebraic(i));
            continue;
          }
        }
        const offset = RAYS[index];
        let j = i + offset;
        let blocked = false;
        while (j !== square) {
          if (this._board[j] != null) {
            blocked = true;
            break;
          }
          j += offset;
        }
        if (!blocked) {
          if (!verbose) {
            return true;
          } else {
            attackers.push(algebraic(i));
            continue;
          }
        }
      }
    }
    if (verbose) {
      return attackers;
    } else {
      return false;
    }
  }
  attackers(square, attackedBy) {
    if (!attackedBy) {
      return this._attacked(this._turn, Ox88[square], true);
    } else {
      return this._attacked(attackedBy, Ox88[square], true);
    }
  }
  _isKingAttacked(color) {
    const square = this._kings[color];
    return square === -1 ? false : this._attacked(swapColor(color), square);
  }
  hash() {
    return this._hash.toString(16);
  }
  isAttacked(square, attackedBy) {
    return this._attacked(attackedBy, Ox88[square]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const pieces = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    };
    const bishops = [];
    let numPieces = 0;
    let squareColor = 0;
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      squareColor = (squareColor + 1) % 2;
      if (i & 136) {
        i += 7;
        continue;
      }
      const piece = this._board[i];
      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(squareColor);
        }
        numPieces++;
      }
    }
    if (numPieces === 2) {
      return true;
    } else if (numPieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
      return true;
    } else if (numPieces === pieces[BISHOP] + 2) {
      let sum = 0;
      const len = bishops.length;
      for (let i = 0;i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) {
        return true;
      }
    }
    return false;
  }
  isThreefoldRepetition() {
    return this._getPositionCount(this._hash) >= 3;
  }
  isDrawByFiftyMoves() {
    return this._halfMoves >= 100;
  }
  isDraw() {
    return this.isDrawByFiftyMoves() || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isDraw();
  }
  moves({ verbose = false, square = undefined, piece = undefined } = {}) {
    const moves = this._moves({ square, piece });
    if (verbose) {
      return moves.map((move) => new Move(this, move));
    } else {
      return moves.map((move) => this._moveToSan(move, moves));
    }
  }
  _moves({ legal = true, piece = undefined, square = undefined } = {}) {
    const forSquare = square ? square.toLowerCase() : undefined;
    const forPiece = piece?.toLowerCase();
    const moves = [];
    const us = this._turn;
    const them = swapColor(us);
    let firstSquare = Ox88.a8;
    let lastSquare = Ox88.h1;
    let singleSquare = false;
    if (forSquare) {
      if (!(forSquare in Ox88)) {
        return [];
      } else {
        firstSquare = lastSquare = Ox88[forSquare];
        singleSquare = true;
      }
    }
    for (let from = firstSquare;from <= lastSquare; from++) {
      if (from & 136) {
        from += 7;
        continue;
      }
      if (!this._board[from] || this._board[from].color === them) {
        continue;
      }
      const { type } = this._board[from];
      let to;
      if (type === PAWN) {
        if (forPiece && forPiece !== type)
          continue;
        to = from + PAWN_OFFSETS[us][0];
        if (!this._board[to]) {
          addMove(moves, us, from, to, PAWN);
          to = from + PAWN_OFFSETS[us][1];
          if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
            addMove(moves, us, from, to, PAWN, undefined, BITS.BIG_PAWN);
          }
        }
        for (let j = 2;j < 4; j++) {
          to = from + PAWN_OFFSETS[us][j];
          if (to & 136)
            continue;
          if (this._board[to]?.color === them) {
            addMove(moves, us, from, to, PAWN, this._board[to].type, BITS.CAPTURE);
          } else if (to === this._epSquare) {
            addMove(moves, us, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
          }
        }
      } else {
        if (forPiece && forPiece !== type)
          continue;
        for (let j = 0, len = PIECE_OFFSETS[type].length;j < len; j++) {
          const offset = PIECE_OFFSETS[type][j];
          to = from;
          while (true) {
            to += offset;
            if (to & 136)
              break;
            if (!this._board[to]) {
              addMove(moves, us, from, to, type);
            } else {
              if (this._board[to].color === us)
                break;
              addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
              break;
            }
            if (type === KNIGHT || type === KING)
              break;
          }
        }
      }
    }
    if (forPiece === undefined || forPiece === KING) {
      if (!singleSquare || lastSquare === this._kings[us]) {
        if (this._castling[us] & BITS.KSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom + 2;
          if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, undefined, BITS.KSIDE_CASTLE);
          }
        }
        if (this._castling[us] & BITS.QSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom - 2;
          if (!this._board[castlingFrom - 1] && !this._board[castlingFrom - 2] && !this._board[castlingFrom - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom - 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, undefined, BITS.QSIDE_CASTLE);
          }
        }
      }
    }
    if (!legal || this._kings[us] === -1) {
      return moves;
    }
    const legalMoves = [];
    for (let i = 0, len = moves.length;i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(us)) {
        legalMoves.push(moves[i]);
      }
      this._undoMove();
    }
    return legalMoves;
  }
  move(move, { strict = false } = {}) {
    let moveObj = null;
    if (typeof move === "string") {
      moveObj = this._moveFromSan(move, strict);
    } else if (move === null) {
      moveObj = this._moveFromSan(SAN_NULLMOVE, strict);
    } else if (typeof move === "object") {
      const moves = this._moves();
      for (let i = 0, len = moves.length;i < len; i++) {
        if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
          moveObj = moves[i];
          break;
        }
      }
    }
    if (!moveObj) {
      if (typeof move === "string") {
        throw new Error(`Invalid move: ${move}`);
      } else {
        throw new Error(`Invalid move: ${JSON.stringify(move)}`);
      }
    }
    if (this.isCheck() && moveObj.flags & BITS.NULL_MOVE) {
      throw new Error("Null move not allowed when in check");
    }
    const prettyMove = new Move(this, moveObj);
    this._makeMove(moveObj);
    this._incPositionCount();
    return prettyMove;
  }
  _push(move) {
    this._history.push({
      move,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _movePiece(from, to) {
    this._hash ^= this._pieceKey(from);
    this._board[to] = this._board[from];
    delete this._board[from];
    this._hash ^= this._pieceKey(to);
  }
  _makeMove(move) {
    const us = this._turn;
    const them = swapColor(us);
    this._push(move);
    if (move.flags & BITS.NULL_MOVE) {
      if (us === BLACK) {
        this._moveNumber++;
      }
      this._halfMoves++;
      this._turn = them;
      this._epSquare = EMPTY;
      return;
    }
    this._hash ^= this._epKey();
    this._hash ^= this._castlingKey();
    if (move.captured) {
      this._hash ^= this._pieceKey(move.to);
    }
    this._movePiece(move.from, move.to);
    if (move.flags & BITS.EP_CAPTURE) {
      if (this._turn === BLACK) {
        this._clear(move.to - 16);
      } else {
        this._clear(move.to + 16);
      }
    }
    if (move.promotion) {
      this._clear(move.to);
      this._set(move.to, { type: move.promotion, color: us });
    }
    if (this._board[move.to].type === KING) {
      this._kings[us] = move.to;
      if (move.flags & BITS.KSIDE_CASTLE) {
        const castlingTo = move.to - 1;
        const castlingFrom = move.to + 1;
        this._movePiece(castlingFrom, castlingTo);
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        const castlingTo = move.to + 1;
        const castlingFrom = move.to - 2;
        this._movePiece(castlingFrom, castlingTo);
      }
      this._castling[us] = 0;
    }
    if (this._castling[us]) {
      for (let i = 0, len = ROOKS[us].length;i < len; i++) {
        if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
          this._castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }
    if (this._castling[them]) {
      for (let i = 0, len = ROOKS[them].length;i < len; i++) {
        if (move.to === ROOKS[them][i].square && this._castling[them] & ROOKS[them][i].flag) {
          this._castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }
    this._hash ^= this._castlingKey();
    if (move.flags & BITS.BIG_PAWN) {
      let epSquare;
      if (us === BLACK) {
        epSquare = move.to - 16;
      } else {
        epSquare = move.to + 16;
      }
      if (!(move.to - 1 & 136) && this._board[move.to - 1]?.type === PAWN && this._board[move.to - 1]?.color === them || !(move.to + 1 & 136) && this._board[move.to + 1]?.type === PAWN && this._board[move.to + 1]?.color === them) {
        this._epSquare = epSquare;
        this._hash ^= this._epKey();
      } else {
        this._epSquare = EMPTY;
      }
    } else {
      this._epSquare = EMPTY;
    }
    if (move.piece === PAWN) {
      this._halfMoves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      this._halfMoves = 0;
    } else {
      this._halfMoves++;
    }
    if (us === BLACK) {
      this._moveNumber++;
    }
    this._turn = them;
    this._hash ^= SIDE_KEY;
  }
  undo() {
    const hash = this._hash;
    const move = this._undoMove();
    if (move) {
      const prettyMove = new Move(this, move);
      this._decPositionCount(hash);
      return prettyMove;
    }
    return null;
  }
  _undoMove() {
    const old = this._history.pop();
    if (old === undefined) {
      return null;
    }
    this._hash ^= this._epKey();
    this._hash ^= this._castlingKey();
    const move = old.move;
    this._kings = old.kings;
    this._turn = old.turn;
    this._castling = old.castling;
    this._epSquare = old.epSquare;
    this._halfMoves = old.halfMoves;
    this._moveNumber = old.moveNumber;
    this._hash ^= this._epKey();
    this._hash ^= this._castlingKey();
    this._hash ^= SIDE_KEY;
    const us = this._turn;
    const them = swapColor(us);
    if (move.flags & BITS.NULL_MOVE) {
      return move;
    }
    this._movePiece(move.to, move.from);
    if (move.piece) {
      this._clear(move.from);
      this._set(move.from, { type: move.piece, color: us });
    }
    if (move.captured) {
      if (move.flags & BITS.EP_CAPTURE) {
        let index;
        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }
        this._set(index, { type: PAWN, color: them });
      } else {
        this._set(move.to, { type: move.captured, color: them });
      }
    }
    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      let castlingTo, castlingFrom;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castlingTo = move.to + 1;
        castlingFrom = move.to - 1;
      } else {
        castlingTo = move.to - 2;
        castlingFrom = move.to + 1;
      }
      this._movePiece(castlingFrom, castlingTo);
    }
    return move;
  }
  pgn({ newline = `
`, maxWidth = 0 } = {}) {
    const result = [];
    let headerExists = false;
    for (const i in this._header) {
      const headerTag = this._header[i];
      if (headerTag)
        result.push(`[${i} "${this._header[i]}"]` + newline);
      headerExists = true;
    }
    if (headerExists && this._history.length) {
      result.push(newline);
    }
    const appendComment = (moveString2) => {
      const comment = this._comments[this.fen()];
      if (typeof comment !== "undefined") {
        const delimiter = moveString2.length > 0 ? " " : "";
        moveString2 = `${moveString2}${delimiter}{${comment}}`;
      }
      return moveString2;
    };
    const reversedHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    const moves = [];
    let moveString = "";
    if (reversedHistory.length === 0) {
      moves.push(appendComment(""));
    }
    while (reversedHistory.length > 0) {
      moveString = appendComment(moveString);
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (!this._history.length && move.color === "b") {
        const prefix = `${this._moveNumber}. ...`;
        moveString = moveString ? `${moveString} ${prefix}` : prefix;
      } else if (move.color === "w") {
        if (moveString.length) {
          moves.push(moveString);
        }
        moveString = this._moveNumber + ".";
      }
      moveString = moveString + " " + this._moveToSan(move, this._moves({ legal: true }));
      this._makeMove(move);
    }
    if (moveString.length) {
      moves.push(appendComment(moveString));
    }
    moves.push(this._header.Result || "*");
    if (maxWidth === 0) {
      return result.join("") + moves.join(" ");
    }
    const strip = function() {
      if (result.length > 0 && result[result.length - 1] === " ") {
        result.pop();
        return true;
      }
      return false;
    };
    const wrapComment = function(width, move) {
      for (const token of move.split(" ")) {
        if (!token) {
          continue;
        }
        if (width + token.length > maxWidth) {
          while (strip()) {
            width--;
          }
          result.push(newline);
          width = 0;
        }
        result.push(token);
        width += token.length;
        result.push(" ");
        width++;
      }
      if (strip()) {
        width--;
      }
      return width;
    };
    let currentWidth = 0;
    for (let i = 0;i < moves.length; i++) {
      if (currentWidth + moves[i].length > maxWidth) {
        if (moves[i].includes("{")) {
          currentWidth = wrapComment(currentWidth, moves[i]);
          continue;
        }
      }
      if (currentWidth + moves[i].length > maxWidth && i !== 0) {
        if (result[result.length - 1] === " ") {
          result.pop();
        }
        result.push(newline);
        currentWidth = 0;
      } else if (i !== 0) {
        result.push(" ");
        currentWidth++;
      }
      result.push(moves[i]);
      currentWidth += moves[i].length;
    }
    return result.join("");
  }
  header(...args) {
    for (let i = 0;i < args.length; i += 2) {
      if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
        this._header[args[i]] = args[i + 1];
      }
    }
    return this._header;
  }
  setHeader(key, value) {
    this._header[key] = value ?? SEVEN_TAG_ROSTER[key] ?? null;
    return this.getHeaders();
  }
  removeHeader(key) {
    if (key in this._header) {
      this._header[key] = SEVEN_TAG_ROSTER[key] || null;
      return true;
    }
    return false;
  }
  getHeaders() {
    const nonNullHeaders = {};
    for (const [key, value] of Object.entries(this._header)) {
      if (value !== null) {
        nonNullHeaders[key] = value;
      }
    }
    return nonNullHeaders;
  }
  loadPgn(pgn2, { strict = false, newlineChar = `\r?
` } = {}) {
    if (newlineChar !== `\r?
`) {
      pgn2 = pgn2.replace(new RegExp(newlineChar, "g"), `
`);
    }
    const parsedPgn = peg$parse(pgn2);
    this.reset();
    const headers = parsedPgn.headers;
    let fen = "";
    for (const key in headers) {
      if (key.toLowerCase() === "fen") {
        fen = headers[key];
      }
      this.header(key, headers[key]);
    }
    if (!strict) {
      if (fen) {
        this.load(fen, { preserveHeaders: true });
      }
    } else {
      if (headers["SetUp"] === "1") {
        if (!("FEN" in headers)) {
          throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
        }
        this.load(headers["FEN"], { preserveHeaders: true });
      }
    }
    let node2 = parsedPgn.root;
    while (node2) {
      if (node2.move) {
        const move = this._moveFromSan(node2.move, strict);
        if (move == null) {
          throw new Error(`Invalid move in PGN: ${node2.move}`);
        } else {
          this._makeMove(move);
          this._incPositionCount();
        }
      }
      if (node2.comment !== undefined) {
        this._comments[this.fen()] = node2.comment;
      }
      node2 = node2.variations[0];
    }
    const result = parsedPgn.result;
    if (result && Object.keys(this._header).length && this._header["Result"] !== result) {
      this.setHeader("Result", result);
    }
  }
  _moveToSan(move, moves) {
    let output = "";
    if (move.flags & BITS.KSIDE_CASTLE) {
      output = "O-O";
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = "O-O-O";
    } else if (move.flags & BITS.NULL_MOVE) {
      return SAN_NULLMOVE;
    } else {
      if (move.piece !== PAWN) {
        const disambiguator = getDisambiguator(move, moves);
        output += move.piece.toUpperCase() + disambiguator;
      }
      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += "x";
      }
      output += algebraic(move.to);
      if (move.promotion) {
        output += "=" + move.promotion.toUpperCase();
      }
    }
    this._makeMove(move);
    if (this.isCheck()) {
      if (this.isCheckmate()) {
        output += "#";
      } else {
        output += "+";
      }
    }
    this._undoMove();
    return output;
  }
  _moveFromSan(move, strict = false) {
    let cleanMove = strippedSan(move);
    if (!strict) {
      if (cleanMove === "0-0") {
        cleanMove = "O-O";
      } else if (cleanMove === "0-0-0") {
        cleanMove = "O-O-O";
      }
    }
    if (cleanMove == SAN_NULLMOVE) {
      const res = {
        color: this._turn,
        from: 0,
        to: 0,
        piece: "k",
        flags: BITS.NULL_MOVE
      };
      return res;
    }
    let pieceType = inferPieceType(cleanMove);
    let moves = this._moves({ legal: true, piece: pieceType });
    for (let i = 0, len = moves.length;i < len; i++) {
      if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
        return moves[i];
      }
    }
    if (strict) {
      return null;
    }
    let piece = undefined;
    let matches = undefined;
    let from = undefined;
    let to = undefined;
    let promotion = undefined;
    let overlyDisambiguated = false;
    matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
    if (matches) {
      piece = matches[1];
      from = matches[2];
      to = matches[3];
      promotion = matches[4];
      if (from.length == 1) {
        overlyDisambiguated = true;
      }
    } else {
      matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        piece = matches[1];
        from = matches[2];
        to = matches[3];
        promotion = matches[4];
        if (from.length == 1) {
          overlyDisambiguated = true;
        }
      }
    }
    pieceType = inferPieceType(cleanMove);
    moves = this._moves({
      legal: true,
      piece: piece ? piece : pieceType
    });
    if (!to) {
      return null;
    }
    for (let i = 0, len = moves.length;i < len; i++) {
      if (!from) {
        if (cleanMove === strippedSan(this._moveToSan(moves[i], moves)).replace("x", "")) {
          return moves[i];
        }
      } else if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[from] == moves[i].from && Ox88[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
        return moves[i];
      } else if (overlyDisambiguated) {
        const square = algebraic(moves[i].from);
        if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }
    return null;
  }
  ascii() {
    let s = `   +------------------------+
`;
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (file(i) === 0) {
        s += " " + "87654321"[rank(i)] + " |";
      }
      if (this._board[i]) {
        const piece = this._board[i].type;
        const color = this._board[i].color;
        const symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        s += " " + symbol + " ";
      } else {
        s += " . ";
      }
      if (i + 1 & 136) {
        s += `|
`;
        i += 8;
      }
    }
    s += `   +------------------------+
`;
    s += "     a  b  c  d  e  f  g  h";
    return s;
  }
  perft(depth) {
    const moves = this._moves({ legal: false });
    let nodes = 0;
    const color = this._turn;
    for (let i = 0, len = moves.length;i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(color)) {
        if (depth - 1 > 0) {
          nodes += this.perft(depth - 1);
        } else {
          nodes++;
        }
      }
      this._undoMove();
    }
    return nodes;
  }
  setTurn(color) {
    if (this._turn == color) {
      return false;
    }
    this.move("--");
    return true;
  }
  turn() {
    return this._turn;
  }
  board() {
    const output = [];
    let row = [];
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (this._board[i] == null) {
        row.push(null);
      } else {
        row.push({
          square: algebraic(i),
          type: this._board[i].type,
          color: this._board[i].color
        });
      }
      if (i + 1 & 136) {
        output.push(row);
        row = [];
        i += 8;
      }
    }
    return output;
  }
  squareColor(square) {
    if (square in Ox88) {
      const sq = Ox88[square];
      return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose = false } = {}) {
    const reversedHistory = [];
    const moveHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (verbose) {
        moveHistory.push(new Move(this, move));
      } else {
        moveHistory.push(this._moveToSan(move, this._moves()));
      }
      this._makeMove(move);
    }
    return moveHistory;
  }
  _getPositionCount(hash) {
    return this._positionCount.get(hash) ?? 0;
  }
  _incPositionCount() {
    this._positionCount.set(this._hash, (this._positionCount.get(this._hash) ?? 0) + 1);
  }
  _decPositionCount(hash) {
    const currentCount = this._positionCount.get(hash) ?? 0;
    if (currentCount === 1) {
      this._positionCount.delete(hash);
    } else {
      this._positionCount.set(hash, currentCount - 1);
    }
  }
  _pruneComments() {
    const reversedHistory = [];
    const currentComments = {};
    const copyComment = (fen) => {
      if (fen in this._comments) {
        currentComments[fen] = this._comments[fen];
      }
    };
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    copyComment(this.fen());
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      this._makeMove(move);
      copyComment(this.fen());
    }
    this._comments = currentComments;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(comment) {
    this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
  }
  deleteComment() {
    return this.removeComment();
  }
  removeComment() {
    const comment = this._comments[this.fen()];
    delete this._comments[this.fen()];
    return comment;
  }
  getComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      return { fen, comment: this._comments[fen] };
    });
  }
  deleteComments() {
    return this.removeComments();
  }
  removeComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      const comment = this._comments[fen];
      delete this._comments[fen];
      return { fen, comment };
    });
  }
  setCastlingRights(color, rights) {
    for (const side of [KING, QUEEN]) {
      if (rights[side] !== undefined) {
        if (rights[side]) {
          this._castling[color] |= SIDES[side];
        } else {
          this._castling[color] &= ~SIDES[side];
        }
      }
    }
    this._updateCastlingRights();
    const result = this.getCastlingRights(color);
    return (rights[KING] === undefined || rights[KING] === result[KING]) && (rights[QUEEN] === undefined || rights[QUEEN] === result[QUEEN]);
  }
  getCastlingRights(color) {
    return {
      [KING]: (this._castling[color] & SIDES[KING]) !== 0,
      [QUEEN]: (this._castling[color] & SIDES[QUEEN]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}

// index.js
var import_js_chess_engine = __toESM(require_dist(), 1);
var game = new Chess;
function isPromoting(fen, move) {
  const chess = new Chess(fen);
  const piece = chess.get(move.from);
  if (piece?.type !== "p") {
    return false;
  }
  if (piece.color !== chess.turn()) {
    return false;
  }
  if (!["1", "8"].some((it) => move.to.endsWith(it))) {
    return false;
  }
  return chess.moves({ square: move.from, verbose: true }).map((it) => it.to).includes(move.to);
}
function colorPrompt(level) {
  import_sweetalert2.default.fire({
    title: "Starting color",
    input: "radio",
    theme: "borderless",
    allowEscapeKey: false,
    allowOutsideClick: false,
    confirmButtonText: "Play",
    inputOptions: {
      white: "white",
      black: "black"
    },
    inputValidator: (value) => {
      if (!value)
        return "You need to choose something!";
    }
  }).then((result) => {
    if (result.isConfirmed) {
      if (result.value === "black") {
        main(level, COLOR.black);
      } else {
        main(level, COLOR.white);
      }
    }
  });
}
import_sweetalert2.default.fire({
  title: "Chessbot level",
  input: "range",
  theme: "borderless",
  allowEscapeKey: false,
  allowOutsideClick: false,
  confirmButtonText: "Next",
  inputAttributes: {
    min: "1",
    max: "7",
    step: "1"
  },
  inputValue: 4
}).then((result) => {
  if (result.isConfirmed) {
    colorPrompt(result.value);
  }
});
async function main(level, color) {
  const board = new Chessboard(document.getElementById("board"), {
    position: game.fen(),
    orientation: color,
    assetsUrl: "./assets/",
    style: { pieces: { file: "pieces/staunty.svg" }, cssClass: "green", borderType: BORDER_TYPE.frame },
    extensions: [
      { class: Markers, props: { autoMarkers: MARKER_TYPE.frame } }
    ]
  });
  function clearMoveMarkers() {
    board.removeMarkers(MARKER_TYPE.dot);
  }
  function bot() {
    if (level == 7) {
      const result = import_js_chess_engine.ai(game.fen(), { level: 5, depth: { base: 6 } });
      return result.move;
    } else if (level == 6) {
      const result = import_js_chess_engine.ai(game.fen(), { level: 5, depth: { base: 5 } });
      return result.move;
    } else {
      const result = import_js_chess_engine.ai(game.fen(), { level });
      return result.move;
    }
  }
  function makeBotMove() {
    const moves = game.moves();
    if (moves.length === 0) {
      return;
    }
    const move = bot();
    const squareFrom = Object.keys(move)[0];
    const squareTo = move[squareFrom];
    const from = squareFrom?.toLowerCase();
    const to = squareTo.toLowerCase();
    if (isPromoting(game.fen(), { from, to })) {
      game.move({ from, to, promotion: "q" });
    } else {
      game.move({ from, to });
    }
    board.setPosition(game.fen());
  }
  if (color === COLOR.black) {
    setTimeout(() => {
      makeBotMove();
    }, 200);
  }
  board.enableMoveInput(inputHandler, color);
  function inputHandler(event) {
    switch (event.type) {
      case INPUT_EVENT_TYPE.moveInputStarted:
        clearMoveMarkers();
        const moves = game.moves({
          square: event.square,
          verbose: true
        });
        moves.forEach((move) => {
          board.addMarker(MARKER_TYPE.dot, move.to);
        });
        return true;
      case INPUT_EVENT_TYPE.validateMoveInput:
        try {
          clearMoveMarkers();
          if (isPromoting(game.fen(), { from: event.squareFrom, to: event.squareTo })) {
            const move = game.move({ from: event.squareFrom, to: event.squareTo, promotion: "q" });
            if (move == null) {
              return false;
            }
          } else {
            const move = game.move({ from: event.squareFrom, to: event.squareTo });
            if (move == null) {
              return false;
            }
          }
          board.setPosition(game.fen());
          if (game.isGameOver()) {
            board.disableMoveInput();
            import_sweetalert2.default.fire({
              title: "Game Over",
              text: "Click to restart",
              theme: "borderless",
              showDenyButton: true,
              confirmButtonText: "Restart",
              denyButtonText: "Deny",
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } else {
            setTimeout(() => {
              makeBotMove();
              if (game.isGameOver()) {
                board.disableMoveInput();
                import_sweetalert2.default.fire({
                  title: "Game Over",
                  text: "Click to restart",
                  theme: "borderless",
                  showDenyButton: true,
                  confirmButtonText: "Restart",
                  denyButtonText: "Deny",
                  allowOutsideClick: false,
                  allowEscapeKey: false
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.reload();
                  }
                });
              }
            }, 40);
          }
          return true;
        } catch (error) {
          console.warn("Invalid move attempted", error);
          return false;
        }
      case INPUT_EVENT_TYPE.moveInputCanceled:
        clearMoveMarkers();
        break;
      case INPUT_EVENT_TYPE.moveInputFinished:
        clearMoveMarkers();
        break;
      case INPUT_EVENT_TYPE.movingOverSquare:
        break;
    }
  }
}
