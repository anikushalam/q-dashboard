import{b as h,r as d,j as e}from"./index-341463da.js";/* empty css                   */const x=()=>{const[l]=h(),[r,a]=d.useState({endUserName:"",endUserEmail:"",endUserPhoneNumber:"",endUserAddress:""}),[o,i]=d.useState(""),m=n=>{i(()=>n.target.files[0])},p=n=>{n.preventDefault();const s=new FormData;s.append("endUserName",r.endUserName),s.append("endUserPhoneNumber",r.endUserPhoneNumber),s.append("endUserEmail",r.endUserEmail),s.append("endUserAddress",r.endUserAddress),s.append("file",o);for(let[t,u]of s.entries())console.log(t,u);s&&l(s).then(t=>{t.data.status&&a({endUserName:"",endUserEmail:"",endUserPhoneNumber:"",endUserAddress:""})})};return e.jsxs("div",{className:"contact-us__container",id:"Contact-Us",children:[e.jsx("div",{className:"title",children:"Join Us"}),e.jsxs("form",{className:"Contact-Us",onSubmit:p,children:[e.jsx("p",{type:"Name:",children:e.jsx("input",{type:"text",placeholder:"Write your name here..",name:"endUserName",value:r.endUserName,onChange:n=>a({...r,endUserName:n.target.value})})}),e.jsx("p",{type:"Email:",children:e.jsx("input",{type:"email",placeholder:"Enter your email here..",name:"endUserEmail",value:r.endUserEmail,onChange:n=>a({...r,endUserEmail:n.target.value})})}),e.jsx("p",{type:"Phone No.:",children:e.jsx("input",{type:"number",placeholder:"Enter your phone number here..",name:"endUserPhoneNumber",maxLength:"10",minLength:"10",value:r.endUserPhoneNumber,onChange:n=>a({...r,endUserPhoneNumber:n.target.value})})}),e.jsx("p",{type:"Address:",children:e.jsx("input",{type:"text",placeholder:"Enter your address..",name:"endUserAddress",value:r.endUserAddress,onChange:n=>a({...r,endUserAddress:n.target.value})})}),e.jsx("p",{type:"Resume:",children:e.jsx("input",{type:"file",placeholder:"Drop your resume",name:"file",id:"file",onChange:m})}),e.jsx("button",{children:"Send Message"})]})]})};export{x as default};