import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular';

  JsonForm = [
    {
      "responseData": "Naruto",
      "isActiveFlag": 1,
      "questionType": "FIELD",
      "questionDataType": "TEXT",
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "Name",
      "questionName": "name",
      "questionRequiredFlag": 1
    },{
      "responseData": "23",
      "isActiveFlag": 1,
      "questionType": "FIELD",
      "questionDataType": "NUMR",
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "Age",
      "questionName": "age",
      "questionRequiredFlag": 1
    },{
      "responseData": "100000",
      "isActiveFlag": 0,
      "questionType": "FIELD",
      "questionDataType": "NUMR",
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "Expected Salary",
      "questionName": "expectedSalary",
      "questionRequiredFlag": 1
    },{
      "responseData": "05/13/2022",
      "isActiveFlag": 1,
      "questionType": "DATE",
      "questionDataType": "",
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "Date of Birth",
      "questionName": "dob",
      "questionRequiredFlag": 1
    },{
      "responseData": "Astrophysics",
      "isActiveFlag": 1,
      "questionType": "FIELD",
      "questionDataType": "TEXT",
      "isReadonlyFlag": 1,
      "objOptions": [],
      "questionText": "Area of Interest",
      "questionName": "areaOfInterest",
      "questionRequiredFlag": 1
    },{
      "responseData": "I am a ninja...",
      "isActiveFlag": 1,
      "questionType": "FIELD",
      "questionDataType": "SHORT", //TextArea
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "About yourself",
      "questionName": "aboutYou",
      "questionRequiredFlag": 1
    },
    {
      "responseData": 1,
      "isActiveFlag": 1,
      "questionType": "YESNO", //Radio button
      "questionDataType": "",
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "Are you vaccinated?",
      "questionName": "areYouVaccinated",
      "questionRequiredFlag": 1
    },
  
    {
      "responseData": 1,
      "isActiveFlag": 1,
      "questionType": "CHECKBOX",
      "questionDataType": "",
      "isReadonlyFlag": 0,
      "objOptions": [],
      "questionText": "Employed",
      "questionName": "isEmployed",
      "questionRequiredFlag": 0
    },
    {
      "responseData": "20474",
      "isActiveFlag": 1,
      "questionType": "SELECT",
      "questionDataType": "SINGLE_SELECT",
      "isReadonlyFlag": 0,
      "objOptions": [
        {
          "optionId": 20474,
          "optionItemText": "C",
          "optionItemOrdinal": 1
        },
        {
          "optionId": 20475,
          "optionItemText": "C++",
          "optionItemOrdinal": 2
        },
        {
          "optionId": 20476,
          "optionItemText": "Java",
          "optionItemOrdinal": 3
        },
        {
          "optionId": 20477,
          "optionItemText": "Python",
          "optionItemOrdinal": 4
        }
      ],
      "questionText": "Favourite Programming Language",
      "questionName": "favoriteProgrammingLanguage",
      "questionRequiredFlag": 1
    },
    {
      "responseData": "20478,20479",
      "isActiveFlag": 1,
      "questionType": "SELECT",
      "isHiddenFlag": 0,
      "questionDataType": "MULTI_SELECT",
      "isReadonlyFlag": 0,
      "objOptions": [
        {
          "optionId": 20478,
          "optionItemText": "America",
          "optionItemOrdinal": 1
        },
        {
          "optionId": 20479,
          "optionItemText": "Japan",
          "optionItemOrdinal": 2
        },
        {
          "optionId": 20480,
          "optionItemText": "UK",
          "optionItemOrdinal": 3
        },
        {
          "optionId": 20481,
          "optionItemText": "France",
          "optionItemOrdinal": 4
        },
        {
          "optionId": 20482,
          "optionItemText": "Germany",
          "optionItemOrdinal": 5
        }
      ],
      "questionText": "Countries like to visit",
      "questionName": "countriesLikeToVisit",
      "questionRequiredFlag": 1
    },
    {
      "responseData": "20478,20479",
      "isActiveFlag": 1,
      "questionType": "SELECT",
      "isHiddenFlag": 0,
      "questionDataType": "MULTI_SELECT",
      "isReadonlyFlag": 0,
      "objOptions": [
        {
          "optionId": 20478,
          "optionItemText": "America",
          "optionItemOrdinal": 1
        },
        {
          "optionId": 20479,
          "optionItemText": "Japan",
          "optionItemOrdinal": 2
        },
        {
          "optionId": 20480,
          "optionItemText": "UK",
          "optionItemOrdinal": 3
        },
        {
          "optionId": 20481,
          "optionItemText": "France",
          "optionItemOrdinal": 4
        },
        {
          "optionId": 20482,
          "optionItemText": "Germany",
          "optionItemOrdinal": 5
        }
      ],
      "questionText": "Countries like to visit",
      "questionName": "countriesLikeToVisit",
      "questionRequiredFlag": 1
    }
  ]

  constructor(){}

  ngOnInit(){
    
  }
}
