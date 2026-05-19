const form = document.getElementById("leaveForm");

const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const empId = document.getElementById("empId").value;

    const name = document.getElementById("name").value;

    const leaveType = document.getElementById("leaveType").value;

    const fromDate = document.getElementById("fromDate").value;

    const toDate = document.getElementById("toDate").value;

    const row = document.createElement("tr");

    row.innerHTML = `

        <td>${empId}</td>
        <td>${name}</td>
        <td>${leaveType}</td>
        <td>${fromDate}</td>
        <td>${toDate}</td>

        <td>
            <button onclick="deleteLeave(this)">
                Delete
            </button>
        </td>

    `;

    tableBody.appendChild(row);

    form.reset();

});

function deleteLeave(button){

    button.parentElement.parentElement.remove();

}