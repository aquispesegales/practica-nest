import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[
        {
            id:1,
            name:'Jhon Doe',
            phone:'121212'
        },
        {
            id:2,
            name:'Alex jorge',
            phone:'2-3-2323232323'
        }
    ]

    getUsers(){
        return this.users;
    }
}
