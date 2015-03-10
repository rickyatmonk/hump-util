/* jshint devel:true */
/* globals humps */

$(document).ready(function() {
  'use strict';

  function doConversion(jsonString) {
    console.log('converting...');
    console.log(jsonString);

    var result = humps.decamelize(jsonString);

    console.log('result is...');
    console.log(result);

    $('#result-unformatted').html(JSON.stringify(JSON.parse(result)));
    $('#result-formatted').html(JSON.stringify(JSON.parse(result), null, 2));
  }

  $('#clear').click(function() {
    $('textarea').val('');
  });

  $('#decamelize').click(function() {
      doConversion($('#source').val());
      return false;
  });

});
