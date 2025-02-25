# FutScorePeru-Backend

This project is the backend service for the FutScorePeru application. It provides APIs and services to manage and retrieve football scores and related data for Peruvian football leagues.

## Features

- Retrieve scores and match details
- Manage teams information
- Schedule and fixture management
- User authentication and authorization

## Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/Alkrax87/FutScorePeru-Backend.git
  ```
2. Navigate to the project directory:
  ```sh
  cd FutScorePeru-Backend
  ```
3. Install dependencies:
  ```sh
  npm install
  ```

## Usage

1. Start the development server:
  ```sh
  npm run dev
  ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root directory of the project:

```
# Server configuration
PORT = 5000

apiUrl = api_url
apiLey = your_api_key
```

Make sure to replace the placeholder values with your actual configuration details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.