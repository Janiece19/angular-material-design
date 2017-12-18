import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-dialog-componenet',
  templateUrl: './dialog-componenet.component.html',
  styleUrls: ['./dialog-componenet.component.css']

})
export class DialogComponenetComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogComponenetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
