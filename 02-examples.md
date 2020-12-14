---
layout: doc
bodyClass: doc
title: Examples
description: See all useful features of summernote in action.
permalink: /examples/
menu: true
---

## Air-mode
Air-mode give an interface without the Toolbar. To reveal popover Toolbar, select a text where you want to modify. Simply turn on `airMode` and just focus on text.

{% highlight javascript %}
$('.summernote').summernote({
  airMode: true
});
{% endhighlight %}

### Example

<div class="airmode">
  <p>This is an Air-mode editable area.</p>
  <ul>
    <li>Select a text to reveal the toolbar.</li>
    <li>Edit rich document on-the-fly, so elastic!</li>
  </ul>
  <p>End of air-mode area</p>
</div>
<script>
  $(function() {
    $('.airmode').summernote({
      height: 300,
      airMode: true
    });
  });
</script>

## Themes with bootswatch
Styles change according to Bootstraps Theme.
The editor below editor uses the Bootswatch Themes based on Bootstrap 3, you can also do the same with Bootstrap 4: [Bootswatch](http://bootswatch.com){:target="_blank"}

<iframe src="/themes.html" width="100%" height="300" frameborder="0"></iframe>

If you wish to use the Lite version of Summernote and change it's theme, you can look at or use the Themes at [summernote-themes](https://github.com/DiemenDesign/summernote-themes).

{% include ad-doc.html %}

## Multiple Editor
To display multiple editors on a page, you need to place more than two `<div>` elements in HTML.

{% highlight html %}
<div class="summernote">summernote 1</div>
<div class="summernote">summernote 2</div>
{% endhighlight %}

Then run summernote with jQuery selector.

{% highlight javascript %}
$(document).ready(function() {
  $('.summernote').summernote();
});
{% endhighlight %}

<div class="multiple"><p>summernote 1</p></div>
<div class="multiple"><p>summernote 2</p></div>
<script>
  $(function() {
    $('.multiple').summernote();
  });
</script>

## Click to edit
You can edit content on the fly.

html:

{% highlight html %}
<button id="edit" class="btn btn-primary" onclick="edit()" type="button">Edit 1</button>
<button id="save" class="btn btn-primary" onclick="save()" type="button">Save 2</button>
<div class="click2edit">click2edit</div>
{% endhighlight %}

Javascript:

{% highlight javascript %}
var edit = function() {
  $('.click2edit').summernote({focus: true});
};

var save = function() {
  var markup = $('.click2edit').summernote('code');
  $('.click2edit').summernote('destroy');
};
{% endhighlight %}

<p>
  <button id="edit" class="btn btn-primary" onclick="edit()">Edit</button>
  <button id="save" class="btn btn-primary" onclick="save()">Save</button>
</p>
<div class="click2edit"><p>Hello world~!</p></div>
<script>
  var edit = function() {
    $('.click2edit').summernote({focus: true});
  };
  var save = function() {
    $('.click2edit').summernote('destroy');
  };
</script>

## Codemirror as codeview
If you include a `CodeMirror` on a page, you can use CodeMirror to Codeview. Include jQuery, Bootstrap and CodeMirror with Summernote.

{% highlight html %}
<!-- include libraries(jQuery, bootstrap) -->
<link href="{{ site.bootstrap_css }}" rel="stylesheet"> 
<script src="{{ site.jquery_js }}"></script> 
<script src="{{ site.bootstrap_js }}"></script> 

<!-- include codemirror (codemirror.css, codemirror.js, xml.js, formatting.js) -->
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.css">
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/theme/monokai.css">
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/xml/xml.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/formatting.js"></script>

<!-- include summernote css/js-->
<link href="summernote.css">
<script src="summernote.js"></script>
{% endhighlight %}

Initialize Summernote with codemirror options

{% highlight javascript %}
$('.summernote').summernote({
  height: 150,   //set editable area's height
  codemirror: { // codemirror options
    theme: 'monokai'
  }
});
{% endhighlight %}

<textarea class="codemirror"><p>Click <b>Code View</b>!!!</p></textarea>
<script>
  $(function() {
    $('.codemirror').summernote({
      height: 150,
      codemirror: { // codemirror options
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true,
        theme: 'monokai'
      }
    });
  });
</script>

[CodeMirror](http://codemirror.net){:target="_blank"} is a versatile text editor implemented in JavaScript for the browser. It is specialized for editing code, and comes with a number of language modes and addons that implement more advanced editing functions.

## Custom SVG icons
This example shows how to e.g. override the default summernote icons with the free svg versions of [FontAwesome](https://fontawesome.com/){:target="_blank"}.

{% highlight javascript %}
$('.summernote').summernote({
  height: 150,   //set editable area's height
  icons: {
    align: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"align-left\" class=\"svg-inline--fa fa-align-left fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z\"></path></svg>",
    alignCenter: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"align-center\" class=\"svg-inline--fa fa-align-center fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96zm231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z\"></path></svg>",
    alignJustify: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"align-justify\" class=\"svg-inline--fa fa-align-justify fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"></path></svg>",
    alignLeft: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"align-left\" class=\"svg-inline--fa fa-align-left fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z\"></path></svg>",
    alignRight: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"align-right\" class=\"svg-inline--fa fa-align-right fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z\"></path></svg>",
    indent: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"indent\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-indent fa-w-14\"><path fill=\"currentColor\" d=\"M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\" class=\"\"></path></svg>",
    outdent: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"outdent\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-outdent fa-w-14\"><path fill=\"currentColor\" d=\"M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 0 0 0 22.62zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\" class=\"\"></path></svg>",
    arrowsAlt: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"arrows-alt\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-arrows-alt fa-w-16\"><path fill=\"currentColor\" d=\"M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z\" class=\"\"></path></svg>",
    bold: "<svg class=\"svg-inline--fa fa-bold fa-w-12\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"bold\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"currentColor\" d=\"M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z\"></path></svg>",
    caret: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"caret-down\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"svg-inline--fa fa-caret-down fa-w-10\"><path fill=\"currentColor\" d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\" class=\"\"></path></svg>",
    circle: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-circle fa-w-16\"><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z\" class=\"\"></path></svg>",
    close: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 352 512\" class=\"svg-inline--fa fa-times fa-w-11\"><path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\" class=\"\"></path></svg>",
    code: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"code\" class=\"svg-inline--fa fa-code fa-w-20\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path fill=\"currentColor\" d=\"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z\"></path></svg>",
    eraser: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"eraser\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-eraser fa-w-16\"><path fill=\"currentColor\" d=\"M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z\" class=\"\"></path></svg>",
    font: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"font\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-font fa-w-14\"><path fill=\"currentColor\" d=\"M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z\" class=\"\"></path></svg>",
    italic: "<svg class=\"svg-inline--fa fa-italic fa-w-10\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"italic\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path fill=\"currentColor\" d=\"M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z\"></path></svg>",
    link: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"link\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-link fa-w-16\"><path fill=\"currentColor\" d=\"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z\" class=\"\"></path></svg>",
    unlink: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"unlink\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-unlink fa-w-16\"><path fill=\"currentColor\" d=\"M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z\" class=\"\"></path></svg>",
    magic: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"magic\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-magic fa-w-16\"><path fill=\"currentColor\" d=\"M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z\" class=\"\"></path></svg>",
    menuCheck: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-check fa-w-16\"><path fill=\"currentColor\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\" class=\"\"></path></svg>",
    minus: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"minus\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-minus fa-w-14\"><path fill=\"currentColor\" d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" class=\"\"></path></svg>",
    orderedlist: "<svg class=\"svg-inline--fa fa-list-ol fa-w-16\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"list-ol\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z\"></path></svg>",
    pencil: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"pencil\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-pencil fa-w-16\"><path fill=\"currentColor\" d=\"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z\" class=\"\"></path></svg>",
    picture: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"image\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-image fa-w-16\"><path fill=\"currentColor\" d=\"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z\" class=\"\"></path></svg>",
    question: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"question\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\" class=\"svg-inline--fa fa-question fa-w-12\"><path fill=\"currentColor\" d=\"M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z\" class=\"\"></path></svg>",
    redo: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"redo\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-redo fa-w-16\"><path fill=\"currentColor\" d=\"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z\" class=\"\"></path></svg>",
    square: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-square fa-w-14\"><path fill=\"currentColor\" d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z\" class=\"\"></path></svg>",
    strikethrough: "<svg class=\"svg-inline--fa fa-strikethrough fa-w-16\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"strikethrough\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z\"></path></svg>",
    subscript: "<svg class=\"svg-inline--fa fa-subscript fa-w-16\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"subscript\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M496 448h-16V304a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 400 352h16v96h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM336 64h-67a16 16 0 0 0-13.14 6.87l-79.9 115-79.9-115A16 16 0 0 0 83 64H16A16 16 0 0 0 0 80v48a16 16 0 0 0 16 16h33.48l77.81 112-77.81 112H16a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h67a16 16 0 0 0 13.14-6.87l79.9-115 79.9 115A16 16 0 0 0 269 448h67a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-33.48l-77.81-112 77.81-112H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z\"></path></svg>",
    superscript: "<svg class=\"svg-inline--fa fa-superscript fa-w-16\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"superscript\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M496 160h-16V16a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 400 64h16v96h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM336 64h-67a16 16 0 0 0-13.14 6.87l-79.9 115-79.9-115A16 16 0 0 0 83 64H16A16 16 0 0 0 0 80v48a16 16 0 0 0 16 16h33.48l77.81 112-77.81 112H16a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h67a16 16 0 0 0 13.14-6.87l79.9-115 79.9 115A16 16 0 0 0 269 448h67a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-33.48l-77.81-112 77.81-112H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z\"></path></svg>",
    table: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"table\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-table fa-w-16\"><path fill=\"currentColor\" d=\"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z\" class=\"\"></path></svg>",
    textHeight: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"text-height\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" class=\"svg-inline--fa fa-text-height fa-w-18\"><path fill=\"currentColor\" d=\"M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z\" class=\"\"></path></svg>",
    trash: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"trash-alt\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-trash-alt fa-w-14\"><path fill=\"currentColor\" d=\"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\" class=\"\"></path></svg>",
    underline: "<svg class=\"svg-inline--fa fa-underline fa-w-14\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"underline\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z\"></path></svg>",
    undo: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"undo\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-undo fa-w-16\"><path fill=\"currentColor\" d=\"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z\" class=\"\"></path></svg>",
    unorderedlist: "<svg class=\"svg-inline--fa fa-list-ul fa-w-16\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"list-ul\" data-fa-i2svg=\"\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z\"></path></svg>",
    video: "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"film\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-film fa-w-16\"><path fill=\"currentColor\" d=\"M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z\" class=\"\"></path></svg>"
  }
});
{% endhighlight %}

{% include ad-doc.html %}

## Hint 
Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint options can be an object or array for multiple hints.
<table class="table"> 
<colgroup>
  <col />
  <col width="200px;" />
</colgroup>
<thead>
  <tr>
    <th>Key</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>match</td>
    <td>RegExp <code>required</code></td>
    <td>Regular expression for checking trigger pattern.</td>
  </tr>
  <tr>
    <td>search</td>
    <td>Function <code>required</code></td>
    <td>Handler for matched keyword. You can passed suggestion items with callback. First argument is keyword and second is callback.</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Function <code>optional</code></td>
    <td>Item template on suggestion popover. This function get item as argument and should return String type.</td>
  </tr>      
  <tr>
    <td>content</td>
    <td>Function <code>optional</code></td>
    <td>Template function for insertion. You can switch item with node for insertion with this function. This function get item as first argument and should return Element or String.</td>
  </tr>      
</tbody>
</table>

### Hint for words
<div class="hint2basic"></div>
<script type="text/javascript">
$(".hint2basic").summernote({
  height: 100,
  toolbar: false,
  placeholder: 'type with apple, orange, watermelon, lemon',
  hint: {
    words: ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\b(\w{1,})$/,
    search: function (keyword, callback) {
      callback($.grep(this.words, function (item) {
        return item.indexOf(keyword) === 0;
      }));
    }
  }
});
</script>

{% highlight javascript %}
$(".hint2basic").summernote({
  height: 100,
  toolbar: false,
  placeholder: 'type with apple, orange, watermelon and lemon',
  hint: {
    words: ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\b(\w{1,})$/,
    search: function (keyword, callback) {
      callback($.grep(this.words, function (item) {
        return item.indexOf(keyword) === 0;
      }));
    }
  }
});
{% endhighlight %}

### Hint for emoji
For Emoji's you can use `https://api.github.com/emojis`

<div class="hint2emoji"></div>
<script type="text/javascript">
$.ajax({
  url: 'https://api.github.com/emojis'
}).then(function(data) {
  window.emojis = Object.keys(data);
  window.emojiUrls = data; 
});

$(".hint2emoji").summernote({
  height: 100,
  toolbar: false,
  placeholder: 'type starting with : and any alphabet',
  hint: {
    match: /\B:([\-+\w]+)$/,
    search: function (keyword, callback) {
      callback($.grep(emojis, function (item) {
        return item.indexOf(keyword)  === 0;
      }));
    },
    template: function (item) {
      var content = emojiUrls[item];
      return '<img src="' + content + '" width="20" /> :' + item + ':';
    },
    content: function (item) {
      var url = emojiUrls[item];
      if (url) {
        return $('<img />').attr('src', url).css('width', 20)[0];
      }
      return '';
    }
  }
});
</script>
{% highlight javascript %}

$.ajax({
  url: 'https://api.github.com/emojis',
  async: false 
}).then(function(data) {
  window.emojis = Object.keys(data);
  window.emojiUrls = data; 
});;

$(".hint2emoji").summernote({
  height: 100,
  toolbar: false,
  placeholder: 'type starting with : and any alphabet',
  hint: {
    match: /:([\-+\w]+)$/,
    search: function (keyword, callback) {
      callback($.grep(emojis, function (item) {
        return item.indexOf(keyword)  === 0;
      }));
    },
    template: function (item) {
      var content = emojiUrls[item];
      return '<img src="' + content + '" width="20" /> :' + item + ':';
    },
    content: function (item) {
      var url = emojiUrls[item];
      if (url) {
        return $('<img />').attr('src', url).css('width', 20)[0];
      }
      return '';
    }
  }
});
{% endhighlight %}

### Hint for mentions
For Mentions: [jayden, sam, alvin, david] 

<div class="hint2mention"></div>
<script type="text/javascript">
$(".hint2mention").summernote({
  height: 100,
  toolbar: false,
  placeholder: 'type starting with @',
  hint: {
    mentions: ['jayden', 'sam', 'alvin', 'david'],
    match: /@(\w*)$/,
    search: function (keyword, callback) {
      callback($.grep(this.mentions, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    },
    content: function (item) {
      return '@' + item;
    }    
  }
});
</script>
{% highlight javascript %}
$(".hint2mention").summernote({
  height: 100,
  toolbar: false,
  hint: {
    mentions: ['jayden', 'sam', 'alvin', 'david'],
    match: /\B@(\w*)$/,
    search: function (keyword, callback) {
      callback($.grep(this.mentions, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    },
    content: function (item) {
      return '@' + item;
    }    
  }
});
{% endhighlight %}
