import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should make form invalid when empty', () => {
    expect(component.jobForm.valid).toBeFalse();
  });

  it('should allow name with letters and spaces', () => {
    component.jobForm.controls.name.setValue('Padmini Priya');
    expect(component.jobForm.controls.name.valid).toBeTrue();
  });

  it('should reject numbers in name', () => {
    component.jobForm.controls.name.setValue('Padmini123');
    expect(component.jobForm.controls.name.valid).toBeFalse();
  });

  it('should reject special characters in name', () => {
    component.jobForm.controls.name.setValue('Padmini@Priya');
    expect(component.jobForm.controls.name.valid).toBeFalse();
  });

  it('should validate email', () => {
    component.jobForm.controls.email.setValue('abc');
    expect(component.jobForm.controls.email.hasError('email')).toBeTrue();
  });

  it('should validate contact', () => {
    component.jobForm.controls.contact.setValue('12345');
    expect(component.jobForm.controls.contact.valid).toBeFalse();
  });

  it('should make form valid with correct values', () => {
    component.jobForm.setValue({
      name: 'Padmini Priya',
      email: 'padmini@gmail.com',
      contact: '9876543210'
    });

    expect(component.jobForm.valid).toBeTrue();
  });
});