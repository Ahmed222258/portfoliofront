import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEducationComponent } from './a-education.component';

describe('AEducationComponent', () => {
  let component: AEducationComponent;
  let fixture: ComponentFixture<AEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
