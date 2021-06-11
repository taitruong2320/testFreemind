var app_fireBase = {};

(function(){
    
    var firebaseConfig = {
        apiKey: "AIzaSyBiYvSjvapDolQVhGNm43t2HK85y69GN1Q",
        authDomain: "codeeditor-101cf.firebaseapp.com",
        projectId: "codeeditor-101cf",
        storageBucket: "codeeditor-101cf.appspot.com",
        messagingSenderId: "795649009392",
        appId: "1:795649009392:web:79f8bd1b418e68b834c435"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      app_fireBase = firebase;
})()