# Facial Recognition with JavaScript using face-api.js
## [Youtube Video](https://youtu.be/NG5Vi8zrqMM)

### To start up the app:
1. run npm install in the root directory
2. The final code uses self signed certificates. You'll need to make them (I do this in the video, or see below)
3. run node on server.js
4. go to http://localhost:5000
### images in public were generated with fooocus. None are known to have any actual people in them

### [Face API Github](https://github.com/justadudewhohacks/face-api.js)

### Loading 5 primary models
``` javascript
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
        faceapi.nets.ageGenderNet.loadFromUri('./models'),
        faceapi.nets.faceExpressionNet.loadFromUri('./models'),
    ])
```

### Stock photo I use for recognition (not useful for a match, but is an image for reference):

- https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/220px-Michael_Jordan_in_2014.jpg

### To use mkcert with this repo:
```npm install mkcert```
```mkcert create-ca```
```mkcert create-cert```
Move the 4 certificates created into the certs folder

