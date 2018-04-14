$(document).ready(function() {
	const newAnimations = [
		{
			push: 'slide-to-left',
			pop: 'slide-to-right'
		},
		{
			push: 'slide-to-top',
			pop: 'slide-to-bottom'
		},
		{
			push: 'top-to-bottom',
			pop: 'bottom-to-top'
		},
		{
			push: 'right-to-left',
			pop: 'left-to-right'
		}
	];

	const cmpFirst = {
		name: 'first',
		template: '#template-first',
		data: {
			page_name: "First page",
			user_list: [],
			isListLoading: false
		},
		beforeRender: function() {
			this.methods.getUserList();
		},
		methods: {
			goToSecond: function() {
				console.log("first function found");
			},
			newFunction: function() {
				console.log("new function executed");
			},
			getUserList: function() {
				var self = this;
				this.data.isListLoading = true;
				var ajaxSuccess = function(resData) {
					self.data.user_list  = resData;
					self.data.isListLoading = false;
				};
				var ajaxError = function(error) {
					console.log("got error during ajax");
					self.data.isListLoading = false;
				}
				$.ajax({
					url: Config.baseUrl +'users',
					method: "GET",
					data: {},
					success: ajaxSuccess,
					error: ajaxError
 				});
			}
		},
		events: {
			'click, .btn-update': function(el) {
				console.log("hellos");
			}
			
		}
	};

	const cmpSecond = {
		name: 'second',
		template: '#template-second',
		data: {
			name: 'second template',
			address: 'second template address',
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
		},
		renderAlways: false,
	};

	const cmpThird = {
		name: 'third',
		template: "#template-third",
		data: {
			name: 'third template',
			address: 'third template address',
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
		},
		renderAlways: false,
	};

	const cmpFourth = {
		name: 'fourth',
		template: "#template-fourth",
		data:  {
			name: 'fourth template',
			address: 'fourth template address',
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
		},
		renderAlways: false,
	};

	var routes = [ cmpFirst, cmpSecond, cmpThird, cmpFourth];
	Router.init({
		routes: routes,
		animations: newAnimations[0],
		beforeLoadAnimation: false,
		methods: {
			goNext: function() {
				Router.push();
			},
			goPrev: function() {
				Router.pop();
			}
		},
		events: {
			'click, .next':  function() {
				this.methods.goNext();
			},
			'click, .prev': function() {
				this.methods.goPrev();
			}
		},
		showLoader: function() {
			$('.loader').css('display','block');
		},
		hideLoader: function() {
			$('.loader').css('display','none');
		} 
	});
	
	rivets.formatters.upperCase = function(value) {
	  return value.toUpperCase();
	}
});