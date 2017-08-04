# Surveys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

```json
{
 "pages": [
  {
   "elements": [
    {
     "type": "text",
     "commentText": "De que tamano es el local?",
     "inputType": "number",
     "isRequired": true,
     "name": "q1",
     "placeHolder": "De que tamano es el local?",
     "title": "Describe el local"
    }
   ],
   "name": "page1"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "calle",
       "text": "Calle"
      },
      {
       "value": "centro",
       "text": "Centro comercial"
      },
      {
       "value": "super",
       "text": "Supermercado"
      }
     ],
     "isRequired": true,
     "name": "q2",
     "title": "Donde se encuentra el local?"
    }
   ],
   "name": "page2"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "peatonal",
       "text": "Peatonal"
      },
      {
       "value": "vehicular",
       "text": "Vehicular"
      }
     ],
     "isRequired": true,
     "name": "calle",
     "title": "Es una calle peatonal o vehicular?",
     "visible": false,
     "visibleIf": "{q2} = 'calle'"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "inline",
       "text": "Inline"
      },
      {
       "value": "kiosko",
       "text": "Kiosko"
      }
     ],
     "isRequired": true,
     "name": "qtipo",
     "title": "De que tipo sera el local?",
     "visible": false,
     "visibleIf": "{q2} = 'centro'"
    }
   ],
   "name": "page3"
  },
  {
   "elements": [
    {
     "type": "text",
     "inputType": "number",
     "isRequired": true,
     "name": "qpantallas",
     "title": "Cuantas pantallas?",
     "visible": false,
     "visibleIf": "{qtipo} = 'inline'"
    },
    {
     "type": "text",
     "inputType": "number",
     "isRequired": true,
     "name": "vip",
     "title": "Cuantas son VIP?",
     "visible": false,
     "visibleIf": "{qpantallas} > 0"
    }
   ],
   "name": "page6"
  },
  {
   "elements": [
    {
     "type": "rating",
     "isRequired": true,
     "name": "Califica la calidad de la fachada del 1 al 10",
     "rateValues": [
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
     "visible": false,
     "visibleIf": "{q2} = 'calle'"
    }
   ],
   "name": "page4"
  },
  {
   "elements": [
    {
     "type": "rating",
     "isRequired": true,
     "name": "q5",
     "title": "Califica la calidad de los accesos del 1 al 5",
     "visible": false,
     "visibleIf": "{q2} = 'calle'"
    }
   ],
   "name": "page5"
  },
  {
   "elements": [
    {
     "type": "rating",
     "isRequired": true,
     "name": "global",
     "title": "Califica el local de forma global",
     "visible": false,
     "visibleIf": "{qtipo} = 'inline' or {qtipo} = 'super'"
    }
   ],
   "name": "page7"
  }
 ]
}
```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
