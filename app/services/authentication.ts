import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Authentication extends Service.extend({
}) {
  @tracked token: string | null = localStorage.getItem('token');

  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public setExpiresInTime(time: string) {
    localStorage.setItem('expiresIn', time);
  }

  get isAuthenticated() {
    return this.token;
  }
}

declare module '@ember/service' {
  interface Registry {
    'authentication': Authentication;
  }
}
