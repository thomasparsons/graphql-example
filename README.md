# An example of a GraphQl application

## Get Started

Clone the repo...

Install node modules for the graph side: `yarn` | `npm i`

## To Run

`yarn start` | `npm run start` - will run on PORT :3001

## Queries

go to localhost:3001 and paste in this query:

```
query {
  getDogs {
    ...petInfo
  }
  getCats {
    ...petInfo
    humanAge: age(humanYears: true)
  }
}

fragment petInfo on PetInfo {
  name
  age
}
```
