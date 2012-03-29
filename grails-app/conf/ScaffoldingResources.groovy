modules = {
   scaffolding {
      dependsOn 'bootstrap'
      resource url: '/css/scaffolding.css'
   }

   webshimsStatic {
      resource url: '/js/js-webshim/minified/shims/styles/shim.css'
      resource url: '/js/js-webshim/minified/shims/form-core.js'
      resource url: '/js/js-webshim/minified/shims/form-native-extend.js'
      resource url: '/js/js-webshim/minified/shims/form-message.js'
      resource url: '/js/js-webshim/minified/shims/form-native-fix.js'
      resource url: '/js/js-webshim/minified/shims/dom-extend.js'
      resource url: '/js/js-webshim/minified/shims/details.js'
      resource url: '/js/js-webshim/minified/shims/es5.js'
      resource url: '/js/js-webshim/minified/shims/excanvas.js'
      resource url: '/js/js-webshim/minified/shims/form-datalist.js'
      resource url: '/js/js-webshim/minified/shims/form-number-date-api.js'
      resource url: '/js/js-webshim/minified/shims/form-number-date-ui.js'
      resource url: '/js/js-webshim/minified/shims/form-output.js'
      resource url: '/js/js-webshim/minified/shims/form-shim-extend.js'
      resource url: '/js/js-webshim/minified/shims/geolocation.js'
      resource url: '/js/js-webshim/minified/shims/json-storage.js'
   }
}