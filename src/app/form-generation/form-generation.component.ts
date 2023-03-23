import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-generation',
  templateUrl: './form-generation.component.html',
  styleUrls: ['./form-generation.component.scss'],
})
export class FormGenerationComponent implements OnInit {
  @Input() formData:any

  formGroup:FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formData.forEach((obj:any) => {
      let control = this.fb.control(
        obj.questionType == 'DATE' ? new Date(obj.responseData) 
        : obj.questionType == 'SELECT' && obj.questionDataType == 'MULTI_SELECT' ? obj.responseData.split(",").map(Number)
        : obj.questionType == 'SELECT' && obj.questionDataType == 'SINGLE_SELECT' ? Number(obj.responseData)
        : obj.questionType == 'YESNO' ?obj.responseData.toString()
        : obj.responseData,
        obj.questionRequiredFlag == 1 ? Validators.required : null
      );
      this.formGroup.addControl(obj.questionText, control);
    });

    console.log(this.formGroup)
  } 

}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA:any = [
// {
//   'nokia': {
//     projectName: 'expression builder',
//     projectDuration: '3 years',
//     developmentEnvironment: ['nodejs', 'reactjs'],
//     members: [
//         {
//             name: 'karthick',
//             age: 27,
//             yearOfExperience: 4,
//             position: 'front-end developer',
//             skills: ['reactjs', 'angularjs']
//         }, {
//             name: 'krishna',
//             age: 25,
//             yearOfExperience: 2,
//             position: 'tester',
//             skills: ['Automation testing']
//         }, {
//             name: 'kajal',
//             age: 23,
//             yearOfExperience: 1.2,
//             position: 'designer',
//             skills: ['Icon designing', 'Adobe XD']
//         }, {
//             name: 'Guhan',
//             age: 24,
//             yearOfExperience: 1.5,
//             position: 'Back-end developer',
//             skills: ['Nodejs', 'PHP']
//         }
//     ]
// },
// 'microsoft': {
//     projectName: 'Trends',
//     projectDuration: '2 years',
//     developmentEnvironment: ['reactjs', 'coldFusion', 'd3js'],
//     members: [
//         {
//             name: 'Arul',
//             age: 31,
//             yearOfExperience: 7,
//             position: 'Back-end developer',
//             skills: ['coldFusion', 'jQuery', 'SQL']
//         }, {
//             name: 'roshini',
//             age: 27,
//             yearOfExperience: 3,
//             position: 'tester and designer',
//             skills: ['manual testing', 'Sketch tool', 'icon design']
//         }, {
//             name: 'yokesh',
//             age: 25,
//             yearOfExperience: 2,
//             position: 'Front-end developer',
//             skills: ['Reactjs', 'd3js']
//         }, {
//             name: 'kalidass',
//             age: 24,
//             yearOfExperience: 0.8,
//             position: 'junior developer',
//             skills: ['reactjs', 'nodejs']
//         }
//     ]
// },
// 'apple': {
//     projectName: 'Whatzilla',
//     projectDuration: '1 year',
//     developmentEnvironment: ['Reactjs', 'nodejs', 'bootstrap'],
//     members: [
//         {
//             name: 'Rajive',
//             age: 28,
//             yearOfExperience: 4.5,
//             position: 'developer',
//             skills: ['reactjs', 'angularjs', 'nodejs']
//         }, {
//             name: 'Sri',
//             age: 23,
//             yearOfExperience: 1,
//             position: 'junior developer',
//             skills: ['reactnative', 'reactjs', 'vuejs']
//         }, {
//             name: 'Ajay',
//             age: 25,
//             yearOfExperience: 2.5,
//             position: 'Back-end developer',
//             skills: ['nodejs']
//         }
//     ]
// }
// }
// ];