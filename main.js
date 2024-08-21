const app = Vue.createApp({
    data() {
        return {
            searchQuery: '',
            username: 'Farhan',
            isLoading: true,
            products: [
                {
                    id: 1,
                    name: "Iphone 15",
                    thumb: "./public/assets/iphone 15.jpg",
                    price: 200.0,
                },
                {
                    id: 2,
                    name: "Iphone 11",
                    thumb: "./public/assets/iphone 11.jpg",
                    price: 250.0,
                },
                {
                    id: 3,
                    name: "Iphone 12 mini",
                    thumb: "./public/assets/iphone 12 mini.jpg",
                    price: 110.0,
                },
            ]
        };
    },
    methods: {
        changeUsername() {
            this.username = this.username === 'Farhan' ? 'Jane' : 'Farhan';
        },
    },
    computed: {
        filteredProducts() {
            return this.products.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    },
  });

  app.mount('#app');