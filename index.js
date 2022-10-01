let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const dailyBtn = document.getElementById("daily-Btn");
dailyBtn.addEventListener("click", () => {
  document.getElementById("work-hours").textContent = "5hrs";
  document.getElementById("work-week").textContent = "previous 7hrs";
  document.getElementById("play-hours").textContent = "1hrs";
  document.getElementById("play-week").textContent = "previous 2hrs";
  document.getElementById("study-hours").textContent = "0hrs";
  document.getElementById("study-week").textContent = "previous 1hrs";
  document.getElementById("exercise-hours").textContent = "1hrs";
  document.getElementById("exercise-week").textContent = "previous 1hrs";
  document.getElementById("social-hours").textContent = "1hrs";
  document.getElementById("social-week").textContent = "previous 3hrs";
  document.getElementById("selfcare-hours").textContent = "0hrs";
  document.getElementById("selfcare-week").textContent = "previous 1hrs";
});
const weeklyBtn = document.getElementById("weekly-Btn");
weeklyBtn.addEventListener("click", () => {
  document.getElementById("work-hours").textContent = "32hrs";
  document.getElementById("work-week").textContent = "previous 36hrs";
  document.getElementById("play-hours").textContent = "10hrs";
  document.getElementById("play-week").textContent = "previous 8hrs";
  document.getElementById("study-hours").textContent = "4hrs";
  document.getElementById("study-week").textContent = "previous 7hrs";
  document.getElementById("exercise-hours").textContent = "4hrs";
  document.getElementById("exercise-week").textContent = "previous 5hrs";
  document.getElementById("social-hours").textContent = "4hrs";
  document.getElementById("social-week").textContent = "previous 10hrs";
  document.getElementById("selfcare-hours").textContent = "2hrs";
  document.getElementById("selfcare-week").textContent = "previous 11hrs";
});
const mothlyBtn = document.getElementById("monthly-Btn");
mothlyBtn.addEventListener("click", () => {
  document.getElementById("work-hours").textContent = "103hrs";
  document.getElementById("work-week").textContent = "previous 128hrs";
  document.getElementById("play-hours").textContent = "23hrs";
  document.getElementById("play-week").textContent = "previous 29hrs";
  document.getElementById("study-hours").textContent = "13hrs";
  document.getElementById("study-week").textContent = "previous 19hrs";
  document.getElementById("exercise-hours").textContent = "11hrs";
  document.getElementById("exercise-week").textContent = "previous 18hrs";
  document.getElementById("social-hours").textContent = "21hrs";
  document.getElementById("social-week").textContent = "previous 23hrs";
  document.getElementById("selfcare-hours").textContent = "7hrs";
  document.getElementById("selfcare-week").textContent = "previous 11hrs";
});
