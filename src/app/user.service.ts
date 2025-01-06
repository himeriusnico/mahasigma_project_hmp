import { Injectable } from '@angular/core';  
import { BehaviorSubject } from 'rxjs';  

@Injectable({  
  providedIn: 'root',  
})  
export class UserService {  
  private userSource = new BehaviorSubject<any>(null); // Initial value is null  
  currentUser = this.userSource.asObservable(); // Observable to subscribe to  

  constructor() {}  

  setUser(user: any) {  
    this.userSource.next(user); // Emit the new user value  
  }  

  clearUser() {  
    this.userSource.next(null); // Emit null when logging out  
  }  
}  
