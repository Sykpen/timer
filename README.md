# Timer module. Read this before using!!!

react folder - for the usage inside react applications

## React:

Inside pages you can find example of usage.

### TimerModule methods

1. **Date** (required, default - today) - you can use given calendar like in the exapmle or any date in Date format.
2. **CountdownFormat** (unrequired, default - full) - you can choose beetween 'full' (MM months DD days HH hours MM minutes SS seconds) and 'short' (MM:DD:HH:MM:SS) formats.
3. **TimerTextClass** (unrequired, default - normal) - set new class for the text above the timer or use prewritten class.
4. **Start** (unrequired, default - true) - will automatically start after you choose a date, if false - you will see a button to start the timer.
5. **IsUTC** (unrequired, default - false) - you can change to true if you want to use UTC time.

### How to use

1. For install it inside your application, you need next packages (grab the package version from the package.json file):

```json
"next": "^v",
"react": "^v",
"react-dom": "^v",
```

<br>

2. Copy the module folder inside your modules folder, and rename it/
3. Change types if you need, and customise the UI of the component, inside the module folder.
