export const normalizeData = (items) => items.reduce((acc, item) => ({...acc, [item.id]: item}), {})
export const formatPrice = (price) => `$${price} / m2`
