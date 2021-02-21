import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesdetailsComponent } from './personajesdetails.component';

describe('PersonajesdetailsComponent', () => {
  let component: PersonajesdetailsComponent;
  let fixture: ComponentFixture<PersonajesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
