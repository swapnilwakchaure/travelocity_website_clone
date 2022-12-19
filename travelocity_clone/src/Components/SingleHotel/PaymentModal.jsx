import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalCloseButton, ModalContent, ModalOverlay, ModalFooter, Flex } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react'
import ModalBody1 from './ModalBody1';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PaymentModal() {

  let  price= 360
   let name = "St.Regis Mumbai"
  
  // let price = 320;
  // let name = "St.Regis Mumbai"
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const AddLocal = (name, price) => {
    
    let hotelObj = {
      name,
      price
    }
    localStorage.setItem("Hotel_Data", JSON.stringify(hotelObj))
  }
  return (
    <>
      <Button mr={2} mt={-2} mb={2} bg={'blue'} color='white' colorScheme={'blue.300'} onClick={onOpen}>Reserve</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Option</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalBody1 />
          </ModalBody>
          <ModalFooter>
            <Flex>
              <Link to="/checkout">
              <Button bg={'blue'} color='white' colorScheme={'blue.300'} mr={5} onClick={() => { AddLocal(price,name); onClose(); navigate("/page") }}>Pay Now</Button>
              </Link>
              <Button bg={'blue'} color='white' colorScheme={'blue.300'} onClick={onClose}>Close</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PaymentModal
