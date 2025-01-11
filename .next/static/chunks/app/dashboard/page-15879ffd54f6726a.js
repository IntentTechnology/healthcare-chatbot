(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{4274:function(e,r,t){Promise.resolve().then(t.bind(t,8197)),Promise.resolve().then(t.bind(t,8706)),Promise.resolve().then(t.bind(t,5116)),Promise.resolve().then(t.bind(t,9378)),Promise.resolve().then(t.t.bind(t,2972,23))},8197:function(e,r,t){"use strict";t.d(r,{default:function(){return f}});var n=t(7437),s=t(2265),l=t(1556),a=t(2869),i=t(5186),o=t(6070),d=t(6831),c=t(9378);let u=["What are some tips for maintaining a healthy diet?","How can I improve my sleep quality?","What exercises are best for cardiovascular health?","How can I manage stress effectively?"];function f(){let{messages:e,input:r,handleInputChange:t,handleSubmit:f}=(0,l.RJ)(),[m,x]=(0,s.useState)(!1),h=e=>{f(new Event("submit"),{input:e})};return(0,n.jsxs)(o.Zb,{className:"w-full h-[calc(100vh-5rem)]",children:[(0,n.jsx)(o.Ol,{children:(0,n.jsx)(o.ll,{children:"Health Assistant"})}),(0,n.jsxs)(o.aY,{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold mb-2",children:"Suggested questions:"}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:u.map((e,r)=>(0,n.jsx)(a.z,{variant:"outline",size:"sm",onClick:()=>h(e),children:e},r))})]}),(0,n.jsx)(c.ScrollArea,{className:"h-[calc(100vh-22rem)]",children:e.map((e,r)=>(0,n.jsx)("div",{className:"flex mb-4 ".concat("user"===e.role?"justify-end":"justify-start"),children:(0,n.jsxs)("div",{className:"flex items-end ".concat("user"===e.role?"flex-row-reverse":"flex-row"),children:[(0,n.jsx)(d.qE,{className:"w-8 h-8",children:(0,n.jsx)(d.Q5,{children:"user"===e.role?"U":"AI"})}),(0,n.jsx)("div",{className:"mx-2 p-3 rounded-lg ".concat("user"===e.role?"bg-primary text-primary-foreground":"bg-muted"),children:e.content})]})},r))})]}),(0,n.jsx)(o.eW,{children:(0,n.jsxs)("form",{onSubmit:e=>{x(!0),f(e).finally(()=>x(!1))},className:"flex w-full space-x-2",children:[(0,n.jsx)(i.I,{value:r,onChange:t,placeholder:"Ask about your health...",className:"flex-grow"}),(0,n.jsx)(a.z,{type:"submit",disabled:m,children:m?"Sending...":"Send"})]})})]})}},5116:function(e,r,t){"use strict";t.d(r,{default:function(){return a}});var n=t(7437),s=t(2265),l=t(9376);function a(e){let{children:r}=e,t=(0,l.useRouter)();return(0,s.useEffect)(()=>{localStorage.getItem("token")||t.push("/")},[t]),(0,n.jsx)(n.Fragment,{children:r})}},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return a},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var n=t(7437),s=t(2265),l=t(4508);let a=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});a.displayName="Card";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...s})});i.displayName="CardHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});o.displayName="CardTitle";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",t),...s})});c.displayName="CardContent";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",t),...s})});u.displayName="CardFooter"},5186:function(e,r,t){"use strict";t.d(r,{I:function(){return a}});var n=t(7437),s=t(2265),l=t(4508);let a=s.forwardRef((e,r)=>{let{className:t,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...a})});a.displayName="Input"},9378:function(e,r,t){"use strict";t.d(r,{ScrollArea:function(){return i}});var n=t(7437),s=t(2265),l=t(314),a=t(4508);let i=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e;return(0,n.jsxs)(l.fC,{ref:r,className:(0,a.cn)("relative overflow-hidden",t),...i,children:[(0,n.jsx)(l.l_,{className:"h-full w-full rounded-[inherit]",children:s}),(0,n.jsx)(o,{}),(0,n.jsx)(l.Ns,{})]})});i.displayName=l.fC.displayName;let o=s.forwardRef((e,r)=>{let{className:t,orientation:s="vertical",...i}=e;return(0,n.jsx)(l.gb,{ref:r,orientation:s,className:(0,a.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...i,children:(0,n.jsx)(l.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=l.gb.displayName}},function(e){e.O(0,[518,448,912,875,314,706,971,117,744],function(){return e(e.s=4274)}),_N_E=e.O()}]);