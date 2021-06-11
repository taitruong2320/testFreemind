
(function(){
    
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
})()

const db = firebase.firestore();
  const tableData = document.querySelector('.table');

  const editModal = document.querySelector('.edit-modal');
  const editModalForm = document.querySelector('.edit-modal .form');

  let id;

  const renderData = doc => {
    const tr = `
                <tr data-id='${doc.id}'>
                   <td>${doc.data().htmlCode}</td>
                   <td>${doc.data().cssCode}</td>
                   <td>
                       <button  data-target="#update" data-toggle="modal" class="btn btn-edit btn-primary ">edit</button>
                   </td>
                </tr>
    `;
    tableData.insertAdjacentHTML('beforeend', tr);

    //edit get data
  const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
  btnEdit.addEventListener('click',() =>{
      id = doc.id;
    editModalForm.htmlCode.value = doc.data().htmlCode;
    editModalForm.cssCode.value = doc.data().cssCode;
  });
  }
  //get all data
  db.collection('idCode').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
          renderData(doc);
      })
  })
  //submit edit data
  editModalForm.addEventListener('submit',e =>{
    e.preventDefault();
    db.collection('idCode').doc(id).update({
        htmlCode : editModalForm.htmlCode.value,
        cssCode : editModalForm.cssCode.value,
    })
  });

  db.collection('idCode').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableData.removeChild(tbody);
      renderData(change.doc);
    }
  })
})