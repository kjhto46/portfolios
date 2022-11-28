import dataName from "./ajax.js";

let page = 0;
const pageSize = 6;
const jsonData = [...dataName]; // 불러온 JSON 데이터
// console.log("jsonData: ", jsonData);

function onAddList() {
    if (Math.ceil(jsonData.length / pageSize) < page + 1) {
        return;
    }

    if (Math.ceil(jsonData.length / pageSize) === 0) {
        return;
    }

    jsonData.forEach((element, index) => {
        if (index >= page * 6 && (page + 1) * 6 > index) {
            document.querySelector(".projectList").innerHTML += `
                    <li>
                        <figure>
                            <img src="${element.img}" alt="${element.subject}">
                        </figure>
                        <h2>${element.subject}${index}</h2>
                        <p>${element.subtxt}</p>
                        <a href="${element.link}">링크 이동</a>
                    </li>
                `;
        }
    });
    page += 1;
}

document.getElementById("addBtn").addEventListener("click", onAddList);