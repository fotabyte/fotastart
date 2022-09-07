@php
    /*-----------------------------------
    | This gets the version number from 
    | the globals.php configuration file.
    | It makes the browser do a fresh page
    | fetch each time we change our js file
    |--------------------------------------
    */
    $version = config("globals.versions.js");   
@endphp

<script src="{{asset("js/global/classes/Dom.js?v=$version")}}"></script>
<script src="{{asset("js/global/classes/Ajax.js?v=$version")}}"></script>
<script src="{{asset("js/global/setup.js?v=$version")}}"></script>