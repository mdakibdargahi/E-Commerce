import React from "react";
import { Button, Modal } from "flowbite-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useModalState } from "../misc/helper";
import Cart from "./Cart";

const CartModal = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <React.Fragment>
      <button
        className="bg-purple-500 flex items-center px-3 py-2 rounded-lg text-white font-semibold hover:bg-purple-600"
        onClick={open}
      >
        <span className="mx-2">Cart</span>
        <AiOutlineShoppingCart className="text-xl" />
      </button>
      <Modal show={isOpen} onClose={close} classNames={{ modal: "cart-modal" }}>
        <Modal.Header className="bg-purple-500 text-white" onClose={close}>
          Shopping Cart
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button color="purple" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
