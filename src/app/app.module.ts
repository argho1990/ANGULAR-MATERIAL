import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
