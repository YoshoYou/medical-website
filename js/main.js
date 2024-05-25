// start navbar dropdown

let icon = document.querySelector( ".navbar .second" );

let list = document.querySelector( ".s2" );
let spIc = document.querySelectorAll( ".second .k" )[0];
let spIc1 = document.querySelectorAll( ".second .k" )[1];
let spIc2 = document.querySelectorAll( ".second .k" )[2];

/////
document.onclick = function (ele)
{
   
 if ( ele.target == icon  )
    {
         list.classList.toggle( 'show' );
    }
    else if ( ele.target !== icon && list.classList.contains( 'show' ) )
    {
        list.classList.toggle( 'show' );
    }
    else if ( ele.target == spIc )
    {
        list.classList.toggle( 'show' );
    }
    else if ( ele.target == spIc1 )
    {
        list.classList.toggle( 'show' );
    }
    else if ( ele.target == spIc2 )
    {
        list.classList.toggle( 'show' );
    }


   
};


/// end everything related to navbar

