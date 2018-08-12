if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

var BisGallery = {
	
	total: 0,
	atual: 0,
	w_bis_gallery: 0,
	w_img: 0,
	w_total_imgs: 0,
	total_nav_gallery: 1,	

	init_foto: function() {
		console.log("INIT FOTO");

		this.total = $('.bis-gallery a').length;
		this.w_bis_gallery = $('.bis-gallery').width();
		this.container = $('.bis-gallery ul');
		this.w_img = $('.bis-gallery li').outerWidth(true);
		this.w_total_imgs = this.w_img * this.total;

		// console.log(this.total, ' total ');
		// console.log(this.w_bis_gallery, ' w_bis_gallery ');
		// console.log(this.w_img, ' w_img ');
		// console.log(this.w_total_imgs, ' TOTAL ');

		this.container.width(this.w_total_imgs);
		this.change_img(this.atual);

		$("#bis-img-total").html(this.total);
		$('.bis-box-open .bis-next-img').bind('click', this.next_img);
		$('.bis-box-open .bis-previous-img').bind('click', this.previous_img);
		$('.bis-nav-galeria .bis-next-img').bind('click', this.next_gallery_img);
		$('.bis-nav-galeria .bis-previous-img').bind('click', this.previous_gallery_img);
		$('.bis-btn-fechar').bind('click', this.fechar_galeria);
		$('.bis-gallery a').bind('click', BisGallery.select_img);

		$('.bis-nav-galeria .bis-previous-img').addClass("inactive");
	},
	select_img: function() {
		console.log("SELECT IMG");

		_index = $('.bis-gallery a').index(this);
		$(this).parents('ul').find('a').removeClass('active');
		$(this).addClass('active');
		BisGallery.change_img(_index);

		return false;
	},
	change_img: function(index) {
		console.log("CHANGE IMG");

		_atual = index + 1;

		img = $('.bis-gallery a').eq(index).attr('href');
		legend = $('.bis-gallery a').eq(index).attr('title');

		// $('#bis-img-open').attr('src',img);
		console.log( $('#bis-img-open').css('backgroundImage') );
		$('#bis-img-open').css('backgroundImage','url('+img+')');
		console.log( $('#bis-img-open').css('backgroundImage') );
		$('#bis-legend').html(legend);

		$("#bis-img-active").html(_atual);

		// seto a imagem atual
		this.atual = index;
		this.check_nav();

		return false;
	},
	check_nav: function() {
		
		if(this.atual==0) {
			$('.bis-box-open .bis-previous-img').addClass("inactive");
		} else if(this.atual > 0 && this.atual < (this.total-1)) {
			$('.bis-box-open .bis-previous-img').removeClass("inactive");
			$('.bis-box-open .bis-next-img').removeClass("inactive");
		} else if(this.atual == (this.total-1)) {
			$('.bis-box-open .bis-next-img').addClass("inactive");
		}

	},
	next_img: function() {
		
		if(BisGallery.atual < (BisGallery.total-1))  {
			_index = BisGallery.atual + 1;
			BisGallery.change_img(_index);
		}

	},
	previous_img: function() {
		
		if(BisGallery.atual > 0)  {
			_index = BisGallery.atual - 1;
			BisGallery.change_img(_index);
		}

	},
	next_gallery_img: function() {
		//console.log('next_gallery_img');
		
		w_left = (BisGallery.total_nav_gallery * BisGallery.w_img);
		w_nav = w_left + BisGallery.w_bis_gallery;
		//console.log(w_nav, 'w_nav');
		if(w_nav <= BisGallery.w_total_imgs) {
			left_pos = '-'+w_left+'px';
			BisGallery.nav_gallery(left_pos);
			BisGallery.total_nav_gallery++;
			$('.bis-nav-galeria .bis-previous-img').removeClass("inactive");
		}
		
		if(w_nav == BisGallery.w_total_imgs) {
			$('.bis-nav-galeria .bis-next-img').addClass("inactive");	
		}
	},
	previous_gallery_img: function() {
		//console.log('previous');
		
		w_pos = (BisGallery.total_nav_gallery-1) * BisGallery.w_img;
		w_left = BisGallery.w_img - w_pos;
		if(w_left <= 0) {
			left_pos = w_left+'px';
			BisGallery.nav_gallery(left_pos);
			BisGallery.total_nav_gallery--;

			$('.bis-nav-galeria .bis-next-img').removeClass("inactive");	
		}

		if(w_left == 0) {
			$('.bis-nav-galeria .bis-previous-img').addClass("inactive");
		}

	},
	nav_gallery: function(left_pos) {
		$('#bis').animate({left:left_pos},'slow');
	},
	fechar_galeria: function() {
		$(this).parent().parent().hide();
	}
};
$(function() {
	$(".botao-aumenta").on('click', BIS.resizeText.aumenta);
	$(".botao-diminuo").on('click', BIS.resizeText.diminui);
});

var BIS = BIS || {};

