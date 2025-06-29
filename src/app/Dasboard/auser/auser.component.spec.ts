import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuserComponent } from './auser.component';

describe('AuserComponent', () => {
  let component: AuserComponent;
  let fixture: ComponentFixture<AuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
