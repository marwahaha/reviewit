/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Vendor assets

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
var Highcharts = require('highcharts');
import SimpleMDE from 'simplemde';
window.SimpleMDE = SimpleMDE;
import marked from 'marked';

Rails.start();
Turbolinks.start();

import merge_requests from '../src/javascript/merge_requests.js';
import registerWebPushNotifications from '../src/javascript/serviceworker-companion.js.erb'

var alreadyTriedToRegisterNotifications = false;
var ready = function() {
  console.log('i am ready baby');
  if (document.body.dataset.whoAmI == 'merge_requests')
    merge_requests();

  $(".markdown").each(function(idx, item) {
      item.innerHTML = marked(item.textContent, { sanitize: true });
  });

  // If we are not in a devise layout
  if (!alreadyTriedToRegisterNotifications && document.body.className !== "devise") {
    registerWebPushNotifications();
    alreadyTriedToRegisterNotifications = true
  }
}
$(document).ready(ready);
$(document).on('turbolinks:load', ready);


