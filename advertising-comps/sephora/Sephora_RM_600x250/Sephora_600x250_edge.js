
(function(compId){var _=null,y=true,n=false,x1='6.0.0',e21='${Play_Button}',x17='rgba(255,255,255,0.00)',x2='5.0.0',e20='${_30SEC_H264_CLIPCHAMP_240p}',x5='rgba(0,0,0,0)',e31='${Stage}',x12='rgba(255,255,255,0)',g='image',e28='${Expand}',e22='${Collapse}',m='rect',x4='rgba(255,255,255,1.00)',e30='${Expand_Button}',i='none',x3='6.0.0.400',e27='${Pause_Button}',o='opacity',lf='left',x18='rgba(0,0,0,1.00)',e23='${Border}',e25='${Overlay}',e29='${CTA2}',e26='${Models}',w='width',e24='${Shadow}',e19='${CTA_Button}',tp='top',h='height',x13='solid';var g8='Expand.png',g10='CTA2.png',g16='Overlay.png',g7='Models.png',g14='30SEC%20H264_CLIPCHAMP_240p.mp4',g11='Collapse.png',g6='Logo.png',g9='Text.png',g15='Shadow.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'White_Stripe_4',t:m,r:['0px','139px','600px','111px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'White_Stripe_3',t:m,r:['0px','95px','600px','21px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'White_Stripe_2',t:m,r:['0px','52px','600px','21px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'Logo',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'1',f:[x5,im+g6,'0px','0px']},{id:'Models',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'1',f:[x5,im+g7,'0px','0px']},{id:'Expand',t:g,r:['0','0','300px','250px','auto','auto'],o:'1',f:[x5,im+g8,'0px','0px']},{id:'Text',t:g,r:['0','0','300px','250px','auto','auto'],o:'1',f:[x5,im+g9,'0px','0px']},{id:'CTA2',t:g,r:['-205px','43px','501px','208px','auto','auto'],f:[x5,im+g10,'0px','0px']},{id:'Collapse',t:g,r:['-300px','0px','600px','250px','auto','auto'],o:'0',f:[x5,im+g11,'0px','0px']},{id:'Border',t:m,r:['0px','0px','298px','248px','auto','auto'],f:[x12],s:[1,"rgb(0, 0, 0)",x13]},{id:'_30SEC_H264_CLIPCHAMP_240p',t:'video',tag:'video',r:['270px','14px','314px','177px','auto','auto'],o:'0',sr:[vid+g14],pr:'auto',ps:'images/_30SEC_H264_CLIPCHAMP_240p_video_poster.png'},{id:'Shadow',t:g,r:['0px','1px','600px','250px','auto','auto'],f:[x5,im+g15,'0px','0px']},{id:'Overlay',t:g,r:['0px','1px','600px','251px','auto','auto'],o:'0',f:[x5,im+g16,'0px','0px']},{id:'Expand_Button',t:m,r:['229px','223px','71px','21px','auto','auto'],cu:'pointer',f:[x17],s:[0,"rgb(0, 0, 0)",i]},{id:'Collapse_Button',t:m,r:['522px','223px','71px','21px','auto','auto'],cu:'pointer',f:[x17],s:[0,"rgb(0, 0, 0)",i]},{id:'CTA_Button',t:m,r:['21px','214px','122px','33px','auto','auto'],cu:'pointer',f:[x12],s:[0,"rgb(0, 0, 0)",i]},{id:'Play_Button',t:m,r:['605px','14px','314px','177px','auto','auto'],cu:'pointer',f:[x12],s:[0,"rgb(0, 0, 0)",i]},{id:'Pause_Button',t:m,r:['370px','8px','330px','185px','auto','auto'],cu:'pointer',f:[x12],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],overflow:'hidden',f:[x18]}}},tt:{d:32920,a:y,l:{"1":1000,"2":1750,"3":2500,"4":2750},data:[["eid217",tp,1250,250,"linear",e19,'214px','206px'],["eid228",tp,2000,250,"linear",e19,'206px','214px'],["eid287",tp,2500,250,"linear",e19,'214px','206px'],["eid216",lf,1250,250,"linear",e19,'21px','270px'],["eid286",lf,2000,250,"linear",e19,'270px','21px'],["eid289",lf,2500,250,"linear",e19,'21px','270px'],["eid202",h,1750,0,"linear",e20,'177px','177px'],["eid250",lf,1500,50,"linear",e21,'605px','270px'],["eid252",lf,1950,50,"linear",e21,'270px','605px'],["eid253",lf,2000,750,"linear",e21,'605px','270px'],["eid177",lf,1250,250,"linear",e22,'-300px','0px'],["eid180",lf,2000,250,"linear",e22,'0px','-300px'],["eid184",lf,2500,250,"linear",e22,'-300px','0px'],["eid282",h,0,0,"linear",e23,'248px','248px'],["eid195",o,1500,250,"linear",e24,'0','1'],["eid196",o,1750,250,"linear",e24,'1','0'],["eid197",o,2500,250,"linear",e24,'0','1'],["eid209",tp,1750,0,"linear",e25,'1px','1px'],["eid258",w,1000,125,"linear",e26,'300px','271px'],["eid281",w,2375,125,"linear",e26,'271px','300px'],["eid297",w,2500,125,"linear",e26,'300px','271px'],["eid115",w,2750,0,"linear",e27,'330px','330px'],["eid187",w,1250,250,"linear",e23,'298px','598px'],["eid190",w,2000,250,"linear",e23,'598px','298px'],["eid191",w,2500,250,"linear",e23,'298px','598px'],["eid174",o,1125,125,"linear",e22,'0','1'],["eid181",o,2250,125,"linear",e22,'1','0'],["eid185",o,2500,250,"linear",e22,'0','1'],["eid128",o,0,0,"linear",e25,'0','0'],["eid121",o,1500,250,"linear",e25,'0','1'],["eid122",o,1750,250,"linear",e25,'1','0'],["eid204",w,1750,0,"linear",e20,'314px','314px'],["eid203",lf,1750,0,"linear",e20,'270px','270px'],["eid6",o,1000,125,"linear",e28,'1','0'],["eid151",o,2375,125,"linear",e28,'0','1'],["eid102",o,2500,250,"linear",e28,'1','0'],["eid205",tp,1750,0,"linear",e20,'14px','14px'],["eid219",h,1250,250,"linear",e19,'28px','33px'],["eid229",h,2000,250,"linear",e19,'33px','28px'],["eid288",h,2500,250,"linear",e19,'28px','33px'],["eid118",o,1000,0,"linear",e20,'0','0'],["eid120",o,1500,250,"linear",e20,'0','1'],["eid123",o,1750,250,"linear",e20,'1','0'],["eid127",o,2500,250,"linear",e20,'0','1'],["eid161",h,1250,250,"linear",e29,'208px','250px'],["eid169",h,2000,250,"linear",e29,'250px','208px'],["eid291",h,2500,250,"linear",e29,'208px','250px'],["eid256",h,1000,125,"linear",e26,'250px','225px'],["eid279",h,2375,125,"linear",e26,'225px','250px'],["eid296",h,2500,125,"linear",e26,'250px','225px'],["eid260",tp,1000,125,"linear",e26,'0px','17px'],["eid280",tp,2375,125,"linear",e26,'17px','0px'],["eid295",tp,2500,125,"linear",e26,'0px','17px'],["eid213",tp,1000,125,"linear",e30,'223px','266px'],["eid215",tp,2375,125,"linear",e30,'266px','223px'],["eid163",w,1250,250,"linear",e29,'501px','600px'],["eid171",w,2000,250,"linear",e29,'600px','501px'],["eid294",w,2500,250,"linear",e29,'501px','600px'],["eid194",w,1750,0,"linear",e25,'600px','600px'],["eid218",w,1250,250,"linear",e19,'122px','147px'],["eid231",w,2000,250,"linear",e19,'147px','122px'],["eid290",w,2500,250,"linear",e19,'122px','147px'],["eid162",lf,1250,250,"linear",e29,'-205px','0px'],["eid284",lf,2000,250,"linear",e29,'0px','-205px'],["eid293",lf,2500,250,"linear",e29,'-205px','0px'],["eid208",h,1750,0,"linear",e25,'251px','251px'],["eid138",w,1250,250,"linear",e31,'300px','600px'],["eid142",w,2000,250,"linear",e31,'600px','300px'],["eid143",w,2500,250,"linear",e31,'300px','600px'],["eid160",tp,1250,250,"linear",e29,'43px','0px'],["eid168",tp,2000,250,"linear",e29,'0px','43px'],["eid292",tp,2500,250,"linear",e29,'43px','0px'],["eid113",lf,2500,250,"linear",e27,'766px','370px'],["eid117","tr",2750,function(e,d){this.eMA(e,d);},['play','${_30SEC_H264_CLIPCHAMP_240p}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-297619467");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Expand_Button}","click",function(sym,e){this.play("1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){this.stop("1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Collapse_Button}","click",function(sym,e){this.play("2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){this.stop("2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){this.stop("1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${CTA_Button}","click",function(sym,e){window.open("http://www.sephora.com/","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Play_Button}","click",function(sym,e){this.play("4");sym.$("_30SEC_H264_CLIPCHAMP_240p")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Pause_Button}","click",function(sym,e){this.stop("2");sym.$("_30SEC_H264_CLIPCHAMP_240p")[0].pause();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-297619467");