import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCelebrityHologramComponent } from './create-celebrity-hologram.component';

describe('CreateCelebrityHologramComponent', () => {
  let component: CreateCelebrityHologramComponent;
  let fixture: ComponentFixture<CreateCelebrityHologramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCelebrityHologramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCelebrityHologramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
