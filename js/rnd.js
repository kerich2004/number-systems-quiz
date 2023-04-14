export { rnd }

function rnd(...args) {
  if (Array.isArray(args[0])) {
    const [arr] = args

    return arr[Math.floor(Math.random() * arr.length)]
  } else {
    const [min, max] = args

    return Math.floor(Math.random() * (max - min) + min)
  }

}