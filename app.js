var app = angular.module('app',[]);
app.controller('ctrl', ['$scope','$http','$timeout',
    function($scope,$http,$timeout) {
      /*  $scope.myEmail='myemail@mail.com';*/
        $scope.isLogged = false;
        $scope.showModal = true;
        $scope.nav='Sign In';
        $scope.navSearch=true;
        /*$scope.msg =
        { from: 'from@mail.com',
          to: 'to@mail.com',
            cc:'cc@mail.com',
            text:'lorem text ,, this is sample e mail'
        };*/

        $http.get('data.json')
            .then(function(res){

                $scope.msgs = res.data;


            });
        
        $scope.logIn = function (valid) {

            console.log(valid)
            if(valid) {
                $scope.isLogged = true;
                $scope.nav = 'Inbox';
                $scope.new = false;
                $scope.sent = false;
                $scope.inbox = true;
                $scope.navSearch = false;
                $scope.emailView = false;
                $scope.emailSentView = false;
            }
        }
        $scope.send = function(isValid) {
            console.log(isValid)
            var frm = document.getElementsByName('newMsg')[0];
            if(isValid)
            $timeout( function() {

                frm.reset();
                frm.to.valid=true;

            },50)
        };


        $scope.inboxBtn= function () {
            console.log("i")
            $scope.nav = 'Inbox';
            $scope.new = false;
            $scope.sent = false;
            $scope.inbox = true;
            $scope.navSearch=false;
            $scope.emailView=false;
            $scope.emailSentView=false;
        };
        $scope.sentBtn= function () {
            console.log("s")
            $scope.nav = 'Sent Mail';
            $scope.new = false;
            $scope.inbox = false;
            $scope.sent = true;
            $scope.navSearch=false;
            $scope.emailView=false;
            $scope.emailSentView=false;
        };

        $scope.newBtn = function () {
            console.log("n")
            $scope.nav = 'New Message';
            $scope.new = true;
            $scope.inbox = false;
            $scope.sent = false;
            $scope.navSearch=true;
            $scope.emailView=false;
            $scope.emailSentView=false;
        };
        $scope.goToMsg = function (msg) {
            $scope.nav = msg.title;
            $scope.new = false;
            $scope.inbox = false;
            $scope.sent = false;
            $scope.navSearch=true;
            $scope.emailView=true;
            $scope.emailSentView=false;
            $scope.tMsg =msg;

        };
        $scope.goToMsgSent = function (msg) {
            console.log("q")
            $scope.nav = msg.title;
            $scope.new = false;
            $scope.inbox = false;
            $scope.sent = false;
            $scope.navSearch=true;
            $scope.emailSentView=true;
            $scope.emailView=false;
            $scope.tMsg =msg;

        };
        $('#myModal').on('shown.bs.modal', function () {

            $('#compose').trigger('focus')
        })
    }]);

