$(document).ready (function() {
  console.log (" Prueba")
  const url =
  "localdata.json";
let quest = (function () {
  let json = null;
  $.ajax({
    // async: false,
    url: url,
    dataType: "json",
    success: function (data) {
      json = data;
    },
  });
  return json;
})();
console.log(quest)
});

// const url =
//   "localdata.json";
// let quest = (function () {
//   let json = null;
//   $.ajax({
//     async: false,
//     url: url,
//     dataType: "json",
//     success: function (data) {
//       json = data;
//     },
//   });
//   return json;
// })();
// console.log(quest)
