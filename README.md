Adthena Test Client
================

### Prerequisites

> NOTE: These will already be installed if you choose to use a laptop provided by us.

1. Install nvm:
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    ```
2. Ensure nvm is installed:
    ```
    nvm --version
    ```
3. Install node:
    ```
    nvm install node
    ```
4. Ensure node is installed:
    ```
    nvm use node
    ```

This is a simple client created using ReactJS in (ECMAScript 6) using babel.

### How to Run It

You can run the application from command line or using an IDE (VS Code is available on the laptop we
provide).

#### Running from Command Line

1. Make sure you are inside the `test-client` folder.
2. First you will need to install the npm dependencies:
    ```
    npm install
    ```
3. Run tests:
    ```
    npm test
    ```    
4. Run using npm:
    ```
    npm start
    ```
5. Your client will be available on port 8082. Go to **http://127.0.0.1:8082/** to test it.
   
6. You can stop the client using `Ctrl + C`. If you need to use the console for something else, you should open a new terminal tab or window.
