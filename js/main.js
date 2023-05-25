const { createApp } = Vue;
createApp({
    data(){
        return {
            active_contact: 0,
            contacts: [
                        {
                            image: 'img/1.png',
                            title: "Michele",
                            text: 'Ultimo messaggio inviato'
                        }, {
                            image: 'img/2.png',
                            title: 'Fabio',
                            text: 'Ultimo messaggio inviato',
                        }, {
                            image: 'img/3.png',
                            title: 'Samuele',
                            text: 'Ultimo messaggio inviato',
                        }, {
                            image: 'img/4.png',
                            title: 'Alessandro B.',
                            text: 'Ultimo messaggio inviato',
                        }, 
                        {
                            image: 'img/5.png',
                            title: 'Alessandro L.',
                            text: 'Ultimo messaggio inviato',
                        }, 
                        {
                            image: 'img/3.png',
                            title: 'Claudia',
                            text: 'Ultimo messaggio inviato',
                        }, 
                        {
                            image: 'img/2.png',
                            title: 'Federico',
                            text: 'Ultimo messaggio inviato',
                        }, 
                        {
                            image: 'img/1.png',
                            title: 'Davide',
                            text: 'Ultimo messaggio inviato',
                        }, 
                ],
                searchTerm: "",
                ntsk:"",
                items:[],
            }
        },
        methods:{
            addtsk(){
                if (this.ntsk !== ""){
                    const newItem ={
                        text : this.ntsk,
                        status : false
                    };
                    this.items.unshift(newItem);
                    this.ntsk="";
                }
            },

    }
        
    
}).mount("#container");