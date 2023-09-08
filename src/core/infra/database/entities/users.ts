import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import IUsers from '../../../../features/users/domain/model/usersInterface'
import Notes from './notes'

@Entity({ name: 'users', schema: 'notes-app' })
export default class Users implements IUsers {
  @PrimaryColumn({
    type: 'uuid',
  })
  uid: string

  @Column()
  name: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @OneToMany(() => Notes, (note) => note.user_uid)
  notes: Notes[]
}
