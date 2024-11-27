import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  
  searchForm!:FormGroup;
  @Output() search:EventEmitter<any>=new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.searchForm= this.formBuilder.group({
      string: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    this.search.emit(this.searchForm.get('string')?.value);
  }

}
