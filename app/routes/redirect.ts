import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { camelize } from '@ember/string';
import Authentication from 'spotify/services/authentication';

export default class Redirect extends Route.extend({
}) {

  @inject('authentication') authentication!: Authentication;

  public beforeModel(): void {
    const hash = window.location.hash;
    const urlChunks = hash.replace('#', '').split('&');
    let parameters: Record<string, string> = {};

    for (const chunk of urlChunks) {
      const chunkDictionary = chunk.split('=');
      parameters[camelize(chunkDictionary[0])] = chunkDictionary[1];
    }

    this.authentication.setToken(parameters.accessToken);
    this.authentication.isAuthenticated ? this.transitionTo('home') : this.transitionTo('login');
  }
}
