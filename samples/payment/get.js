/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var paymentId = "PAY-0XL713371A312273YKE2GCNI";

paypal_api.payment.get(paymentId, function (error, payment) {
    if (error) {
    	console.log(error);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
    }

});
