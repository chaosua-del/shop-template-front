import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  regexValidator(
    regex: RegExp,
    control: FormControl,
    errorKey: string
  ): ValidationErrors | null {
    return !control.value || regex.test(control.value)
      ? null
      : { [errorKey]: true };
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    // eslint-disable-next-line no-useless-escape
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return !control.value || emailRegexp.test(control.value)
      ? null
      : { email: true };
  }

  noSpacesAllowedValidator(control: FormControl): ValidationErrors | null {
    return !control.value || control.value.indexOf(' ') === -1
      ? null
      : { noSpacesAllowed: true };
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return !control.value || passwordRegexp.test(control.value)
      ? null
      : { password: true };
  }

  passwordsAreMatching(control: AbstractControl) {
    const { password, confirmPassword } = control.value;

    // avoid displaying the message error when values are empty
    if (!confirmPassword || !password) {
      return true;
    }

    if (confirmPassword === password) {
      console.log('pass');

      return true;
    }

    return false;
  }
}
