import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserDto} from '../dtos/user-dto';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
 public displayedColumns: string[] = ['position', 'name', 'surname'];
 public dataSource: UserDto[] = this.userService.getUserList();

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }


}
