var compose = (a, b) => c => a(b(c))

export { compose }
