import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: any = []
  
  ngOnInit(){
this.allUsers()

  }

  constructor(private authService: AuthService){}

  allUsers(){

this.authService.allUsers().subscribe(r => {
  this.users = r

  console.log(this.users)
})

  }


  deleteUser(id: string){
    if(confirm("Seguro que quiere eliminar este usuario?")){
      this.authService.deleteUser(id)?.subscribe();
      setTimeout(() =>{
        window.location.reload()
      },1000)
    }
    

  }
}
