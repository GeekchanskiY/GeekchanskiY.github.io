//
// PAGE CHANGE LOGIC
//

CURRENT_PAGE = 0

MIN_PAGE = 1
MAX_PAGE = 6

left_arrow = document.getElementById('left_page_arrow')
right_arrow = document.getElementById('right_page_arrow')

hide_all_button = document.getElementById('go_back')

page_1 = document.getElementById('screen1')
page_2 = document.getElementById('screen2')
page_3 = document.getElementById('screen3')
page_4 = document.getElementById('screen4')
page_5 = document.getElementById('screen5')
page_6 = document.getElementById('screen6')

pages_list = [page_1, page_2, page_3, page_4, page_5, page_6]

// Go to main page:
hide_all_button.onclick = function(e){
    pages_list.forEach(element => {
        element.classList.add('hidden-screen')
    });
}

// Switch page logic
function switch_page (num) {

    // Select current page
    if (CURRENT_PAGE + num > MAX_PAGE){
        CURRENT_PAGE = MIN_PAGE
    } else if (CURRENT_PAGE + num < MIN_PAGE) {
        CURRENT_PAGE = MAX_PAGE
    } else {
        CURRENT_PAGE += num
    }
    console.log('Current page: ' + CURRENT_PAGE)

    // Apply page
    for (let index = 0; index < pages_list.length; index++) {
        if (index + 1 == CURRENT_PAGE){
            pages_list[index].classList.remove('hidden-screen')
        } else {
            pages_list[index].classList.add('hidden-screen')
        }
        
    }
}


left_arrow.onclick = function(e) {
    console.log('Left page triggered')
    switch_page(-1)
}

right_arrow.onclick = function(e){
    console.log('Right page triggered')
    switch_page(1)
}