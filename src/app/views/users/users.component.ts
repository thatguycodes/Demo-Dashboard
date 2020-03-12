
import { DummyService } from './../../shared/services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private service: DummyService) { }

  ngOnInit(): void {
   this.users = this.service.setUsers();
   console.log(this.users);
  }

}
