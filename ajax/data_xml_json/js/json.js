window.addEventListener("load", () => {
    const studentsContainer = document.getElementById("students-container");

    const xhr = new XMLHttpRequest();
    xhr.open("get", "./server/getStudents.php", true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const result = JSON.parse(xhr.responseText);
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    let tr = document.createElement("tr");
                    const name = result[i].name;
                    const age = result[i].age;
                    const sex = result[i].sex;

                    tr.innerHTML = "<td>" + name + "</td><td>" + age + "</td><td>" + sex + "</td>";
                    studentsContainer.appendChild(tr);
                }
            }
        }
    };
})