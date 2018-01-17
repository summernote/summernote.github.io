---
layout: doc
bodyClass: doc
title: Getting started
description: An overview of Summernote, how to download and use, basic features, examples, and more.
permalink: /getting-started/
menu: true
---

## Get Summernote

### Compiled CSS, JS

The fastest way to get Summernote is to download the precompiled and minified versions of our CSS and JavaScript. No documentation or original source code files are included.

<a href="{{ site.repository }}/releases/download/v{{ site.version }}/summernote-{{ site.version }}-dist.zip" class="btn-important ">Download compiled</a>

### Download source code
Get the latest Summernote LESS and Javascript source code by downloading it directly from GitHub.
[Download]({{ site.repository }}/archive/master.zip)

### Clone or Fork via Github
Visit us on GitHub to clone or fork the Summernote project.
[project]({{ site.repository }})

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

Summernote uses the Open Source libraries jQuery and Bootstrap, if you are using the Boostrap 3 or 4 versions of Summernote, or just jQuery if you use the Lite version of Summernote.
Include the Following code in the <code>head</code> area of your HTML page.

{% highlight html %}
<!-- include libraries(jQuery, bootstrap) -->
<link href="{{ site.bootstrap_css }}" rel="stylesheet">
<script src="{{ site.jquery_js }}"></script> 
<script src="{{ site.bootstrap_js }}"></script> 

<!-- include summernote css/js -->
<link href="{{ site.summernote_css }}" rel="stylesheet">
<script src="{{ site.summernote_js }}"></script>
{% endhighlight %}

Don't forget to change the file's path if you downloaded summernote in a different folders.

You can however, and a lot of developers do these days, is include the stylesheet's within the <code>head</code> are of your page, and include the Javascript at the bottom of your page, but before the closing <code>body</code> tag.

> ##### Fontawesome dependancy
> After v0.8.0, You don't have to include fontawesome for displaying Summernote's icons. But You can still use fontawesome for your custom icons. For more details, please visit [custom buttons](/deep-dive/#custom-button) section.

### Embed

Summernote can be used with or without a <code>form</code>.

To use without a <code>form</code>, we suggest using a <code>div</code> in the <code>body</code>; this element will then be used where you want the Summernote editor to be rendered within your page.

{% highlight html %}
<div id="summernote">Hello Summernote</div>
{% endhighlight %}

To use within a <code>form</code>, is pretty much the same as above, but rather than a <code>div</code>, we recommend using a <code>textarea</code> element inside a <code>form</code>, which should include a name attribute so when the form is submitted you can use that name to process the editors data on your backend. Also, if using Summernote inside a <code>form</code> to set the attribute <code>method="post"</code> to allow larger sized editor content to parse to the backend, if you don't your data either may not parse, or will be truncated.

{% highlight html %}
<form method="post">
  <textarea id="summernote" name="editordata"></textarea>
</form>
{% endhighlight %}

### Run summernote
Run the script below when document is ready!

{% highlight javascript %}
$(document).ready(function() {
  $('#summernote').summernote();
});
{% endhighlight %}

The <code>$(document).ready</code> function is particularly necessary if you include the Javascript at the end of the document.

### Simple example

You can also test running example. Save below code as `index.html` and open it with your browser.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Summernote</title>
  <link href="{{ site.bootstrap_css }}" rel="stylesheet">
  <script src="{{ site.jquery_js }}"></script> 
  <script src="{{ site.bootstrap_js }}"></script> 
  <link href="{{ site.summernote_css }}" rel="stylesheet">
  <script src="{{ site.summernote_js }}"></script>
</head>
<body>
  <div id="summernote"><p>Hello Summernote</p></div>
  <script>
    $(document).ready(function() {
        $('#summernote').summernote();
    });
  </script>
</body>
</html>
{% endhighlight %}

{% include ad-doc.html %}

### For bootstrap 4

You can also use Summernote with Bootstrap 4 using `summernote-bs4.js` and `summernote-bs4.css`. This is also beta version, as Bootstrap 4 is in beta. Below is a code example using bootstrap 4.

<iframe src="/bs4.html" width="100%" height="200" frameborder="0"></iframe>

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>bootstrap4</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
  </head>
  <body>
    <div id="summernote"></div>
    <script>
      $('#summernote').summernote({
        placeholder: 'Hello bootstrap 4',
        tabsize: 2,
        height: 100
      });
    </script>
  </body>
</html>
{% endhighlight %}

### Without Bootstrap

You can use Summernote without Bootstrap using `summernote-lite.js` and `summernote-lite.css`. The Lite version is currently in Beta. Please report bugs so we can improve it. Below is a code example using summernote lite.

<iframe src="/lite.html" width="100%" height="200" frameborder="0"></iframe>

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>bootstrap4</title>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-lite.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-lite.js"></script>
  </head>
  <body>
    <div id="summernote"></div>
    <script>
      $('#summernote').summernote({
        placeholder: 'Hello stand alone ui',
        tabsize: 2,
        height: 100
      });
    </script>
  </body>
</html>
{% endhighlight %}

## Basic API

Initialize Summernote

{% highlight javascript %}
$('#summernote').summernote();
{% endhighlight %}

Initialize Summernote with options

### Height and Focus
If you set focus option, cursor will focus editable area after initialize Summernote.

{% highlight javascript %}
$('#summernote').summernote({
  height: 300,                 // set editor height
  minHeight: null,             // set minimum height of editor
  maxHeight: null,             // set maximum height of editor
  focus: true                  // set focus to editable area after initializing summernote
});
{% endhighlight %}

If you set height, you can see resizebar below.

<div class="height"><p>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~<br/>blah blah~</p></div>
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

> ##### destroy and code
> After v0.7.0, direct jquery methods, `destroy` and `code` were removed for avoiding conflict with other jquery libraries. You can call this methods with summernote api.

{% include ad-doc.html %}

## i18n support

### Language

Include libraries with lang file. eg) <code>summernote-ko-KR.js</code>.

