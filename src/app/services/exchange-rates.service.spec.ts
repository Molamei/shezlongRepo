import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExchangeRatesService } from './exchange-rates.service';
import { LatestRatesResponse } from '../models/LatestRatesResponse';
import { TimeSeriesResponse } from '../models/TimeSeriesResponse';

describe('ExchangeRatesService', () => {
  let service: ExchangeRatesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExchangeRatesService],
    });

    service = TestBed.inject(ExchangeRatesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no pending HTTP requests
  });

  it('should fetch time-series data correctly', () => {
    const mockResponse: TimeSeriesResponse = {
      success: true,
      timeseries: true,
      rates: {
        "2024-02-01": { EUR: 0.85 },
        "2024-02-02": { EUR: 0.86 },
      }
    };

    service.getTimeSeries().subscribe((data) => {
      expect(data).toBeDefined();
      expect(data.rates["2024-02-01"].EUR).toBe(0.85);
    });

    const req = httpMock.expectOne((req) => req.url.includes('/timeseries'));
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch latest exchange rates correctly', () => {
    const mockResponse: LatestRatesResponse = {
      success: true,
      rates: { EGP: 15.7, GBP: 0.75, EUR: 0.85 }
    };

    service.getLatestRates().subscribe((data) => {
      expect(data).toBeDefined();
      expect(data.rates.EGP).toBe(15.7);
      expect(data.rates.GBP).toBe(0.75);
      expect(data.rates.EUR).toBe(0.85);
    });

    const req = httpMock.expectOne((req) => req.url.includes('/latest'));
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
