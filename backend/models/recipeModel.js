const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value']
    }
  }, 
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Recipe', recipeSchema);