{% highlight html %}
<link href="{{ site.bootstrap_css }}" rel="stylesheet"> 
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
      lang: 'ko-KR',
      placeholder: 'move your mouse on toolbar...'
    });
  });
</script>

More Summernote languages: [languages]({{ site.repository }}/tree/master/lang)

## Integration
3rd parties available in django, rails, angular and so on.

### Django
Handy update for your django admin page.

* [django-summernote](https://github.com/summernote/django-summernote){:target="_blank"}
* [summernote plugin for Django](https://pypi.python.org/pypi/django-summernote){:target="_blank"}

### Ruby On Rails
This gem was built to gemify the assets used in Summernote.

* [summernote-rails](https://github.com/summernote/summernote-rails){:target="_blank"}
* [how to use summernote on rails](https://www.youtube.com/watch?v=A3vDRdfEyKs&feature=youtu.be&t=75){:target="_blank"}

### AngularJS
AngularJS directive to Summernote.

* [angular-summernote](https://github.com/summernote/angular-summernote)

### Apache Wicket
Summernote widget for Wicket Bootstrap.

* [demo](http://wb-mgrigorov.rhcloud.com/summernote){:target="_blank"}
* [source code](https://github.com/l0rdn1kk0n/wicket-bootstrap/tree/4f97ca783f7279ca43f9e2ee790703161f59fa40/bootstrap-extensions/src/main/java/de/agilecoders/wicket/extensions/markup/html/bootstrap/editor){:target="_blank"}

### Webpack
Example about using summernote with webpack.

* [summernote-webpack-example](https://github.com/hackerwins/summernote-webpack-example){:target="_blank"}

### Meteor
Example about using summernote with meteor.

* [summernote-meteor-example](https://github.com/hackerwins/summernote-meteor-example){:target="_blank"}

### PHP
Example for using Summernote with elFinder which uses a PHP Backend.

* [summernote-elfinder-example](https://github.com/Studio-42/elFinder/wiki/Integration-with-Multiple-Summernote-%28fixed-functions%29){:target="_blank"}
