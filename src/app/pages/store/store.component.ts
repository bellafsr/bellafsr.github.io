import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CartService, Item } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    InputNumberModule,
    DialogModule,
    FormsModule,
  ]
})
export class StoreComponent {
  value = 1;
  menu: Item[] = [
    {
      name: "Hamburguer Clássico",
      description: "Um delicioso hambúrguer de carne com queijo, alface e tomate.",
      price: 15.99,
      image: "imagem1.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 1,
    },
    {
      name: "Hamburguer Vegetariano",
      description: "Um hambúrguer vegetariano feito com ingredientes frescos e molho especial.",
      price: 14.99,
      image: "imagem2.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 2,
    },
    {
      name: "Batata Frita Crocante",
      description: "Batatas fritas crocantes e douradas, perfeitas para acompanhar seu lanche.",
      price: 6.99,
      image: "imagem3.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: false,
      ID: 3,
    },
    {
      name: "Coca-Cola",
      description: "Uma lata gelada de Coca-Cola para matar a sede.",
      price: 4.99,
      image: "imagem4.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: true,
      ID: 4,
    },
    {
      name: "Milkshake de Morango",
      description: "Um delicioso milkshake de morango com chantilly.",
      price: 8.99,
      image: "imagem5.jpg",
      isDessert: true,
      isHamburguer: false,
      isDrink: false,
      ID: 5,
    },
    {
      name: "Hamburguer de Frango Grelhado",
      description: "Um hambúrguer de frango grelhado com abacate e molho especial.",
      price: 16.99,
      image: "imagem6.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 6,
    },
    {
      name: "Onion Rings",
      description: "Anéis de cebola empanados e crocantes, acompanhados de molho barbecue.",
      price: 7.99,
      image: "imagem7.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: false,
      ID: 7,
    },
    {
      name: "Água Mineral 500ml",
      description: "Uma garrafa (500ml) de água mineral gelada.",
      price: 2.99,
      image: "imagem8.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: true,
      ID: 8,
    },
    {
      name: "Sundae de Chocolate",
      description: "Uma sobremesa deliciosa com sorvete de baunilha, calda de chocolate e castanhas.",
      price: 9.99,
      image: "imagem9.jpg",
      isDessert: true,
      isHamburguer: false,
      isDrink: false,
      ID: 9,
    },
    {
      name: "Hamburguer Duplo com Bacon",
      description: "Dois hambúrgueres suculentos com bacon, queijo cheddar e molho especial.",
      price: 18.99,
      image: "imagem10.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 10,
    },
    {
      name: "Refrigerante de Limão (Lata)",
      description: "Um refrigerante refrescante de limão.",
      price: 4.99,
      image: "imagem11.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: true,
      ID: 11,
    },
    {
      name: "Sorvete de Chocolate Duplo",
      description: "Duas bolas de sorvete de chocolate com calda de chocolate quente.",
      price: 7.99,
      image: "imagem26.jpg",
      isDessert: true,
      isHamburguer: false,
      isDrink: false,
      ID: 12,
    },
    {
      name: "Hamburguer de Frango com Abacaxi",
      description: "Um hambúrguer de frango grelhado com abacaxi e molho agridoce.",
      price: 17.99,
      image: "imagem27.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 13,
    },
    {
      name: "Água com Gás",
      description: "Uma garrafa de água com gás gelada.",
      price: 2.99,
      image: "imagem28.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: true,
      ID: 14,
    },
    {
      name: "Torta de Limão",
      description: "Uma torta caseira de limão com merengue.",
      price: 6.99,
      image: "imagem29.jpg",
      isDessert: true,
      isHamburguer: false,
      isDrink: false,
      ID: 15,
    },
    {
      name: "Hamburguer Vegetariano com Pesto",
      description: "Um hambúrguer vegetariano com pesto, tomate e rúcula.",
      price: 15.99,
      image: "imagem30.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 16,
    },
    {
      name: "Milkshake de Amora",
      description: "Um milkshake cremoso de amora com chantilly.",
      price: 8.99,
      image: "imagem31.jpg",
      isDessert: true,
      isHamburguer: false,
      isDrink: false,
      ID: 17,
    },
    {
      name: "Batata Frita com Queijo Cheddar",
      description: "Batatas fritas crocantes cobertas com queijo cheddar derretido.",
      price: 9.99,
      image: "imagem32.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: false,
      ID: 18,
    },
    {
      name: "Refrigerante de Framboesa",
      description: "Um refrigerante refrescante de framboesa.",
      price: 4.99,
      image: "imagem33.jpg",
      isDessert: false,
      isHamburguer: false,
      isDrink: true,
      ID: 19,
    },
    {
      name: "Cheeseburger com Bacon e Ovo",
      description: "Um cheeseburger com bacon, ovo frito e queijo cheddar.",
      price: 18.99,
      image: "imagem34.jpg",
      isDessert: false,
      isHamburguer: true,
      isDrink: false,
      ID: 20,
    }
  ];

  modalVisible = false;
  activeItem: Item = {
    name: "",
    description: "",
    price: 0,
    image: "",
    isDessert: false,
    isHamburguer: false,
    isDrink: false,
    ID: 0,
  }
  
  get getHamburgueres(): any {
    return this.menu.filter((menuItem) => menuItem.isHamburguer);
  }

  get getDesserts(): any {
    return this.menu.filter((menuItem) => menuItem.isDessert);
  }

  get getDrinks(): any {
    return this.menu.filter((menuItem) => menuItem.isDrink);
  }

  get getRandom(): any {
    return this.menu.filter((menuItem) => !menuItem.isDrink && !menuItem.isHamburguer && !menuItem.isDessert);
  }

  constructor(
    private readonly cartService:  CartService,
  ) {}

  openModal(item: any): void {
    this.activeItem = item;
    this.modalVisible = true;
  }

  incrementValue() {
    this.value = this.value + 1;
  }

  decrementValue() {
    if (this.value === 0) return;

    this.value = this.value - 1;
  }

  addToCart(): void {
    this.activeItem['quantity'] = this.value;
    this.cartService.addToCart(this.activeItem);
    this.closeModal();
  }

  closeModal(): void {
    this.modalVisible = false;
    this.value = 1;
  }
}
