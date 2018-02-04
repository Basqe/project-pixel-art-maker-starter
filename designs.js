$(function() {
  let canvas = $(`#pixel_canvas`);

  //Disables context menu when right clicking
  document.addEventListener("contextmenu", event => event.preventDefault());

  function makeGrid() {
    let rows = $(`#input_height`).val();
    let cols = $(`#input_width`).val();

    //Removes existing grid if there is one
    canvas.children().remove();
    //Loop to create the grid rows
    for (let i = 0; i < rows; i++) {
      canvas.append(`<tr></tr>`);
    }
    //Loop to add the grid columns into the rows
    for (let j = 0; j < cols; j++) {
      $(`tr`).append(`<td></td>`);
    }
  }

  $(`#sizePicker`).submit(`click`, function(event) {
    //Deactivates usual browser behaviour - otherwise browser will refresh
    event.preventDefault();
    //Call makeGrid function to set up the grid
    makeGrid();
  });

  function paint(event) {
    event.preventDefault();
    if (event.buttons === 1) {
      let color = $(`#colorPicker`).val();
      $(this).css(`background-color`, color);
    } else if (event.buttons === 2) {
      $(this).css(`background-color`, `transparent`);
    }
  }
  canvas.on(`mousedown`, `td`, paint);
  canvas.on(`mousemove`, `td`, paint);

  //Clear color - button
  $(`#reset`).on(`click`, function(event) {
    event.preventDefault();
    $(`td`).css(`background-color`, `transparent`);
  });

  //Buttons that let you change the size of grid cells
  $("#small").on("click", function() {
    $("tr").css("height", "10px");
    $("td").css("width", "10px");
  });

  $("#medium").on("click", function() {
    $("tr").css("height", "20px");
    $("td").css("width", "20px");
  });

  $("#large").on("click", function() {
    $("tr").css("height", "30px");
    $("td").css("width", "30px");
  });

  //Removes border from each cell
  $("#border").on("click", function() {
    $("tr").toggleClass("gridOff");
    $("td").toggleClass("gridOff");
  });
});
