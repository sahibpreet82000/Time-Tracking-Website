function change() {
  let c = document.querySelector(".desktop-grid");
  c.innerHTML = ` <div class="grid expand">
<div class="info">
  <img src="/images/image-jeremy.png" alt="" />
  <h4>Report for</h4>
  <p>JEREMY ROBSON</p>
</div>
<div class="link-set">
  <ul>
    <li><a href="#" onclick="change()"> Daily</a></li>
    <li><a href="#" onclick="change2()">Weekly</a></li>
    <li><a href="#" onclick="change3()">Monthly</a></li>
  </ul>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box">
    <img src="./images/icon-work.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Work <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>5 hrs</p>
    <h3>Last Week- 7hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-play">
    <img src="./images/icon-play.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Play <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>1 hrs</p>
    <h3>Last Week- 2hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-study">
    <img src="./images/icon-study.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Study <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>0 hrs</p>
    <h3>Last Week- 1hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-exercise">
    <img src="./images/icon-exercise.svg" alt="" />
  </div>
  <div class="main-box2 main-box">
    <h2>
      Exercise <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>1 hrs</p>
    <h3>Last Week- 4hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-social">
    <img src="./images/icon-social.svg" alt="" />
  </div>
  <div class="main-box3 main-box">
    <h2>
      Social
      <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>1 hrs</p>
    <h3>Last Week- 3hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-selfcare">
    <img src="./images/icon-self-care.svg" alt="" />
  </div>
  <div class="main-box2 main-box">
    <h2>
      Self Care
      <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>0 hrs</p>
    <h3>Last Week- 1-2hrs</h3>
  </div>
</div>
</div>`;
let rem = document.getElementById('bold');
rem.removeAttribute('id');
}
function change2() {
  let c = document.querySelector(".desktop-grid");
  c.innerHTML = ` <div class="grid expand">
<div class="info">
  <img src="/images/image-jeremy.png" alt="" />
  <h4>Report for</h4>
  <p>JEREMY ROBSON</p>
</div>
<div class="link-set">
  <ul>
    <li><a href="#" onclick="change()"> Daily</a></li>
    <li><a href="#" onclick="change2()">Weekly</a></li>
    <li><a href="#" onclick="change3()">Monthly</a></li>
  </ul>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box">
    <img src="./images/icon-work.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Work <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>32 hrs</p>
    <h3>Last Week- 36hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-play">
    <img src="./images/icon-play.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Play <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>10 hrs</p>
    <h3>Last Week- 8hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-study">
    <img src="./images/icon-study.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Study <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>4 hrs</p>
    <h3>Last Week- 7hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-exercise">
    <img src="./images/icon-exercise.svg" alt="" />
  </div>
  <div class="main-box2 main-box">
    <h2>
      Exercise <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>4 hrs</p>
    <h3>Last Week- 5hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-social">
    <img src="./images/icon-social.svg" alt="" />
  </div>
  <div class="main-box3 main-box">
    <h2>
      Social
      <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>5 hrs</p>
    <h3>Last Week- 10hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-selfcare">
    <img src="./images/icon-self-care.svg" alt="" />
  </div>
  <div class="main-box2 main-box">
    <h2>
      Self Care
      <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>2 hrs</p>
    <h3>Last Week- 2hrs</h3>
  </div>
</div>
</div>`;
let rem = document.getElementById('bold');
rem.removeAttribute('id');
}
function change3() {
  let c = document.querySelector(".desktop-grid");
  c.innerHTML = ` <div class="grid expand">
<div class="info">
  <img src="/images/image-jeremy.png" alt="" />
  <h4>Report for</h4>
  <p>JEREMY ROBSON</p>
</div>
<div class="link-set">
  <ul>
    <li><a href="#" onclick="change()"> Daily</a></li>
    <li><a href="#" onclick="change2()">Weekly</a></li>
    <li><a href="#" onclick="change3()">Monthly</a></li>
  </ul>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box">
    <img src="./images/icon-work.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Work <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>103 hrs</p>
    <h3>Last Week- 128hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-play">
    <img src="./images/icon-play.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Play <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>23 hrs</p>
    <h3>Last Week- 29hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-study">
    <img src="./images/icon-study.svg" alt="" />
  </div>
  <div class="main-box">
    <h2>
      Study <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>13 hrs</p>
    <h3>Last Week- 19hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-exercise">
    <img src="./images/icon-exercise.svg" alt="" />
  </div>
  <div class="main-box2 main-box">
    <h2>
      Exercise <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>11 hrs</p>
    <h3>Last Week- 18hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-social">
    <img src="./images/icon-social.svg" alt="" />
  </div>
  <div class="main-box3 main-box">
    <h2>
      Social
      <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>21 hrs</p>
    <h3>Last Week- 23hrs</h3>
  </div>
</div>
</div>
<div class="grid">
<div class="box">
  <div class="image-box background-selfcare">
    <img src="./images/icon-self-care.svg" alt="" />
  </div>
  <div class="main-box2 main-box">
    <h2>
      Self Care
      <span><i class="fas fa-ellipsis-h"></i></span>
    </h2>
    <p>7 hrs</p>
    <h3>Last Week- 11hrs</h3>
  </div>
</div>
</div>`;
let rem = document.getElementById('bold');
if(rem.hasAttribute('id')){
  rem.removeAttribute('id');
}
}

function remove(){

}