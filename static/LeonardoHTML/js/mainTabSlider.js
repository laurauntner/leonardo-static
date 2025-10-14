

$(document).ready(function() {


    $('#leo_ausstellungsobjekte').tabSlideOut({
      tabLocation: 'right',
      offset: "100px",
      handleOffset: "500px",
      offsetReverse: false, // position the panel from the bottom of the page, rather than the top
      handleOffsetReverse: true, // position the tab from the bottom of the panel, rather than the top                                                                                                                                             
      onLoadSlideOut: false, // open by default                                                                                                                                                                                                     
          /* don't close this tab if a button is clicked, or if the checkbox is set */
          clickScreenToCloseFilters: [
                        'button', // ignore button clicks                                                                                                                                                                                          
                        function(event){ // custom filter                                                                                                                                                                                          
                                // filters need to return true to filter out the click passed in the parameter                                                                                                                                     
                                return $('#keepTabOpen').is(':checked');
                        }
          ]
    });

    $('#leo_videos').tabSlideOut({
      tabLocation: 'right',
      offset: "60px",
      handleOffset: "300px",
      offsetReverse: false, // position the panel from the bottom of the page, rather than the top
      handleOffsetReverse: true, // position the tab from the bottom of the panel, rather than the top
      onLoadSlideOut: false, // open by default
          /* don't close this tab if a button is clicked, or if the checkbox is set */
          clickScreenToCloseFilters: [
                        'button', // ignore button clicks
                        function(event){ // custom filter
                                // filters need to return true to filter out the click passed in the parameter
                                return $('#keepTabOpen').is(':checked');
                        }
          ]
    });

    
});

