/* 注册登录栏的切换 */
let tab=document.querySelector("#check")
let lis=tab.querySelectorAll("li")
let items=document.getElementsByClassName("item")
for (var i=0;i<lis.length;i++){
    lis[i].setAttribute("index",i);
    lis[i].onclick=function () {
            for (let j=0;j<lis.length;j++){
                lis[j].className='tab'}
             this.className=" tab checked"
            let index= this.getAttribute("index")
            for(let i=0;i<items.length;i++){
                items[i].style.display="none"
            }
            items[index].style.display="block"
            }
        }

// 用户名和密码头像的点击变化

let huser=document.querySelector(".userIcon")
let flag=true
huser.onclick=function(){
    if(flag){
    this.className="up userIconClick"   
        flag=false;
        }
else{
    this.className="up userIcon"
    flag=true;  
    }
}

let puser=document.querySelector(".pwdIcon")
puser.onclick=function(){
    if(flag){
        this.className="up pwdIconClick"   
            flag=false;
            }
    else{
        this.className="up pwdIcon"
        flag=true;  
        }
}