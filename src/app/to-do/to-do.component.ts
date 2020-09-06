import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TODOService } from './to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  providers:[FormBuilder, TODOService]
})
export class ToDoComponent implements OnInit {

  form: FormGroup; 
  Todos: any[];

  constructor(fb: FormBuilder, private service: TODOService) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
  ngOnInit(): void {
    this.service.getToDos().subscribe(re => 
      
      {
        this.Todos = re;
      });
    }

}
