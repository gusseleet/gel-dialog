/**
 * @author Gustav Elmgren
 * @version 0.1
 * @requires jQuery
 *
 */

(function($) {
    'use strict';

    $.fn.createDialog = function(options) {

        var uniqueId = this.attr('id') + '_p';
        var uniqueIdChild = '#inner-' + uniqueId;
        var parentDiv = "<div class='popup " + uniqueId + "'id=" + uniqueId + '></div>';
        var childDiv = "<div class ='popup-inner' id='inner-" + uniqueId +"'></div>";
        var closeButton = "<a class='popup-close' href='#'>x</a>";

        var config = $.extend({

            /**
             * Title of your inner dialog
             * @type String
             * @default <h2> Wow! Amazing! </h2>
             */
            title: '<h2> Wow! Amazing! </h2>',

            /**
             * Text of your inner dialog
             * @type String
             * @default This is so awesome
             */
            text: 'This is so awesome!',

            /**
             * Background color of the inner dialog
             * @type String
             * @default #fff
             */
            backgroundColorInnerDiv: '#fff',

            /**
             * Color of the inner dialog
             * @type String
             * @default #000000
             */
            colorInnerDiv: '#000000',

            /**
             * Color of the outer dialog, use rgba.
             * @type String
             * @default 0,0,0,0.75
             */
            background: '0,0,0,0.75',

        }, options);

        config.background = 'rgba(' + config.background + ')';

        this.after(parentDiv);
        var $jO = $('#' + uniqueId);

        $jO.append(childDiv);
        $(uniqueIdChild).append(config.title,
            config.text, closeButton);

        this.on('click', onOpen);
        $jO.on('click', onClose);

        $(uniqueIdChild).css('background', config.backgroundColorInnerDiv);
        $(uniqueIdChild).css('color', config.colorInnerDiv);
        $jO.css('background', config.background);

        function onOpen(e){
            $jO.fadeIn(350);
            e.preventDefault();
        }

        function onClose(e) {
            jQuery(this).fadeOut(350);
            e.preventDefault();

        }
    };

})(jQuery);
