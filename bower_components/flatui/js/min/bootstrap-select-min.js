!function($){var t=function(e,i,n){n&&(n.stopPropagation(),n.preventDefault()),this.$element=$(e),this.$newElement=null,this.button=null,this.options=$.extend({},$.fn.selectpicker.defaults,this.$element.data(),"object"==typeof i&&i),null==this.options.title&&(this.options.title=this.$element.attr("title")),this.val=t.prototype.val,this.render=t.prototype.render,this.init()};t.prototype={constructor:t,init:function(t){function e(){var t=p-$(window).scrollTop(),e=window.innerHeight,i=v+parseInt(o.css("margin-top"))+parseInt(o.css("margin-bottom"))+2,n=e-t-f-i;u=n,l.hasClass("dropup")&&(u=t-i),o.css({"max-height":u+"px","overflow-y":"auto","min-height":3*r+"px"})}var i=this;this.$element.hide(),this.multiple=this.$element.prop("multiple");var n=void 0!==this.$element.attr("class")?this.$element.attr("class").split(/\s+/):"",s=this.$element.attr("id");this.$element.after(this.createView()),this.$newElement=this.$element.next(".select");var l=this.$newElement,o=this.$newElement.find(".dropdown-menu"),d=this.$newElement.find(".dropdown-arrow"),a=o.find("li > a"),r=l.addClass("open").find(".dropdown-menu li > a").outerHeight();l.removeClass("open");var h=o.find("li .divider").outerHeight(!0),p=this.$newElement.offset().top,c=0,u=0,f=this.$newElement.outerHeight();this.button=this.$newElement.find("> button"),void 0!==s&&(this.button.attr("id",s),$('label[for="'+s+'"]').click(function(){l.find("button#"+s).focus()}));for(var m=0;m<n.length;m++)"selectpicker"!=n[m]&&this.$newElement.addClass(n[m]);this.multiple&&this.$newElement.addClass("select-multiple"),this.button.addClass(this.options.style),o.addClass(this.options.menuStyle),d.addClass(function(){return i.options.menuStyle?i.options.menuStyle.replace("dropdown-","dropdown-arrow-"):void 0}),this.checkDisabled(),this.checkTabIndex(),this.clickListener();var v=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"))+parseInt(o.css("border-top-width"))+parseInt(o.css("border-bottom-width"));if("auto"==this.options.size)e(),$(window).resize(e),$(window).scroll(e),this.$element.bind("DOMNodeInserted",e);else if(this.options.size&&"auto"!=this.options.size&&o.find("li").length>this.options.size){var w=o.find("li > *").filter(":not(.divider)").slice(0,this.options.size).last().parent().index(),b=o.find("li").slice(0,w+1).find(".divider").length;u=r*this.options.size+b*h+v,o.css({"max-height":u+"px","overflow-y":"scroll"})}this.$element.bind("DOMNodeInserted",$.proxy(this.reloadLi,this)),this.render()},createDropdown:function(){var t="<div class='btn-group select'><i class='dropdown-arrow'></i><button class='btn dropdown-toggle clearfix' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><ul class='dropdown-menu' role='menu'></ul></div>";return $(t)},createView:function(){var t=this.createDropdown(),e=this.createLi();return t.find("ul").append(e),t},reloadLi:function(){this.destroyLi(),$li=this.createLi(),this.$newElement.find("ul").append($li),this.render()},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var t=this,e=[],i=[],n="";if(this.$element.find("option").each(function(){e.push($(this).text())}),this.$element.find("option").each(function(e){var n=void 0!==$(this).attr("class")?$(this).attr("class"):"",s=$(this).text(),l=void 0!==$(this).data("subtext")?'<small class="muted">'+$(this).data("subtext")+"</small>":"";if(s+=l,$(this).parent().is("optgroup")&&1!=$(this).data("divider"))if(0==$(this).index()){var o=$(this).parent().attr("label"),d=void 0!==$(this).parent().data("subtext")?'<small class="muted">'+$(this).parent().data("subtext")+"</small>":"";o+=d,i.push(0!=$(this)[0].index?'<div class="divider"></div><dt>'+o+"</dt>"+t.createA(s,"opt "+n):"<dt>"+o+"</dt>"+t.createA(s,"opt "+n))}else i.push(t.createA(s,"opt "+n));else i.push(1==$(this).data("divider")?'<div class="divider"></div>':t.createA(s,n))}),e.length>0)for(var s=0;s<e.length;s++){var l=this.$element.find("option").eq(s);n+="<li rel="+s+">"+i[s]+"</li>"}return 0!=this.$element.find("option:selected").length||t.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),$(n)},createA:function(t,e){return'<a tabindex="-1" href="#" class="'+e+'"><span class="pull-left">'+t+"</span></a>"},render:function(){var t=this;if("auto"==this.options.width){var e=this.$newElement.find(".dropdown-menu").css("width");this.$newElement.css("width",e)}else this.options.width&&"auto"!=this.options.width&&this.$newElement.css("width",this.options.width);this.$element.find("option").each(function(e){t.setDisabled(e,$(this).is(":disabled")||$(this).parent().is(":disabled")),t.setSelected(e,$(this).is(":selected"))});var i=this.$element.find("option:selected").map(function(t,e){return void 0!=$(this).attr("title")?$(this).attr("title"):$(this).text()}).toArray(),n=i.join(", ");if(t.multiple&&t.options.selectedTextFormat.indexOf("count")>-1){var s=t.options.selectedTextFormat.split(">");(s.length>1&&i.length>s[1]||1==s.length&&i.length>=2)&&(n=i.length+" of "+this.$element.find("option").length+" selected")}n||(n=void 0!=t.options.title?t.options.title:t.options.noneSelectedText),this.$element.next(".select").find(".filter-option").html(n)},setSelected:function(t,e){e?this.$newElement.find("li").eq(t).addClass("selected"):this.$newElement.find("li").eq(t).removeClass("selected")},setDisabled:function(t,e){e?this.$newElement.find("li").eq(t).addClass("disabled"):this.$newElement.find("li").eq(t).removeClass("disabled")},checkDisabled:function(){this.$element.is(":disabled")&&(this.button.addClass("disabled"),this.button.click(function(t){t.preventDefault()}))},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var t=this.$element.attr("tabindex");this.button.attr("tabindex",t)}},clickListener:function(){var t=this;$("body").on("touchstart.dropdown",".dropdown-menu",function(t){t.stopPropagation()}),this.$newElement.on("click","li a",function(e){var i=$(this).parent().index(),n=$(this).parent(),s=n.parents(".select");if(t.multiple&&e.stopPropagation(),e.preventDefault(),s.prev("select").not(":disabled")&&!$(this).parent().hasClass("disabled")){if(t.multiple){var l=s.prev("select").find("option").eq(i).prop("selected");l?s.prev("select").find("option").eq(i).removeAttr("selected"):s.prev("select").find("option").eq(i).prop("selected",!0).attr("selected","selected")}else s.prev("select").find("option").removeAttr("selected"),s.prev("select").find("option").eq(i).prop("selected",!0).attr("selected","selected");s.find(".filter-option").html(n.text()),s.find("button").focus(),s.prev("select").trigger("change")}}),this.$newElement.on("click","li.disabled a, li dt, li .divider",function(t){t.preventDefault(),t.stopPropagation(),$select=$(this).parent().parents(".select"),$select.find("button").focus()}),this.$element.on("change",function(e){t.render()})},val:function(t){return void 0!=t?(this.$element.val(t),this.$element.trigger("change"),this.$element):this.$element.val()}},$.fn.selectpicker=function(e,i){var n=arguments,s,l=this.each(function(){var l=$(this),o=l.data("selectpicker"),d="object"==typeof e&&e;if(o)for(var a in e)o[a]=e[a];else l.data("selectpicker",o=new t(this,d,i));"string"==typeof e&&(property=e,o[property]instanceof Function?([].shift.apply(n),s=o[property].apply(o,n)):s=o[property])});return void 0!=s?s:l},$.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",width:null,menuStyle:null,toggleSize:null}}(window.jQuery);