function showMessage() {
    alert('Testing a Function');
  }

  //showMessage();

  document.querySelector('h1').addEventListener('click', showMessage);

  Fancybox.bind( "[data-fancybox]" );

  $( 'button' ).click( filterItems );

  function filterItems() {
    let button = this;
    let selector = $( button ).data( 'filter' );
    console.log( selector );
    $( '#products img' ).not( selector ).hide(500);
    $( selector ).show(500);
}