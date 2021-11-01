import EmberRouter from '@ember/routing/router';
import config from 'spotify/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login', {path: '/login'});
  this.route('redirect', {path: '/redirect'})
  this.route('home', {path: ''})
});
