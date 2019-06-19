import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service'
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) { }





  userType = [
    { id: 1, value: 'Customer' },
    { id: 2, value: 'Dealer' }
  ];

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
