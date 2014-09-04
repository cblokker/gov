// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  var timelineData = []
  console.log("hi");
    $.ajax({
        url: '/fedregs',
        type: 'get',
        data: {},
        dataType: "json"
    }).done(function(data) {

      console.log(data);


      for (var i = 0; i < data.length; i++) {
        timelineDateFormat = data[i].pub_date.replace(/-/g, ',');
        console.log(timelineDateFormat);
        timelineData.push(
          {
            "startDate": timelineDateFormat,
            "endDate": timelineDateFormat,
            "headline": data[i].title,
            "text":"<p>" + data[i].abstract +"</p>",
            "tag":"This is Optional",
            "classname":"optionaluniqueclassnamecanbeaddedhere"
          }
        )
      }
      console.log(timelineData);

      var dataObject = {
        "timeline": {
          "headline":"The Main Timeline Headline Goes here",
          "type":"default",
          "text":"<p>Intro body text goes here, some HTML is ok</p>",
          "date": timelineData,
          "era": [
            {
              "startDate":"2013,12,10",
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
  })
});
