---
layout: doc
bodyClass: doc
title: Plugins
description: Add to Summernote's features and extend the editors abilities
permalink: /plugins
menu: true
---

## Plugins

This page is currently a Work In Progress, we welcome contributions to update or add explanations. Please do so either by creating an [Issue](https://github.com/summernote/summernote.github.io/issues), or a [Pull Request](https://github.com/summernote/summernote.github.io/pulls).

Before taking on the journey of building a custom plugin, please visit our official repository [awesome-summernote](https://github.com/summernote/awesome-summernote){:target="_blank"}. Which contains user contributed plugins. This may save you a lot of time building your own, or afford you the opportunity to contribute to an already existing plugin, making it better.

### Adding a Plugin
Adding a Plugin to Summernote is as easy as adding Summernote to the page you want Summernote to appear in.

Most scripts don't require you to add a CSS file, although some plugins depending on the functionality of the script may require you to add necessary styles, either inline in the page, or by adding a link to the CSS file to add it's required styles. Some Plugins may also dynamically add styles to the DOM when initialised.

We typically load the Plugin Script after loading the Summernote Script.

Most scripts are added in the head area of the typical HTML page.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- include libraries(jQuery, bootstrap) -->
    <link href="{{ site.bootstrap_css }}" rel="stylesheet">
    <script src="{{ site.jquery_js }}"></script>
    <script src="{{ site.bootstrap_js }}"></script>

    <!-- include summernote css/js -->
    <link href="{{ site.summernote_css }}" rel="stylesheet">
    <script src="{{ site.summernote_js }}"></script>

    <!-- include plugin -->
    <script src="[folder where script is located]/[plugin script].js"></script>
  </head>
  <body>
{% endhighlight %}

Other things that may need to be loaded along with the plugin file, might be language files, which should follow the plugin inclusion.

For those new to using Javascript, loading Plugins after the main Summernote script, then loading language files if needed are done in this manner as some scripts are designed to execute upon loading and need to be done in order so they have access to functions they may need which would be available in the preceding script. This is more commonly the reason some scripts don't function correctly until they are put into an order that allows them to function correctly.

### Adding the Interactive Modules.
Adding the Interactive Module to Summernote is as easy as calling the options available in Summernote when we initialize the Summernote Editor.

Adding interaction to the Toolbar.

{% highlight javascript %}
$(document).ready(function() {
  $('#summernote').summernote({
    toolbar:[

      // This is a Custom Button in a new Toolbar Area
      ['custom', ['examplePlugin']],

      // You can also add Interaction to an existing Toolbar Area
      ['style', ['style' ,'examplePlugin']]
    ]
  });
});
{% endhighlight %}

Adding interaction to a Popover

{% highlight javascript %}
$(document).ready(function() {
  $('#summernote').summernote({
    popover: {
      image: [

        // This is a Custom Button in a new Toolbar Area
        ['custom', ['examplePlugin']],
        ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']]
      ]
    }
  });
});
{% endhighlight %}

### Creating Plugins
For those uninitiated with script styling, we'd like to point out that comments (`// This is a comment`) inline in the code area's describe what is happening, or what options you can change in the code areas below the comment. While this may not always be the style of others, we just wanted to make sure while your reading through the examples below that there isn't any confusion on which parts the comments may be describing.

{% highlight javascript %}
/**
 *
 * copyright [year] [your Business Name and/or Your Name].
 * email: your@email.com
 * license: Your chosen license, or link to a license file.
 *
 */
(function (factory) {
  /* Global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {
/**
 * @class plugin.examplePlugin
 *
 * example Plugin
*/
{% endhighlight %}

#### Language
If your Plugin contains textual context we need to extend the Language `lang` references within the Summernote script to add our own language references.

To access the language translations variables in your plugin script you can simply use `lang.examplePlugin.exampleText`.

{% highlight javascript %}
  $.extend(true,$.summernote.lang, {
    'en-US': { /* US English(Default Language) */
      examplePlugin: {
        exampleText: 'Example Text',
        dialogTitle: 'Example Plugin',
        okButton: 'OK'
      }
    }
  });
{% endhighlight %}

You can also create language files to link into your pages just like adding language files into Summernote itself, and using the format exactly like the code above.

### Plugin Options
This allows us to add options to our plugin to modify behaviour on a user based configuration.

{% highlight javascript %}
  $.extend($.summernote.options, {
    examplePlugin: {
      icon: '<i class="note-icon-pencil"/>',
      tooltip: 'Example Plugin Tooltip'
    }
  });
{% endhighlight %}

### The Plugin Functionality
This section is the Functional part of the Plugin.

{% highlight javascript %}
  $.extend($.summernote.plugins, {
    /**
     *  @param {Object} context - context object has status of editor.
     */
    'examplePlugin':function (context) {
{% endhighlight %}

The vars below are not all needed, what you need depends on what your trying accompish with your plugin. Most commonly you need `self`, `ui`, `options`, and `lang`.

{% highlight javascript %}
      var self      = this,

         // ui has renders to build ui elements
         // for e.g. you can create a button with 'ui.button'
          ui        = $.summernote.ui,
          $note     = context.layoutInfo.note,

          // contentEditable element
          $editor   = context.layoutInfo.editor,
          $editable = context.layoutInfo.editable,
          $toolbar  = context.layoutInfo.toolbar,

          // options holds the Options Information from Summernote and what we extended above.
          options   = context.options,

          // lang holds the Language Information from Summernote and what we extended above.
          lang      = options.langInfo;

      context.memo('button.examplePlugin', function () {

        // Here we create a button
        var button = ui.button({

          // icon for button
          contents: options.examplePlugin.icon,

          // tooltip for button
          tooltip: lang.examplePlugin.tooltip,

          // Stop button from being disabled when in CodeView
          codeviewKeepButton: true,

          click:function (e) {
            context.invoke('examplePlugin.show');
          }
        });
        return button.render();
      });
{% endhighlight %}

This section performs functions when the Plugin is first initialised. Note, this is when the Plugin is loaded, not when the Plugin is used.

{% highlight javascript %}
      this.initialize = function() {

        // This is how we can add a Modal Dialog to allow users to interact with the Plugin.

        // get the correct container for the plugin how it's attached to the document DOM.
        // Using the current latest development branch, you can now use $.summernote.interface;
        // to return which Summernote is being used to be able to adjust the modal layout to suit.
        // using this.options.id will return a generated timestamp when Summernote was initiliased
        // on page to allow using unique ID's.
        var $container = options.dialogsInBody ? $(document.body) : $editor;

        // Build the Body HTML of the Dialog.
        var body = '<div class="form-group">' +
                   '</div>';
{% endhighlight %}

See the section "Modal Markup" for element markup options inside Modals.

{% highlight javascript %}
        // Build the Footer HTML of the Dialog.
        var footer = '<button href="#" class="btn btn-primary note-examplePlugin-btn">' + lang.examplePlugin.okButton + '</button>'
      }
      this.$dialog = ui.dialog({

        // Set the title for the Dialog. Note: We don't need to build the markup for the Modal
        // Header, we only need to set the Title.
        title: lang.examplePlugin.dialogTitle,

        // Set the Body of the Dialog.
        body: body,

        // Set the Footer of the Dialog.
        footer: footer

      // This adds the Modal to the DOM.
      }).render().appendTo($container);
    };
    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };
    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === 13) $btn.trigger('click');
      });
    };
    this.bindLabels = function () {
      self.$dialog.find('.form-control:first').focus().select();
      self.$dialog.find('label').on('click', function () {
        $(this).parent().find('.form-control:first').focus();
      });
    };
    this.show = function () {
      var $img = $($editable.data('target'));
      var editorInfo = {

      };
      this.showexamplePluginDialog(editorInfo).then(function (editorInfo) {
        ui.hideDialog(self.$dialog);
        $note.val(context.invoke('code'));
        $note.change();
      });
    };
    this.showexamplePluginDialog = function(editorInfo) {
      return $.Deferred(function (deferred) {
        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');
          $editBtn.click(function (e) {
            e.preventDefault();
            deferred.resolve({

            });
          });
          self.bindEnterKey($editBtn);
          self.bindLabels();
        });
        ui.onDialogHidden(self.$dialog, function () {
          $editBtn.off('click');
          if (deferred.state() === 'pending') deferred.reject();
        });
        ui.showDialog(self.$dialog);
      });
    };
  }
})));
{% endhighlight %}

