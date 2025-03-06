jest.mock('angular-plotly.js', () => ({
    PlotlyModule: {
      forRoot: jest.fn(),
    },
    PlotlyService: class {
      newPlot = jest.fn();
      purge = jest.fn();
      react = jest.fn();
    },
  }));
  
  Object.defineProperty(globalThis, 'Plotly', {
    value: {
      newPlot: jest.fn(),
      react: jest.fn(),
      purge: jest.fn(),
    },
    writable: true,
  });

  