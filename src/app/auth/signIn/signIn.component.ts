import
{
    Component,
    DoCheck
} from '@angular/core';

//import AUTH API
import { AuthService } from '../../api/api.auth';

@Component
({
    selector: 'app-signin',
    templateUrl: './signIn.component.html'
})

export class SignInComponent implements DoCheck
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
    
    ngDoCheck()
    {
        if(this.Service.signInIsOpen.value)
        {
            this.Service.signInIsOpen.next(false);
            this.TogglePanel()
        }
    }

    TogglePassword()
    {
        this.isPasswordToggle = !this.isPasswordToggle
        this.passwordIconClass = (this.isPasswordToggle) ? 'far fa-eye' : 'far fa-eye-slash';
        this.passwordType = (this.isPasswordToggle) ? 'text': 'password'

    }

    TogglePanel()
    {
        this.signInClass = (this.isOpen) ? 'fx-notvisable' : 'fx-visable';
        this.skirtClass = 'fx-visable';
        //if isOpen current false we want open it if not we want close it 
        this.signInClass = (this.isOpen) ? 'closeRightPanel' : 'openRightPanel';
        this.isOpen = !this.isOpen;
        setTimeout(() =>
        {
            this.signInClass = (this.isOpen) ? 'fx-show' : 'fx-hidden';
            this.skirtClass = (this.isOpen) ? 'fx-show' : 'fx-hidden';
        }, (this.isOpen) ? 513 : 348);
    }

}