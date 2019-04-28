const tic_tac_toe = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    simbolos: { 
        options: ['X', 'O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    container_element: null,
    gameover: false,
    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    init: function (container) {
        this.container_element = container;
    },

    start: function(){
        if(this.gameover == true){
            this.tabuleiro.fill('');
            this.gameover = false;
            this.draw();
        }
        else{
            alert("A PARTIDA AINDA NÃO TERMINOU");
        }
    },

    make_play: function(posicao){
        if(this.gameover){
            return false;
        }

        if(this.tabuleiro[posicao] === ''){
            this.tabuleiro[posicao] = this.simbolos.options[this.simbolos.turn_index];
            this.draw();
            let winning_sequences_index = this.check_winning_sequences(this.simbolos.options[this.simbolos.turn_index]);

            if(winning_sequences_index >= 0){
                this.game_is_over();
            }
            else{
                this.simbolos.change();
            }
            return true;
        }
        else{
            return false;
        }
    },

    game_is_over: function(){
        this.gameover = true;
        console.log("GAME OVER");
    },

    check_winning_sequences: function(simbolo){
        for(i in this.winning_sequences){
            if(this.tabuleiro[this.winning_sequences[i][0]] == simbolo &&
                this.tabuleiro[this.winning_sequences[i][1]] == simbolo &&
                this.tabuleiro[this.winning_sequences[i][2]] == simbolo){
                    console.log('Sequência Vencedora: '+ i);
                    return i;
            }
        };
        return -1;
    },

    draw: function () {
        let content = '';

        for(i in this.tabuleiro){
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')" class="col-4">' + this.tabuleiro[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    }
};