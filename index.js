const axios = require("axios");

const TimeEdit = class {
  constructor(baseUrl) {
    if (baseUrl[baseUrl.length - 1] !== "/") {
      baseUrl += "/";
    }
    this.baseUrl = baseUrl;
  }

  async getCourseEvents(courseId) {
    // console.log("timeeditapi getcourse", courseId);
    const result = await axios({
      method: "GET",
      url: this.baseUrl + "ri.json",
      params: {
        h: "f",
        sid: 3,
        p: "0.m,12.n",
        objects: courseId,
        ox: 0,
        types: 0,
        fe: 0,
        h2: "f",
        l: "en_EN"
      }
    }).catch(err => {
      console.log(err.message);
    });

    // Map data in "columns" to "data" by "columnheaders"
    result.data.reservations.forEach(rese => {
      rese["additional_info"] = result.data.columnheaders.reduce(
        (obj, key, index) => {
          obj[key] = rese.columns[index];
          return obj;
        },
        {}
      );
    });

    // Return the data, not the axios object
    return result.data;
  }
};

module.exports = TimeEdit;
