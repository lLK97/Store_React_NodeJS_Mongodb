/// count button
export const SHOW_HIDE_ELE = (dropdown__toggle, dropdown__content, name) => {
    document.addEventListener('mousedown', (e) => {
        if (dropdown__toggle.current && dropdown__toggle.current.contains(e.target)) {
            dropdown__content.current.classList.toggle(name);
        } else {
            if (dropdown__content.current && !dropdown__content.current.contains(e.target)) {
                dropdown__content.current.classList.remove(name);
            }
        }
    })
}

export const SHOW_NAVBAR = (bars, sideBar, active) => {
    document.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains(bars) && document.querySelector(sideBar).classList.contains(active)) {
            document.querySelector(sideBar).classList.remove(active);
        }
    })
}

export const HIDE_NAVBAR = (close, innnerClose, sideBar, active) => {
    document.addEventListener('mousedown', (e) => {
        if ((e.target.classList.contains(close) || e.target.classList.contains(innnerClose)) &&
            !document.querySelector(sideBar).classList.contains(active)) {
            document.querySelector(sideBar).classList.add(active);
        }
    })
}

export const DROPDOWN_SUGGEST_BOX = (dropdownToggle, dropdownContent, name) => {
    document.addEventListener('mousedown', (e) => {
        if (dropdownToggle.current && dropdownToggle.current.contains(e.target)) {
            dropdownContent.current.classList.toggle(name);
        } else {
            if (dropdownContent.current && !dropdownContent.current.contains(e.target)) {
                dropdownContent.current.classList.remove(name);
            }
        }
    })
}

export const DISPLAY_NAME_SIZE = (size_box, displayNameBox, active, current) => {
    const displayName = document.getElementsByClassName(displayNameBox);
    const size = document.getElementsByClassName(size_box);
    if (size[current].classList.contains(active)) { displayName[0].innerHTML = "Kich cỡ: " + size[current].innerText }
    console.log(size[current].innerText);
}


export const ACTIVE_SIZE_BOX = (size_box, displayNameBox, active) => {
    const ele = document.getElementsByClassName(size_box);
    for (let i = 0; i < ele.length; i++) {
        ele[i].addEventListener('mousedown', (e) => {
            if (!e.target.classList.contains(active)) {
                for (let i = 0; i < ele.length; i++) {
                    ele[i].classList.remove(active)
                }
                e.target.classList.add(active);
                DISPLAY_NAME_SIZE(size_box, displayNameBox, active, i);

            }
        })
    }
}
//  default Clickoutside;
