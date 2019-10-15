const btn = document.getElementById('btn');
const result = document.getElementById('result');
//点击开始出现比分
const score = document.getElementById('score');

//人出石头剪刀布
const userrock = document.getElementById('imgs');
const userscissors = document.getElementById('imgj');
const userpaper = document.getElementById('imgb');
//比分
const user = document.getElementById('user');
const comp = document.getElementById('comp');
let users = 0;
let comps = 0;


let start = 0;


//开始
btn.addEventListener('click', function() {
    btn.style.display = 'none';
    score.style.visibility = 'visible';
    ++start;
})

//石头剪刀布
//电脑计算按0, 1，2，比较
//石头为0，剪刀为1， 布为2
userrock.onclick = function() {
    if (start == 1) {
        let compps = Math.floor(Math.random()*3);
        if (compps == 2) {
            result.innerText = '哦，好遗憾，你输了！';
            result.style.color = 'olivedrab';
            comp.innerText = ++comps;
            userrock.style.borderColor = 'olivedrab';
            setTimeout(() => userrock.style.borderColor = 'cadetblue', 1000)
        } else if (compps == 1) {
            result.innerText = '你赢了，恭喜！';
            result.style.color = 'lightcoral';
            user.innerText = ++users;
            userrock.style.borderColor = 'lightcoral';
            setTimeout(() => userrock.style.borderColor = 'cadetblue', 1000)
        } else {
            result.innerText = '平局！再来一次吧！';
            result.style.color = 'white';
    
        }
    } else {
        alert('请按开始。')
    }
}
//剪刀
userscissors.onclick = function() {

    if (start == 1) {
        let compps = Math.floor(Math.random()*3);
        if (compps == 2) {
            result.innerText = '你赢了，恭喜！';
            result.style.color = 'lightcoral';
            user.innerText = ++users;
            userscissors.style.borderColor = 'lightcoral';
            setTimeout(() => userscissors.style.borderColor = 'cadetblue', 1000)
        } else if (compps == 1) {
            result.innerText = '哦，好遗憾，你输了！';
            result.style.color = 'olivedrab';
            comp.innerText = ++comps;
            userscissors.style.borderColor = 'olivedrab';
            setTimeout(() => userscissors.style.borderColor = 'cadetblue', 1000)
        } else {
            result.innerText = '平局！再来一次吧！';
            result.style.color = 'white';
    
        }
        console.log(compps)
    } else {
        alert('请按开始。')
    }
}
//布
userpaper.onclick = function() {
    if (start == 1) {
        let compps = Math.floor(Math.random()*3);
        if (compps == 2) {
            result.innerText = '平局！再来一次吧！';
            result.style.color = 'white';
        } else if (compps == 1) {
            result.innerText = '哦，好遗憾，你输了！';
            result.style.color = 'olivedrab';
            comp.innerText = ++comps;
            userpaper.style.borderColor = 'olivedrab';
            setTimeout(() => userpaper.style.borderColor = 'cadetblue', 1000)
        } else {
            result.innerText = '你赢了，恭喜！';
            result.style.color = 'lightcoral';
            user.innerText = ++users;
            userpaper.style.borderColor = 'lightcoral';
            setTimeout(() => userpaper.style.borderColor = 'cadetblue', 1000)
    
        }
        console.log(compps)
    } else {
        alert('请按开始。')
    }
}
console.log('ok')