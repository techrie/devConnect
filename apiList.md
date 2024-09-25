# DEVConnect API's

##AuthRouter

- POST /signup
- POST /login
- POST /logout

##ProfileRouter

- GET /profile
- POST /profile/edit
- POST /profile/forgotpassword

##ConnectionRequestRouter

- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

##UserRouter

- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets the profiles of her users on platform

Status - ignore, interested, accepted, rejected
