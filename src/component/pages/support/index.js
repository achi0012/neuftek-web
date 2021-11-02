import React from "react";

export default function Support() {
  const navbarList = [
    {
      title:'常見問題',
      navbars:[
        {id:'normal-help',name:'如何尋求協助'}
      ]
    },
    {
      title:'關於諾克',
      navbars:[
        {id:'about-neuftek',name:'？'},
        {id:'about-addr',name:'addr'}
      ]
    },
    {
      title:'關於LOWI',
      navbars:[
        {id:'lowi-start',name:'如何開始LOWI'}
      ]
    },
    {
      title:'專業術語',
      navbars:[
        {id:'tech-diffusion',name:'擴散度是？'}
      ]
    }
  ]

  const question = [
    {id:'normal-help',name:'如何尋求協助',content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aperiam laboriosam quasi accusantium repudiandae quos? Delectus ullam suscipit tempora perferendis?'},
    {id:'about-neuftek',name:'？',content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aperiam laboriosam quasi accusantium repudiandae quos? Delectus ullam suscipit tempora perferendis?'},
    {id:'about-addr',name:'addr',content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aperiam laboriosam quasi accusantium repudiandae quos? Delectus ullam suscipit tempora perferendis?'},
    {id:'lowi-start',name:'如何開始LOWI',content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aperiam laboriosam quasi accusantium repudiandae quos? Delectus ullam suscipit tempora perferendis?'},
    {id:'tech-diffusion',name:'擴散度是？',content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aperiam laboriosam quasi accusantium repudiandae quos? Delectus ullam suscipit tempora perferendis?'},
  ]

  return (
    <div className="support">
      <div className="support-banner">
        <div className="banner-title">諾客支援服務</div>
        <hr className="banner-underline" />
        {/* <div className="banner-describe">您能從以下標題迅速分類出您的問題</div> */}
      </div>
      <div className="support-body row flex-row">
        <div className="support-container">
          <div className="support-title">
            <div className="title"><span>遇到</span>困難了嗎？</div>
            <div className="subtitle">詳細請參閱以下說明，諾克隨時歡迎您的詢問。</div>
          </div>
          {question.map((item,i)=>{
            return(
              <article className="question" id={item.id} key={i}>
                <div className="question-title">
                  {item.name}
                </div>
                <div className="question-content">
                  {item.content}
                </div>
              </article>
            )
          })}
        </div>
        <nav className="support-navbar-list">
          {navbarList.map((obj,i)=>{
            return(
              <ul className="navbar-layout" key={i}>
                <div className="navbar-title">
                  {obj.title}
                </div>
                {obj.navbars.map((nav,index)=>{
                  return(
                    <li className='nav-item' key={index}>
                      <a href={'#'+nav.id} className="nav-title">{nav.name}</a>
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </nav>
      </div>
    </div>
  );
}
