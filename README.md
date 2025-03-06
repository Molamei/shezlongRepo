# Shezlong Dashboard

## Overview
The **Shezlong Dashboard** is an Angular web application that displays exchange rate data using **API Layer's Exchange Rates API**. It includes:
- A **line chart** (USD/EUR exchange rate for the last 30 days).
- A **bar chart** (latest exchange rates of USD/EGP, USD/GBP, and USD/EUR).
- A **toggle mode** between **view mode** (static charts) and **edit mode** (add/remove charts).

## Tech Stack
- **Frontend Framework**: Angular
- **Programming Language**: TypeScript
- **Testing Framework**: JestJS
- **Charting Library**: Plotly.js
- **API**: Exchange Rates API from API Layer ([docs](https://apilayer.com/marketplace/exchangerates_data-api))

---
## Setup Instructions

### 1. Clone the Repository
```sh
  git clone [https://github.com/YOUR-USERNAME/shezlong-dashboard.git](https://github.com/Molamei/shezlongRepo/)
  cd shezlong-dashboard
```

### 2. Install Dependencies
```sh
  npm install
```

### 3. Create an `.env` File (API Key Configuration)
Create a `.env` file in the root directory and add your **API Layer Key**:
```env
API_KEY=your_api_key_here
```

### 4. Run the Development Server
```sh
  npm start
```
The application will be available at: `http://localhost:4200`

### 5. Run Unit Tests with JestJS
```sh
  npm run test
```

### 6. Build for Production
```sh
  ng build --configuration production
```
The built files will be available in the `/dist/` directory.

---
## Features
### ✅ **View Mode**
- Displays **two charts**:
  - **Line Chart**: USD/EUR exchange rate over the last 30 days.
  - **Bar Chart**: Latest exchange rates for USD/EGP, USD/GBP, and USD/EUR.

### ✅ **Edit Mode**
- Allows users to **toggle between view and edit mode**.
- **Hide a box** (if more than one chart is visible).
- **Add a box** (if fewer than two charts are displayed).

---
## API Endpoints
### 1️⃣ **Time Series (Line Chart Data)**
Fetch exchange rate data for the last 30 days:
```sh
GET https://api.apilayer.com/exchangerates_data/timeseries?apikey=${API_KEY}&start_date=${START_DATE}&end_date=${END_DATE}&symbols=EUR&base=USD
```

### 2️⃣ **Latest Exchange Rates (Bar Chart Data)**
Fetch latest exchange rates:
```sh
GET https://api.apilayer.com/exchangerates_data/latest?apikey=${API_KEY}&base=USD&symbols=EGP,GBP,EUR
```

---
## Project Structure
```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts
│   │   │   ├── timeseries-chart/
│   │   │   │   ├── timeseries-chart.component.ts
│   │   │   ├── latest-chart/
│   │   │   │   ├── latest-chart.component.ts
│   │   ├── services/
│   │   │   ├── exchange-rates.service.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
├── .env
├── jest.config.js
├── README.md
├── package.json
```

---
## Testing
All core functions are **unit-tested with JestJS**. The tests ensure:
- API calls return the expected format.
- Charts are correctly rendered with the fetched data.
- **Dashboard behavior is tested** (toggle mode, add/hide charts).

### Run Tests:
```sh
  npm run test
```

