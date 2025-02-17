let container = document.getElementById("container");
let fetchBtn = document.getElementById("fetchApi");

function fetchData() {
    let ans = fetch('https://jsonplaceholder.typicode.com/todos')

    ans
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            data.forEach(item => {
                let div = document.createElement("div");
                let h3 = document.createElement("h3");
                let checkbox = document.createElement("input");
                let label = document.createElement("label");

                div.className = "content";
                h3.innerText = item.title;
                checkbox.type = 'checkbox';
                checkbox.checked = item.completed;
                checkbox.disabled = true; 
                div.appendChild(h3);
                div.appendChild(checkbox);
                div.appendChild(label);
                container.appendChild(div);
            })
        })
        .catch(err => {
            console.log(err);
        })
}

fetchBtn.addEventListener("click", fetchData);