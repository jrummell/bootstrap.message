# jQuery Bootstrap Message

A simple jQuery plugin that displays info and error messages.

Install with npm:

[![bootstrap-mesage on npm](https://img.shields.io/npm/v/bootstrap-message.svg)](https://www.npmjs.com/package/bootstrap-message)

```bash
> npm i bootstrap-message
```

## Usage

### Options

All options are optional.

| option  | values           | default                           | description                                                                                  |
| ------- | ---------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| message | any text or html | inner html of the matched element | the message                                                                                  |
| type    | info, error      | info                              | the type of message                                                                          |
| dismiss | true, false      | true                              | if true, "Click to dismiss" is appended to the message and clicking it will hide the message |

### Methods

| method  | arguments | description                                                                               |
| ------- | --------- | ----------------------------------------------------------------------------------------- |
| show    | none      | shows the message                                                                         |
| hide    | none      | hides the message                                                                         |
| options | options   | changes the options                                                                       |
| destroy | none      | restores the matched element to the state it was in before the message plugin was applied |

### Examples

```html
<script type="text/javascript">
    $(document).ready(function() {
        $("#message1").message();
        $("#message2").message({ type: "error" });
        $("#message3").message({
            type: "info",
            message: "Here's an info message with dynamic content."
        });
        $("#message4").message({ dismiss: false });
        $("#message5").message();
        $("#message6").message({ dismiss: false });

        $("#message5-button").click(function() {
            $("#message5").message("options", {
                type: "error",
                message: "Error"
            });
        });

        $("#message6-hide").click(function() {
            $("#message6").message("hide");
        });

        $("#message6-show").click(function() {
            $("#message6").message("show");
        });
    });
</script>
<div id="message1">Here's an info message.</div>
<div id="message2">Here's an error message.</div>
<div id="message3"></div>
<div id="message4">Here's an info message without dismiss.</div>
<div>
    <div id="message5">
        Click the following button to change this to an error.
    </div>
    <button id="message5-button">Change to Error</button>
</div>
<div>
    <div id="message6">Click the following buttons to show or hide.</div>
    <button id="message6-hide">Hide</button>
    <button id="message6-show">Show</button>
</div>
```

## Demo

[Demo](http://rawgit.com/jrummell/bootstrap.message/master/demo/index.html)
