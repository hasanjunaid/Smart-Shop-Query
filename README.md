# Smart Shop Query

This is a simple React application for searching and displaying product information using the [FakeStoreAPI](https://fakestoreapi.com/). The app allows users to search for products and view detailed information about each product.

## Implementation Strategy

- **SearchBox Component**: Provides a search input for users to enter product names. It fetches product data from the FakeStoreAPI and dynamically updates the displayed products as the user types.

- **ProductDetail Component**: Displays detailed information about a selected product. It fetches the details from the API based on the product ID provided in the URL.

- **React Router**: Used for handling navigation between the search page and individual product detail pages.

- **Error Handling**: Implemented error messages for scenarios such as no matching products, API failures, and invalid product IDs.

## API Choice

I chose the [FakeStoreAPI](https://fakestoreapi.com/) for this project because it provides a simple and easy-to-use API with realistic product data. It allows for a straightforward implementation of a product search and detail display functionality.

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/hasanjunaid/SmartShopQuery.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd smartshopquery
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

5. **Open your browser and go to [http://localhost:5713](http://localhost:5713) to view the app.**

## Deployed Version

You can access the deployed version of Memo Stack at https://memostack.netlify.app/

## Contact

For any inquiries or suggestions, feel free to reach out to Muhammad Hasan Junaid (mailto: mhasanjunaid07@gmail.com).

## License

This project is licensed under the MIT License.
