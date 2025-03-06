import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';

/**
 * Component for displaying a time-series chart of USD/EUR exchange rates.
 * Uses Plotly for visualization and fetches data from ExchangeRatesService.
 */
@Component({
  selector: 'app-timeseries-chart',
  standalone: true,
  imports: [CommonModule, PlotlyModule],
  templateUrl: './timeseries-chart.component.html',
  styleUrls: ['./timeseries-chart.component.css'],
})
export class TimeseriesChartComponent implements OnInit {
  /** Data for the chart */
  chartData: any[] = [];

  /** Layout configuration for the chart */
  chartLayout: any = {};

  /**
   * Constructor initializes the component with ExchangeRatesService.
   * @param {ExchangeRatesService} exchangeRatesService - Service to fetch exchange rate data.
   */
  constructor(private exchangeRatesService: ExchangeRatesService) {}

  /**
   * Lifecycle hook: Runs after component initialization.
   * Fetches the time-series exchange rates and updates the chart data.
   *
   * @throws {Error} If API request fails or data is not structured properly.
   */
  ngOnInit(): void {
    this.exchangeRatesService.getTimeSeries().subscribe(
      (data) => {
        const dates = Object.keys(data.rates);
        const values = dates.map((date) => data.rates[date]['EUR']);

        this.chartData = [
          {
            x: dates,
            y: values,
            type: 'scatter',
            mode: 'lines',
            name: 'USD to EUR',
          },
        ];

        this.chartLayout = { title: 'USD/EUR Last 30 Days' };
      },
      (error) => {
        console.error('Error fetching time-series data:', error);
      }
    );
  }
}
