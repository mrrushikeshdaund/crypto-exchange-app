# Function-level Index (for Agent)

Use this file to quickly locate functions and React components when implementing or reviewing changes.
Add new entries here when you add files so the agent can read them next time.

## Backend (Python)

- `on_startup()` — [backend/main.py](backend/main.py#L25)
- `read_root()` — [backend/main.py](backend/main.py#L29)
- `get_db_connection()` — [backend/database/db_connection.py](backend/database/db_connection.py#L4)
- `init_db()` — [backend/database/db_connection.py](backend/database/db_connection.py#L11)
- `close_db_connection(conn)` — [backend/database/db_connection.py](backend/database/db_connection.py#L20)
- `create_access_token(data, expires_delta=None)` — [backend/middleware/auth_verify_token.py](backend/middleware/auth_verify_token.py#L21)
- `user_login(email, password)` — [backend/services/users_service.py](backend/services/users_service.py#L4)
- `create_user(username, password, email)` — [backend/services/users_service.py](backend/services/users_service.py#L18)
- `get_all_user()` — [backend/services/users_service.py](backend/services/users_service.py#L26)
- `signup_user(body)` — [backend/routers/users_router.py](backend/routers/users_router.py#L8)
- `login_user(body)` — [backend/routers/users_router.py](backend/routers/users_router.py#L15)
- `fetch_all_user()` — [backend/routers/users_router.py](backend/routers/users_router.py#L22)

## Frontend (React / JavaScript)

- `App()` — [frontend/src/App.js](frontend/src/App.js#L13) (router and routes)
- `LandingPage` — [frontend/src/pages/LandingPage.js](frontend/src/pages/LandingPage.js#L5)
- `DashboardPage` — [frontend/src/pages/DashboardPage.js](frontend/src/pages/DashboardPage.js#L27)
- `Header` — [frontend/src/components/Header.js](frontend/src/components/Header.js#L5)
  - `handleLogout()` — [frontend/src/components/Header.js](frontend/src/components/Header.js#L24)
- `MarketPage` — [frontend/src/pages/MarketPage.js](frontend/src/pages/MarketPage.js#L4)
- `WalletPage` — [frontend/src/pages/WalletPage.js](frontend/src/pages/WalletPage.js#L3)
  - `handleSubmit(type)` — [frontend/src/pages/WalletPage.js](frontend/src/pages/WalletPage.js#L70)
- `SupportPage` — [frontend/src/pages/SupportPage.js](frontend/src/pages/SupportPage.js#L3)
  - `handleSubmit(e)` — [frontend/src/pages/SupportPage.js](frontend/src/pages/SupportPage.js#L31)
- `LoginPage` — [frontend/src/pages/LoginPage.js](frontend/src/pages/LoginPage.js#L5)
- `SignupPage` — [frontend/src/pages/SignupPage.js](frontend/src/pages/SignupPage.js#L5)
  - `handleCheckBox(e)` — [frontend/src/pages/SignupPage.js](frontend/src/pages/SignupPage.js#L49)
- `TradePage` — [frontend/src/pages/TradePage.js](frontend/src/pages/TradePage.js#L3)
  - `handleTrade(e)` — [frontend/src/pages/TradePage.js](frontend/src/pages/TradePage.js#L21)
- `reportWebVitals(onPerfEntry)` — [frontend/src/reportWebVitals.js](frontend/src/reportWebVitals.js#L1)

## How to use
- The agent should open this file first to know which files to read for function-level context.
- When you add or change a function, append or update its entry here with the file path and line number.

## Next steps (optional)
- Add a small script to regenerate this index automatically by scanning the repo.
- Or ask me to add a script that updates `FUNCTION_INDEX.md` on demand.
