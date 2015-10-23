---
layout: example
---
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
