import
{
    Component
} from '@angular/core';

//import AUTH API
import { AuthService } from '../../api/api.auth';

@Component
({
    selector: 'app-signin',
    templateUrl: './signIn.component.html'
})

export class SignInComponent
{
    public passwordIconClass: String = 'far fa-eye-slash';
    private isPasswordToggle: Boolean = false;
    public passwordType: String = 'password';
    public skirtClass: String = 'fx-hidden';
    public signInClass: String = 'fx-hidden';
    private isOpen = false;

    constructor
    (
        private Service: AuthService
    ){}
    
    TogglePassword()
    {
        this.isPasswordToggle = !this.isPasswordToggle
        this.passwordIconClass = (this.isPasswordToggle) ? 'far fa-eye' : 'far fa-eye-slash';
        this.passwordType = (this.isPasswordToggle) ? 'text': 'password'

    }

    ToggleSignIn()
    {

    }
}