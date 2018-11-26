import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityHologramComponent } from './celebrity-hologram.component';

describe('CelebrityHologramComponent', () => {
  let component: CelebrityHologramComponent;
  let fixture: ComponentFixture<CelebrityHologramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityHologramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityHologramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
