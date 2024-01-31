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
/* harmony export */   displayTODOS: () => (/* binding */ displayTODOS)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");


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
  const container = document.querySelector(".container");
  container.classList.toggle("is-inactive");

  const todoPopUp = document.querySelector(".add-todo");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQVU7QUFDM0I7QUFDQSxFQUFFLGtEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2YzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDUTtBQUNSO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUT0RPKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkZXRlcm1pbmVQcmlvcml0eSgpO1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KTtcclxuICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICByZXR1cm4gdG9kbztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRPRE9TKGFycmF5LCBjb250YWluZXIpIHtcclxuICBhcnJheS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KCkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby50aXRsZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kZXNjcmlwdGlvbikpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kYXRlKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUCh0b2RvLnByaW9yaXR5KSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KCkge1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgcmV0dXJuIGNoZWNrQm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQKHN0cmluZykge1xyXG4gIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcEVsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmc7XHJcbiAgcmV0dXJuIHBFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlcm1pbmVQcmlvcml0eSgpIHtcclxuICBjb25zdCBsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcclxuICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGl1bVwiKTtcclxuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoXCIpO1xyXG5cclxuICBpZiAobG93LmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBcImxvd1wiO1xyXG4gIH0gZWxzZSBpZiAobWVkaXVtLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBcIm1lZGl1bVwiO1xyXG4gIH0gZWxzZSBpZiAoaGlnaC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gXCJoaWdoXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWluYWN0aXZlXCIpO1xyXG5cclxuICBjb25zdCB0b2RvUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xyXG4gIHRvZG9Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkLWluYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb2RvXCIpO1xyXG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TmV3VG9kbyk7XHJcblxyXG4vLyBjb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdG9kb1wiKTtcclxuLy8gc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVE9ETyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUT0RPO1xyXG5leHBvcnQgeyBkaXNwbGF5VE9ET1MgfTtcclxuIiwiY2xhc3MgdG9kb0l0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29tcGxldGVkKCkge1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICBjb25zdCB0b2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTtcclxuZXhwb3J0IHsgZ2VuZXJhdGVUb2RvIH07XHJcbiIsImltcG9ydCBjcmVhdGVUT0RPIGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VE9ET1MgfSBmcm9tIFwiLi9ET01cIjtcclxuXHJcbmxldCBob21lVG9kb3MgPSBbXTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcclxuICBob21lVG9kb3MucHVzaChjcmVhdGVUT0RPKCkpO1xyXG4gIGNvbnNvbGUubG9nKGhvbWVUb2Rvcyk7XHJcbiAgZGlzcGxheVRPRE9TKGhvbWVUb2RvcywgaG9tZSk7XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC10b2RvXCIpO1xyXG5zdWJtaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SG9tZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vY2xhc3NcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvIH0gZnJvbSBcIi4vY2xhc3NcIjtcclxuaW1wb3J0IGNyZWF0ZVRPRE8gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==