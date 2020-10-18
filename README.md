# CurrExC
CurrExC is a web application that  provides users with straight forward Currency exchange rates provided in real time by an open-sourced API. It is build on **React, Axios and Node**; using a more functional programming paradigm with pure components and **hooks** to manage application state.


# Technologies

 - React
 - Axios
 - Node
 - amCharts
 - dateio
 - Material UI

## App Screenshots
- [History Graph, with Date picker popover](https://github.com/jswelsh/currency_converter_v1/blob/master/public/Screenshot%20from%202020-10-17%2020-52-03.png?raw=true)
- [Compare view, showing the conversions for currencies against base currency](https://github.com/jswelsh/currency_converter_v1/blob/master/public/Screenshot%20from%202020-10-17%2020-51-17.png?raw=true)
- [Showing the drawer toolbar in its closed state](https://github.com/jswelsh/currency_converter_v1/blob/master/public/Screenshot%20from%202020-10-17%2020-50-44.png?raw=true)

## Functionality and Limitations

**CurrExC** uses **[Exchange rates API](https://exchangeratesapi.io/)** for its currency rates provider; it's a free service for current and historical foreign exchange rates  published by the [European Central Bank](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).
It should be noted, The API comes with no warranty but they do make their best effort to keep the service working relibly. the Github repository can be found here [exchangeratesapi](https://github.com/exchangeratesapi/exchangeratesapi)

Currently the application serves users the **middle rate** for all convervsions. The **middle rate** is the **exchange rate** between a **currency's** bid and ask **rates**. The **middle rate** is calculated using the median average of the bid and ask (offer) **rates**. This is rarely the rate actually available to the basic user and is more for pratical knowledge on the current state of currency rates. 

The user can get straight conversions between currencies, see the rates for over a 30 different currencies all at a single click. There is also a history tab where users can set a date range and choose two currencies to view the exchange history as a graph over time.

## Project Status
This project was to refresh exposure to React and Hooks. I also used this application to explore a few different tools and methods. The biggest take away from this project was my experience with [**Material UI**](https://material-ui.com/), the compositional capacity and the community associated with this library made the design process more efficient and enjoyable. That is after the initial speed bump of learning how to get the library to work for me. I do plan to come back to this project down the road and really polish the UI look and feel after I have another project under my belt with material UI. I would also like to experiment with [**amCharts**](https://www.amcharts.com/) a bit more, specifically the Map add-on and see it's capabilities compared with [**mapbox**](https://www.mapbox.com/).  I would also like to port this app's components to [**storybook**](https://storybook.js.org/) and rebuild the components in there to refine and refactor each. This is a tool I've used before and in hindesight, I strongly regret not using this from the begining as it would have shaved 1/3 of the development time from debugging and component composition.
