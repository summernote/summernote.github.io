---
layout: doc
bodyClass: doc
title: Components
description: Use and learn about Summernote's components
permalink: /deep-dive/components
menu: true
---

## Components

This page is about using built in Components of Summernote. (<abbr title="Work In Process">WIP</abbr>)

### Notification / Information Area

Summernote allows to add Notifications with Contextual Colouring to indicate the type of Notifcation, or to use the area for Informational Purposes.

The area appears at the bottom of Summernote when used in Normal Mode, and at the top of the editing area when Summernote is used in Air Mode.

To use the Notifcation area is simple and is useable by targetting the area using it's class name `.note-status-output`.

Notification elements can use any markup, but we've added some styling along the lines of Bootstrap's Alerts. For e.g. to produce an error or danger alert you can use `<div class="alert alert-danger">This is an error</div>`. You can also use `alert-info`, `alert-warning`, `alert-success`.

You can add the above message using jQuery or other Javascript method by targetting the output element, like (using jQuery):

{% highlight javascript %}
$('.note-status-output').html('<div class="alert alert-danger">This is an error using a Bootstrap alert that has been restyled to fit here.</div>');
{% endhighlight %}

