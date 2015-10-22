---
layout: example
---

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