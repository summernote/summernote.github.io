---
layout: doc
title: Examples
description: See all useful features of summernote in action.
permalink: /examples/
---

<script>
location.href = '/examples/basic.html';
</script>

## Themes with booswatch
Style changed accroding to bootstrap theme.
More bootstrap theme: [Bootswatch](http://bootswatch.com)

<div class="well" style="background-color:white;">
  <iframe src="/themes.html" width="100%" height="300" frameborder="0"></iframe>
</div>

## Air-mode
Air-mode gives clearer interface with hiddened toolbar. To reveal toolbar, select a text where you want to shape up. Simply turn on `airMode` and just focus on text.

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

## Codemirror as codeview

If you include a `CodeMirror` on a page, you can use CodeMirror to Codeview. Include jQuery, Bootstrap, font-awesome and CodeMirror with summernote.

{% highlight html %}
<!-- include libraries(jQuery, bootstrap, fontawesome) -->
<link href="{{ site.bootstrap_css }}" rel="stylesheet"> 
<link href="{{ site.fontawesome_css }}" rel="stylesheet">
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

<textarea class="codemirror">Click <b>Code View</b>!!!</textarea>
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

[CodeMirror](http://codemirror.net) is a versatile text editor implemented in JavaScript for the browser. It is specialized for editing code, and comes with a number of language modes and addons that implement more advanced editing functionaly.

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

<div class="multiple">summernote 1</div>
<div class="multiple">summernote 2</div>
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
  var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
  $('.click2edit').summernote('destroy');
};
{% endhighlight %}

<p>
  <button id="edit" class="btn btn-primary" onclick="edit()">Edit</button>
  <button id="save" class="btn btn-primary" onclick="save()">Save</button>
</p>
<div class="click2edit">Hello world~!</div>
<script>
  var edit = function() {
    $('.click2edit').summernote({focus: true});
  };
  var save = function() {
    $('.click2edit').summernote('destroy');
  };
</script>
