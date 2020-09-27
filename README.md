# Awesome-cursor

Tiny JS library to GET custom awesome cursor for website..

## Demo

Visit any one of them both have Awesome-cursor.

* [https://rohitnishad613.github.io](https://rohitnishad613.github.io)

* [https://rohitnishad613.github.io/Awesome-cursor](https://rohitnishad613.github.io/Awesome-cursor)

## Installation

### CDN

Use this CDN Link to get Awesome-cursor.

```html
https://cdn.jsdelivr.net/gh/rohitnishad613/Awesome-cursor/awesome-cursor.js
```
## Setup
Add this script tag in your root page.

```html
<script src="https://cdn.jsdelivr.net/gh/rohitnishad613/Awesome-cursor/awesome-cursor.js"></script>
```

then just call it as,

```html
<script>
  AwesomeCursor({}); // important
</script>
```

## Customization

```html
<script>
  let options = {
     cursor_color = "rgb(255, 0, 0)",
     cursor_size = 7,
     cursor_canvas_color = "rgba(255, 0, 0, 0.5)",
     cursor_canvas_radius = 15,
     cursor_canvas_strokeWidth = 2,
  }
  AwesomeCursor(options);
</script>
```
| Option | Default Value | Description |
| --- | --- |  --- |
| cursor_color | "rgb(255, 0, 0)" | Color of small dot in cursor. |
| cursor_size | 7 | Size of small dot in cursor.|
| cursor_canvas_color | "rgba(255, 0, 0, 0.5)" | Color of animated border of dot.|
| cursor_canvas_radius | 15 | Border Radius of animated border of dot.|
| cursor_canvas_strokeWidth | 2 | Width of Border Radius of animated border of dot.|


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
