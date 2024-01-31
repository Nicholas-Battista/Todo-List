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
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./week */ "./src/week.js");







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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayToday);


/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




const weekBtn = document.querySelector(".week");
let weekTodos = [];

function displayWeek() {
  if (___WEBPACK_IMPORTED_MODULE_1__.sections.week) {
    weekTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
    console.log(weekTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(weekTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
  }
}

weekBtn.addEventListener("click", () => {
  ___WEBPACK_IMPORTED_MODULE_1__.sections.week = true;
  ___WEBPACK_IMPORTED_MODULE_1__.sections.home = false;
  ___WEBPACK_IMPORTED_MODULE_1__.sections.today = false;
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(weekTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayWeek);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeek);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbmNvbnN0IHRvZG9Qb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XHJcbmNvbnN0IFRPRE9DT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVE9ETygpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc1wiKS52YWx1ZTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZGV0ZXJtaW5lUHJpb3JpdHkoKTtcclxuICBjb25zdCB0b2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgcmV0dXJuIHRvZG87XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUT0RPUyhhcnJheSkge1xyXG4gIFRPRE9DT05UQUlORVIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBhcnJheS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KCkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby50aXRsZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kZXNjcmlwdGlvbikpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kYXRlKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUCh0b2RvLnByaW9yaXR5KSk7XHJcblxyXG4gICAgVE9ET0NPTlRBSU5FUi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVja0JveCgpIHtcclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIHJldHVybiBjaGVja0JveDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUChzdHJpbmcpIHtcclxuICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBFbGVtZW50LnRleHRDb250ZW50ID0gc3RyaW5nO1xyXG4gIHJldHVybiBwRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZXJtaW5lUHJpb3JpdHkoKSB7XHJcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3dcIik7XHJcbiAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWRpdW1cIik7XHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFwiKTtcclxuXHJcbiAgaWYgKGxvdy5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gXCJsb3dcIjtcclxuICB9IGVsc2UgaWYgKG1lZGl1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gXCJtZWRpdW1cIjtcclxuICB9IGVsc2UgaWYgKGhpZ2guY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIFwiaGlnaFwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5ld1RvZG8oKSB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1pbmFjdGl2ZVwiKTtcclxuICB0b2RvUG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcImFkZC1pbmFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTmV3VG9kb1BvcFVwKCkge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtaW5hY3RpdmVcIik7XHJcbiAgdG9kb1BvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJhZGQtaW5hY3RpdmVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9cIik7XHJcbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlOZXdUb2RvKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRPRE87XHJcbmV4cG9ydCB7IGRpc3BsYXlUT0RPUywgcmVtb3ZlTmV3VG9kb1BvcFVwIH07XHJcbiIsImNsYXNzIHRvZG9JdGVtIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbXBsZXRlZCgpIHtcclxuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgY29uc3QgdG9kbyA9IG5ldyB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICByZXR1cm4gdG9kbztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0l0ZW07XHJcbmV4cG9ydCB7IGdlbmVyYXRlVG9kbyB9O1xyXG4iLCJpbXBvcnQgY3JlYXRlVE9ETyBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgZGlzcGxheVRPRE9TLCByZW1vdmVOZXdUb2RvUG9wVXAgfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgc2VjdGlvbnMgfSBmcm9tIFwiLlwiO1xyXG5cclxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxubGV0IGhvbWVUb2RvcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XHJcbiAgaWYgKHNlY3Rpb25zLmhvbWUpIHtcclxuICAgIGhvbWVUb2Rvcy5wdXNoKGNyZWF0ZVRPRE8oKSk7XHJcbiAgICBjb25zb2xlLmxvZyhob21lVG9kb3MpO1xyXG4gICAgZGlzcGxheVRPRE9TKGhvbWVUb2Rvcyk7XHJcbiAgICByZW1vdmVOZXdUb2RvUG9wVXAoKTtcclxuICB9XHJcbn1cclxuXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzZWN0aW9ucy5ob21lID0gdHJ1ZTtcclxuICBzZWN0aW9ucy50b2RheSA9IGZhbHNlO1xyXG4gIHNlY3Rpb25zLndlZWsgPSBmYWxzZTtcclxuICBkaXNwbGF5VE9ET1MoaG9tZVRvZG9zKTtcclxufSk7XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdG9kb1wiKTtcclxuc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUhvbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWU7XHJcbiIsImltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG8gfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQgY3JlYXRlVE9ETyBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGRpc3BsYXlUb2RheSBmcm9tIFwiLi90b2RheVwiO1xyXG5pbXBvcnQgZGlzcGxheVdlZWsgZnJvbSBcIi4vd2Vla1wiO1xyXG5cclxubGV0IHNlY3Rpb25zID0ge1xyXG4gIGhvbWU6IHRydWUsXHJcbiAgdG9kYXk6IGZhbHNlLFxyXG4gIHdlZWs6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgc2VjdGlvbnMgfTtcclxuIiwiaW1wb3J0IGNyZWF0ZVRPRE8gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUT0RPUywgcmVtb3ZlTmV3VG9kb1BvcFVwIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IHNlY3Rpb25zIH0gZnJvbSBcIi5cIjtcclxuXHJcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcclxubGV0IHRvZGF5VG9kb3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RheSgpIHtcclxuICBpZiAoc2VjdGlvbnMudG9kYXkpIHtcclxuICAgIHRvZGF5VG9kb3MucHVzaChjcmVhdGVUT0RPKCkpO1xyXG4gICAgY29uc29sZS5sb2codG9kYXlUb2Rvcyk7XHJcbiAgICBkaXNwbGF5VE9ET1ModG9kYXlUb2Rvcyk7XHJcbiAgICByZW1vdmVOZXdUb2RvUG9wVXAoKTtcclxuICB9XHJcbn1cclxuXHJcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2VjdGlvbnMudG9kYXkgPSB0cnVlO1xyXG4gIHNlY3Rpb25zLmhvbWUgPSBmYWxzZTtcclxuICBzZWN0aW9ucy53ZWVrID0gZmFsc2U7XHJcbiAgZGlzcGxheVRPRE9TKHRvZGF5VG9kb3MpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC10b2RvXCIpO1xyXG5zdWJtaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VG9kYXkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRvZGF5O1xyXG4iLCJpbXBvcnQgY3JlYXRlVE9ETyBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgZGlzcGxheVRPRE9TLCByZW1vdmVOZXdUb2RvUG9wVXAgfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgc2VjdGlvbnMgfSBmcm9tIFwiLlwiO1xyXG5cclxuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla1wiKTtcclxubGV0IHdlZWtUb2RvcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdlZWsoKSB7XHJcbiAgaWYgKHNlY3Rpb25zLndlZWspIHtcclxuICAgIHdlZWtUb2Rvcy5wdXNoKGNyZWF0ZVRPRE8oKSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWVrVG9kb3MpO1xyXG4gICAgZGlzcGxheVRPRE9TKHdlZWtUb2Rvcyk7XHJcbiAgICByZW1vdmVOZXdUb2RvUG9wVXAoKTtcclxuICB9XHJcbn1cclxuXHJcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzZWN0aW9ucy53ZWVrID0gdHJ1ZTtcclxuICBzZWN0aW9ucy5ob21lID0gZmFsc2U7XHJcbiAgc2VjdGlvbnMudG9kYXkgPSBmYWxzZTtcclxuICBkaXNwbGF5VE9ET1Mod2Vla1RvZG9zKTtcclxufSk7XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdG9kb1wiKTtcclxuc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVdlZWspO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlZWs7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=