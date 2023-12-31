(function(){
  function loadCSS(url) {
    var domLink = document.createElement('link');
    domLink.href = url;
    domLink.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(domLink);
  }

  loadCSS('https://static001.geekbang.org/static/infoq/www/css/app.6a43a736.css')

    function loadJS(url, success) {
      var domScript = document.createElement('script');
      domScript.src = url;
      success = success || function () {};
      domScript.onload = domScript.onreadystatechange = function () {
          if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
              success();
              this.onload = this.onreadystatechange = null;
              this.parentNode.removeChild(this);
          }
      }
      document.getElementsByTagName('head')[0].appendChild(domScript);
    }

    loadJS('https://static001.geekbang.org/static/infoq/www/js/chunk-vendors.521c1d1a.js', function () {
      loadJS('https://static001.geekbang.org/static/infoq/www/js/app.4f4ad767.js');
    });
  })();