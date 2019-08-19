import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: object = {
    name: "Carly Carnovale",
    contactInfo: "carlycarnovale@gmail.com",
    bio: "I enjoy spending time outdoors and one day would love to own an animal sanctuary."
  }

constructor(private router: Router) {}

  editProfile(): void {
    this.router.navigate(["/edit"]);
  }

  setUserProfile(formInfo: object): any {
    this.userProfile = formInfo
  } 


  getUserProfile(): object {
    return {...this.userProfile };
  }
}



