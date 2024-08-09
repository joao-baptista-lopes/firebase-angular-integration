import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private databaseStore: AngularFirestore) { }

  getAllUsers() {
    return this.databaseStore.collection('users', user => user.orderBy('name')).valueChanges({ idfield: 'firebaseId' }) as Observable<any[]>
  }

  addUser(user: any) {
    return this.databaseStore.collection('user').add(user)
  }

  update(userId: string, user: any) {
    return this.databaseStore.collection('user').doc(userId).update(user)
  }

  deleteUser(userId: string) {
    return this.databaseStore.collection('user').doc(userId).delete()
  }

}
