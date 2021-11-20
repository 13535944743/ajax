window.addEventListener("load", () => {
    const booksContainer = document.getElementById("books-container");

    let xhr = new XMLHttpRequest();
    xhr.open("get", "./server/getBooks.php", true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const result = xhr.responseXML;
                const books = result.getElementsByTagName("book");

                for (let i = 0; i < books.length; i++) {
                    let tr = document.createElement("tr");

                    for (let j = 0; j < books[i].children.length; j++) {
                        let td = document.createElement("td");
                        td.innerHTML = books[i].children[j].innerHTML;
                        tr.appendChild(td);
                    }

                    // let name = books[i].querySelector("name");
                    // let td1 = document.createElement("td");
                    // td1.innerHTML = name.innerHTML;

                    // let author = books[i].querySelector("author");
                    // let td2 = document.createElement("td");
                    // td2.innerHTML = author.innerHTML;

                    // let desc = books[i].querySelector("desc");
                    // let td3 = document.createElement("td");
                    // td3.innerHTML = desc.innerHTML;

                    // tr.appendChild(td1);
                    // tr.appendChild(td2);
                    // tr.appendChild(td3);
                    booksContainer.appendChild(tr);
                }
            }
        }
    }
})