// agGrid.initialiseAgGridWithAngular1(angular);

var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider)
{
    $routeProvider
        .when("/",
            {
                templateUrl: "jobs.htm"
            })
        .when("/categories",
            {
                templateUrl: "categories.htm"
            })
        .when("/main",
            {
                templateUrl: "main.htm"
            })

        .when("/login",
            {
                templateUrl: "login.htm"
            })
        .when("/regseeker",
            {
                templateUrl: "regseeker.htm"
            })
        .when("/regemp",
            {
                templateUrl: "regemp.htm"
            })

        .when("/dash",
            {
                templateUrl: "dash.htm"
            })

        .when("/profile",
            {
                templateUrl: "profile.htm"
            })

        .when("/seekerdash",
            {
                templateUrl: "seekerdash.htm"
            })

        .when("/agrovet",
            {
                templateUrl: "categories.htm"
            })

        .when("/eggs",
            {
                templateUrl: "categories.htm"
            })

        .when("/fertilizer",
            {
                templateUrl: "categories.htm"
            })

        .when("/reset",
            {
                templateUrl: "resetpass.htm"
            })

        .when("/dash",
            {
                templateUrl: "dash.htm"
            })

        .when("/shoppinghist",
            {
                templateUrl: "shoppinghistory.htm"
            })

        .when("/payments",
            {
                templateUrl: "payments.htm"
            })

        .when("/preapply",
            {
                templateUrl: "preapply.htm"
            })

        .when("/paybill",
            {
                templateUrl: "paybill.htm"
            })

        .when("/pod",
            {
                templateUrl: "pod.htm"
            });
});

app.filter('sumByKey', function ()
{
    return function (data, key)
    {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined')
        {
            return 0;
        }

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--)
        {
            sum += parseInt(data[i][key]);
        }
        return sum;
    };
});

// define factory for data source
app.factory("States", function ()
{
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",

        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    return states;

});

