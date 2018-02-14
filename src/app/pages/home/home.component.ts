import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NotificationService } from '../../services/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'HOMEPAGE UI';
  private userForm;
  homepageIO = {
    username: null
  }

  constructor(private nfs: NotificationService) {
    // would need to handle form data here and figure it out
    // if data exists use that or else set the form up to fill out
    if(localStorage.getItem('homepageIO')) {
      let user = JSON.parse(localStorage.getItem('homepageIO'));
      this.userForm = new FormGroup({
        user: new FormControl(user.username)
      })
    } else {
      this.userForm = new FormGroup({
        user: new FormControl()
      })
    }
  }

  setUserName() {
    this.homepageIO.username = this.userForm.value.user;
    this.setLocalStorage();
    this.nfs.createNewNotification('Yes thank you for subscribing', `Name changed to ${this.userForm.value.user}`);
  }

  setLocalStorage() {
    let json = JSON.stringify(this.homepageIO);
    localStorage.setItem('homepageIO', json);
  }
}
