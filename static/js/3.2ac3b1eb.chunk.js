(this["webpackJsonpit-kam-social-network-1"]=this["webpackJsonpit-kam-social-network-1"]||[]).push([[3],{294:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(0),n=a.n(o),r=a(28),i=a(11),s=a(34);function l(e){return{isAuthorized:e.auth.isAuthorized}}function c(e){return Object(i.b)(l)((function(t){return!0===t.isAuthorized?n.a.createElement(e,t):void 0===t.isAuthorized?n.a.createElement(s.a,null):n.a.createElement(r.a,{to:"/login"})}))}},295:function(e,t,a){e.exports={container:"UserInfo_container__2BFMb",userInfo:"UserInfo_userInfo__17U0R",avatar:"UserInfo_avatar__1gjuh",avatar__image:"UserInfo_avatar__image__2XUtE",avatar__upload:"UserInfo_avatar__upload__1pAr5",avatar__uploadButton:"UserInfo_avatar__uploadButton__3VVPo",avatar__uploadLabel:"UserInfo_avatar__uploadLabel__3DuR6",name:"UserInfo_name__1BG1H",status:"UserInfo_status__2VUwE",description:"UserInfo_description__2Lon0",lookingForAJob:"UserInfo_lookingForAJob__2WtbO",lookingForAJob__image:"UserInfo_lookingForAJob__image__3C6fr",contacts:"UserInfo_contacts__1897d"}},296:function(e,t,a){e.exports={picture:"Profile_picture__3qPzm"}},297:function(e,t,a){e.exports={form:"ProfileUpdateForm_form__-oWCl",fields:"ProfileUpdateForm_fields__gMbtc",error:"ProfileUpdateForm_error__30RYu"}},298:function(e,t,a){e.exports={title:"MyPosts_title__20rtx",sendForm:"MyPosts_sendForm__233eU"}},299:function(e,t,a){e.exports={post:"Post_post__1V4dg",avatar:"Post_avatar__2T0BL",message:"Post_message___Ra6h"}},300:function(e,t,a){e.exports={inputArea:"SendForm_inputArea__1nPZo",submit:"SendForm_submit__3mACp"}},305:function(e,t,a){"use strict";a.r(t);var o=a(39),n=a(36),r=a(37),i=a(41),s=a(38),l=a(42),c=a(0),u=a.n(c),m=a(296),p=a.n(m);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],o=!0,n=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(l){n=!0,r=l}finally{try{o||null==s.return||s.return()}finally{if(n)throw r}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=a(295),_=a.n(d);var b=function(e){var t=f(Object(c.useState)(!1),2),a=t[0],o=t[1],n=f(Object(c.useState)(e.statusText),2),r=n[0],i=n[1];Object(c.useEffect)((function(){i(e.statusText)}),[e.statusText]);var s=function(){e.myProfile&&o(!a)};return u.a.createElement("span",{className:_.a.status},a?u.a.createElement("input",{autoFocus:!0,onBlur:function(){s(),e.statusText!==r&&e.updateUserStatus(r)},onChange:function(e){i(e.target.value)},value:r}):u.a.createElement("span",{onDoubleClick:s},r||"-----"))},h=a(297),g=a.n(h),E=a(128),v=a(129);var I=Object(v.a)({form:"profileupdate"})((function(e){return u.a.createElement("form",{className:g.a.form,onSubmit:e.handleSubmit},u.a.createElement("button",{type:"button",onClick:e.onCloseWithoutSubmit},"Exit"),u.a.createElement("button",{type:"submit"},"Save"),e.error&&u.a.createElement("span",{className:g.a.error},e.error),u.a.createElement("div",{className:g.a.fields},u.a.createElement("label",{htmlFor:"fullName"},"Full name: "),u.a.createElement(E.a,{component:"input",name:"fullName",id:"fullName"}),u.a.createElement("label",{htmlFor:"aboutMe"},"About me: "),u.a.createElement(E.a,{component:"input",name:"aboutMe",id:"aboutMe"}),u.a.createElement("label",{htmlFor:"github"},"Github: "),u.a.createElement(E.a,{component:"input",name:"contacts.github",id:"github"}),u.a.createElement("label",{htmlFor:"website"},"Website: "),u.a.createElement(E.a,{component:"input",name:"contacts.website",id:"website"}),u.a.createElement("label",{htmlFor:"lookingForAJob"},"Looking for a job: "),u.a.createElement(E.a,{component:"input",type:"checkbox",name:"lookingForAJob",id:"lookingForAJob"}),u.a.createElement("label",{htmlFor:"lookingForAJobDescription"},"Description: "),u.a.createElement(E.a,{component:"textarea",name:"lookingForAJobDescription",id:"lookingForAJobDescription"})))}));var A=function(e){var t=e.profileInfo,a=t.photos.large,o=t.fullName,n=t.aboutMe,r=t.contacts,i=t.lookingForAJob,s=t.lookingForAJobDescription,l=e.profileInfo,m=e.statusText,p=e.myProfile,d=e.updateUserStatus,h=e.updateProfileInfo,g=e.updateProfileAvatar,E=f(Object(c.useState)(!1),2),v=E[0],A=E[1];function y(){A(!1)}return u.a.createElement("div",{className:_.a.container},u.a.createElement("span",{className:_.a.avatar},u.a.createElement("img",{className:_.a.avatar__image,src:a||"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/1:1/w_722,h_722,c_limit/phonepicutres-TA.jpg",alt:"User"}),p&&u.a.createElement("div",{className:_.a.avatar__upload},u.a.createElement("input",{type:"file",onChange:function(e){g(e.target.files[0])},className:_.a.avatar__uploadButton,id:"avatarFileInput"}),u.a.createElement("label",{className:_.a.avatar__uploadLabel,htmlFor:"avatarFileInput"},"Upload"))),u.a.createElement("div",{className:_.a.userInfo},u.a.createElement("p",{className:_.a.name},o,u.a.createElement(b,{statusText:m,updateUserStatus:d,myProfile:p})),v?u.a.createElement(I,{onSubmit:function(e){h(e).then((function(){y()}),(function(e){console.log(e)}))},initialValues:l,onCloseWithoutSubmit:y}):u.a.createElement("div",{className:_.a.description,onDoubleClick:p?function(){A(!0)}:""},n||"no information",u.a.createElement("br",null),i?u.a.createElement("span",{className:_.a.lookingForAJob},u.a.createElement("img",{className:_.a.lookingForAJob__image,src:"https://www.radan.com/images/icons/hexagon/darkblue/GENERAL_USE_DARK_BLUE_ICON_PRESENTER.png",title:"Looking for a job",alt:"Looking for a job: "})," ",s):null,u.a.createElement("ul",{className:_.a.contacts},Object.keys(r).filter((function(e){return!!r[e]})).map((function(e){return u.a.createElement("li",{key:e},u.a.createElement("a",{href:"https://"+r[e]},e))}))))))},y=a(96),P=a(11),k=a(298),F=a.n(k),j=a(299),N=a.n(j);var U=function(e){return u.a.createElement("div",{className:N.a.post},u.a.createElement("img",{className:N.a.avatar,src:e.photo||"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/1:1/w_722,h_722,c_limit/phonepicutres-TA.jpg",alt:"User"}),u.a.createElement("p",{className:N.a.message},"\t"+e.message,"\xa0"))},S=a(300),O=a.n(S),w=a(74),x=a(53),D=Object(x.a)(300);var J=Object(v.a)({form:"sendForm"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit,className:[O.a.sendForm,"clearfix"].join(" ")},u.a.createElement(E.a,{component:w.b,validate:[x.b,D],name:"postText",className:O.a.inputArea,placeholder:"your news.."}),u.a.createElement("button",{className:O.a.submit},"Send"))}));var T=function(e){return u.a.createElement("div",{className:F.a.posts},u.a.createElement("p",{className:F.a.title},"My posts"),u.a.createElement("div",{className:F.a.sendForm},u.a.createElement(J,{onSubmit:function(t){e.addPost(t.postText)}})),e.posts.map((function(t){return u.a.createElement(U,{photo:e.photo,message:t.postText,key:t.id})})))},C=a(9);var L=Object(C.d)(u.a.memo,Object(P.b)((function(e){return{photo:e.profilePage.profileInfo.photos.small,posts:e.profilePage.posts}}),{addPost:y.a}))(T);var M=function(e){return u.a.createElement("main",{className:p.a.content},u.a.createElement("div",null,u.a.createElement("img",{className:p.a.picture,src:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-grand-tetons-panoramic-in-winter-jackson-hole-wyoming-susan-rigdon-ervin.jpg",alt:""})),u.a.createElement(A,e),u.a.createElement("div",{className:p.a.posts},u.a.createElement(L,null)))},B=a(28),R=a(34),z=a(294),V=a(49);var W=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).loadProfileAndStatus=function(){var e=a.props.match.params.userId||a.props.myId;a.props.getProfileData(e),a.props.getUserStatus(e)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadProfileAndStatus()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userId!==this.props.match.params.userId&&this.loadProfileAndStatus()}},{key:"render",value:function(){if(!this.props.match.params.userId&&this.props.myId)return u.a.createElement(B.a,{to:"profile/"+this.props.myId});if(!this.props.profileInfo)return u.a.createElement(R.a,null);var e=this.props,t=(e.getProfileData,e.updateProfileInfo),a=(e.getUserStatus,e.myId),n=(e.isAuthorized,Object(o.a)(e,["getProfileData","updateProfileInfo","getUserStatus","myId","isAuthorized"]));return u.a.createElement(M,Object.assign({},n,{updateProfileInfo:function(e){return t(e,a)},myProfile:+this.props.match.params.userId===a}))}}]),t}(u.a.Component);t.default=Object(C.d)(B.g,z.a,Object(P.b)((function(e){return{profileInfo:e.profilePage.profileInfo,statusText:e.profilePage.statusText,myId:e.auth.authData.id}}),{getProfileData:y.c,updateProfileAvatar:y.e,getUserStatus:y.d,updateUserStatus:y.g}),Object(P.b)(null,(function(e){return{updateProfileInfo:function(t,a){return e(Object(y.f)(t,a)).catch((function(t){throw e(Object(V.a)("profileupdate",{_error:t})),t}))}}})))(W)}}]);
//# sourceMappingURL=3.2ac3b1eb.chunk.js.map