var providerGoogle   = new firebase.auth.GoogleAuthProvider();

// jquery sujeta la etiqueta root
$('#glogin').click(function(){
  firebase.auth().signInWithPopup(providerGoogle)
     .then(function(result){
      console.log(result.user);
      $('#glogin').hide();
      guardarDatos(result.user);
      $('#root').append( result.user.displayName);
      $('#avatar').attr('src',result.userPhotoURL) 
   
      });
});

var providerFacebook = new firebase.auth.FacebookAuthProvider();

$('#flogin').click(function(){
  firebase.auth().
  signInWithPopup(providerFacebook)
     .then(function(result){
      console.log(result.user);
      $('#flogin').hide();
      guardarDatos(result.user);
      $('#root').append( result.user.displayName);
      $('#avatar').attr('src',result.userPhotoURL) 
      });
});

function guardarDatos(user){
  var usuarios= {
      uid     :user.uid,
      nombre  :user.displayName,
      email   :user.email,
      foto    :user.photoURL
  }
  firebase.database().ref(`taller05/Usuarios/${user.uid}`).set(usuarios)

}
