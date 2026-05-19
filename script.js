const form = document.getElementById("leaveForm");
const tableBody = document.getElementById("tableBody");

let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

displayLeaves();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const leave = {
        empId: document.getElementById("empId").value,
        name: document.getElementById("name").value,
        type: document.getElementById("leaveType").value,
        from: document.getElementById("fromDate").value,
        to: document.getElementById("toDate").value
    };

    leaves.push(leave);

    localStorage.setItem("leaves", JSON.stringify(leaves));

    displayLeaves();

    form.reset();
});

function displayLeaves() {
    tableBody.innerHTML = "";

    leaves.forEach((leave, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${leave.empId}</td>
                <td>${leave.name}</td>
                <td>${leave.type}</td>
                <td>${leave.from}</td>
                <td>${leave.to}</td>
                <td>
                    <button onclick="deleteLeave(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteLeave(index) {
    leaves.splice(index, 1);

    localStorage.setItem("leaves", JSON.stringify(leaves));

    displayLeaves();
}