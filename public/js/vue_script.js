new Vue ({
    el:'#Vue',

    data: {
        burgers: food
    }
});

new Vue ({
    el:'#theOrder',
    data: {
        visible: false,
        title: '',
        name: '',
        email: '',
        address: '',
        payment: '',
        gender: '',
        burgers: food.map(el => Object.assign({}, el)),
    },

    methods: {
        changeTitle: function (){
            var data = customerData();
            this.burgers = food.map(el => Object.assign({}, el))

            if(data.find(el => el === '') === ''){
                this.title = 'you have to give your contact information above! ';

            }else{
                this.visible = true;
                this.title = 'your contact information: ';
                this.name = data[0] ;
                this.email = data[1];
                this.address = data[2] + " " + data[3];
                this.payment = data[4];
                this.gender =  data[5];
            }
        }
    }
});
