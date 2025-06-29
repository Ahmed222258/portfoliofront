import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationshowComponent } from './educationshow.component';

describe('EducationshowComponent', () => {
  let component: EducationshowComponent;
  let fixture: ComponentFixture<EducationshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
