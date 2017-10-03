import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDashboardComponent } from './api-dashboard.component';

describe('ApiDashboardComponent', () => {
  let component: ApiDashboardComponent;
  let fixture: ComponentFixture<ApiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
