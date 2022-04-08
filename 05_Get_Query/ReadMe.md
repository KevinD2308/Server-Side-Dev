The GET_Query.js example app is able to retrieve the data from the URL request that the client will send. The query data will be displayed in the terminal.

## Requirements

* Node 16.14.0
* Git

## Setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/KevinD2308/test_nodejs.git
cd 05_GET_Query
```

```bash
npm install
```

## How To Use

After starting the server, access it in your preferred browser with two parametres that would imply a name and an ID. For example:

```bash
http://localhost:3000/example/Kevin/99
```

This will return the following :

```bash
Kevin : 99
```

Notice that the query is not yet inserted. An URL containing a query string, such as: 


```bash
http://localhost:3000/example/Kevin/99?age=23
```

Will return an array like this: 

```bash
{ age:23 }
```
