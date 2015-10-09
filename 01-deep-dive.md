---
layout: page
title: Deep dive
description: Customize summernote's components, toolbar, plugins to get your very own version
permalink: /deep-dive/
---

## API

You can initialize summernote with `summernote`.

{% highlight javascript %}
$('#summernote').summernote();
{% endhighlight %}

Then You can use editor API through the `summernote` method. This is an example code for inserting 'hello world' text.

{% highlight javascript %}
$('#summernote').summernote('editor.insertText', 'hello world'));
{% endhighlight %}

It calls the editor module's insertText method with 'hello world'. First argument is a string type which represents the module and its method. The rest are method's arguments.

If you call API without module name, `editor.methodName` will be called.

{% highlight javascript %}
$('#summernote').summernote('insertText', 'hello world');
{% endhighlight %}

A module named `editor` supports several methods for editor's basic behavior

### createRange

create a range object for current user selection.

{% highlight javascript %}
var range = $('#summernote').summernote('createRange');
{% endhighlight %}

### saveRange

save current user selection internally.

{% highlight javascript %}
$('#summernote').summernote('saveRange');
{% endhighlight %}

### restoreRange

restore currently saved range

{% highlight javascript %}
$('#summernote').summernote('saveRange');
// move cursor and select another
$('#summernote').summernote('restoreRange');
{% endhighlight %}

### undo, redo

Undoes and redoes the last command

{% highlight javascript %}
$('#summernote').summernote('undo');
$('#summernote').summernote('redo');
{% endhighlight %}

### focus

Set a focus in current summernote

{% highlight javascript %}
$('#summernote').summernote('focus');
{% endhighlight %}

### bold, italic, underline, strikethrough

Set font style

{% highlight javascript %}
$('#summernote').summernote('bold');
$('#summernote').summernote('italic');
$('#summernote').summernote('underline');
$('#summernote').summernote('strikethrough');
{% endhighlight %}

### superscript, subscript

Set superscript or subscript

{% highlight javascript %}
$('#summernote').summernote('superscript');
$('#summernote').summernote('subscript');
{% endhighlight %}

### justifyLeft, justifyRight, justifyCenter, justifyFull

Set paragraph align

{% highlight javascript %}
$('#summernote').summernote('justifyLeft');
$('#summernote').summernote('justifyRight');
$('#summernote').summernote('justifyCenter');
$('#summernote').summernote('justifyFull');
{% endhighlight %}

### removeFormat

Clean a style

{% highlight javascript %}
$('#summernote').summernote('removeFormat');
{% endhighlight %}

### backColor, foreColor

Set background and foreground color

{% highlight javascript %}
// @param {String} color
$('#summernote').summernote('backColor', 'red');

// @param {String} color
$('#summernote').summernote('foreColor', 'blue');
{% endhighlight %}

### fontName

Set font family

{% highlight javascript %}
// @param {String} fontName
$('#summernote').summernote('fontName', 'Arial');
{% endhighlight %}

### fontSize

Set font size

{% highlight javascript %}
// @param {Number} font size - unit is px
$('#summernote').summernote('fontSize', 20);
{% endhighlight %}

### insertParagraph

insert paragraph

{% highlight javascript %}
$('#summernote').summernote('insertParagraph');
{% endhighlight %}

### insertOrderedList

toggle ordered list

{% highlight javascript %}
$('#summernote').summernote('insertOrderedList');
{% endhighlight %}

### insertUnorderedList

toggle unordered list

{% highlight javascript %}
$('#summernote').summernote('insertUnorderedList');
{% endhighlight %}

### indent

indent on current paragraph

{% highlight javascript %}
$('#summernote').summernote('indent');
{% endhighlight %}

### outdent

outdent on current paragraph

{% highlight javascript %}
$('#summernote').summernote('outdent');
{% endhighlight %}

### insertImage

insert a image

{% highlight javascript %}
// @param {String} url
// @param {String} filename - optional
$('#summernote').summernote('insertImage', url, filename);
{% endhighlight %}

### insertNode

Insert a element or textnode

{% highlight javascript %}
var node = document.createElement('div');
// @param {Node} node
$('#summernote').summernote('insertNode', node);
{% endhighlight %}

### insertText

Insert a text

{% highlight javascript %}
// @param {String} text
$('#summernote').summernote('insertText', 'Hello, world');
{% endhighlight %}

### formatPara

Change current paragraph as a `<p>`.

{% highlight javascript %}
$('#summernote').summernote('formatPara');
{% endhighlight %}

### formatH1 ~ formatH6

Change current paragraph as a `<h1> ~ <h6>`.

{% highlight javascript %}
$('#summernote').summernote('formatH2');
$('#summernote').summernote('formatH6');
{% endhighlight %}

### lineHeight

Set line height

{% highlight javascript %}
// @param {Number} line height - unit is px
$('#summernote').summernote('lineHeight', 20);
{% endhighlight %}

### createLink, unlink

Create link and unlink

{% highlight javascript %}
// @param {String} text - link text
// @param {String} url - link url
// @param {Boolean} newWindow - whether link's target is new window or not
$('#summernote').summernote('createLink', {
  text: 'This is the Summernote's Official Site',
  url: 'http://summernote.org',
  newWindow: true
});

$('#summernote').summernote('unlink');
{% endhighlight %}

## Customizing

### Custom toolbar

Summernote allows you to make own custom toolbar.

