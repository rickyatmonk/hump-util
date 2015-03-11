/* jshint devel:true */
/* globals humps */

$(document).ready(function() {
  'use strict';

  function doConversion(jsonString) {
    var result = humps.decamelizeKeys(JSON.parse(jsonString), '_');

    $('#result-unformatted').val(JSON.stringify(result));
    $('#result-formatted').val(JSON.stringify(result, null, 2));
  }

  $('#clear').click(function() {
    $('textarea').val('');
  });

  $('#decamelize').click(function() {
      doConversion($('#source').val());
      return false;
  });
});
