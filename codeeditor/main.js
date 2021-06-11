var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{
            uid = null;
            window.location.replace("login.html");
        }
      });
      function logOut(){
          firebase.auth().signOut();
      }
      mainApp.logOut = logOut;
})()


//----code editor---//
function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>"+document.getElementById("cssCode").value+"</style>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode);
    frame.close();
    }

    
  //----------save data------------//
  const db = app_fireBase.firestore();
  document.getElementById("save").onclick = function(){
      db.collection('idCode').add({
        htmlCode: htmlCode.value,
        cssCode: cssCode.value,
      });
  }