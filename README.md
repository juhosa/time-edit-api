# The TimeEditAPI

Get the events (the timetable) for a specific course from TimeEdit as a JavaScript object.

A little manual work is required to get the automation going, but it's one time only.

## Installing

```shell
yarn add time-edit-api
```

## Usage

```javascript
const TimeEdit = require("time-edit-api");

// The constructor requires a base url (your school/org has its own)
const te = new TimeEdit(`https://cloud.timeedit.net/samk/web/public/`);
  
// Query the events for a specific course
te.getCourseEvents(courseId).then(results => {
    console.log(results.reservations)
});
```


Use the below code snippet to get the course id when you are in the 'Implementations´ schedules' page (paste it in the console).

```javascript
document.getElementById('linksdata').attributes['data-searchidsenc'].nodeValue
```


## Contribution

Want to see a feature get added? Submit a PR!

## License

MIT