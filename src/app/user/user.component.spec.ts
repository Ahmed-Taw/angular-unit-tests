import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ UserComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UserComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    });
  });

  it('user component should be created', () => {
    fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

  it('Should access user name from the service', () => {
    fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.Name).toEqual(app.user.Name);
  });

  it('HTML Should contain the user name while the user is lgged in', () => {
    fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isUserLoggedIn = true;
    fixture.detectChanges();
    let compiledComponenet = fixture.debugElement.nativeElement;
    expect(compiledComponenet.querySelector('p').textContent).toContain(app.user.Name);
  });

  it('HTML Should\'nt contain the user name while the user is not lgged in', () => {
    fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isUserLoggedIn = false;
    fixture.detectChanges();
    let compiledComponenet = fixture.debugElement.nativeElement;
    expect(compiledComponenet.querySelector('p').textContent).not.toContain(app.user.Name);
  });

  
});
