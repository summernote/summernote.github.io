---
layout: doc
bodyClass: doc
title: Plugins
description: Add to Summernote's features and extend the editors abilities
permalink: /plugins
menu: true
---

## Plugins

This will be a page about how to create and use plugins. (<abbr title="Work In Process">WIP</abbr>)

Before taking on the journey of building a custom plugin, please visit our official repository [awesome-summernote](https://github.com/summernote/awesome-summernote){:target="_blank"}. Which contains user contributed plugins. This may save you a lot of time building your own, or afford you the opportunity to contribute to an already existing plugin, making it better.

Adding a Plugin to Summernote is as easy as adding Summernote to the page you want Summernote to appear in.

### Adding a Plugin
Adding a Plugin Script is exactly the same as adding Summernote to your page.
Most scripts don't require you to add a CSS file, although some plugins depending on the author and functionality of the script may require you to also add the necessary styles, either inline in the page, or by adding a link to the CSS file to add it's required styles.

We typically load the Plugin Script after loading the Summernote Script.

Most commonly, most scripts are added in the head area of the typical HTML page. Lately though (maybe the last 1 or 2 years), a lot of developers add the script loading reference towards the bottom of the page. The reason is simple, "Page Loading", as loading javascript files blocks page loading, and as long as the content loads at a decent speed, most site visitors wouldn't notice the slight interruption to script loading. However, for our examples, we'll be loading the scripts into the page within the header.

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

Other things that may need to be loaded along with the plugin file, maybe language files, which should follow the plugin reference.

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
We need to extend the Language `lang` references within the Summernote script to add our own language references.
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

You can also create language files to link into your pages just like adding language files into Summernote iteself, and using the format exactly as the code above.

### Plugin Options
This section allows us to add options to our plugin to modify behaviour on a user based configuration.

{% highlight javascript %}
  $.extend($.summernote.options, {
    examplePlugin: {
      icon: '<i class="note-icon-pencil"/>',
      tooltip: 'Example Plugin Tooltip'
    }
  });
{% endhighlight %}

Extend Plugins for adding our example Plugin.

{% highlight javascript %}
  $.extend($.summernote.plugins, {
    /**
     *  @param {Object} context - context object has status of editor.
     */
    'examplePlugin':function (context) {
{% endhighlight %}

The vars below are not all needed, what you need depends on what your trying accompish with your plugin. Most commonly you need self, ui, options, and lang.

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
          options   = context.options,
          lang      = options.langInfo;

      context.memo('button.examplePlugin', function () {
        // create button
        var button = ui.button({
          // icon for button
          contents: options.examplePlugin.icon,
          // tooltip for button
          tooltip: lang.examplePlugin.tooltip,
          click:function (e) {
            context.invoke('examplePlugin.show');
          }
        });
        return button.render();
      });

      this.initialize = function() {
        // get the correct container for the plugin where's it's attached to the
        // document DOM.
        var $container = options.dialogsInBody ? $(document.body) : $editor;

        // Build the Body HTML of the Dialog.
        var body = '<div class="form-group">' +
                   '</div>';
        var footer = '<button href="#" class="btn btn-primary note-examplePlugin-btn">' + lang.examplePlugin.okButton + '</button>'
      }
      this.$dialog = ui.dialog({
        // Set the title for the Dialog.
        title: lang.examplePlugin.dialogTitle,
        // Set the Body of the Dialog.
        body: body,
        // Set the Footer of the Dialog.
        footer: footer
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
