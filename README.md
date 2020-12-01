# CurrExC
[**Demo for CurrExC here**](https://upbeat-mcclintock-ec81fd.netlify.app/)  [![Netlify Status](https://api.netlify.com/api/v1/badges/66b47330-ba63-4a63-9cf1-00eb800d57fd/deploy-status)](https://upbeat-mcclintock-ec81fd.netlify.app/)

CurrExC is a web application that  provides users with straight forward Currency exchange rates provided in real time by an open-sourced API. It is built on **React, Material UI, Axios and Node**; using a functional programming paradigm with pure components and **hooks** to manage application state.

# Technologies

  <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/>
 - Axios
 - amCharts
 - dateio


## App Screenshots
- [History Graph view](https://github.com/jswelsh/currency_converter_v1/blob/master/public/calendarComponent.png)
- [Convert currency view, Showing the toolbar drawer in its open state](https://github.com/jswelsh/currency_converter_v1/blob/master/public/convertComponent.png)
- [History view, showing the calculator component pop-over](https://github.com/jswelsh/currency_converter_v1/blob/master/public/calculatorComponent.png)
- [History view, showing the calendar component pop-over](https://github.com/jswelsh/currency_converter_v1/blob/master/public/calendarPopOver.png)
- [Compare view, showing the conversions for currencies against base currency](https://github.com/jswelsh/currency_converter_v1/blob/master/public/compareComponent.png)
- [SignUp view, showing the sign up form](https://github.com/jswelsh/currency_converter_v1/blob/master/public/signUp.png)


## Functionality and Limitations

**CurrExC** uses **[Exchange rates API](https://exchangeratesapi.io/)** for its currency rates provider; it's a free service for current and historical foreign exchange rates  published by the [European Central Bank](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).
It should be noted, The API comes with no warranty but they do make their best effort to keep the service working relibly. the Github repository can be found here [exchangeratesapi](https://github.com/exchangeratesapi/exchangeratesapi)

Currently the application serves users the **middle rate** for all convervsions. The **middle rate** is the **exchange rate** between a **currency's** bid and ask **rates**. The **middle rate** is calculated using the median average of the bid and ask (offer) **rates**. This is rarely the rate actually available to the basic user and is more for pratical knowledge on the current state of currency rates. 

The application makes an API call to **Wikipedia**, pulling the intro for each currency being converted. This is done in parrallel with the currency rate call.

The user can get straight conversions between currencies, see the rates for over a 30 different currencies all at a single click. There is also a history tab where users can set a date range and choose two currencies to view the exchange history as a graph over time.

## Project Status
This project was to refresh exposure to React and Hooks. I also used this application to explore a few different tools and methods. The biggest take away from this project was my experience with [**Material UI**](https://material-ui.com/), the compositional capacity and the community associated with this library made the design process more efficient and enjoyable. That is after the initial speed bump of learning how to get the library to work for me. I do plan to come back to this project down the road and really polish the UI look and feel after I have another project under my belt with material UI. I would also like to experiment with [**amCharts**](https://www.amcharts.com/) a bit more, specifically the Map add-on and see it's capabilities compared with [**mapbox**](https://www.mapbox.com/).  I would also like to port this app's components to [**storybook**](https://storybook.js.org/) and rebuild the components in there to refine and refactor each. This is a tool I've used before and in hindesight, I strongly regret not using this from the begining as it would have shaved 1/3 of the development time from debugging and component composition. I also plan to refactor this code into typescript soon, as I plan on learning that laugage next.
