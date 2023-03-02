import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public validationService: ValidationService,
    private fb: FormBuilder
  ) {}

  facebookIcon = faFacebookF;
  googleIcon = faGoogle;

  form = new FormGroup({});
  model = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          props: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
            type: 'email',
          },
          validators: { validation: [this.validationService.emailValidator] },
        },
        {
          key: 'password',
          type: 'input',
          props: {
            label: 'Password',
            placeholder: 'Enter password',
            required: true,
            maxLength: 100,
          },
        },
      ],
    },
  ];

  onSubmit(): void {
    console.log(this.form);
  }
}
