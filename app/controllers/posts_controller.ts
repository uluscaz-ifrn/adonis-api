import Post from '#models/post';
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {

    async index({response}: HttpContext) {
        const posts = await Post.all()
        return response.json(posts)
      }
    
      async store({request, response}: HttpContext) 
      {
        const {title, content} = request.only(['title', 'content']);
        const newPost = await Post.create({title, content})
        return response.status(201).json(newPost)
      }

      async update({request, params, response}:HttpContext)
      {
        const data = request.only(['title', 'content']);
        const post = await Post.find(params.id);

        if (!post) {
          return response.status(404).json({ message: 'Post não encontrado' })
        } else{
          post.merge(data);
          await post.save();
          return response.status(201).json({ message: 'Post atualizado' })
        }
      }

      async show({params, response}: HttpContext) {
        const post = await Post.find(params.id);

        
        return response.json(post);
      }
}