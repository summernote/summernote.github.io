---
layout: doc
title: Deep dive
description: Customize summernote's components, toolbar, plugins to get your very own version
permalink: /deep-dive/
---

## Initialization options

Customize by Initializing various options and modules.

### Custom toolbar, popover

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

You can also setup buttons of the other popovers in the same way. Below settings are default options for popovers.

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
You can define placeholder with `placeholder` option.

{% highlight javascript %}
$('#summernote').summernote({
  placeholder: 'write here...'
});
{% endhighlight %}

### Disable drag and drop
You can disable drag and drop with `disableDragAndDrop` option.
{% highlight javascript %}
$('#summernote').summernote({
  disableDragAndDrop: true
});
{% endhighlight %}

### Disable shortcuts
You can disable custom shortcuts with shortcuts
{% highlight javascript %}
$('#summernote').summernote({
  shortcuts: false
});
{% endhighlight %}

## Basic API

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

### saveRange, restoreRange

save current user selection internally.

{% highlight javascript %}
$('#summernote').summernote('saveRange');
{% endhighlight %}

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

### isEmpty

Returns whether contents is empty or not.

Editing area needs `<p><br></p>` for focus, even if contents is empty. So summernote support this method for helping to check contents is empty.

{% highlight javascript %}
if ($('#summernote').summernote('isEmpty')) {
  alert('contents is empty');
}
{% endhighlight %}

### disable, enable

You can disable editor by API.

{% highlight javascript %}
$('#summernote').summernote('disable');
{% endhighlight %}

If you want to enable editor again, call API with enable.

{% highlight javascript %}
$('#summernote').summernote('enable');
{% endhighlight %}

## Font style API

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

## Paragraph API

### justify left, right and more

Set paragraph align

{% highlight javascript %}
$('#summernote').summernote('justifyLeft');
$('#summernote').summernote('justifyRight');
$('#summernote').summernote('justifyCenter');
$('#summernote').summernote('justifyFull');
{% endhighlight %}

### insertParagraph

insert paragraph

{% highlight javascript %}
$('#summernote').summernote('insertParagraph');
{% endhighlight %}

### insertOrderedList

toggle ordered list and unordered list

{% highlight javascript %}
$('#summernote').summernote('insertOrderedList');
{% endhighlight %}

{% highlight javascript %}
$('#summernote').summernote('insertUnorderedList');
{% endhighlight %}

### indent and outdent

indent and outdent on current paragraph

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

Set line height

{% highlight javascript %}
// @param {Number} line height - unit is px
$('#summernote').summernote('lineHeight', 20);
{% endhighlight %}

## Insertion API

### insertImage

Insert a image

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

### onFocus, onBlur
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
    contents: '<i class="fa fa-bold">'
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
this method will be called when editor is destroyed by $('..').summernote('destroy'); You should detach events and remove elements on `initialize`.

{% highlight javascript %}
this.destroy = function () {
  this.$button.remove();
  this.$button = null;
}
{% endhighlight %}

#### shouldInitialize
This method used for deciding whether module will be initialized or not.

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
      contents: '<i class="fa fa-bold">'
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

For more module examples: [modules]({{ site.repository }}/tree/develop/src/js/bs3/module)


### Plugin

Plugin is a kind of external module. You can define your own module with plugin. Below link is a example of external module.

* [plugin-hello](https://github.com/summernote/summernote/blob/v0.7.0/examples/plugin-hello.html)

> ##### Plugin was redesigned by new module system after `v0.7.0`
> Old plugin was hard to control editor states(eg, range, layout so on). After v0.7.0 plugin is redesigned by new module system. It is exactly same with module except surrounding module pattern.

## Button 과 Module 

Summernote 는 버튼과 모듈 형태로 기능을 확장할 수 있다. 

Toolbar 에 간단한 버튼 하나를 추가 하고 싶을 때는 Button 을 쓰면 좋고 

그외 복잡한 기능을 모아놓고 싶으면 Module 을 쓰는 것이 좋다. 

### Button 

먼저 버튼을 정의해보자.  summernote 는  $.summernote.ui 를 기준으로 button 객체를 생성할 수 있다. 

button 객체는 기본적으로 jquery object 기반으로 이루어진다. 

* contents : 버튼에 표시될 내용을 지정한다. 
* tooltip : 마우스 오버했을 때 나오는 tooltip 을 지정한다. 
* click :  클릭 이벤트 발생시 실행할 callback 을 지정한다. 

간단하게 3가지의 변수를 가지고 아래와 같이 설정할 수 있다. 

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

  return button.render();   // return button's jquery object 
}
{% endhighlight %}

마지막에 render() 메소드를 통해서 완전한 jquery 객체로 변환해서 리턴한다. 

자 지금까지 간단한 버튼을 만들었다. 

버튼을 Toolbar 에서 어떻게 쓰는지 알아보자. 

#### `옵션`으로 정의하는 방법 

