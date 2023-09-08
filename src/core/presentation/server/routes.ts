import express, { Router, Request, Response } from 'express'
import NotesRoutes from '../../../features/notes/presentation/routes/notesRoutes'
import UsersRoutes from '../../../features/users/presentation/routes/usersRoutes'
import { ok, serverError } from '../helpers/httpHandlers'

export const makeRoutes = (app: express.Application) => {
  const router = Router()

  app.use('/users', UsersRoutes.initRoutes())
  app.use('/notes', NotesRoutes.initRouter())
  app.use(
    '/',
    router.get('/', (_, res: Response) => {
      try {
        return ok(res, 'ok')
      } catch (error) {
        return serverError(res, 'Falha!', error)
      }
    })
  )
}
