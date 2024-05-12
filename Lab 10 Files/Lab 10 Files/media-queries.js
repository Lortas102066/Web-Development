document.querySelector( 'h1' ).addEventListener( 'click', showMessage );

$( 'button' ).click( filterItems );

function filterItems() {
  let button = this;
  let selector = $( this ).data( 'filter' );
  console.log( selector );
  $( '#products img' ).hide( 500 );
  $( selector ).show( 500 );
}

