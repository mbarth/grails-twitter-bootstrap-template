<!doctype html>
<html>
<head>
   <meta name="layout" content="bootstrap"/>
   <title>Acme Co.</title>

</head>

<body>
<div class="row-fluid">
   <aside id="application-status" class="span3">
      <div class="well sidebar-nav">
         <h5>Grails Application Status</h5>
         <ul>
            <li>App version: <g:meta name="app.version"/></li>
            <li>Grails version: <g:meta name="app.grails.version"/></li>
            <li>Groovy version: ${org.codehaus.groovy.runtime.InvokerHelper.getVersion()}</li>
            <li>JVM version: ${System.getProperty('java.version')}</li>
            <li>Controllers: ${grailsApplication.controllerClasses.size()}</li>
            <li>Domains: ${grailsApplication.domainClasses.size()}</li>
            <li>Services: ${grailsApplication.serviceClasses.size()}</li>
            <li>Tag Libraries: ${grailsApplication.tagLibClasses.size()}</li>
         </ul>
         <h5>Grails Installed Plugins</h5>
         <ul>
            <g:each var="plugin" in="${applicationContext.getBean('pluginManager').allPlugins}">
               <li>${plugin.name} - ${plugin.version}</li>
            </g:each>
         </ul>
      </div>
   </aside>

   <section id="main" class="span9">

      <div class="hero-unit">
         <h2>Acme Co.</h2>

         <p>Using a <a href="http://twitter.github.com/bootstrap" rel="external"><em>Twitter
         Bootstrap</em></a> look &amp; feel.</p>

      </div>

      <div class="row-fluid">

         <div class="span4">
            <h2>Trusted Data</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus accumsan arcu, et interdum dui consequat sit amet. Nullam dui sapien, iaculis bibendum suscipit id, accumsan faucibus enim. Ut viverra semper nibh nec porttitor. Aliquam erat volutpat. Vivamus sit amet pretium dui. Praesent vel condimentum quam. Aenean gravida ligula erat. Vivamus fermentum, leo eget eleifend aliquet, leo mi fringilla tellus, quis congue arcu odio ut sapien. Ut at lobortis erat.</p>
         </div>

         <div class="span4">
            <h2>Our Mission</h2>

            <p>Pellentesque id nisl eget tortor congue egestas vel et ligula. Pellentesque molestie pretium elementum. Sed dapibus felis purus, nec molestie sapien. Quisque id leo enim, in consectetur nulla. Suspendisse eu adipiscing neque. Quisque ac purus nec orci venenatis molestie. Aliquam suscipit pellentesque mi, non convallis enim elementum ac. Etiam suscipit bibendum odio, eu egestas eros gravida eget. Aliquam vitae mauris a enim congue imperdiet. Cras dictum dolor ac mauris vestibulum at dapibus mi tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tincidunt eros. Etiam lorem tellus, egestas vel eleifend at, ullamcorper feugiat leo. Morbi scelerisque auctor est, commodo elementum est sodales.</p>
         </div>

         <div class="span4">
            <h2>Join Us</h2>

            <p>Praesent commodo gravida nibh, in pharetra nisi sagittis eget. Nullam facilisis sapien eu odio accumsan blandit. Sed id neque vitae lectus dapibus suscipit. Nam sagittis, tortor ac sagittis congue, eros leo tincidunt enim, id viverra orci tellus vel sapien. Donec euismod imperdiet placerat. Donec a elementum libero. Nulla ullamcorper ullamcorper egestas. Maecenas rhoncus elementum volutpat. Aenean eget semper nisi. Sed vitae velit diam.</p>
         </div>

      </div>

   </section>
</div>

</body>
</html>
