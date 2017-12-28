import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { NumberFormatStyle } from '@angular/common/src/i18n/locale_data_api';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private API_URL = 'https://reqres.in/api/'

  constructor(public http: Http) {}
    
    createAccount( email: string, passwords:string){
      return new Promise ((resolve, reject) => {
        var data= {
          email: email,
          passwords: passwords
        };

        
     this.http.post(this.API_URL + 'register', data)
     .subscribe((result:any) => {
       resolve(result.json());
     },
     (error) =>{
       reject (error.json());
     })
      

   });
  }

  login( email: string, passwords:string){
    return new Promise ((resolve, reject) => {
      var data= {
        email: email,
        passwords: passwords
      };

   this.http.post(this.API_URL + 'login', data)
   .subscribe((result:any) => {
     resolve(result.json());
   },
   (error) =>{
     reject (error.json());
    }
  )
    
 });
}

getAll(page: number){
  return new Promise ((resolve, reject) => {
  
    let url = this.API_URL + 'users?per_page=10&page=' + page;

 this.http.get(url)
 .subscribe((result:any) => {
   resolve(result.json());
 },
 (error) =>{
   reject (error.json());
  }
)
  
});
}

get(id: number){
  return new Promise ((resolve, reject) => {
  
    let url = this.API_URL + 'users' + id;

 this.http.get(url)
 .subscribe((result:any) => {
   resolve(result.json());
 },
 (error) =>{
   reject (error.json());
  }
)
  
});


}

insert(user: any){
  return new Promise ((resolve, reject) => {
  
    let url = this.API_URL + 'users';

 this.http.get(url, user)
 .subscribe((result:any) => {
   resolve(result.json());
 },
 (error) =>{
   reject (error.json());
  }
) 
  
});


}

delete(id: number){
  return new Promise ((resolve, reject) => {
  
    let url = this.API_URL + 'users/' + id;

 this.http.delete(url)
 .subscribe((result:any) => {
   resolve(result.json());
 },
 (error) =>{
   reject (error.json());
  }
) 
  
});


}



}
