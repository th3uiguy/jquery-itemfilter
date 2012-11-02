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
_type: jQuery Object or Selector_   
_default: $('>*')_

#### placeholder ####
*type: String*   
*default: 'Type Search Here'*

#### ignore ####
_type: jQuery Object or Selector_   
_default: '.ignore'_

#### showClear ####
_type: Boolean_   
_default: true_

#### filterClass ####
_type: String_   
_default: 'if-filtered'_

#### minLength ####
_type: Integer_   
_default: 0_

#### delay ####
_type: Integer_   
_default: 200_



<br /><br />
Copyright (c) 2012, Spencer Neese [https://github.com/th3uiguy/](https://github.com/th3uiguy/)   
Dual licensed under the 
[MIT](https://raw.github.com/th3uiguy/jquery-itemfilter/master/MIT-LICENSE.txt) and 
[GPL](https://raw.github.com/th3uiguy/jquery-itemfilter/master/GPL-LICENSE.txt) Version 2 licenses. 
