## vue-sanitize-html-plugin

A sanitizeHtml wrapper for Vue

### Description

It's [sanitize-html](https://github.com/punkave/sanitize-html) wrapper for Vue.  
You can use `sanitize` method or `v-sanitaize` directive by this plugin.

### Example

```js
import Vue from 'vue';
import VueSanitizeHtml from 'vue-sanitize-html-plugin';

Vue.use(VueSanitizeHtml, {
  allowedTags: [ 'a' ],
  allowedAttributes: {
    'a': [ 'href' ],
  }
});

var myComp = Vue.extend({
  template: `<div>
    {{ sanitize('<a href="https://example.com">Link to example</a>') }}
    <span
      v-sanitaize
      v-html>How are you?</span>
  </div>`
});

var vm = new Vue({
  el: '#app',
  
  components: {myComp},
  
  template: `<div>
    <my-comp></my-comp>
  </div>`
});
```

### Requirement

`vue-sanitize-html-plugin` is intended for use with Vue ^2.5.2.

### Install

```bash
npm install vue-sanitize-html-plugin --save
```

or install with yarn:

```bash
yarn add vue-sanitize-html-plugin
```

### Usage

#### Import plugin with options

It's basing vue-sanitize-html-plugin on [sanitize-html](https://github.com/punkave/sanitize-html).
So, you can set options. 

```js
import VueSanitizeHtml from 'vue-sanitize-html-plugin';

Vue.use(VueSanitizeHtml, {
  allowedTags: [ 'a' ],
  allowedAttributes: {
    'a': [ 'href' ],
  }
});
```

#### How to set up a sanitizing target

- `sanitize` method

```js
var myComp = Vue.extend({
  template: `<div>
    {{ sanitize('<a href="https://example.com">Link to example</a>') }}
  </div>`
});
```

with options

```js
var myComp = Vue.extend({
  template: `<div>
    {{ sanitize('<img src="https://example.com/foo.jpg" />', { allowedTags: [ 'img' ] }) }}
  </div>`
});
```

- `v-sanitaize` directive

```js
var myComp = Vue.extend({
  template: `<div>
    <span
      v-sanitaize
      v-html>How are you?</span>
  </div>`
});
```

with options

```js
var myComp = Vue.extend({
  template: `<div>
    <span
      v-sanitaize="{ allowedTags: [ 'img' ] }"
      v-html>How are you?</span>
  </div>`
});
```

### Contribution

1. Fork it ( http://github.com/shibukk/vue-sanitize-html-plugin/fork )
2. Create your feature branch ( git checkout -b my-new-feature )
3. Commit your changes ( git commit -am 'Add some feature' )
4. Push to the branch ( git push origin my-new-feature )
5. Create new Pull Request

### Licence

[MIT](https://github.com/shibukk/vue-sanitize-html-plugin/blob/master/LICENSE)

## Author

[shibukk](https://github.com/shibukk)
