import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

var date = new Date();
var validatedStartDate:any;
var validatedEndDate:any;

export function startDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        validatedStartDate = new Date(control.value)
        if (validatedStartDate > validatedEndDate) {
            return { endDateError: { value: control.value } }
        }
        if (new Date(control.value) <= date) {
            return { forbiddenDate: { value: control.value } }
        }
        else{
            return null
        }
    }
}


export function endDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        validatedEndDate = new Date(control.value)
        if (new Date(control.value) < date) {
            return { forbiddenDate: { value: control.value } }
        }
        else if(new Date(control.value) <= validatedStartDate){
            return { forbiddenDate: { value: control.value } }
        }
        else{
            return null
        }
    }
}


