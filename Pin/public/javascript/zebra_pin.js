!function(a){"use strict";a.Zebra_Pin=function(b,c){var d={class_name:"Zebra_Pin",contain:!1,hard:!1,top_spacing:0,bottom_spacing:0,z_index:9999,onPin:null,onUnpin:null},e=this,f=(Math.random()+1).toString(36).substring(2,7);e.settings={};var g=function(){e.settings=a.extend({},d,c),e.update(),a(window).bind("resize",function(){e.update()})};e.update=function(){b.each(function(b){void 0===a(this).data("Zebra_Pin_Position")?a(this).data("Zebra_Pin_Position",a(this).css("position")):a(this).css("position",a(this).data("Zebra_Pin_Position"));var c=a(this),d=c.offset(),g=c.position(),h=c.outerHeight(),i=parseInt(c.css("marginLeft"),10)||0,j=parseInt(c.css("marginTop"),10)||0;if(d.left-=i,d.top-=j,e.settings.contain)var k=c.parent(),l=k.height(),m=k.offset();if(e.settings.hard)c.css({position:"fixed",left:d.left,top:d.top,zIndex:e.settings.z_index}).addClass(e.settings.class_name);else{c.css({zIndex:e.settings.z_index}).removeClass(e.settings.class_name);var n=".Zebra_Pin_"+f+"_"+b;a(window).unbind("scroll"+n).bind("scroll"+n,function(){var f=a(window).scrollTop();f>=d.top-e.settings.top_spacing&&(!e.settings.contain||f<=m.top+l-h-e.settings.bottom_spacing)&&"fixed"!=c.css("position")?(c.css({position:"fixed",left:d.left,top:e.settings.top_spacing}).addClass(e.settings.class_name),e.settings.onPin&&"function"==typeof e.settings.onPin&&e.settings.onPin(d.top-e.settings.top_spacing,c,b)):f<d.top-e.settings.top_spacing&&"absolute"!=c.css("position")?(c.css({position:"absolute",left:g.left,top:g.top}).removeClass(e.settings.class_name),e.settings.onUnpin&&"function"==typeof e.settings.onUnpin&&e.settings.onUnpin(d.top-e.settings.top_spacing,c,b)):e.settings.contain&&f>=m.top+l-h-e.settings.bottom_spacing&&"absolute"!=c.css("position")&&(c.css({position:"absolute",left:g.left,top:m.top+l-h-e.settings.bottom_spacing}).removeClass(e.settings.class_name),e.settings.onUnpin&&"function"==typeof e.settings.onUnpin&&e.settings.onUnpin(m.top+l-h-e.settings.bottom_spacing,c,b))}),a(window).trigger("scroll"+n)}})},g()}}(jQuery);