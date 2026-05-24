# Crypto Exchange App Implementation Map

This file shows the main app flow and the exact files to update when adding new functionality.

## Main frontend flow

```
frontend/src/index.js
  └─> frontend/src/App.js
         ├─> /wallet  -> frontend/src/pages/WalletPage.js
         ├─> /trade   -> frontend/src/pages/TradePage.js
         ├─> /login   -> frontend/src/pages/LoginPage.js
         ├─> /signup  -> frontend/src/pages/SignupPage.js
         └─> /dashboard -> frontend/src/pages/DashboardPage.js
```

## Wallet and connection entry point

- `frontend/src/App.js` defines the router and loads `WalletPage`
- `frontend/src/pages/WalletPage.js` is the main wallet UI and form logic
- If new wallet/connect code is added, put it under `frontend/src/pages/` or `frontend/src/components/`

## Backend overview

```
backend/main.py
  └─> backend/routers/users_router.py
          ├─ signup
          ├─ login
          └─ list
backend/database/db_connection.py
```

## Where to add new implementation

- UI changes: `frontend/src/pages/WalletPage.js` or a new component in `frontend/src/components/`
- New route handling: update `frontend/src/App.js`
- API/backend support: update `backend/main.py`, add routers in `backend/routers/`, and services in `backend/services/`

## Purpose of this file

When you provide a new implementation, this map tells the agent:
- which file is the wallet UI: `frontend/src/pages/WalletPage.js`
- where routing is defined: `frontend/src/App.js`
- where backend API entry points live: `backend/main.py`

Use this file as a quick reference to add or connect new files in the correct place.
