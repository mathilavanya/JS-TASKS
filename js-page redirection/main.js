window.onload = () => {
  table0();
};

let arr = [];
let editText;
let obj = {};

function table0() {
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  let l = "";
  for (let i = 0; i < arr.length; i++) {
    l += "<tr>";
    l += "<td>" + arr[i].name + "</td>";
    l += "<td>" + arr[i].password + "</td>";
    l +=
      '<td><button type="button" class="btn btn-success px-4 mt-0"  onclick="Edit(' +
      i + 
      ')">Edit</button>  <button type="button" class="space btn btn-danger mt-0 mx-0" onclick="Delete(' +
      i +
      ')">Delete</button></td>';
    l += "</tr>";
  }

  document.getElementById("dataTbl").innerHTML = l;
}

function Edit(id) {

  window.location.href = "index.html?id=" + id;
 
}

function button() {
    window.location.replace(`index.html`);

}

function Delete(id) {
  arr.splice(id, 1);
  localStorage.setItem("arr", JSON.stringify(arr));
  table0();
}
