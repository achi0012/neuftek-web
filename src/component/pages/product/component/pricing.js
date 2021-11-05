import React,{useState} from 'react';
import {Modal} from "reactstrap"
export default function Pricing(props) {

    const [isOpen,setOpen]= useState(false)
    const [price,setPrice] = useState('')
    const [mail,setMail] = useState('')
    const [suscceed,setSus] = useState(false)

    const modalToggle = (price)=>{
      if(isOpen) {
        setOpen(false)
      }else {
        setSus(false)
        setOpen(true)
        setPrice(price)
      }
    }

    const submit = (e) =>{
      e.preventDefault()
      console.log(mail)
      setSus(true)
    }

    return (
        <section className="product-pricing container-layout">
          <div className="row flex-column">
                 <header className="section-title title-gap">{props.title}</header>
                 <hr className="underline" />
          </div>
          <div className="row flex-row flex-center">
            {props.pricing.map((item,index)=>{
              return (
                <div key={index} className="pricing-item">
                  <div className="pricing-intro bottom-gap-mg">
                      <header className="article-title detail-title-gap">{item.name}</header>
                      <p className="detail-content">{item.describe}</p>
                  </div>
                  {item.detail.map((obj,i)=>{
                    return(
                      <div key={`d-${i}`} className="p-detail detail-gap">
                        {/* <div className="font">  </div>   */}
                        <i className={obj.font}></i>
                        <p className="detail-content">{obj.content}</p>
                      </div>
                    )
                  })}
                  <div className="mg-auto">
                    <button onClick={()=>modalToggle(item.name)} className="mg-top">開始使用</button>
                  </div>
                </div>
              )
            })}
          </div>

          <Modal isOpen={isOpen} toggle={modalToggle}>
            <div className="modal-head">
              <header className='detail-title'>{price}</header>
              <div onClick={modalToggle} className="head-btn">
                <i className="fas fa-times"></i>
              </div>
                
            </div>
            <div className="modal-body">
              {suscceed 
                ? <p className="detail-content">感謝您的回覆，我們將會盡快與您聯繫！</p>
                : <form onSubmit={(e)=>submit(e)} >
                    <input required placeholder="請填入您的電子郵件" className="input-field" type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    <input className="submit" type="submit" value="送出"/>
                  </form>
              }
            </div>
          </Modal>

        </section>
    );
}