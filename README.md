jQuery Item Filter
====================
By: Spencer Neese   
Version: 1.0   
Requires: jQuery UI 1.7+ and jQuery 1.3.2+   
Demo: [http://jsfiddle.net/th3uiguy/v6wBF/](http://jsfiddle.net/th3uiguy/v6wBF/embedded/result/)   
Git: [https://github.com/th3uiguy/jquery-itemfilter.git](https://github.com/th3uiguy/jquery-itemfilter.git)   


Description
---------------------
Simple text-match filter that will show/hide html elements that match the string entered by the user.




Example
---------------------
```js
$('input#filterPhrase').itemFilter({
	items: $('table>tbody>tr')
});
```



Options
---------------------
#### items ####
*type: jQuery Object or Selector*   
*default: $('>\*')*

#### placeholder ####
*type: String*   
*default: 'Type Search Here'*

#### ignore ####
*type: jQuery Object or Selector*   
*default: '.ignore'*

#### showClear ####
*type: Boolean*   
*default: true*

#### filterClass ####
*type: String*   
*default: 'if-f*iltered'

#### minLength ####
*type: Integer*   
*default: 0*

#### delay ####
*type: Integer*   
*default: 200*



<br /><br />
Copyright 2012, Spencer Neese   
Dual licensed under the 
[MIT](https://raw.github.com/th3uiguy/jquery-itemfilter/master/MIT-LICENSE.txt) or 
[GPL](https://raw.github.com/th3uiguy/jquery-itemfilter/master/GPL-LICENSE.txt) Version 2 licenses. 
