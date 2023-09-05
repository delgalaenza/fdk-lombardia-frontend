import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitatoComponent } from './comitato.component';

describe('ComitatoComponent', () => {
  let component: ComitatoComponent;
  let fixture: ComponentFixture<ComitatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComitatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComitatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
