(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{6122:function(e,r,t){Promise.resolve().then(t.bind(t,7152)),Promise.resolve().then(t.t.bind(t,5878,23))},7152:function(e,r,t){"use strict";t.d(r,{default:function(){return m}});var s=t(7437),a=t(2265),n=t(9376),i=t(7648),l=t(5186),o=t(2869),d=t(6815),c=t(6070),u=e=>{let{handleSubmit:r,email:t,setEmail:a,name:n,form:u,setForm:f,setName:m,password:x,setPassword:g,setConfirmPassword:h,confirmPassword:p,isLoading:v,otpSent:j,error:b}=e;return(0,s.jsxs)(c.Zb,{className:" py-2 flex flex-col  md:w-[400px]  gap-2",children:[(0,s.jsxs)(c.Ol,{children:[(0,s.jsx)(c.ll,{children:"Register"}),(0,s.jsx)(c.SZ,{children:"Create a new account"})]}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.aY,{children:(0,s.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d._,{htmlFor:"email",children:"Email"}),(0,s.jsx)(l.I,{id:"email",type:"email",value:t,onChange:e=>a(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d._,{htmlFor:"name",children:"Name"}),(0,s.jsx)(l.I,{id:"name",value:n,onChange:e=>m(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d._,{htmlFor:"password",children:"Password"}),(0,s.jsx)(l.I,{id:"password",type:"password",value:x,onChange:e=>g(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d._,{htmlFor:"confirmPassword",children:"Confirm Password"}),(0,s.jsx)(l.I,{id:"confirmPassword",type:"password",value:p,onChange:e=>h(e.target.value),required:!0})]})]})}),(0,s.jsxs)(c.eW,{className:"flex flex-col items-center",children:[(0,s.jsx)(o.z,{className:"w-full flex gap-5 rounded-full  hover:bg-[#7DBCCE] hover:text-[#5D6D84] bg-[#7DBCCE] text-white",onClick:r,children:v?"Registering...":"REGISTER NOW "}),b&&(0,s.jsx)("p",{className:"text-red-500 mt-2",children:b}),(0,s.jsxs)("p",{className:"mt-4",children:["Already have an account?"," ",(0,s.jsx)(i.default,{href:"/",className:"text-[#65aabd] hover:underline",children:"Login"})]})]})]})]})},f=e=>{let{isLoading:r,email:t,otp:a,setOtp:n,error:i,handleSubmit:u}=e;return(0,s.jsxs)(c.Zb,{className:" py-2 flex flex-col  md:w-[400px]  gap-2",children:[(0,s.jsxs)(c.Ol,{children:[(0,s.jsx)(c.ll,{children:"Email Verification"}),(0,s.jsxs)(c.SZ,{children:["input the 4 digit number sent to your email ",t]})]}),(0,s.jsx)(c.aY,{children:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"grid w-full items-center gap-4",children:(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d._,{htmlFor:"otp",children:"OTP"}),(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)(l.I,{id:"otp",value:a,onChange:e=>n(e.target.value),required:!0})})]})})})}),(0,s.jsxs)(c.eW,{className:"flex flex-col items-center",children:[(0,s.jsx)(o.z,{className:"w-full flex gap-5 rounded-full  hover:bg-[#7DBCCE] hover:text-[#5D6D84] bg-[#7DBCCE] text-white",onClick:u,children:r?"Sending Otp":"Verify"}),i&&(0,s.jsx)("p",{className:"text-red-500 mt-2",children:i})]})]})};function m(){let[e,r]=(0,a.useState)(0),[t,i]=(0,a.useState)(""),[l,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[g,h]=(0,a.useState)(""),[p,v]=(0,a.useState)(""),[j,b]=(0,a.useState)(!1),[y,N]=(0,a.useState)(!1),w=(0,n.useRouter)(),C=async()=>{v(""),b(!0);try{let s=await fetch("https://smartcare-auth.onrender.com/api/smart_care/signup/send_otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,name:l})}),a=await s.json();if(console.log("Registration successful:",a),s.ok)console.log("Registration successful:",a),r(1);else{var e;v((null===(e=a.error)||void 0===e?void 0:e.name)||"Registration failed. Please try again.")}N(!0)}catch(e){v("Failed to send OTP. Please try again.")}finally{b(!1)}},S=async e=>{if(e.preventDefault(),v(""),b(!0),d!==m){v("Passwords do not match"),b(!1);return}try{let e=await fetch("https://smartcare-auth.onrender.com/api/smart_care/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,name:l,otp:g,password:d,confirmPassword:m})}),r=await e.json();e.ok?(console.log("Registration successful:",r),w.push("/login")):v(r.message||"Registration failed. Please try again.")}catch(e){v("An error occurred. Please try again.")}finally{b(!1)}};return(0,s.jsx)(s.Fragment,{children:0===e?(0,s.jsx)(u,{isLoading:j,setForm:r,name:l,setEmail:i,setName:o,form:e,password:d,setPassword:c,setConfirmPassword:x,confirmPassword:m,email:t,error:p,handleSubmit:C}):(0,s.jsx)(f,{handleSubmit:S,email:t,otp:g,error:p,isLoading:j,setOtp:h})})}},2869:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var s=t(7437),a=t(2265),n=t(7495),i=t(535),l=t(4508);let o=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-5 w-5"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:i,asChild:d=!1,...c}=e,u=d?n.g7:"button";return(0,s.jsx)(u,{className:(0,l.cn)(o({variant:a,size:i,className:t})),ref:r,...c})});d.displayName="Button"},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return l},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var s=t(7437),a=t(2265),n=t(4508);let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});i.displayName="Card";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",t),...a})});l.displayName="CardHeader";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});o.displayName="CardTitle";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",t),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",t),...a})});u.displayName="CardFooter"},5186:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var s=t(7437),a=t(2265),n=t(4508);let i=a.forwardRef((e,r)=>{let{className:t,type:a,...i}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...i})});i.displayName="Input"},6815:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var s=t(7437),a=t(2265),n=t(6394),i=t(535),l=t(4508);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.f,{ref:r,className:(0,l.cn)(o(),t),...a})});d.displayName=n.f.displayName},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return n}});var s=t(1994),a=t(3335);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,s.W)(r))}}},function(e){e.O(0,[518,448,857,971,117,744],function(){return e(e.s=6122)}),_N_E=e.O()}]);