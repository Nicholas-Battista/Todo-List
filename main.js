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

    const left = document.createElement("div");
    left.classList.add("left");
    left.appendChild(createCheckBox());
    left.appendChild(createP(todo.title));
    div.appendChild(left);

    const right = document.createElement("div");
    right.classList.add("right");
    right.appendChild(createDetailBtn());
    right.appendChild(createP(todo.dueDate));
    // div.appendChild(createP(todo.priority));
    // div.appendChild(createP(todo.description));

    let trashCan = createDeleteSvg();
    right.appendChild(trashCan);

    div.appendChild(right);

    trashCan.addEventListener("click", () => {
      div.remove();
      removeTodo(array, todo);
    });

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

function createDeleteSvg() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
  );
  svg.appendChild(path);
  return svg;
}

function createDetailBtn() {
  const detailBtn = document.createElement("button");
  detailBtn.classList.add("detail");
  detailBtn.textContent = "Details";
  return detailBtn;
}

function removeTodo(array, todo) {
  const index = array.findIndex((todoItem) => todoItem.title === todo.title);
  if (index !== -1) {
    array.splice(index, 1);
  }
  console.log(array);
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




let homeTodos = [];

function displayHome() {
  if (___WEBPACK_IMPORTED_MODULE_1__.sections.home) {
    homeTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
    console.log(homeTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(homeTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
  }
}

const homeBtn = document.querySelector(".home");
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week */ "./src/week.js");




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




let todayTodos = [];

function displayToday() {
  if (___WEBPACK_IMPORTED_MODULE_1__.sections.today) {
    todayTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
    console.log(todayTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(todayTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
  }
}

const todayBtn = document.querySelector(".today");
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




let weekTodos = [];

function displayWeek() {
  if (___WEBPACK_IMPORTED_MODULE_1__.sections.week) {
    weekTodos.push((0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])());
    console.log(weekTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOS)(weekTodos);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.removeNewTodoPopUp)();
  }
}

const weekBtn = document.querySelector(".week");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuY29uc3QgdG9kb1BvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcclxuY29uc3QgVE9ET0NPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUT0RPKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkZXRlcm1pbmVQcmlvcml0eSgpO1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KTtcclxuICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICByZXR1cm4gdG9kbztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRPRE9TKGFycmF5KSB7XHJcbiAgVE9ET0NPTlRBSU5FUi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGFycmF5LmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KCkpO1xyXG4gICAgbGVmdC5hcHBlbmRDaGlsZChjcmVhdGVQKHRvZG8udGl0bGUpKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsZWZ0KTtcclxuXHJcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgICByaWdodC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxCdG4oKSk7XHJcbiAgICByaWdodC5hcHBlbmRDaGlsZChjcmVhdGVQKHRvZG8uZHVlRGF0ZSkpO1xyXG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5wcmlvcml0eSkpO1xyXG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kZXNjcmlwdGlvbikpO1xyXG5cclxuICAgIGxldCB0cmFzaENhbiA9IGNyZWF0ZURlbGV0ZVN2ZygpO1xyXG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQodHJhc2hDYW4pO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG4gICAgdHJhc2hDYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICByZW1vdmVUb2RvKGFycmF5LCB0b2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFRPRE9DT05UQUlORVIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goKSB7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICByZXR1cm4gY2hlY2tCb3g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVAoc3RyaW5nKSB7XHJcbiAgY29uc3QgcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwRWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZztcclxuICByZXR1cm4gcEVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVN2ZygpIHtcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblxyXG4gIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgXCJkXCIsXHJcbiAgICBcIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlwiXHJcbiAgKTtcclxuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGV0YWlsQnRuKCkge1xyXG4gIGNvbnN0IGRldGFpbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGV0YWlsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxcIik7XHJcbiAgZGV0YWlsQnRuLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XHJcbiAgcmV0dXJuIGRldGFpbEJ0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhhcnJheSwgdG9kbykge1xyXG4gIGNvbnN0IGluZGV4ID0gYXJyYXkuZmluZEluZGV4KCh0b2RvSXRlbSkgPT4gdG9kb0l0ZW0udGl0bGUgPT09IHRvZG8udGl0bGUpO1xyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGFycmF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZXJtaW5lUHJpb3JpdHkoKSB7XHJcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3dcIik7XHJcbiAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWRpdW1cIik7XHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFwiKTtcclxuXHJcbiAgaWYgKGxvdy5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gXCJsb3dcIjtcclxuICB9IGVsc2UgaWYgKG1lZGl1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gXCJtZWRpdW1cIjtcclxuICB9IGVsc2UgaWYgKGhpZ2guY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIFwiaGlnaFwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5ld1RvZG8oKSB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1pbmFjdGl2ZVwiKTtcclxuICB0b2RvUG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcImFkZC1pbmFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTmV3VG9kb1BvcFVwKCkge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtaW5hY3RpdmVcIik7XHJcbiAgdG9kb1BvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJhZGQtaW5hY3RpdmVcIik7XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9cIik7XHJcbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlOZXdUb2RvKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRPRE87XHJcbmV4cG9ydCB7IGRpc3BsYXlUT0RPUywgcmVtb3ZlTmV3VG9kb1BvcFVwIH07XHJcbiIsImNsYXNzIHRvZG9JdGVtIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbXBsZXRlZCgpIHtcclxuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgY29uc3QgdG9kbyA9IG5ldyB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICByZXR1cm4gdG9kbztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0l0ZW07XHJcbmV4cG9ydCB7IGdlbmVyYXRlVG9kbyB9O1xyXG4iLCJpbXBvcnQgY3JlYXRlVE9ETyBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgZGlzcGxheVRPRE9TLCByZW1vdmVOZXdUb2RvUG9wVXAgfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgc2VjdGlvbnMgfSBmcm9tIFwiLlwiO1xyXG5cclxubGV0IGhvbWVUb2RvcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XHJcbiAgaWYgKHNlY3Rpb25zLmhvbWUpIHtcclxuICAgIGhvbWVUb2Rvcy5wdXNoKGNyZWF0ZVRPRE8oKSk7XHJcbiAgICBjb25zb2xlLmxvZyhob21lVG9kb3MpO1xyXG4gICAgZGlzcGxheVRPRE9TKGhvbWVUb2Rvcyk7XHJcbiAgICByZW1vdmVOZXdUb2RvUG9wVXAoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzZWN0aW9ucy5ob21lID0gdHJ1ZTtcclxuICBzZWN0aW9ucy50b2RheSA9IGZhbHNlO1xyXG4gIHNlY3Rpb25zLndlZWsgPSBmYWxzZTtcclxuICBkaXNwbGF5VE9ET1MoaG9tZVRvZG9zKTtcclxufSk7XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdG9kb1wiKTtcclxuc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUhvbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWU7XHJcbiIsImltcG9ydCBkaXNwbGF5SG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBkaXNwbGF5VG9kYXkgZnJvbSBcIi4vdG9kYXlcIjtcclxuaW1wb3J0IGRpc3BsYXlXZWVrIGZyb20gXCIuL3dlZWtcIjtcclxuXHJcbmxldCBzZWN0aW9ucyA9IHtcclxuICBob21lOiB0cnVlLFxyXG4gIHRvZGF5OiBmYWxzZSxcclxuICB3ZWVrOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHNlY3Rpb25zIH07XHJcbiIsImltcG9ydCBjcmVhdGVUT0RPIGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VE9ET1MsIHJlbW92ZU5ld1RvZG9Qb3BVcCB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBzZWN0aW9ucyB9IGZyb20gXCIuXCI7XHJcblxyXG5sZXQgdG9kYXlUb2RvcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCkge1xyXG4gIGlmIChzZWN0aW9ucy50b2RheSkge1xyXG4gICAgdG9kYXlUb2Rvcy5wdXNoKGNyZWF0ZVRPRE8oKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RheVRvZG9zKTtcclxuICAgIGRpc3BsYXlUT0RPUyh0b2RheVRvZG9zKTtcclxuICAgIHJlbW92ZU5ld1RvZG9Qb3BVcCgpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlY3Rpb25zLnRvZGF5ID0gdHJ1ZTtcclxuICBzZWN0aW9ucy5ob21lID0gZmFsc2U7XHJcbiAgc2VjdGlvbnMud2VlayA9IGZhbHNlO1xyXG4gIGRpc3BsYXlUT0RPUyh0b2RheVRvZG9zKTtcclxufSk7XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdG9kb1wiKTtcclxuc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRvZGF5KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb2RheTtcclxuIiwiaW1wb3J0IGNyZWF0ZVRPRE8gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUT0RPUywgcmVtb3ZlTmV3VG9kb1BvcFVwIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IHNlY3Rpb25zIH0gZnJvbSBcIi5cIjtcclxuXHJcbmxldCB3ZWVrVG9kb3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXZWVrKCkge1xyXG4gIGlmIChzZWN0aW9ucy53ZWVrKSB7XHJcbiAgICB3ZWVrVG9kb3MucHVzaChjcmVhdGVUT0RPKCkpO1xyXG4gICAgY29uc29sZS5sb2cod2Vla1RvZG9zKTtcclxuICAgIGRpc3BsYXlUT0RPUyh3ZWVrVG9kb3MpO1xyXG4gICAgcmVtb3ZlTmV3VG9kb1BvcFVwKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrXCIpO1xyXG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2VjdGlvbnMud2VlayA9IHRydWU7XHJcbiAgc2VjdGlvbnMuaG9tZSA9IGZhbHNlO1xyXG4gIHNlY3Rpb25zLnRvZGF5ID0gZmFsc2U7XHJcbiAgZGlzcGxheVRPRE9TKHdlZWtUb2Rvcyk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XHJcbnN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlXZWVrKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWVrO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9