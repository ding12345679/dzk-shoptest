let goodImg=document.querySelector(".good-img");
let mask=document.querySelector(".mask")
let big=document.querySelector(".big")
//控制显示
goodImg.addEventListener("mouseover",function () {
    mask.style.display='block'
    big.style.display='block'
})
goodImg.addEventListener("mouseout",function () {
    mask.style.display='none'
    big.style.display='none'
})


goodImg.addEventListener('mousemove', function f(e) {
    let x=e.pageX-this.offsetLeft;
    let y=e.pageY-this.offsetTop;
    let maskWidth=x-mask.offsetWidth/2;
    let maskHeight=y-mask.offsetHeight/2;
    let maskMax=goodImg.offsetWidth-mask.offsetWidth;
    //限制左右
    if (maskWidth<=0){
        maskWidth=0;
    }
    else if(maskWidth>=maskMax){
        maskWidth=maskMax;
    }
    //限制上下
    if (maskHeight<=0){
        maskHeight=0;
    }
    else if(maskHeight>=maskMax){
        maskHeight=maskMax;
    }
    mask.style.left=maskWidth+'px'
    mask.style.top=maskHeight+'px'
    let bigImg=document.querySelector("#bigImg");
    let bigMax=bigImg.offsetWidth-big.offsetWidth;
    let bigX=maskWidth*bigMax/maskMax
    let bigY=maskHeight*bigMax/maskMax
    bigImg.style.left=-bigX+'px';
    bigImg.style.top=-bigY+'px'
});


//tab栏的切换
let ul=document.querySelector(".item-tab");
let lis=ul.children;
let tabContents=document.querySelector(".item-contents");
let content=tabContents.querySelectorAll("div")
console.log(content.length)
for (let i=0;i<lis.length;i++){
    lis[i].setAttribute('index',i);
    lis[i].addEventListener("click",function () {
       for (let j=0;j<lis.length;j++){
        lis[j].className=' ';
        this.className='defaultItem'
       }
       let index =this.getAttribute('index')
       for (let x=0;x<content.length;x++){
        content[x].style.display='none'
    }
       content[index].style.display='block'
   })
}
// 评论显示
let text=document.querySelector("#comment-text");
let btn=document.querySelector("#comment-btn")
let textArea=document.querySelector(".comments")
let dateType={
    countDown:function (time) {// time格式是“2022-11-21 0:0:0”
        let startTime= +new Date() ;// 获取当前时间秒数；利用秒来计算时间：1，不重复  2：避免02分-59分这种时间负数
        let endTime=+new Date(time)//将输入的时间点转化为秒
        let currentTimes=(endTime-startTime)/1000;//求出剩余秒数；接下来转化即可
        let d=parseInt(currentTimes /60/60/24);
        d= d<10?'0'+d:d;
        let h=parseInt(currentTimes /60/60%24);
        h= h<10?'0'+h:h;
        let m=parseInt(currentTimes / 60 % 60);
        m= m<10?'0'+m:m;
        let s=parseInt(currentTimes%60);
        s= s<10?'0'+s:s;
        return '还剩'+d+'天'+h+'时'+m+'分'+s+'秒'
    },
    getTimer:function () {
        let data=new Date();
        let h=data.getHours()
        h= h<10?'0'+h:h;
        let m=data.getMinutes()
        m= m<10?'0'+m:m;
        let s=data.getSeconds()
        s= s<10?'0'+s:s;
        return h+':'+m+':'+s
    }
}
btn.onclick=function () {
    console.log("点击")
    if (text.value==''){
        alert("不能输入空内容")
    }
    else {
//          创建节点
        let li=document.createElement("li");
        li.innerHTML=text.value+ '<span>&nbsp;&nbsp;&nbsp;&nbsp;'+dateType.getTimer()+'</span>'+'<a href="javaScript:;">删除</a>';//使a连接的href失效
//          添加节点
            textArea.appendChild(li);
//         textArea.insertBefore(li,textArea.children[0]);//两个参数：1是要插入的元素；2是要插入的位置
        text.value='';
        text.focus();
    }
    let as=document.querySelectorAll("a");
    for (let i=0;i<as.length;i++){
        as[i].onclick=function () {

            /*     if (as.length==0){
                     btn.disabled=true
                 }*/
            //删除自己的父亲
            // 删除li需要获取其自身的父亲
            textArea.removeChild(this.parentNode)//删除父亲节点
        }
    }

}