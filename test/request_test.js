/*global TestCase:false, tddjs:false, assertFunction, assertEquals, assertException, assert, stubFn, fakeXMLHttpRequest */
(function () {
  var ajax = tddjs.ajax;
  
  TestCase('GetRequestTest', {
    setUp: function () {
      this.ajaxCreate = ajax.create;
      this.xhr = Object.create(fakeXMLHttpRequest);
      ajax.create = stubFn(this.xhr);
    },
    tearDown: function () {
      ajax.create = this.ajaxCreate;
    },
    'test should define get method' : function () {
      assertFunction(tddjs.ajax.get);
    }, 
    'test should throw error without url': function (){
      assertException(function (){
        tddjs.ajax.get();
      });
    },
    'test should obtain an XMLHttpRequest object': function() {
      ajax.get('/url');
      
      assert(ajax.create.called);
    },
    'test should call open with method, url, async flag': function() {
      var url = '/url';
      ajax.get(url);
      
      assertEquals(['GET', url, true], this.xhr.open.args);
    },
    'test should add onreadystatechange handler': function () {
      ajax.get('/url');
      
      assertFunction(this.xhr.onreadystatechange);
    },
    'test should call send': function () {
      ajax.get('/url');
      
      assert(this.xhr.send.called);
    }
  });
}());


