/*global tddjs, ActiveXObject*/
tddjs.namespace('ajax').create = function() {
  var options = [
    function () {
      return new ActiveXObject('Microsoft.XMLHTTP');
    },
    
    function () {
      return new XMLHttpRequest();
    }
  ];
  
  for (var i = 0, l = options.length; i < l; i++) {
    try {
      return options[i]();
    } catch (e) {}
  }
  
  return null;
};

