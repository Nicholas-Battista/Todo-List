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
const TODOCONTAINER = document.querySelector(".todos");

function createTODO() {
  const title = document.querySelector(".title").value;
  const details = document.querySelector(".details").value;
  const date = document.getElementById("date").value;
  const priority = determinePriority();
  const todo = new _class__WEBPACK_IMPORTED_MODULE_0__["default"](title, details, date, priority);
  console.log(todo);
  return todo;
}

function displayTODOS(array) {
  TODOCONTAINER.innerHTML = "";
  array.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");

    div.appendChild(createCheckBox());
    div.appendChild(createP(todo.title));
    div.appendChild(createP(todo.description));
    div.appendChild(createP(todo.date));
    div.appendChild(createP(todo.priority));

    TODOCONTAINER.appendChild(div);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




const homeBtn = document.querySelector(".home");
let homeTodos = [];

function displayHome() {
  if (___WEBPACK_IMPORTED_MODULE_1__.sections.home) {
    homeTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
    console.log(homeTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(homeTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
  }
}

homeBtn.addEventListener("click", () => {
  ___WEBPACK_IMPORTED_MODULE_1__.sections.home = true;
  ___WEBPACK_IMPORTED_MODULE_1__.sections.today = false;
  ___WEBPACK_IMPORTED_MODULE_1__.sections.week = false;
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(homeTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayHome);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sections: () => (/* binding */ sections)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today */ "./src/today.js");






let sections = {
  home: true,
  today: false,
  week: false,
};




/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




const todayBtn = document.querySelector(".today");
let todayTodos = [];

function displayToday() {
  if (___WEBPACK_IMPORTED_MODULE_1__.sections.today) {
    todayTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
    console.log(todayTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(todayTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
  }
}

todayBtn.addEventListener("click", () => {
  ___WEBPACK_IMPORTED_MODULE_1__.sections.today = true;
  ___WEBPACK_IMPORTED_MODULE_1__.sections.home = false;
  ___WEBPACK_IMPORTED_MODULE_1__.sections.week = false;
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(todayTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayToday);

// depending on which section is clicked - display the array and then when + is clicked its added to THAT array

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayToday);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQzBCO0FBQzVCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVDQUFRO0FBQ2QsbUJBQW1CLGdEQUFVO0FBQzdCO0FBQ0EsSUFBSSxrREFBWTtBQUNoQixJQUFJLHdEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUNBQVE7QUFDVixFQUFFLHVDQUFRO0FBQ1YsRUFBRSx1Q0FBUTtBQUNWLEVBQUUsa0RBQVk7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkk7QUFDUTtBQUNSO0FBQ0U7QUFDRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaVztBQUMwQjtBQUM1QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1Q0FBUTtBQUNkLG9CQUFvQixnREFBVTtBQUM5QjtBQUNBLElBQUksa0RBQVk7QUFDaEIsSUFBSSx3REFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVDQUFRO0FBQ1YsRUFBRSx1Q0FBUTtBQUNWLEVBQUUsdUNBQVE7QUFDVixFQUFFLGtEQUFZO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQzVCNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vY2xhc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5jb25zdCB0b2RvUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xyXG5jb25zdCBUT0RPQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRPRE8oKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNcIikudmFsdWU7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRldGVybWluZVByaW9yaXR5KCk7XHJcbiAgY29uc3QgdG9kbyA9IG5ldyB0b2RvSXRlbSh0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VE9ET1MoYXJyYXkpIHtcclxuICBUT0RPQ09OVEFJTkVSLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgYXJyYXkuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVDaGVja0JveCgpKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQKHRvZG8udGl0bGUpKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQKHRvZG8uZGVzY3JpcHRpb24pKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQKHRvZG8uZGF0ZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5wcmlvcml0eSkpO1xyXG5cclxuICAgIFRPRE9DT05UQUlORVIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goKSB7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICByZXR1cm4gY2hlY2tCb3g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVAoc3RyaW5nKSB7XHJcbiAgY29uc3QgcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwRWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZztcclxuICByZXR1cm4gcEVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVybWluZVByaW9yaXR5KCkge1xyXG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93XCIpO1xyXG4gIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpO1xyXG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XHJcblxyXG4gIGlmIChsb3cuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIFwibG93XCI7XHJcbiAgfSBlbHNlIGlmIChtZWRpdW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIFwibWVkaXVtXCI7XHJcbiAgfSBlbHNlIGlmIChoaWdoLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBcImhpZ2hcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdUb2RvKCkge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtaW5hY3RpdmVcIik7XHJcbiAgdG9kb1BvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJhZGQtaW5hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5ld1RvZG9Qb3BVcCgpIHtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWluYWN0aXZlXCIpO1xyXG4gIHRvZG9Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkLWluYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb2RvXCIpO1xyXG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TmV3VG9kbyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUT0RPO1xyXG5leHBvcnQgeyBkaXNwbGF5VE9ET1MsIHJlbW92ZU5ld1RvZG9Qb3BVcCB9O1xyXG4iLCJjbGFzcyB0b2RvSXRlbSB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgcmV0dXJuIHRvZG87XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtO1xyXG5leHBvcnQgeyBnZW5lcmF0ZVRvZG8gfTtcclxuIiwiaW1wb3J0IGNyZWF0ZVRPRE8gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUT0RPUywgcmVtb3ZlTmV3VG9kb1BvcFVwIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IHNlY3Rpb25zIH0gZnJvbSBcIi5cIjtcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmxldCBob21lVG9kb3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIGlmIChzZWN0aW9ucy5ob21lKSB7XHJcbiAgICBob21lVG9kb3MucHVzaChjcmVhdGVUT0RPKCkpO1xyXG4gICAgY29uc29sZS5sb2coaG9tZVRvZG9zKTtcclxuICAgIGRpc3BsYXlUT0RPUyhob21lVG9kb3MpO1xyXG4gICAgcmVtb3ZlTmV3VG9kb1BvcFVwKCk7XHJcbiAgfVxyXG59XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2VjdGlvbnMuaG9tZSA9IHRydWU7XHJcbiAgc2VjdGlvbnMudG9kYXkgPSBmYWxzZTtcclxuICBzZWN0aW9ucy53ZWVrID0gZmFsc2U7XHJcbiAgZGlzcGxheVRPRE9TKGhvbWVUb2Rvcyk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XHJcbnN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlIb21lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lO1xyXG4iLCJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vY2xhc3NcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvIH0gZnJvbSBcIi4vY2xhc3NcIjtcclxuaW1wb3J0IGNyZWF0ZVRPRE8gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBkaXNwbGF5VG9kYXkgZnJvbSBcIi4vdG9kYXlcIjtcclxuXHJcbmxldCBzZWN0aW9ucyA9IHtcclxuICBob21lOiB0cnVlLFxyXG4gIHRvZGF5OiBmYWxzZSxcclxuICB3ZWVrOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHNlY3Rpb25zIH07XHJcbiIsImltcG9ydCBjcmVhdGVUT0RPIGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VE9ET1MsIHJlbW92ZU5ld1RvZG9Qb3BVcCB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBzZWN0aW9ucyB9IGZyb20gXCIuXCI7XHJcblxyXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XHJcbmxldCB0b2RheVRvZG9zID0gW107XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXkoKSB7XHJcbiAgaWYgKHNlY3Rpb25zLnRvZGF5KSB7XHJcbiAgICB0b2RheVRvZG9zLnB1c2goY3JlYXRlVE9ETygpKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZGF5VG9kb3MpO1xyXG4gICAgZGlzcGxheVRPRE9TKHRvZGF5VG9kb3MpO1xyXG4gICAgcmVtb3ZlTmV3VG9kb1BvcFVwKCk7XHJcbiAgfVxyXG59XHJcblxyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlY3Rpb25zLnRvZGF5ID0gdHJ1ZTtcclxuICBzZWN0aW9ucy5ob21lID0gZmFsc2U7XHJcbiAgc2VjdGlvbnMud2VlayA9IGZhbHNlO1xyXG4gIGRpc3BsYXlUT0RPUyh0b2RheVRvZG9zKTtcclxufSk7XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdG9kb1wiKTtcclxuc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRvZGF5KTtcclxuXHJcbi8vIGRlcGVuZGluZyBvbiB3aGljaCBzZWN0aW9uIGlzIGNsaWNrZWQgLSBkaXNwbGF5IHRoZSBhcnJheSBhbmQgdGhlbiB3aGVuICsgaXMgY2xpY2tlZCBpdHMgYWRkZWQgdG8gVEhBVCBhcnJheVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRvZGF5O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9