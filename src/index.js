import displayHome from "./home";
import displayTodayCounter from "./today";
import displayWeekCount from "./week";
import { displayToolbarProjects } from "./projects";

let sections = {
  home: true,
  today: false,
  week: false,
  update: function (section) {
    if (section === "home") {
      this.home = true;
      this.today = false;
      this.week = false;
    } else if (section === "today") {
      this.today = true;
      this.home = false;
      this.week = false;
    } else {
      this.week = true;
      this.today = false;
      this.home = false;
    }
  },
};

const counters = {
  homeCounter: document.querySelector(".homeCount"),
  todayCounter: document.querySelector(".todayCount"),
  weekCounter: document.querySelector(".weekCount"),
};

displayHome();
displayTodayCounter();
displayWeekCount();
displayToolbarProjects();

export { sections, counters };
