
jest.mock('angular-plotly.js', () => ({
    PlotlyModule: {
      forRoot: () => ({
        ngModule: jest.fn(),
        providers: [],
      }),
    },
  }));
  