### Modal Markup
This section explains and shows example of the elements and classes that can be used inside Modals.

Note: You can mix the classes from BS3, BS4 (which are similar) and Lite versions so plugins can be version controlled to Bootstrap or not be Bootstrap specific, or they can be made compatible to work with all (the preferred method).

The main problem with using markup elements in Summernote Modals becomes evident when trying to work with elements so they are compatible with all versions of Bootstrap or the Lite version of Summernote. To try and aleviate this, there is a settings variable that can be checked `interface`, checking this setting within the plugin will return `BS3`, `BS4` or `Lite` which will allow adding logic control to determine which markup or behaviour the plugin needs use for compatibility, or you can just use a standard layout for the elements and add the appropriate classes to cover all versions (preferred).

Generally, the elements and classes for the version of Bootstrap you want to make a plugin for can use that version of Bootstraps elements, and we have tried, even with the Lite version to keep those as close as we can.

We've included some examples below to facilitate constructing Modals a bit quicker for you.

Any classes with `note-` at their start are primarily the Summernote classes to minimise interfering with other DOM classes that you may be using for other purposes, however, most of the modals use the Bootstrap classes as their primary styling, except for in the Lite version of Summernote, it relies on the `note-*` classes to style elements.

#### Form Layout
{% highlight javascript %}
var body = '<div class="form-group note-form-group">' +
              '<div class="help-block note-help-block">Helpful text block</div>' +
            '</div>' +
            '<div class="form-group note-form-group">' +
              '<label for="note-input-1" class="control-label note-form-label">Input Label 1</label>' +
              '<div class="input-group note-input-group">' +
                '<input type="text" id="note-input-1" class="form-contro note-input">' +
              '</div>' +
            '</div>';
{% endhighlight %}

#### Tabbed Panes Layout
{% highlight javascript %}
var body = '<ul class="nav note-nav nav-tabs note-nav-tabs">' +
              '<li class="nav-item note-nav-item active">' +
                '<a class="nav-link note-nav-link active" href="#note-pane-1" data-toggle="tab">Pane 1</a>' +
              '</li>' +
              '<li class="nav-item note-nav-item active">' +
                '<a class="nav-link note-nav-link active" href="#note-pane-2" data-toggle="tab">Pane 2</a>' +
              '</li>' +
              '<li class="nav-item note-nav-item active">' +
                '<a class="nav-link note-nav-link active" href="#note-pane-3" data-toggle="tab">Pane 3</a>' +
              '</li>' +
            '</ul>' +

// Pane 2
            '<div class="tab-content note-tabe-content" id="note-pane-2">' +
            '</div>';

// Pane 3
            '<div class="tab-content note-tabe-content" id="note-pane-3">' +
            '</div>';

// Pane 1, is added last due to how the Styling works to make this Panel active and visible.
            '<div class="tab-content note-tabe-content active" id="note-pane-1">' +
            '</div>';
{% endhighlight %}
