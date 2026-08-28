import React, { createContext, useContext, useState, useMemo, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [note, setNote] = useState('')

  const addItem = useCallback((p) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.id === p.id)
      return ex
        ? prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...p, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const updateQty = useCallback((id, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0)
    ), [])

  const removeItem = useCallback((id) =>
    setItems((prev) => prev.filter((i) => i.id !== id)), [])

  const clear = useCallback(() => { setItems([]); setNote('') }, [])

  const totalCount = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items])
  const totalPrice = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items])

  return (
    <CartContext.Provider value={{
      items, addItem, updateQty, removeItem, clear,
      isOpen, setOpen: setIsOpen, totalCount, totalPrice, note, setNote
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}