const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema(
  {
    name: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      type: String,
      required: [true, 'Please add a name value']
    },
    description: {
      type: String,
      required: [true, 'Please add a description value']
    },    
    ingredients: {
      type: String,
      required: [true, 'Please add a ingredient values']
    },
    steps: {
      type: String,
      required: [true, 'Please add steps values']
    },
    category: {
      type: String,
      required: [true, 'Please add a category value']      
    }
  }, 
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Recipe', recipeSchema);