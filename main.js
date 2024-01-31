/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   displayTODOS: () => (/* binding */ displayTODOS),
/* harmony export */   removeNewTodoPopUp: () => (/* binding */ removeNewTodoPopUp)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");


const container = document.querySelector(".container");
const todoPopUp = document.querySelector(".add-todo");

function createTODO() {
  const title = document.querySelector(".title").value;
  const details = document.querySelector(".details").value;
  const date = document.getElementById("date").value;
  const priority = determinePriority();
  const todo = new _class__WEBPACK_IMPORTED_MODULE_0__["default"](title, details, date, priority);
  console.log(todo);
  return todo;
}

function displayTODOS(array, container) {
  container.innerHTML = "";
  array.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");

    div.appendChild(createCheckBox());
    div.appendChild(createP(todo.title));
    div.appendChild(createP(todo.description));
    div.appendChild(createP(todo.date));
    div.appendChild(createP(todo.priority));

    container.appendChild(div);
  });
}

function createCheckBox() {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  return checkBox;
}

function createP(string) {
  const pElement = document.createElement("p");
  pElement.textContent = string;
  return pElement;
}

function determinePriority() {
  const low = document.getElementById("low");
  const medium = document.getElementById("medium");
  const high = document.getElementById("high");

  if (low.checked) {
    return "low";
  } else if (medium.checked) {
    return "medium";
  } else if (high.checked) {
    return "high";
  }
}

function displayNewTodo() {
  container.classList.toggle("is-inactive");
  todoPopUp.classList.toggle("add-inactive");
}

function removeNewTodoPopUp() {
  container.classList.toggle("is-inactive");
  todoPopUp.classList.toggle("add-inactive");
}

const addTodoBtn = document.querySelector(".addTodo");
addTodoBtn.addEventListener("click", displayNewTodo);

// const submitTodo = document.querySelector(".submit-todo");
// submitTodo.addEventListener("click", createTODO);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTODO);



/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateTodo: () => (/* binding */ generateTodo)
/* harmony export */ });
class todoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  updateCompleted() {
    this.completed = true;
  }
}

function generateTodo(title, description, dueDate, priority) {
  const todo = new todoItem(title, description, dueDate, priority);
  console.log(todo);
  return todo;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



let homeTodos = [];
const home = document.querySelector(".todos");

function displayHome() {
  homeTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
  console.log(homeTodos);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(homeTodos, home);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
}

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayHome);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);


/***/ })

/******/ 	});
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQztBQUNrQjs7Ozs7Ozs7Ozs7Ozs7OztBQzFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQzBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQVU7QUFDM0I7QUFDQSxFQUFFLGtEQUFZO0FBQ2QsRUFBRSx3REFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2hCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ1E7QUFDUjtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbmNvbnN0IHRvZG9Qb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUT0RPKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkZXRlcm1pbmVQcmlvcml0eSgpO1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KTtcclxuICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICByZXR1cm4gdG9kbztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRPRE9TKGFycmF5LCBjb250YWluZXIpIHtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBhcnJheS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KCkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby50aXRsZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kZXNjcmlwdGlvbikpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kYXRlKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUCh0b2RvLnByaW9yaXR5KSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KCkge1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgcmV0dXJuIGNoZWNrQm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQKHN0cmluZykge1xyXG4gIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcEVsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmc7XHJcbiAgcmV0dXJuIHBFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlcm1pbmVQcmlvcml0eSgpIHtcclxuICBjb25zdCBsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcclxuICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGl1bVwiKTtcclxuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoXCIpO1xyXG5cclxuICBpZiAobG93LmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBcImxvd1wiO1xyXG4gIH0gZWxzZSBpZiAobWVkaXVtLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBcIm1lZGl1bVwiO1xyXG4gIH0gZWxzZSBpZiAoaGlnaC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gXCJoaWdoXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWluYWN0aXZlXCIpO1xyXG4gIHRvZG9Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkLWluYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOZXdUb2RvUG9wVXAoKSB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1pbmFjdGl2ZVwiKTtcclxuICB0b2RvUG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcImFkZC1pbmFjdGl2ZVwiKTtcclxufVxyXG5cclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVG9kb1wiKTtcclxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU5ld1RvZG8pO1xyXG5cclxuLy8gY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XHJcbi8vIHN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRPRE8pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVE9ETztcclxuZXhwb3J0IHsgZGlzcGxheVRPRE9TLCByZW1vdmVOZXdUb2RvUG9wVXAgfTtcclxuIiwiY2xhc3MgdG9kb0l0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29tcGxldGVkKCkge1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICBjb25zdCB0b2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTtcclxuZXhwb3J0IHsgZ2VuZXJhdGVUb2RvIH07XHJcbiIsImltcG9ydCBjcmVhdGVUT0RPIGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VE9ET1MsIHJlbW92ZU5ld1RvZG9Qb3BVcCB9IGZyb20gXCIuL0RPTVwiO1xyXG5cclxubGV0IGhvbWVUb2RvcyA9IFtdO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIGhvbWVUb2Rvcy5wdXNoKGNyZWF0ZVRPRE8oKSk7XHJcbiAgY29uc29sZS5sb2coaG9tZVRvZG9zKTtcclxuICBkaXNwbGF5VE9ET1MoaG9tZVRvZG9zLCBob21lKTtcclxuICByZW1vdmVOZXdUb2RvUG9wVXAoKTtcclxufVxyXG5cclxuY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XHJcbnN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlIb21lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG8gfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQgY3JlYXRlVE9ETyBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9