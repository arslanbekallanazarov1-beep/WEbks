class PaymentStrategy {
  pay(amount) {}
}

class CardPayment extends PaymentStrategy {
  pay(amount) {
    return "Card payment: " + amount;
  }
}

class CashPayment extends PaymentStrategy {
  pay(amount) {
    return "Cash payment: " + amount;
  }
}

function executePayment(type, amount) {
  let strategy;

  if (type === "card") strategy = new CardPayment();
  else strategy = new CashPayment();

  return strategy.pay(amount);
}