$( document ).ready( function () {
    var currentDay = moment();
    var currentDayFormat = currentDay.format( 'dddd, MMMM Do' );
    $( '#currentDay' ).text( currentDayFormat )
    $( '.time-block' ).each( function () {

    } )
    $( '.hour' ).each( function () {
        var currentTime = moment();
        var hourBlock = $( this ).text();
        if ( hourBlock === '9am' ) {
            if ( 9 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 9 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 9 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }
        } else if ( hourBlock === '10am' ) {
            if ( 10 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 10 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 10 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }

        } else if ( hourBlock === '11am' ) {
            if ( 11 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 11 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 11 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }
        } else if ( hourBlock === '12pm' ) {
            if ( 12 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 12 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 12 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }

        } else if ( hourBlock === '1pm' ) {
            if ( 13 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 13 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 13 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }
        } else if ( hourBlock === '2pm' ) {
            if ( 14 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 14 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 14 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }

        } else if ( hourBlock === '3pm' ) {
            if ( 15 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 15 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 15 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }

        } else if ( hourBlock === '4pm' ) {
            if ( 16 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 16 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 16 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }

        } else if ( hourBlock === '5pm' ) {
            if ( 17 === currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block present' );
            } else if ( 17 < currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block past' );
            } else if ( 17 > currentTime.hour() ) {
                $( this ).parent().addClass( 'row time-block future' );
            }
        };
    } );
    $( '.save-btn' ).on( 'click', function () {
        let time = $( this ).parent().attr( 'id' );
        let discription = $( this ).parent().children( 'textarea' ).val()
        localStorage.setItem( time, discription );
        console.log( time, discription );
    } );


    for ( let i = 9; i < 18; i++ ) {
        $( `#${i} textarea` ).val( localStorage.getItem( i ) );


    }



} );