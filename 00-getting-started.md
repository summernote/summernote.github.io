---
layout: page
title: Getting started
description: An overview of summernote, how to download and use, basic features and examples, and more.
permalink: /getting-started/
---
## Download

### Compiled CSS, JS

The fastest way to get Summernote is to download the precompiled and minified versions of our CSS, JavaScript. No documentation or original source code files are included.

<a href="{{ site.repository }}/releases/download/{{ site.version }}/summernote-{{ site.version }}-dist.zip" class="btn-important ">Download compiled</a>

### [Download source code]({{ site.repository }}/archive/master.zip)

Get the latest Summernote LESS and Javascript source code by downloading it directly from GitHub.

### [Clone or fork via Github]({{ site.repository }})

Visit us on GitHub to clone or fork the summernote project.

### Install with [Bower](http://bower.io)

Install and manage Summernote's styles, JavaScript, and documentation using Bower.

{% highlight bash %}
bower install summernote
{% endhighlight %}

## Installation

### Requires HTML5 doctype

Bootstrap uses certain HTML elements and CSS properties which require HTML5 doctype. Include <code>&lt;!DOCTYPE html&gt;</code> in the beginning of all your projects.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
...
</html>
{% endhighlight %}

### Include js/css

Summernote uses open source libraries(jQuery, Bootstrap, font-awesome).
Include the Following code in your HTML <code>&lt;HTML&gt;</code> tag

{% highlight html %}
<!-- include libraries(jQuery, bootstrap, fontawesome) -->
<link href="{{ site.bootstrap_css }}" rel="stylesheet">
<link href="{{ site.fontawesome_css }}" rel="stylesheet">
<script src="{{ site.jquery_js }}"></script> 
<script src="{{ site.bootstrap_js }}"></script> 

<!-- include summernote css/js-->
<link href="summernote.css" rel="stylesheet">
<script src="summernote.min.js"></script>
{% endhighlight %}

Don't forget to change the file's path if you downloaded summernote in a different folders.

### Insert

Add <code>div</code> into <code>body</code>; this targeted element will later be rendered to summernote editing tool.

{% highlight html %}
<div id="summernote">Hello Summernote</div>
{% endhighlight %}

### Run summernote
Run the script below when document is ready!

{% highlight javascript %}
$(document).ready(function() {
  $('#summernote').summernote();
});
{% endhighlight %}

## Basic API

Initialize Summernote

{% highlight javascript %}
$('#summernote').summernote();
{% endhighlight %}

Initialize Summernote with options

### Height and Focus
If you set focus option, cursor will focus editable area after initialize summernote.

{% highlight javascript %}
$('#summernote').summernote({
  height: 300,                 // set editor height
  minHeight: null,             // set minimum height of editor
  maxHeight: null,             // set maximum height of editor
  focus: true                  // set focus to editable area after initializing summernote
});
{% endhighlight %}

If you set height, you can see resizebar below.

<div class="height">blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~</div>
<script>
  $(function() {
    $('.height').summernote({height: 150});
  });
</script>

If you don't set the height, editable area's height will change according to contents.

<div class="noheight"><p>press enter key.</p></div>
<script>
  $(function() {
    $('.noheight').summernote();
  });
</script>

### Destroy

Destroy Summernote.

{% highlight javascript %}
$('#summernote').summernote('destroy');
{% endhighlight %}

### get &amp; set Code

Get the HTML contents of the first summernote in the set of matched elements.

{% highlight javascript %}
var markupStr = $('#summernote').summernote('code');
{% endhighlight %}

If you initialize multiple editor, You can get the HTML content of the second summernote with jQuery <a href="http://api.jquery.com/eq/">eq</a>.

{% highlight javascript %}
var markupStr = $('.summernote').eq(1).summernote('code');
{% endhighlight %}

A string of HTML to set as the content of each matched element.

{% highlight javascript %}
var markupStr = 'hello world';
$('#summernote').summernote('code', markupStr);
{% endhighlight %}

for more detail api: [deep dive with api](/deep-dive/#api)

## I18n support

### Language

Include libraries with lang file. eg) <code>summernote-ko-KR.js</code>

{% highlight html %}
<link href="{{ site.bootstrap_css }}" rel="stylesheet"> 
<link href="{{ site.fontawesome_css }}" rel="stylesheet">
<script src="{{ site.jquery_js }}"></script> 
<script src="{{ site.bootstrap_js }}"></script> 

<link href="summernote.css" rel="stylesheet">
<script src="summernote.min.js"></script>

<!-- include summernote-ko-KR -->
<script src="lang/summernote-ko-KR.js"></script>
{% endhighlight %}

Run the script with locale option.

{% highlight javascript %}
$(document).ready(function() {
  $('#summernote').summernote({
    lang: 'ko-KR' // default: 'en-US'
  });
});
{% endhighlight %}

<div class="lang"></div>
<script>
  $(document).ready(function() {
    $('.lang').summernote({
      lang: 'ko-KR'
    });
  });
</script>

More summernote languages: [languages]({{ site.repository }}/tree/master/lang)

## Integration
3rd parties available in django, rails, angular.

### Django-summernote
Handy update for your django admin page.

* [django-summernote](https://github.com/summernote/django-summernote)
* [Summernote plugin for Django](https://pypi.python.org/pypi/django-summernote)

### summernote-rails (gem)
This gem was built to gemify the assets used in Summernote.

* [summernote-rails](http://summernote.org/summernote-rails)
* [summernote-test for Rails v4](https://github.com/rorlab/summernote-test)
* [summernote-test-r3 for Rails v3.2.14](https://github.com/rorlab/summernote-test-r3)

### angular-summernote
AngularJS directive to Summernote.

* [angular-summernote](https://github.com/summernote/angular-summernote)
