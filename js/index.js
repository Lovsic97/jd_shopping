// 实现模糊查询
let text = document.querySelector('.text');
let searchHelper = document.querySelector('.search-helper');
// 定义一个数组，存放模糊查询将要展示的东西
let searchArr = ['小米手机', '华为手机', '果手机', '小米电视', '小米平板', '苹果12', '苹果13”', '苹果手表'];
// 给输入框绑定内容改变事件
text.oninput = function() {
  searchHelper.innerHTML = '';
  for(var i = 0; i < searchArr.length; i++) {
    if(searchArr[i].indexOf(text.value) != -1) {
      searchHelper.innerHTML += '<p>' + searchArr[i] + '</p>';
      searchHelper.style.display = 'block';
    }
  }
}
text.onblur = function() {
  searchHelper.style.display = 'none';
}

// 实现左边导航栏选中哪条展示哪条的扩展页面
let cateLis = document.querySelectorAll('.cate_menu_item');
let catePart = document.querySelectorAll('.cate_part');
let catePop = document.querySelector('.cate_pop');
for(let i = 0; i < cateLis.length; i++) {
  cateLis[i].onmouseover = function() {
    catePop.style.display = 'block';
    catePart[i].style.display = 'block';
  }
  cateLis[i].onmouseout = function() {
    catePop.style.display = 'none';
    catePart[i].style.display = 'none';
  }
}

// 实现轮播图的切换
let img = document.querySelector('.img');
let preBtn = document.querySelector('.slide_pre');
let nextBtn = document.querySelector('.slide_next');
let slide = document.querySelector('.slideBanner');
let lis = document.querySelectorAll('.slide_bottom li');
let imgArr = ['1.avif', '2.jpg', '3.avif', '4.jpg', '5.avif', '6.jpg', '7.jpg', '8.jpg'];
let count = 0;
function changeImg() {
  img.src = './images/' + imgArr[count];
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = '';
  }
  lis[count].className = 'active';
}
// 图片切换
let timer = setInterval(function() {
  count++;
  if(count > imgArr.length - 1) {
    count = 0;
  }
  changeImg();
}, 3000)
// 按钮切换
nextBtn.onclick = function() {
  count++;
  if(count > imgArr.length - 1) {
    count = 0;
  }
  changeImg();
}
preBtn.onclick = function() {
  count--;
  if(count < 0) {
    count = imgArr.length - 1;
  }
  changeImg();
}
// 鼠标滑入划出效果
slide.onmouseover = function() {
  clearInterval(timer)
}
slide.onmouseout = function() {
  timer = setInterval(function() {
    count++;
    if(count > imgArr.length - 1) {
      count = 0;
    }
    changeImg();
  }, 3000)
}
// 小圆点切换
for(let i = 0; i < lis.length; i++) {
  lis[i].onmousemove = function() {
    count = i;
    changeImg();
  }
}

// 实现右边小轮播图效果
let rightSlidebtn = document.querySelectorAll('.slideRecommend button');
let slideRecommend = document.querySelector('.slideRecommend');
slideRecommend.onmouseenter = function() {
  rightSlidebtn[0].style.display = 'block';
  rightSlidebtn[1].style.display = 'block';
}
slideRecommend.onmouseleave = function() {
  rightSlidebtn[0].style.display = 'none';
  rightSlidebtn[1].style.display = 'none';
}
let rightSlideItem = document.querySelectorAll('.right_slide_item');
let index = 0;
// 清除所有的样式
function clearOpacity() {
  for(let i = 0; i < rightSlideItem.length; i++) {
    rightSlideItem[i].style.opacity = '0';
  }
}
// 左右按钮切换
rightSlidebtn[0].onclick = function() {
  if(index > 0) {
    clearOpacity();
    index -= 1;
    rightSlideItem[index].style.opacity = '1';
  } else {
    index = rightSlideItem.length - 1;
    clearOpacity();
    rightSlideItem[index].style.opacity = '1';
  }
}
rightSlidebtn[1].onclick = function() {
  if(index < rightSlideItem.length - 1) {
    clearOpacity();
    index += 1;
    rightSlideItem[index].style.opacity = '1';
  } else {
    index = 0;
    clearOpacity();
    rightSlideItem[index].style.opacity = '1';
  }
}
// 图片自动播放
let timerRight = setInterval(function(){
  if(index < rightSlideItem.length - 1) {
    clearOpacity();
    index += 1;
    rightSlideItem[index].style.opacity = '1';
  } else {
    index = 0;
    clearOpacity();
    rightSlideItem[index].style.opacity = '1';
  }
}, 4000)
// 鼠标移入不自动播放，移除自动播放
slideRecommend.onmouseover = function() {
  clearInterval(timerRight);
}
slideRecommend.onmouseout = function() {
  timerRight = setInterval(function(){
    if(index < rightSlideItem.length - 1) {
      clearOpacity();
      index += 1;
      rightSlideItem[index].style.opacity = '1';
    } else {
      index = 0;
      clearOpacity();
      rightSlideItem[index].style.opacity = '1';
    }
  }, 4000)
}


