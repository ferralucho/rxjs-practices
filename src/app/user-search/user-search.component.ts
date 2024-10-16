import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilKeyChanged, map, shareReplay, switchMap, tap } from 'rxjs';
import { User, UsersService } from '../users.service';
import { inject } from '@angular/core';



@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent {
  searchConfigForm = new FormGroup({
    userName: new FormControl('', { nonNullable: true }),
    resultLimit: new FormControl(3, { nonNullable: true }),
})

searchConfig$ = this.searchConfigForm.valueChanges.pipe(
  debounceTime(300),
  distinctUntilKeyChanged('userName'),
  map((config) => {
    const trimmedConfig = {
      ...config,
      userName: config.userName?.trim() || '',
    };
    return trimmedConfig
  }),
  tap((trimmedConfig) => localStorage.setItem('searchConfig', JSON.stringify(trimmedConfig)))
);

usersService = inject(UsersService);


users$ = this.searchConfig$.pipe(
  switchMap((searchConfig) => this.usersService.findUsers(searchConfig)),
  shareReplay(1),
)

identifyUser(index: number, item: User) {
  return item.name;
}

}
