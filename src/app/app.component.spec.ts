import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// ✅ Create a mock TimeseriesChartComponent
@Component({
  selector: 'app-timeseries-chart',
  template: '',
  standalone: true,
})
class MockTimeseriesChartComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, 
        MockTimeseriesChartComponent, // ✅ Mock instead of testing the real component
      ],
    }).compileComponents();
  });

  it('should create the AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
