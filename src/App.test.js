import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { fetchDailyTimeSeries } from "./services/alphaVantageService";

// Mock the fetchDailyTimeSeries function from alphaVantageService
jest.mock("./services/alphaVantageService", () => ({
  fetchDailyTimeSeries: jest.fn(),
}));

// A helper function to render the App component within a Router
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("App component", () => {
  it("renders LandingPage component for default route", () => {
    fetchDailyTimeSeries.mockResolvedValueOnce({}); // Mock resolved value for API call
    renderWithRouter(<App />);
    // Add assertion to check for something specific to LandingPage, e.g., text or element present on that page
    expect(
      screen.getByText(/some text specific to LandingPage/i)
    ).toBeInTheDocument();
  });

  it('renders LoginPage component for "/login" route', () => {
    fetchDailyTimeSeries.mockResolvedValueOnce({});
    renderWithRouter(<App />, { route: "/login" });
    // Similarly, add assertion for LoginPage
    expect(
      screen.getByText(/some text specific to LoginPage/i)
    ).toBeInTheDocument();
  });

  it('renders StockDetailsPage component for "/stock/:id" route', () => {
    fetchDailyTimeSeries.mockResolvedValueOnce({});
    renderWithRouter(<App />, { route: "/stock/IBM" });
    // Add assertion for StockDetailsPage
    expect(
      screen.getByText(/some text specific to StockDetailsPage/i)
    ).toBeInTheDocument();
  });
});
