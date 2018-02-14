import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private accessGranted: boolean = false;

  constructor() {
    Notification.requestPermission().then((result) => {
      if(result === 'granted') {
        this.accessGranted = true;
      } else {
        this.accessGranted = false;
      }
    })
  }

  createNewNotification(message, body) {
    let options = {
      body: body ? body : ''
    };
    let notif = new Notification(message, options);
  }
}
