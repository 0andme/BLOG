const postlist_btn = document.querySelector(".postListBtn");
const ulList = document.querySelector("ul.table-of-contents-list");
postlist_btn.style.cursor="pointer";
postlist_btn.addEventListener('click', function () {

    if (ulList.style.display === "none") {
        ulList.style.display = "block";
        postlist_btn.textContent="글 목록 닫기";
    } else {
        ulList.style.display = "none";
        postlist_btn.textContent="글 목록 펼치기";

    }
})