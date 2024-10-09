import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { User } from './user.model';

//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();

  selectId = output<string>();

  @Input({ required: true }) user!: User;

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  //selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.user.avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.selectId.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
