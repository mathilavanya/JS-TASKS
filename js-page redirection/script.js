let arr = [];
let editText;
let obj = {};

window.onload = () => {
  Edit();
};

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

  if (name == "" || password == "") {
    return false;
  }

  let obj = { name, password };
  if (editText != undefined) {
    console.log(editText);
    arr[editText].name = document.getElementById("name").value;
    arr[editText].password = document.getElementById("password").value;
  } else {
    arr.push(obj);
  }

  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.replace(`list.html`);
}

function Edit() {
  var url_string = window.location.href.toLocaleLowerCase();
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  editText = id;
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  console.log(editText);
  if(id){
    document.getElementById("name").value = arr[id].name;
    document.getElementById("password").value = arr[id].password;
  
  }
}
