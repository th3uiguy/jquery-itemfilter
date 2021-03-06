/**
* Item Filter
*
* @fileoverview Simple text-match filter that will show/hide html elements that match the string entered by the user.
* @link https://github.com/th3uiguy/jquery-itemfilter
* @author Spencer Neese
* @version 1.0
* @requires jQuery UI 1.7+ and jQuery 1.3.2+
* @license jQuery Item Filter Plugin
*
* Copyright 2011, Spencer Neese
* Dual licensed under the MIT or GPL Version 2 licenses.
* <https://raw.github.com/th3uiguy/jquery-itemfilter/master/GPL-LICENSE.txt> <https://raw.github.com/th3uiguy/jquery-itemfilter/master/MIT-LICENSE.txt>
*/

;(function( $ ){
	
$.widget( "ui.itemFilter", {
	

	options: {
		placeholder: 'Type Search Here',
		ignore: '.ignore',
		showClear: true,
		filterClass: 'if-filtered',
		minLength: 0,
		delay: 200
	},

	container: null,

	_create: function(){
		var self = this, $self = $(this.element);
		var opts = this.options;

		opts.items = opts.items || $self.next().find('>*');

		if($self.data('is-itemFilter') == true) return;
		$self.data('is-itemFilter', true);
		
		self.container = $('<div class="if-container"></div>').insertBefore($self)
			.append('<span class="if-icon if-icon-search"></span>')
			.append($self).click(function(){
				$self.focus();
			});
		
		if(opts.showClear != false){
			self.clearBtn = $('<span class="if-clear-button if-state-default"></span>')
				.append('<span class="if-icon if-icon-clear"></span>')
				.hover(
					function(){ $(this).addClass('if-state-hover') },
					function(){ $(this).removeClass('if-state-hover') }
				)
				.click(function(){
					$self.val('').focus().triggerHandler('keyup');
				});
			self.container.append(self.clearBtn);
		}
		
		$self
			.keyup(function(ev){
				var phrase = $self.val();
				if(phrase == opts.placeholder) {
					this.focus();
					return false;
				}
				if(self.timer) clearTimeout(self.timer);
				self.clearBtn.css('visibility', (phrase.length > 0)? 'visible' : 'hidden');
				self.timer = setTimeout(function(){
					if(phrase.length < opts.minLength){
						$(filterItems).show();
						return;
					}
					var str = $.trim(phrase).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
					var group = str.split(/[\s]+/);
					var size = group.length;
					str = "(" + group[0];
					for(var i = 1; i < size; i++){
						str += ")[.\\s]*(" + group[i];
					}
					str += ")";
					toMatch = new RegExp(str, "i");
					$(opts.items).each(function(){
						$(this).not(opts.ignore).toggleClass(opts.filterClass, !toMatch.test($(this).text()));
					});
				}, opts.delay);
			})
			.blur(function(){
				self.container.removeClass('if-state-active');
				if($(this).val().length == 0 || $(this).val() == opts.placeholder){
					$(this).addClass('if-empty').val(opts.placeholder);
				}
			})
			.focus(function(){
				self.container.addClass('if-state-active');
				if($(this).val() == opts.placeholder){
					$(this).val('').removeClass('if-empty');
				}
			});	
		
		if($self.val().length > 0 && $self.val() != opts.placeholder){
			$self.triggerHandler('keyup');
		}
		else{
			$self.triggerHandler('blur');
		}
	},

	destroy: function() {
		$.Widget.prototype.destroy.call( this );
	},

	_setOption: function( key, value ) {
		$.Widget.prototype._setOption.apply( this, arguments );
		if ( key === "items" ) {
			this._setItems();
		}
	},

	_setItems: function(selector){
		if(typeof this.options.items == "string"){
			this.options.items = $(this.options.items);
		}
	}
});

})(jQuery);