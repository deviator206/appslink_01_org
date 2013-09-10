( function(window) {"use strict";
		var document = window.document,
		// the JQuery object
		$ = window.$,
		// the MAIN object
		deviator = (function() {
			var module = {

				profileEmailCheck : function() {
					var bReturn= false;
					if (document.getElementById('workEmailId') !== undefined && module.validateEmail(document.getElementById('workEmailId').value)) {
						if (document.getElementById('workEmailId') !== undefined && module.validateEmail(document.getElementById('managerEmailId').value)) {
							var userEmail = document.getElementById('workEmailId').value;
							var managerEmail = document.getElementById('managerEmailId').value;
							var userDomain = userEmail.split("@")[1];

							var managerDomain = managerEmail.split("@")[1];
							module.trace(userDomain+''+managerDomain);
							if (userDomain !== managerDomain) {
								bReturn = false;
							} else {
								bReturn = true;
							}
						} else {
							bReturn = false;
							alert("ID issue of EmailAddress of user's Manager")
						}
					} else {
						bReturn = false;
						alert('ID issue of EmailAddress of user');
					}
					
					return bReturn;
				},

				validateEmail : function(email) {
					var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
					if (reg.test(email)) {
						return true;
					} else {
						return false;
					}
				},
				trace : function(str) {
					console.log("## " + str)
				}
			};
			return module;
		})();
		window.deviator = deviator;
	}(window));

