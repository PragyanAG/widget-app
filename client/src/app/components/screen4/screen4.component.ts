import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {
 
  feedback = {
    labelID: '',
    description: ''
  };
  labelPlaceholders: any;
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.retrieveLabelPlaceholder();
  }
  retrieveLabelPlaceholder() {
    this.widgetService.getAll()
      .subscribe(
        data => {
          this.labelPlaceholders = data;
        },
        error => {
          console.log(error);
        });
  }
  saveFeedback() {
    const data = {
      labelID: this.feedback.labelID,
      description: this.feedback.description
    };

    this.widgetService.create(data)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
