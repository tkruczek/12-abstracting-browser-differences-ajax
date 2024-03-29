/*global TestCase: false, tddjs:false, assertNumber:false, assert: false */

TestCase('AjaxCreateTest', {
   "test should return XMLHttpRequest object": function () {
       var xhr = tddjs.ajax.create();
       
       assertNumber(xhr.readyState);
       assert(tddjs.isHostMethod(xhr, 'open'));
       assert(tddjs.isHostMethod(xhr, 'send'));
       assert(tddjs.isHostMethod(xhr, 'setRequestHeader'));
   } 
});
