"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2499],{55624:(e,i,a)=>{a.d(i,{T:()=>m});var t=a(2622),n=a(33437),l=a(21783),o=a(74371),r=a(47166);const s="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";var u=a(4637);const m=function({onClick:e,name:i,images:a,canEdit:m,placeholderType:c,shape:g=r.Kc.SQUARE,dragUri:p=""}){const[v,k]=(0,n.R)(a),h=(0,l.VO)(v,k)===l.KO.loaded,f=(0,t.O)([p],i);return(0,u.jsxs)("div",{className:s,"data-testid":`${c}-image`,draggable:!!p,onDragStart:f,children:[(0,u.jsx)(r.Oe,{loading:"eager",name:i,images:a,placeholderType:c,shape:g}),m&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(o.F,{overlay:h,onClick:e,rounded:g===r.Kc.CIRCLE})})]})}},29461:(e,i,a)=>{a.d(i,{k:()=>d});var t=a(84875),n=a.n(t),l=a(64342),o=a(94374),r=a(39293),s=a(4637);const d=({children:e})=>{const i=(0,l.W6)(r.vyX,{loadingValue:!1});return(0,s.jsx)("div",{className:n()(o.Z.imageContainer,{[o.Z.imageContainerNew]:i}),children:e})}},38781:(e,i,a)=>{a.d(i,{g:()=>o});var t=a(94),n=a(94374),l=a(4637);const o=({children:e})=>(0,l.jsx)(t.D,{variant:"mesto",className:n.Z.pretitle,children:e})},64337:(e,i,a)=>{a.r(i),a.d(i,{default:()=>Ji});var t=a(59496),n=a(10797),l=a(59526),o=a(58776),r=a(84875),s=a.n(r),d=a(63840),u=a(11411),m=a(11021),c=a(26055),g=a(22702),p=a(89642);const v="profile-userOverview-container",k="profile-userOverview-section",h="profile-userOverview-subPage",f="profile-userOverview-topTrackSubPage",b="profile-userOverview-title",N="profile-userOverview-header";var y=a(4637);const x=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,g.J)(p.n5.getFollowers,[i]),l=a?.profiles;return t?(0,y.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,y.jsx)(c.P,{className:s()("contentSpacing",h),title:d.ag.get("followers"),total:l?.length,showAll:!0,children:l?.map(((e,i)=>(0,y.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},S=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,g.J)(p.n5.getFollowing,[i]),l=a?.profiles;return t?(0,y.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,y.jsx)(c.P,{className:s()("contentSpacing",h),title:d.ag.get("following"),total:l?.length,showAll:!0,children:l?.map(((e,i)=>(0,y.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};a(99692);var I=a(90839),_=a(23055),T=a(64342),j=a(97908),w=a(85802),A=a(34315),P=a(61114),C=a(27293),F=a(55624),R=a(47166),D=a(55085),O=a(31926),U=a(94),E=a(76282),L=a(85420),M=a(63961),W=a(59409),H=a(33437),K=a(21783);const B="profile-userEditDetails-image",J="valcBm4lLe9qFBcg0sFY",V="tAIzXn8C9KriGwGuBfWg",Q="PsrXxenHUFXYM1ub1xWw",G="U_VWfeeLWnDPhUTxCmrQ",Z=function({onClickEdit:e,onClickRemove:i,name:a,images:t,canEdit:n}){const[l,o]=(0,H.R)(t),r=(0,K.VO)(l,o)===K.KO.loaded;return(0,y.jsxs)("div",{className:B,children:[(0,y.jsx)(R.Oe,{loading:"eager",name:a,images:t,placeholderType:"user",shape:R.Kc.CIRCLE}),n&&(0,y.jsxs)("div",{className:s()(J,{[Q]:r}),children:[(0,y.jsx)("button",{className:V,"aria-haspopup":"true",onClick:e,type:"button",children:(0,y.jsx)(U.D,{variant:"ballad",children:d.ag.get("user.edit-details.choose-photo")})}),(0,y.jsx)("div",{className:s()(G,"icon"),children:(0,y.jsx)(W.y,{iconSize:48,"aria-hidden":!0})}),(0,y.jsx)("button",{className:V,onClick:i,type:"button",children:(0,y.jsx)(U.D,{variant:"ballad",children:d.ag.get("user.edit-details.remove-photo")})})]})]})};var z=a(51901),X=a(14438),q=a(91423);const Y={paths:""},$={encode(e,i=q.Writer.create()){for(const a of e.paths)i.uint32(10).string(a);return i},decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...Y};for(n.paths=[];a.pos<t;){const e=a.uint32();if(e>>>3==1)n.paths.push(a.string());else a.skipType(7&e)}return n},fromJSON(e){const i={...Y};if(i.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)i.paths.push(String(a));return i},fromPartial(e){const i={...Y};if(i.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)i.paths.push(a);return i},toJSON(e){const i={};return e.paths?i.paths=e.paths.map((e=>e)):i.paths=[],i}};a(4269);var ee=a(3959),ie=a(55872).Buffer;const ae={value:0},te={value:!1},ne={value:""};const le={encode:(e,i=q.Writer.create())=>(i.uint32(8).int32(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ae};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.int32();else a.skipType(7&e)}return n},fromJSON(e){const i={...ae};return void 0!==e.value&&null!==e.value?i.value=Number(e.value):i.value=0,i},fromPartial(e){const i={...ae};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value=0,i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}},oe={encode:(e,i=q.Writer.create())=>(i.uint32(8).bool(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...te};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.bool();else a.skipType(7&e)}return n},fromJSON(e){const i={...te};return void 0!==e.value&&null!==e.value?i.value=Boolean(e.value):i.value=!1,i},fromPartial(e){const i={...te};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value=!1,i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}},re={encode:(e,i=q.Writer.create())=>(i.uint32(10).string(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ne};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.string();else a.skipType(7&e)}return n},fromJSON(e){const i={...ne};return void 0!==e.value&&null!==e.value?i.value=String(e.value):i.value="",i},fromPartial(e){const i={...ne};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value="",i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}};q.util.Long!==ee.Z&&(q.util.Long=ee.Z,(0,q.configure)());const se=globalThis;se.atob,se.btoa;const de={maxWidth:0,maxHeight:0,url:""},ue={},me={},ce={encode:(e,i=q.Writer.create())=>(i.uint32(8).int32(e.maxWidth),i.uint32(16).int32(e.maxHeight),i.uint32(26).string(e.url),i),decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...de};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.maxWidth=a.int32();break;case 2:n.maxHeight=a.int32();break;case 3:n.url=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...de};return void 0!==e.maxWidth&&null!==e.maxWidth?i.maxWidth=Number(e.maxWidth):i.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?i.maxHeight=Number(e.maxHeight):i.maxHeight=0,void 0!==e.url&&null!==e.url?i.url=String(e.url):i.url="",i},fromPartial(e){const i={...de};return void 0!==e.maxWidth&&null!==e.maxWidth?i.maxWidth=e.maxWidth:i.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?i.maxHeight=e.maxHeight:i.maxHeight=0,void 0!==e.url&&null!==e.url?i.url=e.url:i.url="",i},toJSON(e){const i={};return void 0!==e.maxWidth&&(i.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(i.maxHeight=e.maxHeight),void 0!==e.url&&(i.url=e.url),i}},ge={encode(e,i=q.Writer.create()){void 0!==e.username&&void 0!==e.username&&re.encode({value:e.username},i.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&re.encode({value:e.name},i.uint32(18).fork()).ldelim();for(const a of e.images)ce.encode(a,i.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&oe.encode({value:e.verified},i.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&oe.encode({value:e.editProfileDisabled},i.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&oe.encode({value:e.reportAbuseDisabled},i.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&oe.encode({value:e.abuseReportedName},i.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&oe.encode({value:e.abuseReportedImage},i.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&oe.encode({value:e.hasSpotifyName},i.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&oe.encode({value:e.hasSpotifyImage},i.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&le.encode({value:e.color},i.uint32(90).fork()).ldelim(),i},decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ue};for(n.images=[];a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.username=re.decode(a,a.uint32()).value;break;case 2:n.name=re.decode(a,a.uint32()).value;break;case 3:n.images.push(ce.decode(a,a.uint32()));break;case 4:n.verified=oe.decode(a,a.uint32()).value;break;case 5:n.editProfileDisabled=oe.decode(a,a.uint32()).value;break;case 6:n.reportAbuseDisabled=oe.decode(a,a.uint32()).value;break;case 7:n.abuseReportedName=oe.decode(a,a.uint32()).value;break;case 8:n.abuseReportedImage=oe.decode(a,a.uint32()).value;break;case 9:n.hasSpotifyName=oe.decode(a,a.uint32()).value;break;case 10:n.hasSpotifyImage=oe.decode(a,a.uint32()).value;break;case 11:n.color=le.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...ue};if(i.images=[],void 0!==e.username&&null!==e.username?i.username=String(e.username):i.username=void 0,void 0!==e.name&&null!==e.name?i.name=String(e.name):i.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)i.images.push(ce.fromJSON(a));return void 0!==e.verified&&null!==e.verified?i.verified=Boolean(e.verified):i.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?i.editProfileDisabled=Boolean(e.editProfileDisabled):i.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?i.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):i.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?i.abuseReportedName=Boolean(e.abuseReportedName):i.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?i.abuseReportedImage=Boolean(e.abuseReportedImage):i.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?i.hasSpotifyName=Boolean(e.hasSpotifyName):i.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?i.hasSpotifyImage=Boolean(e.hasSpotifyImage):i.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?i.color=Number(e.color):i.color=void 0,i},fromPartial(e){const i={...ue};if(i.images=[],void 0!==e.username&&null!==e.username?i.username=e.username:i.username=void 0,void 0!==e.name&&null!==e.name?i.name=e.name:i.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)i.images.push(ce.fromPartial(a));return void 0!==e.verified&&null!==e.verified?i.verified=e.verified:i.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?i.editProfileDisabled=e.editProfileDisabled:i.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?i.reportAbuseDisabled=e.reportAbuseDisabled:i.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?i.abuseReportedName=e.abuseReportedName:i.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?i.abuseReportedImage=e.abuseReportedImage:i.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?i.hasSpotifyName=e.hasSpotifyName:i.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?i.hasSpotifyImage=e.hasSpotifyImage:i.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?i.color=e.color:i.color=void 0,i},toJSON(e){const i={};return void 0!==e.username&&(i.username=e.username),void 0!==e.name&&(i.name=e.name),e.images?i.images=e.images.map((e=>e?ce.toJSON(e):void 0)):i.images=[],void 0!==e.verified&&(i.verified=e.verified),void 0!==e.editProfileDisabled&&(i.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(i.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(i.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(i.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(i.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(i.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(i.color=e.color),i}},pe={encode:(e,i=q.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&$.encode(e.mask,i.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&ge.encode(e.userProfile,i.uint32(18).fork()).ldelim(),i),decode(e,i){const a=e instanceof Uint8Array?new q.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...me};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.mask=$.decode(a,a.uint32());break;case 2:n.userProfile=ge.decode(a,a.uint32());break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...me};return void 0!==e.mask&&null!==e.mask?i.mask=$.fromJSON(e.mask):i.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?i.userProfile=ge.fromJSON(e.userProfile):i.userProfile=void 0,i},fromPartial(e){const i={...me};return void 0!==e.mask&&null!==e.mask?i.mask=$.fromPartial(e.mask):i.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?i.userProfile=ge.fromPartial(e.userProfile):i.userProfile=void 0,i},toJSON(e){const i={};return void 0!==e.mask&&(i.mask=e.mask?$.toJSON(e.mask):void 0),void 0!==e.userProfile&&(i.userProfile=e.userProfile?ge.toJSON(e.userProfile):void 0),i}},ve=`${z.XA}/identity`;async function ke(e,i,{name:a,imageUploadToken:t}){void 0!==a&&await async function(e,i,a){const t=pe.encode(pe.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(ve).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,X.C)(i))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(t.finish()).withoutMarket().send()}(e,i,a),void 0!==t&&(null!==t?await async function(e,i,a){await e.build().withHost(ve).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,X.C)(i))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,i,t):await async function(e,i){await e.build().withHost(ve).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,X.C)(i))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,i))}var he=a(52271);const fe={type:"error",get message(){return d.ag.get("user.edit-details.error.file-size-exceeded",10)}},be={type:"error",get message(){return d.ag.get("user.edit-details.error.too-small",300,300)}},Ne={type:"error",get message(){return d.ag.get("user.edit-details.error.missing-name")}},ye={type:"error",get message(){return d.ag.get("user.edit-details.error.failed-to-save")}},xe={type:"error",get message(){return d.ag.get("user.edit-details.error.file-upload-failed")}};function Se(e){return{type:"setLoading",loading:e}}function Ie(e){return{type:"setMessage",message:e}}function _e(e,i){switch(i.type){case"setName":return{...e,name:i.name};case"setMessage":return{...e,message:i.message,loading:!1};case"setLoading":return{...e,loading:i.loading,message:null};case"setImageData":return{...e,imageData:i.data,removeImage:!1};case"setImageToken":return{...e,imageToken:i.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}var Te=a(56309),je=a(59282),we=a(84958);const Ae="XwNfIrI6_hCa_9_T2cQB",Pe="so0bdX3oZH6YW5_nGxIR",Ce="aM3plU4zzDqjWlvUHGYb",Fe="zHeo4VUxytwm6Ptr0QyA",Re="vAeyAmeLkDEDKdL9Hou0",De="dnmzO6yYKkxUV8jl7O1Z",Oe="oN9QVvJKEtdTH3HGfCu1",Ue="uj7hczcCH1dZpse8Kfmi",Ee="wvLAEV5wF5C5ej6rvimT",Le="gAQfzAUp1FuSXODeZJfP",Me="dMhJaxli87_22jb_3d9x",We="MDb7QhAtHeyM4gKj8j8t",He="zGbjZMZ1DTx4futEbN9l",Ke=t.memo((function({uri:e,name:i,image:a,onClose:n,shouldOpenImagePicker:l,userCapabilities:o}){const[r,u]=(0,je.Hs)(),[m,c]=function({name:e,image:i}){return(0,t.useReducer)(_e,{loading:!1,message:null,name:e,image:i})}({name:i,image:a}),g=(0,t.useMemo)((()=>{const e=m.imageData||m.image;return e?[{url:e,width:300,height:300}]:[]}),[m.image,m.imageData]);(0,t.useEffect)((()=>{l&&u()}),[u,l]);const p=(0,t.useCallback)((e=>{e===je.Hy.FILE_TOO_BIG?c(Ie(fe)):e===je.Hy.IMAGE_TOO_SMALL&&c(Ie(be))}),[c]),v=(0,t.useCallback)((()=>{c({type:"removeImage"})}),[c]),k=(0,t.useCallback)((async i=>{i.preventDefault();if(0!==m.name.trim().length){c(Se(!0));try{const i=m.removeImage?null:m.imageToken;await async function(e,{name:i,imageUploadToken:a}){await ke(he.b.getInstance(),e,{name:i,imageUploadToken:a})}(e,{name:m.name,imageUploadToken:i}),n({name:m.name,image:m.imageData||m.image})}catch(e){c(Ie(ye))}}else c(Ie(Ne))}),[c,n,m.image,m.imageData,m.imageToken,m.name,m.removeImage,e]);return(0,y.jsx)(Te.Z,{isOpen:!0,contentLabel:d.ag.get("user.edit-details.title"),onRequestClose:()=>n(),children:(0,y.jsxs)("div",{className:Ae,children:[(0,y.jsxs)("div",{className:Ce,children:[(0,y.jsx)(U.D,{as:"h1",variant:"canon",children:d.ag.get("user.edit-details.title")}),(0,y.jsx)("button",{className:Fe,onClick:()=>n(),"aria-label":d.ag.get("close"),children:(0,y.jsx)(E.k,{iconSize:16})})]}),m.message&&(0,y.jsx)(we.X,{isErrorMessage:"error"===m.message.type,message:m.message.message}),(0,y.jsxs)("form",{className:Pe,onSubmit:k,children:[o.edit_image&&(0,y.jsx)(je.uL,{isOpen:r,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:i,imageDataUrl:a}=e;if(c(Ie(null)),c({type:"setImageData",data:a}),i)try{c(Se(!0));const e=await async function(e){const i=await he.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!i.body)throw new Error("No upload token recieved");return i.body.uploadToken}(i);c({type:"setImageToken",token:e}),c(Se(!1))}catch{c(Ie(xe))}},onError:p}),(0,y.jsxs)("div",{className:Re,children:[(0,y.jsx)(Z,{name:i,images:g,onClickEdit:u,onClickRemove:v,canEdit:o.edit_image}),m.loading&&(0,y.jsx)("div",{className:De,children:(0,y.jsx)(L.T,{})})]}),(0,y.jsxs)("div",{className:Ue,children:[(0,y.jsx)("label",{htmlFor:"user-edit-name",className:Ee,children:(0,y.jsx)(U.D,{variant:"finaleBold",className:Le,children:d.ag.get("user.edit-details.name-label")})}),(0,y.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:s()(Oe,Me),onChange:e=>{c(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:d.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:m.name,disabled:!o.edit_name})]}),(0,y.jsx)("div",{className:We,children:(0,y.jsx)(M.D,{colorSet:"invertedLight",onClick:k,disabled:m.loading,children:d.ag.get("save")})}),(0,y.jsx)(U.D,{as:"p",variant:"finaleBold",className:He,children:d.ag.get("image-upload.legal-disclaimer")})]})]})})}));var Be=a(66352),Je=a(18305),Ve=a(43602),Qe=a(17576),Ge=a(55272),Ze=a(67966),ze=a(21487),Xe=a(8625),qe=a(245),Ye=a(53972),$e=a(31399),ei=a(67338),ii=a(55742),ai=a(65926),ti=a(94634),ni=a(15978),li=a(33088);const oi=t.memo((function({openModal:e,spec:i,logger:a,name:n,backgroundColor:l,isCurrentUser:o,uri:r}){const[s,u]=(0,ti.H)(r),m=(0,ii.o)(),c=!(0,ai.k)(),g=(0,t.useCallback)((()=>{m({targetUri:r,intent:s?"unfollow":"follow",type:"click"});const e=i.actionBarFactory().followButtonFactory();s?(u(!1),a.logInteraction(e.hitUnfollow({itemToBeUnfollowed:r}))):(u(!0),a.logInteraction(e.hitFollow({itemToBeFollowed:r})))}),[s,a,m,u,i,r]),p=(0,t.useCallback)((()=>{const e=i.actionBarFactory().contextMenuButtonFactory().hitUiReveal();a.logInteraction(e)}),[a,i]),v=(0,li.j)();return(0,y.jsx)(qe.o,{backgroundColor:l,children:(0,y.jsxs)(qe.F,{children:[!o&&(0,y.jsx)($e.r,{children:(0,y.jsx)(ei.e,{isFollowing:Boolean(s),onClick:g,disabled:c})}),(0,y.jsx)(ni.y,{menu:(0,y.jsx)(P.I,{uri:r,onEditProfileCallback:e}),children:(0,y.jsx)(Ye.z,{label:d.ag.get("more.label.context",n),onClick:p,size:v})})]})})}));var ri=a(33813),si=a(62699),di=a(35819),ui=a(59522),mi=a(5788),ci=a(4722),gi=a(14033),pi=a(96791);const vi=t.memo((function({tracks:e,hasHeaderRow:i=!1,nrTracksVisible:a,uri:n}){const l=(0,X.C)(n),r=(0,o.qC)(l,"tracks").toURI(),s=(0,t.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:u}=(0,ci.n)({uri:r,pages:[{items:e.map((e=>({type:pi.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),m=(0,t.useCallback)(((e,i)=>{const a=(0,ze.X)(e?.albumOfTrack?.coverArt?.sources,{desiredSize:40});return(0,y.jsx)(di.SS,{index:i,uri:(0,ui.$)(e),duration_ms:e.duration.totalMilliseconds,name:e.name,artists:e.artists.items.map((({uri:e,profile:{name:i}})=>({uri:e,name:i}))),album:e.albumOfTrack,isPlayable:!0,isExplicit:e.contentRating?.label===gi.KS.Explicit,isMOGEFRestricted:e.contentRating?.label===gi.KS.NineteenPlus,imgUrl:a?.url||"",contextUri:r,usePlayContextItem:u},i+e.uri)}),[r,u]),c=(0,t.useMemo)((()=>[si.QD.INDEX,si.QD.TITLE_AND_ARTIST,si.QD.ALBUM,si.QD.DURATION]),[]),g=(0,t.useCallback)((e=>e.uri),[]);return(0,y.jsx)(mi.JL,{value:"user-top-tracks-tracklist",children:(0,y.jsx)(si.Pv,{ariaLabel:d.ag.get("top_tracks_this_month"),renderRow:m,nrTracks:s.length,tracks:s,resolveUri:g,hasHeaderRow:i,columns:c})})}),((e,i)=>e.tracks===i.tracks)),ki=t.memo((function({tracks:e,title:i,tagline:a,seeAllUri:n,className:l,uri:o,spec:r}){const s=(0,Ze.$P)(),d=(0,t.useCallback)((()=>{const e=r.titleLinkFactory().hitUiNavigate({destination:n});s.logInteraction(e)}),[s,n,r]),u=(0,t.useCallback)((()=>{const e=r.titleLinkFactory().hitUiNavigate({destination:n});s.logInteraction(e)}),[s,n,r]);if(!e||0===e.totalCount||0===e.items.length)return null;const m=e.totalCount>4;return(0,y.jsxs)("section",{className:l,children:[(0,y.jsx)(ri.r,{title:i,tagline:a,seeAllUri:n,hasMoreElements:m,onClickTitle:d,onClickSeeAll:u}),(0,y.jsx)(Ze.Nh,{spec:r,children:(0,y.jsx)(vi,{tracks:e.items,uri:o,nrTracksVisible:4})})]})}),((e,i)=>e.tracks===i.tracks));function hi(e,i){switch(i.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var fi=a(29461),bi=a(38781),Ni=a(73314),yi=a(51774),xi=a(39293),Si=(a(95101),a(32548),a(38149));const Ii={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"userTopContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeTopArtists"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topArtistsInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AffinityInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeTopTracks"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topTracksInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AffinityInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userTopArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userTopTracks"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"userTopArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topArtists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"topArtistsInput"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"includeTopArtists"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistPageV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"userTopTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"topTracksInput"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"includeTopTracks"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPageV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]};function _i(e){return"Artist"===e.__typename}function Ti(e){if("ArtistPageV2"!==e?.topArtists?.__typename)return null;const i=e.topArtists.items.map((e=>e.data)).filter(_i);return 0===i.length?null:{totalCount:e.topArtists.totalCount,items:i}}function ji(e){return"Track"===e.__typename}function wi(e){if("TrackPageV2"!==e?.topTracks?.__typename)return null;const i=e.topTracks.items.map((e=>e.data)).filter(ji).filter((e=>null!==e.albumOfTrack));return 0===i.length?null:{totalCount:e.topTracks.totalCount,items:i}}const Ai=gi.K1.Affinity,Pi=gi.eB.ShortTerm;function Ci({includeTopArtists:e,includeTopTracks:i,topArtistsLimit:a,topTracksLimit:t}){const{data:n,loading:l,error:o}=(r={includeTopArtists:e,topArtistsInput:{offset:0,limit:a,sortBy:Ai,timeRange:Pi},includeTopTracks:i,topTracksInput:{offset:0,limit:t,sortBy:Ai,timeRange:Pi}},s={enabled:e||i,cacheTime:18e5,staleTime:3e5},(0,Si.a)(Ii,r,s));var r,s;return null!==o?{topTracks:null,topArtists:null,loading:l,error:new Error("Failed loading user top content!")}:{topTracks:wi(n?.me?.profile??null),topArtists:Ti(n?.me?.profile??null),loading:l,error:null}}const Fi=18e5,Ri=3e5,Di=(0,_.P1)(Ve.dy,(e=>e?.images||[])),Oi=({uri:e,isCurrentUser:i})=>{const a=(0,I.v9)(Ve.dy)?.uri,n=(0,I.v9)(Ve.Gf),l=(0,I.v9)(Di),r=(0,I.I0)(),c=(0,T.W6)(xi.J4M,{loadingValue:!0}),h=(0,t.useMemo)((()=>(0,ze.X)(l)),[l]),[{isModalOpen:f,modalVariant:b,shouldOpenImagePicker:N},x]=function(){const[e,i]=(0,t.useReducer)(hi,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,i]}(),S=(0,Be.g)(),{data:_,loading:U}=(0,g.J)(p.n5.getProfile,[{uri:e,playlists:10,artists:10,episodes:10}],{cacheTime:Fi,staleTime:Ri}),E=_?.public_playlists,L=_?.is_verified,M=_?.recently_played_artists,W=i?h?.url||"":_?.image_url||"",H=(0,X.C)(e),K=(i?n:_?.name)||"",B=(0,Je.Z)(_?.image_url||null),{spec:J,logger:V}=(0,Ze.fU)(j.L,{data:{uri:e}}),Q=(0,t.useMemo)((()=>J.sectionTopTracksFactory()),[J]),G=!S&&(!1!==_?.show_follows||i),Z=i&&c,{data:z,loading:q}=(0,g.J)(p.n5.getFollowing,[e],{enabled:G,cacheTime:Fi,staleTime:Ri}),Y=z?.profiles,{data:$,loading:ee}=(0,g.J)(p.n5.getFollowers,[e],{enabled:G,cacheTime:Fi,staleTime:Ri}),ie=$?.profiles,ae=Y?.some((e=>e.uri===a)),{topArtists:te,topTracks:ne,loading:le}=Ci({includeTopArtists:Z,includeTopTracks:Z,topArtistsLimit:10,topTracksLimit:4}),oe=(0,t.useCallback)((e=>{x({type:"CLOSE_MODAL"}),e&&(r((0,Qe.dL)(e.name)),r((0,Qe.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[x,r]),re=(0,t.useCallback)((()=>{x({type:"OPEN_MODAL"});const e=J.headerFactory().usernameFactory().hitUiReveal();V.logInteraction(e)}),[V,x,J]),se=(0,t.useCallback)((()=>{x({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=J.headerFactory().profileImageFactory().hitUiReveal();V.logInteraction(e)}),[V,x,J]),de=(0,t.useMemo)((()=>[{url:W}]),[W]),ue=(0,t.useCallback)((()=>{const e=J.headerFactory().usernameFactory().hitUiReveal();V.logInteraction(e)}),[V,J]),me=(0,t.useCallback)(((e,i)=>{if(!i)return;const a=J.headerFactory().followersLinkFactory().hitUiNavigate({destination:i});V.logInteraction(a)}),[V,J]),ce=(0,t.useCallback)(((e,i)=>{if(!i)return;const a=J.headerFactory().followersLinkFactory().hitUiNavigate({destination:i});V.logInteraction(a)}),[V,J]);if(!_||U||q||ee||le)return(0,y.jsx)(m.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.page")});const ge=s()("contentSpacing",k),pe=G&&!!ie?.length,ve=G&&!!Y?.length;return(0,y.jsxs)("div",{className:v,children:[(0,y.jsx)(C.$,{children:K}),(0,y.jsxs)(R.gF,{backgroundColor:B,children:[(0,y.jsx)(D.W,{children:(0,y.jsx)(O.i,{text:K})}),(0,y.jsx)(Ge._,{menu:(0,y.jsx)(P.I,{uri:_.uri}),children:(0,y.jsx)(fi.k,{children:(0,y.jsx)(F.T,{canEdit:i&&!_.edit_image_disabled,name:K,images:de,onClick:se,placeholderType:"user",shape:R.Kc.CIRCLE})})}),(0,y.jsxs)(R.sP,{children:[(0,y.jsx)(bi.g,{children:L?(0,y.jsx)(Ni.S,{text:d.ag.get("card.tag.profile")}):d.ag.get("card.tag.profile")}),(0,y.jsx)(Ge._,{menu:(0,y.jsx)(P.I,{uri:_.uri}),children:(0,y.jsx)(R.xd,{canEdit:i&&!_.edit_name_disabled,editTitle:d.ag.get("playlist.edit-details.title"),onClick:re,children:K})}),(0,y.jsx)(R.QS,{totalFollowers:_.followers_count,totalFollowing:_.following_count,publicPlaylists:_.total_public_playlists_count,userUri:e,onCreatorClick:ue,onTotalFollowersClick:me,onTotalFollowingClick:ce,theyFollowUs:ae})]})]}),(0,y.jsx)(oi,{openModal:re,spec:J,logger:V,name:K,backgroundColor:B,isCurrentUser:i,uri:e}),(0,y.jsxs)(Ze.Nh,{spec:J,children:[i&&(0,y.jsxs)(y.Fragment,{children:[null!==te&&(0,y.jsx)(yi.q,{className:ge,total:te.totalCount,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(H,["top","artists"]).toURI(),id:"top-artists",index:0,children:te.items.map(((e,i)=>(0,y.jsx)(w.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))}),(0,y.jsx)(ki,{className:ge,title:d.ag.get("top_tracks_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(H,["top","tracks"]).toURI(),uri:e,tracks:ne,spec:Q})]}),(0,y.jsx)(yi.q,{className:ge,total:_.total_public_playlists_count,title:d.ag.get("public_playlists"),seeAllUri:(0,o.QK)(H,["playlists"]).toURI(),id:"playlists",index:1,children:E?.map(((e,i)=>(0,y.jsx)(A.Z,{index:i,uri:e.uri,name:e.name,images:[{url:(0,Xe.p)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):""},e.uri)))}),M?.length?(0,y.jsx)(yi.q,{className:ge,total:M?.length,title:d.ag.get("recently_played_artists"),seeAllUri:(0,o.QK)(H,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:M?.map(((e,i)=>(0,y.jsx)(w.I,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,pe?(0,y.jsx)(yi.q,{className:ge,title:d.ag.get("followers"),total:ie?.length,seeAllUri:(0,o.QK)(H,["followers"]).toURI(),id:"followers",index:3,children:ie?.map(((e,i)=>(0,y.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,ve?(0,y.jsx)(yi.q,{className:ge,title:d.ag.get("following"),total:Y?.length,seeAllUri:(0,o.QK)(H,["following"]).toURI(),id:"following",index:4,children:Y?.map(((e,i)=>(0,y.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,i&&f&&("editProfile"===b?(0,y.jsx)(Ke,{uri:e,name:K,image:W,onClose:oe,shouldOpenImagePicker:N,userCapabilities:{edit_image:!_?.edit_image_disabled,edit_name:!_?.edit_name_disabled}}):null)]})]})},Ui=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,g.J)(p.n5.getPlaylists,[{uri:i}]),{public_playlists:l,total_public_playlists_count:o=0}=a||{};return t?(0,y.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,y.jsx)(c.P,{className:s()("contentSpacing",h),total:o,title:d.ag.get("public_playlists"),showAll:!0,children:l?.map(((e,i)=>(0,y.jsx)(A.Z,{index:i,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):"",images:[{url:(0,Xe.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Ei=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,g.J)(p.n5.getRecentlyPlayedArtists,[{uri:i,limit:50}]),l=a?.artists;return t?(0,y.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,y.jsx)(c.P,{className:s()("contentSpacing",h),total:l?.length,title:d.ag.get("recently_played_artists"),showAll:!0,children:l?.map(((e,i)=>(0,y.jsx)(w.I,{index:i,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Li=()=>{const{topArtists:e,loading:i,error:a}=Ci({includeTopArtists:!0,includeTopTracks:!1,topArtistsLimit:100,topTracksLimit:0});return i?(0,y.jsx)(m.h,{hasError:null!==a,errorMessage:d.ag.get("error.not_found.title.page")}):null===e?null:(0,y.jsx)(c.P,{className:s()("contentSpacing",h),total:e.items.length,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),showAll:!0,children:e.items.map(((e,i)=>(0,y.jsx)(w.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))})},Mi=({isCurrentUser:e})=>e?(0,y.jsx)(Li,{}):(0,y.jsx)(m.h,{hasError:!0,errorMessage:d.ag.get("error.not_found.title.page")}),Wi=({uri:e})=>{const{topTracks:i,loading:a,error:t}=Ci({includeTopArtists:!1,includeTopTracks:!0,topArtistsLimit:0,topTracksLimit:100});return a?(0,y.jsx)(m.h,{hasError:null!==t,errorMessage:d.ag.get("error.not_found.title.page")}):null===i?null:(0,y.jsxs)("div",{className:s()("contentSpacing",h,f),children:[(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)(U.D,{as:"h1",variant:"canon",className:N,children:d.ag.get("top_tracks_this_month")}),(0,y.jsx)(U.D,{as:"p",variant:"mesto",children:d.ag.get("only_visible_to_you")})]}),(0,y.jsx)(vi,{tracks:i.items,uri:e,hasHeaderRow:!0})]})},Hi=({uri:e,isCurrentUser:i})=>i?(0,y.jsx)(Wi,{uri:e}):(0,y.jsx)(m.h,{hasError:!0,errorMessage:d.ag.get("error.not_found.title.page")}),Ki=e=>{const i=(0,Be.g)(),a=(()=>{const e=(0,I.v9)((e=>e.session?.user));return e?{type:pi.p.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:i,height:a})=>({url:e,width:i||void 0,height:a||void 0}))),optInTrialPremiumOnlyMarket:Boolean(e.policies?.opt_in_trial_premium_only_market)}:null})()?.username;return!i&&a===e};var Bi=a(6136);const Ji=(0,t.memo)((function(){const{userId:e=""}=(0,n.UO)(),i=decodeURIComponent(e),a=(0,o.QK)(i).toURI(),t=Ki(i);return(0,y.jsx)("section",{children:(0,y.jsxs)(n.Z5,{children:[(0,y.jsx)(n.AW,{path:"playlists",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE_PLAYLISTS,children:(0,y.jsx)(Ui,{uri:a})})}),(0,y.jsx)(n.AW,{path:"top/tracks",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE_TOP_TRACKS,children:(0,y.jsx)(Hi,{uri:a,isCurrentUser:t})})}),(0,y.jsx)(n.AW,{path:"top/artists",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE_TOP_ARTISTS,children:(0,y.jsx)(Mi,{isCurrentUser:t})})}),(0,y.jsx)(n.AW,{path:"recently-played-artists",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,y.jsx)(Ei,{uri:a})})}),(0,y.jsx)(n.AW,{path:"following",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE_FOLLOWING,children:(0,y.jsx)(S,{uri:a})})}),(0,y.jsx)(n.AW,{path:"followers",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE_FOLLOWERS,children:(0,y.jsx)(x,{uri:a})})}),(0,y.jsx)(n.AW,{path:"/",element:(0,y.jsx)(Bi.K,{pageId:l.Wg.PROFILE,children:(0,y.jsx)(Oi,{uri:a,isCurrentUser:t})})})]})})}))}}]);
//# sourceMappingURL=xpui-routes-profile.js.map