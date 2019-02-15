/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();


new Vue ({
    el:'#Vue',

    data: {
        burgers: food
    }
});


var vm = new Vue({
    el: '#main',
    data: {
        visible: false,
        title: '',
        name: '',
        email: '',
        address: '',
        payment: '',
        gender: '',
        burgers: [],
        orders: {},
        order: {
            details: {
                x: 100,
                y: 100,
            }
        },
    },

    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },

    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },

        addOrder: function () {

            var data = customerData();
            this.burgers = getCheckedBurgers();

            if( data.find(el => el === '') === ''){
                this.title = 'you have to give your contact information above! ';

            }else if(this.burgers.length === 0){
                this.title = 'you have to ckeck an order! ';

            }else{
                this.visible = true;
                this.title = 'Order Confirmation';
                this.name = data[0] ;
                this.email = data[1];
                this.address = this.order.details.x.toFixed(2) + " x" + " / " + this.order.details.y.toFixed(2) + " y"; 
                this.payment = data[2];
                this.gender =  data[3];

                socket.emit("addOrder", { orderId: this.getNext(),
                                          details: this.order.details,
                                          orderItems: getCheckedBurgers(),
                                          customerInfo: customerData(),
                });
            }
        },

        displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};

                this.order.details = {x: event.clientX - 10 - offset.x,
                                      y: event.clientY - 10 - offset.y};

            },
        }
});
