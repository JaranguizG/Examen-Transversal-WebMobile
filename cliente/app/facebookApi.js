window.fbAsyncInit = function() {
    FB.init({
      appId      : '264815091051041',
      xfbml      : true,
      version    : 'v2.5'
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            window.location.replace("https://jeisona.github.io/producto.html");
            document.getElementById('login').style.visibility = 'hidden';
            /*document.getElementById('logout').style.visibility = 'visible';
            document.getElementById('perfil').style.visibility = 'visible';*/
        } else if (response.status === 'not_authorized') {
            /*document.getElementById('logout').style.visibility = 'hidden';
            document.getElementById('perfil').style.visibility = 'hidden';*/
        } else {
        }
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// login with facebook with extra permissions
function login() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            window.location.replace("https://jeisona.github.io/producto.html");
            //document.getElementById('name').innerHTML = "<a>'" + response.first_name + "'</a>";
            //document.getElementById('last_name').innerHTML = "<a>'" + response.last_name + "'</a>";
            //document.getElementById('login').style.visibility = 'hidden';
            /*document.getElementById('logout').style.visibility = 'visible';
            document.getElementById('perfil').style.visibility = 'visible';*/
        } else if (response.status === 'not_authorized') {
            //document.getElementById('perfil').style.visibility = 'hidden';
        } else {
            //document.getElementById('perfil').style.visibility = 'hidden';
 
        }
    }, {scope: 'email'});
}
function fbLogoutUser() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
    FB.logout(function(response) {
        document.location.reload();
    });
    } else if (response.status === 'not_authorized') 
    {
    FB.logout(function(response) {
        document.location.reload();
    });
}
});}
// getting basic user info
function getInfo() {
    FB.api('/me', 'GET', {fields: 'first_name,last_name,name,picture.width(150).height(150)'}, function(response) {
        document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url + "'>";
        document.getElementById('name').innerHTML = "<a>'" + response.first_name + "'</a>";
        document.getElementById('last_name').innerHTML = "<a>'" + response.last_name + "'</a>";
    });
}