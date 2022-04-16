import { Component, OnInit } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';
// import { ProgressBarMode } from '@angular/material/progress-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
  }
  

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    showFiller = false;
    user: Observable<any>;              // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)

    // user info
    constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
        this.user = null;
    }
   
    ngOnInit(): void {
        this.afAuth.authState.subscribe(user => {
            console.log('Dashboard: user', user);

            if (user) {
                let emailLower = user.email.toLowerCase();
                this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
            }
        });
    }


    // progress bar
    Showprogressbar()  
  {  
    this.Showprogress(); this.timer();  
  }  
  progress = 0;  
 Showprogress()  
 {  
 this.progress = 0;  
   setInterval(() => this.ProgressBar(), 6000000)  
   }  
  
 ProgressBar() {  
   
   if (this.progress == 0) {  
     this.progress = this.progress + 1.5  
   } else {  
     this.progress = this.progress + 1.5;  
     if (this.progress = this.progress + 1.5) {  
       this.progress == this.progress + 1.5;  
       if (this.progress >= 100) {  
         this.progress = 100;  
       }  
     }  
   }  
 }  
  timer()  
  {  
    var timeleft = 1;  
    var downloadTimer = setInterval(function () {  
      if (timeleft <= 0) {  
        clearInterval(downloadTimer); this.progress = 0;  
  
      } else {  
        document.getElementById("countdown").innerHTML = timeleft + "";  
      }  
      timeleft -= 1;      
    }, 1000);  
    setInterval(() => clearInterval(downloadTimer), 1000)  
      
  } 
  
}
