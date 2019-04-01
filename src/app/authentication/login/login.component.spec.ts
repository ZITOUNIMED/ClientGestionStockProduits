// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { configureTestSuite } from 'ng-bullet';
//
// import { LoginComponent } from './login.component';
// import { AppService } from '../app.service';
//
// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let appServiceStub;
//
//   configureTestSuite(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       providers: [
//         FormBuilder,
//         { provide: AppService, useValue: {}},
//         { provide: Router, useValue: {}}
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     });
//
//     appServiceStub = TestBed.get(AppService);
//     appServiceStub.authenticate = jasmine.createSpy('authenticate');
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   describe('init component', () => {
//     it('should init login form', () => {
//       // Given
//       component.loginForm = null;
//
//       // When
//       component.ngOnInit();
//
//       // Then
//       expect(component.loginForm).toBeTruthy();
//       expect(component.loginForm.controls['username']).toBeTruthy();
//       expect(component.loginForm.controls['password']).toBeTruthy();
//     });
//
//     it('should set username required and minLength is 3', () => {
//       // Given
//       component.loginForm = null;
//
//       // When
//       component.ngOnInit();
//
//       // Then
//       const usernameControl = component.loginForm.controls['username'];
//
//       usernameControl.setValue('');
//       expect(usernameControl.errors).toBeTruthy();
//       usernameControl.setValue('uu');
//       expect(usernameControl.errors).toBeTruthy();
//       usernameControl.setValue('usr');
//       expect(usernameControl.errors).toBeFalsy();
//     });
//
//     it('should set password required and minLength is 3', () => {
//       // Given
//       component.loginForm = null;
//
//       // When
//       component.ngOnInit();
//
//       // Then
//       const passwordControl = component.loginForm.controls['password'];
//
//       passwordControl.setValue('');
//       expect(passwordControl.errors).toBeTruthy();
//       passwordControl.setValue('pp');
//       expect(passwordControl.errors).toBeTruthy();
//       passwordControl.setValue('pas');
//       expect(passwordControl.errors).toBeFalsy();
//     });
//   });
//
//   describe('login', () => {
//     it('should call appService authenticate method', () => {
//
//       // Given
//       const credentials = {
//         username: 'username',
//         password: 'username'
//       };
//
//       component.credentials = credentials;
//       // When
//       component.login();
//
//       // Then
//       expect(appServiceStub.authenticate).toHaveBeenCalledWith(credentials, jasmine.any(Function));
//     });
//   });
//
//
//
//
//
//
//
//
//
//
//
// });
