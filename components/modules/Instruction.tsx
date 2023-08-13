
const Instruction = () => {
  return (
    <div className="mb-[100px]">
      <h3 className="text-lg text-header font-bold my-6">How to Order?</h3>
      <ul className="p-0">
        <li className="text-lg font-medium leading-8 list-disc">Sign in (or create an account) and set your delivery address.</li>
        <li className="text-lg font-medium leading-8 list-disc">Choose the restaurant you want to order from.</li>
        <li className="text-lg font-medium leading-8 list-disc">Select your items and tap “Add to Cart”.</li>
        <li className="text-lg font-medium leading-8 list-disc">To place your order, select “View cart” or “Checkout”.</li>
        <li className="text-lg font-medium leading-8 list-disc">Review your order and tap “Place Order”...</li>
        <li className="text-lg font-medium leading-8 list-disc">Track your order progress.</li>
      </ul>
    </div>
  );
}

export default Instruction;