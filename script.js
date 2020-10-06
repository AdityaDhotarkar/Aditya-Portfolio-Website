// alert("hello")

function sidebarToggle() {
    // alert("sucess");
    let sidebar = document.getElementById("menu");
    let button = document.getElementById("toggle");
    if (sidebar.classList.contains('open-sidebar') == true) {
        button.classList.remove("marginLeft");
        sidebar.classList.remove("open-sidebar");
    } else {
        button.classList.add("marginLeft");
        sidebar.classList.add("open-sidebar");
    }

}