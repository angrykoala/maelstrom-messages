var jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');

var dbHandler = require('./app/dbhandler.js');

module.exports = function(app) {
		// Create an user
		app.post('/login', function(req, res) {
					dbHandler.createUser(req.user.id, function(err, res) {
							if (err) res.status(500).json({
								error: err
							});
							else res.json(res);
						}
					});

				// Gets all the received messages
				app.get('/inbox', function(req, res) {
						dbHandler.getInbox(req.user.id, function(err, res) {
								if (err) res.status(500).json({
									error: err
								});
								else res.json(res);
							}
						});

					// Get the requested message
					app.get('/inbox/:msgid', function(req, res) {
							dbHandler.getInboxMessage(req.params.msgid, function(err, res) {
									if (err) res.status(500).json({
										error: err
									});
									else res.json(res);
								}
							});

						// Send a message
						app.post('/', function(req, res) {
								var from = req.user.id;
								var to = req.body.to;
								var subject = req.body.subject;
								var body = req.body.body;
								dbHandler.newMsg(from, to, subject, body, function(err, res) {
										if (err) res.status(500).json({
											error: err
										});
										else res.json(res);
									}
								});

							// Delete a message
							app.delete('/inbox/:msgid', function(req, res) {
									dbHandler.deleteMsg(req.params.msgid, function(err, res) {
											if (err) res.status(500).json({
												error: err
											});
											else res.json(res);
										}
									});
							};