
let mainMenu = '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
mainMenu += '<a class="navbar-brand" href="#">Navbar</a>';
mainMenu += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span></button>';

mainMenu += '<div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active">';

mainMenu += '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li>';
mainMenu += '<li class="nav-item"><a class="nav-link" href="#">Link</a></li>';
mainMenu += '<li class="nav-item dropdown">  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
mainMenu += 'Dropdown</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><div class="dropdown-menu" aria-labelledby="navbarDropdown">';
mainMenu += '<a class="dropdown-item" href="#">Action</a>';
mainMenu += '<a class="dropdown-item" href="#">Another action</a> <div class="dropdown-divider"></div>';
mainMenu += '<a class="dropdown-item" href="#">Something else here</a></div></li>';
mainMenu += '<li class="nav-item"><a class="nav-link disabled" href="#">Disabled</a></li></ul>';
mainMenu += '</div></nav>';





document.write(mainMenu);
