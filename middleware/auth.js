function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	if (req.session && req.session.loggedin) {
		return next();
	} else {
		return res.redirect ('/login');
	}
}

module.exports = checkAuth;
