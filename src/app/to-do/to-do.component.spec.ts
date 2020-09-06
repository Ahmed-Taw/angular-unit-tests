import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import { TODOService } from './to-do.service';
import { FormBuilder } from '@angular/forms';
import { Observable, of} from 'rxjs';

// Form Unit tests 

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let service: TODOService;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(ToDoComponent);
    service = new TODOService(null);
    component = new ToDoComponent(new FormBuilder(), service) //fixture.componentInstance;
     //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
 
    expect(component.form).toBeTruthy();
  });


  
  it('should find the correct fields in the form', () => {
 
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('email')).toBeTruthy();

  });

  
  it('should validate name field as required in the form', () => {
   let nameControl = component.form.get('name');
   nameControl.setValue('');
    expect(nameControl.valid).toBeFalsy();
  });



  it('should define Todos after calling GetTodos from service', () => {
   // we use this function to fake calling for any API calls 
   // could return a value or return observable.throw to est error case 
   // we can use spnOn also with window object incase we invoke confirmation box for example and return true without invoking the confirmation message
   //e.g.  spyOn(window,'confirm').and.returnValue(true);
    spyOn(service, 'getToDos').and.callFake(() => {
        return of([1,3,4]);
    });

    component.ngOnInit();

    expect(component.Todos.length).toBe(3);
    
   });
});
