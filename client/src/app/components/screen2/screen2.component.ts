import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {
  MatDialog, MatDialogRef
} from '@angular/material/dialog';
import { Screen3Component } from '../screen3/screen3.component';
/**
 * @title Table with pagination
 */
 @Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements AfterViewInit {
  displayedColumns: string[] = ['name1', 'name2', 'name3', 'name4', 'name5'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<Screen2Component>
    
  ) { }

  ngAfterViewInit() {
   
  }
  saveClick1(input : number) {
      const dialogRef = this.dialog.open(Screen3Component, {
      width: '300px',
      disableClose: true,
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngAfterViewInit();
    });
    this.dialogRef.close();
    
  }
}


export interface PeriodicElement {
  name1: number;
  name2: number;
  name3: number;
  name4: number;
  name5: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {name1: 1, name2: 2, name3: 3, name4: 4 , name5: 5}
];


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */