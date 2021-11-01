import Component from '@glimmer/component';
import config from 'spotify/config/environment';

export default class LoginScreenComponent extends Component {

  public login(): void {
    const { clientId, authorizeUrl } = config;
    const  authorizationUrl = `${authorizeUrl}?` + new URLSearchParams({
        client_id: clientId,
        redirect_uri: 'http://localhost:4200/redirect',
        response_type: 'token',
        show_dialog: 'true',
    });
    window.location.replace(authorizationUrl);
  }
}
