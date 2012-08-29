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
			$clearBtn = $('<span class="if-clear-button if-state-default"></span>')
				.append('<span class="if-icon if-icon-clear"></span>')
				.hover(
					function(){ $(this).addClass('if-state-hover') },
					function(){ $(this).removeClass('if-state-hover') }
				)
				.click(function(){
					$self.val('').focus().triggerHandler('keyup');
				});
			self.container.append($clearBtn);
		}
		
		$self
			.keyup(function(ev){
				var phrase = $self.val();
				if(phrase == opts.placeholder) {
					this.focus();
					return false;
				}
				if(self.timer) clearTimeout(self.timer);
				$clearBtn.css('visibility', (phrase.length > 0)? 'visible' : 'hidden');
				self.timer = setTimeout(function(){
					if(phrase.length < opts.minLength){
						$(filterItems).show();
						return;
					}
					toMatch = new RegExp(phrase.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
					$(opts.items).each(function(){
						$(this).not(opts.ignore).toggleClass(opts.filterClass, !toMatch.test($(this).text()));
					})
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