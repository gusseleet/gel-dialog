/**
 * Created by gustavelmgren on 16/11/16.
 */
$(document).ready(function() {

    $('#dialog-1').createDialog();
    $('#dialog-2').createDialog({

        title: '<h1> Wow, custom attributes! </h1>',
        text: 'I love it!',
        backgroundColorInnerDiv: '#2E8A4B',
        colorInnerDiv: '#75D192',
        background: '255,0,255,0.75'
    });

});