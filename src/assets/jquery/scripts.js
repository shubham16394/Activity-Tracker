$(function() {

    var get_timestamp=function(){
        var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();

        return datetime;          
    }

    var pageName=window.location.href.replace("http://localhost:3000/","");
    var url='/api/activities'

    // Image1 click Request
    $('#Image1').on('click', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "click", image_id: "Image1"}),
            success: function(response) {
                
            }
        });
    });

    // Image1 hover Request
    $('#Image1').on('mouseover', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "hover", image_id: "Image1"}),
            success: function(response) {
                
            }
        });
    });


    // Image2 click Request
    $('#Image2').on('click', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "click", image_id: "Image2"}),
            success: function(response) {
                
            }
        });
    });

    // Image2 hover Request
    $('#Image2').on('mouseover', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "hover", image_id: "Image2"}),
            success: function(response) {
                
            }
        });
    });

    // Image3 click Request
    $('#Image3').on('click', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "click", image_id: "Image3"}),
            success: function(response) {
                
            }
        });
    });

    // Image3 hover Request
    $('#Image3').on('mouseover', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "hover", image_id: "Image3"}),
            success: function(response) {
                
            }
        });
    });

    // Image4 click Request
    $('#Image4').on('click', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "click", image_id: "Image4"}),
            success: function(response) {
                
            }
        });
    });

    // Image4 hover Request
    $('#Image4').on('mouseover', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "hover", image_id: "Image4"}),
            success: function(response) {
                
            }
        });
    });  


    // Image5 click Request
    $('#Image5').on('click', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "click", image_id: "Image5"}),
            success: function(response) {
                
            }
        });
    });

    // Image5 hover Request
    $('#Image5').on('mouseover', function() {
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({page_name: pageName,timestamp: get_timestamp(), event_type: "hover", image_id: "Image5"}),
            success: function(response) {
                
            }
        });
    });  



});
