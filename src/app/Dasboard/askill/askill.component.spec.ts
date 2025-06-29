import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskillComponent } from './askill.component';

describe('AskillComponent', () => {
  let component: AskillComponent;
  let fixture: ComponentFixture<AskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
