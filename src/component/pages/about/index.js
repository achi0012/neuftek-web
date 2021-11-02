import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">

      <section className="about-banner">
        <div className="banner-title">
          傾聽數據的聲音
        </div>
        <hr className="banner-underline" />
        <p className="banner-describe">
          Neuftek 一直以來致力於匯集處理網路上的各種資訊，我們提供穩定且值得信賴的數據解決方案，讓客戶能夠在當今快速發展的市場中找到自己的定位。
        </p>
      </section>

      <div className="about-body">

        <section className="what-we-do first-container container-layout">
          <div className="row flex-row">
            <div className="do-left">
              <div className='do-slogan pd-content'>Some Awesome Slogan</div>
              <div className='do-img pd-content'>
                <div className="fake-content"></div>
              </div>
              <div className="do-step pd-content">
                <div className="step">
                  <img src="" alt="" />
                  <div className="fake-content"></div>
                  {/* <div className="step-content">1</div> */}
                </div>
                <div className="step">
                  <img src="" alt="" />
                  <div className="fake-content"></div>
                  {/* <div className="step-content">2</div> */}
                </div>
                <div className="step">
                  <img src="" alt="" />
                  <div className="fake-content"></div>
                  {/* <div className="step-content">3</div> */}
                </div>
              </div>
            </div>
            <div className="do-right">
              <header className="article-title content-gap-mg">
                基於語意的自然語言處理
              </header>
              <p className="article-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates harum nesciunt soluta hic veritatis, rem voluptatum laboriosam provident accusamus ab vero doloremque incidunt ullam quam ad, numquam molestiae, pariatur dolor illo illum. Incidunt quisquam, qui quam voluptate quis minima numquam dolore doloribus iusto fuga, nisi veritatis dolorem, maiores eaque quod eum tenetur! Perspiciatis atque itaque ex ab laudantium cumque nostrum, dicta animi repudiandae adipisci nihil facilis ad perferendis deserunt dolor assumenda pariatur tempore nam ducimus nesciunt quas magnam accusantium. Nobis dolorum, illo sit fuga qui placeat mollitia incidunt quo ducimus earum, aspernatur fugit sunt. Officia vero nisi dignissimos repellat!
              </p>
            </div>
          </div>
        </section>

        <section className="how-we-dose container-layout">
          <div className="row flex-column">
            <header className="section-title bottom-gap-mg">我們的特色 / 願景 / 目標</header>
            <hr className='underline'/>
          </div>
          <div className="row flex-multi-row">
            <section className="feature">
              <figure figure className="feature-img">
                <div className="fake-content"></div>
              </figure> 
              <div className="feature-describe">
                <header className='detail-title content-gap-mg'>feature 1</header>
                <p className='detail-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur error, vel laudantium similique aliquid consequuntur ipsum necessitatibus quidem magni.</p>
              </div>
            </section>
            <section className="feature">
              <figure className="feature-img">
                <div className="fake-content"></div>
              </figure> 
              <div className="feature-describe">
                <header className='detail-title content-gap-mg'>feature 2</header>
                <p className='detail-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur error, vel laudantium similique aliquid consequuntur ipsum necessitatibus quidem magni.</p>
              </div>
            </section>
            <section className="feature">
              <figure className="feature-img">
                <div className="fake-content"></div>
              </figure> 
              <div className="feature-describe">
                <header className='detail-title content-gap-mg'>feature 3</header>
                <p className='detail-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur error, vel laudantium similique aliquid consequuntur ipsum necessitatibus quidem magni.</p>
              </div>
            </section>
            <section className="feature">
              <figure className="feature-img">
                <div className="fake-content"></div>
              </figure> 
              <div className="feature-describe">
                <header className='detail-title content-gap-mg'>feature 4</header>
                <p className='detail-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur error, vel laudantium similique aliquid consequuntur ipsum necessitatibus quidem magni.</p>
              </div>
            </section>
          </div>
        </section>

        <section className="about-solution container-layout">
          <div className="row flex-column">
            <section className="solution bottom-gap-mg">
              <article className="solution-describe">
                <header className="article-title">solution 1</header>
                <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum optio non cumque, architecto excepturi autem soluta officia, esse ullam, reprehenderit consequuntur voluptate nobis asperiores ex quisquam earum! Accusamus unde cupiditate quis aspernatur tempora omnis deserunt eos sunt alias inventore commodi ut aperiam cumque delectus pariatur nihil, necessitatibus voluptatem voluptatibus, voluptatum obcaecati sequi id? Sunt delectus quibusdam architecto commodi rerum harum perferendis at totam dignissimos dolores repudiandae, aut sit? Veritatis quis dolor nulla adipisci commodi?</p>
              </article>
              <figure className="solution-img">
                <div className="fake-content"></div>
              </figure>
            </section>
            <section className="solution bottom-gap-mg">
              <figure className="solution-img">
                <div className="fake-content"></div>
              </figure>
              <article className="solution-describe">
                <header className="article-title">solution 2</header>
                <p className="article-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quaerat! Vero quidem, vel nihil reiciendis quos accusantium natus eaque dolorum, numquam voluptates cumque incidunt minima nobis, alias voluptatum voluptatibus eveniet neque culpa at ullam consequatur vitae odio. Vel aspernatur soluta nisi quam perspiciatis, repellendus voluptas impedit exercitationem labore, dolorem voluptate illo fugiat! Blanditiis odio in distinctio quod, libero ex delectus non iure hic facilis ullam aspernatur quis et, quos modi sint. Qui possimus saepe aut.</p>
              </article>
            </section>
            <section className="solution">
              <article className="solution-describe">
                <header className="article-title">solution 3</header>
                <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio inventore voluptatibus fuga dolores laudantium autem suscipit eum doloremque eveniet quis repellat sunt dignissimos officia similique. Hic magnam dolores aperiam perspiciatis expedita? Commodi necessitatibus sunt eveniet est hic earum ratione natus expedita doloremque. A vel maiores dignissimos ad quisquam fuga modi nostrum repellat perspiciatis dicta, minus consectetur explicabo nesciunt nihil. Laudantium adipisci harum porro alias et enim optio at consequuntur eaque provident inventore, suscipit delectus?</p>
              </article>
              <figure className="solution-img">
                <div className="fake-content"></div>
              </figure>
            </section>
          </div>
        </section>

        <section className="about-relative container-layout">
          <div className="row flex-column">
            <figure className="relative-img bottom-gap-mg">
              <div className="fake-content"></div>
            </figure>
            <div className="relative-btn">
              <Link onClick={()=>{window.scrollTo(0,0)}} to="/contact">
                <button>聯絡我們</button>
              </Link>
            </div>
          </div>
        </section>

        {/* todo 加入我們(hire) | other */}
      </div>
    </div>
  );
}
