/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('/posts', [PostsController, 'index'] )
router.post('/posts', [PostsController, 'store'])
router.get('/posts/:id', [PostsController, 'show'])
router.put('/posts/:id', [PostsController, 'update'])
