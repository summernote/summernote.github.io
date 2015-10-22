---
layout: example
---

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
