import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    state: new FormControl(''),
    gender: new FormControl('1'),
    birthDate: new FormControl(''),
    userType: new FormControl(0),
    isActive: new FormControl(false)
  });

  initializeFormGroup() {

    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      state: '',
      birthDate: '',
      userType: '',
      isActive: 'false'
    });

  }








}


