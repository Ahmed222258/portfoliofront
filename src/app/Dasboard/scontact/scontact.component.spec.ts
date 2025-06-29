import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontactComponent } from './scontact.component';

describe('ScontactComponent', () => {
  let component: ScontactComponent;
  let fixture: ComponentFixture<ScontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