BIS.resizeText = {
	min_size: 12,
	default_size: 15,
	max_size: 18,
	default_lineheight: 25,
	container: $(".texto"),

	aumenta: function(){
		var self = BIS.resizeText;
		var text = self.container.find("p:eq(0)");
		var actual_size = parseInt( text.css("fontSize").replace("px","") );
		var actual_lineheight = parseInt( text.css("lineHeight").replace("px","") );
		//console.log( actual_size, "ATUAL" );
		self.container.find("p").each(function () {
			//console.log( (actual_size + 1) + "px" , "NOVO" );
			$(this).css("fontSize", (actual_size + 1) + "px");
			$(this).css("lineHeight", (actual_lineheight + 2) + "px"); 
		});
		
		return false;
	},

	diminui: function(){
		var self = BIS.resizeText;
		var text = self.container.find("p:eq(0)");
		var actual_size = parseInt( text.css("fontSize").replace("px","") );
		var actual_lineheight = parseInt( text.css("lineHeight").replace("px","") );
		
		self.container.find("p").each(function () {
			$(this).css("fontSize", (actual_size - 1) + "px");
			$(this).css("lineHeight", (actual_lineheight - 2) + "px");
		});

		return false;
	}	
};
!function( $ ) {

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
	}

	// Picker object

	var Datepicker = function(element, options) {
		var that = this;

		this.element = $(element);
		this.language = options.language||this.element.data('date-language')||"en";
		this.language = this.language in dates ? this.language : "en";
		this.isRTL = dates[this.language].rtl||false;
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if(this.component && this.component.length === 0)
			this.component = false;

		this._attachEvents();

		this.forceParse = true;
		if ('forceParse' in options) {
			this.forceParse = options.forceParse;
		} else if ('dateForceParse' in this.element.data()) {
			this.forceParse = this.element.data('date-force-parse');
		}
		 

		this.picker = $(DPGlobal.template)
							.appendTo(this.isInline ? this.element : 'body')
							.on({
								click: $.proxy(this.click, this),
								mousedown: $.proxy(this.mousedown, this)
							});

		if(this.isInline) {
			this.picker.addClass('datepicker-inline');
		} else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}
		if (this.isRTL){
			this.picker.addClass('datepicker-rtl');
			this.picker.find('.prev i, .next i')
						.toggleClass('icon-arrow-left icon-arrow-right');
		}
		$(document).on('mousedown', function (e) {
			// Clicked outside the datepicker, hide it
			if ($(e.target).closest('.datepicker').length === 0) {
				that.hide();
			}
		});

		this.autoclose = false;
		if ('autoclose' in options) {
			this.autoclose = options.autoclose;
		} else if ('dateAutoclose' in this.element.data()) {
			this.autoclose = this.element.data('date-autoclose');
		}

		this.keyboardNavigation = true;
		if ('keyboardNavigation' in options) {
			this.keyboardNavigation = options.keyboardNavigation;
		} else if ('dateKeyboardNavigation' in this.element.data()) {
			this.keyboardNavigation = this.element.data('date-keyboard-navigation');
		}

		this.viewMode = this.startViewMode = 0;
		switch(options.startView || this.element.data('date-start-view')){
			case 2:
			case 'decade':
				this.viewMode = this.startViewMode = 2;
				break;
			case 1:
			case 'year':
				this.viewMode = this.startViewMode = 1;
				break;
		}

		this.todayBtn = (options.todayBtn||this.element.data('date-today-btn')||false);
		this.todayHighlight = (options.todayHighlight||this.element.data('date-today-highlight')||false);

		this.weekStart = ((options.weekStart||this.element.data('date-weekstart')||dates[this.language].weekStart||0) % 7);
		this.weekEnd = ((this.weekStart + 6) % 7);
		this.startDate = -Infinity;
		this.endDate = Infinity;
		this.daysOfWeekDisabled = [];
		this.setStartDate(options.startDate||this.element.data('date-startdate'));
		this.setEndDate(options.endDate||this.element.data('date-enddate'));
		this.setDaysOfWeekDisabled(options.daysOfWeekDisabled||this.element.data('date-days-of-week-disabled'));
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();

		if(this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_events: [],
		_attachEvents: function(){
			this._detachEvents();
			if (this.isInput) { // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
						else if (this.element.is('div')) {  // inline datepicker
							this.isInline = true;
						}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			for (var i=0, el, ev; i<this._events.length; i++){
				el = this._events[i][0];
				ev = this._events[i][1];
				el.on(ev);
			}
		},
		_detachEvents: function(){
			for (var i=0, el, ev; i<this._events.length; i++){
				el = this._events[i][0];
				ev = this._events[i][1];
				el.off(ev);
			}
			this._events = [];
		},

		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.update();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},

		hide: function(e){
			if(this.isInline) return;
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}

			if (
				this.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},

		remove: function() {
			this._detachEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
		},

		getDate: function() {
			var d = this.getUTCDate();
			return new Date(d.getTime() + (d.getTimezoneOffset()*60000));
		},

		getUTCDate: function() {
			return this.date;
		},

		setDate: function(d) {
			this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset()*60000)));
		},

		setUTCDate: function(d) {
			this.date = d;
			this.setValue();
		},

		setValue: function() {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').val(formatted);
				}
				this.element.data('date', formatted);
			} else {
				this.element.val(formatted);
			}
		},

		getFormattedDate: function(format) {
			if (format === undefined)
				format = this.format;
			return DPGlobal.formatDate(this.date, format, this.language);
		},

		setStartDate: function(startDate){
			this.startDate = startDate||-Infinity;
			if (this.startDate !== -Infinity) {
				this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
			}
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this.endDate = endDate||Infinity;
			if (this.endDate !== Infinity) {
				this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
			}
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this.daysOfWeekDisabled = daysOfWeekDisabled||[];
			if (!$.isArray(this.daysOfWeekDisabled)) {
				this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
			}
			this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
						if(this.isInline) return;
			var zIndex = parseInt(this.element.parents().filter(function() {
							return $(this).css('z-index') != 'auto';
						}).first().css('z-index'))+10;
			var offset = this.component ? this.component.offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
			this.picker.css({
				top: offset.top + height,
				left: offset.left,
				zIndex: zIndex
			});
		},

		update: function(){
			var date, fromArgs = false;
			if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
				date = arguments[0];
				fromArgs = true;
			} else {
				date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
			}

			this.date = DPGlobal.parseDate(date, this.format, this.language);

			if(fromArgs) this.setValue();

			var oldViewDate = this.viewDate;
			if (this.date < this.startDate) {
				this.viewDate = new Date(this.startDate);
			} else if (this.date > this.endDate) {
				this.viewDate = new Date(this.endDate);
			} else {
				this.viewDate = new Date(this.date);
			}

			if (oldViewDate && oldViewDate.getTime() != this.viewDate.getTime()){
				this.element.trigger({
					type: 'changeDate',
					date: this.viewDate
				});
			}
			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.weekStart,
			html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+dates[this.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12) {
				html += '<span class="month">'+dates[this.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
				endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
				endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
				currentDate = this.date && this.date.valueOf(),
				today = new Date();
			this.picker.find('.datepicker-days thead th:eq(1)')
						.text(dates[this.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(dates[this.language].today)
						.toggle(this.todayBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() == this.weekStart) {
					html.push('<tr>');
				}
				clsName = '';
				if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
					clsName += ' old';
				} else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
					clsName += ' new';
				}
				// Compare internal UTC date with local today, not UTC today
				if (this.todayHighlight &&
					prevMonth.getUTCFullYear() == today.getFullYear() &&
					prevMonth.getUTCMonth() == today.getMonth() &&
					prevMonth.getUTCDate() == today.getDate()) {
					clsName += ' today';
				}
				if (currentDate && prevMonth.valueOf() == currentDate) {
					clsName += ' active';
				}
				if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate ||
					$.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
					clsName += ' disabled';
				}
				html.push('<td class="day'+clsName+'">'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() == this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date && this.date.getUTCFullYear();

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear && currentYear == year) {
				months.eq(this.date.getUTCMonth()).addClass('active');
			}
			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year == startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year == endYear) {
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+(year < startYear || year > endYear ? ' disabled' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function() {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
								switch(this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.todayBtn == 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')) {
							this.viewDate.setUTCDate(1);
							if (target.is('.month')) {
								var month = target.parent().find('span').index(target);
								this.viewDate.setUTCMonth(month);
								this.element.trigger({
									type: 'changeMonth',
									date: this.viewDate
								});
							} else {
								var year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this.element.trigger({
									type: 'changeYear',
									date: this.viewDate
								});
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							var day = parseInt(target.text(), 10)||1;
							var year = this.viewDate.getUTCFullYear(),
								month = this.viewDate.getUTCMonth();
							if (target.is('.old')) {
								if (month === 0) {
									month = 11;
									year -= 1;
								} else {
									month -= 1;
								}
							} else if (target.is('.new')) {
								if (month == 11) {
									month = 0;
									year += 1;
								} else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day,0,0,0,0));
						}
						break;
				}
			}
		},

		_setDate: function(date, which){
			if (!which || which == 'date')
				this.date = date;
			if (!which || which  == 'view')
				this.viewDate = date;
			this.fill();
			this.setValue();
			this.element.trigger({
				type: 'changeDate',
				date: this.date
			});
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component){
				element = this.element.find('input');
			}
			if (element) {
				element.change();
				if (this.autoclose && (!which || which == 'date')) {
					this.hide();
				}
			}
		},

		moveMonth: function(date, dir){
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag == 1){
				test = dir == -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){ return new_date.getUTCMonth() == month; }
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){ return new_date.getUTCMonth() != new_month; };
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			} else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i<mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){ return new_month != new_date.getUTCMonth(); };
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.startDate && date <= this.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode == 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, day, month,
				newDate, newViewDate;
			switch(e.keyCode){
				case 27: // escape
					this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.keyboardNavigation) break;
					dir = e.keyCode == 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (e.shiftKey){
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.keyboardNavigation) break;
					dir = e.keyCode == 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (e.shiftKey){
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 13: // enter
					this.hide();
					e.preventDefault();
					break;
				case 9: // tab
					this.hide();
					break;
			}
			if (dateChanged){
				this.element.trigger({
					type: 'changeDate',
					date: this.date
				});
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component){
					element = this.element.find('input');
				}
				if (element) {
					element.change();
				}
			}
		},

		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(0, Math.min(2, this.viewMode + dir));
			}
			/*
				vitalets: fixing bug of very special conditions:
				jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
				Method show() does not set display css correctly and datepicker is not shown.
				Changed to .css('display', 'block') solve the problem.
				See https://github.com/vitalets/x-editable/issues/37

				In jquery 1.7.2+ everything works fine.
			*/
			//this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
			this.updateNavArrows();
		}
	};

	$.fn.datepicker = function ( option ) {
		var args = Array.apply(null, arguments);
		args.shift();
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				data[option].apply(data, args);
			}
		});
	};

	$.fn.datepicker.defaults = {
	};
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language) {
			if (date instanceof Date) return date;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
				var part_re = /([\-+]\d+)([dmwy])/,
					parts = date.match(/([\-+]\d+)([dmwy])/g),
					part, dir;
				date = new Date();
				for (var i=0; i<parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch(part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			var parts = date && date.match(this.nonpunctuation) || [],
				date = new Date(),
				parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){ return d.setUTCFullYear(v); },
					yy: function(d,v){ return d.setUTCFullYear(2000+v); },
					m: function(d,v){
						v -= 1;
						while (v<0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() != v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){ return d.setUTCDate(v); }
				},
				val, filtered, part;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length != fparts.length) {
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			if (parts.length == fparts.length) {
				for (var i=0, cnt = fparts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)) {
						switch(part) {
							case 'MM':
								filtered = $(dates[language].months).filter(function(){
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(function(){
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				for (var i=0, s; i<setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s]))
						setters_map[s](date, parsed[s]);
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [],
				seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="icon-arrow-left"/></th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next"><i class="icon-arrow-right"/></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;

}( window.jQuery );

;(function($){
	$.fn.datepicker.dates['pt-BR'] = {
		days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
		daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
		daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
		months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		today: "Hoje"
	};
}(jQuery));

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

;(function($) {
    $.fn.sexyCombo = function(config) {
        return this.each(function() {
		if ("SELECT" != this.tagName.toUpperCase()) {
		    return;	
		}
	    new $sc(this, config);
	    });  
    };
    
    //default config options
    var defaults = {
        //skin name
        skin: "sexy",
	
	    //this suffix will be appended to the selectbox's name and will be text input's name
	    suffix: "__sexyCombo",
	
	    //the same as the previous, but for hidden input
	    hiddenSuffix: "__sexyComboHidden",
	    
	    //rename original select, and call the hidden field the original name attribute?
	    renameOriginal: false,
	    
	   //initial / default hidden field value.
	   //Also applied when user types something that is not in the options list
	    initialHiddenValue: "",
	
	    //if provided, will be the value of the text input when it has no value and focus
	    emptyText: "",
	
	    //if true, autofilling will be enabled
	    autoFill: false,
	
	    //if true, selected option of the selectbox will be the initial value of the combo
	    triggerSelected: true,
	
	    //function for options filtering
	    filterFn: null,
	
	    //if true, the options list will be placed above text input
	    dropUp: false,
	
	    //separator for values of multiple combos
	    separator: ",",
			
		//key json name for key/value pair
		key: "value",
		
		//value json for key/value pair
		value: "text",

	    //all callback functions are called in the scope of the current sexyCombo instance
	
	    //called after dropdown list appears
	    showListCallback: null,
	
	    //called after dropdown list disappears
	    hideListCallback: null,
	
	    //called at the end of constructor
	    initCallback: null,
	
	    //called at the end of initEvents function
	    initEventsCallback: null,
		    
	    //called when both text and hidden inputs values are changed
	    changeCallback: null,
	
	    //called when text input's value is changed
	    textChangeCallback: null,
	    
		checkWidth: true
    };
    
    //constructor
    //creates initial markup and does some initialization
    $.sexyCombo = function(selectbox, config) {
		
        if (selectbox.tagName.toUpperCase() != "SELECT")
	        return;
	    
	    this.config = $.extend({}, defaults, config || {}); 
	
	   
	    
	    this.selectbox = $(selectbox);
	    this.options = this.selectbox.children().filter("option");
	
	    this.wrapper = this.selectbox.wrap("<div>").
	    hide().
	    parent().
	    addClass("combo").
	    addClass(this.config.skin); 
		
	    this.input = $("<input type='text' />").
	    appendTo(this.wrapper).
	    attr("autocomplete", "off").
	    attr("value", "").
	    attr("name", this.selectbox.attr("name") + this.config.suffix);
	    
	    var origName = this.selectbox.attr("name");
	    var newName = origName + this.config.hiddenSuffix;
	    if(this.config.renameOriginal) { 
	    	this.selectbox.attr("name", newName);
	    }
	    	
	    this.hidden = $("<input type='hidden' />").
	    appendTo(this.wrapper).
	    attr("autocomplete", "off").
	    attr("value", this.config.initialHiddenValue).
	    attr("name", this.config.renameOriginal ? origName : newName);
	
        this.icon = $("<div />").
	    appendTo(this.wrapper).
	    addClass("icon"); 
	
	    this.listWrapper = $("<div />").
	    appendTo(this.wrapper).
	    //addClass("invisible").
	    addClass("list-wrapper"); 

	    this.updateDrop();
	
	    this.list = $("<ul />").appendTo(this.listWrapper); 
	    var self = this;
		var optWidths = [];
	    this.options.each(function() {					   
	        var optionText = $.trim($(this).text());
			if (self.config.checkWidth) {
			    optWidths.push($("<li />").
	            appendTo(self.list).
	            html("<span>" + optionText + "</span>").
	            addClass("visible").find("span").outerWidth());	
			}
			else {
	            $("<li />").
	            appendTo(self.list).
	            html("<span>" + optionText + "</span>").
	            addClass("visible");
			}
	    });  
		
	
	    this.listItems = this.list.children();
		
		
		
		
		/*this.listItems.find("span").each(function() {
		    optWidths.push($(this).outerWidth());										  
		});*/
		if (optWidths.length) {
		    optWidths = optWidths.sort(function(a, b) {
		        return a - b;									
		    });
		    var maxOptionWidth = optWidths[optWidths.length - 1];
			
			
		}
		

        this.singleItemHeight = this.listItems.outerHeight();
		//bgiframe causes some problems, let's remove it
		/*if ("function" == typeof this.listWrapper.bgiframe) {
		    this.listWrapper.bgiframe({height: this.singleItemHeight * this.wrapper.find("li").height()});
		}*/
		this.listWrapper.addClass("invisible");
		
       
	    // if ($.browser.opera) {
	    //     this.wrapper.css({position: "relative", left: "0", top: "0"});
	    // } 
	
	
	
	    this.filterFn = ("function" == typeof(this.config.filterFn)) ? this.config.filterFn : this.filterFn;
	
	    this.lastKey = null;
	    //this.overflowCSS = "overflow";
	
	    this.multiple = this.selectbox.attr("multiple");
	
	    var self = this;
	
	    this.wrapper.data("sc:lastEvent", "click");
	
	    this.overflowCSS = "overflowY";
	
	    if ((this.config.checkWidth) && (this.listWrapper.innerWidth() < maxOptionWidth)) {
		    this.overflowCSS = "overflow";	
			
		}
        
		
	    this.notify("init");
	    this.initEvents();
    };
    
    //shortcuts
    var $sc = $.sexyCombo;
    $sc.fn = $sc.prototype = {};
    $sc.fn.extend = $sc.extend = $.extend;
    
    $sc.fn.extend({
        //TOC of our plugin
	    //initializes all event listeners
        initEvents: function() {
	        var self = this;
			
	        this.icon.bind("click", function(e) {
	            if (!self.wrapper.data("sc:positionY"))	{
		            self.wrapper.data("sc:positionY", e.pageY);	    	
		        }
	        });
	
	        this.input.bind("click", function(e) {
	            if (!self.wrapper.data("sc:positionY"))	{
		            self.wrapper.data("sc:positionY", e.pageY);	    	
		        }								 
	        });
	

	        this.wrapper.bind("click", function(e) {
	            if (!self.wrapper.data("sc:positionY"))	{
		            self.wrapper.data("sc:positionY", e.pageY);	 
		        }									   
	        });					
	    
	        this.icon.bind("click", function() {
		        if (self.input.attr("disabled")) {
			         self.input.attr("disabled", false);   
		        }
		        self.wrapper.data("sc:lastEvent", "click");
		        self.filter();
	            self.iconClick();
	        }); 
	    
	        this.listItems.bind("mouseover", function(e) {
	            //self.highlight(e.target);
				if ("LI" == e.target.nodeName.toUpperCase()) {
				    self.highlight(e.target);	
				}
				else {
				    self.highlight($(e.target).parent());	
				}
	        });
	    
	        this.listItems.bind("click", function(e) {
	            self.listItemClick($(e.target));
	        });
		
			this.input.bind("keyup", function(e) {
				self.wrapper.data("sc:lastEvent", "key");							                
				//$sc.log(self.wrapper.data("sc:lastEvent"));
				self.keyUp(e);
			});		
	    
	      
			

	    
	        this.input.bind("keypress", function(e) {
	            if ($sc.KEY.RETURN == e.keyCode) {
	                e.preventDefault();
			    }
		        if ($sc.KEY.TAB == e.keyCode)
			        e.preventDefault();
	        });
	    
	        $(document).bind("click", function(e) {
	            if ((self.icon.get(0) == e.target) || (self.input.get(0) == e.target))
		            return;
		    
		        self.hideList();    
	        });
	    
	        this.triggerSelected();
	        this.applyEmptyText();
	    
	        
		
		    this.input.bind("click", function(e) {
			    self.wrapper.data("sc:lastEvent", "click");	
			    self.icon.trigger("click");
		    });
			
			
			//here
	        this.wrapper.bind("click", function() {
	            self.wrapper.data("sc:lastEvent", "click");								
	        });
	
	        this.input.bind("keydown", function(e) {
	            if (9 == e.keyCode) {
		            e.preventDefault();
		        }
	        });
	
	        this.wrapper.bind("keyup", function(e) {
		        var k = e.keyCode;
		        for (key in $sc.KEY) {
		            if ($sc.KEY[key] == k) {
			            return;	
			        }
		        }
	            self.wrapper.data("sc:lastEvent", "key");	
				//$sc.log("Last evt is key");
	        });	
	
	        this.input.bind("click", function() {
	            self.wrapper.data("sc:lastEvent", "click");		
            });
	
	        this.icon.bind("click", function(e) {
	            if (!self.wrapper.data("sc:positionY"))	{
		            self.wrapper.data("sc:positionY", e.pageY);	    	
		        }
	        });
	
	        this.input.bind("click", function(e) {
	            if (!self.wrapper.data("sc:positionY"))	{
		            self.wrapper.data("sc:positionY", e.pageY);	    	
		        }								 
	        });
	

	        this.wrapper.bind("click", function(e) {
	            if (!self.wrapper.data("sc:positionY"))	{
		            self.wrapper.data("sc:positionY", e.pageY);	 
		        }									   
	        });				
			
			this.notify("initEvents");
	    },
	
	
	    getTextValue: function() {
            return this.__getValue("input");
	    },
	
	    getCurrentTextValue: function() {
            return this.__getCurrentValue("input");
	    },
	
	    getHiddenValue: function() {
            return this.__getValue("hidden");
	    },
	
	    getCurrentHiddenValue: function() {	    
	        return this.__getCurrentValue("hidden");
	    },
	
	    __getValue: function(prop) {
	        prop = this[prop];
	        if (!this.multiple)
	            return $.trim(prop.val());
		
	        var tmpVals = prop.val().split(this.config.separator);
	        var vals = [];
	    
	        for (var i = 0, len = tmpVals.length; i < len; ++i) {
	            vals.push($.trim(tmpVals[i]));
	        }	
	    
	        vals = $sc.normalizeArray(vals);
	    
	        return vals;
	    },
	
	    __getCurrentValue: function(prop) {
	        prop = this[prop];
	        if (!this.multiple)
	            return $.trim(prop.val());
		 
            return $.trim(prop.val().split(this.config.separator).pop());		 
	    },
	
	    //icon click event listener
	    iconClick: function() {
	        if (this.listVisible()) { 
	            this.hideList();
			    this.input.blur();
		    }
	        else {			
	            this.showList();
			    this.input.focus();
	            if (this.input.val().length) {
		            this.selection(this.input.get(0), 0, this.input.val().length);    	
		        }			
		    }          
	    },
	
	    //returns true when dropdown list is visible
	    listVisible: function() {
	        return this.listWrapper.hasClass("visible");
	    },
	
	    //shows dropdown list
	    showList: function() {
	        if (!this.listItems.filter(".visible").length)
	            return;

	        this.listWrapper.removeClass("invisible").
	        addClass("visible");
	        this.wrapper.css("zIndex", "99999");
	        this.listWrapper.css("zIndex", "99999");
	        this.setListHeight();
		
		    var listHeight = this.listWrapper.height();
		    var inputHeight = this.wrapper.height();
		
		    var bottomPos = parseInt(this.wrapper.data("sc:positionY")) + inputHeight + listHeight;
		    var maxShown = $(window).height() + $(document).scrollTop();
		    if (bottomPos > maxShown) {
		        this.setDropUp(true); 
		    }
		    else {
		        this.setDropUp(false);	
		    }
		
		    if ("" == $.trim(this.input.val())) {
	            this.highlightFirst();
	            this.listWrapper.scrollTop(0);
			}
			else {
			    this.highlightSelected();	
			}
	        this.notify("showList");
	    },
	
	    //hides dropdown list
	    hideList: function() {
	        if (this.listWrapper.hasClass("invisible"))
	            return;
	        this.listWrapper.removeClass("visible").
	        addClass("invisible");
	        this.wrapper.css("zIndex", "0");
	        this.listWrapper.css("zIndex", "99999");	
	    
	        this.notify("hideList");
	    },
	
	    //returns sum of all visible items height
	    getListItemsHeight: function() {
	       
			var itemHeight = this.singleItemHeight;
	        return itemHeight * this.liLen();
	    },
	
	    //changes list wrapper's overflow from hidden to scroll and vice versa (depending on list items height))
	    setOverflow: function() {
		    var maxHeight = this.getListMaxHeight();
		    
	        if (this.getListItemsHeight() > maxHeight)
	            this.listWrapper.css(this.overflowCSS, "scroll");
	        else
	            this.listWrapper.css(this.overflowCSS, "hidden");	
	    },
	
	    //highlights active item of the dropdown list
	    highlight: function(activeItem) {
	        if (($sc.KEY.DOWN == this.lastKey) || ($sc.KEY.UP == this.lastKey))
	            return;
		
	        this.listItems.removeClass("active");   
	        $(activeItem).addClass("active");
	    },
	

	
	    //sets text and hidden inputs value
	    setComboValue: function(val, pop, hideList) {
	        var oldVal = this.input.val();
	    
	        var v = "";
	        if (this.multiple) {
	            v = this.getTextValue();
		        if (pop) 
		            v.pop();
		        v.push($.trim(val));
		        v = $sc.normalizeArray(v);
		        v = v.join(this.config.separator) + this.config.separator;   
		 
	        } else {
	            v = $.trim(val);
	        }
	        this.input.val(v);
	        this.setHiddenValue(val);
	        this.filter();
	        if (hideList)
	            this.hideList();
	        this.input.removeClass("empty");

	    
	        if (this.multiple)
	            this.input.focus();
		
	        if (this.input.val() != oldVal)
	            this.notify("textChange");	
				
	    },
	
	
	
	    //sets hidden inputs value
	    //takes text input's value as a param
	    setHiddenValue: function(val) {
	        var set = false;
	        val = $.trim(val);
	        var oldVal = this.hidden.val();
	    	    
	        if (!this.multiple) {
	            for (var i = 0, len = this.options.length; i < len; ++i){
		            if (val == this.options.eq(i).text()) {
		                this.hidden.val(this.options.eq(i).val());
			            set = true;
			            break;
		            }
		        }
	         }
	        else {
	            var comboVals = this.getTextValue();
		        var hiddenVals = [];
		        for (var i = 0, len = comboVals.length; i < len; ++i) {
		            for (var j = 0, len1 = this.options.length; j < len1; ++j) {
		                if (comboVals[i] == this.options.eq(j).text()) {
			                hiddenVals.push(this.options.eq(j).val());
			            }      
		            }
		        }
		
		        if (hiddenVals.length) {
		            set = true;
		        this.hidden.val(hiddenVals.join(this.config.separator));
		    }
	     }
	    
	    if (!set) {
	        this.hidden.val(this.config.initialHiddenValue);
	    }
	    
	    if (oldVal != this.hidden.val())
	        this.notify("change");
		
	    this.selectbox.val(this.hidden.val());
		this.selectbox.trigger("change");
	},
	
	
	    listItemClick: function(item) {
	        this.setComboValue(item.text(), true, true);
	        this.inputFocus();
	    },
	
	    //adds / removes items to / from the dropdown list depending on combo's current value
	    filter: function() {
		    if ("yes" == this.wrapper.data("sc:optionsChanged")) {
		        var self = this;
		        this.listItems.remove();
                this.options = this.selectbox.children().filter("option");
	            this.options.each(function() {
	                var optionText = $.trim($(this).text());
	                $("<li />").
	                appendTo(self.list).
	                text(optionText).
	                addClass("visible");
	    
	            }); 
	
	            this.listItems = this.list.children();
	
	            this.listItems.bind("mouseover", function(e) {
	                self.highlight(e.target);
	            });
	    
	            this.listItems.bind("click", function(e) {
	                self.listItemClick($(e.target));
	            });
			
			    self.wrapper.data("sc:optionsChanged", "");
		    }
			
	        var comboValue = this.input.val();
	        var self = this;

	        this.listItems.each(function() {
	            var $this = $(this);
	            var itemValue = $this.text();
		        if (self.filterFn.call(self, self.getCurrentTextValue(), itemValue, self.getTextValue())) {
		           $this.removeClass("invisible").
		           addClass("visible");
		        } else {
		            $this.removeClass("visible").
		            addClass("invisible");
		        }
	        });
	     
	        this.setOverflow();
	        this.setListHeight();
	    },
	
	//default dropdown list filtering function
	filterFn: function(currentComboValue, itemValue, allComboValues) {
		if ("click" == this.wrapper.data("sc:lastEvent")) {
		    return true;	
		}
		//alert(currentComboValue.toSource());
	    if (!this.multiple) {
	        return itemValue.toLowerCase().indexOf(currentComboValue.toLowerCase()) == 0;
	    }
	    else {
	        //exclude values that are already selected

		for (var i = 0, len = allComboValues.length; i < len; ++i) {
		    if (itemValue == allComboValues[i]) {
		        return false;
		    }
		}
		
		return itemValue.toLowerCase().search(currentComboValue.toLowerCase()) == 0;
	    }
	},
	
	//just returns integer value of list wrapper's max-height property
	getListMaxHeight: function() {
			
		var result = parseInt(this.listWrapper.css("maxHeight"), 10);
		if (isNaN(result)) {
		    result = this.singleItemHeight * 10;	
		}
		
		return result;
	},
	
	//corrects list wrapper's height depending on list items height
	setListHeight: function() {
	
	    var liHeight = this.getListItemsHeight();
		
	    var maxHeight = this.getListMaxHeight();
		
	
	    var listHeight = this.listWrapper.height();
	    if (liHeight < listHeight) {
	        this.listWrapper.height(liHeight); 
			
			return liHeight;
	    }
	    else if (liHeight > listHeight) {
	        this.listWrapper.height(Math.min(maxHeight, liHeight));
			
			return Math.min(maxHeight, liHeight);
	    }
				
	},
	
	//returns active (hovered) element of the dropdown list
	getActive: function() {
	    return this.listItems.filter(".active");
	},
	
	keyUp: function(e) {
	    this.lastKey = e.keyCode;
	    var k = $sc.KEY;
	    switch (e.keyCode) {
	        case k.RETURN:
			case k.TAB:
			//this.input.focus();
		    this.setComboValue(this.getActive().text(), true, true);
		    if (!this.multiple)
		        //this.input.blur(); //
		    	
		break;
		case k.DOWN:
		    this.highlightNext();
		break;
		case k.UP:
		    this.highlightPrev();
		break;
		case k.ESC:
		    this.hideList();
		break;
		default:
		    this.inputChanged();
		break;
	    }
	    
	    
	},
	
	//returns number of currently visible list items
	liLen: function() {
	    return this.listItems.filter(".visible").length;
	},
	
	//triggered when the user changes combo value by typing
	inputChanged: function() {
	    this.filter();

	    if (this.liLen()) {
	        this.showList();
		this.setOverflow();
		this.setListHeight();
	    } else {
	        this.hideList();
	    }
	    
	    this.setHiddenValue(this.input.val());
	    this.notify("textChange");
	    
	},
	
	//highlights first item of the dropdown list
	highlightFirst: function() {
	    this.listItems.removeClass("active").filter(".visible:eq(0)").addClass("active");
	    this.autoFill();
	},
	
	highlightSelected: function() {
        this.listItems.removeClass("active");
		var val = $.trim(this.input.val());
		
		try {
			this.listItems.each(function() {
			    var $this = $(this);
				if ($this.text() == val) {
				    $this.addClass("active");	
					self.listWrapper.scrollTop(0);
					self.scrollDown();
					
				}
			});
			//no match, must be partial input string; highlight first item
			this.highlightFirst();
			
		} catch (e) {}
	},
	
	//highlights item of the dropdown list next to the currently active item
	highlightNext: function() {
	    var $next = this.getActive().next();
	    
	    while ($next.hasClass("invisible") && $next.length) {
	        $next = $next.next();
	    }
	    
	    if ($next.length) {
	        this.listItems.removeClass("active");
		$next.addClass("active");
		this.scrollDown();
	    }
	},
	
	//scrolls list wrapper down when needed
	scrollDown: function() {
	    if ("scroll" != this.listWrapper.css(this.overflowCSS))
	        return;
		
            var beforeActive = this.getActiveIndex() + 1;
			/*if ($.browser.opera)
			    ++beforeActive;*/
	    
	    var minScroll = this.listItems.outerHeight() * beforeActive - this.listWrapper.height();
        
		if ($.browser.msie)
            minScroll += beforeActive;
	    
	    if (this.listWrapper.scrollTop() < minScroll)
	        this.listWrapper.scrollTop(minScroll);
	},
	
	
	//highlights list item before currently active item
	highlightPrev: function() {
	    var $prev = this.getActive().prev();
	    
	    while ($prev.length && $prev.hasClass("invisible"))
	        $prev = $prev.prev();
		
            if ($prev.length) {
	        this.getActive().removeClass("active");
		$prev.addClass("active");
		this.scrollUp();
	    }
	},
	
	//returns index of currently active list item
	getActiveIndex: function() {
	    return $.inArray(this.getActive().get(0), this.listItems.filter(".visible").get());
	},
	
	
	//scrolls list wrapper up when needed
	scrollUp: function() {
	    
	    if ("scroll" != this.listWrapper.css(this.overflowCSS))
	        return;
		
	    var maxScroll = this.getActiveIndex() * this.listItems.outerHeight();
	    
	    if (this.listWrapper.scrollTop() > maxScroll) {
	        this.listWrapper.scrollTop(maxScroll);
	    }     
	},
	
	//emptyText stuff
	applyEmptyText: function() {
	    if (!this.config.emptyText.length)
	        return;
		
	    var self = this;	
	    this.input.bind("focus", function() {
                self.inputFocus();
	    }).
	    bind("blur", function() {
                self.inputBlur();
	    });	
	    
	    if ("" == this.input.val()) {
	        this.input.addClass("empty").val(this.config.emptyText);
	    }
	},
	
	inputFocus: function() {
	    if (this.input.hasClass("empty")) {
		this.input.removeClass("empty").
		val("");
        }
	},
	
	inputBlur: function() {
	    if ("" == this.input.val()) {
		this.input.addClass("empty").
		val(this.config.emptyText);
	    }
	    
	},
	
	//triggerSelected stuff
	triggerSelected: function() {
	    if (!this.config.triggerSelected)
	        return;
		
	    var self = this;	
		try {
	    this.options.each(function() {
	        if ($(this).attr("selected")) {
		        self.setComboValue($(this).text(), false, true);
				throw new Error();
		    }
	    });	
		} catch (e) {
		    return;	
		}
		
        self.setComboValue(this.options.eq(0).text(), false, false);
	},
	
	//autofill stuff
	autoFill: function() {
	    if (!this.config.autoFill || ($sc.KEY.BACKSPACE == this.lastKey) || this.multiple)
	        return;
		    	
	    var curVal = this.input.val();
	    var newVal = this.getActive().text();
	    this.input.val(newVal);
	    this.selection(this.input.get(0), curVal.length, newVal.length);
	   
	    	
	},
	
	//provides selection for autofilling
	//borrowed from jCarousel
	selection: function(field, start, end) {
	    if( field.createTextRange ){
		var selRange = field.createTextRange();
		selRange.collapse(true);
		selRange.moveStart("character", start);
		selRange.moveEnd("character", end);
		selRange.select();
	    } else if( field.setSelectionRange ){
		field.setSelectionRange(start, end);
	    } else {
		if( field.selectionStart ){
			field.selectionStart = start;
			field.selectionEnd = end;
		}
	    }
	   // field.focus();	
	},
	
	
	//for internal use
	updateDrop: function() {
	    if (this.config.dropUp)
	        this.listWrapper.addClass("list-wrapper-up");
	    else 
	        this.listWrapper.removeClass("list-wrapper-up");		
	},
	
	//updates dropUp config option
	setDropUp: function(drop) {
        this.config.dropUp = drop;   
	    this.updateDrop(); 
	},
	
	notify: function(evt) {
	    if (!$.isFunction(this.config[evt + "Callback"]))
	        return;
		
	    this.config[evt + "Callback"].call(this);	
	}
    });
    
    $sc.extend({
        //key codes
	//from jCarousel
        KEY: {
	    UP: 38,
	    DOWN: 40,
	    DEL: 46,
	    TAB: 9,
	    RETURN: 13,
	    ESC: 27,
	    COMMA: 188,
	    PAGEUP: 33,
	    PAGEDOWN: 34,
	    BACKSPACE: 8	
	},
	
	//for debugging
	log: function(msg) {
	    var $log = $("#log");
	    $log.html($log.html() + msg + "<br />");
	},
	
    createSelectbox: function(config) {
	    var $selectbox = $("<select />").
	    appendTo(config.container).
	    attr({name: config.name, id: config.id, size: "1"});
	    
	    if (config.multiple)
	        $selectbox.attr("multiple", true);
	    
	    var data = config.data;
	    var selected = false;
	    
	    for (var i = 0, len = data.length; i < len; ++i) {
	        selected = data[i].selected || false;
	        $("<option />").appendTo($selectbox).
			attr("value", data[i][config.key]).
			text(data[i][config.value]).
			attr("selected", selected);
	    }
	    
	    return $selectbox.get(0);
	},
	
	create: function(config) {
            var defaults = {
	        //the name of the selectbox
	        name: "",
		//the ID of the selectbox
		id: "",
		//data for the options
		/*
		This is an array of objects. The objects should contain the following properties:
		(string)value - the value of the <option>
		(string) text - text of the <option>
		(bool) selected - if set to true, "selected" attribute of this <option> will be set to true
		*/
		data: [],
		
		//if true, combo with multiple choice will be created
		multiple: false,
		
		//key json name for key/value pair
		key: "value",
		
		//value json for key/value pair
		value: "text",		
		
		//an element that will contain the widget
		container: $(document),
		//url that contains JSON object for options data
		//format is the same as in data config option
		//if passed, "data" config option will be ignored
		url: "",
		//params for AJAX request
		ajaxData: {}
	    };
	    config = $.extend({}, defaults, config || {});
	    
            if (config.url) {
	        return $.getJSON(config.url, config.ajaxData, function(data) {
		    delete config.url;
		    delete config.ajaxData;
		    config.data = data;
		    return $sc.create(config);
		});
	    }
	    
	    config.container = $(config.container);
	    
            var selectbox = $sc.createSelectbox(config);
	    return new $sc(selectbox, config);
	    
	},
	
	deactivate: function($select) {
	    $select = $($select);
		$select.each(function() {
		    if ("SELECT" != this.tagName.toUpperCase()) {
			    return;	
			}
			var $this = $(this);
			if (!$this.parent().is(".combo")) {
			    return;	
			}
			//$this.parent().find("input[type='text']").attr("disabled", true);
			
		});
	},
	
	activate: function($select) {
	    $select = $($select);
		$select.each(function() {
		    if ("SELECT" != this.tagName.toUpperCase()) {
			    return;	
			}
			var $this = $(this);
			if (!$this.parent().is(".combo")) {
			    return;	
			}
			$this.parent().find("input[type='text']").attr("disabled", false);
		});		
	},
	
	changeOptions: function($select) {
		$select = $($select);
        $select.each(function() {
		    if ("SELECT" != this.tagName.toUpperCase()) {
			    return;	
			}
			
			var $this = $(this);
			var $wrapper  = $this.parent();
			var $input = $wrapper.find("input[type='text']");
			var $listWrapper = $wrapper.find("ul").parent();
			
	        $listWrapper.removeClass("visible").
	        addClass("invisible");
	        $wrapper.css("zIndex", "0");
	        $listWrapper.css("zIndex", "99999");			
			
			$input.val("");
			$wrapper.data("sc:optionsChanged", "yes");
			var $selectbox = $this;
		    $selectbox.parent().find("input[type='text']").val($selectbox.find("option:eq(0)").text());
		    $selectbox.parent().data("sc:lastEvent", "click");
		    $selectbox.find("option:eq(0)").attr('selected','selected');
		});
	},
	
	normalizeArray: function(arr) {
	    var result = [];
	    for (var i = 0, len =arr.length; i < len; ++i) {
	        if ("" == arr[i])
		    continue;
		    
		result.push(arr[i]);    
	    }
	    
	    return result;
	}
    });
})(jQuery); 
