import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';

import * as Survey from 'survey-angular';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnChanges {

  @Output() theAnswers: any
  @Input() data;

  constructor() { }

  theJSON = {
 pages: [
  {
   elements: [
    {
     type: "text",
     commentText: "De que tamano es el local?",
     inputType: "number",
     isRequired: true,
     name: "q1",
     placeHolder: "De que tamano es el local?",
     title: "Describe el local"
    }
   ],
   name: "page1"
  },
  {
   elements: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "calle",
       text: "Calle"
      },
      {
       value: "centro",
       text: "Centro comercial"
      },
      {
       value: "super",
       text: "Supermercado"
      }
     ],
     isRequired: true,
     name: "q2",
     title: "Donde se encuentra el local?"
    }
   ],
   name: "page2"
  },
  {
   elements: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "peatonal",
       text: "Peatonal"
      },
      {
       value: "vehicular",
       text: "Vehicular"
      }
     ],
     isRequired: true,
     name: "calle",
     title: "Es una calle peatonal o vehicular?",
     visible: false,
     visibleIf: "{q2} = 'calle'"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "inline",
       text: "Inline"
      },
      {
       value: "kiosko",
       text: "Kiosko"
      }
     ],
     isRequired: true,
     name: "qtipo",
     title: "De que tipo sera el local?",
     visible: false,
     visibleIf: "{q2} = 'centro'"
    }
   ],
   name: "page3"
  },
  {
   elements: [
    {
     type: "text",
     inputType: "number",
     isRequired: true,
     name: "qpantallas",
     title: "Cuantas pantallas?",
     visible: false,
     visibleIf: "{qtipo} = 'inline'"
    },
    {
     type: "text",
     inputType: "number",
     isRequired: true,
     name: "vip",
     title: "Cuantas son VIP?",
     visible: false,
     visibleIf: "{qpantallas} > 0"
    }
   ],
   name: "page6"
  },
  {
   elements: [
    {
     type: "rating",
     isRequired: true,
     name: "Califica la calidad de la fachada del 1 al 10",
     rateValues: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
     ],
     visible: false,
     visibleIf: "{q2} = 'calle'"
    }
   ],
   name: "page4"
  },
  {
   elements: [
    {
     type: "rating",
     isRequired: true,
     name: "q5",
     title: "Califica la calidad de los accesos del 1 al 5",
     visible: false,
     visibleIf: "{q2} = 'calle'"
    }
   ],
   name: "page5"
  },
  {
   elements: [
    {
     type: "rating",
     isRequired: true,
     name: "global",
     title: "Califica el local de forma global",
     visible: false,
     visibleIf: "{qtipo} = 'inline' or {qtipo} = 'super'"
    }
   ],
   name: "page7"
  }
 ]
}

  ngOnChanges() {

    Survey.Survey.cssType = "bootstrap";
    const surveyModel = new Survey.ReactSurveyModel(this.data);
    surveyModel.locale = "es";

    surveyModel.onComplete.add((res, options) => {
      this.theAnswers = res.data;
    });
    
    Survey.SurveyNG.render("surveyElement", {model:surveyModel})

    
  }

  
}