app.controller("registerController", function ($scope, $http, $rootScope, $timeout, $route, $location)
{


    $scope.myInterval = 5000;

    //showallproductsahead();


    //counties in kenya
    $scope.states = ["Turkana",
        "Marsabit",
        "Mandera",
        "Wajir",
        "West Pokot",
        "Samburu",
        "Isiolo",
        "Baringo",
        " Keiyo-Marakwet",
        "Trans Nzoia",
        "Bungoma",
        " Garissa",
        " Uasin Gishu",
        " Kakamega",
        " Laikipia",
        " Busia",
        "Meru",
        "Nandi",
        "Siaya",
        "Nakuru",
        "Vihiga",
        " Nyandarua",
        " Tharaka",
        " Kericho",
        " Kisumu",
        " Nyeri",
        " Tana River",
        " Kitui",
        " Kirinyaga",
        "Embu",
        " Homa Bay",
        "Bomet",
        "Nyamira",
        " Narok",
        "Kisii",
        "Murang'a",
        " Migori",
        "Kiambu",
        "Machakos",
        "Kajiado",
        "Nairobi",
        "Makueni",
        "Lamu",
        "Kilifi",
        "Taita Taveta",
        "Kwale",
        " Mombasa",
    ];

    $scope.complete = function (string)
    {
        var output = [];
        angular.forEach($scope.states, function (county)
        {
            if (county.toLowerCase().indexOf(string.toLowerCase()) >= 0)
            {
                output.push(county);
            }
        });
        $scope.filterCounty = output;
    };

    $scope.fillTextbox = function (string)
    {
        $scope.county = string;
        $scope.hidethis = true;
    };

    $rootScope.cart = [];





    var dataw = localStorage.getItem("jackpotBetSlip");
    var final = JSON.parse(dataw);

    $rootScope.mydate = Date();


    var loadone = localStorage.getItem('loadproducthistory');

    var loadtwo = localStorage.getItem("loadme");

    var loadthree = localStorage.getItem("delivery");


    var top = JSON.parse(loadone);

    var bot = JSON.parse(loadtwo);

    var kot = JSON.parse(loadthree);

    if (top == null || top == 'null' || bot == null || bot == 'null')
    {

        console.log("loadproducthistory top is null", top);
        console.log("loadpaymenthistory bot is null", bot);
    }
    else
    {
        console.log("loadproducthistory top ", top);
        console.log("loadpaymenthistory bot ", bot);
    }
    // $rootScope.loadproducthistorytop = top;






    var t = $rootScope.loadproducthistory;


    if (final === null || final === 'null')
    {

        var datatwo = localStorage.setItem('jackpotBetSlip', '[]');
        var findat = localStorage.getItem("jackpotBetSlip");
        $rootScope.cart = findat;
    }

    $scope.selected = '';
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    // $scope.states = [
    //     {postcode:'B1',address:'Bull ring'},
    //     {postcode:'M1',address:'Manchester'}
    // ];

    // $scope.setPcode = function (site)
    // {
    //     $scope.selPcode = site.postcode;
    // };


    $scope.transferprice = function transferprice(amt)
    {

        console.log(amt);

        localStorage.setItem('payableamt', amt);

        $rootScope.finalamount = localStorage.getItem('payableamt');

    };

    $scope.mycount = function mycount()
    {

        var a = localStorage.getItem('delivery');
        var b = JSON.parse(a);

        $rootScope.myco = b;
    };

    $scope.podcheck = function podcheck(county, type)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Processing Payment ..."
            });

        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        console.log('my simu', simu);

        var mullah = localStorage.getItem('payableamt');

        var pesa = JSON.parse(mullah);

        if (type)
        {
            console.log(type);
            //process(type);
            var apikey = 'pod';
            var signature = 'pod';

            $podurl = 'http://localhost:8000/callback?api_key=' + apikey + '&api_signature=' + signature + '&api_version=pod&api_type=pod&transaction_status_code=Pending&transaction_status=Pending&transaction_status_description=Pay on Delivery&transaction_reference=Pending&transaction_code=Pending&transaction_gateway_code=Pending&transaction_status_action=Pending&' +
                'transaction_status_reason=Pending&transaction_mobile=' + simu + '&transaction_amount=' + pesa + '&transaction_type=Pay On Delivery&' +
                'transaction_type=Credit&transaction_date' + Date();
            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: $podurl
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;

                //$rootScope.loadfarmtips = loginresponse;

                console.log(loginresponse);

                savedeliveries(county, type);

                if (loginresponse.code == 0)
                {

                    process('pod');
                    // lipishafinal(county, 'pod');
                }
                else
                {
                    swal("System Error", loginresponse.msg, "error");

                }
                //process('paybill');
                //$.LoadingOverlay("hide");
            });

        }
        else
        {
            console.log("no type supplied");
        }

    };

    $scope.lipishacheck = function lipishacheck(code)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Processing Payment ..."
            });

        console.log(code);

        if (code)
        {

            var verifympesacodeurl = "http://localhost:8000/verifympesacode?mpesacode=" + code;

            // Simple GET request
            $http(
                {
                    method: 'GET',
                    url: verifympesacodeurl
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;

                //$rootScope.loadfarmtips = loginresponse;

                console.log(loginresponse);

                if (loginresponse.code === 0)
                {
                    swal("Payment " + loginresponse.transaction_status, "Hi, " + loginresponse.transaction_name + ", Your transaction Code " + code + " of Amount : " + loginresponse.transaction_amount + " has been validated successfully, Please proceed by entering the desired location" +
                        "for your deliveries ", "success");
                    //process('paybill');

                    $rootScope.lipishasuccess = 0;
                }
                else
                {
                    swal("Mpesa Code Error", loginresponse.msg, "error");
                    $.LoadingOverlay("hide");
                }
                //process('paybill');
                //$.LoadingOverlay("hide");
            });

            // swal ( "Payment Processed :)" ,  "Your Payment for Delivery has been processed successfully, our Agent will contact you shortly. Also remember to keep the SMS CODE sent to your phone safely.",  "success" );

        }
        else
        {
            swal("Mpesa Code Missing", "Your Mpesa Reference code is Missing, Please supply one to complete your payment", "error");
            $.LoadingOverlay("hide");
        }

    };

    $scope.reload = function reload()
    {

        console.log("i have been reloaded");

        var session = localStorage.getItem("spaceship");

        if (session == "true")
        {
            // if($rootScope.logsuc === 0){

            //user is still logged in
            $rootScope.logsuc = 0;

            //seeker is still logged in
            $rootScope.seekeron = 0;

            $rootScope.finalamount = localStorage.getItem('payableamt');

            var myreloadedcart = localStorage.getItem('jackpotBetSlip');

            var cat = localStorage.getItem('mycategories');

            $rootScope.alldatareload = JSON.parse(cat);

            $rootScope.temp = JSON.parse(myreloadedcart);

        }
        else
        {

            //user is logged out
            $rootScope.logsuc = 5;

            $rootScope.seekeron = 5;

            $location.path('/categories');

        }

    };

    //process the lipa na mpesa
    $scope.verifympesacode = function verifympesacode(code)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        $scope.name = JSON.parse(localStorage.getItem("username"));
        $rootScope.mpesacode = code;

    };

    //iprs search
    $scope.iprs = function iprs()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('iprs');
        swal(
            {
                text: 'Search for a ID / PASSPORT NUMBER. e.g. "28397776".',
                content: "input",
                button:
                {
                    text: "Search!",
                    closeModal: false,
                },
            })
            .then(name =>
            {
                if (!name) throw null;

                //return fetch('http://localhost:8000/verifympesacode?mpesacode=${name}');
                // return fetch('http://localhost:8000/iprs?id=${name}');
                return fetch(`http://localhost:8000/iprs?id=${name}`);
            })
            .then(results =>
            {
                console.log('init one', results    );
                localStorage.setItem('iprs',results);
                return results.json();
            })
            .then(json =>
            {
                // var movie = json.results[0];
                console.log('init two', json.transaction_name);
                var movie = json.transaction_name;

                if (!movie)
                {
                    return swal("Oops, Wrong Code !", "Invalid ID  Number!", "error");
                }

                var name = movie;
                var transaction_status = json.transaction_status;
                var transaction_amount = json.transaction_amount;
                //var imageURL = movie.artworkUrl100;

                swal(
                    {
                        title: transaction_status,
                        text: name + " Deposited KES: " + transaction_amount
                        //icon: imageURL,
                    });
            })
            .catch(err =>
            {
                if (err)
                {
                    swal("Oh noes!", "The AJAX request failed!", "error");
                }
                else
                {
                    swal.stopLoading();
                    swal.close();
                }
            });
    };

    //movies search
    $scope.movies = function movies()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('movies');
        swal(
            {
                text: 'Search for a Mpesa Code. e.g. "MJP282ED".',
                content: "input",
                button:
                {
                    text: "Search!",
                    closeModal: false,
                },
            })
            .then(name =>
            {
                if (!name) throw null;

                return fetch(`http://localhost:8000/verifympesacode?mpesacode=${name}`);
            })
            .then(results =>
            {
                console.log('init one', results);
                return results.json();
            })
            .then(json =>
            {
                // var movie = json.results[0];
                console.log('init two', json.transaction_name);
                var movie = json.transaction_name;

                if (!movie)
                {
                    return swal("Oops, Wrong Code !", "Invalid Mpesa Reference Number!", "error");
                }

                var name = movie;
                var transaction_status = json.transaction_status;
                var transaction_amount = json.transaction_amount;
                //var imageURL = movie.artworkUrl100;

                swal(
                    {
                        title: transaction_status,
                        text: name + " Deposited KES: " + transaction_amount
                        //icon: imageURL,
                    });
            })
            .catch(err =>
            {
                if (err)
                {
                    swal("Oh noes!", "The AJAX request failed!", "error");
                }
                else
                {
                    swal.stopLoading();
                    swal.close();
                }
            });
    };

    //load farmtips
    $scope.farmtips = function farmtips()
    {
        var path = $route.current.$$route.originalPath;
        logroutes(path);


        console.log("farmtips has been loaded");

        var farmtipsurl = "http://localhost:8000/farmtips";

        // Simple GET request
        $http(
            {
                method: 'POST',
                url: farmtipsurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            $rootScope.loadfarmtips = loginresponse;

            console.log(loginresponse);

        }).then(function errorCallback(error)
        {

            console.log(error);

            //$.LoadingOverlay("hide");
        });

    };

    //load producthistory
    $scope.producthistory = function producthistory()
    {

        // var mobi = localStorage.getItem("profile");
        //
        // var mobile = JSON.parse(mobi);
        //
        // var mobile = mobile.mobile;
        //
        // console.log("before",mobile);
        // if(mobile){
        //
        //     console.log("after",mobile);
        //     var path = $route.current.$$route.originalPath;
        //     logroutes(path);
        // }

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Loading Product History..."
            });

        console.log("producthistory has been loaded");

        var email = localStorage.getItem("profile");

        var finalemail = JSON.parse(email);

        var farmtipsurl = "http://localhost:8000/producthistory?email=" + finalemail.email;


        // Simple GET request
        $http(
            {
                method: 'POST',
                url: farmtipsurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('loadproducthistory', JSON.stringify(loginresponse));

            $rootScope.loadproducthistory = loginresponse;

            console.log(loginresponse);

            //shoppinghistorydgrid();
            //$location.reload();
            // console.log('my path', $location.path());
            // console.log('my host', $location.absUrl());

            $.LoadingOverlay("hide");
            //location.reload();
        }).then(function errorCallback(error)
        {

            console.log(error);

            $.LoadingOverlay("hide");
        });

        $.LoadingOverlay("hide");

    };



    //load producthistory
    $scope.paymenthist = function paymenthist()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Loading Payment History..."
            });

        console.log("Payment has been loaded");

        var mobile = localStorage.getItem("profile");

        var finalmobile = JSON.parse(mobile);

        var farmtipsurl = "http://localhost:8000/paymenthistory?mobile=" + finalmobile.mobile;

        // Simple GET request
        $http(
            {
                method: 'POST',
                url: farmtipsurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            //localStorage.setItem('loadproducthistory',JSON.stringify(loginresponse));

            $rootScope.loadpaymenthist = loginresponse;

            var s = JSON.stringify(loginresponse);

            console.log('lets get payment history');

            localStorage.setItem('loadme', s);

            console.log(loginresponse);

            //shoppinghistorydgrid();

            //load();

        }).then(function errorCallback(error)
        {

            console.log(error);

            $.LoadingOverlay("hide");
        });

        $.LoadingOverlay("hide");

    };

    //force load dom
    $scope.hardload = function hardload()
    {
        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Reloading Page..."
            });
        // $location.reload();
        // location.reload();
        location.reload();
        $.LoadingOverlay("hide");
    };

    //shoppinghistory
    function shoppinghistorydgrid()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('shoppinghistorydgrid history');

        var hist = localStorage.getItem('loadproducthistory');
        var finhist = JSON.parse(hist);

        //console.log(finhist.price);

    }

    //open the change password div
    $scope.openchangepass = function openchangepass(status)
    {

        console.log("current status Password", status);

        var oldpassword = localStorage.getItem("profile");

        var dataoldpassword = JSON.parse(oldpassword);

        console.log("storage Password", dataoldpassword.password);

        if (status === dataoldpassword.password)
        {
            $rootScope.open = "open";
        }
        else
        {
            console.log("Not Valid");
        }
    };

    //open the all products div
    $scope.openproductsdiv = function openproductsdiv(prodtitle)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log("open openproductsdiv", prodtitle);

        $scope.loadding = "checking ...";

        $rootScope.openproductsmain = prodtitle;

    };


    //open shopping cart from localstorage
    $scope.openshopping = function openshopping()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        if (mobile == null || mobile == 'null')
        {
            console.log('mobile is null, ur not looged in', mobile);
        }
        else
        {

            var mobile = mobile.mobile;

            console.log("before", mobile);

            if (mobile)
            {

                console.log("after", mobile);
                var path = $route.current.$$route.originalPath;
                logroutes(path);
            }


            var mobi = localStorage.getItem("profile");

            var mobile = JSON.parse(mobi);

            var mobile = mobile.mobile;

            console.log("before", mobile);
            if (mobile)
            {

                console.log("after", mobile);
                var path = $route.current.$$route.originalPath;
                logroutes(path);
            }

            var i = 0;

            var data = localStorage.getItem("jackpotBetSlip");
            var final = JSON.parse(data);

            console.log("open shopping cart from local storage", final);
            $rootScope.cart = final;
        }


    };


    //delete one product from shopping cart
    $scope.deleteone = function deleteone(title)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        var sellprice = [];

        console.log('delete one the object in the array');
        console.log('the index', title);

        // var cart = JSON.parse(localStorage.getItem('jackpotBetSlip'));

        var cart = $rootScope.temp;

        for (var i = 0; i <= cart.length - 1; i++)
        {

            if (cart[i].title === title)
            {
                var sp = cart.splice(i, 1);
                console.log('MYSPLICE', sp);

                localStorage.setItem('jackpotBetSlip', JSON.stringify(cart));

                $rootScope.showdata = cart; // refresh the cart
                console.log('deleted');

                // location.reload();

                return;
            }
        }

        this.items.splice(code, 1);

    };

    //delete all shopping

    $scope.deleteall = function deleteall()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('delete all the objects in the array');
        var cart = [];
        var sellprice = [];

        if (cart.length === 0)
        {


            var title = 'No Product Found :(';

        }

        localStorage.setItem('jackpotBetSlip', JSON.stringify(cart));

        swal(
            {
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) =>
            {
                if (willDelete)
                {
                    swal("Poof! Your imaginary file has been deleted!",
                        {
                            icon: "success",
                        });
                }
                else
                {
                    swal("Your imaginary file is safe!");
                }
            });
        $rootScope.final = cart; // refresh the cart
        localStorage.removeItem('productprice');

        console.log('deleted');
        location.reload();
        //swal("Deleted!", "All products have been deleted.", "success");




    };


    //my shopping cart
    $scope.addtocart = function addtocart(title, price, category)
    {

        // var mobi = localStorage.getItem("profile");
        //
        // var mobile = JSON.parse(mobi);
        //
        // var mobile = mobile.mobile;
        //
        // console.log("before",mobile);
        // if(mobile){
        //
        //     console.log("after",mobile);
        //     var path = $route.current.$$route.originalPath;
        //     logroutes(path);
        // }

        var email = localStorage.getItem("profile");

        // var invoice = localStorage.getItem('invkevton');

        var inside = localStorage.getItem('invkevton');
        var invo = JSON.parse(inside);
        var invoice = invo;

        var finalemail = JSON.parse(email);

        if (finalemail == null || finalemail == 'null')
        {
            swal("Oops Please Login", "Dear Customer, Please login in to have a smooth experience", "error");
        }

        var wekeleaobj = {
            "title": title,
            "price": price,
            "email": finalemail.email,
            "category": category,
            "invoice": invoice
        };

        console.log("adding title to cart", title);
        console.log("adding price to cart", price);
        console.log("adding wekeleaobj to cart", wekeleaobj);

        //localStorage.setItem('tempstore', JSON.stringify(wekeleaobj));


        // var weka = localStorage.setItem('jackpotBetSlip', JSON.stringify(wekeleaobj));

        var weka = JSON.parse(localStorage.getItem('jackpotBetSlip'));

        var found = false;

        if ((!weka) || (weka == undefined))
        {
            // localStorage.setItem('jackpotBetSlip', '[]');
            // localStorage.setItem('tempstore', '[]');

            weka = [];
        }

        for (var i = 0; i <= weka.length - 1; i++)
        {

            if (weka[i].title == weka.title)
            {

            }
        }

        if (!found)
        {
            var _game = wekeleaobj;
            //var tstore = localStorage.getItem('tempstore');
            //var _game = JSON.parse(tstore);

            if (typeof (tstore) !== "undefined" && tstore !== null)
            {
                _game.forEach(function (wekeleaobj)
                {

                    var found = false;

                    var title = [];
                    var cart = [];
                    var obj = {};

                    //this.passit = 'blueish';
                    console.log('entryobject', wekeleaobj);

                });
            }
            else
            {
                console.log('bad data');
            }

            //console.log('_GAME', _game);
            var tstore1 = localStorage.getItem('tempstore');
            console.log('_GAME', tstore1);
            weka.push(_game);
            //fred test cart
            //location.reload();

        }

        $rootScope.temp = weka;

        localStorage.setItem('jackpotBetSlip', JSON.stringify(weka));

        var final = localStorage.getItem('jackpotBetSlip');

        $rootScope.cart = final;


    };


    //close the all products div
    $scope.closeproductsdiv = function closeproductsdiv()
    {

        console.log("open openproductsdiv");

        $scope.loadding = "View Details ";

        $rootScope.closeproducts = 17;

        location.reload();
    };

    //change the user password
    function process(paymentmode)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }
        // $.LoadingOverlay("show", {
        //        image: "",
        //        background: "rgba(165, 190, 100, 0.5)",
        //        text: "Processing Payment ..."
        //    });


        var cartobject = localStorage.getItem("jackpotBetSlip");

        var finaldata = JSON.parse(cartobject);

        console.log(finaldata);

        var processpaymentsurl = "http://localhost:8000/processpayments";

        if (paymentmode === "paybill")
        {

            console.log("the cart is about to be processed via", paymentmode);

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: processpaymentsurl,
                    data: finaldata
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                console.log(loginresponse1);

                $.LoadingOverlay("hide");

                localStorage.setItem('jackpotBetSlip', '[]');
                localStorage.setItem('payableamt', '');

                $rootScope.paybillsuc = 11;

                $rootScope.temp = 0;



            });

        }
        else if (paymentmode === "pod")
        {

            console.log("the cart is about to be processed via", paymentmode);

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: processpaymentsurl,
                    data: finaldata
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                console.log(loginresponse1);

                $uname = localStorage.getItem('username');
                $finuname = JSON.parse($uname);

                // swal ( "Pay On Delivery Processed "+$finuname.username+" :)" ,  "Your Delivery payment has been processed successfully, our Agent will contact you shortly. Also remember to keep the SMS CODE sent to your phone safely.",  "success" );
                // $.LoadingOverlay("hide");

                localStorage.setItem('jackpotBetSlip', '[]');
                localStorage.setItem('payableamt', '');

                swal("Pay On Delivery Processed " + $finuname.username + " :)", "Your Delivery payment has been processed successfully, our Agent will contact you shortly. Also remember to keep the SMS CODE sent to your phone safely.", "success");
                $.LoadingOverlay("hide");

                $rootScope.paybillsuc = 12;

                $rootScope.temp = 0;

            });

        }
        else
        {

            swal('Oh my :(', loginresponse.msg, 'error');

        }

    }

    //change the user password
    $scope.changepass = function changepass(password)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }
        console.log("lets change the password");
        console.log(password);

        var user = localStorage.getItem("username");
        var users = JSON.parse(user);

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Updating your password " + users.username + "..."
            });

        if (password)
        {

            console.log("password to be changed", password);

            var oldpassword = localStorage.getItem("profile");

            var dataoldpassword = JSON.parse(oldpassword);

            var reset = "http://localhost:8000/changepass?oldpassword=" + dataoldpassword.password + "&password=" + password + "&date" + Date();

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: reset
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                console.log(loginresponse);


                if (loginresponse.code === 0)
                {

                    console.log("success data")
                    console.log(loginresponse.code);
                    console.log(loginresponse.msg);
                    //$scope.enter = loginresponse.code;
                    //$route.reload();
                    //$window.location.reload();

                    //$.LoadingOverlay("hide");
                    //location.reload();

                    swal("Password Updated :)", "Your new password is: " + password, "success");

                    var loginurl = "http://localhost:8000/loginclient?email=" + dataoldpassword.email + "&password=" + password + "&date" + Date();


                    // Simple GET request
                    $http(
                        {
                            method: 'POST',
                            url: loginurl
                        }).then(function successCallback(response)
                    {
                        // this callback will be called asynchronously
                        // when the response is available
                        var loginresponse = response.data;
                        var loginresponse1 = response;

                        console.log(loginresponse);


                        if (loginresponse.code === 0)
                        {

                            console.log("success data");

                            var res = response.data.firstname;

                            var mydata = {
                                "username": res
                            }

                            localStorage.setItem("profile", JSON.stringify(response.data));

                            localStorage.setItem("username", JSON.stringify(mydata));

                            //maintain the user session
                            localStorage.setItem("spaceship", true);

                            console.log(loginresponse.code);
                            console.log(loginresponse.msg);

                            //$rootScope.logsuc = loginresponse.code;
                            $rootScope.logsuc = 0;

                            $.LoadingOverlay("hide");
                            location.reload();

                            swal("Password Updated :)", "Your new password is: " + password, "success");

                        }
                        else if (loginresponse.code === 03)
                        {

                            swal("Oops", loginresponse.msg, "error");


                            //$scope.nullvalues = loginresponse.msg;

                            $.LoadingOverlay("hide");
                        }
                        else
                        {

                        }


                    }).then(function errorCallback(error)
                    {

                        console.log(error);

                        $.LoadingOverlay("hide");
                    });
                }
                else if (loginresponse.code === 03)
                {

                    swal("Oops", loginresponse.msg, "error");

                    //$scope.nullvalues = loginresponse.msg;

                    $.LoadingOverlay("hide");
                }
                else
                {
                    $.LoadingOverlay("hide");
                }


            }).then(function errorCallback(error)
            {

                console.log(error);

                $.LoadingOverlay("hide");
            });


        }
        else
        {
            swal("Oops", "Please Enter Email to get your password", "error");
        }
        $.LoadingOverlay("hide");
    };



    $scope.logout = function logout(email, password)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        $rootScope.logsuc = 5;

        var $name = localStorage.getItem("username");

        var $username = JSON.parse($name);

        localStorage.removeItem("spaceship");

        localStorage.removeItem("username");

        localStorage.removeItem("paymenthistory");

        localStorage.removeItem("loadproducthistory");

        localStorage.clear();

        $location.path('/');

        swal("Account logged out !", "Thank you for using the System :)", "info");

        localStorage.removeItem("profile");
    };

    $scope.profile = function profile()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        var $myprofile = localStorage.getItem("profile");

        $rootScope.prof = JSON.parse($myprofile);

        var myself = JSON.parse($myprofile);

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Loading Profile " + myself.firstname + "..."
            });

        var $myprofile = localStorage.getItem("profile");

        $rootScope.prof = JSON.parse($myprofile);

        $.LoadingOverlay("hide");

    };


    $scope.showallproducts = function showallproducts()
    {

        showallproductsahead();


    };

    function showallproductsahead()
    {

        console.log('showing all products ahead of its time');

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Loading All Products ..."
            });

        var loginurl = "http://localhost:8000/showproducts";


        // Simple GET request
        $http(
            {
                method: 'GET',
                url: loginurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('mycategories', JSON.stringify(loginresponse));
            $rootScope.alldata = loginresponse;
            console.log(loginresponse);
            $.LoadingOverlay("hide");

        }).then(function errorCallback(error)
        {

            console.log(error);

            $.LoadingOverlay("hide");
        });





    }

    $scope.back = function () {
        // $location.path('http://localhost:8080/');
        //$location.reload();
        location = location;
    };

    $scope.selectjob = function (par) {

        console.log(par);

        if(par == "employer"){
            // $location.path('/main');
            console.log("this is employer");
            $rootScope.sanstatus = 22;

        }else if(par  == "seeker"){
            // $location.path('/main');
            console.log("this is seeker");
            $rootScope.sanstatus = 20;

        }else {
            console.log('unknown parameter')
        }
        //$scope.selPcode = site.postcode;
    };


    $scope.loginacc = function loginacc(email, password)
    {


        if (email && password)
        {

            $.LoadingOverlay("show",
                {
                    image: "",
                    background: "rgba(165, 190, 100, 0.5)",
                    text: "Setting up your Account: " + email + "..."
                });

            console.log(email);
            console.log(password);

            var loginurl = "http://localhost:8000/loginclient?email=" + email + "&password=" + password + "&date" + Date();


            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: loginurl
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                console.log(loginresponse);


                if (loginresponse.code === 0)
                {

                    console.log("success data");

                    var res = response.data.firstname;

                    var mydata = {
                        "username": res
                    };

                    var i;

                    if (!res)
                    {
                        $scope.invalidNotification = true;
                        return;
                    }

                    i = index++;
                    $scope.invalidNotification = false;
                    $scope.notifications[i] = res;

                    var invoice = generateinvoice();

                    var invoiceid = JSON.stringify(invoice);

                    localStorage.setItem("invkevton", invoiceid);

                    localStorage.setItem("profile", JSON.stringify(response.data));

                    localStorage.setItem("username", JSON.stringify(mydata));

                    //maintain the user session
                    localStorage.setItem("spaceship", true);

                    console.log(loginresponse.code);
                    console.log(loginresponse.msg);

                    //$rootScope.logsuc = loginresponse.code;
                    $rootScope.logsuc = 0;

                    $location.path('/categories');

                    //start fred hack for loading the history ahead of its time
                    showallproductsahead();

                    initialproducthistory();

                    initialpaymenthistory();

                    initialdeliveryhistory();
                    //end fred hack for loading the history ahead of its time;
                    $.LoadingOverlay("hide");
                }
                else if (loginresponse.code === 03)
                {

                    swal("Oops", loginresponse.msg, "error");


                    //$scope.nullvalues = loginresponse.msg;

                    $.LoadingOverlay("hide");
                }
                else
                {

                }


            }).then(function errorCallback(error)
            {

                console.log(error);

                $.LoadingOverlay("hide");
            });

        }
        else
        {
            swal("Oops, Empty Fields", "Please Fill All The Fields", "error");
            //$scope.nullvalues = "Please Fill All The Fields";
            console.log("null values present");
        }

    };


    $scope.displaypass = function displaypass(email)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Searching password for: " + email + "..."
            });

        if (email)
        {

            var reset = "http://localhost:8000/resetpass?email=" + email + "&date" + Date();

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: reset
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                console.log(loginresponse);


                if (loginresponse.code === 0)
                {

                    console.log("success data");
                    console.log(loginresponse.code);
                    console.log(loginresponse.msg);
                    //$scope.enter = loginresponse.code;
                    swal("Hurray :)", "Your password is: " + loginresponse.password, "success");

                    $.LoadingOverlay("hide");
                }
                else if (loginresponse.code === 03)
                {

                    swal("Oops", loginresponse.msg, "error");

                    //$scope.nullvalues = loginresponse.msg;

                    $.LoadingOverlay("hide");
                }
                else
                {
                    $.LoadingOverlay("hide");
                }


            }).then(function errorCallback(error)
            {

                console.log(error);

                $.LoadingOverlay("hide");
            });


        }
        else
        {
            swal("Oops", "Please Enter Email to get your password", "error");
        }
        $.LoadingOverlay("hide");
    };



    $scope.registernew = function registernew(firstname, lastname, email, mobile, password)
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        if (firstname && lastname && email && mobile && password)
        {

            $.LoadingOverlay("show",
                {
                    image: "",
                    background: "rgba(165, 190, 100, 0.5)",
                    text: "Activating your Account " + firstname + "..."
                });

            console.log(email);
            console.log(password);
            console.log(firstname);
            console.log(lastname);
            console.log(mobile);

            var regurl = "http://localhost:8000/registerclient?email=" + email + "&password=" + password + "&firstname=" + firstname + "&lastname=" + lastname + "&mobile=" + mobile + "&date" + Date();

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: regurl
                }).then(function successCallback(response)
            {
                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                console.log(loginresponse);


                if (loginresponse.code === 0)
                {

                    console.log("success data")
                    console.log(loginresponse.code);
                    console.log(loginresponse.msg);
                    $scope.enter = loginresponse.code;

                    $.LoadingOverlay("hide");
                }
                else if (loginresponse.code === 03)
                {

                    swal("Oops", loginresponse.msg, "error");

                    //$scope.nullvalues = loginresponse.msg;

                    $.LoadingOverlay("hide");
                }
                else
                {

                }


            }).then(function errorCallback(error)
            {

                console.log(error);

                $.LoadingOverlay("hide");
            });

        }
        else
        {

            $.LoadingOverlay("hide");
            swal("Oops", "Please Fill All The Fields", "error");
            //$scope.nullvalues = "Please Fill All The Fields";
            console.log("null values present");

        }

    };

    $scope.counties = function counties()
    {

        // var mainInfo = null;
        // $http.get('kenyan-counties.json').success(function(data) {
        //     mainInfo = data;
        //
        //     console.log('countiesdata', mainInfo);
        // });
        // Simple GET request
        $http(
            {
                method: 'GET',
                //url:'file://///Users/admin/Documents/kevtonfinal/kevtonfront/kenyan-counties.json'
                url: 'kenyan-counties.json'
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            $rootScope.countieskenya = loginresponse;
            console.log(loginresponse);

            // creditpayment();
        });

    };

    $scope.pay = function pay()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log("pay hack");
        $location.path('/payments');
        //load();

    };

    //hack for loading the product history in the dom immediately after logging in
    function initialproducthistory()
    {


        // var mobi = localStorage.getItem("profile");
        //
        // var mobile = JSON.parse(mobi);
        //
        // var mobile = mobile.mobile;
        //
        // console.log("before",mobile);
        // if(mobile){
        //
        //     console.log("after",mobile);
        //     var path = $route.current.$$route.originalPath;
        //     logroutes(path);
        // }

        console.log("initial producthistory is being  has been loaded");

        var email = localStorage.getItem("profile");

        var finalemail = JSON.parse(email);

        var farmtipsurl = "http://localhost:8000/producthistory?email=" + finalemail.email;


        // Simple GET request
        $http(
            {
                method: 'POST',
                url: farmtipsurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('loadproducthistory', JSON.stringify(loginresponse));

            $rootScope.loadproducthistory = loginresponse;

            console.log(loginresponse);

            //shoppinghistorydgrid();
            //$location.reload();
            // console.log('my path', $location.path());
            // console.log('my host', $location.absUrl());

            // $.LoadingOverlay("hide");
            //location.reload();
        });



    }

    //hack for loading the payment history in the dom immediately after logging in
    function initialpaymenthistory()
    {

        console.log("intial Payment history is being loaded");

        var mobile = localStorage.getItem("profile");

        var finalmobile = JSON.parse(mobile);

        var farmtipsurl = "http://localhost:8000/paymenthistory?mobile=" + finalmobile.mobile;

        // Simple GET request
        $http(
            {
                method: 'POST',
                url: farmtipsurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            //localStorage.setItem('loadproducthistory',JSON.stringify(loginresponse));

            $rootScope.loadpaymenthist = loginresponse;

            var s = JSON.stringify(loginresponse);

            console.log('lets get payment history');

            localStorage.setItem('loadme', s);

            console.log(loginresponse);

            //shoppinghistorydgrid();

            //load();


        });

        // $.LoadingOverlay("hide");

    }

    //hack for loading the delivery history in the dom immediately after logging in
    function initialdeliveryhistory()
    {

        console.log("intial initialdeliveryhistory history is being loaded");

        // var mobile = localStorage.getItem("profile");
        //
        // var finalmobile = JSON.parse(mobile);

        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        console.log("initialdeliveryhistory", simu);

        var initialdeliveryhistorysurl = "http://localhost:8000/getdeliveries?mobile=" + simu;

        // Simple GET request
        $http(
            {
                method: 'GET',
                url: initialdeliveryhistorysurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            //localStorage.setItem('loadproducthistory',JSON.stringify(loginresponse));

            $rootScope.initialdeliveryhistoryloaded = loginresponse;

            console.log("delivery initialdeliveryhistory response", loginresponse);

            var s = JSON.stringify(loginresponse);

            console.log('lets get payment history');

            localStorage.setItem('delivery', s);

            console.log(loginresponse);

            //shoppinghistorydgrid();

            //load();


        });

        // $.LoadingOverlay("hide");

    }

    $scope.loadleftpayment = function loadleftpayment()
    {
        var path = location.pathname;
        logroutes(path);

        debitpayment();
    };

    $scope.loadleftdelivery = function loadleftdelivery()
    {

        var completedx = localStorage.getItem('proccompleteddeliveries');

        var completed = JSON.parse(completedx);

        $rootScope.proccompleteddeliveries = completed;

        var path = location.pathname;
        logroutes(path);

        completeddeliveries();
    };

    function completeddeliveries()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('debitpayment has been loaded');
        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        // var debitpaymentutl = 'http://localhost:8000/debitpayment?mobile='+simu;
        var completeddeliveriesurl = 'http://localhost:8000/completeddeliveries?mobile=' + simu;

        // Simple GET request
        $http(
            {
                method: 'GET',
                url: completeddeliveriesurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('proccompleteddeliveries', JSON.stringify(loginresponse));

            // var completedx = localStorage.getItem('proccompleteddeliveries');
            //
            // var completed = JSON.parse(completedx);
            //
            //
            // $rootScope.proccompleteddeliveries = completed;
            console.log(loginresponse);

            pendingdeliveries();
        });
    }

    function pendingdeliveries()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('debitpayment has been loaded');
        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        var pendingdeliveriestl = 'http://localhost:8000/pendingdeliveries?mobile=' + simu;

        // Simple GET request
        $http(
            {
                method: 'GET',
                url: pendingdeliveriestl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('procpendingdeliveriest', JSON.stringify(loginresponse));

            var pendingx = localStorage.getItem('proccompleteddeliveries');

            //var pending = JSON.parse(pendingx);

            $rootScope.procpendingdeliveriest = loginresponse;
            console.log(loginresponse);

            //creditpayment();
        });
    }


    function debitpayment()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('debitpayment has been loaded');
        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        var debitpaymentutl = 'http://localhost:8000/debitpayment?mobile=' + simu;

        // Simple GET request
        $http(
            {
                method: 'GET',
                url: debitpaymentutl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            $rootScope.procdebitpayment = loginresponse;
            console.log(loginresponse);

            creditpayment();
        });
    }

    function creditpayment()
    {

        var mobi = localStorage.getItem("profile");

        var mobile = JSON.parse(mobi);

        var mobile = mobile.mobile;

        console.log("before", mobile);
        if (mobile)
        {

            console.log("after", mobile);
            var path = $route.current.$$route.originalPath;
            logroutes(path);
        }

        console.log('creditpayment has been loaded');

        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        var creditpayment = 'http://localhost:8000/creditpayment?mobile=' + simu;

        // Simple GET request
        $http(
            {
                method: 'GET',
                url: creditpayment
            }).then(function successCallback(response)
        {

            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            $rootScope.proccreditpayment = loginresponse;
            console.log(loginresponse);
            $.LoadingOverlay("hide");

        });
    }

    $scope.lipishafinal = function lipishafinal(county, mode)
    {

        var user = localStorage.getItem('username');
        var t = JSON.parse(user);
        var msee = t.username;
        process(mode);
        savedeliveries(county, mode);
        swal("Payment and Delivery Processed", "Hi, " + msee + ", Your transaction and delivery has been fully processed.", "success");

    };


    function savedeliveries(county, mode)
    {

        console.log('deliveries activated', county);
        console.log('deliveries activated', mode);

        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);
        var final = mobile.mobile;

        var test = final.substr(1);

        var simu = "254" + test;

        var mull = localStorage.getItem('payableamt');
        var stacks = JSON.parse(mull);
        var mullah = stacks;

        var inside = localStorage.getItem('invkevton');
        var invo = JSON.parse(inside);
        var invoice = invo;

        if (mode == 'pod')
        {

            var podurl = 'http://localhost:8000/delivery?mobile=' + simu + '&location=' + county + '&status=Pending&amount=' + mullah + '&invoice=' + invoice + '&transaction_type=Cash';

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: podurl
                }).then(function successCallback(response)
            {

                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                $rootScope.proccreditpayment = loginresponse;
                console.log(loginresponse);
                $.LoadingOverlay("hide");

                localStorage.removeItem('invkevton');

            });
        }
        else
        {
            var lipishaurls = 'http://localhost:8000/delivery?mobile=' + simu + '&location=' + county + '&status=Pending&amount=' + mullah + '&invoice=' + invoice + '&transaction_type=Lipa Na Mpesa';

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: lipishaurls
                }).then(function successCallback(response)
            {

                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                $rootScope.proccreditpayment = loginresponse;
                console.log(loginresponse);
                $.LoadingOverlay("hide");
                localStorage.removeItem('invkevton');

            });
        }


    }

    function logroutes(p)
    {

        //$route.absUrl();
        console.log('logroutes history has been loaded ', p);

        var mobi = localStorage.getItem('profile');
        var mobile = JSON.parse(mobi);

        if (mobile == null || mobile == 'null')
        {
            console.log('mobile is null', mobile);
        }
        else
        {
            var final = mobile.mobile;

            var test = final.substr(1);

            var simu = "254" + test;

            var logroutesurl = 'http://localhost:8000/routehistory?mobile=' + simu + '&route=' + p;

            // Simple GET request
            $http(
                {
                    method: 'POST',
                    url: logroutesurl
                }).then(function successCallback(response)
            {

                // this callback will be called asynchronously
                // when the response is available
                var loginresponse = response.data;
                var loginresponse1 = response;

                $rootScope.proccreditpayment = loginresponse;
                console.log(loginresponse);
                $.LoadingOverlay("hide");

            });
        }

    }

    function generateinvoice()
    {
        var citation = "KevtonINV-";
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < 8; i++)
        {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        var final = citation + text;

        return final;
    }

    $scope.exportPdf = function ()
    {
        var grid = $scope.gridApi.grid;
        var rowTypes = uiGridExporterConstants.ALL;
        var colTypes = uiGridExporterConstants.ALL;
        uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
    };

    $scope.exportCsv = function ()
    {
        var grid = $scope.gridApi.grid;
        var rowTypes = uiGridExporterConstants.ALL;
        var colTypes = uiGridExporterConstants.ALL;
        uiGridExporterService.csvExport(grid, rowTypes, colTypes);
    };

    $scope.sancomgetjobs = function sancomgetjobs()
    {

        console.log('showing all products ahead of its time');

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Loading All Jobs ..."
            });

        var loginurl = "http://localhost:8080/api/posts";


        // Simple GET request
        $http(
            {
                method: 'GET',
                url: loginurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('myjobs', JSON.stringify(loginresponse));
            $rootScope.myjobs = loginresponse;
            console.log(loginresponse);
            $.LoadingOverlay("hide");

        }).then(function errorCallback(error)
        {

            console.log(error);

            $.LoadingOverlay("hide");
        });
    };

    $scope.sancompreapply = function sancompreapply(jobcode, title)
    {
        console.log(jobcode);
        console.log(title);

        localStorage.setItem('code', jobcode);
        localStorage.setItem('title', title);
    };

    $scope.notlogged = function notlogged()
    {
        swal("Polite Notice", "Please Login in order to apply for Jobs !!! ", "warning");
    };

    $scope.registerseeker = function registerseeker(firstname, lastname, email, age, gender, mobile, password,experience, level)
    {
        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Activating your Account " + firstname + "..."
            });

        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(age);
        console.log(gender);
        console.log(mobile);
        console.log(level);
        console.log(password);
        console.log(experience);

        // var firstname = fname;
        // var lastname = lname;
        var farmtipsurl = "http://localhost:8080/api/newjobseeker?firstname="+firstname+"&lastname="+lastname+"&email="+email+"&age="+age+"&gender="+gender+"&mobile="+mobile+"&level="+level+"&password="+password+"&experience="+experience;

        $http(
            {
                method: 'POST',
                url: farmtipsurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;

            console.log(loginresponse);

            if(loginresponse.code == 0){

                var NEWsurl = "http://localhost:8080/api/singlejobseekeremail?email="+email;

                $http(
                    {
                        method: 'GET',
                        url: NEWsurl
                    }).then(function successCallback(response)
                {
                    // this callback will be called asynchronously
                    // when the response is available
                    var loginresponse = response.data;

                    console.log(loginresponse);

                    localStorage.setItem('profile', JSON.stringify(loginresponse));

                    swal(firstname+"! Registration Successful" ,"You have been registered", "success");
                    $.LoadingOverlay("hide");
                    $location.path('/');

                });
                $.LoadingOverlay("hide");
            }else {
                $.LoadingOverlay("hide");
            }


        });

        $.LoadingOverlay("hide");
    };

    $scope.seekerlogin = function seekerlogin(email, password)
    {
        console.log(email);
        console.log(password);

        var loginurl = "http://localhost:8080/api/seeklogin?email="+email+"&password="+password;

        $http(
            {
                method: 'POST',
                url: loginurl
            }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;


            console.log(loginresponse);

            if(loginresponse.code == 0){

                var NEWsurl = "http://localhost:8080/api/singlejobseekeremail?email="+email;

                $http(
                    {
                        method: 'GET',
                        url: NEWsurl
                    }).then(function successCallback(response)
                {
                    // this callback will be called asynchronously
                    // when the response is available
                    var loginresponse = response.data;

                    console.log(loginresponse);

                    localStorage.setItem('profile', JSON.stringify(loginresponse));

                    //maintain the user session
                    localStorage.setItem("spaceship", true);

                    swal("Login Successful" ,"You can now use the Portal", "success");
                    $.LoadingOverlay("hide");
                    $location.path('/');

                    $rootScope.seekeron = 0;

                });
                $.LoadingOverlay("hide");
            }else {
                $.LoadingOverlay("hide");
                swal("Login UnSuccessful" ,"Wrong Credentials", "error");
            }

        })
    };

    $scope.seekergetapplications = function seekergetapplications()
    {

        console.log('showing all applications ahead of its time');

        $.LoadingOverlay("show",
            {
                image: "",
                background: "rgba(165, 190, 100, 0.5)",
                text: "Loading All Applications ..."
            });

        var loginurl = "http://localhost:8080/api/applications";


        // Simple GET request
        $http(
            {
                method: 'GET',
                url: loginurl
            }).then(function successCallback(response)
        {
            // this callback will be called asynchronously
            // when the response is available
            var loginresponse = response.data;
            var loginresponse1 = response;

            localStorage.setItem('myjobs', JSON.stringify(loginresponse));
            $rootScope.myapplications = loginresponse;
            console.log(loginresponse);
            $.LoadingOverlay("hide");

        }).then(function errorCallback(error)
        {

            console.log(error);

            $.LoadingOverlay("hide");
        });
    };

    $scope.profile = function profile()
    {
        var pro = localStorage.getItem('profile');

        var prof = JSON.parse(pro);

        console.log(prof);

        $rootScope.profiles = prof;
    };

    var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

    var value = 'test';

    var result = MD5(value);

});