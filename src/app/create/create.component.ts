import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() jsonQ;
  @Output() toSurvey;
  @Output() show;

  constructor() { }

  ngOnInit() {
    this.show = false;
  }

  public setJSONvalue(data){
    // console.log(data);
    this.jsonQ = data;
  }

  public create() {
    const text = JSON.parse(this.jsonQ);
    console.log(text)
    this.toSurvey = text;
    this.show = true;
  }

}
