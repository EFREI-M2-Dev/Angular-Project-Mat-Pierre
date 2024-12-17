import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  standalone: true
})
export class PasswordValidatorDirective {

  private readonly RULES = {
    capitalLetter: true,
    specialCharacter: true,
  };

  static passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const rules = {
      capitalLetter: true,
      specialCharacter: true,
    };

    if (rules.capitalLetter && !/[A-Z]/.test(control.value)) {
      return { passwordForbidden: { capitalLetter: 'Doit contenir au moins une lettre majuscule' } };
    }

    if (rules.specialCharacter && !/[!-/:-@[-`{-~]/.test(control.value)) {
      return { passwordForbidden: { specialCharacter: 'Doit contenir au moins un caractère spécial' } };
    }

    return null;
  };

}
