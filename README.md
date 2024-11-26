# Test Automation Project

## Description

This project contains automated tests implemented using Cypress and Postman for testing web applications and APIs. The project is structured into two main components:

### Cypress Tests

- End-to-end tests for the Computer Database web application
- Tests include positive and negative scenarios
- Custom commands for handling date inputs
- Configured with Mochawesome reporter for detailed test reports

### Postman Tests

- API tests for the DummyJSON API
- Includes tests for GET, POST and PUT endpoints
- Newman integration for CLI execution
- HTML Extra reporter for detailed API test reports

## How to Run

### Prerequisites

- Node.js installed
- Git installed
- Chrome browser installed

### Cypress Tests

1. Navigate to the Cypress directory:

```bash
cd Cypress
```

2. Install dependencies:

```bash
npm install
```

3. Run tests in headless mode with reports:

```bash
npm test
```

Or run in interactive mode:

```bash
npm run cypress:open
```

### Postman Tests

1. Navigate to the Postman directory:

```bash
cd PostMan
```

2. Install dependencies:

```bash
npm install
```

3. Run tests with Newman:

```bash
newman run "Dummy.postman_collection.json" -r htmlextra
```

## Test Reports

### Cypress Reports

- HTML reports are generated in `Cypress/cypress/reports/html`
- Videos of test runs are saved in `Cypress/cypress/videos`
- Screenshots of failures are saved in `Cypress/cypress/screenshots`

### Postman/Newman Reports

- HTML reports are generated in `PostMan/newman` directory
- Each test run creates a new timestamped report file

## Project Structure

```
├── Cypress/
│   ├── cypress/
│   │   ├── e2e/           # Test files
│   │   ├── support/       # Support files and commands
│   │   └── reports/       # Test reports
│   └── cypress.config.js  # Cypress configuration
└── PostMan/
    ├── newman/           # Newman reports
    └── Dummy.postman_collection.json  # Postman collection
```
