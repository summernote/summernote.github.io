---
layout: example
---


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
