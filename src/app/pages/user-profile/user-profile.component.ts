import { Component } from '@angular/core';
import { Address } from '../../mocks/address.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  addresses: Address[] = [];

}
