import{c as n,j as t,L as o}from"./index-341463da.js";import{R as s}from"./Reveal-befe2f6e.js";import{P as g}from"./index-4249e661.js";import{L as r}from"./LazyImage-0f27a1f3.js";const c="_services_1b16u_1",l="_timeline_1b16u_7",m="_container_1b16u_11",d="_textbox_1b16u_16",h="_textboxovetlay_1b16u_26",x="_depttextbox_1b16u_53",_="_leftcontainer_1b16u_72",v="_rightcontainer_1b16u_75",p="_imgcontainer_1b16u_78",b="_leftimgcontainer_1b16u_100",f="_rightimgcontainer_1b16u_103",u="_moveline_1b16u_1",$="_arrow_1b16u_118",j="_leftarrow_1b16u_127",k="_rightarrow_1b16u_131",y="_sectionSubText_1b16u_136",w="_sectionHeadingText_1b16u_145",D="_heading_1b16u_153",S="_register_1b16u_176",N="__container_9yn88_11_1b16u_254",e={services:c,timeline:l,container:m,textbox:d,textboxovetlay:h,depttextbox:x,leftcontainer:_,rightcontainer:v,imgcontainer:p,leftimgcontainer:b,rightimgcontainer:f,moveline:u,arrow:$,leftarrow:j,rightarrow:k,sectionSubText:y,sectionHeadingText:w,heading:D,register:S,_container_9yn88_11:N},T=[{id:1,img:"/images/light-theme/admision-icon.svg",imgDark:`${n}/admision-icon.svg`,heading:"Admission Management",text:"Application to performed catalogs all covered.",link:"admission"},{id:2,img:"/images/light-theme/funds-icon.svg",imgDark:`${n}/funds-icon.svg`,heading:"Funds Management",text:"Online-offline both payment modes available.",link:"finance"},{id:3,img:"/images/light-theme/department-icon.svg",imgDark:`${n}/department-icon.svg`,heading:"Customised Department",text:"Departments as per you needs like yearly batches or semester wise.",link:"department"},{id:4,img:"/images/light-theme/elearning-icon.svg",imgDark:`${n}/elearning-icon.svg`,heading:"Dedicated E-learning Platform",text:"No need spend money on developing your app use it like yours.",link:"elearning"},{id:5,img:"/images/light-theme/library-icon.svg",imgDark:`${n}/library-icon.svg`,heading:"Library Module",text:"Online-offline both payment modes available.",link:"library"},{id:6,img:"/images/light-theme/sports-icon.svg",imgDark:`${n}/sports-icon.svg`,heading:"Dedicated Sports & Arts Departments",text:"Empower the sports and arts a country needs",link:"sport"},{id:7,img:"/images/light-theme/event-seminar-icon.svg",imgDark:`${n}/event-seminar-icon.svg`,heading:"Event And Seminar Management",text:"Explore the ongoing and upcoming events",link:"event",status:"event"},{id:8,img:"/images/light-theme/alumni-icon.svg",imgDark:`${n}/alumni-icon.svg`,heading:"Alumni Cell",text:"Stay Connected to your Alma Mater",link:"alumni",status:"alumni"},{id:9,img:"/images/light-theme/career-icon.svg",imgDark:`${n}/career-icon.svg`,heading:"Career Management Center",text:"Strive to Involve Employees in Setting Their Own Goals ",link:"career",status:"career"},{id:10,img:"/images/light-theme/tender-icon.svg",imgDark:`${n}/tender-icon.svg`,heading:"Tender Management",text:"Facilitates the Complete Tendering Process With the Exception of Advertising",link:"tender",status:"tender"},{id:11,img:"/images/light-theme/transport-icon.svg",imgDark:`${n}/transport-icon.svg`,heading:"Transportation Network",text:"Transportation Network with Vehicle Service for Institute",link:"transport",status:"transport"},{id:12,img:"/images/light-theme/hostel-icon.svg",imgDark:`${n}/hostel-icon.svg`,heading:"Hostel Management",text:"Provides Hostel Activities like Hostel Admissions, Fees, Room, Mess etc.",link:"hostel",status:"hostel"}];function M(){const a=new Date;return a.setDate(a.getDate()+3),t.jsx(t.Fragment,{children:t.jsxs("div",{className:e.services,children:[t.jsxs("div",{className:e.heading,children:[t.jsx(s,{children:t.jsx("p",{className:e.sectionSubText,children:"SaaS platform that provides"})}),t.jsx(s,{children:t.jsxs("h3",{className:e.sectionHeadingText,children:[" ","premium features at free of cost for lifetime"]})}),t.jsx(s,{children:t.jsxs("h5",{className:e.sectionSubText,children:["Limited time offer till"," ",`${a.getDate().toString().length===1?String(a.getDate()).padStart(2,"0"):a.getDate()}/${(a.getMonth()+1).toString().length===1?String(a.getMonth()+1).padStart(2,"0"):a.getMonth()+1}/${a.getFullYear()}`," ",","," ",t.jsx("a",{href:"https://qviple.com/institute/signup",children:t.jsx("span",{className:e.register,children:"Register Now"})})]})})]}),t.jsx("div",{className:e.timeline,children:T.map(i=>t.jsx(s,{children:i.link!=="department"?t.jsxs("div",{className:i.id%2===0?`${e.container} ${e.leftcontainer}`:`${e.container} ${e.rightcontainer}`,children:[t.jsx("div",{className:i.id%2===0?`${e.imgcontainer} ${e.leftimgcontainer}`:`${e.imgcontainer} ${e.rightimgcontainer}`,children:t.jsx(r,{effect:"blur",src:i.img,title:i.heading,alt:i.heading,loading:"lazy"})}),t.jsx(o,{to:`/qviple/services/${i.link}`,children:t.jsxs("div",{className:e.textbox,children:[t.jsx("div",{className:e.textboxovetlay,children:t.jsx("b",{children:"View Details"})}),t.jsx("h2",{children:i.heading}),t.jsx("p",{children:i.text}),t.jsx("span",{className:i.id%2===0?`${e.arrow} ${e.leftarrow}`:`${e.arrow} ${e.rightarrow}`})]})})]}):t.jsxs("div",{className:i.id%2===0?`${e.container} ${e.leftcontainer}`:`${e.container} ${e.rightcontainer}`,children:[t.jsx("div",{className:i.id%2===0?`${e.imgcontainer} ${e.leftimgcontainer}`:`${e.imgcontainer} ${e.rightimgcontainer}`,children:t.jsx(r,{effect:"blur",src:i.img,alt:i.heading,loading:"lazy"})}),t.jsxs("div",{className:`${e.textbox} ${e.depttextbox}`,children:[t.jsx("h2",{children:i.heading}),t.jsx("p",{children:i.text}),t.jsx("span",{className:i.id%2===0?`${e.arrow} ${e.leftarrow}`:`${e.arrow} ${e.rightarrow}`})]})]})},i.id))})]})})}M.propTypes={resStatus:g.bool};export{M as default};