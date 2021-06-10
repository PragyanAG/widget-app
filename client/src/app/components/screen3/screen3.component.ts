import { Component, OnInit } from '@angular/core';
import {
  MatDialog, MatDialogRef
} from '@angular/material/dialog';
import { Screen4Component } from '../screen4/screen4.component';
@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

  constructor(private dialog: MatDialog,
    private dialogRef: MatDialogRef<Screen3Component>) { }

  ngOnInit(): void {

  }
openScreen4(){
  const dialogRef = this.dialog.open(Screen4Component, {
    width: '300px',
    disableClose: true,
    hasBackdrop: true
  });
  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
  });
  this.dialogRef.close();
  
}
}

