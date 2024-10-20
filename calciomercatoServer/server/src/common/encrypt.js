import bcrypt from 'bcrypt'

const encrypt = {
  SALT_ROUNDS: 12,

  async hash(plaintext) {
    return await bcrypt.hash(plaintext, this.SALT_ROUNDS)
  },

  async compare(plaintext, hashed) {
    return await bcrypt.compare(plaintext, hashed)
  },
}

export default encrypt
