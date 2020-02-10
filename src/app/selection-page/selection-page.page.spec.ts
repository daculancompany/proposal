import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectionPagePage } from './selection-page.page';

describe('SelectionPagePage', () => {
  let component: SelectionPagePage;
  let fixture: ComponentFixture<SelectionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
