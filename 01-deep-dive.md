---
layout: doc
bodyClass: doc
title: Deep dive
description: Customize Summernote's modules, toolbar and plugins to get your very own version
permalink: /deep-dive/
menu: true
---

## Initialization options

Customize by Initializing various options and modules.

### Custom toolbar, popover

Summernote allows you to customise the toolbar.

{% highlight javascript %}
$('#summernote').summernote({
  toolbar: [
    // [groupName, [list of button]]
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']]
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
      ],
      placeholder: 'Toolbar for font style...'
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
  * `forecolor`: set foreground color
  * `backcolor`: set background color
  * `bold`: toggle font weight
  * `italic`: toggle italic
  * `underline`: toggle underline
  * `strikethrough`: toggle strikethrough
  * `superscript`: toggle superscript
  * `subscript`: toggle subscript
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

Air-mode has its own popover, not toolbar. You can customize it with <code>popover.air</code> option.

{% highlight javascript %}
$('#summernote').summernote({
  popover: {
    air: [
      ['color', ['color']],
      ['font', ['bold', 'underline', 'clear']]
    ]
  }
});
{% endhighlight %}

You can also setup buttons of the other popovers in the same way. The below settings are default options for popovers.

{% highlight javascript %}
popover: {
  image: [
    ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
    ['float', ['floatLeft', 'floatRight', 'floatNone']],
    ['remove', ['removeMedia']]
  ],
  link: [
    ['link', ['linkDialogShow', 'unlink']]
  ],
  air: [
    ['color', ['color']],
    ['font', ['bold', 'underline', 'clear']],
    ['para', ['ul', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture']]
  ]
}
{% endhighlight %}

### Custom placeholder
You can define a placeholder with the `placeholder` option.

{% highlight javascript %}
$('#summernote').summernote({
  placeholder: 'write here...'
});
{% endhighlight %}

### Custom fontNames
You can define fontNames items with the `fontNames` option.

{% highlight javascript %}
$('#summernote').summernote({
  fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']
});
{% endhighlight %}

Summernote tests for fonts in fontNames before adding them to dropdown. This is a problem while using web fonts. It's not easy picking a nice time to check the availability of web fonts. You can define a list of web fonts to be ignored with the `fontNamesIgnoreCheck`.

{% highlight javascript %}
$('#summernote').summernote({
  fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Merriweather'],
  fontNamesIgnoreCheck: ['Merriweather']
});
{% endhighlight %}

### Dialogs
Dialogs can be placed in `body`, not within Summernote. If you're using Summernote within a modal dialog, please set this option as `true`.
{% highlight javascript %}
$('#summernote').summernote({
  dialogsInBody: true
});
{% endhighlight %}

By default, dialogs are shown and hidden without a fading effect. But you can turn it on by `dialogsFade`.

{% highlight javascript %}
$('#summernote').summernote({
  dialogsFade: true  // Add fade effect on dialogs
});
{% endhighlight %}

### Disable drag and drop
You can disable drag and drop with the `disableDragAndDrop` option.
{% highlight javascript %}
$('#summernote').summernote({
  disableDragAndDrop: true
});
{% endhighlight %}

### Disable shortcuts
You can disable custom shortcuts with the `shortcuts` option.
{% highlight javascript %}
$('#summernote').summernote({
  shortcuts: false
});
{% endhighlight %}

{% include ad-doc.html %}

## Basic API
You can initialize Summernote with `summernote`.

{% highlight javascript %}
$('#summernote').summernote();
{% endhighlight %}

Then You can use the editor API through the `summernote` method. This is an example code for inserting 'hello world' text.

{% highlight javascript %}
$('#summernote').summernote('editor.insertText', 'hello world'));
{% endhighlight %}

It calls the editor module's insertText method with 'hello world'. The first argument is a string type which represents the module and its method. The rest are method's arguments.

If you call the API without module name, `editor.methodName` will be called.

{% highlight javascript %}
$('#summernote').summernote('insertText', 'hello world');
{% endhighlight %}

A module named `editor` supports several methods for editor's basic behavior

### createRange
Creates a range object for current user selection.

{% highlight javascript %}
var range = $('#summernote').summernote('createRange');
{% endhighlight %}

### saveRange, restoreRange
`saveRange` saves current user selection internally.

{% highlight javascript %}
$('#summernote').summernote('saveRange');
{% endhighlight %}

`restoreRange` restores currently saved range

{% highlight javascript %}
$('#summernote').summernote('saveRange');
// move cursor and select another
$('#summernote').summernote('restoreRange');
{% endhighlight %}

### undo, redo
Undoes and Redoes the last command

{% highlight javascript %}
$('#summernote').summernote('undo');
$('#summernote').summernote('redo');
{% endhighlight %}

### focus
Sets focus in current summernote

{% highlight javascript %}
$('#summernote').summernote('focus');
{% endhighlight %}

### isEmpty
Returns whether editor content is empty or not.

The editing area needs `<p><br></p>` for focus, even if the editor content is empty. So Summernote supports this method for helping to check if editor content is empty.

{% highlight javascript %}
if ($('#summernote').summernote('isEmpty')) {
  alert('editor content is empty');
}
{% endhighlight %}

### reset
Clear the editor content and remove all stored history.

{% highlight javascript %}
$('#summernote').summernote('reset');
{% endhighlight %}

### disable, enable
You can disable editor by API.

{% highlight javascript %}
$('#summernote').summernote('disable');
{% endhighlight %}

If you want to enable editor again, call API with `enable`.

{% highlight javascript %}
$('#summernote').summernote('enable');
{% endhighlight %}

## Font style API

### bold, italic, underline, strikethrough
Set font style.

{% highlight javascript %}
$('#summernote').summernote('bold');
$('#summernote').summernote('italic');
$('#summernote').summernote('underline');
$('#summernote').summernote('strikethrough');
{% endhighlight %}

### superscript, subscript
Set superscript or subscript.

{% highlight javascript %}
$('#summernote').summernote('superscript');
$('#summernote').summernote('subscript');
{% endhighlight %}

### removeFormat
Clean a style.

{% highlight javascript %}
$('#summernote').summernote('removeFormat');
{% endhighlight %}

### backColor, foreColor
Set the Background or Foreground color.

{% highlight javascript %}
// @param {String} color
$('#summernote').summernote('backColor', 'red');

// @param {String} color
$('#summernote').summernote('foreColor', 'blue');
{% endhighlight %}

### fontName
Set font family.

{% highlight javascript %}
// @param {String} fontName
$('#summernote').summernote('fontName', 'Arial');
{% endhighlight %}

### fontSize
Set font size.

{% highlight javascript %}
// @param {Number} font size - unit is px
$('#summernote').summernote('fontSize', 20);
{% endhighlight %}

## Paragraph API

### justify left, right and more
Set the alignment of a Paragraph.

{% highlight javascript %}
$('#summernote').summernote('justifyLeft');
$('#summernote').summernote('justifyRight');
$('#summernote').summernote('justifyCenter');
$('#summernote').summernote('justifyFull');
{% endhighlight %}

### insertParagraph
Insert a paragraph

{% highlight javascript %}
$('#summernote').summernote('insertParagraph');
{% endhighlight %}

### insertOrderedList
Toggle ordered list or unordered list

{% highlight javascript %}
$('#summernote').summernote('insertOrderedList');
{% endhighlight %}

{% highlight javascript %}
$('#summernote').summernote('insertUnorderedList');
{% endhighlight %}

### indent and outdent
Indent or Outdent on current paragraph.

{% highlight javascript %}
$('#summernote').summernote('indent');
$('#summernote').summernote('outdent');
{% endhighlight %}

### formatPara
Change current paragraph as a `<p>`.

{% highlight javascript %}
$('#summernote').summernote('formatPara');
{% endhighlight %}

### formatH1-H6
Change current paragraph as a `<h1> ~ <h6>`.

{% highlight javascript %}
$('#summernote').summernote('formatH2');
$('#summernote').summernote('formatH6');
{% endhighlight %}

### lineHeight
Set line height.

{% highlight javascript %}
// @param {Number} line height - unit is px
$('#summernote').summernote('lineHeight', 20);
{% endhighlight %}

## Insertion API

### insertImage
Insert an image.

{% highlight javascript %}
// @param {String} url
// @param {String|Function} filename - optional
$('#summernote').summernote('insertImage', url, filename);
{% endhighlight %}

You can modify image with passing callback as second argument.
{% highlight javascript %}
$('#summernote').summernote('insertImage', url, function ($image) {
  $image.css('width', $image.width() / 3);
  $image.attr('data-filename', 'retriever');
});
{% endhighlight %}

### insertNode
Insert an element or textnode.

{% highlight javascript %}
var node = document.createElement('div');
// @param {Node} node
$('#summernote').summernote('insertNode', node);
{% endhighlight %}

### insertText
Insert text.

{% highlight javascript %}
// @param {String} text
$('#summernote').summernote('insertText', 'Hello, world');
{% endhighlight %}

### createLink, unlink
Create link and unlink.

{% highlight javascript %}
// @param {String} text - link text
// @param {String} url - link url
// @param {Boolean} isNewWindow - whether link's target is new window or not
$('#summernote').summernote('createLink', {
  text: "This is the Summernote's Official Site",
  url: 'http://summernote.org',
  isNewWindow: true
});

$('#summernote').summernote('unlink');
{% endhighlight %}

{% include ad-doc.html %}

## Callbacks
Summernote support initialize callbacks and jquery's custom event style callbacks.

> ##### Position of callbacks in options is changed after v0.7.0
> After v0.7.0, every callbacks should be wrapped by `callbacks` object.

> ##### Callback only works with camel case string after v0.6.5
> Lowercase string has been used for basic event name(ex: `oninit`, `onenter`, `onfocus`, `onblur`, `onkeyup`, `onkeydown`, `onpaste`). In contrast, callbacks name for advanced feature has been used with camel case string. This is inconsistent and confusing to use. So we rename all lowercase callback to camel case string.

### onInit
{% highlight javascript %}
// onInit callback
$('#summernote').summernote({
  callbacks: {
    onInit: function() {
      console.log('Summernote is launched');
    }
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
  callbacks: {
    onEnter: function() {
      console.log('Enter/Return key pressed');
    }
  }
});

// summernote.enter
$('#summernote').on('summernote.enter', function() {
  console.log('Enter/Return key pressed');
});
{% endhighlight %}

### onFocus, onBlur, onBlurCodeview
{% highlight javascript %}
// onFocus callback
$('#summernote').summernote({
  callbacks: {
    onFocus: function() {
      console.log('Editable area is focused');
    }
  }
});

// summernote.focus
$('#summernote').on('summernote.focus', function() {
  console.log('Editable area is focused');
});
{% endhighlight %}

{% highlight javascript %}
// onBlur callback
$('#summernote').summernote({
  callbacks: {
    onBlur: function() {
      console.log('Editable area loses focus');
    }
  }
});

// summernote.blur
$('#summernote').on('summernote.blur', function() {
  console.log('Editable area loses focus');
});
{% endhighlight %}

{% highlight javascript %}
// onBlurCodeview callback
$('#summernote').summernote({
  callbacks: {
    onBlurCodeview: function() {
      console.log('Codeview area loses focus');
    }
  }
});

// summernote.blur.codeview
$('#summernote').on('summernote.blur.codeview', function() {
  console.log('Codeview area loses focus');
});
{% endhighlight %}

### onKeyup, onKeydown
{% highlight javascript %}
// onKeyup callback
$('#summernote').summernote({
  callbacks: {
    onKeyup: function(e) {
      console.log('Key is released:', e.keyCode);
    }
  }
});

// summernote.keyup
$('#summernote').on('summernote.keyup', function(we, e) {
  console.log('Key is released:', e.keyCode);
});
{% endhighlight %}

{% highlight javascript %}
// onKeydown callback
$('#summernote').summernote({
  callbacks: {
    onKeydown: function(e) {
      console.log('Key is downed:', e.keyCode);
    }
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
  callbacks: {
    onPaste: function(e) {
      console.log('Called event paste');
    }
  }
});

// summernote.paste
$('#summernote').on('summernote.paste', function(e) {
  console.log('Called event paste');
});
{% endhighlight %}

### onImageUpload
Override image upload handler(default: base64 dataURL on `IMG` tag).
You can upload image to server or AWS S3: [more...]({{ site.repository }}/issues/72)

{% highlight javascript %}
// onImageUpload callback
$('#summernote').summernote({
  callbacks: {
    onImageUpload: function(files) {
      // upload image to server and create imgNode...
      $summernote.summernote('insertNode', imgNode);
    }
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
  callbacks: {
    onChange: function(contents, $editable) {
      console.log('onChange:', contents, $editable);
    }
  }
});

// summernote.change
$('#summernote').on('summernote.change', function(we, contents, $editable) {
  console.log('summernote\'s content is changed.');
});
{% endhighlight %}

## Custom button
Summernote also supports custom buttons. If you want to create your own button, you can simply define and use with options.

### Define button
You can create a button object with $.summernote.ui. This buttons objects have the below properties.

* contents: contents to be displayed on the button
* tooltip: tooltip text when mouse over
* click:  callback function to be called when mouse is clicked

Below codes is about simple button for inserting text 'hello'.

{% highlight javascript %}
var HelloButton = function (context) {
  var ui = $.summernote.ui;

  // create button
  var button = ui.button({
    contents: '<i class="fa fa-child"/> Hello',
    tooltip: 'hello',
    click: function () {
      // invoke insertText method with 'hello' on editor module.
      context.invoke('editor.insertText', 'hello');
    }
  });

  return button.render();   // return button as jquery object
}
{% endhighlight %}

You can see `render()` which returns jquery object as button.

### Using button with options
Let's learn how to use the button on toolbar.

First, you can define buttons with option named `buttons` which is a set of key-value. You can define custom button on toolbar options.

{% highlight javascript %}
$('.summernote').summernote({
  toolbar: [
    ['mybutton', ['hello']]
  ],

  buttons: {
    hello: HelloButton
  }
});
{% endhighlight %}

You can also use custom button on `popover` in the same way.

{% include ad-doc.html %}

## Module system
For supporting expandable features, summernote was assembled by module system. This module system was built inspired by spring framework.

### Key terms
* Module: Module is a component.
* Context: Context is a kind of container. It has modules and editor's states.
* Renderer: Renderer is a function for creating element.
* UI: UI is a set of renderers to build ui elements.

### Module
Module is a component for implementing feature and it has lifecycle. Module also has helper methods or methods related with lifecycle.

#### initialize
This method will be called when editor is initialized by $('..').summernote();. You can attach events and created elements on editor elements(eg, editable, ...).

{% highlight javascript %}
this.initialize = function () {
  // create button
  var button = ui.button({
    className: 'note-btn-bold',
    contents: '<i class="fa fa-bold">',
    click: function (e) {
      context.invoke('editor.bold'); // invoke bold method of a module named editor
    }
  });

  // generate jQuery element from button instance.
  this.$button = button.render();
  $toolbar.append(this.$button);
}
{% endhighlight %}

#### destroy
This method will be called when editor is destroyed by $('..').summernote('destroy'); You should detach events and remove elements on `initialize`.

{% highlight javascript %}
this.destroy = function () {
  this.$button.remove();
  this.$button = null;
}
{% endhighlight %}

#### shouldInitialize
This method is used for deciding whether module will be initialized or not.

{% highlight javascript %}
// AirPopover's shouldInitialize
this.shouldInitialize = function () {
  return options.airMode && !list.isEmpty(options.popover.air);
};
{% endhighlight %}

Below are full codes of AutoLink module.

{% highlight javascript %}
// Module Name is AutoLink
// @param {Object} context - states of editor
var AutoLink = function (context) {

  // you can get current editor's elements from layoutInfo
  var layoutInfo = context.layoutInfo;
  var $editor = layoutInfo.editor;
  var $editable = layoutInfo.editable;
  var $toolbar = layoutInfo.toolbar;

  // ui is a set of renderers to build ui elements.
  var ui = $.summernote.ui;

  // this method will be called when editor is initialized by $('..').summernote();
  // You can attach events and created elements on editor elements(eg, editable, ...).
  this.initialize = function () {
    // create button
    var button = ui.button({
      className: 'note-btn-bold',
      contents: '<i class="fa fa-bold">',
      click: function (e) {
        // invoke bold method of a module named editor
        context.invoke('editor.bold');
      }
    });

    // generate jQuery element from button instance.
    this.$button = button.render();
    $toolbar.append(this.$button);
  }

  // this method will be called when editor is destroyed by $('..').summernote('destroy');
  // You should detach events and remove elements on `initialize`.
  this.destroy = function () {
    this.$button.remove();
    this.$button = null;
  }
};
{% endhighlight %}

For more module examples: [modules]({{ site.repository }}/tree/develop/src/js/base/module)

### Module with option
You can define custom module with options.

{% highlight javascript %}
$(".summernote").summernote({
  modules: {
    myModule: MyModule
  }
});
{% endhighlight %}

You can called module's method with external API.

{% highlight javascript %}
$(".summernote").summernote("myModule.method", 'hello');
{% endhighlight %}

### Plugin
Plugin is a kind of external module. You can also define your own module with plugin.

{% highlight javascript %}
// src/mymodule.js
$.extend($.summernote.plugins, {
  myModule: function (context) {
    // define module
    ...
  }
});
{% endhighlight %}

Below link is a example of external module.

* [plugin-hello](https://github.com/summernote/summernote/blob/v0.7.0/examples/plugin-hello.html)

> ##### Plugin was redesigned by new module system after `v0.7.0`
> Old plugin was hard to control editor states(eg, range, layout so on). After v0.7.0 plugin is redesigned by new module system. It is exactly same with module except surrounding module pattern.

## Modules

### Notification / Information Area

Summernote allows to add Notifications with Contextual Colouring to indicate the type of Notifcation, or to use the area for Informational Purposes.

The area appears at the bottom of Summernote when used in Normal Mode, and at the top of the editing area when Summernote is used in Air Mode.

To use the Notifcation area is simple and is useable by targetting the area using it's class name `.note-status-output`.

Notification elements can use any markup, but we've added some styling along the lines of Bootstrap's Alerts. For e.g. to produce an Error or Danger alert you can use `<div class="alert alert-danger">This is an error</div>`. You can also use `alert-info`, `alert-warning`, `alert-success` and `alert-danger`.

You can add the above message using jQuery or other Javascript method by targetting the output element, like (using jQuery):

{% highlight javascript %}
$('.note-status-output').html(
  '<div class="alert alert-danger">' +
    'This is an error using a Bootstrap alert that has been restyled to fit here.' +
  '</div>'
);
{% endhighlight %}

If you want to display just Informational Text, you can also add Text without the Alert if you wish.

{% highlight javascript %}
$('.note-status-output').html(
  'Text Information'
);
{% endhighlight %}

You can also place text to the right side by placing the Text within an element such as `div`, `span` or `small` and including the class `.pull-right`.

You can also use Contextual Colours for your text using the classes `text-muted`, `text-primary`, 'text-success', `text-info`, `text-warning` and `text-danger`.
