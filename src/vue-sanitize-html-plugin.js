const VueSanitizeHtmlPlugin = {}

export default VueSanitizeHtmlPlugin.install = function (Vue, options) {
  var defaultOptions = options
  var sanitizeHtml = require('sanitize-html')

  Vue.directive('sanitaize', {
    update
  })

  Vue.mixin({
    methods: {
      sanitize (dirty, opts = null) {
        return sanitizeHtml(dirty, opts || defaultOptions)
      }
    }
  })

  function update (el, binding, vnode) {
    var dirty = vnode.elm.innerHTML
    var opts = binding.value || defaultOptions
    vnode.elm.innerHTML = sanitizeHtml(dirty, opts)
  }
}
