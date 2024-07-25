# Pokémon Dashboard Application

## Prerequisites
Before you start, make sure you have the following installed:
- **React**
- **React Router DOM**
- **Redux**
- **Axios**

## User Flow
1. **Signup** – Create a new account.
2. **Login** – Access the dashboard with your credentials.
3. **Dashboard** – View a list of Pokémon cards.

From the dashboard, you can click on any Pokémon card to view its detailed information on a separate page.

## API
We use the [Pokémon API](https://pokeapi.co/api/v2/pokemon) to fetch Pokémon data. This API provides:
- **Name** – The name of the Pokémon.
- **Next URL** – URL to fetch the next 20 Pokémon.
- **Previous URL** – URL to fetch the previous 20 Pokémon.
- **URL** – Provides details like height, weight, and image of the Pokémon.

## Application Structure
- **`index.js`**: Contains the Redux store setup.
- **`App.js`**: Manages routing across the application.

The dashboard displays Pokémon data, and you can navigate through pages of Pokémon using "Next" and "Previous" buttons. Each Pokémon card provides a link to a detailed view, showcasing more in-depth information about the Pokémon.
