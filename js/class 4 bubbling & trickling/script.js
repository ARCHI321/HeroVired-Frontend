// document.getElementById("GrandParent").addEventListener("click", () => {
//   console.log("Grand Parent clicked");
// });
// document.getElementById("Parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });
// document.getElementById("Child").addEventListener("click", () => {
//   console.log("child clicked");
// });

function printNumbersWithDelay() {
  for (var i = 1; i <= 5; i++) {
    (function (num) {
      setTimeout(function () {
        console.log(num);
      }, num * 1000);
    })(i);
  }
}

printNumbersWithDelay();
