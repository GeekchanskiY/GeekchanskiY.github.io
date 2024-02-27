//
// PAGE CHANGE LOGIC
//

CURRENT_PAGE = 1

MIN_PAGE = 1
MAX_PAGE = 3

left_arrow = document.getElementById('left_page_arrow')
right_arrow = document.getElementById('right_page_arrow')

page_1 = document.getElementById('screen1')
page_2 = document.getElementById('screen2')
page_3 = document.getElementById('screen3')

function switch_page (num) {
    if (CURRENT_PAGE + num > MAX_PAGE){
        CURRENT_PAGE = MIN_PAGE
    } else if (CURRENT_PAGE + num < MIN_PAGE) {
        CURRENT_PAGE = MAX_PAGE
    } else {
        CURRENT_PAGE += num
    }
    alert(CURRENT_PAGE)
}

left_arrow.onclick = function(e) {
    console.log('Left page triggered')
    switch_page(-1)
}

right_arrow.onclick = function(e){
    console.log('Right page triggered')
    switch_page(1)
}