const postlist_btn = document.querySelector(".postListBtn");
const ulList = document.querySelector("ul.table-of-contents-list");
postlist_btn.style.cursor = "pointer";
postlist_btn.addEventListener('click', function () {

    if (ulList.classList.contains("visual")) {

        ulList.classList.remove("visual");
        postlist_btn.textContent = "글 목록 펼치기";

    } else {
        ulList.classList.add("visual");
        postlist_btn.textContent = "글 목록 닫기";

    }

})