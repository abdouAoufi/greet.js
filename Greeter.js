(function (global, $) {
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language); // like creating object of class
  };
  // function constructor that build on aobject and gives it three prorities ...
  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    self["firstName"] = firstName || "";
    self["lastName"] = lastName || "";
    self["language"] = language || "en";
  };

  Greeter.init.prototype = Greeter.prototype; // setting the prototype of that fucntion to the mother funciton
  console.log(Greeter("Aoufi", "Abderahmane", "ar"));
})(window, jQuery);
