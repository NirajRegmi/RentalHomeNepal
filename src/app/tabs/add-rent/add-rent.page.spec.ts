import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRentPage } from './add-rent.page';

describe('AddRentPage', () => {
  let component: AddRentPage;
  let fixture: ComponentFixture<AddRentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
