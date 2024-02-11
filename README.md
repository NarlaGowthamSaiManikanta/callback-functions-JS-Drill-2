## Directory Structure
   Folder structure:

        ├── data
        |   ├── boards_1.json
        |   ├── lists_1.json
        |   └── cards_1.json
        ├── test
        |   ├── testCallback1.cjs
        |   ├── testCallback2.cjs
        |   ├── testCallback3.cjs
        |   ├── testCallback4.cjs
        |   ├── testCallback5.cjs
        |   └── testCallback6.cjs
        ├── callback1.cjs
        ├── callback2.cjs
        ├── callback3.cjs
        ├── callback4.cjs
        ├── callback5.cjs
        ├── callback6.cjs
        ├── package.json
        ├── README.md
        └── .gitignore

## Problem Description
Using promises and the fs module's asynchronous functions, do the following:

#### Problem 1: 
Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.

#### Problem 2: 
Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.

#### Problem 3: 
Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.

#### Problem 4: 
Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
 
#### Problem 5: 
Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously

#### Problem 6: 
Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously

## Instructions to run the Project
* First, Clone this repository and move to the repository by following commands.
```bash
   git clone http/link/to/clone/the/repository
   cd cloned_repository
   ```

* Now you need to install the NVM by either of the following commands:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
or
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

* To verify that nvm has been installed, do:
```
command -v nvm
```
which should output `nvm` if the installation was successful. Please note that `which nvm` will not work, since nvm is a sourced shell function, not an executable binary.

* Now, to install the latest LTS (Long Term Support) version of Node.js, use the following command:
```
nvm install --lts
```

* As there are no packages used in this project, we can proceed with the running part.

#### To run the JavaScript file, use the following command:
```
# For problem -1:
node test/testProblem1.js

# For problem -2:
node test/testProblem2.js
```

You will be getting the output in the terminal.