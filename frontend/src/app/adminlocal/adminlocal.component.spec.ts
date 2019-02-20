import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlocalComponent } from './adminlocal.component';

describe('AdminlocalComponent', () => {
  let component: AdminlocalComponent;
  let fixture: ComponentFixture<AdminlocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
