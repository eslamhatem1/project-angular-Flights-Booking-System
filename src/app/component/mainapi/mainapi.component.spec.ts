import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAinapiComponent } from './mainapi.component';

describe('MAinapiComponent', () => {
  let component: MAinapiComponent;
  let fixture: ComponentFixture<MAinapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAinapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MAinapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
