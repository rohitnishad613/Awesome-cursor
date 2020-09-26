// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

// user setting variable's
let g_cursor_color,
  g_cursor_size = 7,
  g_cursor_canvas_color,
  g_cursor_canvas_radius,
  g_cursor_canvas_strokeWidth;

const AwesomeCursor = ({
  cursor_color = "red",
  cursor_size = 7,
  cursor_canvas_color = "rgba(255, 0, 0, 0.5)",
  cursor_canvas_radius = 15,
  cursor_canvas_strokeWidth = 2,
}) => {
  g_cursor_color = cursor_color;
  g_cursor_size = cursor_size;
  g_cursor_canvas_color = cursor_canvas_color;
  g_cursor_canvas_radius = cursor_canvas_radius;
  g_cursor_canvas_strokeWidth = cursor_canvas_strokeWidth;
  run();
};

function run() {
  let css = `body {
      cursor: none;
  }
  .cursor {
      position: fixed;
      left: 0;
      top: 0;
      pointer-events: none;
  }
  .cursor--small {
      width: ${g_cursor_size.toString()}px;
      height: ${g_cursor_size.toString()}px;
      left: -2.5px;
      top: -2.5px;
      border-radius: 50%;
      z-index: 11000;
      background: ${g_cursor_color};
  }
  .cursor--canvas {
      width: 100vw;
      height: 100vh;
      z-index: 12000;
  }`;
  function addStyle(styles) {
    /* Create style document */
    var css = document.createElement("style");

    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));

    /* Append style to the tag name */
    document.getElementsByTagName("head")[0].appendChild(css);
  }
  addStyle(css);
  let body = document.body;
  let cursor_elem = document.createElement("div");
  cursor_elem.className = "cursor cursor--small";
  let cursor_canvas = document.createElement("canvas");
  cursor_canvas.className = "cursor cursor--canvas";
  body.appendChild(cursor_elem);
  body.appendChild(cursor_canvas);

  const innerCursor = document.querySelector(".cursor--small");
  // add listener to track the current mouse position
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  const canvas = document.querySelector(".cursor--canvas");
  paper.setup(canvas);
  const segments = 8;

  // we'll need these later for the noisy circle
  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    g_cursor_canvas_radius
  );
  polygon.strokeColor = g_cursor_canvas_color;
  polygon.strokeWidth = g_cursor_canvas_strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  // the draw loop of Paper.js
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = (event) => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
    group.position = new paper.Point(lastX, lastY);
  };
}
