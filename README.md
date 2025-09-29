# Notes on AI Tools & Design Decisions

## AI Tools Used
- **ChatGPT**:
  - Writing Redux Toolkit slices and async thunks.

## Design Decisions
- **State Management**: Used Redux Toolkit to manage search filters and league/badge data for predictable global state.
- **Data Fetching & Caching**: Implemented an in-memory cache inside the badge thunk to avoid duplicate API calls.
- **UI Styling**: Tailwind CSS chosen for fast responsive styling with minimal custom CSS.
- **Component Structure**: Split into small reusable components (Home, Filters, LeagueList, LeagueBadge) to keep code maintainable.
- - **Routing**: Used React Router to create a dynamic route `/league/:leagueId` for displaying individual league badges.  
  This also enables deep linking, so a user can land directly on a specific league’s page by visiting its URL.

