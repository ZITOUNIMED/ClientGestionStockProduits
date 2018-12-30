import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartComponent } from './my-chart.component';

xdescribe('MyChartComponent', () => {
  let component: MyChartComponent;
  let fixture: ComponentFixture<MyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
