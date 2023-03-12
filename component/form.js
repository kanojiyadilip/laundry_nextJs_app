import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import swal from 'sweetalert2';

export default function Form({}){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    })

    const [btnDsb, setBtnDsb] = useState(false)

    var pattern = {
        email: '/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'
    }
    useEffect(()=>{},[formData])
    async function submit(e){
        e.preventDefault();
        console.log("--------da----------", formData);
        setBtnDsb(true);
        const headers = {'Content-Type':'application/json'};
        const apiRes = await fetch('http://localhost:3000/api/post',{method: 'post', headers: headers, body:JSON.stringify(formData)});
        var res = await apiRes.json();
        console.log("--------res----------", res);
        if(res.success){
          window.Swal = swal;
          Swal.fire('Message Send Successfully.', 'We will contact soon you.','success');
          setBtnDsb(false);
        }
        else{
          setBtnDsb(false);
        }
    }

    return(
        <div className="schedule_form_dev">
        <p className="our_process">Schedule a Pickup</p>
        <form onSubmit={submit} style={{padding: '20px 0px 50px 0px'}}>
        
        <div className="row schedule-form" style={{margin: '0px'}}>
        
          <div className="col-md-6">
            <Fade bottom>
                <input type='text' value={formData['name']} onChange={(e) => { setFormData({...formData, name: e.target.value})}} placeholder="Name" required />
                <br />
            </Fade>
            <Fade bottom>
                <input type='email' value={formData['email']} onChange={(e) => { setFormData({...formData, email: e.target.value})}} placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <br />
            </Fade>
            <Fade bottom>    
                <input type='phone' value={formData['phone']} onChange={(e) => { setFormData({...formData, phone: e.target.value})}} placeholder="Phone" required pattern="[789][0-9]{9}" />
                <br />
            </Fade>
            <Fade bottom>    
                <input type='text' value={formData['address']} onChange={(e) => { setFormData({...formData, address: e.target.value})}} placeholder="Address" required />
            </Fade>
          </div>
          <div className="col-md-6">
                <Fade bottom> 
                    <textarea value={formData['message']} onChange={(e) => {
                        setFormData({...formData, message: e.target.value})}} placeholder="Message" required></textarea>
                </Fade>
          </div>
          <Fade bottom> 
          <div className="col-md-12" style={{margin: '0px', textAlign: 'center'}}>
            <button className="btn" style={{margin: '20px', background: '#1ea6ce', color: '#fff', padding: '8px 58px'}} disabled={btnDsb}>
              
              {btnDsb?
              <><div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div></>:
              <span>Send</span>}
              
            </button>
          </div>
          </Fade>
        
        </div>
        </form>
      </div>
    )
}