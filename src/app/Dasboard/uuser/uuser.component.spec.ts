import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuserComponent } from './uuser.component';

describe('UuserComponent', () => {
  let component: UuserComponent;
  let fixture: ComponentFixture<UuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
