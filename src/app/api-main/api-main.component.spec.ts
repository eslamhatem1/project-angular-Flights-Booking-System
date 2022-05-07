import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMainComponent } from './api-main.component';

describe('ApiMainComponent', () => {
  let component: ApiMainComponent;
  let fixture: ComponentFixture<ApiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
