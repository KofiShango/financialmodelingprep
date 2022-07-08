'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    earnings_calendar: () => makeRequest('earning_calendar'),
    earnings_calendar_by_date: (start_date, end_date) => makeRequest('earning_calendar',generateJson(null, { from: start_date, to: end_date })),
    earnings_calendar_for_stock: (stock, limit) => makeRequest('historical/earning_calendar', generateJson(stock, { limit })),
};