(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{246:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(2),r=a(3),s=a(8),o=a(9),l=a(0),c=a.n(l),u=a(6),i=a(26),p=function(t){return{isAuth:t.auth.isAuth}},m=function(t){var e=function(e){Object(s.a)(l,e);var a=Object(o.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(r.a)(l,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(t,this.props):c.a.createElement(u.a,{to:"/login"})}}]),l}(c.a.Component);return Object(i.b)(p)(e)}},247:function(t,e,a){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAG1BMVEXMzMwAAACZmZl/f38zMzMZGRlmZmZMTEyysrL3tI99AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABk0lEQVRYhe2TTU/CQBCGhyJtj6xQyrEgMR750MgRk3IvROBaYorXGm3CcTEm9mc7uy3tVlouxoNmnoRk33SemQ4LAARBEARBEARB/Em04Q/kC+//ytpk4gCYXIb4mHP5ajKG5HlaozBg1sJywOjKRq1jNnfBerfzQXtgK7YEMJpwy2bf5ecpNugKDTG8LLvztuuGoL9ybMBR/rDHJ5MFpg3wKA41P8vqzocQ3+yxVEXeALbi2YhnWZWNGRjtk3c+EmF3MdTNc0H2wLCq3DiSBWC28qzI5ifKnVKzHjGGbbVLAL2Z50y+XzDmpbdx4q6eYjlpg/WhklP5bj2NxeRmmdzz0x23uLej5ETWOunOpfIG0uLDEAI1J3IjPCOLVQHmongG60KWcs9JjqVyXXwRpiVPWlfNiSxv/nBucnKJHfwtKNnIJ79U7dzGTxDJRWtDNevycmrYUN9Uydu9OVgGckhQyKbN8T+o2/x9fl0l64zZXGoNu5hHjPnYjLG9XiWDdlOV+/LU56UaQRAEQRAEQRC/xRdch0llQRqPqAAAAABJRU5ErkJggg=="},253:function(t,e,a){t.exports={info:"UserInfo_info__2Ek47",wallpaper:"UserInfo_wallpaper__3d48-",avatarWrapper:"UserInfo_avatarWrapper__3RkSW",avatar:"UserInfo_avatar__1PrTB",avatarInput:"UserInfo_avatarInput__3_wRa",button:"UserInfo_button__3gLuS",otherAvatar:"UserInfo_otherAvatar__2lcMc",text:"UserInfo_text__1_AJZ",username:"UserInfo_username__3MjRS",contacts:"UserInfo_contacts__3enAm",status:"UserInfo_status__1dOFL"}},254:function(t,e,a){t.exports={info:"UserContacts_info__1Nnt5",wallpaper:"UserContacts_wallpaper__3PPgz",avatar:"UserContacts_avatar__frQqC",text:"UserContacts_text__33xIl",username:"UserContacts_username__3REKS",contacts:"UserContacts_contacts__8qYQH"}},255:function(t,e,a){t.exports={job:"UserJob_job__3GZEi"}},256:function(t,e,a){t.exports={userStatusWrapper:"UserStatus_userStatusWrapper__1BTi0",statusText:"UserStatus_statusText__cpBKG",otherStatusText:"UserStatus_otherStatusText__ofoU3"}},257:function(t,e,a){t.exports={title:"Posts_title__18zvc",posts:"Posts_posts__14gOG"}},258:function(t,e,a){t.exports={writing:"WritePost_writing__8rW3Y"}},259:function(t,e,a){t.exports={wall:"PostsWall_wall__6tEVk"}},260:function(t,e,a){t.exports={wrapper:"Post_wrapper__UiDQ2",post:"Post_post__1PQg4",avatar:"Post_avatar__35EuW",text_wrapper:"Post_text_wrapper__3bCo1",text:"Post_text__kRCZN",likes:"Post_likes__1Akax",button:"Post_button__NS7RG"}},264:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(26),o=a(6),l=a(253),c=a.n(l),u=a(247),i=a(50),p=a(254),m=a.n(p),A=function(t){var e=t.contacts,a=[];return Object.values(e).every((function(t){return null===t}))&&a.push(r.a.createElement("li",{key:"base"},"User dont add any contacts")),Object.keys(e).forEach((function(t){null!==this[t]&&a.push(r.a.createElement("li",{key:this[t]},t+": ",r.a.createElement("a",{href:this[t]},this[t])))}),e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Contacts:"),r.a.createElement("ul",{className:m.a.contacts},a))},f=a(255),_=a.n(f),E=function(t){var e=t.lookingForAJob,a=t.description;return e?r.a.createElement("div",{className:_.a.job},r.a.createElement("p",null,"Looking for a job: Yes"),r.a.createElement("p",null,a)):r.a.createElement("div",{className:_.a.job},r.a.createElement("p",null,"Looking for a job: No"))},g=a(40),d=a(256),b=a.n(d),v=function(t){var e=Object(n.useState)(!1),a=Object(g.a)(e,2),s=a[0],o=a[1],l=Object(n.useState)(t.status),c=Object(g.a)(l,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){i(t.status)}),[t.status]),r.a.createElement("div",{className:b.a.userStatusWrapper},s?r.a.createElement("div",null,r.a.createElement("input",{type:"text",defaultValue:u,onChange:function(t){i(t.target.value)},onBlur:function(){o(!1),t.updateUserStatus(u)},onFocus:function(t){return t.target.select()},autoFocus:!0})):r.a.createElement("div",null,r.a.createElement("span",{className:t.isOwner?b.a.statusText:b.a.otherStatusText,onClick:t.isOwner?function(){o(!0)}:null},t.status?t.status:"Write u'r status")))},h=function(t){var e=t.profile,a=t.status,n=t.updateUserStatus,s=t.isUpdate,o=t.isOwner,l=t.changeAvatar;if(!e||s)return r.a.createElement(i.a,null);return r.a.createElement("div",{className:c.a.info},r.a.createElement("div",{className:c.a.avatarWrapper},r.a.createElement("img",{className:o?c.a.avatar:c.a.otherAvatar,src:null!==e.photos.large?e.photos.large:u.a,alt:"avatar"}),o?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"file",name:"avatarFile",id:"avatarFile",className:c.a.avatarInput,onChange:function(t){t.target.files.length&&l(t.target.files[0])}}),r.a.createElement("label",{htmlFor:"avatarFile",className:c.a.button},"Upload new avatar")):null),r.a.createElement("div",{className:c.a.text},r.a.createElement("h2",{className:c.a.username},e.fullName),r.a.createElement(v,{status:a,updateUserStatus:n,isOwner:o}),r.a.createElement("p",null,"About me: "),r.a.createElement("p",null,null!=e.aboutMe?e.aboutMe:"User dont write about himself"),r.a.createElement(A,{contacts:e.contacts}),r.a.createElement(E,{lookingForAJob:e.lookingForAJob,description:e.lookingForAJobDescription})))},U=a(257),w=a.n(U),j=a(258),x=a.n(j),C=function(t){return r.a.createElement("div",{className:x.a.writing},r.a.createElement("textarea",{onChange:function(e){var a=e.target.value;t.postChange(a)},rows:"2",placeholder:"your news...",value:t.newPostText}),r.a.createElement("button",{onClick:function(){t.addPost()}},"Send"))},k=a(72),N=Object(s.b)((function(t){return{newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(){t(Object(k.a)())},postChange:function(e){t(Object(k.g)(e))}}}))(C),O=a(259),P=a.n(O),y=a(260),S=a.n(y),I=function(t){return r.a.createElement("li",{className:S.a.wrapper},r.a.createElement("div",{className:S.a.post},r.a.createElement("img",{className:S.a.avatar,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEXMzMwAAABmZmZMTEyysrKZmZl/f38zMzMZGRlslgPvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQ4je2OQQqDMBBFP50EryGjdj2UHiAIgkshtN1Kwb3QC5Se3IwhEbryAHmr+fOY4QOFwj9y1lz4/oCduHH9rwsBLWdHBHJ6oTeEj0vC+GCAYTfG45u/Xb2dF/CiJgSsyfSoIGLqsJEYknniha62s1WjIRviBqPDjQXvVsPRPVYxccy9CgVlA5TbEZNm5yh5AAAAAElFTkSuQmCC",alt:"avatar"}),r.a.createElement("p",{className:S.a.text},t.text)),r.a.createElement("p",{className:S.a.likes},"likes: ",t.likesCount),r.a.createElement("button",{className:S.a.button,onClick:function(){t.delete(t.id)}},"Delete post"))},R=function(t){var e=t.posts.map((function(e){return r.a.createElement(I,{text:e.text,likesCount:e.likes,key:e.id,id:e.id,delete:t.deletePostActionCreator})}));return r.a.createElement("ul",{className:P.a.wall},e)},B=Object(s.b)((function(t){return{posts:t.profilePage.postData}}),{deletePostActionCreator:k.c})(R),G=function(){return r.a.createElement("div",{className:w.a.posts},r.a.createElement("h3",{className:w.a.title},"My posts"),r.a.createElement(N,null),r.a.createElement(B,null))},M=r.a.memo((function(t){var e=t.profile,a=t.status,n=t.updateUserStatus,s=t.isUpdate,o=t.isOwner,l=t.changeAvatar;return r.a.createElement("div",null,r.a.createElement(h,{profile:e,status:a,updateUserStatus:n,isUpdate:s,isOwner:o,changeAvatar:l}),r.a.createElement(G,null))})),W=a(246),Q=a(32),T=function(t){return t.profilePage.profile},J=function(t){return t.profilePage.status},V=function(t){return t.profilePage.isUpdate},L=function(t){return t.auth.id};e.default=Object(Q.d)(Object(s.b)((function(t){return{profile:T(t),status:J(t),id:L(t),isUpdate:V(t)}}),{getUserInfo:k.d,getUserStatus:k.e,updateUserStatus:k.h,changeAvatar:k.b}),o.f,W.a)((function(t){var e=t.match.params.userId;return e||(e=t.id),Object(n.useEffect)((function(){t.getUserInfo(e),t.getUserStatus(e)}),[e]),r.a.createElement(M,Object.assign({},t,{isOwner:!t.match.params.userId}))}))}}]);
//# sourceMappingURL=3.d70f529e.chunk.js.map