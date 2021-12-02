import {fadeIn} from "./fadeInFadeOut.js";
import {fadeOut} from "./fadeInFadeOut.js";

export const tabHandler = () => {
    const tabs = document.querySelectorAll('.tabs li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            let content = tab.hash.replace('#/', '');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
            document.getElementById('content').querySelectorAll('p').forEach(elem => {
                fadeOut(elem, 200)
            })
            setTimeout(() => {
                fadeIn(document.getElementById(content), 200)
            }, 202);
        });
    });
}