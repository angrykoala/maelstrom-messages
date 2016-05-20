Maelström - Messages
=================
_by @demiurgosoft_     

![Maelström Logo](https://raw.githubusercontent.com/demiurgosoft/maelstrom/master/logo/logo.jpg)

Messaging service for Maelström game

## Geting Started
1. To install the service and necessary dependencies: `npm install --production`
	1. If you want also the dev-dependencies: `npm install`
	2. To test the service using mocha: `npm test`
2. To start the service: `npm start`

## API REST

Messages microservice is a RESTful API with http request and json responses:

|Method|URL         |Usage   |Response|
|:----:|:----------:|:-------|:-------|
|POST|`/login`    |Creates a new user|Returns ok or an error|
|GET|`/inbox`    |Gets all the message that an user has received|Returns the list with the messages or an error|
|GET|`/inbox/:msgid`    |Gets the message `msgid`|Returns the message or an error|
|POST|`/`    |Creates a new message with `{from, to, subject, body}`|Returns ok or an error|
|DELETE|`/inbox/:msgid`    |Deletes a message|Returns ok or an error|


> Licensed under GNU AFFERO GENERAL PUBLIC LICENSE Version 3
> Maelström logo by @iblancasa under CC-by-sa
