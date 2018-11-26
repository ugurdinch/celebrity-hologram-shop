import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCelebrityHologramComponent } from './delete-celebrity-hologram.component';

describe('DeleteCelebrityHologramComponent', () => {
  let component: DeleteCelebrityHologramComponent;
  let fixture: ComponentFixture<DeleteCelebrityHologramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCelebrityHologramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCelebrityHologramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
