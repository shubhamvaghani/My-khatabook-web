var arr = [];


const addHandler = () => {
  const personName = document.getElementById("personName");
  const amount = document.getElementById("amount");
  const details = document.getElementById("amountDetails");
  const status = document.getElementById("status");

  const row_id = new Date().valueOf();
  const obj = {
    id: row_id,
    name: personName.value,
    amount: amount.value,
    details: details.value,
    status: status.value,
  };

  personName.value = "";
  amount.value = "";
  details.value = "";
  status.value = "";
  arr.push(obj);
  renderList();
  console.log(obj);
};

const deleteList = () => {
  // const table = document.getElementById("myTableBody");
  $("#myTableBody tr").remove();
};

const renderList = () => {
  deleteList();
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const table = document.getElementById("myTableBody");
    var row = table.insertRow();
    // row.setAttribute("id", row_id);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = i + 1;
    cell2.innerHTML = obj.name;
    cell3.innerHTML = obj.amount;
    cell4.innerHTML = obj.details;
    cell5.innerHTML = obj.status === "G" ? "Pending" : "Completed";
    cell6.innerHTML = `<button style="margin-right: 5px" class="btn btn-warning" onclick="updateHandler(${obj.id})" >Update</button>
	<button class="btn btn-danger" onclick="deleteHandler(${obj.id})" >Delete</button>`;
  }
};

const updateHandler = (id) => {
  console.log(id);
  modal.style.display = "block";
  const obj = arr.filter((item) => item.id === id)[0];

  console.log(obj);

  document.getElementById("personNameUpdate").value = obj.name;
  document.getElementById("amountUpdate").value = obj.amount;
  document.getElementById("amountDetailsUpdate").value = obj.details;
  document.getElementById("statusUpdate").value = obj.status;

  localStorage.setItem("id", id);
};

const updateTransaction = () => {
  const t_id = localStorage.getItem("id");
  localStorage.removeItem("id");

  const personNameUpdate = document.getElementById("personNameUpdate");
  const amountUpdate = document.getElementById("amountUpdate");
  const amountDetailsUpdate = document.getElementById("amountDetailsUpdate");
  const statusUpdate = document.getElementById("statusUpdate");

  arr.forEach((item) => {
    if (item.id == t_id) {
      item.name = personNameUpdate.value;
      item.amount = amountUpdate.value;
      item.details = amountDetailsUpdate.value;
      item.status = statusUpdate.value;
    }
  });

  renderList();
  modal.style.display = "none";
};

const deleteHandler = (id) => {
  arr = arr.filter((item) => item.id !== id);
  renderList();
};

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
