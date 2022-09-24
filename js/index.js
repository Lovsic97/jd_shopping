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





