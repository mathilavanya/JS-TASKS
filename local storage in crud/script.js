let arr = [];
let editText;
let obj={};

window.onload=()=>{
  arr=JSON.parse(localStorage.getItem('arr'))
}
function submit() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

   
  if (name == "") {
    document.getElementById("name1").innerHTML = "Name required!";
  } else {
    document.getElementById("name1").innerHTML = "";
  }
  if (password == "") {
    document.getElementById("name2").innerHTML = "Password required!";
  } else {
    document.getElementById("name2").innerHTML = "";
  }

  if (
    name == "" || 
    password == "" ) {
    return false;
  }

  table1();
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  
}
  function table0(){
    arr = JSON.parse(localStorage.getItem('arr'))||[]
    console.log(arr)
  let l = "";
  for (i=0; i<arr.length; i++) {
    l += "<tr>";
    l += "<td>" + arr[i].name + "</td>";
    l += "<td>" + arr[i].password + "</td>";
    l += '<td><button type="button" class="btn btn-success" onclick="Edit(' +i +')">Edit</button>  <button type="button" class="btn btn-danger" onclick="Delete('+i+')">Delete</button></td>';
    l += "</tr>";
  }

  document.getElementById("dataTbl").innerHTML = l;


}
function table1() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
 
  let obj = { name, password };
  console.log(obj);
  
 

  if (editText != undefined) {
    arr[editText].name =obj.name;
    arr[editText].password =obj.password;
    
  } else {
    arr.push(obj);
  }
  localStorage.setItem("arr",JSON.stringify(arr));

  table0();
}
  function Edit(id) {
    editText = id;
    console.log(editText);
    document.getElementById("name").value = arr[id].name;
    document.getElementById("password").value = arr[id].password;
  }

  function Delete(id) {
    arr.splice(id, 1);
    console.log(id);
    localStorage.setItem("arr",JSON.stringify(arr));
    table0();
  }




