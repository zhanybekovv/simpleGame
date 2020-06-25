new Vue({
    el: '#app',
    data:{
        humanHealthBar: 100,
        monsterHealthBar: 100,
        isGameRunning: false,
        logs: []
    },
    methods: {
        startGame:function(){
            this.humanHealthBar = 100;
            this.monsterHealthBar = 100;
            this.isGameRunning = true;
            this.logs = []
        },
        attack: function(){
            let x = this.damage(10, 3)
            this.monsterHealthBar -= x
            this.logs.unshift({
                isPlayer: true,
                text: "Player hit monster with " + x + " damage"
            })
            if(this.checkWin()){
                return
            }
            this.monsterAttack()
            
        },
        specialAttack: function(){
            let x = this.damage(20, 5)
            this.monsterHealthBar -= x
            this.logs.unshift({
                isPlayer: true,
                text: "Player hit monster with " + x + " damage"
            })
            if(this.checkWin()){
                return
            }
            this.monsterAttack()
        },
        heal: function(){
            if(this.humanHealthBar < 100){
                this.humanHealthBar += 10
                this.logs.unshift({
                    isPlayer: true,
                    heal: true,
                    text: "Player healed by 10 points"
                })
                this.monsterAttack()
            }
            else {this.monsterAttack()}
        },
        giveUp:function(){
            this.isGameRunning = false
            this.logs.unshift({
                isPlayer: true,
                text: "User gave up"
            })
        },
        damage: function(max, min){
           return Math.max(Math.floor(Math.random() * max + 1), min)
        },
        checkWin: function(){
            if(this.humanHealthBar <= 0){
                if(confirm("You lost, new game?")){
                    this.startGame();
                }else{
                    this.isGameRunning = false;
                } 
                return true; //works like break 
            }
            else if(this.monsterHealthBar <= 0){
                if(confirm("You won, new game?")){
                    this.startGame();
                }else{
                    this.isGameRunning = false;
                }
                return true
            }
            return false
        },
        monsterAttack: function(){
            let x = this.damage(12, 5)
            this.humanHealthBar -= x
            this.logs.unshift({
                isPlayer: false,
                text: "Monster hit player with " + x + " damage"
            })
            this.checkWin()
        },
        showLogs: function(){

        }
    },
})