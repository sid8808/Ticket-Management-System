import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Cat} from '../category-mock'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})
export class NewticketComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  Category = Cat;

  CategoryValue !: FormGroup;

  constructor(private formBuilder: FormBuilder){ }


  ngOnInit(): void {
    this.CategoryValue = this.formBuilder.group({
      category:['']
    })
  }

  changeCategory(e:any){
    console.log(e.target.value)
  }


}
