import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
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
      validators: {
        fieldMatch: {
          expression: this.validationService.passwordsAreMatching,
          errorPath: 'confirmPassword',
          message: "Passwords don't match",
        },
      },
      fieldGroup: [
        {
          key: 'firstName',
          type: 'input',
          props: {
            label: 'First name',
            placeholder: 'Enter your first name',
            required: true,
            minLength: 3,
            maxLength: 15,
          },
          validators: {
            validation: [this.validationService.noSpacesAllowedValidator],
          },
        },
        {
          key: 'lastName',
          type: 'input',
          props: {
            label: 'Last name',
            placeholder: 'Enter your last name',
            required: true,
            minLength: 3,
            maxLength: 15,
          },
          validators: {
            validation: [this.validationService.noSpacesAllowedValidator],
          },
        },
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
          },
          validators: {
            validation: [this.validationService.passwordValidator],
          },
        },
        {
          key: 'confirmPassword',
          type: 'input',
          props: {
            label: 'Confirm password',
            placeholder: 'Enter password again',
            required: true,
          },
        },
      ],
    },
  ];

  onSubmit(): void {
    console.log(this.form);
  }
}
