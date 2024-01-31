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
    right.appendChild(createDetailBtn(todo));
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

function createDetailBtn(todo) {
  const detailBtn = document.createElement("button");
  detailBtn.classList.add("detail");
  detailBtn.textContent = "Details";

  detailBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("details-container");

    container.classList.toggle("is-inactive");

    div.appendChild(createP(todo.title));

    const exitDetailsBtn = document.createElement("button");
    exitDetailsBtn.classList.add("exitDetailsBtn");
    exitDetailsBtn.textContent = "X";
    exitDetailsBtn.addEventListener("click", () => {
      div.remove();
      container.classList.toggle("is-inactive");
    });
    div.appendChild(exitDetailsBtn);

    document.body.appendChild(div);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQzFCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy93ZWVrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vY2xhc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5jb25zdCB0b2RvUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xyXG5jb25zdCBUT0RPQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRPRE8oKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNcIikudmFsdWU7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRldGVybWluZVByaW9yaXR5KCk7XHJcbiAgY29uc3QgdG9kbyA9IG5ldyB0b2RvSXRlbSh0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG8pO1xyXG4gIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VE9ET1MoYXJyYXkpIHtcclxuICBUT0RPQ09OVEFJTkVSLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgYXJyYXkuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICAgIGxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tCb3goKSk7XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby50aXRsZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbEJ0bih0b2RvKSk7XHJcbiAgICByaWdodC5hcHBlbmRDaGlsZChjcmVhdGVQKHRvZG8uZHVlRGF0ZSkpO1xyXG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5wcmlvcml0eSkpO1xyXG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby5kZXNjcmlwdGlvbikpO1xyXG5cclxuICAgIGxldCB0cmFzaENhbiA9IGNyZWF0ZURlbGV0ZVN2ZygpO1xyXG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQodHJhc2hDYW4pO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG4gICAgdHJhc2hDYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICByZW1vdmVUb2RvKGFycmF5LCB0b2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFRPRE9DT05UQUlORVIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goKSB7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICByZXR1cm4gY2hlY2tCb3g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVAoc3RyaW5nKSB7XHJcbiAgY29uc3QgcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwRWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZztcclxuICByZXR1cm4gcEVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVN2ZygpIHtcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblxyXG4gIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgXCJkXCIsXHJcbiAgICBcIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlwiXHJcbiAgKTtcclxuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGV0YWlsQnRuKHRvZG8pIHtcclxuICBjb25zdCBkZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRldGFpbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsXCIpO1xyXG4gIGRldGFpbEJ0bi50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xyXG5cclxuICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtaW5hY3RpdmVcIik7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVAodG9kby50aXRsZSkpO1xyXG5cclxuICAgIGNvbnN0IGV4aXREZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGV4aXREZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0RGV0YWlsc0J0blwiKTtcclxuICAgIGV4aXREZXRhaWxzQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICBleGl0RGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtaW5hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChleGl0RGV0YWlsc0J0bik7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBkZXRhaWxCdG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRvZG8oYXJyYXksIHRvZG8pIHtcclxuICBjb25zdCBpbmRleCA9IGFycmF5LmZpbmRJbmRleCgodG9kb0l0ZW0pID0+IHRvZG9JdGVtLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcclxuICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhhcnJheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVybWluZVByaW9yaXR5KCkge1xyXG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93XCIpO1xyXG4gIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpO1xyXG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XHJcblxyXG4gIGlmIChsb3cuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIFwibG93XCI7XHJcbiAgfSBlbHNlIGlmIChtZWRpdW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIFwibWVkaXVtXCI7XHJcbiAgfSBlbHNlIGlmIChoaWdoLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBcImhpZ2hcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdUb2RvKCkge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtaW5hY3RpdmVcIik7XHJcbiAgdG9kb1BvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJhZGQtaW5hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5ld1RvZG9Qb3BVcCgpIHtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWluYWN0aXZlXCIpO1xyXG4gIHRvZG9Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkLWluYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb2RvXCIpO1xyXG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TmV3VG9kbyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUT0RPO1xyXG5leHBvcnQgeyBkaXNwbGF5VE9ET1MsIHJlbW92ZU5ld1RvZG9Qb3BVcCB9O1xyXG4iLCJjbGFzcyB0b2RvSXRlbSB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgcmV0dXJuIHRvZG87XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtO1xyXG5leHBvcnQgeyBnZW5lcmF0ZVRvZG8gfTtcclxuIiwiaW1wb3J0IGNyZWF0ZVRPRE8gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUT0RPUywgcmVtb3ZlTmV3VG9kb1BvcFVwIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IHNlY3Rpb25zIH0gZnJvbSBcIi5cIjtcclxuXHJcbmxldCBob21lVG9kb3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIGlmIChzZWN0aW9ucy5ob21lKSB7XHJcbiAgICBob21lVG9kb3MucHVzaChjcmVhdGVUT0RPKCkpO1xyXG4gICAgY29uc29sZS5sb2coaG9tZVRvZG9zKTtcclxuICAgIGRpc3BsYXlUT0RPUyhob21lVG9kb3MpO1xyXG4gICAgcmVtb3ZlTmV3VG9kb1BvcFVwKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2VjdGlvbnMuaG9tZSA9IHRydWU7XHJcbiAgc2VjdGlvbnMudG9kYXkgPSBmYWxzZTtcclxuICBzZWN0aW9ucy53ZWVrID0gZmFsc2U7XHJcbiAgZGlzcGxheVRPRE9TKGhvbWVUb2Rvcyk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XHJcbnN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlIb21lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lO1xyXG4iLCJpbXBvcnQgZGlzcGxheUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgZGlzcGxheVRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XHJcbmltcG9ydCBkaXNwbGF5V2VlayBmcm9tIFwiLi93ZWVrXCI7XHJcblxyXG5sZXQgc2VjdGlvbnMgPSB7XHJcbiAgaG9tZTogdHJ1ZSxcclxuICB0b2RheTogZmFsc2UsXHJcbiAgd2VlazogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgeyBzZWN0aW9ucyB9O1xyXG4iLCJpbXBvcnQgY3JlYXRlVE9ETyBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgZGlzcGxheVRPRE9TLCByZW1vdmVOZXdUb2RvUG9wVXAgfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgc2VjdGlvbnMgfSBmcm9tIFwiLlwiO1xyXG5cclxubGV0IHRvZGF5VG9kb3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RheSgpIHtcclxuICBpZiAoc2VjdGlvbnMudG9kYXkpIHtcclxuICAgIHRvZGF5VG9kb3MucHVzaChjcmVhdGVUT0RPKCkpO1xyXG4gICAgY29uc29sZS5sb2codG9kYXlUb2Rvcyk7XHJcbiAgICBkaXNwbGF5VE9ET1ModG9kYXlUb2Rvcyk7XHJcbiAgICByZW1vdmVOZXdUb2RvUG9wVXAoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcclxudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzZWN0aW9ucy50b2RheSA9IHRydWU7XHJcbiAgc2VjdGlvbnMuaG9tZSA9IGZhbHNlO1xyXG4gIHNlY3Rpb25zLndlZWsgPSBmYWxzZTtcclxuICBkaXNwbGF5VE9ET1ModG9kYXlUb2Rvcyk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRvZG9cIik7XHJcbnN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUb2RheSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VG9kYXk7XHJcbiIsImltcG9ydCBjcmVhdGVUT0RPIGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VE9ET1MsIHJlbW92ZU5ld1RvZG9Qb3BVcCB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBzZWN0aW9ucyB9IGZyb20gXCIuXCI7XHJcblxyXG5sZXQgd2Vla1RvZG9zID0gW107XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5V2VlaygpIHtcclxuICBpZiAoc2VjdGlvbnMud2Vlaykge1xyXG4gICAgd2Vla1RvZG9zLnB1c2goY3JlYXRlVE9ETygpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlZWtUb2Rvcyk7XHJcbiAgICBkaXNwbGF5VE9ET1Mod2Vla1RvZG9zKTtcclxuICAgIHJlbW92ZU5ld1RvZG9Qb3BVcCgpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla1wiKTtcclxud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlY3Rpb25zLndlZWsgPSB0cnVlO1xyXG4gIHNlY3Rpb25zLmhvbWUgPSBmYWxzZTtcclxuICBzZWN0aW9ucy50b2RheSA9IGZhbHNlO1xyXG4gIGRpc3BsYXlUT0RPUyh3ZWVrVG9kb3MpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC10b2RvXCIpO1xyXG5zdWJtaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5V2Vlayk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VlaztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==