{% highlight javascript %}
$('#summernote').summernote({
  toolbar: [
    // [groupName, [list of button]]
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
  ]
});
{% endhighlight %}

This is a toolbar with font style only.
<div class="custom-toolbar"></div>
<script>
  $(function() {
    $('.custom-toolbar').summernote({
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']]
      ]
    });
  });
</script>

You can compose a toolbar with pre-shipped buttons.

* Insert
  * `picture`: open image dialog
  * `link`: open link dialog
  * `video`: open video dialog
  * `table`: insert a table
  * `hr`: insert a horizontal rule
* Font Style
  * `fontname`: set font family
  * `fontsize`: set font size
  * `color`: set foreground and background color
  * `bold`: toggle font weight
  * `italic`: toggle italic
  * `underline`: toggle underline
  * `strikethrough`: toggle strikethrough
  * `clear`: clear font style
* Paragraph style
  * `style`: format selected block
  * `ol`: toggle ordered list
  * `ul`: toggle unordered list
  * `paragraph`: dropdown for paragraph align
  * `height`: set line height
* Misc
  * `fullscreen`: toggle fullscreen editing mode
  * `codeview`: toggle wysiwyg and html editing mode
  * `undo`: undo
  * `redo`: redo
  * `help`: open help dialog

### Custom popover for air-mode

Air-mode has its own popover, not toolbar. You can customize it with <code>popover.air</code> option.

{% highlight javascript %}
$('#summernote').summernote({
  popover: {
    air: [
      ['color', ['color']],
      ['font', ['bold', 'underline', 'clear']],
      ['para', ['ul', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture']]
    ]
  }
});
{% endhighlight %}

## callbacks
Summernote support initialize callbacks and jquery's custom event style callbacks.

> Callback only works with camel case string.
> Lowercase string has been used for basic event name(ex: `oninit`, `onenter`, `onfocus`, `onblur`, `onkeyup`, `onkeydown`, `onpaste`). In contrast, callbacks name for advanced feature has been used with camel case string. This is inconsistent and confusing to use. So we rename all lowercase callback to camel case string.
> You can use only camel case string for callback's name after `v0.6.5`.

### onInit
{% highlight javascript %}
// onInit callback
$('#summernote').summernote({
  onInit: function() {
    console.log('Summernote is launched');
  }
});

// summernote.init
$('#summernote').on('summernote.init', function() {
  console.log('Summernote is launched');
});
{% endhighlight %}

### onEnter
{% highlight javascript %}
// onEnter callback
$('#summernote').summernote({
  onEnter: function() {
    console.log('Enter/Return key pressed');
  }
});

// summernote.enter
$('#summernote').on('summernote.enter', function() {
  console.log('Enter/Return key pressed');
});
{% endhighlight %}

### onFocus
{% highlight javascript %}
// onFocus callback
$('#summernote').summernote({
  onFocus: function() {
    console.log('Editable area is focused');
  }
});

// summernote.focus
$('#summernote').on('summernote.focus', function() {
  console.log('Editable area is focused');
});
{% endhighlight %}

### onBlur
{% highlight javascript %}
// onBlur callback
$('#summernote').summernote({
  onBlur: function() {
    console.log('Editable area loses focus');
  }
});

// summernote.blur
$('#summernote').on('summernote.blur', function() {
  console.log('Editable area loses focus');
});
{% endhighlight %}

### onKeyup
{% highlight javascript %}
// onKeyup callback
$('#summernote').summernote({
  onKeyup: function(e) {
    console.log('Key is released:', e.keyCode);
  }
});

// summernote.keyup
$('#summernote').on('summernote.keyup', function(we, e) {
  console.log('Key is released:', e.keyCode);
});
{% endhighlight %}

### onKeydown
{% highlight javascript %}
// onKeydown callback
$('#summernote').summernote({
  onKeydown: function(e) {
    console.log('Key is downed:', e.keyCode);
  }
});

// summernote.keydown
$('#summernote').on('summernote.keydown', function(we, e) {
  console.log('Key is downed:', e.keyCode);
});
{% endhighlight %}

### onPaste
{% highlight javascript %}
// onPaste callback
$('#summernote').summernote({
  onPaste: function(e) {
    console.log('Called event paste');
  }
});

// summernote.paste
$('#summernote').on('summernote.keydown', function(we, e) {
  console.log('Called event paste');
});
{% endhighlight %}

### onImageUpload

Override image upload handler(default: base64 dataURL on `IMG` tag).
You can upload image to server or AWS S3: [more...]({{ site.repository }}/issues/72)

{% highlight javascript %}
// onImageUpload callback
$('#summernote').summernote({
  onImageUpload: function(files) {
    // upload image to server and create imgNode...
    $summernote.summernote('insertNode', imgNode);
  }
});

// summernote.image.upload
$('#summernote').on('summernote.image.upload', function(we, files) {
  // upload image to server and create imgNode...
  $summernote.summernote('insertNode', imgNode);
});
{% endhighlight %}

### onChange

* IE9-10: DOMCharacterDataModified, DOMSubtreeModified, DOMNodeInserted
* Chrome, FF: input

{% highlight javascript %}
// onChange callback
$('#summernote').summernote({
  onChange: function(contents, $editable) {
    console.log('onChange:', contents, $editable);
  }
});

// summernote.change
$('#summernote').on('summernote.change', function(we, contents, $editable) {
  console.log('summernote\'s content is changed.');
});
{% endhighlight %}
