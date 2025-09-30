document.addEventListener("DOMContentLoaded", () => {
   alert("Welcome to Enock_Smart_Hub! 🚀 Find your dream phone today.");
  if (purchaseForm) {
    purchaseForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const phoneModel = document.getElementById("phoneModel").value;
      document.getElementById("purchaseMessage").textContent = `Thank you ${name}, your order for ${phoneModel} has been placed successfully!`;
      purchaseForm.reset();
    });
  }
  

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const cname = document.getElementById("cname").value;
      document.getElementById("contactMessage").textContent = `Thanks ${cname}, we will respond to your message soon.`;
      contactForm.reset();
    });
  }

  const deliveryForm = document.getElementById("deliveryForm");
  if (deliveryForm) {
    deliveryForm.addEventListener("submit", e => {
      e.preventDefault();
      const orderId = document.getElementById("orderId").value;
      document.getElementById("deliveryMessage").textContent = `Order ${orderId} is being processed.`;
      deliveryForm.reset();
    });
  }
});
