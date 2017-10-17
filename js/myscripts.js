'use strict';
$(function() {
        $('.minni a').click(function(eventObject) {
            eventObject.preventDefault();
            $('#big img').hide().attr('src',$(this).attr('href'));
            $('#big img').show(500);
     
        });
       $('.fa-chevron-right').click(function(eventObject){
           eventObject.preventDefault();
            if(+($('img[alt=min_4]').attr('src')[11] + $('img[alt=min_4]').attr('src')[12]) < 23){
                var temp_number, alt, temp, bigImg;
                    for(var i = 1; i <= 4 ; i++){
                        alt ='img[alt=min_' + i + ']';
                        temp_number = $(alt).attr('src');
                            temp = temp_number[11] + temp_number[12];
                            ++temp;
                            temp_number = 'images/gal/' +  temp  + '_mini.jpg';
                            $(alt).attr('src',temp_number);
                                bigImg = $('a[id=big_' + i + ']').attr('href');
                                bigImg = 'images/gal/' + temp + '.jpg';  
                                $('a[id=big_' + i + ']').attr('href', bigImg);
                            
                    }
            } else return;
       });
       $('.fa-chevron-left').click(function(eventObject){
           eventObject.preventDefault();
           if(+($('img[alt=min_1]').attr('src')[11] + $('img[alt=min_1]').attr('src')[12]) > 11){
                var temp_number, alt, temp, bigImg;
                    for(var i = 1; i <= 4 ; i++){
                        alt ='img[alt=min_' + i + ']';
                        temp_number = $(alt).attr('src');
                            temp = temp_number[11] + temp_number[12];
                            --temp;
                            temp_number = 'images/gal/' +  temp  + '_mini.jpg';
                            $(alt).attr('src',temp_number);
                                bigImg = $('a[id=big_' + i + ']').attr('href');
                                bigImg = 'images/gal/' + temp + '.jpg';  
                                $('a[id=big_' + i + ']').attr('href', bigImg);
                    }
            } else return;
           
       });
       
   });
    