import dataName from "./ajax.js";
// project 팝업
$(".projectList > li a").on({ // 팝업 열기
    "click": onProjectListPopup
});

function onProjectListPopup(e) {
    var src = $(this).data("src");
    var workpercent = $(this).data("wpercent");
    var stext = $(this).data("stext");
    var sdate = $(this).data("sdate");
    console.log('workpercent: ', workpercent);
    console.log('src: ', src);
    e.preventDefault();
    $("body").addClass("pop_on"); // body와 pop_wrap의 이중 스크롤 제거
    $(".pop_wrap").addClass("on");
    $(".pop_wrap .goWebsite").attr("href", src);
    $(".pop_wrap .percent").text(workpercent);
    $(".pop_wrap .tit").text(stext);
    $(".pop_wrap .tdate").text(sdate);
}

$(".ibtn_close").on({ // 팝업 닫기
    "click": function (e) {
        $("body").removeClass("pop_on");
        $(this).closest(".pop_wrap").removeClass("on");
        $(".pop_wrap iframe").attr("src", "");
    }
});

let page = 0;
const pageSize = 4;
const jsonData = [...dataName]; // 불러온 JSON 데이터
// console.log("jsonData: ", jsonData);

function onAddList() {
    if (Math.ceil(jsonData.length / pageSize) < page + 1) {
        document.getElementById("addBtn").style.display = "none";
        return;
    }

    if (Math.ceil(jsonData.length / pageSize) === 0) {
        document.getElementById("addBtn").style.display = "none";
        return;
    }

    jsonData.forEach((element, index) => {
        if (index >= page * pageSize && (page + 1) * pageSize > index) {
            document.querySelector(".projectList").innerHTML += `
                    <li>
                        <a href="javascript:void(0);" data-src="${element.link}" data-stext="${element.subject}" data-sdate="${element.subtxt}" data-wpercent="${element.percent}">
                            <figure>
                                <img src="${element.img}" alt="${element.subject}">
                            </figure>
                            <h2>${element.subject}</h2>
                            <p>${element.projuctType}</p>
                        </a>
                    </li>
                `;
        }
    });
    page += 1;
    $(".projectList > li a").off({ // 팝업 열기
        "click": onProjectListPopup
    });
    $(".projectList > li a").on({ // 팝업 열기
        "click": onProjectListPopup
    });
}

document.getElementById("addBtn").addEventListener("click", onAddList);