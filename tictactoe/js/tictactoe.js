const tic_tac_toe = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    simbolos: ['X', 'O'],
    container_element: null,

    init: function (container) {
        this.container_element = container;
    },

    draw: function () {
        let content = '';

        for(i in this.tabuleiro){
            content += '<div class="col-4">' + this.tabuleiro[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    }
};