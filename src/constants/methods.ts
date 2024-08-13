import BankIcon from "@/assets/icons/bank.svg"
import CardIcon from "@/assets/icons/card.svg"

export const payments = [
  {
    label: "Debit / Credit Card",
    icon: CardIcon,
  },
  {
    label: "Virtual account",
    icon: BankIcon,
  },
]

export const shippings = [
  {
    label: "Free shipping",
    description: "7-30 business days",
    price: "$0",
  },
  {
    label: "Regular shipping",
    description: "3-14 business days",
    price: "$7.50",
  },
  {
    label: "Express shipping",
    description: "1-3 business days",
    price: "$22.50",
  },
]
