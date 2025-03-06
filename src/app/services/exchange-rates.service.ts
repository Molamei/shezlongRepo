import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LatestRatesResponse } from '../models/LatestRatesResponse';
import { TimeSeriesResponse } from '../models/TimeSeriesResponse';

/**
 * Service for fetching exchange rate data from the API.
 */
@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  /** Base URL for the exchange rate API */
  private apiUrl = 'https://api.apilayer.com/exchangerates_data';

  /** API Key (Ensure this is stored securely in environment variables) */
  private apiKey = 'q2PGKw3HYUM6tUb3TKwnCXhpQxJUYxVx';  // ⚠️ Replace with a secure environment variable!

  /**
   * Constructor initializes the service with HttpClient for API requests.
   * @param {HttpClient} http - Angular HTTP client for making API requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches the time series data for USD/EUR over the last 30 days.
   *
   * @returns {Observable<TimeSeriesResponse>} Observable containing time-series exchange rate data.
   * @throws {Error} If the API request fails.
   */
  getTimeSeries(): Observable<TimeSeriesResponse> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    const endDate = new Date();

    const url = `${this.apiUrl}/timeseries?apikey=${this.apiKey}&start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}&symbols=EUR&base=USD`;

    return this.http.get<TimeSeriesResponse>(url);
  }

  /**
   * Fetches the latest exchange rates for USD to EGP, GBP, and EUR.
   *
   * @returns {Observable<LatestRatesResponse>} Observable containing the latest exchange rates.
   * @throws {Error} If the API request fails.
   */
  getLatestRates(): Observable<LatestRatesResponse> {
    const url = `${this.apiUrl}/latest?apikey=${this.apiKey}&symbols=EGP,GBP,EUR&base=USD`;

    return this.http.get<LatestRatesResponse>(url);
  }
}
