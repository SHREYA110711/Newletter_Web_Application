# Newletter_Web_Application
This is a simple web application that allows users to sign up for a MailChimp mailing list. The application is built using Node.js, Express, and the MailChimp API.

Prerequisites

Before running this application, ensure you have the following installed:

>Node.js

>NPM

>MailChimp API Key

>MailChimp List ID

Description

signUp.html

This is an HTML code for a Newsletter SignUp page. The page includes various meta tags for describing the page, a Bootstrap CSS stylesheet, and some custom styles for the template.

app.js

It is a Node.js application that uses the Express framework to create a web server that serves static files and handles HTTP requests. The application is designed to handle a form submission and send the submitted data to the Mailchimp API to add the user to a mailing list.

success.html

It will be called when the user submits the form successfully.

failure.html
 
If an error occurs, this page will be displayed and user can redirect to the home page using "Try Again" button.

Usage

>Enter your first name, last name, and email address in the sign-up form and click "Sign Up".


>The application will send a request to the MailChimp API to add the email address to the specified list.


>If the request is successful, the user will be redirected to a success page. If there is an error, the user will be redirected to a failure page.
