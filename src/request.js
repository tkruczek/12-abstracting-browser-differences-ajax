/*global tddjs:false*/
(function (){
  var ajax = tddjs.namespace('ajax');
  
  if (!ajax.create) {
    return;
  }
  
  function get(url) {
    if (typeof url != 'string') {
      throw new TypeError('URL should be string');
    }
    var transport = ajax.create();
    transport.open('GET', url, true);
    transport.onreadystatechange = function () {};
    transport.send();
  }
  
  ajax.get = get;
}());
