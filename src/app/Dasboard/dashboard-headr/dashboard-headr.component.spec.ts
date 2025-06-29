import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadrComponent } from './dashboard-headr.component';

describe('DashboardHeadrComponent', () => {
  let component: DashboardHeadrComponent;
  let fixture: ComponentFixture<DashboardHeadrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHeadrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHeadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
