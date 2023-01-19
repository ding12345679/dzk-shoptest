//倒计时
let hour=document.querySelector("#hour")
let minute=document.querySelector("#minute")
let second=document.querySelector("#second")
let endTimeText=document.querySelector("#end-time")
date="2029-1-16 23:59 "//
let endTime=+new Date(date);//将输入的时间点转化为秒
endTimeText.innerHTML=date.substr(10,6);
 countDown();//避免刷白后显示初始值
    let a= setInterval(countDown,1000);
  function countDown() {// time格式是“2022-11-21 0:0:0”
      if (second.innerText!=="00"){
      let startTime= +new Date() ;// 获取当前时间秒数；利用秒来计算时间：1，不重复  2：避免02分-59分这种时间负数
      let currentTimes=(endTime-startTime)/1000;//求出剩余秒数；接下来转化即可
      let h=parseInt(currentTimes /60/60%24);
      h= h<10?'0'+h:h;
      hour.innerText=h;
      let m=parseInt(currentTimes / 60 % 60);
      m= m<10?'0'+m:m;
      minute.innerText=m;

      let s=parseInt(currentTimes%60);
          if (s<=0){
              minute.innerText="00"
              second.innerText="00"
              clearInterval(a);
          }
      s= s<10?'0'+s:s;
      second.innerText=s;
      }
      else
          clearInterval(a);
  }
//轮播图
let lbt=document.querySelector(".fs_col1")
let ul=lbt.querySelector("ul")
let ol=document.querySelector(".circle")
let lis=ol.children
let jt=lbt.querySelectorAll(".s")
let focusWidth=720;
let num=0;
let circleSum=0;
    lbt.addEventListener("mouseover",function () {
        for (let i=0;i<jt.length;i++)
        jt[i].style.display='block'
        clearInterval(timmer)
        timmer=null
    })
lbt.addEventListener("mouseout",function () {
    for (let j=0;j<jt.length;j++)
    jt[j].style.display='none'
     timmer=setInterval(function () {
        r.click();
    },2000)
})

for (let x=0;x<ul.children.length;x++) {
    let li= document.createElement('li');
    li.setAttribute('index', x);
    ol.appendChild(li)
    }
    ol.children[0].className='current'
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover", function () {
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = ' '
            }
            this.className = 'current'
            let index=this.getAttribute('index')
            num=index
            circleSum=index
            animate(ul,-index*focusWidth)
        })
    }
    let r=document.querySelector("#r")
let l=document.querySelector("#l")

    //  右侧按钮
    r.addEventListener('click',function () {
        num++;
            animate(ul, -num * focusWidth);
            if (num>=ul.children.length){
                animate(ul,  0);
                num=0;
            }
            circleSum++;
            circleSum=circleSum>=ul.children.length?circleSum=0:circleSum
        circleChange();
    })
// 左侧按钮
l.addEventListener('click',function () {

    if (num===0){
        num=ul.children.length;
        ul.style.left=num*focusWidth+'px';
    }
    num--;
    animate(ul,-num*focusWidth)
    circleSum--;
    circleSum=circleSum<0?circleSum=ol.children.length-1:circleSum
    circleChange();
})
function circleChange(){
    for(let i=0;i<ol.children.length;i++){
        ol.children[i].className=''
    }
    ol.children[circleSum].className='current';
}
//    自动播放
let timmer=setInterval(function () {
    r.click();
},2000)
//定浮动+延申 固定高度显示导航栏
let dingFloat=document.querySelector(".dingFloat");
 document.addEventListener('scroll',function () {
    if (window.pageYOffset>=520){
        dingFloat.style.position='fixed'

    }
    else
        dingFloat.style.position='absolute'
        dingFloat.style.top='215px'
})
