$(document).ready(function(){ //first get DOM

 var userTable = $('#users tbody'); //second declare variables ***other way to write: $('users').find('tbody')

 var nameField = $('#name');
 var emailField = $('#email');

 var add_btn = $('#add');
 var clearAll_btn = $('#clearAll');



 userTable.on('click', 'button.remove', function(){
     var btn = $(this);
     btn.parents("tr").remove();
 });


 add_btn.on('click', function(){       //third start to make functions

   addUser({
     name: nameField.val(),
     email: emailField.val()
   });

   nameField.val("");
   emailField.val("");

 });

function addUser(user) {

 var userRow = $(
   "<tr>" +
     "<td>" + user.name + "</td>" +
     "<td>" + user.email + "</td>" +
     "<td><button class= 'remove btn btn-primary btn-xs'>remove</button></td>" +
   "</tr>");

   userTable.append(userRow);


};




 clearAll_btn.on('click', function(){
   userTable.empty();
 });



});
