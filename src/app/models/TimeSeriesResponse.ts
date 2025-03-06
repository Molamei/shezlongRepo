export interface TimeSeriesResponse {
  success: boolean;
  timeseries: boolean;
  rates: { [date: string]: { EUR: number } };
}