먼저 버튼은 `buttons` 라는 옵션으로 정의할 수 있다.  buttons 라는 옵션에 원하는 이름으로 지정을 하면 된다. 

{% highlight javascript %}
$(".summernote").summernote({
  toolbar : [
    ['mybutton', [ 'hello' ]]     // set a button named 'hello'
  ],
  
  buttons : {
    hello : HelloButton
  }
});
{% endhighlight %}

자 이제 버튼을 완전히 정의했다. 
toolbar 에 표시될 영역에 버튼 이름을 적어주면 나타난다. 

기타 popover(airmode, image 등의 기능)에 버튼을 추가 할때도 이름만 추가 해주면 자동으로 버튼이 추가된다. 

### Module 

모듈은 버튼이 아니라 좀 더 복잡한 기능이나 summernote 에 최적화된 기능을 만들고 싶을 때 사용된다. 

내부에서 정의하는 것을 기본적으로 모듈이라고 부르며 외부에서 정의하는 것은 플러그인이라 부른다. 

구조는 같고 선언하는 방법만 다르다. 

#### 라이프 사이클 

모듈은 기본적으로 라이프사이클이 존재한다. 

summernote 가 실행되어질때 생성되며 소멸될때 같이 소멸된다. 

#### 모듈함수 정의  

{% highlight javascript %}

// 객체를 정의한다. 버튼과 동일하다. 
function MyModule (context) {
  var ui = $.summernote.ui;
  
  // summernote 를 생성할때 지정한 옵션을 가지고 올 수 있다. 
  var options = context.options;

  // summernote 에서 제공하는 이벤트를 간단히 정의할 수 있다.  
  this.events = {
    'summernote.init' : function () {
      console.log('summernote is inited');
    }
  }
  
  // 버튼을 정의 할 수 있다. 
  context.memo('button.mybutton', function () {
    return ui.button({
      contents : 'My Button',
      click : function () {
          console.log('my button clicked');
      }
    }).render();
  });
  
  // 이 모듈이 초기화(initialize) 될지 안될지 지정한다. 
  // 만약 runMyModule 이라는 옵션이 없으면 이 모듈은  summernote 안에서 실행되지 않는다. 
  // 선언을 하지 않으면 기본적으로 모듈을 초기화 한다. 
  this.shouldInitialize = function () {
    return options.runMyModule;
  }
  
  //초기화 함수를 지정
  // 서머노트가 생성되어 질 때 실행된다. 
  this.initialize = function () {
    
    
  }
  
  // 소멸자 
  // $(".summernote").summernote("destroy");  를 실행할때 같이 실행된다. 
  // 모듈의 필요없는 자원은 여기서 제거한다. 
  this.destroy = function () {
    
  }
  
  // 그외 여러가지 메소드들을 정의한다. 
  // 이렇게 정의된 메소드는 외부에서 external api 형태로 호출이 가능하다. 
  // ex) $(".summernote").summernote("mymodule.method");
  this.method = function () {
    context.invoke('editor.focus'); // 포커스를 준다. 
  }
  
}
{% endhighlight %}

#### 옵션으로 모듈 정의하기  

아래와 같이 modules 라는 옵션에 이름을 지정해서 정의할 수 있다.
 
{% highlight javascript %}
$(".summernote").summernote({
  modules : {
    mymodule : MyModule     // mymodule 이름으로 모듈을 정의한다. 
  }
});
{% endhighlight %}

여기에 지정된 이름은 external api 의 사용 대상이 된다. 

만약 mymdoule 에 정의된 method 를 실행하고 싶으면 아래와 같이 하면 된다. 

{% highlight javascript %}
$(".summernote").summernote("mymodule.method", x, y);   
{% endhighlight %}

#### 플러그인으로 정의하기 

옵션은 매번 실행할때마다 지정해줘야하기 때문에 실제 사용은 불편할 수 있다. 

그럴 때는 플러그인 형태로 정의하면 좋다. 

{% highlight javascript %}

// src/mymodule.js 
$.extend($.summernote.plugins, {
  mymodule : function (context) {
    // define module 
    ... 
  }
});
{% endhighlight %}

이렇게 하면 외부 파일로 따로 정의해서 사용할 수 있다. 

### 모듈의 동적 추가, 삭제 

간혹 모듈을 동적으로 추가하거나 삭제하고 싶을 때가 있다. 

기본적으로 summernote 의 모든 기능이 모듈 베이스로 움직이며 모듈은 언제나 추가하거나 삭제할 수 있다. 

#### 모듈을 동적으로 추가하는 방법

summernote 실행 중에 모듈을 추가 하고 싶다면 아래와 같이 하면 된다. 

{% highlight javascript %}
$(".summernote").summernote("module", "mymodule" /* module name */, function (context) { 
  /* define module */ 
}); 
{% endhighlight %}

#### 모듈을 지우는 방법 

필요없는 모듈은 아래와 같이 지울 수도 있다. 

{% highlight javascript %}
$(".summernote").summernote("removeModule", "mymodule"); 
{% endhighlight %}