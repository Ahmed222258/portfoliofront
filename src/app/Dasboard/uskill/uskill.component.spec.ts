import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UskillComponent } from './uskill.component';

describe('UskillComponent', () => {
  let component: UskillComponent;
  let fixture: ComponentFixture<UskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UskillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
