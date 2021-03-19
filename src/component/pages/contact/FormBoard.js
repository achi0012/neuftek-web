import React,{useState} from "react";

export default function FormBoard() {
    const [form,setForm] = useState({option:'LOWI 輿情監測系統',name:'',company:'',email:'',tel:'',detail:''})

    const submit = (e)=>{
        e.preventDefault();
        console.log("send form")
        console.log(form)
    }

    const handleChange = (e) =>{
        const type = e.target.name;
        const value = e.target.value;
        setForm({...form,[type]:value})
    }

  return (
    // todo => 送出 popup tip & 必填欄位限制 
    <div className="form-board container-layout">
      <section className="form-title">
        <div className="row flex-column">
          <div className='title' >
            <span>填寫</span>表單
          </div>
          <div className="subtitle">
              想進一步了解更多資訊請填寫以下表單，我們將盡快與您聯絡。
          </div>
        </div>
      </section>

      <form >
        <div className="input-title">我想了解</div>
        <select className="form-dropdown" name="option">
          <option value="lowi">LOWI 輿情監測系統</option>
          <option value="related">關係人分析系統</option>
          <option value="other">其他</option>
        </select>
        <div className="input-title">姓名</div>
        <input className="form-name" name='name' type="text" onChange={handleChange}/>
        <div className="input-title">公司單位</div>
        <input className="form-company" name='company' type="text" onChange={handleChange}/>
        <div className="input-title">電子信箱</div>
        <input className="form-email" name='email' type="text" onChange={handleChange}/>
        <div className="input-title">連絡電話</div>
        <input className="form-tel" name="tel" type="text" onChange={handleChange}/>
        <div className="input-title">詳述問題</div>
        <textarea className="form-textarea" name='detail' cols="50" rows="10" onChange={handleChange}></textarea>
        <div className="form-btn"> 
            <button  type="submit" onClick={submit}>
                送出
            </button>
        </div>
      </form>
    </div>
  );
}
