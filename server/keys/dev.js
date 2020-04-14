module.exports = {
  DB_URI: 'mongodb+srv://testuser:g-hkl^jit[[@cluster0-hlckz.mongodb.net/promo-db?retryWrites=true&w=majority',
  SESSION_SECRET: 'dasd786!@?sad76'
}
exports.connect = function () {
  return mongoose.connect(
    keys.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => console.log('DB Connected!'))
    .catch(err => console.log(err));
}
