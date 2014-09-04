$(document).ready(function() {

  $.ajax({
      url: '/tests',
      type: 'get',
      data: {},
      dataType: "json",
      success: function (data) {
        console.log(data);
      }
  }).done(function(data) {
    // console.log(data);
  })

  var data = [
              {
                  "startDate":"2013,12,10",
                  "endDate":"2013,12,10",
                  "headline":"Headline Goes Here",
                  "text":"<p>Body text goes here, some HTML is OK</p>",
                  "tag":"This is Optional",
                  "classname":"optionaluniqueclassnamecanbeaddedhere",
                  "asset": {
                      "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
                      "thumbnail":"optional-32x32px.jpg",
                      "credit":"Credit Name Goes Here",
                      "caption":"Caption text goes here"
                  }
              },
              {
                  "startDate":"2014,1,10",
                  "endDate":"2014,1,10",
                  "headline":"Headline Goes Here",
                  "text":"<p>Body text goes here, some HTML is OK</p>",
                  "tag":"This is Optional",
                  "classname":"optionaluniqueclassnamecanbeaddedhere",
                  "asset": {
                      "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
                      "thumbnail":"optional-32x32px.jpg",
                      "credit":"Credit Name Goes Here",
                      "caption":"Caption text goes here"
                  }
              }
          ]

  var dataObject = {
    "timeline": {
      "headline":"The Main Timeline Headline Goes here",
      "type":"default",
      "text":"<p>Intro body text goes here, some HTML is ok</p>",
      "asset": {
        "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
        "credit":"Credit Name Goes Here",
        "caption":"Caption text goes here"
      },
      "date": data,
      "era": [
        {
          "startDate":"2012,12,10",
          "endDate":"2014,12,11",
          "headline":"Headline Goes Here",
          "text":"<p>Body text goes here, some HTML is OK</p>",
          "tag":"This is Optional"
        }
      ]
    }
  }

  createStoryJS({
    type:       'timeline',
    width:      '800',
    height:     '600',
    source:     dataObject,
    embed_id:   'my-timeline'
  });
});
