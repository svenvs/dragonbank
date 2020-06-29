# dragon-bank

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
/*
* {
    users: [
        {
            role: 'KID',
            name: "timmy",// unique id
            inHandBalance: 14.00,// This is the balance amount that is not yet in a savingsTarget
            savingsTargets: [ // list of savings targets what the kid can insert some money define the target etc
                {
                    name: "lego starwars ship", // the thing where the kid is saving for
                    goalAmount: 500.00,
                    currentBalance: 0.00, // the first mijn inleg will just be added here as initial current balance we dont save the history
                    recurringSavingsAmount: 5.00,
                    recurringFrequency: 'WEEKLY',
                    sponsors: [
                        {
                            sponsorAmount: 5.00,
                            sponsoredRelative: "PARENTS", // can also be GRANDPARENTS i think this should eventually become a inputfield but for now 2 options is fine
                            recurringFrequency: "ONCE", // can also be WEEKLY MONTHLY
                            todoChore: true
                        }
                    ]
                }
            ],
        }
    ]
}

*/
```
