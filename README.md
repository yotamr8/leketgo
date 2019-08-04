# ![LeketGo](https://firebasestorage.googleapis.com/v0/b/leketgo.appspot.com/o/Asset%202%401.5x.png?alt=media&token=a4303fbe-414a-433c-a3ef-8ff573efb6b4)

An all-hebrew NextJS app for managing food collecting tasks in the real world.<br>
In the making for [Leket Israel (The National Food Bank)](https://www.leket.org/en/), a non-profit organization that rescues surplus food for those in need.

# Overview

Developed by Bar Amir, Matan Wilchek, Alon Kagan and Roey Ravits as our semestrial project in the [Google Technologies for Cloud and Web Development Workshop](https://sites.google.com/site/cloudweb18b/) at Tel Aviv University.

# Installation

The Web app is running on Chrome, Safari, Firefox. <br>
In order to edit code, you will need to install NodeJS.

# Usage Instructions

## Login page

In case of forgetting your password, you can reset it using 'forgot password'.<br>
A link to reset your password will be sent to your mail.

## Control panel page

You can view informative data about this week volunteers and tasks.

## Volunteers page

You can view the list of active and inactive users (volunteers).<br>
You can add a new user menually or 'from file'.<br>
If you choose 'from file', you will need to follow the example file ("/users.xlsx"), and fill the same columns and fields.<br>
For every active user you can take different actions under 'options'. You can edit his personal info, change his password, change his permissions to administrator, or disable his account.<br>
For every inactive user you can bring him back to be active.<br>
You can export the list of users as an excel file using 'export users report'.

## Tasks Page



# Deploying to Firebase

```bash
npm run build
npm run export
firebase login
firebase use leketgo
```

remove the content from /public, except '404.html'<br>
copy the content from /out to /public

test localy: 
```bash
firebase serve
```
deploying to firebase:<br>
only hosting - 
```bash
firebase deploy --only hosting
```
everything (include functions) - 
```bash
firebase deploy 
```
*It's possible that chrome will show the old site. If so you'll first need to clean the web_cache and cookies
# architectural overview
* [Next.js](https://github.com/zeit/next.js) – The React Framework
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) – The most popular front-end framework, rebuilt for React
* [Firebase](https://firebase.google.com/) – Application development platform by Google

## License
