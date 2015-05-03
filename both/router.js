Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('front', {
    path: '/'
  });
   this.route('settings', {
    path: '/settings'
  });
      this.route('about', {
    path: '/about'
  });
});