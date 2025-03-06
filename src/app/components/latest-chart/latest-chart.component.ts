import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';

/**
 * Component for displaying the latest exchange rates in a bar chart.
 * Uses Plotly for visualization and fetches data from ExchangeRatesService.
 */
@Component({
  selector: 'app-latest-chart',
  standalone: true,
  imports: [CommonModule, PlotlyModule],
  templateUrl: './latest-chart.component.html',
  styleUrls: ['./latest-chart.component.css'],
})
export class LatestChartComponent implements OnInit {
  /** Data for the chart */
  chartData: any[] = [];

  /** Layout configuration for the chart */
  chartLayout: any = {};

  /**
   * Constructor initializes the component with ExchangeRatesService.
   * @param {ExchangeRatesService} exchangeRatesService - Service to fetch latest exchange rate data.
   */
  constructor(private exchangeRatesService: ExchangeRatesService) {}

  /**
   * Lifecycle hook: Runs after component initialization.
   * Fetches the latest exchange rates and updates the chart data.
   *
   * @throws {Error} If API request fails or data is not structured properly.
   */
  ngOnInit(): void {
    this.exchangeRatesService.getLatestRates().subscribe(
      (data) => {
        this.chartData = [
          {
            x: ['EGP', 'GBP', 'EUR'],
            y: [data.rates.EGP, data.rates.GBP, data.rates.EUR],
            type: 'bar',
            name: 'Exchange Rate',
          },
        ];

        this.chartLayout = { title: 'Latest Exchange Rates (USD)' };
      },
      (error) => {
        console.error('Error fetching latest exchange rates:', error);
      }
    );
  }
}
