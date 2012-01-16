/*global tddjs, ActiveXObject*/
(function () {
  var xhr;
  var ajax = tddjs.namespace('ajax');
  
  function xhrActiveXObject() {
    return new ActiveXObject('MSXML2.XMLHTTP.3.0');
  }
  
  function xhrXMLHttpRequest() {
    return new XMLHttpRequest();
  }
  var options = [xhrActiveXObject,  xhrXMLHttpRequest];
  
  for (var i = 0, l = options.length; i < l; i++) {
    try {
      xhr = options[i]();
      
      if (typeof xhr.readyState == 'number' && 
          tddjs.isHostMethod(xhr, 'open') &&
          tddjs.isHostMethod(xhr, 'send') &&
          tddjs.isHostMethod(xhr, 'setRequestHeader')) {
        ajax.create = options[i];
        break;
      }
    } catch (e) {}
  }
  
  
}());

 

