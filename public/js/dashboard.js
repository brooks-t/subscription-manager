const title = document.querySelectorAll('#subTitle');
const div = document.querySelectorAll("#iconDiv");

for (i = 0; i < title.length; i++) {
    const firstLetter = title[i].innerHTML.charAt(0)
    div[i].append(firstLetter)
}