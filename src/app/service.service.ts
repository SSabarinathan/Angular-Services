import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor() {}

  OnEnrollClicked(title: string) {
    alert('You have selected ' + title + ' Course.');
  }
}
