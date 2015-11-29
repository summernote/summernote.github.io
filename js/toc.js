// https://github.com/ghiculescu/jekyll-table-of-contents
(function ($) {
  var fixedEncodeURIComponent = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  };

  var getLevel = function (ele) {
    return parseInt(ele.nodeName.replace('H', ''), 10);
  };

  $.fn.toc = function (options) {
    var $container = $(this);
    var $headers = $('h1, h2, h3, h4').filter(function () {
      var $header = $(this);
      var prevName = $header.prev().attr('name');
      if (!$header.attr('id') && prevName) {
        $header.attr('id', $header.attr('id', prevName.replace(/\./g, '-')));
      }
      return $header.attr('id');
    });

    if (!$headers.length || !$container.length) {
      $container.hide();
      return;
    }

    var level = getLevel($headers[0]);
    var html = '<ul class="nav">';

    $headers.each(function (idx, header) {
      var $header = $(header);
      var this_level = getLevel(header);
      if (this_level === level) {
        html += '<li>'; // same level as before; same indenting
      } else if (this_level <= level) {
        // higher level than before; end parent ol
        for (i = this_level; i < level; i++) {
          html += '</li></ul>';
        }
        html += '<li>';
      } else if (this_level > level) {
        // lower level than before; expand the previous to contain a ol
        for (i = this_level; i > level; i--) {
          html += '<ul class="nav"><li>';
        }
      }

      html += '<a href="#' + fixedEncodeURIComponent(header.id) + '">' + $header.text() + '</a>';
      level = this_level; // update for the next one
    });
    html += '</ul>';

    $headers.on('click', function () {
      window.location.hash = this.id;
    });

    $container.html(html);
  };
})(jQuery);
