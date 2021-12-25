const output = $("#greeting");
const selector = $("#lang");
const loginBtn = $("#login");

function updateSelector(text) {
  output.text(text);
}

loginBtn.click(function () {
  var loginGreet = G$("Aoufi", "Abderahmane");
  $("#logindiv").hide();
  loginGreet.setLang(selector.val()).HTMLGreeting(".greeting", true).log();
});
