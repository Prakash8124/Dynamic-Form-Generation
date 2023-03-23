import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  formGroup1: FormGroup = new FormGroup({})
  formGroup2: FormGroup = new FormGroup({})

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.formGroup1 = this.fb.group({
      formArray1: this.fb.array([])
    });
    this.formGroup2 = this.fb.group({
      formArray2: this.fb.array([])
    });
    this.addControl();
    console.log(this.formGroup1);
    console.log(this.formGroup2);
  }

  get formArray1(): FormArray {
    return (this.formGroup1 as FormGroup).get('formArray1') as FormArray;
  }
  get formArray2(): FormArray {
    return (this.formGroup2 as FormGroup).get('formArray2') as FormArray;
  }

  addControl(){
    this.todo.forEach((val:string) => {
      let control = this.fb.control(val);
      this.formArray1.push(control);
    })
    this.done.forEach((val:string) => {
      let control = this.fb.control(val);
      this.formArray2.push(control);
    })
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<FormArray>) {
    if (event.previousContainer === event.container) {
      moveItemInArray((event.container.data as FormArray).controls, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        (event.previousContainer.data as FormArray).controls,
        (event.container.data as FormArray).controls,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
