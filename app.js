new Vue({
    el: '#app',
    data:{
        humanHealthBar: 100,
        monsterHealthBar: 100,
        isGameRunning: false
    },
    methods: {
        startGame:function(){
            this.humanHealthBar = 100;
            this.monsterHealthBar = 100;
            this.isGameRunning = true;
        },
        attack: function(){
            let max = 10;
            let min = 3;
            let damage = Math.max(Math.floor(Math.random() * max + 1), min)
            this.humanHealthBar -= damage

            if(this.humanHealthBar < 0){
                alert("You lost!");
                this.isGameRunning = false
                return; //works like break 
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max + 1), min)
            this.monsterHealthBar -= damage
            if(this.monsterHealthBar < 0){
                alert("You won!");
                this.isGameRunning = false
            }
        },
        specialAttack: function(){

        },
        heal: function(){

        },
        giveUp:function(){
            this.isGameRunning = false
        }
    },
})