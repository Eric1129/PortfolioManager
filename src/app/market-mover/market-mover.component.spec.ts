import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMoverComponent } from './market-mover.component';

describe('MarketMoverComponent', () => {
  let component: MarketMoverComponent;
  let fixture: ComponentFixture<MarketMoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketMoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketMoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
