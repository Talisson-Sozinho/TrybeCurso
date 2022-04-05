const order = {
  name: "Luiz Silva",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 20,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const clientName = order.name;
  const clientPhoneNumber = order.phoneNumber;
  const clientAddress = order.address;

  const customText = `Olá ${deliveryPerson}, entrega para: ${clientName}, Telefone: ${
    clientPhoneNumber}, R. ${clientAddress.street}, Nº: ${clientAddress.number}, AP: ${
    clientAddress.apartment}.`

  return customText;
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

  const clientName = order.name;
  const pizzas = Object.keys(order.order.pizza).join(', ');
  const drinks = order.order.drinks.coke.type;
  const finalPrice = order.payment.total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  const customText = `Olá ${clientName}, o total do seu pedido de ${pizzas} e ${
    drinks} é ${finalPrice}.`

  return customText;
};

console.log(orderModifier(order));
