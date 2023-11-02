const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    try {
      const categories = await Category.findAll({
        include: [{model: Product,}],
      });
      res.json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

router.get('/:id', async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
          },
        ],
      });
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json(category);
    } catch (error) {
      res.status(500).json(error);
    }
});
  

router.post('/', async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(400).json({ message: 'Unable to post' });
    }
});
  

router.put('/:id', async (req, res) => {
    try {
      const [updatedRows] = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updatedRows === 0) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json({ message: 'Category updated successfully' });
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

router.delete('/:id', async (req, res) => {
    try {
      const deletedRows = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deletedRows === 0) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json(error);
    }
});
  

module.exports = router;