import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidePosterComponent } from './slide-poster.component';

describe('SlidePosterComponent', () => {
  let component: SlidePosterComponent;
  let fixture: ComponentFixture<SlidePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePosterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
