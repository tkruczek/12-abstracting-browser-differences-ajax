function stubFn(returnValue) {
  function fn() {
    fn.called = true;
    fn.args = arguments;
    return returnValue;
  }
  
  fn.called = false;
  
  return fn;
}
