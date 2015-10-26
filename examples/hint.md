---
layout: example
category: examples
---


## Hint 

서머노트는 Hint 기능을 지원합니다. Hint 는 글자 입력을 도와주는 기능입니다.  
사용자가 임의의 기능을 정의하여 hint 기능을 완성할 수 있습니다.
 
힌트 객체를 설정해서 실제 기능을 정의한다. 
힌트는 여러개의 배열을 지정해서 사용할 수도 있다. 

<table class="table table-bordered"> 
<colgroup>
  <col />
  <col width="200px;" />
</colgroup>
<thead>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Return</th>
    <th>Optional</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>match</td>
    <td>RegExp</td>
    <td></td>
    <td></td>
    <td>문자열 패턴 체크 정규식</td>
  </tr>
  <tr>
    <td>search</td>
    <td>Function (keyword, callback)</td>
    <td></td>
    <td></td>
    <td>패턴 검색으로 나온 keyword 를 가지고 실제 리스트를 검색해서 callback 으로 넘겨준다.</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Function (item)</td>
    <td><code>String</code></td>
    <td><code>true</code></td>
    <td>검색된 아이템을 popover 에 어떻게 보여줄지 정의한다.</td>
  </tr>      
  <tr>
    <td>content</td>
    <td>Function (item)</td>
    <td><code>Dom object or String</code></td>
    <td><code>true</code></td>
    <td>선택된 item 을 실제 적용될 내용으로 바꾼다. </td>
  </tr>      
</tbody>
</table>

basic: [apple, orage, watermelon, lemon] 

<div class="hint2basic"></div>
<script type="text/javascript">
$(".hint2basic").summernote({
  height: 100,
  toolbar : false,
  hint: {
    words : ['apple', 'orange', 'watermelon', 'lemon'],
    match : /\b(\w{2,})$/,
    search : function (keyword, callback) {
      callback($.grep(this.words, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    }
  }
});
</script>
{% highlight javascript %}
$(".hint2basic").summernote({
  height: 100,
  toolbar : false,
  hint: {
    words : ['apple', 'orange', 'watermelon', 'lemon'],
    match : /\b(\w{2,})$/,
    search : function (keyword, callback) {
      callback($.grep(this.words, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    }
  }
});
{% endhighlight %}

emoji: use `https://api.github.com/emojis`

<div class="hint2emoji"></div>
<script type="text/javascript">

$.ajax({
  url: 'https://api.github.com/emojis',
  async : false 
}).then(function(data) {
  window.emojis = Object.keys(data);
  window.emojiUrls = data; 
});;

$(".hint2emoji").summernote({
  height: 100,
  toolbar : false,
  hint: {
    words : ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\B:([\-+\w]+)$/,
    search: function (keyword, callback) {
      callback($.grep(emojis, function (item) {
        return item.indexOf(keyword)  === 0;
      }));
    },
    template: function (item) {
      var content = emojiUrls[item];
      return '<img src="' + content + '" width="20" /> :' + item + ':';
    },
    content: function (item) {
      var url = emojiUrls[item];
      if (url) {
        return $('<img />').attr('src', url).css('width', 20)[0];
      }
      return '';
    }
  }
});
</script>
{% highlight javascript %}

$.ajax({
  url: 'https://api.github.com/emojis',
  async : false 
}).then(function(data) {
  window.emojis = Object.keys(data);
  window.emojiUrls = data; 
});;

$(".hint2emoji").summernote({
  height: 100,
  toolbar : false,
  hint: {
    match: /:([\-+\w]+)$/,
    search: function (keyword, callback) {
      callback($.grep(emojis, function (item) {
        return item.indexOf(keyword)  === 0;
      }));
    },
    template: function (item) {
      var content = emojiUrls[item];
      return '<img src="' + content + '" width="20" /> :' + item + ':';
    },
    content: function (item) {
      var url = emojiUrls[item];
      if (url) {
        return $('<img />').attr('src', url).css('width', 20)[0];
      }
      return '';
    }
  }
});
{% endhighlight %}

mention: [jayden, sam, alvin, david] 

<div class="hint2mention"></div>
<script type="text/javascript">
$(".hint2mention").summernote({
  height: 100,
  toolbar : false,
  hint: {
    mentions : ['jayden', 'sam', 'alvin', 'david'],
    match: /@(\w*)$/,
    search : function (keyword, callback) {
      callback($.grep(this.mentions, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    },
    content: function (item) {
      return '@' + item;
    }    
  }
});
</script>
{% highlight javascript %}
$(".hint2mention").summernote({
  height: 100,
  toolbar : false,
  hint: {
    mentions : ['jayden', 'sam', 'alvin', 'david'],
    match: /\B@(\w*)$/,
    search : function (keyword, callback) {
      console.log(keyword);
      callback($.grep(this.mentions, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    },
    content: function (item) {
      return '@' + item;
    }    
  }
});
{% endhighlight %}


tags: ['blockqoute', 'h1', 'h2', 'h3', 'h4', 'p']

<div class="hint2tag"></div>
<script type="text/javascript">
$(".hint2tag").summernote({
  height: 100,
  toolbar : false,
  hint: {
    mentions : ['blockqoute', 'h1', 'h2', 'h3', 'h4', 'p'],
    match: /<(\w*)$/,
    search : function (keyword, callback) {
      callback($.grep(this.mentions, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    },
    content: function (item) {
      return '<' + item + '>' + '</' + item + '>';
    }    
  }
});
</script>
{% highlight javascript %}
$(".hint2tag").summernote({
  height: 100,
  toolbar : false,
  hint: {
    mentions : ['blockqoute', 'h1', 'h2', 'h3', 'h4', 'p'],
    match: /<(\w*)$/,
    search : function (keyword, callback) {
      callback($.grep(this.mentions, function (item) {
        return item.indexOf(keyword) == 0;
      }));
    },
    content: function (item) {
      return '<' + item + '>' + '</' + item + '>';
    }    
  }
});
{% endhighlight %}
