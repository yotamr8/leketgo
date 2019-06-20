# ![LeketGo](https://firebasestorage.googleapis.com/v0/b/leketgo.appspot.com/o/Asset%202%401.5x.png?alt=media&token=a4303fbe-414a-433c-a3ef-8ff573efb6b4)

An all-hebrew NextJS app for managing food collecting tasks in the real world.<br>
In the making for [Leket Israel (The National Food Bank)](https://www.leket.org/en/), a non-profit organization that rescues surplus food for those in need.

## Overview

Developed by Bar Amir, Matan Wilchek, Alon Kagan and Roey Ravits as our semestrial project in the [Google Technologies for Cloud and Web Development Workshop](https://sites.google.com/site/cloudweb18b/) at Tel Aviv University.

## Getting Started
## Running the Tests

## Deploying to Firebase

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
## Built With
* [Next.js](https://github.com/zeit/next.js) – The React Framework
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) – The most popular front-end framework, rebuilt for React
* [Firebase](https://firebase.google.com/) – Application development platform by Google

## License