// 实现楼层效果
let as = document.querySelectorAll('.elevator_a');
let elevatorBox = document.querySelector('.elevator_box');
let elevatorTotop = document.querySelector('.elevator_totop');
as[0].onclick = function() {
  window.scrollTo( {
    top: 650, 
    behavior: 'smooth'   
  } )
}
as[1].onclick = function() {
  window.scrollTo( {
    top: 930, 
    behavior: 'smooth'   
  } )
}
as[2].onclick = function() {
  window.scrollTo( {
    top: 1930, 
    behavior: 'smooth'   
  } )
}
as[3].onclick = function() {
  window.scrollTo( {
    top: 2955, 
    behavior: 'smooth'   
  } )
}
elevatorTotop.onclick = function() {
  window.scrollTo( {
    top: 0,
    behavior: 'smooth'
  })
}
document.onscroll = function() {
  // 获取滚动条垂直方向滚动了多少
  let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
  if(scrollHeight >= 620) {
    elevatorBox.className = 'elevator_box elevator_fix'
    elevatorTotop.style.visibility = 'visible';
  } else {
    elevatorBox.className = 'elevator_box'
    elevatorTotop.style.visibility = 'hidden';
  }

  // 实现随着楼层滚动，文字变色效果
  let elevatorAs = document.querySelectorAll('.elevator_a');
  // 清除所有文字颜色函数
  function clearAllColor() {
    for(let i = 0; i < elevatorAs.length; i++) {
      elevatorAs[i].className = 'elevator_a';
    }
  }
  if(scrollHeight < 650) {
    clearAllColor();
  } else if(scrollHeight >= 650 && scrollHeight < 930) {
    clearAllColor();
    elevatorAs[0].className = 'elevator_a elevator_a_cur';
  } else if(scrollHeight >= 930 && scrollHeight < 1930) {
    clearAllColor();
    elevatorAs[1].className = 'elevator_a elevator_a_cur';
  } else if(scrollHeight >= 1930 && scrollHeight < 2955) {
    clearAllColor();
    elevatorAs[2].className = 'elevator_a elevator_a_cur';
  } else if(scrollHeight >= 2955) {
    clearAllColor();
    elevatorAs[3].className = 'elevator_a elevator_a_cur';
  }

  // 实现吸顶效果
  let searchXD = document.querySelector('#search');
  let searchM = document.querySelector('.search-m');
  let searchForm = document.querySelector('.form');
  let searchLogo = document.querySelector('.search-logo');
  let searchBtn = document.querySelector('.dropdown');
  if(scrollHeight > 650) {
    searchXD.className = 'search-fix'
    searchM.style.height = '50px';
    searchForm.style.top = '8px';
    searchBtn.style.top = '8px';
    searchLogo.style.display = 'block';
  } else {
    searchXD.className = '';
    searchM.style.height = '60px';
    searchForm.style.top = '25px';
    searchBtn.style.top = '25px';
    searchLogo.style.display = 'none';
  }
}


// 实现秒杀倒计时
let timerHour = document.querySelector('.timer_hour');
let timerMinute = document.querySelector('.timer_minute');
let timerSecond = document.querySelector('.timer_second');
let timeSum = 43200;
let hour = 0;
let minute = 0;
let second = 0;
let timerKill = setInterval(function() {
  if(timeSum > 0) {
    timeSum--;
  } else {
    timeSum = 43200;
  }
  hour = parseInt(timeSum / 60 / 60);
  hour = hour < 10 ? '0' + hour : hour;
  minute = parseInt(timeSum / 60 % 60);
  minute = minute < 10 ? '0' + minute : minute;
  second = parseInt(timeSum % 60);
  second = second < 10 ? '0' + second : second;
  timerHour.innerHTML = hour;
  timerMinute.innerHTML = minute;
  timerSecond.innerHTML = second;
}, 1000)

// 实现秒杀右边的轮播图
let sliderWrapper = document.querySelector('.slider_wrapper');
let killPreBtn = document.querySelector('.seckill-list .slide_pre');
let killNextBtn = document.querySelector('.seckill-list .slide_next');
let indexKill = -800;
let timeIndexKill = null;
// 右按钮
killNextBtn.onclick = function() {
  if(indexKill >= -2400) {
    indexKill -= 800;
    sliderWrapper.style.transition = 'transform 500ms ease-in-out 0s';
    sliderWrapper.style.transform = 'translate(' + indexKill + 'px, 0px)';
  }
  if(indexKill == -2400) {
    setTimeout(function() {
      indexKill = -800;
      sliderWrapper.style.transition = '';
      sliderWrapper.style.transform = 'translate(' + indexKill + 'px, 0px)';
    }, 500)   // 等待500毫秒将动画执行完毕，再修改动画效果跳转到第一页
  }
}
// 左按钮
killPreBtn.onclick = function() {
  if(indexKill >= -2400) {
    indexKill += 800;
    sliderWrapper.style.transition = 'transform 500ms ease-in-out 0s';
    sliderWrapper.style.transform = 'translate(' + indexKill + 'px, 0px)';
  }
  if(indexKill == 0) {
    setTimeout(function() {
      indexKill = -1600;
      sliderWrapper.style.transition = '';
      sliderWrapper.style.transform = 'translate(' + indexKill + 'px, 0px)';
    }, 500)   // 等待500毫秒将动画执行完毕，再修改动画效果跳转到第一页
  }
}

// 实现自动从左往右播放功能
let goodsContainer = document.querySelector('.goods_container');
let leftSteps = 0;
let timerGoods = setInterval(function() {
  if(leftSteps > -1980) {
    leftSteps -= 1;
  } else {
    leftSteps = 0;
  }
  goodsContainer.style.left = leftSteps + 'px';
}, 13)
goodsContainer.onmouseover = function() {
  clearInterval(timerGoods);
}
goodsContainer.onmouseout = function() {
  timerGoods = setInterval(function() {
    if(leftSteps > -1980) {
      leftSteps -= 1;
    } else {
      leftSteps = 0;
    }
    goodsContainer.style.left = leftSteps + 'px';
  }, 13)
}
